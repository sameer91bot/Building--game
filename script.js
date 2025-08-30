let userScore =0;
let compScore =0;
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
const gencompChoice=() =>{
    const options =["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame =() =>{
    console.log("game was draw");
    msg.innerText="game was draw play next move "
    msg.style.backgroundColor="#081b31"
}
const showWinner =(userWin)=>{
    if(userWin){
        console.log("you win")
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="you win"
         msg.style.backgroundColor ="green"
    }
    else{
        console.log("you lose");
        msg.innerText="you lose"
        compScore++;
        compScorePara.innerText=compScore;
        msg.style.backgroundColor ="red"
    }
}
const playGame=(userChoice) =>{
    console.log("user choice =",userChoice)
    const compChoice =gencompChoice();
    console.log("comp choice =",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{let userWin=true;
        if(userChoice==="rock"){
      userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors"?false:true;
        }
        else{
            userWin= compChoice==="rock"?false:true;
        }
         showWinner(userWin);
    }
   
    
}
choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    })
})
