// Name : EMAL ISURANGA
// USER ID : M22W0278

class Player {
    
    constructor (name) {
        this.playerName = name;
        this.playLife = 3;
    }
      // Method
    getLives () {
        return this.playLife;
    }

    loseLife (){
        if(this.playLife > 0) {
            this.playLife = this.playLife - 1;
        }
        return this.playLife == 0 ?  console.log("game over") : this.playLife
    }
}

const player = new Player("EMAL");
console.log(player.getLives()); // outputs 3
player.loseLife(); // no output
console.log(player.getLives()); // outputs 2
player.loseLife(); // no output
console.log(player.getLives()); // outputs 1
player.loseLife(); // output will be "game over"
console.log(player.getLives()); // outputs 0
player.loseLife(); // no output
console.log(player.getLives()); // outputs 0




