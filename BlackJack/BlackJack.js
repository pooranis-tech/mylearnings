let player={
    name:"Per",
    chips: 200
};
let cards=[];
let count=0;
let sum=0;
let hasJack=false;
let aLive=false;
let message="";
let messageEl=document.getElementById("message-el");
let countEl=document.getElementById("count-el");
let cardsEl=document.getElementById("cards-el");
let playerEl=document.getElementById("player-el");
playerEl.innerText= player.name +":$ "+player.chips;
function randomNumber(){
    let randomnumber=Math.floor(Math.random()*13)+1;
    if(randomnumber>10){
        return 10;
    }else if(randomnumber===1){ 
        return 11;
    }
    else{
        return randomnumber;
    }
}

function startgame(){
    aLive=true;
    if(aLive==true && hasJack==false){
        let firstCard=randomNumber();
        console.log(firstCard);
        let secondCard=randomNumber();
        cards=[firstCard,secondCard];
        sum=firstCard+secondCard;
        rendergame();
    }
  
}
function newcard(){
    if(aLive==true && hasJack==false){
        let thirdCard=randomNumber();
        cards.push(thirdCard);
        sum+=thirdCard;
        rendergame();
    }
}
function rendergame(){
    cardsEl.innerText= "Cards :";
    countEl.innerText= "Count :"+ sum;
for(let i=0;i<cards.length;i++){
    cardsEl.innerHTML+= cards[i]+ " ";
}
    if(sum<=20){
        messageEl.innerText="Do you want to draw another card ?"
    }else if(sum===21){
        messageEl.innerText="You won a BlackJack"
        hasJack=true;
    }else{
        messageEl.innerText="You are out of the game"
        aLive=false;
    }
}