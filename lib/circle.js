const shapes = require('./shapes.js');

class Circle extends Shapes{


    render(){
        return `<Circle points="150, 18 244, 182 56, 182" fill="${this.bgColor}" />`
    }
}

module.exports = Circle;