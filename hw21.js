const fs = require('fs');
const folderName = 'Folder'
const fileNames = ['Vasia','Masha','Ibrogim'] 
 if(!fs.existsSync(`${folderName}`)){
    fs.mkdirSync(`${folderName}`);
     
 }

 fileNames.forEach((el)=>{
    fs.writeFileSync(`${folderName}/${el}.txt`, `hello Vasia`);
 })

function del () {
 fileNames.forEach((el) =>{
    fs.unlink(`${folderName}/${el}.txt`, (err) => {
        if (err) throw err;
        console.log('successfully deleted /tmp/hello');
      });

})
}
fs.writeFileSync(`forRead.txt`, `Read this`);
const data = fs.readFileSync('forRead.txt');
console.log(String(data));
/// только сначала сделал npm instal move-file
fs.writeFileSync(`forMove.txt`, `move`);

const moveFile = require('move-file')
moveFile('forMove.txt', 'Folder/forMove.txt');
console.log('The file has been moved');
 
