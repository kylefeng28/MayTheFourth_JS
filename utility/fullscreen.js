function requestFullscreen(el) {
	if (el.requestFullscreen) {
		el.requestFullscreen();
	} else if (el.msRequestFullscreen) {
		el.msRequestFullscreen();
	} else if (el.mozRequestFullScreen) {
		el.mozRequestFullScreen();
	} else if (el.webkitRequestFullscreen) {
		el.webkitRequestFullscreen();
	}
	else {
		console.log("Fullscreen not supported.")
	}
}
