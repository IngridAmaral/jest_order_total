const orderTotal = require("./order-total");

test("orderTotal function exists", () => expect(orderTotal).toBeDefined());

test("quantity specif", () =>
  expect(
    orderTotal({
      items: [{ name: "Dragon candy", price: 2, quantity: 3 }],
    })
  ).toBe(6));

test("quantity NOT specified", () =>
  expect(
    orderTotal({
      items: [{ name: "Dragon candy", price: 2 }],
    })
  ).toBe(2));

test("Adds 2 + 800 to equal 802", () =>
  expect(
    orderTotal({
      items: [
        { name: "Dragon candy", price: 2, quantity: 1 },
        { name: "Dragon cage", price: 800, quantity: 1 },
      ],
    })
  ).toBe(802));

test("Adds 20 + 40 to equal 60", () =>
  expect(
    orderTotal({
      items: [
        { name: "Dragon candy", price: 20, quantity: 1 },
        { name: "Dragon cage", price: 40, quantity: 1 },
      ],
    })
  ).toBe(60));
