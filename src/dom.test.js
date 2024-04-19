import {createGameboardDOM, createShipsDOM, createShipDOM, createStartandRotateButtonsDOM} from './dom.js'

describe('dom', () => {

beforeEach(() => {
    document.body.innerHTML = `
            <div id="header"> Battleship </div>
            <div id="main"></div>
            <div id="footer"> Copyright @ 2024 INO787</div>
        `;
});
    


it('should create a dom gameboard', () => {
    const gameboardDOM = createGameboardDOM();

    expect(document.body.contains(gameboardDOM)).toBe(true);

    expect(gameboardDOM.children[0].getAttribute('data-y')).toBe('0');
    expect(gameboardDOM.children[0].getAttribute('data-x')).toBe('0');

    expect(gameboardDOM.children[1].getAttribute('data-y')).toBe('0');
    expect(gameboardDOM.children[1].getAttribute('data-x')).toBe('1');

    expect(gameboardDOM.children[6].getAttribute('data-y')).toBe('0');
    expect(gameboardDOM.children[6].getAttribute('data-x')).toBe('6');


    expect(gameboardDOM.children[10].getAttribute('data-y')).toBe('1');
    expect(gameboardDOM.children[10].getAttribute('data-x')).toBe('0');

    expect(gameboardDOM.children[11].getAttribute('data-y')).toBe('1');
    expect(gameboardDOM.children[11].getAttribute('data-x')).toBe('1');

    expect(gameboardDOM.children[12].getAttribute('data-y')).toBe('1');
    expect(gameboardDOM.children[12].getAttribute('data-x')).toBe('2');

    expect(gameboardDOM.children[99].getAttribute('data-y')).toBe('9');
    expect(gameboardDOM.children[99].getAttribute('data-x')).toBe('9');

    expect(gameboardDOM.children.length).toBe(100);

});


it('should create a dom ships', () => {
    const ships =  createShipsDOM();
    const shipElements = ships.querySelectorAll('.ship');

    expect(document.body.contains(ships)).toBe(true);
    expect(ships.getAttribute('id')).toBe('ship-container');
    expect(shipElements.length).toBe(5);
});

  it('should create a dom ship', () => {
    
    const shipOne = createShipDOM('ship-one', 2);  
    const shipTwo = createShipDOM('ship-two', 3);
    const shipThree = createShipDOM('ship-three', 3);
    const shipFour = createShipDOM('ship-four', 4);
    const shipFive = createShipDOM('ship-five', 5);

    expect(shipOne.getAttribute('id')).toBe('ship-one');
    expect(shipTwo.getAttribute('id')).toBe('ship-two');
    expect(shipThree.getAttribute('id')).toBe('ship-three');
    expect(shipFour.getAttribute('id')).toBe('ship-four');
    expect(shipFive.getAttribute('id')).toBe('ship-five');

    expect(shipOne.getAttribute('data-length')).toBe('2');
    expect(shipTwo.getAttribute('data-length')).toBe('3');
    expect(shipThree.getAttribute('data-length')).toBe('3');
    expect(shipFour.getAttribute('data-length')).toBe('4');
    expect(shipFive.getAttribute('data-length')).toBe('5');

});

it('should create a dom buttons', () => {
    const gameButtonsContainer = createStartandRotateButtonsDOM();
  
    expect(document.body.contains(gameButtonsContainer)).toBe(true);
  
    expect(gameButtonsContainer.children[0].getAttribute('class')).toBe('button');
    expect(gameButtonsContainer.children[0].textContent).toBe('Start');

    expect(gameButtonsContainer.children[1].getAttribute('class')).toBe('button');
    expect(gameButtonsContainer.children[1].textContent).toBe('Rotate');

  
  });



});

