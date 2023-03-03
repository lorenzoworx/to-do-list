/**
 * @jest-environment jsdom
 */
import List from "../crud";

describe('Edit Items in list', () => {
  test('Edited task textContent should be equal to updated description', () => {
    document.body.innerHTML = '<div>'
    + '  <ul class="list"></ul>'
    + '</div>';
    const testdescription = 'test';
    const myList = new List();
    // Add test task
    myList.addTask(testdescription);
    const index = document.querySelector('.listItem').id;
    // Update test task
    const newDescription = 'Test is updated';
    myList.updateTask(index, newDescription);
    myList.displayList();
    const description = document.getElementById('label');
    expect(description.textContent).toBe(newDescription);
  });
});