const taskList = document.querySelector('.list');
function renderList(task) {
  taskList.innerHTML += `
  <li class='listItem borderBottom' id="${task.index - 1}" >
    <div class="inputEntry">
      <input type="checkbox" name="" id="">
      <p class="taskDescription" id="label">${task.description}</p>
      <input type="text" id="editInput" class="hide">      
    </div>
    <i class="fa-solid fa-pen-to-square" id="edit"></i> 
    <i class="fa-solid fa-floppy-disk hide" id="save"></i>
    <i class="fa-solid fa-trash" id="delete"></i>    
  </li>
  `;
}

export { taskList, renderList };