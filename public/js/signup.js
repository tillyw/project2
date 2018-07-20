$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var firstnameInput = $("input#firstname-input");
  var lastnameInput = $("input#lastname-input");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the username and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      firstname: firstnameInput.val().trim(),
      lastname: lastnameInput.val().trim(),
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.firstname || !userData.lastname || !userData.username || !userData.password) {
      return;
    }
    // If we have an username and password, run the signUpUser function
    signUpUser(userData.firstname, userData.lastname, userData.username, userData.password);
    firstnameInput.val("");
    lastnameInput.val("");
    usernameInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(firstname, lastname, username, password) {
    $.post("/api/signup", {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
