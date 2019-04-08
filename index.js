'use strict';
class Card {
    constructor() {
        this.width = 4;
        this.height = 6;
    }
}
class StandardCard extends Card {
    constructor(suit) {
        super();
        this.suit  = suit;
    }
     static SUITS = ['spades', 'hearts', 'diamonds', 'clubs'];

    
    
    // static SUITS(){
    //     const faces = ['spades','hearts', 'diamonds', 'clubs'];
    //     return faces;
    // }
}

const aces = [];
//console.log(StandardCard.SUITS);
StandardCard.SUITS.forEach(suit => aces.push(new StandardCard(suit)));
console.log(aces);
class stack {

}
class Game {

}