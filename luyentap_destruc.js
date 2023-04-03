// let profile = {

//     fname: 'Code',
  
  
//     lname: 'Gym',
  
  
//     bday: new Date('1979-01-02')
  
  
//   }

//   let {fname,lname} = profile
//   console.log(fname);
//   console.log(lname)


// bài tập dùng destruc và hàm bậc cao
// function detectCollision(objects, point) {

   
  
  
//       let objet = objects.find(({x,y,width,height})=>
//         point.x >= x && point.x <= x + width &&
//         point.y >= y && point.y <= y + height
      
//       )
  
//         return objet
  
//     }
  
  
//   const myObjects = [
  
  
//     {x:  10, y: 20, width: 30, height: 30},
  
  
//     {x: -40, y: 20, width: 30, height: 30},
  
  
//     {x:   0, y:  0, width: 10, height:  5}
  
  
//   ]
  
//   console.log(detectCollision(myObjects, {x: 4, y: 2}))



  // bài tập rút ngắn code :
  function replace(array, from, to, elements) {

    array.splice.apply(array, [from, to - from].concat(elements))
  
  
  }
  
  
  let testArray = [1, 2, 100, 100, 6]
  
  
  replace(testArray, 2, 4, [3, 4, 5])
  
  
  console.log(testArray)
  
  
  function copyReplace(array, from, to, elements) {
  
  
    return array.slice(0, from).concat(elements).concat(array.slice(to))
  
  
  }
  
  
  console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))
  
  
  let customerOrder = []
  
  
  function recordOrders(time) {
  
  
    customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})
  
  
  }
  
  
  recordOrders(new Date, "coffee", "yaourt", "pizza")
  
  
  console.log(customerOrder)
