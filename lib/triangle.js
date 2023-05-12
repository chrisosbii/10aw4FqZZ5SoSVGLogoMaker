const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor() {
        super();
        this.type = "polygon";
        this.cookBook = 'points="150, 18 244, 182 56, 182"';
        this.fill = "transparent";
    }
}

module.exports = Triangle;