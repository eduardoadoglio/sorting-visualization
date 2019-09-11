// Bubble Sort Canvas

const b = ( bubble ) => {
    let val = [];
    let i = 0;
    let j = 0;
    bubble.setup = () => {
        bubble.createCanvas(100,50);
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
        bubble.strokeWeight(0.5);
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
        quick.createCanvas(100,50);
        quick.background(0);
        for(k = 0; k < quick.width; k++){
            val.push(Math.floor((Math.random() * quick.height) + 1));
        }
        //quick.quickSort(val, 0, val.length-1);
    }

    quick.draw = () => {
        quick.background(50);
        quick.stroke(255);
        quick.strokeWeight(0.5);
        /*if(start >= end){
            noLoop();
        }
        //let index = quick.partition(val,start,end);*/
        quick.quickSort(val, 0, val.length-1);

        for(i = 0; i < val.length; i++){
            quick.line(i, quick.height, i, quick.height-val[i]);
        }
    }

    quick.quickSort = (arr, start, end) => {
        if(start >= end) return;

        let index = quick.partition(arr, start, end);
        
        quick.quickSort(arr,start, index-1);
        quick.quickSort(arr, index+1, end);
    }

    quick.partition = (arr, start, end) => {
        let pivotIndex = start;
        let indexValue = arr[end];
        for(i = start; i < end; i++){
            if(arr[i] < indexValue){
                let temp = arr[i];
                arr[i] = arr[pivotIndex];
                arr[pivotIndex] = temp;
                pivotIndex++;
            }
        }
        let temp = arr[pivotIndex];
        arr[pivotIndex] = arr[end];
        arr[end] = temp;

        return pivotIndex;
    }
}

let quick = new p5(q, 'quick');