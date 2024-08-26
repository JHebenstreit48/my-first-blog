// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const lightDark = document.getElementById('toggle')
const body = document.querySelector('body');
let currentPageMode = "light"

lightDark.addEventListener('click', function (e) {
  
  if (currentPageMode === 'dark') {
    currentPageMode = 'light'
    body.setAttribute('class', 'light');
    document.documentElement.style.setProperty("--circle-color","#ffb100")
  }
  else {
    currentPageMode = 'dark'
    body.setAttribute('class', 'dark');
    document.documentElement.style.setProperty("--circle-color","#8570a5")
  }
})

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const username = localStorage.getItem('username')
  const title = localStorage.getItem('title')
  const content = localStorage.getItem('content')

  if (!username || !title || !content) {
    return
  }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(data) {
  console.log(data);
  let blogPosts = JSON.parse(localStorage.getItem('blogs')) || []
  blogPosts.push(data)
  localStorage.setItem('blogs', JSON.stringify(blogPosts))
}

// ! Use the following function whenever you need to redirect to a different page

// let redirectURL = '';

// const redirectPage = function (url) {
//   redirectURL = url;
//   location.assign(url);
// };

