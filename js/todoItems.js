var ToDoItems = Backbone.Collection.extend({
  model: ToDoItem,

  url: "http://jsonplaceholder.typicode.com/todos"
});
