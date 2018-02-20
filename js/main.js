$(document).ready(function(){
  var toDoItems = new ToDoItems([
    new ToDoItem({ id: 1, description: "To Do Item 1"}),
    new ToDoItem({ id: 2, description: "To Do Item 2"})
  ]);

  var toDoItemsView = new ToDoItemsView({ model: toDoItems });

  $("body").append(toDoItemsView.render().$el)
});
