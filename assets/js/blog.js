// Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backSelect = document.querySelectorAll('.back');

// TODO: Create a function that builds an element and appends it to the DOM

function addBlog({ username, title, content }) {
  // Create Blog post elements
  const article = document.createElement('article');
  const titleElement = document.createElement('h2');
  const contentElement = document.createElement('blockquote');
  const authorElement = document.createElement('p');

  // Set elements content
  titleElement.innerText = title;
  contentElement.innerText = content;
  authorElement.innerText = `Posted by: ${username}`;

  // Add class and append elements to the article
  article.classList.add('card');
  article.appendChild(titleElement);
  article.appendChild(contentElement);
  article.appendChild(authorElement);

  // add article to main
  mainEl.appendChild(article)
}

// Create a function that handles the case where there are no blog posts to display

const noBlogPosts = function () {
  const message = document.createElement("p")
  message.textContent = "No Blog posts yet..."
  const mainEl = document.querySelector("main")
  mainEl.append(message)
}

// Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

function renderBlogList() {
  let blogPosts = readLocalStorage()
  
  blogPosts.forEach(element => {
    return addBlog({username: element.username, title: element.title, content: element.content})  
  });

  if (!blogPosts.length) {
    noBlogPosts()
  }
}
renderBlogList();

function displayMessage() {
  message.textContent = blogFound
}

// TODO: Call the `renderBlogList` function
//either a return function on console.log function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

redirectURL = './index.html';

document.getElementById("back").addEventListener("click", function () { redirectPage("./index.html") })
