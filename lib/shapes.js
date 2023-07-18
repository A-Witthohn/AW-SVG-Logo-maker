class Shape {
    constructor() {
      this.color = 'black';
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
        super(textColor, shapeColor);
        this.text = text;
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(textColor, shapeColor);
        this.text = text;
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(textColor, shapeColor);
        this.text = text;
    render() {
      return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };