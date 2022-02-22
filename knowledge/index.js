const URL = "http://numbersapi.com/1..10";

// using Fetch make an API call to the url and return the data in an Array
async function fetchData() {
  // Use fetch to call the api with the url
  const response = await fetch(URL);
  // Storing data in form of JSON
  let data = await response.json();
  console.log(data);
  return data
}

fetchData()

// Use another function to show your data in HTML
async function renderData() {
  let numbersAPI = await fetchData();
  let html = `<ul>`;
  let text = ''
  for (let key in numbersAPI) {
    text = numbersAPI[key]
  let htmlSegment = `<li>${text}</li>`;
  html += htmlSegment
  
  let container = document.querySelector(".container");
  container.innerHTML = html;
  }
  // container.innerHTMl += html
  
}

renderData();
  // use a variable to store the info for your fetchData Function
  // create your <ul> HTML tag
  // iterate Through  your data
  // create a <li> tag for each math fact
  // add your <li> tags to your <ul>list
  // grab the container tag that there is in your HTML
  // add your html tags to your container
// }




// Change this code!



