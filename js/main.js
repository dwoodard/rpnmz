var app;
var	settings = new Settings();

var runLoop = function() {
	app.update();
	// app.draw();
}

var initApp = function() {
	if (app!=null) { return; }
	app = new App(settings);

	window.addEventListener('resize', app.resize, false);

	document.addEventListener('mousemove', app.mousemove, false);
	document.addEventListener('mousedown', app.mousedown, false);
	document.addEventListener('mouseup', app.mouseup, false);
	
	document.addEventListener('touchstart', app.touchstart, false);
	document.addEventListener('touchend', app.touchend, false);
	document.addEventListener('touchcancel', app.touchend, false);
	document.addEventListener('touchmove', app.touchmove, false);	

	document.addEventListener('keydown', app.keydown, false);
	document.addEventListener('keyup', app.keyup, false);
	
	document.addEventListener('click', app.restart, false);


	setInterval(runLoop,160);
}

if(Modernizr.canvas){ // && Modernizr.websockets) {
	initApp();
} else {
	// document.getElementById('unsupported-browser').style.display = "block";	
}