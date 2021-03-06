$(document).ready(function() {
    $(window).on("load", () => {
        $.ajax({
            url: 'http://Localhost:8080/Customer/Orders',
            method: 'GET',
            dataType: 'html'
        }).done((data) => {
            if (data == undefined) {
                alert('ERROR!!!');
            }
            $('#orders').empty();
            $('#orders').append(data);
        });
    });
    $('#placeOrder').click(() => {
        const orderKey = $('#orderKey').val();
        const orderVal = $('#orderVal').val();
        $.ajax({
            url: 'http://Localhost:8080/Customer/Add-Order',
            method: 'POST',
            data: {key: orderKey, quantity: orderVal},
            dataType: 'text'
        }).done((data) => {
            if (data == 'Incorrect') {
                alert('Product is NOT FOUND!!!');
            }
            else if (data == 'Order-Added') {
                $.ajax({
                    url: 'http://Localhost:8080/Customer/Orders',
                    method: 'GET',
                    dataType: 'html'
                }).done((data) => {
                    if (data == undefined) {
                        alert('ERROR!!!');
                    }
                    $('.Order input').val('');
                    $('#orders').empty();
                    $('#orders').append(data);
                });
            }
            else {
                alert('ERROR!!!');
            }
        });
    });
    $(document).on('click', '.delete', function() {
        const name = $(this).closest('tr').find('.name').html();
        // console.log(name);
        $.ajax({
            url: 'http://Localhost:8080/Customer/Delete',
            method: 'POST',
            data: {key: name},
            dataType: 'text'
        }).done((data) => {
            if (data == 'Order-Deleted') {
                $.ajax({
                    url: 'http://Localhost:8080/Customer/Orders',
                    method: 'GET',
                    dataType: 'html'
                }).done((data) => {
                    if (data == undefined) {
                        alert('ERROR!!!');
                        return;
                    }
                    $('#orders').empty();
                    $('#orders').append(data);
                });
            }
            else {
                alert('ERROR!!!!');
            }
        });
    });
    $('#resetOrders').click(() => {
        const total = $('#Total').val();
        $.ajax({
            url: 'http://Localhost:8080/Customer/Reset-Orders',
            method: 'POST',
            data: { price: total },
            dataType: 'text'
        }).done((data) => {
            if (data == 'Reset-Success') {
                alert('Orders is now Reset');
            }
            else {
                alert('ERROR!!');
                return;
            }
        });
        $.ajax({
            url: 'http://Localhost:8080/Customer/Orders',
            method: 'GET',
            dataType: 'html'
        }).done((data) => {
            if (data == undefined) {
                alert('ERROR!!!');
                return;
            }
            $('#orders').empty();
            $('#orders').append(data);
        });
        $.ajax({
            url: 'http://Localhost:8080/Display',
            method: 'GET',
            dataType: 'html'
        }).done((data) => {
            if (data == undefined) {
                alert('ERROR!!!!!');
                return;
            }
            // console.log(data);
            $('#Products').empty();
            $('#Products').append(data);
        });
    });
});

