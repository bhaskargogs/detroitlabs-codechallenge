let MarsRover = (location, direction, grid, obstacles)=>{
	let self = this;
	this.location = (location === undefined) ? [0,0] : location;
	this.direction = (direction === undefined) ? 'N' : direction;
	this.grid = (grid === undefined) ? [100,100] : grid;
	this.obstacles = (obstacles === undefined) ? [0,0] : obstacles;
	this.status = 'OK';
	
	this.commands = (commands) =>{
		if(commands === undefined)
			return this.commandArr;
		else {
			for(let i = 0;i<commands.length;i++){
				let command = commands[i];
				if(command === 'f' || command === 'b'){
					if(!move(command)) break;
				} else if(command === 'l' || command === 'r'){
					turn(command);
				}
			}
			resetLocation();
			this.commandArr = command;
		}
	};
	
	function resetLocation() {
		self.location = [
			(self.location[0] + self.grid[0]) % self.grid[0],
			(self.location[1] + self.grid[1]) % self.grid[1]
			]
	}
	
}

export default{ directive: MarsRover,name: 'marsRover'};
