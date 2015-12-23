/* class MillenniumFalcon : Sprite */
function MillenniumFalcon(game) {
	Sprite.call(this, game);
	this.scale = 0.1;
	this.vel_max = 100;
	this.acc_max = 100;
}
MillenniumFalcon.prototype = Object.create(Sprite.prototype);

MillenniumFalcon.prototype.init = function() {
	Sprite.prototype.init.call(this);
	this.texture = this.game.contentManager.loadImage("Images/XWing.png");
}

MillenniumFalcon.prototype.update = function(dt) {
	Sprite.prototype.update.call(this, dt);
	this.friction();
}

MillenniumFalcon.prototype.draw = function(surface) {
	Sprite.prototype.draw.call(this, surface);
}

