document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registrationForm');
    var userDataContainer = document.getElementById('userDataContainer');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var firstName = document.getElementById('firstName').value;
      var lastName = document.getElementById('lastName').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      // Perform registration logic or validation here
  
      // Create a new element to display the user's data
      var userData = document.createElement('div');
      userData.innerHTML = '<h2>Registered User Data</h2>' +
        '<p><strong>First Name:</strong> ' + firstName + '</p>' +
        '<p><strong>Last Name:</strong> ' + lastName + '</p>' +
        '<p><strong>Email:</strong> ' + email + '</p>';
  
      // Append the user's data to the container
      userDataContainer.appendChild(userData);
  
      // Reset the form
      form.reset();
    });
  });
  