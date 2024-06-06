const Circle = require('./circle.js');

describe('Circle', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.

  describe('Get blue circle shape', () => {
    it('it should return a SVG file with the required info', () => {
      const circle = new Circle();
      circle.setColor("blue");
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r = "80" fill="blue" />');
    });
  });


});
