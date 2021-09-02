class View {
  constructor() {
    this.model = null;
    this.table = document.getElementById("table");
    this.btnAdd = document.getElementById("add");
    
  }

  setModel(model) {
    this.model = model;
  }

  addTodo(title, description) {}
}
