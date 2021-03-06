$(document).ready(() => {
    $(window).on("load", () => {
        url = location.pathname;
        var parts = url.substring(1).split('/');
        $('#username').text(parts[1]);
    });
    $('#errorGroup').hide();
    $('#sign').click(() => {
        const user = $('#usernameSign').val();
        const pass = $('#passwordSign').val();
        const dataPost = [user, pass];
        
        if (dataPost.join('').length < 2) {
            $('#errorGroup').show();
            $('#errorMessage').text("Please Fill-In all the Information Properly to Sign-In");
            $('.popupCloseButton').click(() => {
                $('#errorGroup').hide();
            });
            return;
        }

        $.ajax({
            url: 'http://Localhost:8080/Sign-In',
            method: 'POST',
            data: {user: user, pass: pass},
            dataType: 'text'
        }).done((data) => {
            console.log(data);
            if (data == 'Success') {
                $('#errorGroup').show();
                $('#errorMessage').text("Customer has been Registered!!");
                $('.popupCloseButton').click(() => {
                    $('#errorGroup').hide();
                    location.reload(true);
                });
            }
            else if (data == 'Present') {
                $('#errorGroup').show();
                $('#errorMessage').text("The Username is already taken");
                $('.popupCloseButton').click(() => {
                    $('#errorGroup').hide();
                });
            }
            else {
                $('#errorGroup').show();
                $('#errorMessage').text("SERVER ERROR!!!");
                $('.popupCloseButton').click(() => {
                    $('#errorGroup').hide();
                });
            }
        });
    });
    $('#log').click(() => {
        const user = $('#usernameLog').val();
        const pass = $('#passwordLog').val();
        const dataPost = [user, pass];
        
        if (dataPost.join('').length < 2) {
            $('#errorGroup').show();
            $('#errorMessage').text("Please Fill-In all the Information Properly to Log-In");
            $('.popupCloseButton').click(() => {
                $('#errorGroup').hide();
            });
            return;
        }

        $.ajax({
            url: 'http://Localhost:8080/Log-In',
            method: 'POST',
            data: {user: user, pass: pass},
            dataType: 'json'
        }).done((data) => {
            // console.log(data);
            // console.log(data.ID);
            // console.log(data.username);
            // console.log(data[2]);
            if (data == 'Not Found') {
                $('#errorGroup').show();
                $('#errorMessage').text("The Username or Password in incorrect");
                $('.popupCloseButton').click(() => {
                    $('#errorGroup').hide();
                });
                return;
            }
            else {
                sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('password', data.password);
                // console.log(sessionStorage);
                window.location.href = `http://Localhost:8080/Customer/${data}`;
            }
        });
    });

    $('#signOut').click(() => {
        sessionStorage.clear();
        window.location.href = 'http://Localhost:8080';
    });
});