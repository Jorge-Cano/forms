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

                hideDiv.innerHTML = "<div id='second'style='display:none'></div>";
                myDiv.innerHTML = "<div id='test'style='background-color:#00ff2a'>Correct</div>";
            }
        else if(myInput.value==="")
            {
                myDiv.innerHTML = "Username has to be filled out - no blanks home slice";
            }
        else
            {
                myDiv.innerHTML = "ehhhhhhhhhhh error";
            }
    };
function checkTwo()
    {
        if(myPassword.value==="Passw0rd1")
            {
                myDiv2.innerHTML = "<div id='test2'style='background:#00ff2a'>Accepted , You Shall Pass =><a href='https://github.com/Jorge-Cano/forms'>WebSite</a></div>";
            }
        else if(myPassword.value==="")
            {
                myDiv2.innerHTML = "Dont leave it blank Dodo";
            }
        else
            {
                myDiv2.innerHTML = "InCorrecto Amigo, Otra Vez";
            }
    }
