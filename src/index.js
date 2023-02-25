import './style.css';
import List from './modules/crud.js';
import setStatus from './modules/status.js';

const newList = new List();
newList.restoreList();
const todosInput = document.querySelector('.listInput');
const addTaskBtn = document.querySelector('.inputButton');

const taskList = document.querySelector('.list');

todosInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (todosInput.value) {
      newList.addTask();
    }
    todosInput.value = '';
  }
});

addTaskBtn.addEventListener('click', (e) => {
  if (e.target.previousElementSibling.value) {
    newList.addTask();
  }
  todosInput.value = '';
});

taskList.addEventListener('click', (e) => {
  if (e.target.id === 'edit') {
    e.target.classList.add('hide');
    e.target.nextElementSibling.classList.remove('hide');

    const label = [...e.target.previousElementSibling.children];
    label.forEach((element) => {
      if (element.id === 'label') {
        element.classList.add('hide');
      } else if (element.id === 'editInput') {
        element.classList.remove('hide');
        element.value = element.previousElementSibling.textContent;
        element.classList.focus();
      }
    });
  } else if (e.target.id === 'save') {
    e.target.classList.add('hide');
    e.target.previousElementSibling.classList.remove('hide');

    const label = [...e.target.previousElementSibling.previousElementSibling.children];
    label.forEach((element) => {
      if (element.id === 'label') {
        element.classList.remove('hide');
        element.textContent = element.nextElementSibling.value;
        newList.updateTask(element.parentNode.parentNode.id, element.nextElementSibling.value);
      } else if (element.id === 'editInput') {
        element.classList.add('hide');
      }
    });
  } else if (e.target.id === 'delete') {
    const li = e.target.parentNode;
    const index = li.querySelector('.inputEntry').id;
    newList.deleteTask(index);
  }
});

taskList.addEventListener('change', (e) => {
  if (e.target.id === 'checkbox') {
    const index = setStatus(e);
    if (e.target.checked) {
      e.target.nextElementSibling.classList.add('completed');
    } else {
      e.target.nextElementSibling.classList.remove('completed');
    }
    newList.markComplete(index, e.target.checked);
  }
});
const clearCompleted = document.querySelector('.clearBtn');
clearCompleted.addEventListener('click', (e) => {
  e.preventDefault();
  newList.clearComplete();
});
