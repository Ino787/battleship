import './styles.css';
import { print } from './print.js'
import {createGameboardDOM, createShipsDOM, createShipDOM, createStartandRotateButtonsDOM} from './dom.js'

createGameboardDOM();

createShipsDOM();

createStartandRotateButtonsDOM();

print();

console.log('testing webpack');