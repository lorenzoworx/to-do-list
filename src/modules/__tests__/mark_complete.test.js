/**
 * @jest-environment jsdom
 */
import List from "../crud";

describe('Mark Completed', () => {
  test('Completed task set to true', () => {
    document.body.innerHTML = '<div>'
    + '  <ul class="list"></ul>'
    + '</div>';
    const testObj = {
      index: 0,
      description: 'test',
      completed: false,
    };
    const myList = new List();
    // Add test
    myList.addTask(testObj);

    // Mark test as Complete
    const completed = true;
    myList.markComplete(testObj.index, completed);
    myList.displayTasks();// Update html.
    const checkbox = document.getElementById('checkbox');

    expect(checkbox.checked).toBe(completed);
  });
});