const { Shape, Triangle, Circle, Square } = require('./shapes.js');

test('Triangle render test', () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle render test', () => {
  const shape = new Circle();
  shape.setColor("red");
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square render test', () => {
  const shape = new Square();
  shape.setColor("#00ff00");
  expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="#00ff00" />');
});