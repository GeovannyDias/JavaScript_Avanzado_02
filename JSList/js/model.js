export default class Model {
  constructor() {
    this.view = null;
    this.todos = [];
    this.id = 1;
  }

  setView(view) {
    this.view = view;
  }

  getTodos() {
    return this.todos;
  }

  addTodoModel(title, description) {
    console.log('Model:',title, description);
    const todo = {
        id: this.id++,
        title,
        description,
        completed: false
    }
    this.todos.push(todo);
  }

}
