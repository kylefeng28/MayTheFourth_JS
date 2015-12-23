var Physics = function() {
	// Kinematics
	/*public Vector2*/ this.pos = Vector2.zero;
	/*public Vector2*/ this.vel = Vector2.zero;
	/*public Vector2*/ this.acc = Vector2.zero;

	// Circular motion and flight dynamics
	/*public float*/ this.yaw_pos = 0.0;
	/*public float*/ this.yaw_vel = 0.0;
	/*public float*/ this.yaw_acc = 0.0;
}   

Physics.prototype.euler = function(dt) {
	this.vel = this.vel.add(Vector2.mulScalar(this.acc, dt)); 
	this.pos = this.pos.add(Vector2.mulScalar(this.vel, dt)); 

	this.yaw_vel += this.yaw_acc * dt; 
	this.yaw_pos += this.yaw_vel * dt; 
}   

Physics.prototype.verlet = function(dt) {
	var /*Vector2*/ vel_old = this.vel;
	this.vel = this.vel.add(Vector2.mulScalar(this.acc, dt)); 
	this.pos = this.pos.add(Vector2.add(this.vel, vel_old).mulScalar(0.5 * dt)); 

	var /*float*/ yaw_vel_old = this.yaw_vel;
	this.yaw_vel += this.yaw_acc * dt; 
	this.yaw_pos += (this.yaw_vel + yaw_vel_old) * 0.5 * dt; 
}   

function /*public void*/ resetAcceleration() {
	this.acc = Vector2.zero;
	this.yaw_acc = 0.0; 
}   
