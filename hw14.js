// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

        //1) Есть промис! что за параметры принимает функция? Зачем они? как вернуть обьект {id: 10, name: 'Sergei'} и 
        // потом принять его с помощью функции промиса then? Как вернуть ошибку в промисе и потом ее перехватить?
        const obj =  {id: 10, name: 'Sergei'};
        const pr = new Promise(function (resolve, reject) {
            resolve(obj); 
        })
        pr.then((data) => console.log(data));
        /*Промисы принимают 2 параметра resolve и reject. Эти парметры отвечают за то что вернет нам тот или иной асинхронный код,resolve для успешно
        выполненной задачи и   reject для не успешной. Если у нас случается ошибка мы описываем ее в reject и мы можем поймать ее с помощью catch.*/

        //2) Есть код ! с помощью промисов написать таким образом чтобы выполнилось по порядку от одного до 5!
        // На данный момент выполнятся setTimeout-ы вконце!!

        const prom1 = new Promise(function (resolve, reject) {
            setTimeout(()=> resolve (console.log('1'), 1300)); 
        })
        const prom2 = new Promise(function (resolve, reject) {
            setTimeout(()=> resolve(console.log('4'), 300)); 
        })

        prom1.then((data) => {
            data;
            console.log('2');
            console.log('3');
                prom2.then((data2)=>{
                data2;
                console.log('5');
            })

        })      

        //3) Есть код !  Нужно всего лишь написать комментарий что делает каждая из строчок!
        const pr2 = new Promise(function (resolve, reject) {//создаем промис
             resolve({id: 2})///при успешном выполнении получаем этот объект
        });
        pr2.then((data) => data) //получаем объект из промиса и записываем его в data
            .then((res) => { /// res is declarete but never been read // кароч рез просто для красоты)))
                throw new Error('Something went wrong')///создаем руцями новую ошибку когда получим наш резолв
            })
            .catch((e) => console.log('ERROR', e) )///ловим эту ошибку
       
        // 4) Использую Promise.all получить массив из промисов и после чего отсортировать тот что возвращает массив! 
        const prom1 = new Promise(function (resolve, reject) {
            resolve(10);
        }) 
        const prom2 = new Promise(function (resolve, reject) {
            resolve({id: 3});
        }) 
        const prom3 = new Promise(function (resolve, reject) {
            resolve([6, 2, 4, 6]);
        }) 

        Promise.all([prom1, prom2, prom3] ).then(([frst,sec,third]) => {
            console.log(third.sort());
        })


        // 5) Есть роуты!! С помощью fetch
        // https://playwithpromise.herokuapp.com/api/order-review/last - вернет обьект с id такой
        // после чего используя id делаем другой запрос
        // https://playwithpromise.herokuapp.com/api/order-review/getid/{id} 
        ////1 variant///
        let response = fetch('https://playwithpromise.herokuapp.com/api/order-review/last')
        .then((data)=> data.json())
        .then((res) => fetch(` https://playwithpromise.herokuapp.com/api/order-review/getid/${res._id}`)
        .then((data)=> data.json())
        .then((res) => console.log(res)));
        ////2 variant ////
        async function getData(){
            let result1 = await fetch('https://playwithpromise.herokuapp.com/api/order-review/last');
            result1 = await result1.json();
            let finalyResult = await fetch (`https://playwithpromise.herokuapp.com/api/order-review/getid/${result1._id}`);
            finalyResult = await finalyResult.json();
        }