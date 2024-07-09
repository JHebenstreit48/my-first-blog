// TODO: Create a variable that selects the form element
const blogForm = document.querySelectorAll('form');
let errorMessage = document.getElementById('error')
let userField = document.getElementById('username');
let titleField = document.getElementById('title');
let contentField = document.getElementById('content');
let formSubmit = document.getElementById('form')

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

formSubmit.addEventListener('submit', function (e) {
    e.preventDefault()
    if (userField.value.trim() === "" || titleField.value.trim() === "" || contentField.value.trim() === "") {
        errorMessage.textContent = "Please complete the form";

    } else {
        const blogCreate = {
            userField: userField,
            titleField: titleField,
            contentField: contentField,
        }
        localStorage.setItem('blogCreate', JSON.stringify(blogCreate))
        redirectPage()
    }
})
