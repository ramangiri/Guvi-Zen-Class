var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 newObject = Object.fromEntries(arr);
 return newObject;
}
console.log(fromListToObject(arr));