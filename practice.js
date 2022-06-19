const request = new XMLHttpRequest();
request.addEventListener("load", function reqListener() {
    console.log(this.responseText);
});
request.open("GET", "http://quotes.stormconsultancy.co.uk/random.json");
request.send();

function waitWithPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("result");
        }, 1000);
    });
}
