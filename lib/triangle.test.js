const Triangle = require('./triangle.js');

describe('Triangle', () => {
    it('setColor and render test', () => {
        const triangle = new Triangle();
        triangle.setColor("orange");
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="orange"/>');
    })
})