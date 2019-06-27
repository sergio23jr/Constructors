
// create our Deck constructor
function Deck(suits, values) {
    this.deck = []
    this.reset = function () {
        // reset the shuffled deck to now be in order
        this.deck = [];

        // for in loop to push all cars into deck  
        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
        // console.log(this.deck

    }
    this.shuffle = function () {
        // variable just for easier comprehension
        var deck = this.deck
        // Dont really know what this does got it from example
        let m = deck.length, i;

        // shuffles the deck
        while (m) {
            i = Math.floor(Math.random() * m--);

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        // console.log(this.deck)
    }

    this.cardChosen = function (userNum, compNum) {

        // two variables that grag the card values
        var userCard = this.deck[userNum]
        var compCard = this.deck[compNum]

        // logging to user to see who got what card
        console.log("Your card is " + userCard);
        console.log("Your card is " + compCard);

        // compare integers and log corresponding result
        if (parseInt(userCard[0]) > parseInt(compCard[0])) {
            console.log("You win")
        } else if (parseInt(userCard[0]) < parseInt(compCard[0])) {
            console.log("You lose")

        } else {
            console.log("its a tie")
        }

    }
}

// export the Deck object
module.exports = Deck;