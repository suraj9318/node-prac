const fs = require('fs');
const path= require('path')

const pathdir = path.join(__dirname,"files")

// write files in loop
for(i=0 ; i<5; i++){
    fs.writeFileSync(`${pathdir}/hello${i}.txt`, `hello this is ${i+1} files`)
}

//show list of files;

fs.readdir(pathdir,(err,files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
})