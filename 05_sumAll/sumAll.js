const sumAll = function(start,end) {
    let sum=0;

    if(start>end){
        let temp=end;
        end=start;
        start=temp;
    }
    if(start<0||end<0){
        return 'ERROR';
    }
    if(Number.isInteger(start)&&Number.isInteger(end)){
        for(let i=start;i<=end;i++){
            sum+=i;
        }
        return sum;
    }
    for(let i=start;i<=end;i++){
        sum+=i;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
