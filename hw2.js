first[1][3][4][2] // 43 
first[1][3][2] //109

for (let i = 0; i<zero.length; i++ ){
 if (zero[i]<5){   
zero[i] = 11 ;}
}

Кароч я неправильно прочитал задание и перемножил все четные числа)

let temp = 0;

for (let i = 0; i <multiply.length; i++){
    if (multiply[i] % 2 == 0 ){
        odd = multiply[i] * odd;
        console.log(odd);
    }
}

Вот то что надо:

 let temp = 0;

for (let i = 0; i <multiply.length; i++){
    if (i % 2 == 0 ){
        odd = multiply[i] * odd;
        console.log(odd);
    }
}

Вывод с for 

for(let i = 0; i<second.length; i++){
    if (second[i] % 2 !=0 ){
       console.log(second[i]);
    }
}

Вывод с while

let i = 0 ;
while (i<second.length){

    if(second[i]%2 !== 0 ){
        console.log(second[i]);
    }
    i++;
}


let min= third[0]; 
    for (let i = 1; i < third.length; i++){
        min > third[i] ? min = third[i] : null ;
    }


for (let i = fourth.length; i > 0; i--) console.log(fourth[i]);


let sum = 1;
for (let i = 0; i< fifth.length; i ++) sum = fifth[i]*sum;
console.log(sum);


let sum2 = 0;
for (let i = 0; i<sixth.length; i ++) sum2= sum2+sixth[i];
console.log(sum2);

let avarage = 0;
let sum3 = 0;
for (let i = 0; i< seventh.length; i ++)sum3 = sum3 + seventh.length;
avarage = sum3 / seventh.length;
console.log(avarage);


let y = 5
for (let i = 0; i < (17-5+1); i ++){
    eighth[i] =  y;
    y++;
}


let tmp;
for (let i = 0; i < ninth.length-1; i++ ) {
    for (let j = 0; j < ninth.length-1; j ++) {
        if (ninth[j]> ninth[j+1]){
         tmp = ninth[j];
         ninth[j]= ninth[j+1];
         ninth[j+1] = tmp;
        }
    }
}
console.log(ninth);


let counter = 1;
for (let i = 0; i<tenth.length; i++){
 if (tenth[i] == tenth[i+1]){
    counter++;
    }  else {
        res = res + counter + tenth[i];
        counter = 1;
    }
   
}


let counter = 1;
for (let i = 0; i<eleventh.length; i++){  
    for(let j = i+1; j<eleventh.length; j++){
        if(eleventh[i] == eleventh[j]){
            counter++;
        }
    }
    if (newRes.includes(eleventh[i]) == false){
    newRes = newRes+ counter + eleventh[i];
    counter= 1;
    }

}

console.log(newRes);
