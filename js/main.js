var myInput    = document.getElementById("input"),
    myDiv      = document.getElementById("test"),
    hideDiv    = document.getElementById("second"),
    myPassword = document.getElementById("mypassword"),
    myDiv2     = document.getElementById("test2");

function check()
    {
        if(myInput.value==="jorgey")
            {
                "use strict";

                hideDiv.innerHTML = "<div id='second' style='display:none'></div>";
                myDiv.innerHTML = "<div id='test' style='background-color:#00ff2a'>Correct</div>";
            }
        else if(myInput.value==="")
            {
                myDiv.innerHTML = "Username Cant Be Empty";
            }
        else
            {
                myDiv.innerHTML = "Maybe you mispelled the username, please re-enter";
            }
    };
function checkTwo()
    {
        if(myPassword.value==="madmen")
            {
                myDiv2.innerHTML = "<div id='test2'style='background:#00ff2a'>Accepted , You Can Now Pass <a href='http://github.com/jorge-cano'>WebSite</a></div>";
            }
        else if(myPassword.value==="")
            {
                myDiv2.innerHTML = "Cant Be Empty";
            }
        else
            {
                myDiv2.innerHTML = "Are you brute forcing this password?";
            }
    }
