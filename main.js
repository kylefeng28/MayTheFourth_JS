var _mainCanvas = document.querySelector("#mainCanvas");
var _bgCanvas = document.querySelector("#bgCanvas");
var _msgBox = document.querySelector("#msgBox");

var _game = new Game(_mainCanvas, _bgCanvas);

window.onkeydown = function(e) { _game.handleKeyDown(e); };
window.onkeyup = function(e) { _game.handleKeyUp(e); };

_game.run();

window._game = _game;

