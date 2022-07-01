function computerPlay() {
    let rand = Math.floor(Math.random()*3);
    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    let win = false;
    if(playerSelection===computerSelection) {
        return "tie";
    }
    if(
        (playerSelection==="rock" && computerSelection==="scissors") ||
        (playerSelection==="paper" && computerSelection==="rock") ||
        (playerSelection==="scissors" && computerSelection==="paper")
    ) {
        return "player";
    } else if(
        (computerSelection==="rock" && playerSelection==="scissors") ||
        (computerSelection==="paper" && playerSelection==="rock") ||
        (computerSelection==="scissors" && playerSelection==="paper")
    ) {
        return "computer";
    } else {
        return "invalid";
    }
}
function game() {
    let i = 0;
    let pScore = 0;
    let cScore = 0;
    while (i<5) {
        let p = prompt("Enter choice: ").toLowerCase();
        let c = computerPlay();
        let result = playRound(p, c);
        if(result==="player") {
            pScore++;
        }
        if(result==="computer") {
            cScore++;
        }
        console.log("Round result: "+result);
        console.log("player chose "+p+", computer chose "+c)
        i++;
    }
    let winner = "";
    if(pScore>cScore) {
        winner = "player";
    } else if(cScore>pScore) {
        winner = "computer";
    } else if(cScore===pScore) {
        winner = "tie";
    }
    console.log("Winner: "+winner);
}
game();