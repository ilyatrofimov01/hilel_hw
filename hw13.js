 // ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

        //1) Есть участок кода! обернуть в try catch нужный участок кода и выбросить ошибку если getResult возвращает undefined
        function getResult() {
            try{
                var obj = {
                    name: 'Sergei',
                    lastName: 'Shakhov'
                }
                let y;
                 return y;
            }
            finally {console.log('Finished')}
           
        }
        const a = getResult();
        if (a === undefined) throw new Error('EEe , Vasia that is undefined')
        console.log('RESULT', a);


        //2) исправить код чтобы консоль логи показывали от 0 до 10, и написать почему сейчас выводит десять десяток!!
        for (var i = 0; i < 10; i++) {
            setTimeout(() => console.log(i), 0);
        }

                 /////answer ///////
        for (let i = 0; i < 10; i++) {
            setTimeout(() => console.log(i), 0);
        }//используем блочное объявление, за каждым сеттаймаутом закрепляется свое значение

        for (var i = 0; i < 10; i++) {
            setTimeout((nums) => console.log(nums), 0, i);
        }//используем 3 параметр






        // 3) Есть код!! В какой последовательности выполнится!
        function getDatas() {
            return [
                {
                    name: "Vasia"
                },
                {
                    name: "Boria"
                },
                {
                    name: "Misha"
                },
            ]
        }
        const res = getDatas();
        console.log('RES', res);///// 1
        setTimeout(() => console.log('settimeout1'), 100);/////5
        setTimeout( () => console.log('settimeout'), 10);/////4
        console.log('One');////2
        console.log('two');/////3







        //4) Что выведет alert в setTimeOut
        setTimeout(function () {
            alert(i);
        }, 100);

        for (var i = 0; i < 1000000; i++) {
        }
        ///// Выведет 1000000


        // 5) Есть функция funct! Сделать из нее функцию конструктор которая создает обьект со свойствами name lastName
        function funct(name, lastName) {
            this.name = name;
            this.lastName = lastName;
        }

        let iam = new funct('Ilya', 'Trofimov');
        console.log (iam);

        // 6) Создать функцию конструктор, которая принимает обьект и берет только lastName и position и создает обьект с этих свойств
        function factory({ lastName, position }) {
            if (lastName) this.lastName = lastName;
            if (position) this.position = position;

            return {
                name: 'ZINA',
                lastName,
                position
            };
        }

        new factory({ name: 'Sergei', lastName: 'Shakhov', height: 188, position: 'Software developer' });


        // 7) Сделайте так чтобы выболнялось settimeout1 RES RES1
        setTimeout(() => console.log('settimeout1'), 100);
        console.log('RES', res);
        console.log('RES1', res);
        let res = 3;


        ////////////////answer/////////////

        let promise1 = new Promise((res,rej) =>{
            setTimeout(() => res ('settimeout1'),100);
        });
        promise1.then((data) => {
        console.log (data);
        console.log('RES', res);
        console.log('RES1', res);
        });
      
        
        // 8) Есть код! Почему строчка с комментарием покажет {misha: NADUSHA}! Сделать так чтобы a.getObject(); вернул {misha: 'misha'}
        // то есть должны быть независимые обьекты!!
        function newFactory(obj) {
            var object = obj;

            return {
                getObject: function() {
                    return object;
                }
            };
        }
        var a1 = newFactory({misha: 'misha'});
        var k = newFactory(a1);
        k.misha = 'NADUSHA'; 
        a1.getObject(); // КОММЕНТАРИЙ!!! покажет NADUSHA 
        ////показывает {misha: NADUSHA} потомучто это ссылочный тип и они ссылаются на один и тот же адресс в памяти, соответственно результат у них будет общим
        ///// изменил  var k = a.getObject();    на   var k = newFactory(a1);  
