
function attachClickEventListenerToRotateButton(gameboard) {
    var rotateButton = document.getElementById('Rotate'); 
    rotateButton.addEventListener('click', function (event) {
        gameboard.rotate();
    });
}

function attachClickEventListenerToStartButton(game) {
    var startButton = document.getElementById('Start');
    startButton.addEventListener('click', function (event) {
        game.startGame();
    });
}

export {attachClickEventListenerToRotateButton};