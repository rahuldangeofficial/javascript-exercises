const reverseString = function(inputString) {
    let returnString='';
    for(let i=0;i<inputString.length+1;i++){
        returnString+=inputString.charAt(inputString.length-i);
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
