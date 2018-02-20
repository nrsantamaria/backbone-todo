var ToDoItemView = Backbone.View.extend({
  tagName: "li",

  initialize: function(options){
    if(!(options && options.model))
      throw new Error("model is not specified");
    this.model.on("change", this.render, this);
  },

  events: {
    "click #toggle": "onClickToggle"
  },

  onClickToggle: function(){
    this.model.toggle();
  },

  render: function(){
    this.$el.toggleClass("completed", this.model.get("isCompleted"));

    var checked = this.model.get("isCompleted") ? "checked": "";//first get the value of the isCompleted property, and if its checked, render a checked attribute in the input below

    this.$el.html("<input id='toggle' type='checkbox'"   + checked + "></input>" + this.model.escape("description"));
    //escape is like the get method but it also html encodes the return value so you cant hack the text box with javascript code
    return this;
  }
})
