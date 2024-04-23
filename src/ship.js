function ship(name, length) {
    this.name = name;
    this.length = length;
    this.isPlaced = false;
    this.isRotated = false;
    this.currentHits = 0;
    //this.checkIfSunked = checkIfSunked();
  }



  export {ship};
