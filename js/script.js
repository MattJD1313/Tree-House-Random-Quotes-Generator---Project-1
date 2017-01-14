// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Setting a timer so the printQuote function will execute every 30 seconds.

setInterval(printQuote,30000);

//Stores the random quote object generated from the function getRandomQuote() into a variable.
// The variable is then used to access the property values of that object to build a string containing the HTML to display the quote object.
//Then the string is inserted into the <div> with the ID 'quote-box'.

function printQuote() {
    let ranQuote = getRandomQuote();
    let message = '';
    message += '<p class="quote">' + ranQuote.quote + '</p>';
    message += '<p class="source">' + ranQuote.source;
    if (ranQuote.citation !== ''){
        message += '<span class="citation">' + ranQuote.citation + '</span>';
    }
    if (ranQuote.year !== ''){
        message += '<span class="year">' + ranQuote.year + '</span>';
    }
    message += '</p>';
    document.getElementById('quote-box').innerHTML = message;
    document.body.style.background = ranColor();

}

//Creating an array of used indexes so that i can make sure no quote is repeated twice.
//Generates a random number, checks to see if that random number index has been already used, and then returns a quote object with the index of that random number.
//Stores that index value in the usedIndexArray.

let usedIndexArray = [];

function getRandomQuote() {
    let index = Math.floor(Math.random() * (quotes.length + 1));
    if(usedIndexArray.indexOf(index) === -1) {
        usedIndexArray.push(index);
    }else if(quotes.length === usedIndexArray.length){
        usedIndexArray = [];
    }else {
        getRandomQuote();
    }
    console.log(index);
    console.log(usedIndexArray);
    return quotes[index];
}

//Generates a random rgb color.

function ranColor() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
