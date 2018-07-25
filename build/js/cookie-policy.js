// make sure document is loaded
$(document).ready(function(){

    // create a cookie object to keep all data and functions in one place
    var cookie = {
        name : "cookie-policy" ,
        expires : 365,
        path : "/" ,
        args : { path : "/" },    // needed to test
        exists : function() {
            var c = $.cookie( this.name );
            return c;
        },
        delete : function() {
            $.cookie(this.name , ""  );
        },
        create : function() {
            $.cookie(this.name , 1 );   // start with 1
        },
        getValue : function() {
            return $.cookie( this.name );
        },
        increment : function() {
            var i = this.exists();  // returns the value
            $.cookie(this.name , ++i ); // set the value
        }

    }

    // check if cookie set
    if(!cookie.exists()){   // must specify the path used when setting the cookie
        console.log("cookie not set");
        displayCookiePolicyDocument();
    } else {
        console.log("cookie exists");
        // cookie exists - increment visit counter or something
        cookie.increment();

        // offer option to delete cookie - for testing purposes
        $("body").append(
            '<button id="delete-cookie">Delete Cookie </button> You have been here ' + cookie.getValue() + ' times'
        );

        $("body").ready(function() {
            console.log("body ready");
            $("#delete-cookie").click(function(){
                console.log("remove cookie - set to null");
                cookie.delete(); // set value to null - removes cookie
            });
        });
    }

    function displayCookiePolicyDocument() {
        console.log("displaying the policy document");
        var body = $("body").html();    // need to save the existing body content
        // this replaces the existing body content
        $("body").load("cookie-policy.html" , function(html){
           // attach to body - already done
           //  $("body")
           //      .after( html );

            // need to wait until the document has been redrawn
            $("body").ready( function() {
                console.log("body ready");

                // add the button click handlers
                $("#yes-button").click(function () {
                    console.log("set the cookie");
                    cookie.create();

                    $("cookie-policy").remove(); // remove the cookie policy text
                    $("body").html(body);   // restore old body content
                });

                $("#no-button").click(function () {
                    console.log("do NOT set the cookie");
                    $("cookie-policy").remove();    // remove the cookie policy text
                    $("body").html(body);   // restore old content
                });

            });

        });
    }


});




