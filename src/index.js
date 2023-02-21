import './style.css';

let MyTasks = [
  { todoEntry: 'wash plates', index: 0, completed: false},
  { todoEntry: 'wash cars', index: 1, completed: false},
  { todoEntry: 'clean office', index: 2, completed: false},
];

// functions

function addTasks() {
  const todoList = document.querySelector('.list');
  for (let i = 0; i < MyTasks.length; i++) {
    const todo = MyTasks[i];
    const listItem = document.createElement('li');
    listItem.classList.add('listItem');
    listItem.innerHTML = `
      <input type="checkbox" name="" id="">
      <p>${todo.todoEntry}</p>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    `;
    todoList.appendChild(listItem);
  }
}

// Event listeners
window.addEventListener('DOMContentLoaded', addTasks)