const getQuote = function () {
    return fetch("http://quotes.stormconsultancy.co.uk/random.json")
        .then(response => response.json());
}

function updateQuote() {
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
    let button = document.getElementById("next-quote");
    button.disabled = true;
    getQuote().then((result) => {quote.innerText = result.quote; author.innerText = result.author});
    button.disabled = false;
}