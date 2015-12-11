// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',function(){
      if(this.length ===1){
        this.playFirst()
      }
    },this)

    this.on('ended', function(){
      this.remove(this.at(0));
        if(this.length>0){
      this.playFirst();
        }
    },this)

    this.on('dequeue',function(song){
      if(song === this.at(0)){
        this.remove(song);
          if(this.length>0){
            this.playFirst();
          }
      } else {
        this.remove(song);
      }
    })

     // this.on('enqueue', function(song){
     //   console.log('SQ.js')
     //   console.log(this.get(song))
     //   this.add(song);
     // })
  },

  playFirst : function(){
    this.at(0).play()
  }
});
