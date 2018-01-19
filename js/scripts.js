var subRomanCases = /iv|ix|xl|xc|cd|cm/i;
var nonRomanRegex = /[^IVXLCDM]/ig;

$(document).ready(function() {
    $("form#roman-form").submit(function(event) {
        event.preventDefault();
        var userInput = ($("#romanInput").val()).toUpperCase();
        $("#output").text(main(userInput));
    })    
});

function main(userInput) {
    if (nonRomanRegex.test(userInput)) {
        return errorInvalidInput();
    }
    if (userInput.length == 1) {
        return singleRomanEval(userInput);
    }
    else {
        return multipleRomanEval(userInput);
    }
}

//CMXXIX  929
function errorInvalidInput() {
    $("#output").text("Please enter a valid roman numeral combination.")
}

function multipleRomanEval(userInput) {
    var total = [];
    while (subRomanCases.test(userInput)) {
        //Explore .match method for combining subtraction cases into an array.
        var subIndex = userInput.search(subRomanCases)
        var indexVal = (userInput[subIndex]+userInput[subIndex+1])
        userInput = userInput.replace(indexVal, "");
        total.push(subtractionSwitch(indexVal));
    }
    while (userInput.length > 0) {
        total.push(singleRomanEval(userInput[0]));
        userInput = userInput.replace(userInput[0], "");
    }
    console.log(total);
    console.log(total.reduce(function(total, current) {
        return total + current;
    }, 0));
}

Goal: ["CM","X","X","IX"] 

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