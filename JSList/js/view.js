export default class View {
  constructor() {
    this.model = null;
    this.table = document.getElementById("table");
    const btnAdd = document.getElementById("add");
    btnAdd.onclick = () => this.addTodoView("Tit", "Desc");
  }

  setModel(model) {
    this.model = model;
  }

  addTodoView(title, description) {
    console.log("View:", title, description);
    // console.log(this.model);
    this.model.addTodoModel(title, description);
  }
}
