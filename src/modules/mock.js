/* eslint-disable max-classes-per-file */

class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }
}

const taskList = document.querySelector('.list');
function renderList(task) {
  let completedStatus = '';
  let checkboxStatus = '';
  if (task.completed) {
    completedStatus = 'completed';
    checkboxStatus = 'checked';
  }
  taskList.innerHTML += `
  <li class='listItem borderBottom' id="${task.index - 1}" >
    <div class="inputEntry">
      <input type="checkbox" name="" id="checkbox" ${checkboxStatus}>
      <p class="taskDescription ${completedStatus}" id="label">${task.description}</p>
      <input type="text" id="editInput" class="hide">      
    </div>
    <i class="fa-solid fa-pen-to-square" id="edit"></i> 
    <i class="fa-solid fa-floppy-disk hide" id="save"></i>
    <i class="fa-solid fa-trash" id="delete"></i>    
  </li>
  `;
}

class Storage {
  getLocalStore = () => {
    const myTasks = JSON.parse(localStorage.getItem('MyTasks'));
    return myTasks;
  }

  updateLocalStore = (myTasks) => {
    localStorage.setItem('MyTasks', JSON.stringify(myTasks));
  }
}

class List {
  constructor() {
    this.myTasks = [];
    this.store = new Storage();
  }

  updateLocalStore() {
    this.store.updateLocalStore(this.myTasks);
  }

  displayTasks() {
    this.myTasks.forEach((task) => {
      renderList(task);
    });
  }

  addTask() {
    const todoInput = document.querySelector('.listInput');
    const description = todoInput.value;
    const newTask = new Task(description, this.myTasks.length + 1);
    renderList(newTask);
    this.myTasks.push(newTask);
    this.updateLocalStore();
  }

  updateTask(index, newDescription) {
    this.myTasks[index].description = newDescription;
    this.updateLocalStore();
  }

  deleteTask(index) {
    this.myTasks.splice(index, 1);
    this.updateIndex();
    taskList.innerHTML = '';
    this.displayTasks();
  }

  updateIndex() {
    this.myTasks.forEach((task, index) => {
      task.index = index + 1;
    });
    this.updateLocalStore();
  }

  restoreList() {
    if (!localStorage.getItem('MyTasks')) {
      this.store.updateLocalStore(this.myTasks);
      this.myTasks = this.store.getLocalStore();
    } else {
      this.myTasks = this.store.getLocalStore();
    }
    this.displayTasks();
  }

  markComplete(index, value) {
    this.myTasks[index].completed = value;
    this.updateLocalStore();
  }

  clearComplete() {
    this.myTasks = this.myTasks.filter((element) => !element.completed);
    this.updateIndex();
    taskList.innerHTML = '';
    this.displayTasks();
  }
}

module.exports = List;
