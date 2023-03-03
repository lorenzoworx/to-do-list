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

  test('Remove one item from the list', () => {
    document.body.innerHTML = '<div>'
      + '  <ul class="list"></ul>'
      + '</div>';
    const myList = new List();
    myList.addTask('wash dishes');
    myList.addTask('clean the house');
    myList.deleteTask(1);
    const list = document.querySelectorAll('.list li');
    expect(list).toHaveLength(1);
  });
});