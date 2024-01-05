
const search = document.getElementById("searchButton");
let userProfileName;

//Add event listener for search bar
search.addEventListener('click', function(event) {
  //Prevent default behavior
  event.preventDefault();
  const userProfileName = document.getElementById('userInput').value;
  console.log(userProfileName)       //TODO Erase

});












// queryUsername = 'cebron1'   
// baseApiUrl = 'https://api.github.com/users';
// apiUrl = `${baseApiUrl}/${queryUsername}`

// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error ('Network response was not ok or invalid username');
//     }
//     return response.json();
//   })
//   .then(data => {
//     displayAvatar(data.avatar_url);
    
//     // Perform operations with the received data
//   })
//   .catch(error => {
//     console.error('There was a problem fetching data:', error);
//   });
  


//   // Display info in HTML
// function displayAvatar(avatarUrl){
//   dataContainer = document.getElementById('avatar');
//   dataContainer.src = avatarUrl;

// }
// //