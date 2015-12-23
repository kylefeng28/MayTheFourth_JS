/* class MillenniumFalcon : Sprite */
function MillenniumFalcon(game) {
	Sprite.call(this, game);
}
MillenniumFalcon.prototype = Object.create(Sprite.prototype);

MillenniumFalcon.prototype.init = function() {
	Sprite.prototype.init.call(this);
	this.texture = this.game.contentManager.loadImage("Images/XWing.png");
	this.scale = 0.5;
}

MillenniumFalcon.prototype.update = function(dt) {
	Sprite.prototype.update.call(this, dt);
}

MillenniumFalcon.prototype.draw = function(surface) {
	Sprite.prototype.draw.call(this, surface);
}

