// let a = +prompt("son kiriting");
// let add= 0;

// for(i=1; i<Math.floor(a/2); i++){
//     if (a%i==0){
//         add+= i;
//     }
// }
// if (add==a) {
//     console.log("mukammal son");
// }else {
//     console.log(false);
// }


// let son = +prompt("son kiriting");

// for (let i=1; i<=son; i++){
//     let yigindi=0;
//     for (let a=1; a<i; a++){
//         if(i % a==0){
//             yigindi+=a;
//         }
//     }
//     if(yigindi==i){
//         console.log(i+' murakkab son');
//     }else{
//         console.log(i + " murakkab son emas");
//     }
// }
let son = prompt("son kiriting");
let yigindi = 0;
for ( let i=1; i<=son; i++){
    yigindi=0;
    for(let a=1; a<i; a++){
        if (i%a ==0){
            yigindi+=a;
        }
    }
    if (yigindi==i){
        console.log(i + " mukammal son")
    }else {
        console.log(i + " mukammal son emas")
    }
}