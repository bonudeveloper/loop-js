// let son = prompt("son kiriting");
// for (let i=0; i<son; i++ ) {
//     if (i/1==0){
//         console.log(i + " tub son");
//     }else if (i/i==0){
//         console.log(i + " tub son");
//     }else {
//         console.log(i + " murakab son");
//     }
// }



// let son = prompt("son kiriting");
// count=0;
// for (let i=1; i<=son; i++){
//   count=0;
//   for(let a=1; a<=i; a++){
    
//     if(i%a ==0){
//        count++;
//     }
//   }
//   if (count<=2){
//     console.log(i+ " tub son")
//   }else{
//     console.log(i + " marakkab son")
//   }

//  }

// let son = prompt("son kiriting");//a-i ni ichidagi index; i-soni ichidagi index
// count=0;
// for (let i=1; i<=son; i++){
//   count = 0;
//   for(let a=1; a<=i; a++){//i ni bolinuvchilar nechtaligini toptik
    
//     if (i % a==0){ //hat=r bita indexni oziga va birga bo'linishini tekshirvoti 
//       count++;
//     }
    
//   }
//   if (count <= 2) {
//     console.log(i + " tub son");
//   } else {
//     console.log(i + " murrakab son");
//   }
// }

// let son = prompt("son kiriting");
// count=0;
// for (i=1;i<+son; i++){
//   count=0;
//   for(a=1; a<=i; a++){
//     if(i%a==0){
//       count++;
//     }
//   }
//   if(count<=2){
//     console.log(i+" tub");
//   }else {
//     console.log(i +" murakab")
//   }
// }
let son = prompt("son kiriting");
let javob = confirm("natijani bilish uchun consolega kiring")
count = 0;
for (i=1; i<=son; i++){
  count=0;
  for (a=1; a<=i; a++){
    if (i%a==0){
      count++;
    }
  }
  if(count<=2){
    console.log(i + " tub son");
  }
  else{
    console.log(i +" murakab son");
  }
}