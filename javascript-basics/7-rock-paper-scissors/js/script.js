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

    else
        return false;
}

function playRound (computerSelection, playerSelection)
{
    var result;

    if (computerSelection == playerSelection)
        result = "Draw";

    else if (computerSelection == "rock")
    {
        if (playerSelection == "paper")
            result = "Win - Paper beats Rock";
        else if (playerSelection == "scissors")
            result = "Lose - Scissors loses to rock";
    }

    else if (computerSelection == "paper")
    {
        if (playerSelection == "rock")
            result = "Lose - Rock loses to Paper";
        else if (playerSelection == "scissors")
            result = "Win - Scissors beats Paper";
    }

    else if (computerSelection == "scissors")
    {
        if (playerSelection == "rock")
            result = "Win - Rock beats Scissors";
        else if (playerSelection == "paper")
            result = "Lose - Paper loses to Rock";
    }

    return result;
}

function game ()
{
    var winCount = 0;

    for (var i = 0; i < 5; i++)
    {
        const computerSelection = computerPlay ();
        const playerSelection = getPlayerInput ();

        var res = playRound (computerSelection, playerSelection);

        console.log (res);

        if (res.includes ("Win"))
            winCount++;
    }

    console.log ("You won " + winCount);
}

game ();