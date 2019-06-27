// require my packages
var inquirer = require("inquirer");
var fs = require("fs");

// require my Constructors
var Deck = require("./deck.js")
var inventory = require("./inventory.js")

// variables
var suits = ["Heart", "Spades", "Clubs", "Diamonds"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var counter = 0

// function that will start our game
function playGame() {

    // prompt user if they want to play a game
    inquirer.prompt([
        // pass questions here
        {
            type: "list",
            name: "gamechoice",
            message: "OK so im going to shuffle the cards and whoever gets the highest card wins, ready?",
            choices: ["Yes", "No"],
            default: 0
        }
    ]).then(function (answer) {
        // Check if user wants to play game
        if (answer.gamechoice === "Yes") {
            // make a new deck for constructor
            var Deck1 = new Deck(suits, values)
            // call the reset function put card into deck
            Deck1.reset()
            // call function to shuffle deck
            Deck1.shuffle()

            // prompt user to choice a random number for his card and computers card
            inquirer.prompt([
                {
                    type: "input",
                    name: "usercard",
                    message: `Pick a number betweeen 1 - ${Deck1.deck.length}: This will be your card: `,
                    validate: function (value) {
                        if (value > 0 && value <= 52) {
                            return true
                        }
                        else return "Please enter a valid number!"
                    }
                },
                {
                    type: "input",
                    name: "compcard",
                    message: `Pick a number betweeen 1 -  ${Deck1.deck.length}: This will be the computers card: `,
                    validate: function (value) {
                        if (value > 0 && value <= 52) {
                            return true
                        }
                        else return "Please enter a valid number!"
                    }
                }

            ]).then(function (answers) {
                // call function to compare card and see who won
                Deck1.cardChosen(answers.usercard, answers.compcard)

                // ask user if they want to play again
                inquirer.prompt([
                    {
                        type: "list",
                        name: "playAgain",
                        message: "Do you wanna play again?",
                        choices: ["Yes", "No"],
                        default: 0
                    }
                ]).then(function (answers) {

                    // if yes then recall play game function if no exit
                    if (answers.playAgain === "Yes") {
                        playGame()
                    } else {
                        process.exit()
                    }
                })

            })

        } else {
            console.log("Ok dont play my game")
        }


    }
    )

    //////////////End of Function////////////
}
playGame()
