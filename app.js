let input = "y";
let play = 0;
let com = 0;

function greeting() {
    alert("Welcome to Twenty! In this game we will go against each other trying to get the closest to 20")
    alert("You'll go first")
}

function ranNumber() {
    var ran = Math.floor(Math.random() * 10) + 1
    return ran
}

var val = 0;

function playerTurn() {
     //function (PLAYER TURN)
    do {

        pval = pval + ranNumber();

        if (pval > 20){

            alert(`You got ${pval} and lost.`)
            com++;
        }
        
        else if(pval == 20){
            break;
        }

        else {
            option = window.prompt(`You have ${pval}.If you want to draw press 1 if you want to stop press 2.`)
        }
        
    } while ((option != "2") && (pval < 20))
}   


function nextTurn() {
    alert("Now it's the computer's turn")
}


var pval = 0;
var option = 0;


function computerTurn() {
    do {
        
            val = val + ranNumber();
        
            if (val < 16){
        
                alert(`I have ${val}. I'm going to draw`)
            }
               
            else if(val == 20){
                break;
            }
               
            else if(val > 20){
                break;
            }
               
            else if(val >= 16){
                
                alert(`I have ${val}. I think I'll stop here.`)
        }
         
    } while(val < 16)
}



function checking() {
    
    if ((pval <= 20) && (val <= 20) && (pval > val) && (pval != 20) || (pval == 20)){
        alert(`You got ${pval} and Won.`)
        play++;
    }

    else if (val > 20){

        alert(`I got ${val} and lost.`)
        play++;
    }

    else if ((val > pval) && (val <= 20) && (pval <= 20)){

        alert(`I got ${val} and won.`)
        com++;
    }

    else if ((val == pval) && (pval >= 20)){

        alert(`We got ${pval} and tied.`)
    }



    if (input == "1"){
        val = 0;
        pval = 0;
    }

    console.log(val)
    console.log(pval)

} 

function playGame() {
    pval = 0;
    val = 0;
    playerTurn()
    nextTurn()
    computerTurn()
    checking()
    var input = window.prompt(`The score is ${com} for me and ${play} for you. Would you like to play again? If yes press 1 if no press 2`)
    if (input == "1") {
        playGame()
    } else {
        alert("Thank you for playing")
    }

}
greeting()
playGame()