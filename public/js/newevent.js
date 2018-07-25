$(document).ready(function() {
    // Getting references to our form and input
    //var newEvent;
    var eventInput = $("input#eventname-input");
    var dateInput = $("input#eventdate-input");
    var locationInput = $("input#location-input");
    var descriptionInput = $("input#description-input");

    // When the signup button is clicked, we validate the username and password are not blank
    $("#newevent").click(function(event) {
        event.preventDefault();

        var eventData = {
            eventInput: eventInput.val().trim(),
            dateInput: dateInput.val().trim(),
            locationInput: locationInput.val().trim(),
            descriptionInput: descriptionInput.val().trim()
        };

        if (!eventData.eventInput || !eventData.dateInput || !eventData.locationInput || !eventData.descriptionInput) {
            return;
        }
        // If we have an all field filled out, run the newEvent function
            newEvent(eventData.eventInput, eventData.dateInput, eventData.locationInput, eventData.descriptionInput);
            eventInput.val("");
            dateInput.val("");
            locationInput.val("");
            descriptionInput.val("");
        });

        // Does a post to the signup route. If successful, we are redirected to the members page
        // Otherwise we log any errors
        function newEvent(eventInput, dateInput, locationInput, descriptionInput) {
            $.post("/api/newevent", {
                eventInput: eventInput,
                dateInput: dateInput,
                locationInput: locationInput,
                descriptionInput: descriptionInput
            }).then(function(data) {
                window.location.href = "/members";
        }); 
    };    
});
