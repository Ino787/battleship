function ship(name, length) {
    this.name = name;
    this.length = length;
    this.isPlaced = false;
    this.isRotated = false;
    this.currentHits = 0;
    this.isSunked = false;
    this.incrementHits = function() {
      this.currentHits = this.currentHits + 1;
      if (this.currentHits == this.length) {
        this.isSunked = true;
      }
      else {
        //do nothing..
      }
    }
  }

  export {ship};
