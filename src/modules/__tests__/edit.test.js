/**
 * @jest-environment jsdom
 */
import List from '../crud.js';

describe('Edit Items in list', () => {
  test('Edited task textContent should be equal to updated description', () => {
    document.body.innerHTML = '<div>'
     + '  <ul class="list"></ul>'
     + '</div>';
    const testdescription = 'test';
    const myList = new List();
    myList.addTask(testdescription);
    const index = document.querySelector('.listItem').id;
    const newDescription = 'Test is updated';
    myList.updateTask(index, newDescription);
    myList.displayTasks();
    const description = document.getElementById('label');
    expect(description.textContent).toBe(newDescription);
  });
});
