class Shape {
    constructor() {
      this.color = 'White';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return '';
    }
  }
  
  class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
      super();
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  
    setColor(color) {
      this.shapeColor = color;
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
  }
  
  class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
      super();
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  
    setColor(color) {
      this.shapeColor = color;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(text, textColor, shapeColor) {
      super();
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  
    setColor(color) {
      this.shapeColor = color;
    }
  
    render() {
      return `<rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />`;
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };