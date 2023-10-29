// let matn = prompt("matn kiriting");
// let harf = prompt("harf kiriting");
// count=0;
// str="";
// for (let i=0; i<matn.length; i++){
    
//     count++;
//     str+=matn[i];
//     if (str == harf) {
//       console.log(count + " " + harf);
//     } else {
//       console.log("yoq");
//     }
    
// }

// let matn = prompt("matn kiriting");
// let harf =prompt("harf kiriting");
// count=0;
// for(let i=0; i<matn.length; i++){
//     if(harf==matn[i]){
//         count++;
//     }else {
//         alert("yo'q")
//     }
// }
// alert(harf +' '+ "bu"+" " + 'harf'+ " "+"marta"+" " +count+' ' +'takrorlangan')
// let a = prompt("matn kiriting");
// let b = prompt("harf kiriting");
// count=0
// for (let i=0; i<a.length; i++){
//     if (a[i]==b){
//         count++;
//     }
// }

// if (count === 0) {
//     alert("yo'q")// alohida chqvoti javobi, true-false-true bovoti
// } else {
//     alert(b + " "+ count+"   takrorlangan")
// }
// if (count!==0) { !-iwlatib korish uchun
//     alert(b + " " + count + "   takrorlangan");
// }else {
//     alert("bunday harf yo'q");
// }

let matn = prompt("matn kiriting");
let harf = prompt("harf kiriting");
count=0;

for (i=0; i<matn.length; i++){
    if (harf==matn[i]){
        count++;
    }
}
if(count==0){
    alert("bunday harf yo'q")
}else {
    alert(harf + " "+ count + " marta"+ " takrorlangan")
}

