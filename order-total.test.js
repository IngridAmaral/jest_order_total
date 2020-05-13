const orderTotal = require('./order-total');

test('orderTotal function exists', () => {
    expect(orderTotal).toBeDefined();
});

test('the quantity is bigger than 1(default)', () => {
    expect(orderTotal({
        items: [
          { 'name': 'Dragon candy', price: 2, quantity: 3 }
        ]
      })).toBe(6);
});
