appUrl = 'https://api.github.com'

fetch(appUrl)
  .then(res => res.json())
  .then(data => console.log(data))