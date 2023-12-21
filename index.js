
username = document.getElementById("form");
baseApiUrl = 'https://api.github.com/users';


fetch(apiUrl)
  apiUrl = `${baseApiUrl}/${username}`
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok or invalid username');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data from the API:', data);
    // Perform operations with the received data
  })
  .catch(error => {
    console.error('There was a problem fetching data:', error);
  });