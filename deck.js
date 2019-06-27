
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
        console.log(this.deck.join("\n"))

    }
    this.shuffle = function () {
        console.log("shuffle")
        var deck = this.deck
        let m = deck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        console.log(this.deck)
    }
    this.cardChosen = function (userNum, compNum) {
        var userCard = this.deck[userNum]
        var compCard = this.deck[compNum]
        console.log("Your card is " + userCard);
        console.log("Your card is " + compCard);

        if (parseInt(userCard[0]) > parseInt(compCard[0])) {
            console.log("You win")
        } else if (parseInt(userCard[0]) < parseInt(compCard[0])) {
            console.log("You lose")

        } else {
            console.log("its a tie")
        }

    }
}


module.exports = Deck;