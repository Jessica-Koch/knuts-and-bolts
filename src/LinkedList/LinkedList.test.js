const LinkedList = require('./LinkedList');

describe('LinkedLists', () => {
  beforeEach(() => {
    list = new LinkedList()
  });
  test('starts out empty', () => {
    expect(list.length).toBe(0);
    expect(list.tail).toBeUndefined();
    expect(list.head).toBeUndefined();
  });
  
  test('it should be able to add a single item to the list', () => {
    list.addToHead(100);
    list.addToHead(200);
    console.log('listlen', list)
    expect(list.length).toBe(2);
  })
})