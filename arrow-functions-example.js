// bình phương các phần tử và in ra 1 mảng mới
let arr = [1,2,3,4,5,6,7]
let square = (item) => item * item;
function hth(func,arr){



let arr1 = []
arr.forEach((e) => {
    arr1.push(func(e))
});
return arr1;
}
console.log(hth(square,arr));