function ContentManager(contentPath) {
	this.contentPath = contentPath + "/";
}

// TODO: caching, counter

ContentManager.prototype.loadImage = function(src) {
	var image = new Image();
	image.src = this.contentPath + src;
	console.log("Image loaded.");
	return image;
}

ContentManager.prototype.loadAudio = function(src) {
	var audio = new Audio();
	audio.src = this.contentPath + src;
	console.log("Audio clip loaded.");
	return audio;
}
