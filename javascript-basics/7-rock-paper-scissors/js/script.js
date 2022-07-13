function computerPlay ()
{
    var choices = ["Rock", "Paper", "Scissors"];

    return choices [Math.floor (Math.random () * 3)];
}

console.log (computerPlay ())