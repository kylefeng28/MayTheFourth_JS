/* class Bullet : Sprite */
var Bullet = function(game) {
	/*public int*/ this.EVAPORTATE_TIME = 200;
	// /*public int*/ this.evaporateTimer;
	// /*public Color*/ this.baseColor  = null;
	// /*public bool*/ enabled = true;

	this.evaporateTimer = this.EVAPORTATE_TIME;
	this.enabled = true;

	Sprite.call(this, game);
}
Bullet.prototype = Object.create(Sprite.prototype);

Bullet.prototype.update = function (dt) {
	if (this.evaporateTimer > 0) { this.evaporateTimer--; }
	if (this.evaporateTimer <= 0) { this.enabled = false; }

	// color = baseColor * ((float) evaporateTimer / EVAPORTATE_TIME);

	Sprite.prototype.update.call(this, dt);
}

Bullet.prototype.draw = function (surface) {
	if (this.enabled) {
		Sprite.prototype.draw.call(this, surface);
	}

}
