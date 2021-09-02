// "use strict" es una directiva que define que el código JavaScript debe ejecutarse en "modo estricto".
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // const btnAdd = document.querySelector('#add');
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const table = document.getElementById("table");
  const alert = document.getElementById("alert");
  const btnAdd = document.getElementById("add");
  let id = 1;

  // ADD DATA
  // btnAdd.onclick = addTodo;
  btnAdd.addEventListener("click", () => {
    console.log("btnAdd:", title.value, description.value);
    addTodo();
  });

  // CREATE ROW
  function addTodo() {
    if (title.value && description.value) {
      console.log("OK");
      alert.classList.add("d-none");
      const row = table.insertRow();
      row.setAttribute("id", id++);
      row.innerHTML = `
                <td>${title.value}</td>
                <td>${description.value}</td>
                <td class="text-center">
                  <input type="checkbox" />
                </td>
                <td class="text-right">
                  <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                  </button>
                  
                </td>
      `;
      const btnRemove = document.createElement("button");
      btnRemove.classList.add("btn", "btn-danger", "mb-1", "ml-1");
      btnRemove.innerHTML = '<i class="fa fa-trash"></i>';
      btnRemove.onclick = function (e) {
        // console.log("Delete row", e.target.parentNode);
        removeTodo(row.getAttribute('id'));
      };
      //   console.log('Remove:', row.children[3]);
      row.children[3].appendChild(btnRemove);
    } else {
      //   console.error("ERROR: Title and Description are required");
      alert.classList.remove("d-none");
      alert.innerText = "Title and Description are required";
    }
  }

  // REMOVE ROW
  function removeTodo(id) {
    // console.log("Remove Todo:", id);
    document.getElementById(id).remove();
  }

  //
});
