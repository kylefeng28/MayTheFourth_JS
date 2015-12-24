/**
 * private Array data
 */
var List = function(data) {
	this.data = data || [];

	// TODO: Iterable
	this[Symbol.iterator] = this.data[Symbol.iterator];
}

List.prototype.add = function(elem) {
	this.data.push(elem);
}

List.prototype.remove = function(elem) {
	for (var i in this.data) {
		if (elem == i) {
			return this.splice(i, 1)[0];
		}
	}
}

List.prototype.removeAt = function(i) {
	return this.data.splice(i, 1)[0];
}

/**
 * Returns a new List with a shallow copy of the data
 */
List.prototype.copy = function() {
	// should the data even be sliced?
	return new List(this.data.slice(0, this.data.length));
}

/**
 * Returns a new List with the data in reverse order
 */
List.prototype.reverse = function() {
	return new List(this.data.slice(0, this.data.length).reverse());
}

List.prototype.forEach = function(callback /*, thisArg*/) {
	this.data.forEach(callback);
}
