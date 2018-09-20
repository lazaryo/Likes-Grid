$(function() {
    $("#about").on('click', function() {
        $('<a href="about.html"></a>').fancybox().click();
    });
    
    console.log("Initialize Oauth.js");
    OAuth.initialize('gzQql-f9InFuvQR83t7g7D4M4n8');
//    OAuth.initialize('uveKR0W7KcKILOiyrTVnhOWIH6E');

    $("#signin").on('click', function(){
        console.log("#signin clicked");

        // start oauth flow
        OAuth.popup('tumblr', {cache: true}).done(function(tumblr) {
            console.log("User succesfully logedin");
            //console.log(tumblr);

            // redirect to /likes
            window.location = "likes/";

        }).fail(function(err) {
            // todo when the OAuth flow failed
            alert("authentication failed: " + err);
            console.log(err);
        });
    });
});