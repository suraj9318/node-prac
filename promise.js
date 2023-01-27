let a = 20;
let b =0;


let getData = new Promise((resolve, reject) => {
    resolve(30)
}).then(result => console.log(a+result))

