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



// PART #2

function getObjectSum(numberObject1,numberObject2){
    let sum1 = 0;
    let sum2 = 0;
    Object.values(numberObject1).forEach(val => {
        sum1 += val;
    });
    Object.values(numberObject2).forEach(val => {
        sum2 += val;
    });
    
    return Math.max(sum1,sum2);
}
