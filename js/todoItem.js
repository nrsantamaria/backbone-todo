var ToDoItem = Backbone.Model.extend({
  defaults: {
    isCompleted: false
  },

  url: "fakeURL",

  validate: function(attrs){
    if(!attrs.description)
      return "Description is required.";
  },

  toggle: function(){
      this.set("isCompleted", !this.get("isCompleted"));
      //whatever value the isCompleted property has we get it we invert it and then store it back in itself
  }
});
