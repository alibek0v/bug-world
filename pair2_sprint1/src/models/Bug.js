const Color = require('../models/Color.js')

class Bug {
    constructor(id, color, state, resting, direction, hasFood, brain, position) {
      this.id = id;
      this.color = color;
      this.state = state;
      this.resting = resting;
      this.direction = direction;
      this.hasFood = hasFood;
      this.brain = brain;
      this.position = position;
      this.isAlive = true;
    }
  
    kill() {
      this.isAlive = false;
    }
  
    getPosition() {
      return this.position;
    }
  
    toString() {
      let positionDescription = this.position.toString();
      return `Bug with id ${this.id}:\ncolor: ${this.color}\nstate: ${this.state}\nresting: ${this.resting}\ndirection: ${this.direction}\nhas food: ${this.hasFood}\nposition: ${positionDescription}is alive: ${this.isAlive}\n`;
    }
  }

module.exports = Bug
  