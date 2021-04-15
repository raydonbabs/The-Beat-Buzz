async function sendRequest(url, method, data)
{
  const options = {method};
  if(data)
  {
    options.body = JSON.stringify(data);
    options.headers = {'Accept':'application/json'};
  }

  let response = await fetch(url, options);
  return response.json();
}

async function getQuote(type)
{
  let quote = await sendRequest('https://goquotes-api.herokuapp.com/api/v1/random/1?type=tag&val=' + type);
  printQuote(quote);
}

function printQuote(quote)
{
  const area = document.querySelector('#quote');

  area.innerHTML =
  `
    <p> <i><b>"${quote.quotes[0].text}"</b></i> </p>
    <br>
    <p style="font-size: 15px"> - ${quote.quotes[0].author} </p>
  `;
}