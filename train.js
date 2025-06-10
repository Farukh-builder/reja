console.log("Jack Ma  maslahatlari");

// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.

// Solution

// function countNum(str) {
//     let count = 0;
//     for (let i of str) {
//         if (!isNaN(i) && i >= '0' && i <= '9') {
//             count++;
//         }
//     }
//     return count;
// }

// const res = countNum("ad2a54y79wet0sfgb9");
// console.log(res);



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


// console.log("EXECUTE");
//  ⭐️ Asynchronous: CALLBACK, ASYNC && PROMISE

// DEFINE





// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng bololmaydi", null);
//   } else {
//     callback(null, a % b);
//   }
// }


// qoldiqliBolish(10, 6, (err, data) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Data:", data);
//   }
// });



// CALL
