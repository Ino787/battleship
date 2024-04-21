import './styles.css';
import { print } from './print.js'
import {createGameboardDOM, createShipsDOM, createShipDOM, createStartandRotateButtonsDOM} from './dom.js'
import {attachDraggableAttributetoShips, attachDragStartEventListenertoShips, attachDragOverEventListenertoGrid, attachDropEventListenertoGrid} from './dragdrop.js'

createGameboardDOM();

createShipsDOM();

createStartandRotateButtonsDOM();

print();

attachDraggableAttributetoShips();

attachDragStartEventListenertoShips();

attachDragOverEventListenertoGrid();

attachDropEventListenertoGrid();

console.log('testing webpack');