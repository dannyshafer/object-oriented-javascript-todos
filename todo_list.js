function Task(id, description) {
  this.id = id;
  this.description = description;
  this.completed = false;

  this.complete = function() {
    this.completed = true;
  };
}


var TodoList = function() {
        this.tasks = [];
        var id = this.tasks.length + 1;
        this.add = function(description) {
            var a = new Task(id, description);
            this.tasks.push(a);
            id++;
        };
        this.list = function() {
          for(var i=0;i< this.tasks.length;i++) {
            console.log(this.tasks[i].description);
          }
        };
        this.remove = function(i) {
            delete this.tasks[i];
        };
};

// // Driver code

// var groceryList = new TodoList(1, 'cheese')

// console.log(groceryList)



// // Driver code


// var todoList = newTodoList();
