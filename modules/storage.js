export default class Storage {
  getLocalStore = () => {
    const myTasks = JSON.parse(localStorage.getItem('MyTasks'));
    return myTasks;
  }

  updateLocalStore = (myTasks) => {
    localStorage.setItem('MyTasks', JSON.stringify(myTasks));
  }
}
