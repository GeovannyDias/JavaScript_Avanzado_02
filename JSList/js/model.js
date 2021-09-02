class Model {
  constructor() {
    this.view = null;
    this.todos = [];
  }

  setView(view) {
    this.view = view;
  }

  getTodos() {
    return this.todos;
  }

  addTodos(title, description) {
    console.log(title, description);
  }
}