
import {createGameboardDOM, createShipDOM, createShipsDOM} from './dom.js'
import {ship} from'./ship.js'
import {gameboard, placeShipVertical, ensureEnoughPlacesAreAvailIfVertical, countHowManyCellsAvail, checkIfCellsAreEmptyIfVertical, placeShipVerticalHelper, placeShipHorizantal, ensureEnoughPlacesAreAvailIfHorizantal, checkIfCellsAreEmptyIfHorizantal, placeShipHorizantalHelper} from'./gameboard.js'

let ship1, ship2, ship3, ship4, ship5, playerboard;


beforeEach(() => {
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
        });


    it('should see if countHowManyCellsAvail works...', () => {
        expect(countHowManyCellsAvail(0, 1)).toBe(10);
        expect(countHowManyCellsAvail(1, 1)).toBe(9);
        expect(countHowManyCellsAvail(2, 1)).toBe(8);
        expect(countHowManyCellsAvail(3, 1)).toBe(7);
        expect(countHowManyCellsAvail(4, 1)).toBe(6);
        expect(countHowManyCellsAvail(5, 1)).toBe(5);
        expect(countHowManyCellsAvail(6, 1)).toBe(4);
        expect(countHowManyCellsAvail(7, 1)).toBe(3);
        expect(countHowManyCellsAvail(8, 1)).toBe(2);
        expect(countHowManyCellsAvail(9, 1)).toBe(1); 
    })

    it('should see if it  ensureEnoughPlacesAreAvail works for both horizantal and vert...', () => {
        expect(ensureEnoughPlacesAreAvailIfHorizantal({x: 0, y: 0}, ship1)).toBe(true);
        expect(ensureEnoughPlacesAreAvailIfHorizantal({x: 7, y: 0}, ship1)).toBe(true);
        expect(ensureEnoughPlacesAreAvailIfHorizantal({x: 8, y: 0}, ship1)).toBe(true);
        expect(ensureEnoughPlacesAreAvailIfHorizantal({x: 9, y: 0}, ship1)).toBe(false);
        expect(ensureEnoughPlacesAreAvailIfVertical({x: 0, y: 7}, ship1)).toBe(true);
        expect(ensureEnoughPlacesAreAvailIfVertical({x: 0, y: 8}, ship1)).toBe(true);
        expect(ensureEnoughPlacesAreAvailIfVertical({x: 0, y: 8}, ship2)).toBe(false);
        expect(ensureEnoughPlacesAreAvailIfVertical({x: 0, y: 6}, ship3)).toBe(true);
      });

    it('should see if it  checkIfCellsAreEmpty works for both horizantal and vert...', () => {
        expect(checkIfCellsAreEmptyIfHorizantal({x: 0, y: 0}, 5, playerboard)).toBe(true);
        expect(checkIfCellsAreEmptyIfVertical({x: 0, y: 0}, 5, playerboard)).toBe(true);
        expect(checkIfCellsAreEmptyIfVertical({x: 0, y: 2}, 5, playerboard)).toBe(true);
      });

     it('should see if ships are placed after drop.', () => {
        const dropEventMock = jest.fn();
        dropEventMock.mockReturnValue(playerboard.placeShip({x: 5, y: 5}, ship2, playerboard));
        const removedElement = document.getElementById(ship2.name);
        dropEventMock();
        expect(playerboard.board[5][5].shipReferral).toBe(ship2);
        expect(playerboard.board[5][5].place.classList.contains('blue-background')).toBe(true);
        expect(document.getElementById('ship-two')).toBeNull();
        expect(removedElement).toBeNull();
        expect(ship2.isPlaced).toBe(true);
        expect(checkIfCellsAreEmptyIfVertical({x: 5, y: 5}, ship2.length, playerboard)).toBe(false);
     });

     it('should see if ships are rotated.', () => {
        playerboard.rotate();
        expect(ship1.isRotated).toBe(true);
        expect(ship2.isRotated).toBe(true);
        expect(ship3.isRotated).toBe(true);
        expect(ship4.isRotated).toBe(true);
        expect(ship5.isRotated).toBe(true);
        expect(document.getElementById('ship-one').classList.contains('rotate')).toBe(true);
        expect(document.getElementById('ship-two').classList.contains('rotate')).toBe(true);
        expect(document.getElementById('ship-three').classList.contains('rotate')).toBe(true);
        expect(document.getElementById('ship-four').classList.contains('rotate')).toBe(true);
        expect(document.getElementById('ship-five').classList.contains('rotate')).toBe(true);
     });

     it('should see if rotated ships are placed.', () => {
        playerboard.rotate();
        const dropEventMock = jest.fn();
        dropEventMock.mockReturnValue(playerboard.placeShip({x: 5, y: 5}, ship2, playerboard));
        const removedElement = document.getElementById(ship2.name);
        dropEventMock();
        expect(playerboard.board[5][5].shipReferral).toBe(ship2);
        expect(playerboard.board[5][5].place.classList.contains('blue-background')).toBe(true);
        expect(playerboard.board[6][5].shipReferral).toBe(ship2);
        expect(playerboard.board[6][5].place.classList.contains('blue-background')).toBe(true);
        expect(playerboard.board[7][5].shipReferral).toBe(ship2);
        expect(playerboard.board[7][5].place.classList.contains('blue-background')).toBe(true);
        expect(document.getElementById('ship-two')).toBeNull();
        expect(removedElement).toBeNull();
        expect(ship2.isPlaced).toBe(true);
        expect(ship2.isRotated).toBe(true);
        expect(checkIfCellsAreEmptyIfVertical({x: 5, y: 5}, ship2.length, playerboard)).toBe(false);
     });

     it('should see if only the nonplaced ships are rotated.', () => {
        const dropEventMock = jest.fn();
        dropEventMock.mockReturnValue(playerboard.placeShip({x: 5, y: 5}, ship2, playerboard));
        dropEventMock();        
        playerboard.rotate();
        expect(ship2.isRotated).toBe(false);
        expect(ship1.isRotated).toBe(true);
        expect(ship3.isRotated).toBe(true);
        expect(ship4.isRotated).toBe(true);
        expect(ship5.isRotated).toBe(true);
     });




        
    