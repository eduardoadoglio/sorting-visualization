// Bubble Sort Canvas
let val = [];
const b = ( bubble ) => {
    
    let i = 0;
    let j = 0;
    bubble.setup = () => {
        bubble.createCanvas(500,200);
        bubble.background(50);
        bubble.stroke(255);
        for(k = 0; k < bubble.width; k++){
            val.push(Math.floor((Math.random() * bubble.height) + 1));
            bubble.line(k, bubble.height, k, bubble.height-val[k]);
        }

    }

    bubble.draw = () => {
        bubble.bubbleSort(val);
    }

    bubble.bubbleSort = (arr) => {
        for(c = 0; c < 50; c++){
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

        }
        bubble.background(50);
        bubble.stroke(255);

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
        quick.createCanvas(500,200);
        quick.background(50);
        quick.stroke(255);
        for(k = 0; k < quick.width; k++){
            val.push(Math.floor((Math.random() * quick.height) + 1));
            quick.line(k, quick.height, k, quick.height-val[k]);
        }
        quickSort(val, 0, val.length-1);
    }

    quick.draw = () => {

        quick.background(50);
        quick.stroke(255);
        quick.strokeWeight(1);

        
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
}

async function partition(arr, start, end){

    let pivotIndex = start;
    let indexValue = arr[end];
    for(i = start; i < end; i++){
        if(arr[i] < indexValue){
            swap(arr, i, pivotIndex);

            pivotIndex++;
        }
    }
    await swap(arr, pivotIndex, end);

    return pivotIndex;
}

async function swap(arr, a, b){
    await sleep(30);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let depth = 1;

// Merge Sort Canvas

const m = ( merge ) => {
    let val = [];
    let arr = [];

    merge.setup = () => {
        merge.createCanvas(500,200);
        merge.background(50);
        merge.stroke(255);
        for(k = 0; k < merge.width; k++){
            val.push(Math.floor((Math.random() * merge.height) + 1));
            merge.line(k, merge.height, k, merge.height-val[k]);
        }
    }

    merge.draw = () => {
        merge.background(50);
        merge.stroke(255);
        merge.strokeWeight(1);
        merge.frameRate(5);

        val = mergeSort(val, depth);
        depth++;
        for (i = 0; i < val.length; i++) {
            merge.line(i, merge.height, i, merge.height-val[i]);
        } 
        if (depth > 100){
        noLoop();
        }
    }
}

function mergeSort(arr, d){
    if(arr.length <= 1){
        return arr;
    }
    d--;
    if(d < 1){
        return arr;
    }

    const meio = Math.round(arr.length/2); 

    const left = arr.slice(0, meio);
    const right = arr.slice(meio);
    return merge(mergeSort(left,d), mergeSort(right, d));

}

function merge(left, right) {
  sorted = [];
  while (left && left.length > 0 && right && right.length > 0) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    }
    else {
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left, right);
}

let msort = new p5(m, 'merge');