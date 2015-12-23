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
}

Game.prototype.update = function() {
	// TODO: tmp
	console.log("Update...");
	var tmpXWingImg = this.contentManager.loadImage("Images/XWing.png");
	this.surface.drawImage(tmpXWingImg, 0, 0);
}

Game.prototype.run = function() {
	this.init();
	this.update();
	setInterval(this.update.bind(this), 1000 / Game._FPS);
}

Game.prototype.handleKeyDown = function(e) {
}

Game.prototype.handleKeyUp = function(e) {
}

Game.prototype.fullscreen = function() {
	requestFullscreen(canvasDiv);
	this.resize();
}

Game.prototype.resize = function() {
	mainCanvas.width = window.innerWidth;
	mainCanvas.height = window.innerHeight
}
