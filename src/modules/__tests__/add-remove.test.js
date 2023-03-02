/**
 * @jest-environment jsdom
 */
import List from '../crud.js';

describe('addTask', () => {  
  test('Add one new item to the list', () => {
    document.body.innerHTML = '<div>'
      + '  <ul class="list"></ul>'
      + '</div>';
    const myList = new List();
    myList.addTask('wash dishes');
    const list = document.querySelectorAll('.list li');
    expect(list).toHaveLength(1);
  });

});

// describe('deleteTask', () => {
//   beforeEach(() => {
//     const input = document.querySelector('.listInput');
//     input.value = 'New task';
//     list.addTask();
//   });

//   it('should delete a task from the list', () => {
//     list.deleteTask(0);
//     expect(list.myTasks.length).toBe(0);
//     expect(document.querySelectorAll('.listItem').length).toBe(0);
//   });

//   it('should update local storage after deleting task', () => {
//     list.deleteTask(0);
//     expect(localStorage.getItem('MyTasks')).toEqual(JSON.stringify(list.myTasks));
//   });
// });
// });
