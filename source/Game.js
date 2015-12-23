/* TODO
 * GameState
 * FPS counter
 * FIXME Artifacts
 * FIXME User controls
 * Keyboard, IOManager
 */

function Game(mainCanvas, bgCanvas) {
	this.contentManager = new ContentManager("/Content");
	this.surface = mainCanvas.getContext("2d");
	this.self = this; // Just in case
}

Game._FPS = 60;
Game._dt = 0.1;

Game.prototype.init = function() {
	this.resize();
	console.log("Game initialized.");

	this.spriteTest = new MillenniumFalcon(this);
	this.spriteTest.init();
}

Game.prototype.update = function(dt) {
	this.spriteTest.update(dt);

	this.draw(this.surface);
}

Game.prototype.draw = function(surface) {
	// Clear the screen
	surface.clearRect(0, 0, surface.width, surface.height);

	this.spriteTest.draw(surface);
}

Game.prototype.run = function() {
	this.init();
	setInterval(this.update.bind(this, Game._dt), 1000 / Game._FPS);
}

Game.prototype.handleKeyDown = function(e) {
	this.spriteTest.physics.resetAcceleration();
	// TODO: move to GameState
	switch (e.keyCode) {
	case 87: // W
		this.spriteTest.forward(10);
		break;
	case 83: // S
		this.spriteTest.forward(-10);
		break;
	case 69: // E
		this.spriteTest.turnYaw(50);
		break;
	case 81: // Q
		this.spriteTest.turnYaw(-50);
		break;

	}
}

Game.prototype.handleKeyUp = function(e) {
	this.spriteTest.physics.resetAcceleration();
}

Game.prototype.fullscreen = function() {
	requestFullscreen(document.querySelector("#game-container"));
	this.resize();
}

Game.prototype.resize = function() {
	mainCanvas.width = window.innerWidth;
	mainCanvas.height = window.innerHeight
}
