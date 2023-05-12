const Shape = require('./shape');

describe('Shape', () => {
    it('setColor and render test', () => {
        const shape = new Shape();
        shape.setColor("orange");
        expect(shape.render()).toEqual('<null null fill="orange"/>');
    })
})
