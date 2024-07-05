// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainSelect = document.querySelectorAll('main');
const backSelect = document.querySelectorAll('.back');

// TODO: Create a function that builds an element and appends it to the DOM

// const blogSubmit = document.getElementById("submit")

// let submitBtn = 'submit'

// formEl.addEventListener('click', function () {
//     document.getElementById('submit')

    // if ('submit' === true )

    // else
// })

// TODO: Create a function that handles the case where there are no blog posts to display

// This should be an if else statment


// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
// Sounds like there will be another if else statement

renderBlogList();

function displayMessage() {
    message.textContent = blogFound

    // if else
}


// TODO: Call the `renderBlogList` function
//either a return function on console.log function



// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};