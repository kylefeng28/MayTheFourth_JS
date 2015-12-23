function ContentManager(contentPath) {
	this.contentPath = contentPath + "/";
}

ContentManager.prototype.loadImage = function(src) {
	var image = new Image();
	image.src = this.contentPath + src;
	return image;
}
