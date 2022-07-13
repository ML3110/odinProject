var choices = ["rock", "paper", "scissors"];

function computerPlay ()
{
    return choices [Math.floor (Math.random () * choices.length)];
}

function getPlayerInput ()
{
    var selection = prompt ("Enter your selection").toLowerCase ();

    if (choices.includes (selection))
        return selection;
}

function playRound (computerSelection, playerSelection)
{
    var result;

    if (computerSelection == playerSelection)
        result = "Draw";

    else if (computerSelection == "rock")
    {
        if (playerSelection == "paper")
            result = "Win";
        else if (playerSelection == "scissors")
            result = "Lose";
    }

    else if (computerSelection == "paper")
    {
        if (playerSelection == "rock")
            result = "Lose";
        else if (playerSelection == "scissors")
            result = "Win";
    }

    else if (computerSelection == "scissors")
    {
        if (playerSelection == "rock")
            result = "Win";
        else if (playerSelection == "paper")
            result = "Lose";
    }

    return result;
}

const computerSelection = computerPlay ();
const playerSelection = getPlayerInput ();

console.log (playRound (computerSelection, playerSelection));