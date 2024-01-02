//your JS code here. If required.
var savedUsername = localStorage.getItem('username');
var savedPassword = localStorage.getItem('password');

if (savedUsername && savedPassword) {
  // Display "Login as existing user" button
  var existingButton = document.createElement('button');
  existingButton.id = 'existing';
  existingButton.textContent = 'Login as existing user';
  existingButton.addEventListener('click', function() {
    alert('Logged in as ' + savedUsername);
  });
  document.body.appendChild(existingButton);
}

// Handle form submission
document.getElementById('loginform').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var checkbox = document.getElementById('checkbox');

  if (checkbox.checked) {
    // Save details to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    // Remove saved details from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  alert('Logged in as ' + username);
});