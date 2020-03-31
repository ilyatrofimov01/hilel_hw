let res =[];
function takeStr(arrayOfStrings){
let tmp;
    for (let i= 0; i< arrayOfStrings.length;i++){
        tmp = arrayOfStrings[i];
        if (tmp.includes('g') && tmp.includes('a')){
        res.push(arrayOfStrings[i]);
        }
    }
return res;
}
takeStr(arrayOfStrings);
console.log(res);

2///////////////////////////
let nums = [1,1]
function Fibonachi(nums){
    for (i = 1; i < 15; i++){
    let tmp = nums[i]+nums[i-1];
    nums.push(tmp);
    }
return nums;
}
Fibonachi(nums);
console.log(nums);

3//////////////////////////////////
 let i = 0;
function outArray (arr){
    if ( i === arr.length ){
        
        return console.log('Done');
    }  
    else {
    console.log(arr[i]);
    i++;
    outArray(arr);
    }
}

outArray(arr);
4////////////////////////////////////


const array = [3,1,2543,65,3423,253647,568678,787976,342,12,31,1,4,56,5664,5656,565,656];


function count(array){
let avg = 0;
let counter = 0; 
let migddleAvg;
    for (let i = 0; i < array.length; i++){
        if (array[i]%2 != 0){
            avg += array[i];
               counter++;
        }
    }
   return middleAvg = avg/counter;
}
console.log(Math.floor(count(array)));

///////////////////////////////////////////
let from = 1;
let to = 100;
let sum = 0;
let numsCounter = 0; 
let avg = 0;

function steper(){
  if (from < to) {
    counter();
    from++; 
    return steper();
  }
 else if (from === to){  
        return avg = sum/numsCounter;
  }
}
function counter(){
if( from%2 !== 0){ 
    sum += from; 
    numsCounter++;
    }
}


5//////////////////////////////
////в Коллстэке сначала попробуется вызваться функция а, она вызовет функцию б, та в свою очередь
 //с, та в свою очредь д, д вернет строку "Привет" в с, с вернет ее в б , б вернет ее в а. То есть будет такой поряядок abcdcba