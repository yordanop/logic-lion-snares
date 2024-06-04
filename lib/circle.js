const shapes = require('./shapes.js');

class Circle extends Shapes{
    render(){
        return `<circle cx="150" cy="100" r = "80"fill="${this.bgColor}" />`
    }
}

module.exports = Circle;