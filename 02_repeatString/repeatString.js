const repeatString = function(inputString,repeatCount) {
    if(repeatCount<0){
        return 'ERROR';
    }
    let returnString='';
    for(let i=0;i<repeatCount;i++){
        returnString+=inputString;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
