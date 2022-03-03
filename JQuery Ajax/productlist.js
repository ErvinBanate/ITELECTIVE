$(document).ready(() => {
    $(document).on('click', '.category', (el) => {
        const id = el.target.id;

        $.ajax({
            url: 'http://Localhost:8080/productlist/category',
            method: 'POST',
            data: {index: id},
            dataType: 'html'
        }).done((data) => {
            if (data == undefined) {
                $('#errorGroup').show();
                $('#errorMessage').text("Error!!!!");
                $('.popupCloseButton').click(() => {
                    $('#errorGroup').hide();
                    window.location.href = 'http://Localhost:8080/productlist/page1';
                });
            }
            else {
                $('#product').empty();
                $('#product').append(data);
                $('#pageNavigation').empty();
            }
        });
    });
});