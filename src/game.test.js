import {Enemygameboard} from './Enemygameboard.js'
import {createEnemyGameboardDOM, createGameboardDOM, createShipsDOM} from './dom.js'
import {ship} from'./ship.js'
import {game} from'./game.js'
import {gameboard} from'./gameboard.js'



let ship1, ship2, ship3, ship4, ship5, playerboard , myGame;

beforeEach(() => {
    document.body.innerHTML = `
            <div id="header"> Battleship </div>
            <div id="main"></div>
            <div id="footer"> Copyright @ 2024 INO787</div>
        `;
        document.body.innerHTML = `
                <div id="header"> Battleship </div>
                <div id="main"></div>
                <div id="footer"> Copyright @ 2024 INO787</div>
            `;
    
        const board = createGameboardDOM().board;
        const shipsDOM =  createShipsDOM();

        ship1 = new ship('ship-one', 2);
        ship2 = new ship('ship-two', 3);
        ship3 = new ship('ship-three', 3);
        ship4 = new ship('ship-four', 4);
        ship5 = new ship('ship-five', 5);
        const ships = [ship1, ship2, ship3, ship4, ship5];
        playerboard = new gameboard(board, ships);
        myGame = new game();
        
    });

    it('should see that when gamestart is called, that all ships are placed in enemyplayerboard.', () => {
        const dropEventMock = jest.fn();
        dropEventMock
        .mockReturnValue(playerboard.placeShip({x: 5, y: 5}, ship2, playerboard))
        .mockReturnValue(playerboard.placeShip({x: 5, y: 6}, ship1, playerboard))
        .mockReturnValue(playerboard.placeShip({x: 5, y: 7}, ship3, playerboard))
        .mockReturnValue(playerboard.placeShip({x: 5, y: 8}, ship4, playerboard))
        .mockReturnValue(playerboard.placeShip({x: 5, y: 9}, ship5, playerboard))
        dropEventMock();
        dropEventMock();
        dropEventMock();
        dropEventMock();
        dropEventMock();
        expect(playerboard.ships.filter((ship) => ship.isPlaced).length).toBe(5);
        expect(myGame.gameStart(playerboard).ships.filter((ship) => ship.isPlaced).length).toBe(5);
     });