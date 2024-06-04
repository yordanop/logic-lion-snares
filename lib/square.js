const shapes = require('./shapes.js');

class Square extends Shapes{


    render(){
        return `<Square points="150, 18 244, 182 56, 182" fill="${this.bgColor}" />`
    }
}

module.exports = Square;