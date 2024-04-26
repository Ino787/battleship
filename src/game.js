import { createEnemyGameboardDOM } from './dom.js'
import { ship } from './ship.js'
import {Enemygameboard} from './Enemygameboard.js'

function game() {
    this.player = null;
    this.Enemyplayer = null;
    this.gameStart = function(gameboard) {
     if (gameboard.ships.filter((ship) => ship.isPlaced).length == 5) {
     var Enemyboard = createEnemyGameboardDOM().board;
     var ship1 = new ship('ship-one', 2);
     var ship2 = new ship('ship-two', 3);
     var ship3 = new ship('ship-three', 3);
     var ship4 = new ship('ship-four', 4);
     var ship5 = new ship('ship-five', 5);
     var ships = [ship1, ship2, ship3, ship4, ship5 ]    
     var enemyplayerboard = new Enemygameboard(Enemyboard, ships); 
     placeEnemyShips(enemyplayerboard);        
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

function placeEnemyShips(someenemyplayerboard) {
someenemyplayerboard.ships.map((shipobj) => {
coordinates = getRandomCoordinates(shipobj.length)
someenemyplayerboard.placeShip(coordinates, shipobj, someenemyplayerboard)
});
}

function getRandomCoordinates(length) {
  var max = 10 - length;
  randomnumx = getRandomInt(some-num);
  randomnumy = getRandomInt(9);
  return {y: randomnumy, x: randomnumx};
}

function getRandomInt(max) {
 return Math.floor(Math.random() * max);
    }

//now test that the enemy dom is created and the enemy ships are placed