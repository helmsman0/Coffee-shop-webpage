function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')

}

 
// document.getElementById('contact-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const emailInput = document.getElementById('email').value;
//     const messageInput = document.getElementById('message').value;
   

//     const  emailValue = emailInput.value;
//     const messageValue = messageInput.value;

//     if (  emailValue && messageValue) {
//       alert('Your response has taken . Thank You! for your support');

//         emailInput.value = " ";
//         messageInput.value = " ";
     
//     } else {
//       alert('Please fill out all fields before submitting.');
//     }
//   });
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    // Save the input values before clearing the fields
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;
  
    // You can add your own validation logic here
    if ( emailValue && messageValue) {
      // Display the pop-up alert
      alert('Your Response has been taken , Thank You! for your support');
  
      // Clear the input fields
      emailInput.value = '';
      messageInput.value = '';
  
      // You can also send the form data to a server for further processing here
    } else {
      alert('Please fill out all fields before submitting.');
    }
  });
  