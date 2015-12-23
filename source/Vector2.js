var Vector2 = function(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

// Vector2.zero
Object.defineProperty(Vector2, "zero", { get: function () { return new Vector2(0, 0) } });

Vector2.add = function(a, b) { return new Vector2(a.x + b.x, a.y + b.y); }
Vector2.sub = function(a, b) { return new Vector2(a.x - b.x, a.y - b.y); }
Vector2.mul = function(a, b) { return new Vector2(a.x * b.x, a.y * b.y); }
Vector2.div = function(a, b) { return new Vector2(a.x / b.x, a.y / b.y); }

Vector2.mulScalar = function(a, s) { return new Vector2(a.x * s, a.y * s); }
Vector2.divScalar = function(a, s) { return new Vector2(a.x / s, a.y / s); }

Vector2.prototype.add = function(o) { return Vector2.add(this, o); }
Vector2.prototype.sub = function(o) { return Vector2.sub(this, o); }
Vector2.prototype.mul = function(o) { return Vector2.mul(this, o); }
Vector2.prototype.div = function(o) { return Vector2.div(this, o); }

Vector2.prototype.mulScalar = function(s) { return Vector2.mulScalar(this, s); }
Vector2.prototype.divScalar = function(s) { return Vector2.divScalar(this, s); }
