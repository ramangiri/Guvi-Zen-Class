var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
 let newObject = {} ;
 newObject[arr[0]] = arr[arr.length-1];
 return newObject;
}
console.log(transformFirstAndLast(arr));           