// Bubble Sort Canvas

const b = ( bubble ) => {
    let val = [];
    let i = 0;
    let j = 0;
    bubble.setup = () => {
        bubble.createCanvas(1000,500);
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
        for(k = 0; k < val.length; k++){
            bubble.stroke(255);
            bubble.line(k, bubble.height, k, bubble.height-val[k]);
        }
    }
}

let bubble = new p5(b, 'bubble')

// Quick Sort Canvas

const q = ( quick ) => {
    
    quick.setup = () => {
        quick.createCanvas(200,200);
        quick.background(0);
    }

    quick.draw = () => {

    }
}

let quick = new p5(q, 'quick')