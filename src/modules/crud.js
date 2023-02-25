import Storage from './storage.js';
import { taskList, renderList } from './render.js';
import Task from './task.js';

export default class List {
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