// ADDING TODOS
const addTodo = document.querySelector('.add');
const todos = document.querySelector('.todos');

// GENERATE TEMPLATE
const generateTemplate = todo => {
  const html = `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;

  todos.innerHTML += html;
};

addTodo.addEventListener('submit', e => {
  e.preventDefault();

  let todo = addTodo.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
  }

  // RESET FORM FIELDS
  addTodo.reset();
});
