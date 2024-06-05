class Logo {
    setColor(bgColor){
        this.bgColor = bgColor;
      }

    setText(bgColor){
        this.textColor = textColor;
        this.text = text;
      }

    getShape(logoShape){
        return logoShape.render()
    }

    render(){
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        
        ${this.getShape()}

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`
    }
}

module.exports = Logo;