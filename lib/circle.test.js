const Circle = require('./circle');

describe('Circle', () => {
    it('setColor and render test', () => {
        const shape = new Circle();
        shape.setColor("orange");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="orange"/>');
    })
})
