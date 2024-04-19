import './dom.css';


function createGameboardDOM() {
  var mainDiv = document.querySelector('#main');
  var gameboardcontainer = document.createElement("div");
  gameboardcontainer.id = "gameboard-container"
  mainDiv.appendChild(gameboardcontainer);
  var gameboard = document.createElement("div");
  gameboard.id = "gameboard"
  gameboardcontainer.appendChild(gameboard);

  for (let y = 0; y < 10; y++) {

  for (let x = 0; x < 10; x++) {
  var div = document.createElement("div");
  div.dataset.y = y;  
  div.dataset.x = x;
  gameboard.appendChild(div);
    }

  }

   return gameboard;
}





function createShipsDOM() {

    var mainDiv = document.querySelector('#main');
    var shipContainer = document.createElement("div");
    shipContainer.id = "ship-container"
    mainDiv.appendChild(shipContainer);

    var shipOne = createShipDOM('ship-one', 2);  
    var shipTwo = createShipDOM('ship-two', 3);
    var shipThree = createShipDOM('ship-three', 3);
    var shipFour = createShipDOM('ship-four', 4);
    var shipFive = createShipDOM('ship-five', 5);

    shipContainer.appendChild(shipOne);
    shipContainer.appendChild(shipTwo);
    shipContainer.appendChild(shipThree);
    shipContainer.appendChild(shipFour);
    shipContainer.appendChild(shipFive);
    
    return shipContainer;
}

function createShipDOM(some_id, some_length) {
    var ship = document.createElement("div");
    ship.id = some_id;
    ship.className = "ship"
    ship.dataset.length = some_length;

    for (let i = 0; i < some_length; i++) {
    var div = document.createElement("div");
    ship.appendChild(div);
     }

    return ship;
};

function createStartandRotateButtonsDOM() {
  var mainDiv = document.querySelector('#main');

  var gameButtonsContainer = document.createElement("div");
  gameButtonsContainer.id = 'gamebuttons';

  mainDiv.appendChild(gameButtonsContainer);

  var startButton = document.createElement("div");
  startButton.className = 'button'
  startButton.textContent = 'Start';

  var rotateButton = document.createElement("div");
  rotateButton.className = 'button'
  rotateButton.textContent = 'Rotate';

  gameButtonsContainer.appendChild(startButton);

  gameButtonsContainer.appendChild(rotateButton);

  return gameButtonsContainer;

}

export {createGameboardDOM, createShipsDOM, createShipDOM, createStartandRotateButtonsDOM};