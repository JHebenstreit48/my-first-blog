// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainSelect = document.querySelectorAll('main');
const backSelect = document.querySelectorAll('.back');

// TODO: Create a function that builds an element and appends it to the DOM


// TODO: Create a function that handles the case where there are no blog posts to display
// This should be an if else statment


// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
// Sounds like there will be another if else statement

// function

// renderBlogList();

function displayMessage() {
    message.textContent = blogFound

}

// TODO: Call the `renderBlogList` function
//either a return function on console.log function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

let redirectURL = './index.html';

const redirectPage = function (url) {
  console.log("hello")
  window.location.assign(url);
};
document.getElementById("back").addEventListener("click",function(){redirectPage("./index.html")})