var ToDoItemsView = Backbone.View.extend({
  tagName: "ul",

  id: "todoItems",

  initialize: function(options){
    if(!(options && options.model))
      throw new Error("model is not specified");
  },

  render: function(){
    var self = this;

    this.model.each(function(toDoItem){
      var view = new ToDoItemView({ model: toDoItem });

      self.$el.append(view.render().$el);
    });
    return this;
  }

});
