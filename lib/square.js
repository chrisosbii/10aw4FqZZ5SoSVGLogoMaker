const Shape = require('./shape.js');

class Square extends Shape {
    constructor() {
        super();
        this.type = "rect";
        this.cookBook = 'x="65" y="25" width="164" height="164"';
        this.fill = "transparent";
    }
}

module.exports = Square;