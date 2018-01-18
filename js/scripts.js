$(document).ready(function() {
var subRomanCases = /iv|ix|xl|xc|cd|cm/i;
var nonRomanRegex = /[^IVXLCDM]/ig;

    $("form#roman-form").submit(function(event) {
        event.preventDefault();
        var userInput = ($("#romanInput").val()).toUpperCase();
        if (nonRomanRegex.test(userInput)) {
            errorInvalidInput();
        }

    })    

});




function errorInvalidInput() {
    $("#output").text("Please enter a valid roman numeral combination.")
}



function multipleRomanEval(userInput) {
    for (var i = 0; i < userInput.length; i++) {
        if (subRomanCases.test(userInput)) {

        }
    }
}


function singleRomanEval(userInput) {
    switch (userInput) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return;
    }
}
function subtractionSwitch(subInput) {
    switch (subInput) {
        case 'IV': return 4;
        case 'IX': return 9;
        case 'XL': return 40;
        case 'XC': return 90;
        case 'CD': return 400;
        case 'CM': return 900;
    }
}