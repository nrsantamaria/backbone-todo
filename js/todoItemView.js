var ToDoItemView = Backbone.View.extend({
  tagName: "li",

  initialize: function(options){
    if(!(options && options.model))
      throw new Error("model is not specified");
  },

  render: function(){
    this.$el.html(this.model.escape("description"));
    //escape is like the get method but it also html encodes the return value so you cant hack the text box with javascript code
    return this;
  }
})
