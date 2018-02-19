$(document).ready(function(){
  var toDoItems = new ToDoItems([
    new ToDoItem({ description: "To Do Item 1"}),
    new ToDoItem({ description: "To Do Item 2"})
  ]);

  var toDoItemsView = new ToDoItemsView({ model: toDoItems });

  $("body").append(toDoItemsView.render().$el)
});
