import "./gameboard.css"


function gameboard(board, ships) {
  this.board = board;
  this.ships = ships;   
  this.placeShip = function(coordinates, someshipobject, playerboard) {
   if (someshipobject.isRotated == true) {
    return placeShipVertical(coordinates, someshipobject, playerboard);
   } else {
    return placeShipHorizantal(coordinates, someshipobject, playerboard);
}
}
  this.retrieveShip = function(name) {
  var shipObject = ships.filter((ship) => ship.name == name)[0];
  return shipObject;
}

this.rotate = function() {
  var shipsToRotate = this.ships.filter((ship) => !ship.isPlaced);
  shipsToRotate.map((ship) => ship.isRotated = true);
  ['ship-one', 'ship-two', 'ship-three', 'ship-four', 'ship-five'].forEach(id => {
    var ship = document.getElementById(id);
    if (ship) {
        ship.classList.add('rotate');
    }
});
  }
}

function placeShipVertical(coordinates, someshipobject, playerboard) {
  if (ensureEnoughPlacesAreAvailIfVertical(coordinates, someshipobject)) {
    if (checkIfCellsAreEmptyIfVertical(coordinates, someshipobject.length, playerboard)) {
      return placeShipVerticalHelper(coordinates, someshipobject, playerboard, someshipobject.length);
    }
    else {
      return console.log('error');
    }
  }
  else {
    return console.log('error');
  }
}



function ensureEnoughPlacesAreAvailIfVertical(coordinates, someshipobject) {
  var CellsAvailableToPlace = countHowManyCellsAvail(coordinates.y, 1);
  if (someshipobject.length > CellsAvailableToPlace) {
  return false;
  }
  else {
  return true;
       }
  }


function countHowManyCellsAvail(coordinate, CellCount) {
  if (coordinate !== 9) {
  var NewCellCount = CellCount + 1;
  var NewCoordinateAfterPlacingCountingThisCell = coordinate + 1;
  return countHowManyCellsAvail(NewCoordinateAfterPlacingCountingThisCell, NewCellCount);
  }
  else {
   return CellCount;
      }
    }

  function checkIfCellsAreEmptyIfVertical(coordinates, someshiplength, somegameboard ) {
    if (someshiplength == 0) {
    return true;
      } 
      else {
    if (somegameboard.board[coordinates.y][coordinates.x].shipReferral == null) {
     return checkIfCellsAreEmptyIfVertical({x: coordinates.x , y: coordinates.y + 1}, someshiplength - 1 , somegameboard);
      }
      else {
        return false;
        }
    }
  }


    function placeShipVerticalHelper(coordinates, shipobj, playerboard, length) {
      if (length != 0) {
      var div = playerboard.board[coordinates.y][coordinates.x].place
      div.classList.add("blue-background");
      playerboard.board[coordinates.y][coordinates.x].shipReferral = shipobj;
      return placeShipVerticalHelper({x: coordinates.x, y: coordinates.y + 1}, shipobj, playerboard, length - 1);
    }
    else {
      var shipDOM = document.getElementById(shipobj.name);
      shipDOM.remove();
      shipobj.isPlaced = true;
      return console.log('done placing')
    }
    }

    function placeShipHorizantal(coordinates, someshipobject, playerboard) {
      if (ensureEnoughPlacesAreAvailIfHorizantal(coordinates, someshipobject)) {
        if (checkIfCellsAreEmptyIfHorizantal(coordinates, someshipobject.length, playerboard)) {
          return placeShipHorizantalHelper(coordinates, someshipobject, playerboard, someshipobject.length);
        }
        else {
          return console.log('error');
        }
      }
      else {
        return console.log('error');
      }
    }

   function ensureEnoughPlacesAreAvailIfHorizantal(coordinates, someshipobject) {
     var CellsAvailableToPlace = countHowManyCellsAvail(coordinates.x, 1)
    if (someshipobject.length > CellsAvailableToPlace) {
          return false;
            }
        else {
          return true;
             }
          }



  function checkIfCellsAreEmptyIfHorizantal(coordinates, someshiplength, somegameboard ) {
    if (someshiplength == 0) {
      return true;
    } 
      else {
        if (somegameboard.board[coordinates.y][coordinates.x].shipReferral == null) {
          return checkIfCellsAreEmptyIfHorizantal({x: coordinates.x + 1 , y: coordinates.y}, someshiplength - 1 , somegameboard);
        }
        else {
          return false;
        }
  }
}

   function placeShipHorizantalHelper(coordinates, shipobj, playerboard, length) {
    if (length != 0) {
    var div = playerboard.board[coordinates.y][coordinates.x].place
    div.classList.add("blue-background");
    playerboard.board[coordinates.y][coordinates.x].shipReferral = shipobj;
    return placeShipHorizantalHelper({x: coordinates.x + 1, y: coordinates.y}, shipobj, playerboard, length - 1);
  }
  else {
    var shipDOM = document.getElementById(shipobj.name);
    shipDOM.remove();
    shipobj.isPlaced = true;
    return console.log('done placing')
  }
  }

  

export { gameboard, placeShipVertical, ensureEnoughPlacesAreAvailIfVertical, countHowManyCellsAvail, checkIfCellsAreEmptyIfVertical, placeShipVerticalHelper, placeShipHorizantal, ensureEnoughPlacesAreAvailIfHorizantal, checkIfCellsAreEmptyIfHorizantal, placeShipHorizantalHelper};

