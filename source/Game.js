/* TODO
 * GameState
 * FPS counter
 * IOManager. encapsulate Keyboard.js?
 * Camera
 * FIXME BulletThread counter. Make more efficient
 * status messages HUD
 * Mouse following
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
	// tmp until I get a camera working
	this.spriteTest.physics.pos.x = this.surface.canvas.width / 2;
	this.spriteTest.physics.pos.y = this.surface.canvas.height / 2;

	Game._kb = new Keyboard();
}

Game.prototype.loadContent = function(contentManager) {
	this.spriteTest.loadContent(contentManager);
}

Game.prototype.update = function(dt) {
	Game._time += 1;

	this.handleKeyEvent();
	this.spriteTest.update(dt);

	this.draw(this.surface);
}

Game.prototype.draw = function(surface) {
	// Clear the screen
	surface.clearRect(0, 0, surface.width, surface.height); // why doesn't this work?
	surface.canvas.width = surface.canvas.width; // force!

	this.displayText("Thread: " + BulletThread[this.spriteTest.bullets.thread] + " (" + this.spriteTest.bullets.thread + ")");

	this.spriteTest.draw(surface);
}

Game.prototype.run = function() {
	this.init();
	this.loadContent(this.contentManager);
	setInterval(this.update.bind(this, Game._dt), 1000 / Game._FPS);
}

Game.prototype.handleKeyEvent = function() {
	// TODO: move to GameState?
	
	if (Game._kb.lastKey) {
		if (Game._kb.isKeyDown("w")) {
			this.spriteTest.forward(10);
		}
		if (Game._kb.isKeyDown("s")) {
			this.spriteTest.forward(-10);
		}
		if (Game._kb.isKeyDown("a")) {
			this.spriteTest.turnYaw(-50);
		}
		if (Game._kb.isKeyDown("d")) {
			this.spriteTest.turnYaw(50);
		}
		if (Game._kb.isKeyDown("Space")) {
			this.spriteTest.bullets.shoot();
		}
	} else {
		this.spriteTest.physics.resetAcceleration();
	}
}

Game.prototype.handleKeyDown = function(e) {
	Game._kb.handleKeyDown(e);

	switch(e.keyCode) {
		case 32: // Space
			e.preventDefault();
			break;
		case 13: // Enter
			this.spriteTest.bullets.nextThread();
			break;
	}
}

Game.prototype.handleKeyUp = function(e) {
	Game._kb.handleKeyUp(e);
}

Game.prototype.fullscreen = function() {
	requestFullscreen(document.querySelector("#game-container"));
	this.resize();
}

Game.prototype.resize = function() {
	_mainCanvas.width = window.innerWidth;
	_mainCanvas.height = window.innerHeight
}

Game.prototype.displayText = function(text) {
	_msgBox.innerHTML = text;
}
