import './player.css';

function Player(gameboard) {
    this.gameboard = gameboard;
    this.receiveAttack = function(coordinates) {
      const cell = this.gameboard.board[coordinates.y][coordinates.x];
      if (cell.beenAttacked) {
        return false; 
    } else {
        cell.beenAttacked = true; 
        if (cell.shipReferral !== null) {
            cell.shipReferral.incrementHits(); 
            cell.place.classList.add('red-background');
            return true;
        } else {
            cell.place.classList.add('green-background'); 
            return true;
        }
    }
}
}

export { Player }

