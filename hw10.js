
        // ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))
        // 0) есть переменные, нужно создать обьект с ключом date и значением 17-04-2012 используя эти переменные
        // Заметка!!!! использовать синтаксис квадратные скобки для задания ключа в обьекте!!!!!!!!!!!!!
        const a = 'date';
        const aValue =  '17-04-2012';

        /////////// answer ////////

        let obj0 = {};
        obj0["a"] = aValue; 

        //1) Вывести все значения свойств обьектов в массиве
        var arr = [
            { author: 'Sergei', book: 'Sergei\'s book' },
            { author: 'Ivan', book: 'Ivan\'s book' },
            { author: 'Dmitrii', book: 'Dmitrii\'s book' }
        ];


        arr.map((el)=>{
            console.log(`${el.author}`,`${el.book}`);
        })



        //2) есть пустой обьект obj и три переменные k m n! добавить свойства к obj c ключами имена которых совпадают со значениями переменных 
        // k, m, n и и значениями такими же как имя ключа!
        var k = 'book';
        var m = 'apartment';
        var n = 'table';
        var obj = {};
        ////////////////// answer /////////////////
        obj[k] = "k";
        obj[m] = "m";
        obj[n] = "n";

        // 3) Есть массив с обьектов claims нужно привести к такому виду чтобы получить один обьект с ключами id и со значением весь обьект
        // Например 
        const newObj = {
            '1234': {
                id: 1234,
                model: 'MC7',
                status: 'Open'
            },
            '3453': {
                id: 3453,
                model: 'MC7',
                status: 'Open'
            }
            // и так далее
        }
        var claims = [
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

///////////////////// answer ////////////////////

            newClaims = {};
            claims.map((el) =>{
                newClaims[el.id] = el;
                return newClaims;
            });


        //4) Дан массив arr11! Вернуть те которые в квадрате меньше самого большого значения
        const arr11 = [10, 6, 3, 5, 6, 2, 12, 64];
        let answer = [];
        let biggest = arr11.reduce((prev,curr) => {
            if (curr > prev) prev = curr;
            return prev;
        })
        arr11.map((el) =>{
            if(Math.pow(el,2)<biggest) return answer.push(el);
        });

        
    

        // 5) Написать свой собственный some! Функция должна принимать два параметра массив и функцию!!
        function some(array, f) {
            let ans;
          for (let i = 0; i < array.length; i ++){
              if (f(array[i]) === true){
                return true;
             }
            }
            return false;
        }
    

        some([5, 2, 5, 1, 6, 3, 6], (el) => el > 5 );
     

        // 6) Переопределить toString функции getArrayClone и обьекта iron
        function getArrayClone(arr) {
            return arr.slice();
        }
        const iron = {
            power: 2000,
            price: 2500
        };
        
           /////////////// ANSWER//////////////
        getArrayClone.toString = function() {
            return 'VASIA';
        }
        iron.toString = function() {
            return 'VASILISA';
        }






        // 7)  Написать функцию которая записывает элементы из массива arr2 в новый массив которых нет в arr1!
        var arr1 = [5, 2, 'a'];
        var arr2 = [6, 5, 2, 4, 'a'];  
        let newArr=[];
        function reWrite(arr1,arr2){
            arr2.map((el)=>{
                if (arr1.includes(el) == false){
                     newArr.push(el);
                }
                return newArr;
            })
        }
        
        // 8) Какой контекст имеет первый и второй массив?
        var arr1 = [5, 2, 'a'];
        var arr2 = [6, 5, 2, 4, 'a'];  
        //глобальный (window)
        
        // 9) Есть два обьекта! Вызвать getSpeed1() с контекстом car2 и getSpeed2 с контекстом car1
        var car1 =  {
            speed: 200,
            getSpeed1() {
                return this.speed;
            },
        }

        ///////answer for car1///////////
        car1.getSpeed1.bind(car2)();

        var car2 = {
            speed: 220,
            getSpeed2() {
                return `${this.speed}km`;
            }, 
        }
         ///////answer for car2///////////
         car2.getSpeed2.bind(car1)();

        //10) Есть массив из обьектов нужно отфильтровать только те у которых цена больше 40000 и где model не равна Mercedes с помощью filter!
        const car = [
            {
                model: 'BMW',
                price: 45000,
                year: 2015,
                country: 'Germany'
            },
            {
                model: 'Audi',
                price: 75000,
                year: 2017,
                country: 'Germany'
            },
            {
                model: 'Mercedes',
                price: 80000,
                year: 2019,
                country: 'Germany'
            },
            {
                model: 'Volkswagen',
                price: 35000,
                year: 2019,
                country: 'Germany'
            },
        ];

        let newCar = [];
        function filterCars(){
            newCar = car.filter((el) => el.price > 40000 && el.model != 'Mercedes' );
        }
        filterCars();
        console.log(newCar);


//  необязательные
        // 11) Есть массив claims если хотя бы один обьект имеет в поле статус значение Open то вернуть true! Ипользовать метод массива some!
        claims = [
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

            //////////////ANSWER//////////////

            function claimsCheck(){
                if (claims.some(el => el.status === 'Open') === true) return true;
                else return false;
            }
            claimsCheck();//// true




        //12) Дан массив arr22! Используя пробежаться по массиву и если все больше или равны 2 то вернуть true! Использовть every метод!
        const arr22 = [10, 6, 3, 5, 2, 2, 12, 64];
    
        function arr22Every(){
            if(arr22.every(el => el >=2) === true) return true;
            else return false;
        }

        // 13) Используя claims переменную выше!! Удилить все элементы у которых статус isClosed!! Подсказка! удалить не значит брать и явно удалять можно использовать метод массивов и вернуть новый и перезаписать!!
       function rewriteClaims(){
        let newClaims2 =[];
        claims.map((el) => {
            if (el.status != 'Closed'){
                newClaims2 =[...newClaims2,el]
            }
            return claims  = newClaims2;
        })
        console.log(claims);
        }

        // 14) Написать свой собственный filter! Функция должна принимать два параметра массив и функцию!!
        function filter(array, f) {
            let newArray = [];
           // debugger;
                for (let i =0; i<array.length; i++){
                    if (f(el = array[i]) === true ) ///don`t understand what to do whith f
                    newArray = [...newArray, el];
                }
            return newArray;
        }
        filter([5, 2, 5, 1, 6, 3, 6], function (el) { return el > 2 });
        
        
        // ВОТ ПРИМЕР КАК НАПИСАТЬ СВОЙ map
        function map(arr, f) { // arr - массив, f - функция обратного вызова
            let newArr = [];
            for (let current of arr) {
                newArr = [...newArr, f(current)];
            }
            return newArr;
        }

        map([5, 3, 1, 5, 3], function (curr) { return curr * 2 }); // передал два параметра массив и коллбэк
        