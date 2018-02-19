var ToDoItem = Backbone.Model.extend({
  validate: function(attrs){
    if(!attrs.description)
      return "Description is required.";
  }
});
