
//Creates an array of quote objects with multiple properties

let quotes = [
  {quote: 'The path from dreams to success does exist. May you have the vision to find it, the courage to get on to it, and the perseverance to follow it.',
  source: 'Kalpana Chawla',
  tags: '#dreams #courage #vision'},
  {quote: 'The future belongs to those who believe in the beauty of their dreams.',
  source: 'Eleanor Roosevelt',
  tags: '#dreams #inspiration' },
  {quote: 'Happiness is not something you postpone for the future; it is something you design for the present.',
  source: 'Jim Rohn',
  tags: '#happiness #inspiration'},
  {quote: 'Change is the law of life. And those who look only to the past or present are certain to miss the future.',
  source: 'John F. Kennedy',
  year: 1963,
  citation: 'Address in the Assembly Hall at the Paulskirche in Frankfurt',
  tags: "#change #life"},
  {quote: 'Life ain\'t always beautiful, but it\'s a beautiful ride.',
  source: 'Gary Allan',
  year: 2006,
  citation: 'Song, "Life Ain\'t Always Beautiful"',
  tags: '#life #inspiration #music'}
]

// Creates a function that returns an object from the 'quotes' array at random

function getRandomQuote() {
  let quoteObjNum = Math.floor(Math.random() * quotes.length);
  return quotes[quoteObjNum];
}

// Creates an array of colors to be used in the 'printQuote' function

let colors = ['red', 'orange', 'black', 'green', 'blue', 'purple']

// Sets a timer to automatically call the 'printQuote' function every 10 seconds

let intervalID = window.setInterval(printQuote, 10000);

/***
  Creates a function that calls the 'getRandomQuote' function above, concatenates
  an HTML string that includes the properties present in the random object, and
  sets the 'quote-box'div innerHTML equal to the HTML string. Also changes the
  background color of the page by choosing a color from the 'colors' array at
  random. Resets the timer created above each time the function is called.
***/

function printQuote() {
  let printedQuote = getRandomQuote();
  let string = '';
  string += '<p class="quote">' + printedQuote.quote + '</p>';
  string += '<p class="source">' + printedQuote.source;
  if (printedQuote.citation) {
    string += '<span class="citation">' + printedQuote.citation + '</span>';
  }
  if (printedQuote.year) {
    string += '<span class="year">' + printedQuote.year + '</span>';
  }
  if (printedQuote.tags) {
    string += '</p><p>' + printedQuote.tags;
  }
  string += '</p>';
  document.getElementById('quote-box').innerHTML = string;
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  window.clearInterval(intervalID);
  intervalID = window.setInterval(printQuote, 10000);
}

// Calls the 'printQuote' function  when the "Show another quote" button is clicked.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
