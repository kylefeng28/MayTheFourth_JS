var Vector2 = function(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

// Vector2.zero
Object.defineProperty(Vector2, "zero", { get: function () { return new Vector2(0, 0) } });

// Warn for vec.X and vec.Y
Object.defineProperty(Vector2.prototype, "X", { get: function () { console.warn("Use .x instead"); return this.x} });
Object.defineProperty(Vector2.prototype, "Y", { get: function () { console.warn("Use .y instead"); return this.y} });

/* Class methods */
Vector2.add = function(a, b) { return new Vector2(a.x + b.x, a.y + b.y); }
Vector2.sub = function(a, b) { return new Vector2(a.x - b.x, a.y - b.y); }
Vector2.mul = function(a, b) { return new Vector2(a.x * b.x, a.y * b.y); }
Vector2.div = function(a, b) { return new Vector2(a.x / b.x, a.y / b.y); }

Vector2.mulScalar = function(v, k) { return new Vector2(v.x * k, v.y * k); }
Vector2.divScalar = function(v, k) { return new Vector2(v.x / k, v.y / k); }

Vector2.magnitude = function(v) { return Math.sqrt(v.x * v.x + v.y * v.y); }

/* Prototype methods */
Vector2.prototype.add = function(o) { return Vector2.add(this, o); }
Vector2.prototype.sub = function(o) { return Vector2.sub(this, o); }
Vector2.prototype.mul = function(o) { return Vector2.mul(this, o); }
Vector2.prototype.div = function(o) { return Vector2.div(this, o); }

Vector2.prototype.mulScalar = function(k) { return Vector2.mulScalar(this, k); }
Vector2.prototype.divScalar = function(k) { return Vector2.divScalar(this, k); }

Vector2.prototype.magnitude = function() { return Vector2.magnitude(this); }

Vector2.prototype.copy = function() {
	return new Vector2(this.x, this.y);
}

