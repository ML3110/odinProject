var choices = ["rock", "paper", "scissors"];

function computerPlay ()
{
    return choices [Math.floor (Math.random () * choices.length)];
}

function getPlayerInput ()
{
    var choiceMade = false;

    while (! choiceMade)
    {
        var selection = prompt ("Enter your selection").toLowerCase ();

        if (choices.includes (selection))
            choiceMade = true;
    }

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

function game (playerSelection)
{
    var computerSelection = computerPlay ();
    var res = playRound (computerSelection, playerSelection);

    console.log (res);

    const results = document.querySelector ('#results');

    const content = document.createElement ('div');

    content.classList.add ('content');

    content.textContent = res;

    results.appendChild (content);
}

