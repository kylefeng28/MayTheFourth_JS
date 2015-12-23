var Physics = function() {
	// Kinematics
	/*public Vector2*/ this.pos = Vector2.zero;
	/*public Vector2*/ this.vel = Vector2.zero;
	/*public Vector2*/ this.acc = Vector2.zero;

	// Circular motion and flight dynamics
	/*public float*/ this.yaw_pos = 0.0;
	/*public float*/ this.yaw_vel = 0.0;
	/*public float*/ this.yaw_acc = 0.0;

	function /*public void*/ euler() {
		dt = dt || 1.0;

		vel += acc * dt; 
		pos += vel * dt; 

		yaw_vel += yaw_acc * dt; 
		yaw_pos += yaw_vel * dt; 
	}   

	function /*public void*/ verlet() {
		dt = dt || 1.0;

		var /*Vector2*/ vel_old = vel;
		vel += acc * dt; 
		pos += (vel + vel_old) * 0.5 * dt; 

		var /*float*/ yaw_vel_old = yaw_vel;
		yaw_vel += yaw_acc * dt; 
		yaw_pos += (yaw_vel + yaw_vel_old) * 0.5 * dt; 
	}   

	function /*public void*/ resetAcceleration() {
		acc = Vector2.Zero;
		yaw_acc = 0.0; 
	}   
}   
