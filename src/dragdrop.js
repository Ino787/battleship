 
function attachDraggableAttributetoShips() {
    var ships = document.querySelectorAll('.ship');
    ships.forEach((ship) => {
        ship.setAttribute('draggable', 'true');
    });
}

 function attachDragStartEventListenertoShips() {
    var ships = document.querySelectorAll('.ship');
    ships.forEach((ship) => {
    ship.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData("text", event.target.id);
    });
            });
}


 function attachDragOverEventListenertoGrid() {
    var gameboard = document.getElementById('gameboard-container');
    var gameboardElements = Array.from(gameboard.children);

    gameboardElements.forEach((gameboardElement) => {
    gameboardElement.addEventListener('dragover', function (event) {
    event.preventDefault();
    });
            });
}

function attachDropEventListenertoGrid(playerboard) {
    var gameboard = document.getElementById('gameboard-container');
    var gameboardElements = Array.from(gameboard.children);

    gameboardElements.forEach((gameboardElement) => {
    gameboardElement.addEventListener('drop', function (event) {
    event.preventDefault();
    var shipName = event.dataTransfer.getData("text");
    var shipDOM = document.getElementById(shipName); 
    var length = parseInt(shipDOM.dataset.length); 
    var shipObject = playerboard.retrieveShip(shipName);  
    var coordinates = {x: parseInt(event.target.dataset.x), y: parseInt(event.target.dataset.y)};
    playerboard.placeShip(coordinates, shipObject, playerboard);
});
});

 }


export {attachDraggableAttributetoShips, attachDragStartEventListenertoShips, attachDragOverEventListenertoGrid, attachDropEventListenertoGrid};
