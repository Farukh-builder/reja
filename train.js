console.log("Train Js is working");




function checkContent(str1, str2) {
  const set1 = new Set(str1);
  const set2 = new Set(str2);
  if (set1.size !== set2.size) return false;
  for (let ch of set1) {
    if (!set2.has(ch)) return false;
  }
  return true;
}
console.log(checkContent("aabb", "ab"));       
      








// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.

// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!


// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non: non,
//       lagmon: lagmon,
//       cola: cola
//     };
//   }

  
//   getTime() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     return `${hours}:${minutes}`;
//   }

//   // Qoldiq methodi
//   qoldiq() {
//     const time = this.getTime();
//     return `Hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`;
//   }

//   // Sotish methodi
//   sotish(mahsulot, soni) {
//     if (this.products[mahsulot] === undefined) {
//       console.log(`Bunday mahsulot mavjud emas.`);
//       return;
//     }
//     if (this.products[mahsulot] < soni) {
//       console.log(`Yetarli ${mahsulot} yo'q!`);
//       return;
//     }
//     this.products[mahsulot] -= soni;
//     const time = this.getTime();
//     console.log(`Hozir ${time}da ${soni}ta ${mahsulot} sotildi.`);
//   }

 
//   qabul(mahsulot, soni) {
//     if (this.products[mahsulot] === undefined) {
//       console.log(`Bunday mahsulot mavjud emas.`);
//       return;
//     }
//     this.products[mahsulot] += soni;
//     const time = this.getTime();
//     console.log(`Hozir ${time}da ${soni}ta ${mahsulot} qabul qilindi.`);
//   }
// }
// const shop = new Shop(4, 5, 2);

// console.log(shop.qoldiq()); 
// shop.sotish('non', 3);
// shop.qabul('cola', 4);
// console.log(shop.qoldiq());






