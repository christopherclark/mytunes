// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    console.log("song model play method")
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue : function(){
      console.log('from the song model')
      this.trigger('enqueue', this);
  },
  dequeue : function(){
      this.trigger('dequeue', this);
  },
  ended : function(){
      this.trigger('ended', this);
  },
  removeFromQueue : function(){
      this.trigger('removeFromQueue',this)
  }

});
