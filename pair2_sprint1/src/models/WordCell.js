class WordCell {
    constructor(obstructed, bug, food, marker, base) {
        this.obstructed = obstructed;
        this.bug = bug;
        this.food = food;
        this.marker = marker;
        this.base = base;
    }

    isObstructed() {
        return this.obstructed;
    }

    isOccupied() {
        return this.bug !== null;
    }

    setBug(newBug) {
        if (this.isOccupied() || this.isObstructed()) {
            return false;
        }
        this.bug = newBug;
        return true;
    }

    getBug() {
        return this.bug;
    }

    removeBug() {
        if (this.isOccupied) {
            bug = null;
            return true;
        }
        return false;
    }

    setFood(amount) {
        this.food = amount;
    }

    getFood() {
        return this.food;
    }

    isFriendlyBase(color) {
        if(base == color) {
            return true;
        }
        return false;
    }

    isEnemyBase(color) {
        if(base !== null &&base != color) {
            return true;
        }
        return false;
    }

    setMarker(color, value) {
        this.marker = new Marker(color, value);
    }

    clearMarker() {
        this.marker = null;
    }

    isFriendlyMarker(color) {
        if(this.marker !== null && this.marker.color == color) {
            return true;
        }
        return false;
    }

    isEnemyMarker(color) {
        if(this.marker !== null && this.marker.color !== color) {
            return true;
        }
        return false;
    }

    toString() {
        let bugDescription = null;
        if(this.bug !== null) {
            bugDescription = this.bug.toString()
        }
        return `$Word Cell:\nis obstructed: ${this.obstructed}\n` + bugDescription + `food: ${this.food}\nmarker: ${this.marker}\nbase: ${this.base}\n`;
    }
}

module.exports = WordCell
