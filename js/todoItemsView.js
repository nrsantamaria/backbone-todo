var ToDoItemsView = Backbone.View.extend({
  id: "todoItemsContainer",
  
  initialize: function(options){
    if(!(options && options.model))
      throw new Error("model is not specified");

    this.model.on("add", this.onAddTodoItem, this);
    this.model.on("remove", this.onRemoveTodoItem, this);
  },

  onRemoveTodoItem: function(todoItem){
    this.$("li#" + todoItem.id).remove();
  },

  onAddTodoItem: function(todoItem){
    var view = new ToDoItemView({model: todoItem});
    this.$("#todoItems").append(view.render().$el);
  },

  events: {
    "click #add": "onClickAdd",
    "keypress #newToDoItem": "onKeyPress"
  },

  onKeyPress: function(e){
    if(e.keyCode == 13)
      this.onClickAdd();
  },

  onClickAdd: function(){
    var $textbox = this.$("#newToDoItem");
    if($textbox.val()){
      var todoitem = new ToDoItem({ title: $textbox.val() });
      this.model.create(todoitem);
      $textbox.val("");
    }
  },

  render: function(){
    var template = $("#todoItemsTemplate").html();
    var html = Mustache.render(template);
    this.$el.html(html);

    return this;
  }

});
