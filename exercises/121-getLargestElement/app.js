function getLargestElement(arr) {
  // your code here
  if (arr.length < 1) return 0;
  
  let resultado = arr[0];
  for (let e of arr) {
    if (resultado < e) resultado = e;
     {
     return resultado; 
    }
  }
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;