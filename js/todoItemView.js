var ToDoItemView = Backbone.View.extend({
  tagName: "li",

  initialize: function(options){
    if(!(options && options.model))
      throw new Error("model is not specified");
    this.model.on("change", this.render, this);
  },

  events: {
    "click #toggle": "onClickToggle",
    "click #delete": "onClickDelete"
  },

  onClickDelete: function(){
    this.model.destroy();
  },

  onClickToggle: function(){
    this.model.toggle();
    this.model.save();
  },

  render: function(){
    this.$el.attr("id", this.model.id);
    this.$el.toggleClass("completed", this.model.get("completed"));

    var checked = this.model.get("completed") ? "checked": "";//first get the value of the isCompleted property, and if its checked, render a checked attribute in the input below

    this.$el.html("<input id='toggle' type='checkbox'"   + checked + "></input>" + this.model.escape("title") + "<button id='delete'>X</button>");
    //escape is like the get method but it also html encodes the return value so you cant hack the text box with javascript code
    return this;
  }
})
