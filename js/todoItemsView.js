var ToDoItemsView = Backbone.View.extend({
  tagName: "ul",

  id: "todoItems",

  initialize: function(options){
    if(!(options && options.model))
      throw new Error("model is not specified");

    this.model.on("add", this.onAddTodoItem, this);
  },

  onAddTodoItem: function(todoItem){
    var view = new ToDoItemView({model: todoItem});
    this.$el.append(view.render().$el);
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
      var todoitem = new ToDoItem({ description: $textbox.val() });
      this.model.add(todoitem);
      $textbox.val("");
    }
  },

  render: function(){
    var self = this;
    this.$el.append("<input type='text' id='newToDoItem' autofocus></input>");
    this.$el.append("<button id='add'>Add</button>");

    this.model.each(function(toDoItem){
      var view = new ToDoItemView({ model: toDoItem });

      self.$el.append(view.render().$el);
    });
    return this;
  }

});
