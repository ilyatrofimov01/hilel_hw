  //1) Есть код ! с помощью async await реализуем правильную последовательность!!
  setTimeout(()=> console.log('1'), 1300);
  console.log('2')
  console.log('3')
  setTimeout(()=> console.log('4'), 300);
  console.log('5')

   
  async function getSet1 (){
      const prom1 = new Promise( function (res,rej){
          setTimeout(() => res(console.log('1')), 1300);
      })
       const set1 = await prom1;
      set1;
      console.log('2');
      console.log('3');
      const prom2 = new Promise( function (res,rej){
          setTimeout(() => res(console.log('4')), 300);
      })
     const set2 = await prom2;
     set2;
     console.log('5');
  } 
 
  // 2) Есть роуты!! Делаем через async await то что в предыдущей!только с небольшим усложнением
  // Добавился третий роут. Результат второго запроса даст обьект в котором будет поле orderList.
  // В поле orderList будет массив с обьектов, и в каждом обьекте будет поле productId.
  // Использя  эти productId и 3-й роут, сделать Promise.all и получить массив с продуктов.
  // https://playwithpromise.herokuapp.com/api/order-review/last - вернет обьект с id такой( 5d4762e02481a600174fb1ae )
  // после чего используя id делаем другой запрос
  // https://playwithpromise.herokuapp.com/api/order-review/getid/{id} 
  // https://playwithpromise.herokuapp.com/api/order-system/product/{productId}

  async function getData(){
      let result1 = await fetch('https://playwithpromise.herokuapp.com/api/order-review/last');
      result1 = await result1.json();
      console.log(result1);
      let result2 = await fetch (`https://playwithpromise.herokuapp.com/api/order-review/getid/${result1._id}`);
      result2 = await result2.json();
      console.log(result2);
      let result3 = await fetch(`https://playwithpromise.herokuapp.com/api/order-system/product/${result2.orderList[0].productId}`);
      console.log(result3);
  }
  
