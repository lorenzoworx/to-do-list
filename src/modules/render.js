const taskList = document.querySelector('.list');
function renderList(task, render = false) {
  const taskList = document.querySelector('.list');

  if (render) {
    taskList.innerHTML = '';
  }
  let completedStatus = '';
  let checkboxStatus = '';
  if (task.completed) {
    completedStatus = 'completed';
    checkboxStatus = 'checked';
  }
  if (task) {
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
}

export { taskList, renderList };