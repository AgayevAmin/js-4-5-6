
//////////////// 4.seyfeni print ele /////////////////////////
// var btn=document.querySelector(".btn")
// btn.addEventListener("click",function(){
// window.print();
// })
//////////////////  4.seyfeni print ele /////////////////////////

//////////////////  5. setirin uzunlugu/////////////////////////
 
// var portElement = document.querySelector(".port");
// const calculateBlobSize = str => new Blob([str]).size;
// console.log(calculateBlobSize(portElement.textContent));

/////////////////  5. setirin uzunlugu/////////////////////////

//////////////////////6.setirin uzunlugu///////////////////////////////
const toSafeInteger = num =>
  Math.round(
    Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );
  let result1 = toSafeInteger('7.1');
let result2 = toSafeInteger('9.5');
console.log(result1); 
console.log(result2); 