let baseURL = "http://numbersapi.com";
let favNumber = 17;

async function getNumberTrivia () {
    let res = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(res)
}

getNumberTrivia()

let favNumbers = [6,9,96];
async function getNumbersTrivia () {
    let res = await $.getJSON(`${baseURL}/${favNumbers}?json`);
    console.log(res)
}

getNumbersTrivia()




async function getMultipleFacts() {
    let facts = await Promise.all(
        Array.from({length: 4}, () => 
        $.getJSON(`${baseURL}/${favNumber}?json`))
   );
   facts.forEach(data => {
    $("ul").append(`<li>${data.text}</li>`)
  });
}

getMultipleFacts()

// Promise.all(
// 
// })).then (facts  => {
//     
// });

