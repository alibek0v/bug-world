class Position {
    constructor(x, y) {
      this.x = x; // first coordinate
      this.y = y; // second coordinate
    }

    toString() {
      return `x = ${this.x}, y = ${this.y}\n`;
    }
  }

module.exports = Position
  