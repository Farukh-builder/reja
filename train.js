console.log("Train Js is working");
// TASK-F

// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.


function findDouble(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }
  return false;
}


console.log(hasDoubleLetter("hello")); 









// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// Solution

// function reverse(a) {
//       return a.split('').reverse().join('')      
// }

// console.log(reverse("Hello"))



// Task c

// function checkout(a, b) {
//   return a.split('').sort().join('') === b.split('').sort().join('')
// }

// console.log(checkout("hello", 'lehh'))


// function checkContent(str1, str2) {
//   const set1 = new Set(str1);
//   const set2 = new Set(str2);
//   if (set1.size !== set2.size) return false;
//   for (let ch of set1) {
//     if (!set2.has(ch)) return false;
//   }
//   return true;
// }
// console.log(checkContent("aabb", "ab"));  











