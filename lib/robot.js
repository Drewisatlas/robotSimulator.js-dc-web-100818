class Robot {
	constructor () {
    this.coordinates = [0,0];
    this.bearing = 'north';
  }
  setCoordinates (x,y) {
    this.coordinates = [x,y];
  }
  setBearing (direction) {
    const directions = ["north", "south", "east", "west"];
    let valid = directions.find( cardinal => cardinal === direction )
    if (valid) {
      this.bearing = direction;
    } else {
      throw "Invalid Robot Bearing";
    }
  }
  place ({x, y, direction}) {
    this.coordinates = [x, y];
    this.bearing = direction;
  }
  turnRight () {
    switch (this.bearing) {
      case "north":
        this.bearing = "east";
        break;
      case "east":
        this.bearing = "south";
        break;
      case "south":
        this.bearing = "west";
        break;
      case "west":
        this.bearing = "north";
    }
  }
  turnLeft () {
    switch (this.bearing) {
      case "north":
        this.bearing = "west";
        break;
      case "east":
        this.bearing = "north";
        break;
      case "south":
        this.bearing = "east";
        break;
      case "west":
        this.bearing = "south";
      }
  }
  advance () {
    switch (this.bearing) {
      case "north":
        this.coordinates[1] ++;
        break;
      case "east":
        this.coordinates[0] ++;
        break;
      case "south":
        this.coordinates[1] --;
        break;
      case "west":
        this.coordinates[0] --;
      }
  }
  // can accept "L" "R" or "A"
  translateInstructions (instruction) {
    for (let i = 0; i <= instruction.length; i++ ) {
      if (instruction.charAt(i) === "L") this.turnLeft();
      if (instruction.charAt(i) === "R") this.turnRight();
      if (instruction.charAt(i) === "A") this.advance();
    }
  }
}
