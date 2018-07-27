var submitBtn = $("#submitComment");
var commentInput = $("#comment");
var commentList = $("#comment-list");

//ajax calls
var API = {
    insertComment: function(data) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
              },
              type: "POST",
              url: "../api/comments",
              data: JSON.stringify(data)
            });
        },
    getComments: function() {
        return $.ajax({
             url: "../api/comments",
             type: "GET"    
         });    
        },
    getUserId: function() {
            return $.ajax({
                url:"../api/user_data",
                type: "GET"
            });
        },
    getEventId: function(id) {
            return $.ajax({
                url:"../api/events",
                type: "GET"
            });
        }
    };




//posting the comment to the db
var commentSubmit = function(event) {
    event.preventDefault();
    var commentInput = $("#comment").val().trim();
    var id = $("#event-id").val();
    $.get("../api/user_data").then(function(data) {
        console.log(data); 

       
        var input = {
            body: commentInput,
            UserId: data.id,
            username: data.username,
            EventId: id
        };
        console.log(commentInput);
        console.log(input);
      

        API.insertComment(input).then(function() {
            refreshComments();
            
        });
    });
    };
        

//to refresh comments upon submitting a new one
var refreshComments = function() {
    API.getComments().then(function(data) {
        var id = $("#event-id").val();
            var incComments = data.map(function(comment) {
                var a = $("<div>")
                    .text(comment.username + ":      " + comment.body)
                    .attr("href", "events/" + comment.id)

                    var li = $("<li>")
                        .attr({
                            class: "list-group-item chat",
                            "data-id": comment.id
                        })
                        .append(a);

                        return li;
                });
            console.log(incComments);
            if (comment.EventId === id) { 
                commentList.empty();
                commentList.append(incComments);
            };
    });
};

submitBtn.on("click", commentSubmit);
//onload function to display comments when page

    refreshComments();
