// require my packages
var inquirer = require("inquirer");
var fs = require("fs");

// require my Constructors
var Deck = require("./deck.js")
var inventory = require("./inventory.js")

// variables
var suits = ["Heart", "Spades", "Clubs", "Diamonds"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function playGame() {

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
        // Check if user wnats to play game
        if (answer.gamechoice === "Yes") {
            let Deck1 = new Deck(suits, values)
            Deck1.reset()
            Deck1.shuffle()
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
                Deck1.cardChosen(answers.usercard, answers.compcard)
                inquirer.prompt([
                    {
                        type: "list",
                        name: "playAgain",
                        message: "Do you wanna play again?",
                        choices: ["Yes", "No"],
                        default: 0
                    }
                ]).then(function (answers) {
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
