const shape = require('./shape.js');

class square extends shape {
    constructor() {
        super();
        this.type = "rect";
        this.cookBook = 'x="18" y="56" width="164" height="164"';
        this.fill = "transparent";
    }
}

module.exports = square;