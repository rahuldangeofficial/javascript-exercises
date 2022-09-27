const add = function() {
  for(let i=1;i<arguments.length;i++){
    arguments[0]+=arguments[i];
  }
  return arguments[0];
};

const subtract = function() {
  for(let i=1;i<arguments.length;i++){
    arguments[0]-=arguments[i];
  }
  return arguments[0];
};

const sum = function(arr) {
	if(arr[0]===undefined){
    arr[0]=0;
  }else{
    for(let i=1;i<arr.length;i++){
      arr[0]+=arr[i];
    }
  }
  return  arr[0];
};

const multiply = function(arr) {
  if(arr[0]===undefined){
    arr[0]=0;
  }else{
    for(let i=1;i<arr.length;i++){
      arr[0]*=arr[i];
    }
  }
  return  arr[0];
};

const power = function() {
	for(let i=1;i<arguments.length;i++){
    arguments[0]**=arguments[i];
  }
  return arguments[0];
};

const factorial = function(num) {
	let result=1;
  for(let i=1;i<=num;i++){
    result*=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
