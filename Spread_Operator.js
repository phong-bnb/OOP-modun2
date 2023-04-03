let arr = ["audi","ferrari","lexus","porsche"]
let arr1 = [...arr,"huyndai","hoda"]
console.log("arr1 là:"+arr1);
//Spread Operator được biểu thị bằng ba dấu chấm (…).
//  Spread Operator giúp lặp các đối tượng, mở rộng thành các phần tử riêng lẻ.
let trt = {
    Name: "Phong" ,
    Age: "18"
}
let tyt = {
    Name: "Thanh",
    Age:"20"
}
let yuy = {...trt,...tyt}
console.log(yuy);