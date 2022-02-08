function viewPasswordLog() {
    var passwordLog = document.getElementById("passwordLog");

    if (passwordLog.type == "password") {
        passwordLog.type = "text";
    }
    else {
        passwordLog.type = "password";
    } 
}

function viewPasswordSign() {
    var passwordSign = document.getElementById("passwordSign");

    if (passwordSign.type == "password") {
        passwordSign.type = "text";
    }
    else {
        passwordSign.type = "password";
    }
}