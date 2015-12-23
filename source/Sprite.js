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

Sprite.prototype.update = function(dt) {
	this.physics.verlet(dt);
	this.rotation = this.physics.yaw_pos;

	this.drawBox = this.createRectangle(this.texture, this.physics.pos, this.scale);
}

Sprite.prototype.draw = function(/*CanvasContext*/ surface) {
	/*Vector2*/ origin = this.getOrigin(this.texture);
	// TODO: rotation, color, etc
	// spriteBatch.Draw(texture, drawBox, null, color, rotation, origin, SpriteEffects.None, 0f);
	surface.save();
	surface.rotate(this.rotation);
	// TODO: look in .cs file
	surface.drawImage(this.texture, this.drawBox.x, this.drawBox.y, this.drawBox.width, this.drawBox.height);
	surface.restore();
}

Sprite.prototype.forward = function(dir) {
	dir = dir || 1;

	if (physics.vel.Length() < vel_max) {
		physics.acc.X = (float) (Math.sign(dir) * acc_max * Math.Cos(physics.yaw_pos));
		physics.acc.Y = (float) (Math.sign(dir) * acc_max * Math.Sin(physics.yaw_pos));
	}
	else {
		physics.acc.X = 0;
		physics.acc.Y = 0;
	}
}

Sprite.prototype.turnYaw = function(ang) {
	ang = ang || 1;

	physics.yaw_vel = (float) (MathHelper.toRadians(ang));
}

Sprite.prototype.roll = function(ang) {
	ang = ang || 1;

	physics.acc.X = (float) (ang * Math.cos(this.physics.yaw_pos + MathHelper.PiOver2));
	physics.acc.Y = (float) (ang * Math.sin(this.physics.yaw_pos + MathHelper.PiOver2));
}

Sprite.prototype.friction = function() {
	/*int*/ dir = Math.sign(this.physics.vel.X);

	if (Math.Abs(physics.vel.Length()) > 0) {
		this.physics.vel *= 0.9;
	}

	if (Math.Abs(physics.yaw_vel) > 0) {
		physics.yaw_vel *= 0.9;
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
	return rect;
}

// Default origin point is center of image
/*Vector2*/ Sprite.prototype.getOrigin = function(/*Texture2D*/ texture) {
	return new Vector2(texture.width / 2, texture.height / 2);
}
