
        // ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))
        //1) Создать класс функция конструктор которого принимает два параметра position, salary, 
        // также создать одно private поле positions = ['software developer', 'hr manager', 'project manager'], getter(get функция)!
        // которая смотрит на поле positions, и если в position есть одно из перечисленных то возвращает true иначе false
    

        class PositionSalary {
            constructor(position, salary){
                this.position = position;
                this.salary = salary;
            };
            #positions = ['software developer', 'hr manager', 'project manager']; 
        
            get include () {
                if(this.#positions.includes(this.position)){
                   return true;
                } else return false
                
            };
        }

        //2) Есть класс App! Добавить две функции одна из них устанавливает product(создает поле product обьект с полем name, price), вторая функция получает price 
        // и одно статическое свойство yearOfIssue
        class App {
            static yearOfIssue = 1999;
            set setProduct(product){
                this.product = product;
            }
            get getPrice() {
                return this.product.price;
            }
        }


        // 3) Пишем свой split и join))!
        function split2(str, symbol) {
            let tmp = '';
            let answer = [];
            for (let i = 1; i < str.length; i++){
                if( str[i] !== symbol){
                    tmp += str[i];
                }
                else {
                    answer.push(tmp);
                    tmp = '';
                }
            }
            answer.push(tmp);
            return answer;
        }
        
        function join(arr,concat) {
            let answer = '';
           for(let i =0; i < arr.length; i++){
               let tmp = arr[i];
               answer = answer + concat.toString() + tmp.toString();
           }
           return answer; 
        }


        // 4) Ну и на последок перепишем класс в вид самовыз функция которая возвращает функцию-конструктор
        class NewApp {
            constructor(object) {
                this.object = object;
            }
            getObject() {
                return object;
            }
        }
        const newApp = (function () {
            function newApp(object){
                this.object = object;
                getObj();
            }
            function getObj(object){
                return object;
            }
            return newApp;
        })();
        
    