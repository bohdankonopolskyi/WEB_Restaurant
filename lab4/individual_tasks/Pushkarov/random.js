function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = arr.indexOf(Math.max(...arr.slice(i)));
    [arr[i], arr[j]] =[arr[j], arr[i]];
  }
}

function main() {
  const N = prompt("Enter array size", 10);
  let arr = Array.from({length: N}, () => Math.random());

  console.log(arr);

  const minVal = Math.max(...arr);
  const minIndex = arr.indexOf(minVal);
  arr.splice(minIndex, 1);
  arr.unshift(minVal);

  selectionSort(arr);
  console.log(arr);
}

main();
