const shape = require('./shape.js');

class square extends shape {
    constructor() {
        super();
        this.type = "rect";
        this.cookBook = 'x="65" y="25" width="164" height="164"';
        this.fill = "transparent";
    }
    render() {
        return `<${this.type} ${this.cookBook} fill="${this.fill}"/>`
      }
}

module.exports = square;