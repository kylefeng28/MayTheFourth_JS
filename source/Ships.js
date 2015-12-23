/* class MillenniumFalcon : Sprite */
function MillenniumFalcon(game) {
	Sprite.call(this, game);
	this.scale = 0.1;
	this.vel_max = 100;
	this.acc_max = 100;

	/*BulletManager*/ this.bullets = new BulletManager(game, this);
}
MillenniumFalcon.prototype = Object.create(Sprite.prototype);

MillenniumFalcon.prototype.init = function() {
	Sprite.prototype.init.call(this);
}

MillenniumFalcon.prototype.loadContent = function(contentManager) {
	this.texture = contentManager.loadImage("Images/XWing.png");
	this.bullets.loadContent(contentManager);
	Sprite.prototype.loadContent.call(this, contentManager);
}

MillenniumFalcon.prototype.update = function(dt) {
	this.friction();
	this.bullets.update(dt);

	Sprite.prototype.update.call(this, dt);
}

MillenniumFalcon.prototype.draw = function(surface) {
	this.bullets.draw(surface);

	Sprite.prototype.draw.call(this, surface);
}

