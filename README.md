# detroitlabs-codechallenge
A JavaScript file which contains an api for 'Mars Rover'

# mars-rover.js file
- Consists of following parameters:
	- location: identify the location of the Mars Rover (default is [0,0])
	- direction: identify the direction in which Mars Rover is pointing (default is 'N' for North)
	- grid: identify the size of the grid (default is [100,100])
	- obstacle: identify the obstacle that the Rover has encountered in its path (default is [0,0])
	
- Functions:
	- command(commands): this function takes an array of commands 'f', 'b','l' or 'r' and acts accordingly
	- resetLocation(): this function signifies that on moving/turning to a newLocation from command function, it happens inside the grid.
	- move(command): this function moves either forward or backward identified by 'f' or 'b', based on which xInc and yInc matters and if obstacle appear on its path, it returns false (meaning it won't move)
	- isObstacle(newLocation): this function determines whether the next possible location on movement is an obstacle or not.
	- turn(command): this function turns either left or right and determines on which direction it points by using directionAsNumber 
	- directionAsNumber(direction): this function gives the direction as an integer which helps to point out to a particular direction in the direction array.