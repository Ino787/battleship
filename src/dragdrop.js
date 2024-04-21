 
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
    var gameboardElements = gameboard.children;

    gameboardElements.forEach((gameboardElement) => {
    gameboardElement.addEventListener('dragover', function (event) {
    event.preventDefault();
    });
            });
}

 function attachDropEventListenertoGrid() {
    var gameboard = document.getElementById('gameboard-container');
    var gameboardElements = gameboard.children;

    gameboardElements.forEach((gameboardElement) => {
    gameboardElement.addEventListener('drop', function (event) {
    event.preventDefault();
    });
});

 }


export {attachDraggableAttributetoShips, attachDragStartEventListenertoShips, attachDragOverEventListenertoGrid, attachDropEventListenertoGrid};
