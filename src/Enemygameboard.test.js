import {Enemygameboard} from './Enemygameboard.js'
import {createEnemyGameboardDOM, createGameboardDOM} from './dom.js'
import {ship} from'./ship.js'



let ship1, ship2, ship3, ship4, ship5, enemyplayerboard;


beforeEach(() => {
    document.body.innerHTML = `
            <div id="header"> Battleship </div>
            <div id="main"></div>
            <div id="footer"> Copyright @ 2024 INO787</div>
        `;
    createGameboardDOM();
    const board = createEnemyGameboardDOM().board;

    ship1 = new ship('ship-one', 2);
    ship2 = new ship('ship-two', 3);
    ship3 = new ship('ship-three', 3);
    ship4 = new ship('ship-four', 4);
    ship5 = new ship('ship-five', 5);
    const ships = [ship1, ship2, ship3, ship4, ship5];
    enemyplayerboard = new Enemygameboard(board, ships);
    });

    it('should see if ships can be placed on enemyplayerboard.', () => {
        enemyplayerboard.placeShip({x: 5, y: 5}, ship2, enemyplayerboard);
        expect(enemyplayerboard.board[5][5].shipReferral).toBe(ship2);
        expect(enemyplayerboard.board[5][6].shipReferral).toBe(ship2);
        expect(enemyplayerboard.board[5][7].shipReferral).toBe(ship2);
        expect(enemyplayerboard.board[5][8].shipReferral).toBe(null);
        expect(ship2.isPlaced).toBe(true);
     });