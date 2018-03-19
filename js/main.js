var myInput    = document.getElementById("input"),
    myDiv      = document.getElementById("test"),
    hideDiv    = document.getElementById("second"),
    myPassword = document.getElementById("mypassword"),
    myDiv2     = document.getElementById("test2");

function check()
    {
        if(myInput.value==="taha")
            {
                "use strict";

                hideDiv.innerHTML = "<div id='second'style='display:none'></div>";
                myDiv.innerHTML = "<div id='test'style='background-color:#00ff2a'>Correct</div>";
            }
        else if(myInput.value==="")
            {
                myDiv.innerHTML = "Username Cant Be Empty";
            }
        else
            {
                myDiv.innerHTML = "Wrong Username";
            }
    };
function checkTwo()
    {
        if(myPassword.value==="tahatthh")
            {
                myDiv2.innerHTML = "<div id='test2'style='background:#00ff2a'>Accepted , You Can Enter To The <a href='http://taha2.bitballoon.com'>WebSite</a></div>";
            }
        else if(myPassword.value==="")
            {
                myDiv2.innerHTML = "Cant Be Empty";
            }
        else
            {
                myDiv2.innerHTML = "InCorrect Password";
            }
    }
