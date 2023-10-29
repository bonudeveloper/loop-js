// let son = prompt("son kiriting");
// let yigindi =0;
// let pravda = true;

// while (pravda){
//     son= String(son)
//     if (son.length===1){
//         pravda=false;
//     }else {
//         yigindi=0;
//         for(i=0; i<son.length; i++){
//             yigindi+=+son[i]
//         }
//         yigindi=son;
//     }
// }
// alert(yigindi);

let son = prompt("Son kiriting:");
let yigindi = 0;
let t = true;

while (t) {
  son = String(son);
  if (son.length === 1) {
    t = false;
  } else {
    yigindi = 0;

    for (let i = 0; i < son.length; i++) {
      yigindi += +son[i];
    }
    son = yigindi;
  }
}
alert(yigindi);


