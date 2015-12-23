var Vector2 = function(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

// Vector2.zero
Object.defineProperty(Vector2, "zero", { get: function () { return new Vector2(0, 0) } });
