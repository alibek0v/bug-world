class BugBrain {
    constructor(instructions) {
      this.instructions = instructions;
      this.currentPos = 0; // points to the next instruction to be used
    }

    getNextInstruction() {
        let instruction = this.instructions[this.currentPos];
        this.currentPos += 1;
        return instruction;
    }
  }

  module.exports = BugBrain
  