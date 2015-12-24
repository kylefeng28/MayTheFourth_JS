/* TODO
 * GameState
 * FPS counter
 * Keyboard, IOManager
 * Camera
 * FIXME BulletThread counter
 * status messages HUD
 * keyEvent_old
 */

function Game(mainCanvas, bgCanvas) {
	this.contentManager = new ContentManager("Content");
	this.surface = mainCanvas.getContext("2d");
	this.self = this; // Just in case

}

Game._FPS = 60;
Game._dt = 0.1;
Game._time = 0;

Game.prototype.init = function() {
	this.resize();
	console.log("Game initialized.");

	this.spriteTest = new MillenniumFalcon(this);
	this.spriteTest.init();
	// until I get a camera working
	this.spriteTest.physics.pos.x = this.surface.canvas.width / 2;
	this.spriteTest.physics.pos.y = this.surface.canvas.height / 2;
}

Game.prototype.loadContent = function(contentManager) {
	this.spriteTest.loadContent(contentManager);
}

Game.prototype.update = function(dt) {
	Game._time += 1;

	this.handleKeyEvent(this.keyEvent);
	this.spriteTest.update(dt);

	this.draw(this.surface);
}

Game.prototype.draw = function(surface) {
	// Clear the screen
	surface.clearRect(0, 0, surface.width, surface.height); // why doesn't this work?
	surface.canvas.width = surface.canvas.width; // force!

	this.spriteTest.draw(surface);
}

Game.prototype.run = function() {
	this.init();
	this.loadContent(this.contentManager);
	setInterval(this.update.bind(this, Game._dt), 1000 / Game._FPS);
}

Game.prototype.handleKeyEvent = function(keyEvent) {
	// TODO: move to GameState
	
	if (this.isKeyDown) {
		switch (keyEvent.keyCode) {
		case 87: // W
			this.spriteTest.forward(10);
			break;
		case 83: // S
			this.spriteTest.forward(-10);
			break;
		case 65: // A
			this.spriteTest.turnYaw(-50);
			break;
		case 68: // D
			this.spriteTest.turnYaw(50);
			break;
		case 32: // Space
			this.spriteTest.bullets.shoot();
			break;
		case 13: // Enter
			this.spriteTest.bullets.thread += 1; // TODO: tmp
			console.log("Thread: " + this.spriteTest.bullets.thread);
			break;
		default:
			console.log(keyEvent.keyCode); // TODO: tmp
			break;
		}
	} else {
		this.spriteTest.physics.resetAcceleration();
	}
}

Game.prototype.handleKeyDown = function(e) {
	this.isKeyDown = true;
	this.keyEvent = e;
}

Game.prototype.handleKeyUp = function(e) {
	this.isKeyDown = false;
	this.keyEvent = e;
}

Game.prototype.fullscreen = function() {
	requestFullscreen(document.querySelector("#game-container"));
	this.resize();
}

Game.prototype.resize = function() {
	mainCanvas.width = window.innerWidth;
	mainCanvas.height = window.innerHeight
}
