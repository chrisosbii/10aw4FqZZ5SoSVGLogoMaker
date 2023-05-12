const Shape = require('./shape.js');

class Circle extends Shape {
    constructor() {
        super();
        this.type = "circle";
        this.cookBook = 'cx="150" cy="100" r="80"';
        this.fill = "transparent";
    }
}

module.exports = Circle;
