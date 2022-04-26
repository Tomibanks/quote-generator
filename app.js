//Javascript selectors
const quoteArea = document.getElementById("generateQuote");
const authorz = document.getElementById("author");

const fetchPromise = fetch("https://type.fit/api/quotes");

fetchPromise
  .then((response) => {
    return response.json();
  })
  .then((quotes) => {
    //console.log(quotes);

    //put the object into storage
    localStorage.setItem("quotes", JSON.stringify(quotes));

    const allQuotes = localStorage.getItem("quotes");
    //console.log(allQuotes);

    const authors = JSON.parse(allQuotes).map((e) => e.author);
    // console.log(authors);

    const texts = JSON.parse(allQuotes).map((e) => e.text);
    //console.log(texts);

    // Generating random numbers between 0 and the length of the array
    const arrayVar = Math.floor(Math.random() * authors.length);
    const arrayVar2 = Math.floor(Math.random() * texts.length);

    //store the authors of the respective quote
    const auth = authors[arrayVar];
    const test = texts[arrayVar2];

    //Display the quotes and the authors
    authorz.innerHTML = "- " + auth;
    quoteArea.innerHTML = test;
  });

//Add Quote Button
function addQuote() {
  const allQuotes = localStorage.getItem("quotes");
  // console.log(allQuotes);

  const authors = JSON.parse(allQuotes).map((e) => e.author);

  const texts = JSON.parse(allQuotes).map((e) => e.text);
  // Generating random numbers between 0 and the length of the array
  const arrayVar = Math.floor(Math.random() * authors.length);
  const arrayVar2 = Math.floor(Math.random() * texts.length);

  //store the authors of the respective quote
  const auth = authors[arrayVar];
  const test = texts[arrayVar2];

  //store the author as annoymous if null
  //if (auth == null) {
  //  authors = "Anonymous";
  //}

  //Display the quotes and the authors
  authorz.innerHTML = "- " + auth;
  quoteArea.innerHTML = test;
}
