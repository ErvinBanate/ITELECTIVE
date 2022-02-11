$(document).ready(() => {
    $(window).on("load", () => {
        url = location.pathname;
        var parts = url.substring(1).split('/');
        $('#username').text(parts[1]);
    });
});