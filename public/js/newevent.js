$(document).ready(function() {
    // Getting references to our form and input
    //var newEvent;
    var eventInput = $("input#eventname-input");
    var movieInput = $("input#movie-input");
    var dateInput = $("input#eventdate-input");
    var locationInput = $("input#location-input");
    var descriptionInput = $("input#description-input");
    var invitedInput = $("#invited-input");

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
                user: data.username,
                fullname: data.firstname + " " + data.lastname
            };

            if (!eventData.eventInput || !eventData.movieInput ||!eventData.dateInput || !eventData.locationInput || !eventData.descriptionInput) {
                return;
            };

            // If we have an all field filled out, run the newEvent function
                newEvent(eventData.eventInput, eventData.movieInput, eventData.dateInput, eventData.locationInput, eventData.descriptionInput, eventData.user, eventData.fullname);
                eventInput.val("");
                movieInput.val("");
                dateInput.val("");
                locationInput.val("");
                descriptionInput.val("");
            

            // Does a post to the signup route. If successful, we are redirected to the members page
            // Otherwise we log any errors
            function newEvent(eventInput, movieInput, dateInput, locationInput, descriptionInput, user, fullname) {
                $.post("/api/newevent", {
                    eventInput: eventInput,
                    movieInput: movieInput,
                    dateInput: dateInput,
                    locationInput: locationInput,
                    descriptionInput: descriptionInput,
                    user: user,
                    fullname: fullname
                }).then(function(event) {
                    var invitedArray = invitedInput.val();
                    console.log(invitedArray);
                    for (var i = 0; i < invitedArray.length; i++) {
                        var invitedID = invitedArray[i];
                        console.log(invitedID);
                        $.get("api/users/" + invitedID).then(function(data) {
            
                            var inviteeData = {
                                username: data.username,
                                firstname: data.firstname,
                                lastname: data.lastname,
                                EventId: event.id
                            };
                            console.log(inviteeData);
                            newInvitee(inviteeData);
                    
                            function newInvitee(data) {
                                console.log(JSON.stringify(data));
                                return $.ajax({
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    type: "POST",
                                    url: "/api/newinvitee",
                                    data: JSON.stringify(data)
                                });
                            };
                        });
                    };
                    window.location.href="/members"; 
                });    
            };
        });
    });
});
