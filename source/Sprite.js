var Sprite = function (game) {
	// Graphics
	// /*public Image*/ texture;
	// /*public Rectangle*/ drawBox;
	/*public Color*/ this.color = "#ffffff";
	/*public float*/ this.scale = 1.0;
	/*public float*/ this.rotation = 0.0;

	/*public Physics*/ this.physics = new Physics();

	/*public float*/ this.vel_max= 1.0;
	/*public float*/ this.acc_max= 1.0;

	/*private Game*/ this.game = game;
}

Sprite.prototype.init = function() {
}

Sprite.prototype.loadContent = function(contentManager) {
}

Sprite.prototype.update = function(dt) {
	this.physics.verlet(dt);
	this.rotation = this.physics.yaw_pos;

	this.drawBox = this.createRectangle(this.texture, this.physics.pos, this.scale);
}

Sprite.prototype.draw = function(/*CanvasContext*/ surface) {
	// TODO: rotation, color, etc
	// spriteBatch.Draw(texture, drawBox, null, color, rotation, origin, SpriteEffects.None, 0f);
	surface.save(); // push
	// Translate around origin
	surface.translate(this.drawBox.x + this.drawBox.width / 2, this.drawBox.y + this.drawBox.height / 2);
	surface.rotate(this.rotation);
	surface.drawImage(this.texture, -this.drawBox.width / 2, -this.drawBox.height / 2, this.drawBox.width, this.drawBox.height);
	surface.restore(); // pop
}

Sprite.prototype.forward = function(dir) {
	dir = dir || 1;

	if (this.physics.vel.magnitude() < this.vel_max) {
		this.physics.acc.x = /*(float)*/ (Math.sign(dir) * this.acc_max * Math.cos(this.physics.yaw_pos));
		this.physics.acc.y = /*(float)*/ (Math.sign(dir) * this.acc_max * Math.sin(this.physics.yaw_pos));
	}
	else {
		this.physics.acc.x = 0;
		this.physics.acc.y = 0;
	}
}

Sprite.prototype.turnYaw = function(ang) {
	ang = ang || 1;

	this.physics.yaw_vel = /*(float)*/ (MathHelper.toRadians(ang));
}

Sprite.prototype.roll = function(ang) {
	ang = ang || 1;

	this.physics.acc.x = /*(float)*/ (ang * Math.cos(this.physics.yaw_pos + MathHelper.PiOver2));
	this.physics.acc.y = /*(float)*/ (ang * Math.sin(this.physics.yaw_pos + MathHelper.PiOver2));
}

Sprite.prototype.friction = function() {
	/*int*/ var dir = Math.sign(this.physics.vel.x);

	if (Math.abs(this.physics.vel.magnitude()) > 0) {
		this.physics.vel = this.physics.vel.mulScalar(0.9);
	}

	if (Math.abs(this.physics.yaw_vel) > 0) {
		this.physics.yaw_vel *= 0.9;
	}
}

/*Rectangle*/ Sprite.prototype.createRectangle = function(/*Texture2D*/ texture, /*Vector2*/ pos, /*float*/ scale) {
	scale = scale || 1.0;

	var origin = this.getOrigin(texture);
	/*int*/ var x = Math.floor(pos.x - origin.x * scale);
	/*int*/ var y = Math.floor(pos.y - origin.y * scale);
	/*int*/ var width = Math.floor(texture.width * scale);
	/*int*/ var height = Math.floor(texture.height * scale);
	/*Rectangle*/ var rect = new Rectangle(x, y, width, height);

	// TODO: this probably should go in init
	this.width = width;
	this.height = height;

	return rect;
}

// Default origin point is center of image
/*Vector2*/ Sprite.prototype.getOrigin = function(/*Texture2D*/ texture) {
	return new Vector2(texture.width / 2, texture.height / 2);
}
