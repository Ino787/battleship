import  {ensureEnoughPlacesAreAvailIfVertical, countHowManyCellsAvail, checkIfCellsAreEmptyIfVertical, ensureEnoughPlacesAreAvailIfHorizantal, checkIfCellsAreEmptyIfHorizantal } from './gameboard.js'


function Enemygameboard(board, ships) {
    this.board = board;
    this.ships = ships;   
    this.placeShip = function(coordinates, someshipobject, playerboard) {
     if (someshipobject.isRotated == true) {
      return placeEnemyShipVertical(coordinates, someshipobject, playerboard);
     } else {
      return placeEnemyShipHorizantal(coordinates, someshipobject, playerboard);
  }
  }
}

function placeEnemyShipVerticalHelper(coordinates, shipobj, playerboard, length) {
    if (length != 0) {
    playerboard.board[coordinates.y][coordinates.x].shipReferral = shipobj;
    return placeEnemyShipVerticalHelper({x: coordinates.x, y: coordinates.y + 1}, shipobj, playerboard, length - 1);
  }
  else {
    shipobj.isPlaced = true;
    return console.log('done placing')
  }
  }

  function placeEnemyShipHorizantalHelper(coordinates, shipobj, playerboard, length) {
    if (length != 0) {
    playerboard.board[coordinates.y][coordinates.x].shipReferral = shipobj;
    return placeEnemyShipHorizantalHelper({x: coordinates.x + 1, y: coordinates.y}, shipobj, playerboard, length - 1);
  }
  else {
    shipobj.isPlaced = true;
    return console.log('done placing')
  }
  }


   function placeEnemyShipHorizantal(coordinates, someshipobject, playerboard) {
     if (ensureEnoughPlacesAreAvailIfHorizantal(coordinates, someshipobject)) {
   if (checkIfCellsAreEmptyIfHorizantal(coordinates, someshipobject.length, playerboard)) {
        return placeEnemyShipHorizantalHelper(coordinates, someshipobject, playerboard, someshipobject.length);
              }
        else {
       return console.log('error');
              }
            }
        else {
    return console.log('error');
            }
          }

    function placeEnemyShipVertical(coordinates, someshipobject, playerboard) {
     if (ensureEnoughPlacesAreAvailIfVertical(coordinates, someshipobject)) {
        if (checkIfCellsAreEmptyIfVertical(coordinates, someshipobject.length, playerboard)) {
     return placeEnemyShipVerticalHelper(coordinates, someshipobject, playerboard, someshipobject.length);
        }
      else {
        return console.log('error');
        }
           }
        else {
       return console.log('error');
            }
          }


export {Enemygameboard} 