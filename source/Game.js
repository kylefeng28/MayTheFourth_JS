// TODO: GameState

function Game(mainCanvas, bgCanvas) {
	this.contentManager = new ContentManager("/Content");
	this.surface = mainCanvas.getContext("2d");
	this.self = this; // Just in case
}

Game._FPS = 60;

Game.prototype.init = function() {
	this.resize();
	console.log("Game initialized.");

	// TODO: tmp
	this.spriteTest = new MillenniumFalcon(this);
	this.spriteTest.init();
}

Game.prototype.update = function(dt) {
	dt = dt || 0.1;

	// TODO: tmp
	console.log("Update...");
	this.spriteTest.update(dt);
	this.spriteTest.draw(this.surface);
}

// TODO: draw function

Game.prototype.run = function() {
	this.init();
	setInterval(this.update.bind(this), 1000 / Game._FPS);
}

Game.prototype.handleKeyDown = function(e) {
}

Game.prototype.handleKeyUp = function(e) {
}

Game.prototype.fullscreen = function() {
	requestFullscreen(document.querySelector("#game-container"));
	this.resize();
}

Game.prototype.resize = function() {
	mainCanvas.width = window.innerWidth;
	mainCanvas.height = window.innerHeight
}
