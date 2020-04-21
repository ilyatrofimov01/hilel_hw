
        // ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

        //1) Есть функция a! Пояснить почему при вызове функции b возьмется k из функции b! Ну и предложить решение чтобы брать k которое выше!
        function a(arg) {
            let k = 10;
            function b() {
                let k = 20;
                return k;
            }
            const res = b() + arg;
            return res;
        }
        ///let - блочный, а так, как в функции б обьявлена к, он ее найдет в этом блоке и будет использовать
        ////решение ////
        function a(arg) {
            let k = 10;
            function b() {
                return k;
            }
            const res = b() + arg;
            return res;
        }///// если его не объявлять в этом блоке то оно пойдет на уровень выше в поиске к, и найдет нужное нам




        //2) Написать функцию которая принимает параметр num и вовращает новую функцию которая тоже принимет один параметр возвращает произведение!
        // то num нужно замкнуть! 
        function a(num) {
            // ваш код
        }
        const res = a(5);
        res(10); // 50

        /////////// answer //////////////
        function a(num) {
            return function a1 (num2) { 
                  return num*num2;
                } 
            }
        const res = a(5);
        res(10);        
       
      



        // 3) Есть функция counter!Пояснить почему res, res1 берут разные i с замыкания!
        function counter() {
            var i = 1;

            return function () { // (**)
                return i++;
            };
        }
        const res = counter();
        res();
        res();
        const res1 = counter();
        res1();
        res1();
        //////// у них разные i потому, что  var так же как и лэт блочный а рес1 и рес разные ункции и для каждой из них свои собственные блочные
        ///// значения, а функция каунтер просто как конструктор для этих функций



        //4) Есть функция с которую мы разбирали! Нужно переопредлить toString f чтобы не обращатся к свойству k, а после нажатия enter выводило результат!
        function c(num) {
            f.k = 0;
            function f(num1) {
                f.k += f.k ? num : num + num1;
                return f;
            }
            f.toString() = function (){
                return f.k;
            }
            return f;
        }
        c(5)(6)(1).k; // таким образом мы получали k которое хранит сумму!!
        c(5)(6)(5); // нужно чтобы в консоле показало не тело функции а результат то есть ну/но переопределить toString



        // 5) Разомнем мозги пишем собственный reduce! 
        function reduce(array, f,initial) {
            let prev = initial? intitinitialial : array[0];
            let start = initial ? 0:1;
            for (let i = start ; i< array.length; i++){
                prev = f(prev,array[i])
            }
            return prev;
        }
        reduce([5, 2, 5, 1, 6, 3, 6], (prev, curr) => prev + curr);


        
        // 6) Взял задачу с нета! Обьяснить почему первая выведет 10, а 2 остальные 0!
        ////// потому что в первом случае неправильное объявление i для цикла, оно объявляется с помощью var, область видимости которого не блок(как у let),
        ////а вся функция в которой эта пременная объявлена, а к примеру во втором там замыкание, ну а в третьем лэт. 
        /*1)*/ function arrOfFunctions() {

            var functions = [];

            for (var i = 0; i < 10; i++) {
                var f = function () { // функция-стрелок
                    alert(i); // выводит свой номер
                };
                functions.push(f);
            }

            return functions;
        }

        var res = arrOfFunctions();

        res[0](); // стрелок выводит 10, а должен 0
       


        /*2*/
        function arrOfFunctions() {

            var functions = [];

            for (var i = 0; i < 10; i++) {
                (function (i) {
                    var f = function () {
                        alert(i);
                    };
                    functions.push(f);
                })(i);
            }

            return functions;
        }

        var res = arrOfFunctions();

        res[0]()
      

        /*3*/ function arrOfFunctions() {

            var functions = [];

            for (let i = 0; i < 10; i++) {
                var f = function () {
                    alert(i);
                };
                functions.push(f);
            }

            return functions;
        }

        var res = arrOfFunctions();

        res[0](); 





