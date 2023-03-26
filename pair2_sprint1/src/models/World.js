class World {
    constructor(width, length) {
        this.width = width;
        this.length = length;
        this.field = Array(length).fill().map(() => Array(width).fill(new WordCell(false, null, 0, null, null)));;
    }

    cellAt(position) {
        return this.field[position.y][position.x];
    }

    turn(direction, turn) {
        // if turn = 0 -> to the right, otherwise -> to the left
        if(turn == 0) {
            return (direction + 1) % 6;
        } else {
            return (direction + 5) % 6;
        }
    }

    isObstructedAt(position) {
        return this.field[position.y][position.x].isObstructed();
    }

    isOccupiedAt(position) {
        return this.field[position.y][position.x].isOccupied();
    }

    setBugAt(position, bug) {
        return this.field[position.y][position.x].setBug(bug);
    }

    getBugAt(position) {
        return this.field[position.y][position.x].getBug();
    }

    removeBugAt(position) {
        return this.field[position.y][position.x].removeBug();
    }

    setFoodAt(position, amount) {
        this.field[position.y][position.x].setFood(amount);
    }

    getFoodAt(position) {
        return this.field[position.y][position.x].getFood();
    }

    isFriendlyBaseAt(position, color) {
        return this.field[position.y][position.x].isFriendlyBase(color);
    }

    isEnemyBaseAt(position, color) {
        return this.field[position.y][position.x].isEnemyBase(color);
    }

    setMarkerAt(position, color, value) {
        this.field[position.y][position.x].setMarker();
    }

    clearMarkerAt(position) {
        this.field[position.y][position.x].clearMarker();
    }

    isFriendlyMarkerAt(position, color) {
        return this.field[position.y][position.x].isFriendlyMarker(color);
    }

    isEnemyMarkerAr(position, color) {
        return this.field[position.y][position.x].isEnemyMarker(color);
    }

    toString() {
        let str = `The length is ${this.length}, the width is ${this.width}\n`;
        for (var i = 0; i < this.field.length; i++) { 
            for (var j = 0; j < this.field.width; j++) {
                str += `Cell (${i},${j})`;
                str += this.field[i][j].toString();
            }
        }
    }
}

module.exports = World
  