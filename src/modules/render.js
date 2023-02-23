const taskList = document.querySelector('.list');
function renderList(task) {
  taskList.innerHTML = `
  <li class='listItem borderBottom'>
    <div class="inputEntry">
      <input type="checkbox" name="" id="">
      <p>${task.description}</p>      
    </div>
    <i class="fa-solid fa-trash"></i>
    <i class="fa-solid fa-ellipsis-vertical"></i>  
  </li>
  `;
}

export { taskList, renderList };