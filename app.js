// ADDING TODOS
const addTodo = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

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

// DELETING TODOS
todos.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// FILTERING AND SEARCHING
const filteredTodos = term => {
  Array.from(todos.children)
    .filter(todo => !todo.textContent.includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  Array.from(todos.children)
    .filter(todo => todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
  const term = search.value.trim();
  filteredTodos(term);
});
