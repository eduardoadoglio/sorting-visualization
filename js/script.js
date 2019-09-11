let val = [];
let i = 0;
let j = 0;
function setup(){
    createCanvas(1000,500);
    background(200);
    for(k = 0; k < width; k++){
        val.push(random(height));
    }

}

function draw(){
    bubbleSort(val);
}

function bubbleSort(arr){
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
    background(50);
    for(k = 0; k < val.length; k++){
        stroke(255);
        line(k, height, k, height-val[k]);
    }
}