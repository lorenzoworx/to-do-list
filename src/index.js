// dom selectors
const todoInput = document.querySelector('.listInput');
const inputButton = document.querySelector('.inputButton');
const todoList = document.querySelector('.list');
class ListItem {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
const list = [];

// function declarations
const addTodo = (event) => {
  event.preventDefault();
  let description = todoInput.value;
  let completed = false;
  let index;
  let len = list.length; 
  if (len === 0) {
    index = 0;
  } else {
    index = len - 1;
  }

  list.push(new ListItem(description, completed, index));
  const todoItem = `
  <li class="borderBottom listItem">
  <div>
      <input type="checkbox" name="" id="">
      <span>${description}</span>                        
  </div>
  <span class="fa-solid fa-ellipsis-vertical"></span>
</li>
  `;
  todoList.innerHTML += todoItem;
  todoInput.value = '';
};

const saveTodo = (todo) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}

// event listeners
inputButton.addEventListener('click', addTodo);
