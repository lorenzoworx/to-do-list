/**
 * @jest-environment jsdom
 */
import List from "../crud";

describe('Edit Items in list', () => {
  test('Edited task textContent should be equal to updated description', () => {
    document.body.innerHTML = '<div>'
    + '  <ul class="list"></ul>'
    + '</div>';
    const myList = new List();
    // Add 3 test task
    myList.addTask('wash dishes');
    myList.addTask('clean the house');
    myList.addTask('am ikoote');

    // Marked as Completed
    const completed = true;
    myList.markComplete(0, completed);
    myList.markComplete(2, completed);

    // Clear all Completed task.
    myList.clearComplete();
    const list = document.querySelectorAll('.list li');

    expect(list).toHaveLength(1);
  });
});