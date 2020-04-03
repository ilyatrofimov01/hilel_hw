
        // ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

        //1) Есть обьект car! пробежаться по обьекту через for in и подсчитать количество свойств в обьекте, 
        const car = {
            model: 'BMW',
            price: 45000,
            year: 2019,
            country: 'Germany'
        };
        let counter = 0;
        for (let key in car){
            counter ++;
        }
        console.log ("First Answer")
        console.log ("In object car ",counter, 'properties');
       
        // 2) Есть функция getClaims которая прнимает массив из обьектов claims! Фунция должна вернуть массив только из тех
        // которые  имеют status Closed
        let claims = [
        {
            id: 1234,
            model: 'MC7',
            status: 'Open'
        },
        {
            id: 3453,
            model: 'MC7',
            status: 'Open'
        },
        {
            id: 6343,
            model: 'Gran Tour',
            status: 'Closed'
        },
        {
            id: 7644,
            status: 'In Progress'
        },
        {
            id: 7686,
            model: 'City Bike',
            status: 'Closed'
        },
        {
            id: 8356,
            model: 'Bike',
            status: 'Closed'
        },
        {
            id: 9745,
            model: 'Bicycle',
            status: 'Closed'
        },
        {
            id: 10253,
            model: 'Bicycle',
            status: 'Closed'
        },
        {
            id: 14234,
            model: 'Bike',
            status: 'Closed'
        }];
        let newClaims = []; 
        
        function getClaims(arr) {
             claims.map(el =>{ 
                for (key in el){
                    if(key == "status" &&  el.status == 'Closed'){
                        newClaims.push(el);
                    }
                }
                return newClaims 
            });
        }
        getClaims(claims);
        console.log("Second answer");
        console.log(newClaims);


        //3) Дан массив arr! Необходимо найти самое большое по модулю!!! Решить минимум 2-мя способами!! Один из  них с помощью find!!
         const arr = [5, 6, 23, 64, -23, -92, 23, 3]

        ////// 1 variant 

        function biggestNum(arr){
            arr.map((el,i) =>{
                if (el <= 0)  return arr[i]= Math.abs(el); 
            });

            let answer = arr.reduce((prev,curr) => {
                if (curr > prev) prev = curr;
                return prev
            
            },0);
            
            console.log(answer);
        }
        ////////// 2 variant 
        function biggestNumByFind(arr){
            let check;
               do {
                check = arr.find(el =>  el < 0 );
                if (check !== undefined){
                let index = arr.indexOf(check);
                arr[index] = Math.abs(arr[index])
                }
            }while(check != undefined)

            let answer = arr.reduce((prev,curr) => {
                if (curr > prev) prev = curr;
                return prev
            
            },0);

            console.log(answer);
        };


         
        // 4) Используя claims переменную выше!! добавить свойство isClosed: true если status - Closed

        function addToClaims (claims){
            claims.map(el =>{ 
                for (key in el){
                    if(key == "status" &&  el.status == 'Closed'){
                       el.isClosed = true; 
                    }
                }
                return claims; 
            });

        };


        // 5)  Есть массив arr1 отсортировать этот вложенный массив [5, 1, 7,3 ,4, 6]
        const arr1 = [ [5, 2, 5,1, [5, 1, 7,3 ,4, 6] ], 6, 23, 64, -23, -92, 23, 3]

        arr1[0][4].sort();
        console.log( arr1[0][4]);

        // 6)  Есть массив arr2 разложить положительные в один массив а отрицательные в другой!!
        const arr2 = [ 5, 2, 5, -1,  6, -3, 64, -23, -92, 23, 3];
        let arrPlus= [];
        let arrMinus =[];

        function sortByMinus(arr2){
            
            arr2.map((el) => {
                if (el >= 0) arrPlus.push(el);
                else arrMinus.push(el);
                return arrPlus,arrMinus;
            })
            console.log(arrPlus);
            console.log(arrMinus);
        }
       

        //7 Написать функцию которая принимает только поле array обьекта person и сортирует по убыванию по id и возвращает массив!!
        const person = {
            name: 'Vasia',
            gender: 'male',
            array: [{id: 1, name: 'Vasia'}, {id: 6, name: 'Boria'}, {id: 2, name: 'Petia'}, {id: 3, name: 'Misha'}] 
        };

        function getPerson({array}) {
            array.sort(function(a, b) {  return (a.id - b.id); } );
            console.log("Sort has been done");
        }

        //8 Написать функцию которая принимает массив arr3! И если среднее арифметическое всех меньше самого большого числа в массиве вернуть тру иначе фолс!!!
        const arr3 = [ 5, 2, 5, -1,  6, 3, 64, 23, -92, 23, 3];

        function avgCount(arr3){
          let avgSum = 0;
           arr3.map((el)=> {
                avgSum = avgSum + el;
                return avgSum;
            })
            let biggest = arr3.reduce((prev,curr) => {
                if (curr > prev) prev = curr;
                return prev
            
            },0);
            if (avgSum < biggest) return true;
            else false;
        }

        //9 Есть обьект claim вернуть конкатенация modelName, subject!
        const claim = {
            id: 542354,
            subject: 'Bike',
            modelName: 'Mc7',
            modelId: 3213,
            getModelNameAndSubject: () => {
                //return console.log(claim.modelName.concat( ' ',claim.subject));
                return `${claim.modelName}` + ' ' + `${claim.subject}`;
              
            }
        };
        claim.getModelNameAndSubject();