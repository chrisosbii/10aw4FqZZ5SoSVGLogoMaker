const Square = require('./square.js');

describe('Square', () => {
    it('setColor and render test', () => {
        const square = new Square();
        square.setColor("orange");
        expect(square.render()).toEqual('<rect x="65" y="25" width="164" height="164" fill="orange"/>');
    })
})