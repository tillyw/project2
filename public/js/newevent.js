$(document).ready(function() {
    // Getting references to our form and input
    //var newEvent;
    var eventInput = $("input#eventname-input");
    var movieInput = $("input#movie-input");
    var dateInput = $("input#eventdate-input");
    var locationInput = $("input#location-input");
    var descriptionInput = $("input#description-input");

    // When the signup button is clicked, we validate the username and password are not blank
    $("#newevent").click(function(event) {
        event.preventDefault();

        $.get("/api/user_data").then(function(data) { 

            var eventData = {
                eventInput: eventInput.val().trim(),
                movieInput: movieInput.val().trim(),
                dateInput: dateInput.val().trim(),
                locationInput: locationInput.val().trim(),
                descriptionInput: descriptionInput.val().trim(),
                user: data.username
            };

            if (!eventData.eventInput || !eventData.movieInput ||!eventData.dateInput || !eventData.locationInput || !eventData.descriptionInput) {
                return;
            }
            // If we have an all field filled out, run the newEvent function
                newEvent(eventData.eventInput, eventData.movieInput, eventData.dateInput, eventData.locationInput, eventData.descriptionInput, eventData.user);
                eventInput.val("");
                movieInput.val("");
                dateInput.val("");
                locationInput.val("");
                descriptionInput.val("");
            });

            // Does a post to the signup route. If successful, we are redirected to the members page
            // Otherwise we log any errors
            function newEvent(eventInput, movieInput, dateInput, locationInput, descriptionInput, user) {
                $.post("/api/newevent", {
                    eventInput: eventInput,
                    movieInput: movieInput,
                    dateInput: dateInput,
                    locationInput: locationInput,
                    descriptionInput: descriptionInput,
                    user: user
                }).then(function(data) {
                    window.location.href="/members"; 
                });
        };
    }) 
});
