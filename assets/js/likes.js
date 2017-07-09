$(function() {
    function delete_cookie(name) {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    
    //Redirect users if not logged into the site
    if (document.cookie.indexOf('oauthio_provider_tumblr') == -1) {
        window.location = "../";
    }
              
    Likes.startUp();
    
    $("#about").on('click', function() {
        $('<a href="../about.html"></a>').fancybox().click();
    });
    
    $("a.remove").live("click", function() {
        var xBox = $(this);

        if (xBox.hasClass("active")) {
            Likes.unlike({
                id: xBox.attr("data-id"),
                key: xBox.attr("data-key")
            })
        } else {
            xBox.addClass("active");
        }

        return false;
    });
    
    // Until OAuth.clearCache() works again, deleting the cookie is going to used
    $("#logout").on('click', function() {
        delete_cookie('oauthio_provider_tumblr');
        OAuth.clearCache();
        window.location = "/tumblr-likes/";
    });
});