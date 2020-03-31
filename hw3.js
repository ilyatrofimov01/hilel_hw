1////////
function multily(a,b){
    let res = a*b;
    return console.log(res);
}

2//////

function min(a,b,c) {
    let res;
    if (a < b && a < c ) res = a;
    if (b < a && b < c) res = b;
    if (c < a && c < b)res = c;
    if (a == b || a == c || b == c) alert('Ender different numbers'); // Защита в слечае если  предаваемые параметры будут одинаковы
return console.log('minimal number is', res);  
}

3////

let arr1 = [2, 3, 8, 12, 17, 13, 33, 52, 67, 38, 99];
let sortIsDone = [];
function sortArray (arr1){ 
    let newArray = [];
    let n = 0;
    let tmp;
    for (let i = 0; i<arr1.length; i++){
        if (arr1[i] % 2 !== 0 ) {
         newArray[n] = arr1[i];
         n++;
        }
    }

    for (let i = 0; i < newArray.length-1; i++ ) {
        for (let j = 0; j < newArray.length-1; j ++) {
            if (newArray[j]> newArray[j+1]){
                 tmp = newArray[j];
                 newArray[j]= newArray[j+1];
                 newArray[j+1] = tmp;
            }
        }
    }
for(i = 0; i < newArray.length;i++)sortIsDone[i] = newArray[i];
   
return (sortIsDone); 
}
sortArray(arr1);

4///////

let resultArray = [];
let array = [5, 20, 1, 6, 8 ,7, 14, 25, 55, 75, 80, 76, 90, 7, 55];
function multipleOfFive(array){
   let j = 0;
   for(let i = 0; i<array.length; i++){
       if(array[i] %5 == 0){
            resultArray[j] = array[i];
            j++;
       }
   }
    return (resultArray);
}
multipleOfFive(array);
console.log (resultArray);

5 /////

let strRes = ' ';
let str2 = 'jitb';
let arr1 = ['Javascript', 'nice', 'coding', 'is', 'the', 'language', 'Best', 'worst']; 
function goToLower(arr1){
    let tmp;
    let tmp2;
    for (let i= 0; i<arr1.length; i++){
    arr1[i]= arr1[i].toLowerCase();
    }
return arr1;
}
function concatRes(arr1){
	goToLower(arr1);
	let j = 0;
	for (let i = 0; i<arr1.length;i++){
   		 if (arr1[i].indexOf(str2[j]) == 0 ){
       		 strRes = strRes+ arr1[i] + ' ';
       		 j++;
   		 }
	}
	return strRes;
}
concatRes(arr1);

6////////

const Str ='adadadadadadadadadadad' 


function countSubStr(Str){
    let amountOfSymbols = 1;
    let subStr = '';
    for(let i = 0; i < Str.length;){
        if(Str.slice(0,amountOfSymbols) !== Str.slice(0,amountOfSymbols + amountOfSymbols)){
        amountOfSymbols++;
        }else{
            subStr = Str.slice(0 ,amountOfSymbols);
            i = i +amountOfSymbols;
        }
    }
    return subStr;
}
countSubStr(Str);


8////

const num = 53;
let check;
function isPrime(num){
    for(let i = 2; i<num; i++){
        if (num%i == 0) return false;
    }
    return true;
}
check = isPrime(num);
  check == true ? alert('Num is prime') : alert('Num is not prime');


var arr = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];
for (let i = 0; i< arr.length; i++){
    console.log(arr[i][i]);
}
console.log('Pobo4naya');
for (let i = 0; i< arr.length; i++){
    console.log(arr[i][arr.length- i - 1]);
}

