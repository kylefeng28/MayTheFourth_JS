var mainCanvas = document.querySelector("#mainCanvas");
var bgCanvas = document.querySelector("#bgCanvas");

var _game = new Game(mainCanvas, bgCanvas);

window.onkeydown = function(e) { _game.handleKeyDown(e); };
window.onkeyup = function(e) { _game.handleKeyUp(e); };

_game.run();

window._game = _game;

