1////////////////////////////////
firstArr = first.split('')
filteredFirst = firstArr.reduce((prev,curr) => {
    if (prev.includes(curr)) return prev;
    else {
        prev.push(curr);
        return prev;
    }
}
,[]);
filteredFirst.join('');

2/////////////////////////////////////////

let second2 = second.split(' ');
second2.length; //длинна масива - количество слов (можно еще через цикл поискать количество пробелов и от єтого отталкиваться, но не зря же существуют методы :) ) 

3//////////////////////

second2 = second.split(' ');
let answer = second2.reduce((prev,current) => {
if (current.length > prev.length) prev = current;
return prev;
},'')

4///////////

let fourth2 = fourth.split(' ');
fourth2.join('');

5////////////////////////////

let fifth2 = fifth.split(' ');
fourth2.join(',');

6/////////////////////////

let sixth2 = sixth.filter((el) => el > 20);

7///////////////////////
seventh = seventh.map((el) =>{
    if (el > 20){ return el + ' ' + 'месяца'}
    else return el;
    
});

8//////////////////////////////

let sum = eight.reduce((prev,curr) =>{

if (curr > 3 )prev += curr;
return prev;

},0)


9/////////////////////////////////

let search = nine.reduce((prev,curr) => {
    if (curr == 21) prev = curr;
    return prev; 
},0)

10////////////////////////////////////////////

let check = ten.reduce((prev,curr) => {
   if (curr > 5) {
        prev.push(true);
        return prev;
   }
    else {
    prev.push(false);
    return prev;
}
},[])
if (check.includes(false)) console.log('Array includes nums less then 5');


11/////////////////////////////////////////////////////

eleven.map((el) =>{
 if (el%2 != 0) return el*2;
 else return el;
 });

 