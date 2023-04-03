let names = ["alpha", "beta", "gamma", "delta"];
let [firstName, secondName] = names;

console.log(firstName);//"alpha"
console.log(secondName);//"beta"
// hoặc : 
let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];

console.log(firstName);//"alpha"
console.log(secondName);//"beta
// nếu có 2 dấu phẩy thì là bỏ qua 1 phần tử: 
let [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName);//"alpha"
console.log(thirdName);//"gamma"
// cách sử dụng destructuring: 
[firstName, secondName] = [secondName, firstName]

console.log(firstName);//"beta"
console.log(secondName);//"alpha"