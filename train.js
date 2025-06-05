console.log("Jack Ma  maslahatlari");


// Task a
// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing


function countLetter(letter, text) {
    let count = 0;
    for (let i of text) {
      if (  i == letter) {
        count++
      }
    }
    return count;
}
const result = countLetter("a", "assalomu aleykum");
console.log(result)
















// const list = [
//     "yaxshi talaba buling", // 0-20
//     "togri boshliq tanlang va kupriq harakat qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narslarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling", // 60
// ];


// // Callback

// function recommendation(a, callback) {
//     if (typeof a !== "number") callback("pls insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
    
//     else {
//         setInterval(function () {
//             callback(null, list[5])
//         }, 1000)
//     }
// }

//  console.log("passed here 0");
// recommendation(70, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log(data);
//     }
// })



// Async functions

// async function recommendation(a, callback) {
//     if (typeof a !== "number") throw new Error("pls insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 50) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//             resolve(list[5]);
//         }, 1000)
//         });  
//     }
//  }

 // then(),  catch()
//  console.log("passed here 0");
//  recommendation(20)
//    .then((data) => {
//     console.log("response:", data)
//    }) 
//    .catch((err) => {
//     console.log("ERRO:", err)
//    });
// console.log("passed here 1")


// await
// async function run() {
//     let response = await recommendation(65);
//     console.log(response);
// }

// run()