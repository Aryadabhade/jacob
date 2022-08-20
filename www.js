function aaa()
{
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if (username == "kundan" && password == "kundan@123") {
        alert("login succesfully");
       window.open("Bigtime.html");
    }

    else {

        alert("login failed");
    }

}