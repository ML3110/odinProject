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
