var choices = ["rock","paper","scissors"] ;

function computerChoices() {
    return choices[Math.floor(Math.random() * 3)];
}

function whoIsWinner(player, computer) {
    if (player===computer) return('No winner');
    if (
        (player==="rock" && computer==="scissors") ||
        (player==="paper" && computer==="rock") ||
        (player==="scissors" && computer==="paper")
        ) {
            return('You are the winner');
        }
        else {
            return('Computer won');
        }
}

function Game() {
    var plyr = prompt("What is your choice ?").toLowerCase();

    while (plyr !== 'rock' && plyr !== 'paper' && plyr !== 'scissors'){
        alert('You enter the wrong thing. You can choise rock or paper or scissors. Please choise again !');
        plyr = prompt("What is your choice ?").toLowerCase();
    }

    var cmp = computerChoices();
    var result = whoIsWinner(plyr,cmp);
    alert('Siz: ' + plyr + "," + ' Computer:' + cmp + " secti.");
    alert(result);

}


var playerChoice = true;

 while(playerChoice){
    Game();
    playerChoice = confirm("Would you like to play again") ;   
 }

 alert('thanks for playing');

