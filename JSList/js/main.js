// "use strict" es una directiva que define que el código JavaScript debe ejecutarse en "modo estricto".
"use strict";
import Model from './model.js';
import View from './view.js';

document.addEventListener("DOMContentLoaded", () => {
  // code ...
  const model = new Model();
  const view = new View();
  model.setView(view);
  view.setModel(model);

});
