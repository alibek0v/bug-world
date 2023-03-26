const Bug = require('../models/Bug.js')
const Color = require('../models/Color.js')
const Position = require('../models/Position.js')

const position = new Position(0, 0);
const bug = new Bug(1, Color.Red, 0, 0, 5, false, null, position);
var bugDescription = bug.toString();

var expectedBugDescription = 
"Bug with id 1:\n" +
"color: Red\n" +
"state: 0\n" +
"resting: 0\n" +
"direction: 5\n" +
"has food: false\n" +
"position: x = 0, y = 0\n" +
"is alive: true\n"

console.log(`ToStringTest result: ${bugDescription === expectedBugDescription}`);
