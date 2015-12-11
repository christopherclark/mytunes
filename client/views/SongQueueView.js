// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

    tagName: "table",

  initialize: function() {
    this.collection.on('add',function(){
      console.log(this);
        this.render();
    },this)
    this.collection.on('remove', function(){
      console.log('SQV remove')
      this.render();
    }, this)
  },


  render: function() {
      // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
      // see http://api.jquery.com/detach/
      this.$el.children().detach();
      // var self = this.$el;
      // console.log(this.collection.models)
      // this.$el.html('<th>Playing:</th>').append(
      //   new SongQueueEntryView({model: this.collection.at(0)}).renderIndex1()
      // );
      // if(this.collection.models.length === 2){
      //   this.$el.append('<tr><td>Coming Up:</td></tr><tr>');
      // }
      this.$el.html('<th>Playing:</th>').append(
          this.collection.map(function (song, index) {
              if (index === 1) {
                  return (new SongQueueEntryView({model: song}).renderIndex1());
              } else {
                  return new SongQueueEntryView({model: song}).render();
              }
          }))
  }
    })

