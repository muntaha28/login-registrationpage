// const wrapper = Document.querySelector('.wrapper');
// const loginLink = Document.querySelector('.login-link');
// const registerLink = Document.querySelector('.register-link');

// registerLink.addEventListener('click',()=> { wrapper.classList.add('active');});

// loginLink.addEventListener('click',()=> { wrapper.classList.remove('active');});

document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    registerLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        wrapper.classList.add('active');
        document.body.style.background = "url('women2.jpg')"; // Change background image
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        wrapper.classList.remove('active');
        document.body.style.background = "url('business-woman-with-laptop.jpg')"; // Revert back to original background image
    });
});
