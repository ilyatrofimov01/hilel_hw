
// ///fetch("http:///localhost:8090/").then((data) => data.json()).then((res) => console.log(res));

const users = [

    { userName: 'Boria', id: 1, email: 'boria23@gmail.com'},
    
    { userName: 'Vasia', id: 2, email: 'boria23@gmail.com'},
    
    { userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
    
    { userName: 'Misha', id: 4, email: 'boria23@gmail.com'},
    
    { userName: 'Misha', id: 5, email: 'boria23@gmail.com'},
    
    ];

const http = require("http");
const url = require('url');

http.createServer(( req, res)=>{

    res.setHeader('Access-Control-Allow-Origin','*');

    const uri = url.parse(req.url,true);
    const query = uri.query
    console.log(query);
    if (req.url === '/user'){
        res.end(JSON.stringify(
            users[0]
        ))};
    if ( query.id){
            res.end(JSON.stringify(   
                users[query.id-1]
        ))}
    else {
        res.end(console.log(`User with following id does not exist`));
    }
    
}).listen(8090 , () => console.log('server is running on port 8090'));
