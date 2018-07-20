$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  // var firstnameInput = $("input#firstname-input");
  // var lastnameInput = $("input#lastname-input");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an username and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      // firstname: firstnameInput.val(),
      // lastname: lastnameInput.val(),
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if ( !userData.username || !userData.password) {
      return;
    }

    // If we have an username and password we run the loginUser function and clear the form
    loginUser(userData.firstname, userData.lastname, userData.username, userData.password);
    // firstnameInput.val("");
    // lastnameInput.val("");
    usernameInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(firstname, lastname, username, password) {
    $.post("/api/login", {
      // firstname: firstname,
      // lastname: lastname,
      username: username,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});
