import './styles.css';
import { print } from './print.js'
import {createGameboardDOM, createShipsDOM, createShipDOM, createStartandRotateButtonsDOM} from './dom.js'
import {attachDraggableAttributetoShips, attachDragStartEventListenertoShips, attachDragOverEventListenertoGrid, attachDropEventListenertoGrid} from './dragdrop.js'
import {gameboard, placeShipVertical, ensureEnoughPlacesAreAvailIfVertical, countHowManyCellsAvail, checkIfCellsAreEmptyIfVertical, placeShipVerticalHelper, placeShipHorizantal, ensureEnoughPlacesAreAvailIfHorizantal, checkIfCellsAreEmptyIfHorizantal, placeShipHorizantalHelper} from'./gameboard.js'
import { ship } from './ship.js'
import {attachClickEventListenerToRotateButton} from './buttonevents.js'

const board = createGameboardDOM().board;
const shipsDOM =  createShipsDOM();

createStartandRotateButtonsDOM();

const ship1 = new ship('ship-one', 2);
const ship2 = new ship('ship-two', 3);
const ship3 = new ship('ship-three', 3);
const ship4 = new ship('ship-four', 4);
const ship5 = new ship('ship-five', 5);
const ships = [ship1, ship2, ship3, ship4, ship5];

const playerboard = new gameboard(board, ships);

attachDraggableAttributetoShips();

attachDragStartEventListenertoShips();

attachDragOverEventListenertoGrid();

attachDropEventListenertoGrid(playerboard);

attachClickEventListenerToRotateButton(playerboard);


console.log('testing webpack');