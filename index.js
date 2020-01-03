let xIsNext = true;
let nextPlayer;
let player;
let nextPerson;
let gameOver = false;

function isNext(elementId) {
    
    if (xIsNext == true) {
        player = 'X';
    } else {
        player = 'O';
    }
    if (player == 'X') {
        nextPerson = 'O';
    } else {
        nextPerson = 'X';
    } 

   


if (document.getElementById("single").checked) {
    calculateWinner(player);
    nextUp(player, elementId);
    
    let positionArray = [];
    let computerPlayer;
    for(i = 0; i < 9; i++) {
        if (document.getElementById(`position${i}`).textContent === "") {
        positionArray.push(i) ;
        }
    }
    if (player == 'X') {
        computerPlayer = 'O';
        nextPerson = 'X';
    } else {
        computerPlayer = 'X';
        nextPerson = '0';
    }
    
    randomPosition = positionArray[Math.floor(Math.random() * positionArray.length)]
    
    if (gameOver === false) {
        document.getElementById("next").textContent = nextPerson + ' is next!'
        nextUp(computerPlayer, `position${randomPosition}`);
    } else {
        console.log(gameOver);
        
        return;
    }
    

} else if (document.getElementById("double").checked) {
    document.getElementById("next").textContent = nextPerson + ' is next!'
   return nextUp(player, elementId);
}

return;
}


function nextUp(player, elementId) {
    document.getElementById(elementId).textContent = player;
    document.getElementById(elementId).disabled = true;
    gameOver = false;
    calculateWinner(player);
        return xIsNext = !xIsNext;
    
}




function calculateWinner(player) {
    box0 = document.getElementById("position0").textContent
    box1 = document.getElementById("position1").textContent
    box2 = document.getElementById("position2").textContent
    box3 = document.getElementById("position3").textContent
    box4 = document.getElementById("position4").textContent
    box5 = document.getElementById("position5").textContent
    box6 = document.getElementById("position6").textContent
    box7 = document.getElementById("position7").textContent
    box8 = document.getElementById("position8").textContent

    winner = [
        [box0, box1, box2],
        [box3, box4, box5],
        [box6, box7, box8],
        [box0, box4, box8],
        [box0, box3, box6],
        [box1, box4, box7],
        [box2, box5, box8],
        [box2, box4, box6]
    ]

    catsGame = [ box0, box1, box2, box3, box4, box5, box6, box7, box8]

for (i = 0; i < winner.length; i++) {
    if (winner[i][0] != "" && winner[i][0] === winner[i][1] && winner[i][1] === winner[i][2] && winner[i][0] === winner[i][2] ) {
        document.getElementById("next").textContent = player +" wins!";
        console.log(`hi ${player}`);
        for(y = 0; y < 9; y++) {
            document.getElementById(`position${y}`).disabled = true;
            
        } 
        gameOver = true;
        break;
    } else if (
        !catsGame.includes("") && ((winner[i][0] === winner[i][1] && winner[i][1] === winner[i][2] && winner[i][0] === winner[i][2] ) != true)) {
        document.getElementById("next").textContent = "Cat's game...how could you do such a thing?!";
        gameOver = true;
    }
    
}
}

function reset() {
    for(i = 0; i < 9; i++) {
        document.getElementById(`position${i}`).textContent = '';
        document.getElementById(`position${i}`).disabled = false;
    }
    document.getElementById('next').textContent = 'Welcome to Tic Tac Toe you fool! X is first. Do your best!';
    xIsNext = true;
    return;
}


