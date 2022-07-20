const rock = "Rock"
const scissors = "Scissors"
const paper = "Paper"
const choices = [rock, paper, scissors]

const YouWin = 0
const ComputerWins = 1
const Draw = 2

function computerPlay()
{
    const index = Math.floor(Math.random() * choices.length)
    return choices[index]
}

function playRound(playerSelection, computerSelection)
{
    const winnerPairs = [[rock, scissors], [scissors, paper], [paper, rock]]
    for (let i = 0; i < winnerPairs.length; i++)
    {
        if (playerSelection === computerSelection)
        {
            return {
                result: Draw,
                message: `Draw! ${playerSelection} equals ${computerSelection}.`
            }
        }

        const winnerPair = winnerPairs[i]
        if (playerSelection === winnerPair[0] && computerSelection === winnerPair[1])
        {
            return {
                result: YouWin,
                message: `You win! ${playerSelection} beats ${computerSelection}.`
            }
        }
        if (computerSelection === winnerPair[0] && playerSelection === winnerPair[1])
        {
            return {
                result: ComputerWins,
                message: `You lose! ${computerSelection} beats ${playerSelection}.`
            }
        }
    }
}

function promptUser() {
    let playerSelection
    do {
        playerSelection = prompt("Paper, Rock or Scissors?")
        playerSelection = choices.find((choice) => choice.toLowerCase() === playerSelection.toLowerCase())
    } while (playerSelection === undefined)
    return playerSelection
}

function game() {
    let playerWins = 0
    let computerWins = 0
    for (let i = 0; i < 5; i++)
    {
        const playerSelection = promptUser()
        const computerSelection = computerPlay()
        const res = playRound(playerSelection, computerSelection)
        console.log(res.message)
        if (res.result === YouWin) {
            playerWins += 1
        }
        if (res.result === ComputerWins) {
            computerWins += 1
        }
    }

    if (playerWins > computerWins) {
        return "You win!"
    }
    if (computerWins > playerWins) {
        return "Computer wins!"
    }
    return "Draw!"
}

function startGame() {
    console.log(game())
}

