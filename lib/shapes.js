const validColors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"];

function isValidColor(color) {
    // Check if color is a valid color name or a valid hex code
    return /^#[0-9A-F]{6}$/i.test(color) || validColors.includes(color.toLowerCase());
}
class Shapes {
    constructor(logoText, textColor, shapeChoice, shapeColor) {
        if (logoText.length > 3 || logoText.length < 1) {
            throw new Error("Logo length must be between 1 and 3 characters")
        }
        if (!isValidColor(textColor)) {
            throw new Error("Invalid text color. Either mis-spelled or invalid hex-code")
        }
        if (!isValidColor(shapeColor)) {
            throw new Error("Invalid shape color. Either mis-spelled or invalid hex-code")
        }
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeChoice = shapeChoice;
        this.shapeColor = shapeColor;
    }
}

class Square extends Shapes {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, "Square", shapeColor);
    }
    render() {
        let square = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="10" width="160" height="160" fill="${this.shapeColor}" />

        <text x="90" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
      
      </svg>`;
      return square;
    }
}

class Circle extends Shapes {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, "Circle", shapeColor);
    }
    render() {
        let circle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
      
      </svg>`;
      return circle;
    }
}

class Triangle extends Shapes {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, "Triangle", shapeColor);
    }
    render() {
        let triangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,20 230,180 70,180" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
      
      </svg>`;
      return triangle;
    }
}


module.exports = {Shapes, Circle, Square, Triangle};