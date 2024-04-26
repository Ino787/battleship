import { createEnemyGameboardDOM } from './dom.js'
import { ship } from './ship.js'
import {Enemygameboard} from './Enemygameboard.js'

function game() {
    this.player = null;
    this.Enemyplayer = null;
    this.gameStart = function(someGameboard) {
     if (someGameboard.ships.filter((ship) => ship.isPlaced).length == 5) {
     var Enemyboard = createEnemyGameboardDOM().board;
     var ship1 = new ship('ship-one', 2);
     var ship2 = new ship('ship-two', 3);
     var ship3 = new ship('ship-three', 3);
     var ship4 = new ship('ship-four', 4);
     var ship5 = new ship('ship-five', 5);
     var ships = [ship1, ship2, ship3, ship4, ship5 ]    
     var enemyplayerboard = new Enemygameboard(Enemyboard, ships); 
     placeEnemyShips(enemyplayerboard, 0);     
     return enemyplayerboard;
    //remove start and rotate buttons...
    //create playerobjects
    //attach an event listener to the enemydom grid..
    //define player.js in other file..
            }
        }
    this.gameEnd = function() {
        //todo
    }
    this.checkIfGameEnd = function() {
        //todo
    }
    }

function placeEnemyShips(someEnemyplayerboard) {
var shipstoPlace = someEnemyplayerboard.ships.filter((shipobj) => !shipobj.isPlaced);
if (shipstoPlace.length == 0) 
{

}
else {
shipstoPlace.map((shipobj) => {
var coordinates = getRandomCoordinates(shipobj.length)
someEnemyplayerboard.placeShip(coordinates, shipobj, someEnemyplayerboard)
var newPlacedShipsCount = someEnemyplayerboard.ships.filter((ship) => ship.isPlaced).length;
placeEnemyShips(someEnemyplayerboard);
});
}
}


function getRandomCoordinates(length) {
  var max = 10 - length;
  var randomnumx = getRandomInt(max);
  var randomnumy = getRandomInt(9);
  return {y: randomnumy, x: randomnumx};
}

function getRandomInt(max) {
 return Math.floor(Math.random() * max);
    }

//now test that the enemy dom is created and the enemy ships are placed

export { game }