let mainStr = "123456123645712347548912375478123";
let strToCheck = "123";
let counter = 0;
function countEnters(mainStr, strToCheck,counter){
    let tmp = '';
    for(let i = 0; i< mainStr.length;i++){
        if(mainStr[i] == strToCheck[0]){
            tmp = mainStr.slice(i,i+strToCheck.length);
            if (tmp == strToCheck) {
                counter++;
            }
        }
    }
return counter;
}
counter = countEnters(mainStr, strToCheck,counter);

console.log(strToCheck, "Entries to ", mainStr, counter, "times");

2//////////////////

const arr = [5, 14, 5, 13, 243, 2, 6, 8, 9, 17, 23]
let min = 0;
let max = 0;
function findMinMax(arr){
let j =0; // index min;
min = arr[0];
     for(let i = 1; i< arr.length; i++){
        if(arr[i]< min){
            min = arr[i];
               j = i;// take index
        }
    }
    for (let i = 0; i<j;i++){
    if(arr[i]>max) max = arr[i];
    }
return min,max;
}
findMinMax(arr);
console.log('min is:',min,'max is:',max);

3//////////////////////

const matriX = [ 
            [1,2,3], 
            [4,5,6], 
            [7,8,9] ];

 let sum1 = 0;
 let prod1 =1;
 let sum2 = 0;
 let prod2 = 1;
 let counter = matriX[0].length-1; 

function countMain (matriX){
    // 2 circles
   
    for (let i = 0; i< matriX.length; i++){
        for (let j = 0; j < matriX[i].length;j++){
             if(i == j){
                sum1 += matriX[i][j];
             }
        }
    }
    //////////////////////
    for (let i = 0; i< matriX.length; i++){
        for (let j = matriX[i].length-1; j > -1; j--){
             if (counter == j){
                prod1*= matriX[i][j];
                
               
             }
             
        }
        counter--;
    }
 return sum1, prod1;
}
countMain (matriX);
console.log(sum1,prod1);

function countMain2 (matriX){
    //////// 1 circle
    for (let i = 0; i<matriX.length;i++){
        sum2 += matriX[i][i]
    }
    for (let i = 0; i<matriX.length;i++){
        prod2 += matriX[i][matriX.length-i-1];
    }
    return sum2,prod2;
}
countMain2 (matriX);
console.log(sum1,prod1);



4//////////////////////

const Array = [2,3,4,5,6,1,2,3,32,56,8,43,566,23];
function a (Array){
let = result = 1;
    for (let i = 0; i < Array.length; i++){
        result *= Array[i];
    }
return result;
}
console.log(a(Array));
