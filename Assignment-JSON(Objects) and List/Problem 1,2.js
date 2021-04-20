var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 return Object.values(obj);
}
function printAllKeys(obj) {
 return Object.keys(obj);
}

console.log(printAllValues(obj));
console.log(printAllKeys(obj));