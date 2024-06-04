const shapes = require('./shapes.js');

class Square extends Shapes{


    render(){
        return `<rect x = "90" y="40" width="125" height="130" fill="${this.bgColor}" />`
    }
}

module.exports = Square;