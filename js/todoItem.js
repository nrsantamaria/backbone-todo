var ToDoItem = Backbone.Model.extend({
  defaults: {
    completed: false
  },

  urlRoot: "http://jsonplaceholder.typicode.com/todos",

  validate: function(attrs){
    if(!attrs.title)
      return "Title is required.";
  },

  toggle: function(){
      this.set("completed", !this.get("completed"));
      //whatever value the isCompleted property has we get it we invert it and then store it back in itself
  }
});
