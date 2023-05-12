const shape = require('./shape.js');

class circle extends shape {
    constructor() {
        super();
        this.type = "circle";
        this.cookBook = 'cx="150" cy="100" r="80"';
        this.fill = "transparent";
    }
}

module.exports = circle;