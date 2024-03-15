$(function() {
    let baseURL = "https://deckofcardsapi.com/api/deck"


async function drawCard() {
    let data = await $.getJSON(`${baseURL}/new/draw`);
    let {suit, value} = data.cards[0];
    console.log(`${value} of ${suit}`)
}

drawCard()



async function part2 () {
let firstCardData = await $.getJSON(`${baseURL}/new/draw`);
let deckId = firstCardData.deck_id;
let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw`);
[firstCardData,secondCardData].forEach((card) => {
    let { suit, value } = card.cards[0];
    console.log (`${value} of ${suit}`);
});

}  

 part2()

async function part3 (){
let $btn = $("button");
let $cardArea = $("#card-area");   

let deck = await $.getJSON(`${baseURL}/new/shuffle`);
$btn.show().on("click", async function() {
let card = await $.getJSON(`${baseURL}/${deck.deck_id}/draw`)
let cardSrc = card.cards[0].image;
$cardArea.append($("<img>", { 
            src: cardSrc
       })
    );
 if (card.remaining === 0) $btn.remove();

 });
}
part3();

 });



  
        

    

        
         
        
       
     





