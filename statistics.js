function max(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] > max){
          max = arr[i];
 }
  }
  return max;
}

console.log(max([50,100,150,200,250]));

function min(arr) {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] < min){
          min = arr[i];
  }
  }
  return min;
}


console.log(min([1, 2, 3, 4]));

function median(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }

  return sum/arr.length;
}

console.log(median([ 10, 100, 57, 89, 4, 5, 9 ])) 