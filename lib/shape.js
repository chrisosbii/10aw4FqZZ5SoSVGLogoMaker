class Shape {
    constructor() {
        this.type = null;
        this.cookBook = null;
        this.fill = null;
    }
    setColor(color){
        this.fill = color;
    }
    render() {
      return `<${this.type} ${this.cookBook} fill="${this.fill}"/>`
    }
  }
  
  module.exports = Shape;