import { createEnemyGameboardDOM } from './dom.js'
import { ship } from './ship.js'
import {Enemygameboard} from './Enemygameboard.js'
import {Player} from './player.js'
import './game.css'

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
     var ships = [ship1, ship2, ship3, ship4, ship5]    
     var enemyplayerboard = new Enemygameboard(Enemyboard, ships); 
     placeEnemyShips(enemyplayerboard, enemyplayerboard.ships);    
     var shipContainer = document.getElementById("ship-container");
     shipContainer.remove();
     var gameButtons= document.getElementById("gamebuttons");
     gameButtons.remove();
     var mainDiv = document.querySelector('#main');
     var textContainer = document.createElement("div");
     textContainer.id = "text-container"
     mainDiv.insertBefore(textContainer, mainDiv.firstChild);
     textContainer.innerText = "SINK ALL ENEMY SHIPS TO WIN!"
     this.Enemyplayer = new Player(enemyplayerboard);
     this.player = new Player(someGameboard);
     attachReceiveAttackEventToGrid(this);
            }
        }
    this.gameEnd = function() {
    var enemyboardDOMElements = Array.from(document.getElementById('enemy-gameboard').children);
    enemyboardDOMElements.forEach((enemyboardDOMElement) => {
    enemyboardDOMElement.removeEventListener('click', handleClickFunction);
        });
        var textContainer = document.querySelector('#text-container');
        textContainer.innerText = "GAME HAS ENDED!"
    }

    this.checkIfGameEnd = function(someplayer) {
    var sunkedShips = someplayer.gameboard.ships.filter((shipobj) => shipobj.isSunked);
    if (sunkedShips.length == 5) {
    this.gameEnd();
    return true; 
}
    return false;
    }
    }

    var handleClickFunction;

    function attachReceiveAttackEventToGrid(somegame) {
    var enemyboardDOMElements = Array.from(document.getElementById('enemy-gameboard').children);
        
    handleClickFunction = function handleClick(event) {
    var coordinates = { x: parseInt(event.target.dataset.x), y: parseInt(event.target.dataset.y) };
    if (somegame.Enemyplayer.receiveAttack(coordinates)) {
        somegame.checkIfGameEnd(somegame.Enemyplayer);
        attackOurPlayer(somegame.player);
        somegame.checkIfGameEnd(somegame.player);
        } else {
        console.log('You already attacked this cell.');
            }
        };
        
        enemyboardDOMElements.forEach((enemyboardDOMElement) => {
            enemyboardDOMElement.addEventListener('click', handleClickFunction);
        });
    }
    
    

function attackOurPlayer(someplayer) {
    var randomCoordinates = { y: getRandomInt(9), x: getRandomInt(9) };
    if (someplayer.receiveAttack(randomCoordinates)) {
        return true;
    } else {
        return attackOurPlayer(someplayer); 
    }
}






function placeEnemyShips(someEnemyplayerboard, shipsToPlace) {
if (shipsToPlace.length == 0) 
{
return someEnemyplayerboard;
}
else {
shipsToPlace.map((shipobj) => {
var coordinates = getRandomCoordinates(shipobj.length)
someEnemyplayerboard.placeShip(coordinates, shipobj, someEnemyplayerboard)
});
var newPlacedShips = someEnemyplayerboard.ships.filter((ship) => !ship.isPlaced);
placeEnemyShips(someEnemyplayerboard, newPlacedShips);
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


export { game }