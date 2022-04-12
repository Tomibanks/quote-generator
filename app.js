//Javascript selectors
const quoteArea = document.getElementById("generateQuote");
const authors = document.getElementById("author");

//async and await function
async function addQuote() {
  //Fetch data from API
  var url = "https://type.fit/api/quotes";

  //Store respnse gotten from API
  const response = await fetch(url);

  //Store data in array and convert to JSON
  const allQuotes = await response.json();
  console.log(allQuotes);

  //Generating random numbers between 0 and the length of the array
  const arrayVar = Math.floor(Math.random() * allQuotes.length);

  //Store the quote in the random generated index
  const quote = allQuotes[arrayVar].text;

  //store the authors of the respective quote
  const auth = allQuotes[arrayVar].author;

  //Store the author as annonymous if its null
  if (auth == null) {
    authors = "Anonymous";
  }

  //Display the quotes and the authors
  authors.innerHTML = "- " + auth;
  quoteArea.innerText = quote;
}
