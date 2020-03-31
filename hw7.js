// 1 //

const car = {
    model: 'Mercedes',
    price: 60000,
    type: 'sedan',
    year: 2019,
    quantity: 4
    };
    function getPrice (car){
    car.quantity -= 2 ;
    return car.quantity * car.price;
    };
    let check = getPrice(car);
    
    // 2 //
    
    const bicycle = {
    model: 'CORSO: 26',
    price: 10000,
    };
    let newBicycle;
    function getBicycle({model,price}){
    
    return newBicycle = {model, price, bought:true};
    
    };
    
    getBicycle(bicycle);
    
    
    
    
    // 3 //
    
    impScreen = {...impScreen,...impScreen.content};
    delete impScreen.content;
    console.log(impScreen);
    
    
    
    // 4 //
    
    
    
    const obj = {
    name: "Impressum",
    uuid: "0cc57361-9c7d-4f08-a6d9-c254f3516e7d",
    content: {
    component: "page"
    }
    };
    
    let {name : name } = obj;
    
    
    // 5 //
    
    
    let filteredScreen = impScreen.children.filter((el) => el.type === 'rich_text');
    
    
    // 6 //
    
    let checkedData = dataExample.filter((el) => el.age > 18 && el.gender === 'm' );