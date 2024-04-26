
function attachClickEventListenerToRotateButton(gameboard) {
    var rotateButton = document.getElementById('Rotate'); 
    rotateButton.addEventListener('click', function (event) {
        gameboard.rotate();
    });
}

function attachClickEventListenerToStartButton(game, gameboard) {
    var startButton = document.getElementById('Start');
    startButton.addEventListener('click', function (event) {
        game.gameStart(gameboard);
    });
}

export {attachClickEventListenerToRotateButton, attachClickEventListenerToStartButton};