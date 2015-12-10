// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',function(){
       if(this.length ===1){
         this.playFirst()
        }
     },this)

      this.on('ended', function(){
      	console.log('SQM ended')
        this.remove(this.at(0));
          if(this.length>0){
        this.playFirst();
          }
      },this)

      this.on('removeFromQueue',function(song){
          if(this.at(0)!==song){
              this.remove(song)
          }
      })
  },

  playFirst : function(){
    this.at(0).play()
  }

});
