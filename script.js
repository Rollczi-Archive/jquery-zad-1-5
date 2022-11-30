

$('body').click(function(e) {
    $('#info').text("Kliknięto w " + e.target.tagName);
    alert("Kliknięto w " + e.target.tagName);
});