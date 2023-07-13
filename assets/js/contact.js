// // Get references to form elements
// const form = document.querySelector('form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('message');

// // Function to handle form submission
// function handleFormSubmit(event) {
//   event.preventDefault(); // Prevent the form from submitting normally

//   // Get the form values
//   const name = nameInput.value;
//   const email = emailInput.value;
//   const message = messageInput.value;

//   // Compose the email body
//   const subject = 'Contact Form Submission';
//   const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

//   // Create the mailto link
//   const mailtoLink = `mailto:narhyaba@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//   // Open the default email client with the mailto link
//   window.location.href = mailtoLink;
// }

// // Add event listener to the form's submit event
// form.addEventListener('submit', handleFormSubmit);
