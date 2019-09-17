// Bubble Sort Canvas
let val = [];
const b = ( bubble ) => {
    
    let i = 0;
    let j = 0;
    bubble.setup = () => {
        bubble.createCanvas(800,300);
        bubble.background(200);
        for(k = 0; k < bubble.width; k++){
            val.push(Math.floor((Math.random() * bubble.height) + 1));
        }

    }

    bubble.draw = () => {
        bubble.bubbleSort(val);
    }

    bubble.bubbleSort = (arr) => {
        if(val[j] > val[j+1]){
            let temp = val[j];
            val[j] = val[j+1];
            val[j+1] = temp;
        }
        if(i < val.length - 1){
            j++;
            if(j >= val.length - i - 1){
                i++;
                j = 0;
            }
        }else{
            noLoop();
            console.log("sorted:");
        }
        bubble.background(50);
        bubble.stroke(255);
        //bubble.strokeWeight(0.5);
        for(k = 0; k < val.length; k++){
            bubble.line(k, bubble.height, k, bubble.height-val[k]);
        }
    }
}

let bubble = new p5(b, 'bubble');

// Quick Sort Canvas

const q = ( quick ) => {
    let val = [];
    let start = 0;
    let end = val.length-1;
    let pivotIndex = 0;
    let pivotValue = val[val.length-1];
    quick.setup = () => {
        quick.createCanvas(800,300);
        quick.background(0);
        for(k = 0; k < quick.width; k++){
            val.push(Math.floor((Math.random() * quick.height) + 1));
        }
        //quick.quickSort(val, 0, val.length-1);
    }

    quick.draw = () => {
        quick.background(50);
        quick.stroke(255);
        quick.strokeWeight(1);
        /*if(start >= end){
            noLoop();
        }
        //let index = quick.partition(val,start,end);*/
        quickSort(val, 0, val.length-1);

        for(i = 0; i < val.length; i++){
            quick.line(i, quick.height, i, quick.height-val[i]);
        }
    }
}

let quick = new p5(q, 'quick');

async function quickSort(arr, start, end){
    if(start >= end) return;

    let index = await partition(arr, start, end);
    
    await quickSort(arr,start, index-1);
    await quickSort(arr, index+1, end);
    // await sleep(1);
}

async function partition(arr, start, end){

    await sleep(1);
    let pivotIndex = start;
    let indexValue = arr[end];
    for(i = start; i < end; i++){
        if(arr[i] < indexValue){
            swap(arr, i, pivotIndex);
            /*let temp = arr[i];
            arr[i] = arr[pivotIndex];
            arr[pivotIndex] = temp;*/
            pivotIndex++;
        }
    }
    await swap(arr, pivotIndex, end);
    //await sleep(10);
    /*let temp = arr[pivotIndex];
    arr[pivotIndex] = arr[end];
    arr[end] = temp;
    */
    return pivotIndex;
}

async function swap(arr, a, b){

    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
