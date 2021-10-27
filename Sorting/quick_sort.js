function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];
    
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
function getSum(array)
{
  let max = Math.max.apply(null,array);
  let min = Math.min.apply(null,array);
  max = array.indexOf(max);
  min = array.indexOf(min);
  let sum = 0;
  if(min < max)
    for(let i = min+1; i < max; i++)
      sum+=array[i];
  else if(max < min)
    for(let i = max+1; i<min; i++)
    sum+=array[i];

    return sum;
}

var n = prompt('Enter array size', 100);

alert('Entered ' + n + ' lenght')
var arr = [];
for (var i = 0; i < n; i++)
  arr.push(i);
shuffle(arr);
console.log(arr);
console.log("Sum between min and max: " + getSum(arr));
arr = quickSort(arr);
console.log(arr);
