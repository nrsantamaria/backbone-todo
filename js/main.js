$(document).ready(function(){
  var todoItems = new ToDoItems();
  todoItems.fetch();

  var toDoItemsView = new ToDoItemsView({ model: todoItems });

  $("body").append(toDoItemsView.render().$el)
});
