class Stopwatch{
    constructor(){
        this.startTime = Date.now()
        this.endTime = Date.now()
    }
 StartTime(){
    this.startTime = Date.now()
 }
 EndTime(){
    this.endTime = Date.now()
 }
 getElapsedTime(){
    return this.endTime-this.startTime
 }

}
let ab = new Stopwatch()
ab.StartTime()


function selectionSort(arr) {
    let currentValueNewIndex;
    for (let i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            let temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }

    return arr;
}
const arr = [];
for (let i=0; i<100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}
console.log(selectionSort(arr));

ab.EndTime()
console.log( ab.getElapsedTime());
