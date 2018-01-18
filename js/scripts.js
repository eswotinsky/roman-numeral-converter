$(document).ready(function() {
var nonRomanRegex = /[^IVXLCDM]/ig;

    $("form#roman-form").submit(function(event) {
        event.preventDefault();
        var userInput = $("#romanInput").val();
        if (nonRomanRegex.test(userInput)) {
            errorInvalidInput();
        }

    })    

});




function errorInvalidInput() {
    $("#output").text("Please enter a valid roman numeral combination.")
}