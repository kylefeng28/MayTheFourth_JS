/*public class BulletManager*/
var BulletManager = function(game, sprite) {
	/*public Game1*/ this.game = game;
	/*public Sprite*/ this.sprite = sprite;

	/* public BulletThread*/ this.thread = BulletThread.Linear;
	/* private List<Bullet>*/ this.bulletList = new List();

	// public MoodLight moodLight;

	// Bullet properties
	// public Texture2D bulletTexture;
	// public Color bulletColor;
	/*public float*/ this.bullet_vel_max = 100;
	/*public int*/ this.numBullets = 36;

	// Shooting properties
	/*public int*/ this.shootDelay = 5;
	/*public int*/ this.shootBurst = 5;
	/*public int*/ this.shootBurstTimer = 0;
	/*public int*/ this.shootTimer = 0;

	// public SoundEffect shootSound;

}

BulletManager.prototype.init = function() {
}

BulletManager.prototype.loadContent = function(contentManager) {
	this.bulletTexture = contentManager.loadImage("Images/Laser.png");
	this.shootSound = contentManager.loadAudio("Sounds/XWing-Laser.wav");
}

BulletManager.prototype.update = function(dt) {
	this.bulletList.reverse().forEach(function(/*Bullet*/ bullet) {
		if (bullet.enabled) {
			bullet.update(dt);
		}
		else {
			console.log()
			// this.bulletList.remove(bullet); // FIXME undefined TypeError
		}
	});

	this.shootTimer--;
}

BulletManager.prototype.draw = function(surface) {
	this.bulletList.forEach(function(/*Bullet*/ bullet) {
		if (bullet.enabled) {
			bullet.draw(surface);
		}
	});
}

BulletManager.prototype.shoot = function(surface) {
	if (this.shootTimer <= 0) {
		this.shootBurstTimer--;
		if (this.shootBurstTimer <= 0) {
			this.shootBurstTimer = this.shootBurst;
			this.shootTimer = this.shootDelay;
		}

		/*float*/ var ang_pos = 0.0;
		/*Vector2*/ var pos = Vector2.zero;
		/*Vector2*/ var vel = Vector2.zero;

		this.shootSound.play();

		switch (this.thread) {
		case BulletThread.Linear: {
				ang_pos = this.sprite.physics.yaw_pos;

				pos = this.sprite.physics.pos.copy();
				pos.x += /*(float)*/ (this.sprite.texture.width / 2 * Math.cos(ang_pos));
				pos.y += /*(float)*/ (this.sprite.texture.width / 2 * Math.sin(ang_pos));

				vel.x = /*(float)*/ (this.bullet_vel_max * Math.cos(ang_pos));
				vel.y = /*(float)*/ (this.bullet_vel_max * Math.sin(ang_pos));

				this.add(ang_pos, pos, vel, this.bulletTexture, this.bulletColor);

				break;
			}
		case BulletThread.EnergyBurst: {
				for (var ang = 0; ang <= 360; ang += 360 / this.numBullets) {
					ang_pos = this.sprite.physics.yaw_pos + MathHelper.toRadians(ang);

					pos = this.sprite.physics.pos.copy();
					pos.x += /*(float)*/ (this.sprite.texture.width / 2 * Math.cos(ang_pos));
					pos.y += /*(float)*/ (this.sprite.texture.width / 2 * Math.sin(ang_pos));

					vel.x = /*(float)*/ (this.bullet_vel_max * Math.cos(ang_pos));
					vel.y = /*(float)*/ (this.bullet_vel_max * Math.sin(ang_pos));

					this.add(ang_pos, pos, vel, this.bulletTexture, this.bulletColor);

				}
				break;
			}
		case BulletThread.Butterfly: {
				for (var ang = 0; ang <= 360; ang += 360 / this.numBullets) {
					ang_pos = this.sprite.physics.yaw_pos + MathHelper.toRadians(ang);

					pos = this.sprite.physics.pos.copy();
					pos.x += /*(float)*/ (this.sprite.texture.width / 2 * Math.cos(ang_pos));
					pos.y += /*(float)*/ (this.sprite.texture.width / 2 * Math.sin(ang_pos));
					vel.x = /*(float)*/ (this.bullet_vel_max * Math.sin(ang_pos));
					vel.y = /*(float)*/ (this.bullet_vel_max * Math.sin(ang_pos));

					this.add(ang_pos, pos, vel, this.bulletTexture, this.bulletColor);

					pos = this.sprite.physics.pos.copy();
					pos.x += /*(float)*/ (this.sprite.texture.width / 2 * Math.cos(ang_pos));
					pos.y += /*(float)*/ (this.sprite.texture.width / 2 * Math.sin(ang_pos));
					vel.x = /*(float)*/ (this.bullet_vel_max * Math.cos(ang_pos));
					vel.y = /*(float)*/ (-this.bullet_vel_max * Math.cos(ang_pos));

					this.add(ang_pos, pos, vel, this.bulletTexture, this.bulletColor);

				}
				break;
			}
		case BulletThread.DoubleEllipse: {
				for (var ang = 0; ang <= 360; ang += 360 / this.numBullets) {
					ang_pos = this.sprite.physics.yaw_pos + MathHelper.toRadians(ang);

					pos = this.sprite.physics.pos.copy();
					pos.x += /*(float)*/ (this.sprite.texture.width / 2 * Math.cos(ang_pos));
					pos.y += /*(float)*/ (this.sprite.texture.width / 2 * Math.sin(ang_pos));
					vel.x = /*(float)*/ (-this.bullet_vel_max * Math.cos(ang_pos));
					vel.y = /*(float)*/ (this.bullet_vel_max * Math.sin(ang_pos));

					this.add(ang_pos, pos, vel, this.bulletTexture, this.bulletColor);

					pos = this.sprite.physics.pos.copy();
					pos.x += /*(float)*/ (this.sprite.texture.width / 2 * Math.cos(ang_pos));
					pos.y += /*(float)*/ (this.sprite.texture.width / 2 * Math.sin(ang_pos));
					vel.x = /*(float)*/ (this.bullet_vel_max * Math.cos(ang_pos));
					vel.y = /*(float)*/ (-this.bullet_vel_max * Math.sin(ang_pos));

					this.add(ang_pos, pos, vel, this.bulletTexture, this.bulletColor);

				}
				break;
			}
		case BulletThread.Spiral: {
				for (var ang = 0; ang <= 360; ang += 360 / this.numBullets) {
					ang_pos = this.sprite.physics.yaw_pos + MathHelper.toRadians(ang);

					pos = this.sprite.physics.pos.copy();
					pos.x += /*(float)*/ (this.sprite.texture.width / 2 * Math.cos(ang_pos - Game._time / 100.0));
					pos.y += /*(float)*/ (this.sprite.texture.width / 2 * Math.sin(ang_pos - Game._time / 100.0));

					vel.x = /*(float)*/ (this.bullet_vel_max * Math.cos(ang_pos));
					vel.y = /*(float)*/ (this.bullet_vel_max * Math.sin(ang_pos));

					this.add(ang_pos, pos, vel, this.bulletTexture, this.bulletColor);

				}
				break;
			}
		case BulletThread.RainFromHeaven: { // TODO: add into BulletThread
				for (var ang = 0; ang <= 360; ang += 360 / this.numBullets) {
					ang_pos = this.sprite.physics.yaw_pos + MathHelper.toRadians(ang);

					pos = this.sprite.physics.pos.copy();
					pos.x += /*(float)*/ (this.sprite.texture.width / 2 * Math.cos(ang_pos));
					pos.y = 0;

					vel.x = /*(float)*/ (this.bullet_vel_max * Math.cos(ang_pos));
					vel.y = /*(float)*/ (this.bullet_vel_max * Math.sin(ang_pos));

					this.add(ang_pos, pos, vel, this.bulletTexture, this.bulletColor);

				}
				break;
			}
		case BulletThread.Sakura: {
				if (!this.moodLight || this.moodLight == null) {
					// TODO: add moodlight
					// this.moodLight = new MoodLight(Color.Green); // Green makes cool firework patterns!
					this.moodLight = { color: "#ffffff" };
				}

				for (var ang = 0; ang <= 360; ang += 360 / 5) {
					ang_pos = this.sprite.physics.yaw_pos + MathHelper.toRadians(ang);

					pos = this.sprite.physics.pos.copy();
					pos.x += /*(float)*/ (this.sprite.texture.width / 2 * Math.cos(ang_pos - Game._time / 100.0));
					pos.y += /*(float)*/ (this.sprite.texture.width / 2 * Math.sin(ang_pos - Game._time / 100.0));

					vel.x = /*(float)*/ (this.bullet_vel_max * Math.cos(ang_pos));
					vel.y = /*(float)*/ (this.bullet_vel_max * Math.sin(ang_pos));

					this.add(ang_pos, pos, vel, this.bulletTexture, this.moodLight.color);

					pos = this.sprite.physics.pos.copy();
					pos.x += /*(float)*/ (this.sprite.texture.width / 2 * Math.cos(ang_pos + Game._time / 100.0));
					pos.y += /*(float)*/ (this.sprite.texture.width / 2 * Math.sin(ang_pos + Game._time / 100.0));

					vel.x = /*(float)*/ (this.bullet_vel_max * Math.cos(ang_pos));
					vel.y = /*(float)*/ (this.bullet_vel_max * Math.sin(ang_pos));

					this.add(ang_pos, pos, vel, this.bulletTexture, this.moodLight.color);
				}
				break;
			}
		}


	}
}

/**
 * float ang_pos, Vector2 pos, Vector2 vel, Texture2D texture, Color color
 */
BulletManager.prototype.add = function(ang_pos, pos, vel, texture, color) {
	/*Bullet*/ var bullet = new Bullet(this.game);

	bullet.physics.yaw_pos = ang_pos;
	bullet.physics.pos = pos.copy();
	bullet.physics.vel = vel.copy();
	bullet.texture = texture;
	bullet.baseColor = color;

	this.bulletList.add(bullet);
}





/*******************************************************************************************/
/* BulletThread.js */
/*******************************************************************************************/
/*enum*/ var BulletThread = {
	Linear: 0,
	EnergyBurst: 1,
	Butterfly: 2,
	DoubleEllipse: 3,
	Spiral: 4,
	Sakura: 5,
}
