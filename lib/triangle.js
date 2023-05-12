const triangle = require('./shape.js');

class square extends shape {
    constructor() {
        super();
        this.type = "polygon";
        this.cookBook = 'points="150, 18 244, 182 56, 182"';
        this.fill = "transparent";
    }
    render() {
        return `<${this.type} ${this.cookBook} fill="${this.fill}"/>`
    }
}

module.exports = triangle;