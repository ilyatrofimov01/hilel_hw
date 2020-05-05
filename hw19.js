
        // ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

        //1) Есть две функции конструктор! Нужно c помощью prototype сделать second родителем first!
        function A(name) {
            this.name = name;
        }
        function B(lastName) {
            this.lastName = lastName;
        }
        const first = new A('Sergei');
        const second = new B('Shakhov');

       // first.__proto__ = second;
        
        //2) Есть обьекты. Необходимо сделать vasia родителем для petia, а petia для boria.
        // ТО есть вася отец все отцов 
        const vasia = { m: 23};
        const petia = { n: 2};
        const boria = { q: 2};

        //petia.__proto__ = vasia;
        //boria.__proto__ = petia;

        //3) Написать класс Product, который принимает три поля цена, название, количество. 
        // Необходимо реализовать два метода, первый сравнивает два продукта и выводит строку
        // в которой присутствует разница по цене и количеству. Второй метод принимает любое количество продуктов и возвращает общую цену.

        class Product {
            constructor(price, name, quantity){
                this.price = price;
                this.name = name;
                this.q = quantity;
            }
            static TwoProds(firstProd,secProd){
               let priceDifference = Math.abs(firstProd.price - secProd.price);
               let qDifference = Math.abs(firstProd.q - secProd.q);
               console.log(`Price differense of two products is ${priceDifference}, and quantity difference is ${qDifference}`);
            }
            static manyProds(...arr){
                let sum = 0;
                arr.forEach(el => {
                    sum = sum +  el.price;
                    return sum;
                })
                console.log(`Sum of price of all elements is ${sum}`);
            }
        }

        // 4) Необходимо написать класс, который принимает следующие поля
        // name, lastName, age, quantity, salary, position, далее реализовываем методы на получение всех свойств.
        // , пишем геттер, сеттер и что-там еще). 
        
        
        // но если вы дочитали до этого момента то 4-е реализововать не нужно), а нужно сделать следующее.
        //  встать со стула!....... делаем легенькую разминочку, и начинаем приседать ибо дз проверяться не будет). 20 раз достаточно). 
        // и после этого скидываем мне дз.
        