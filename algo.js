/* eslint-disable prettier/prettier */
// function fizzBuzz(n) {
//   // Write your code here

//   if (n % 3 == 0 && n % 5 == 0) {
//     console.log('FizzBuzz');
//   } else if (n % 3 == 0 && n % 5 != 0) {
//     console.log('Fizz');
//   } else if (n % 5 == 0 && n % 3 != 0) {
//     console.log('Buzz');
//   } else if (n % 3 != 0 || n % 5 != 0) {
//     console.log(n);
//   }
// }

// fizzBuzz(1);

// function evenproduct(nums) {
//   // Write your code here
//   nums.forEach((element) => {
//     console.log(element);
//   });
// }

// evenproduct([1, 2, 3, 4]);

// function miniMaxSum(arr) {
//   // Write your code here
//   var r = 0;

//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     for (let j = 0; j < arr.length; j++) {
//       const element2 = arr[j];
//       if (arr[index] != arr[j]) {
//         r = element + element2;
//       }
//     }
//   }
//   console.log(r);
// }

// miniMaxSum([1, 3, 5, 6, 9]);

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  var contador = 0;
  for (let i = 0; i < ar.length; i++) {
    const element = ar[i];
    for (let j = 0; j < ar.length; j++) {
      const element2 = ar[j];

      if (ar[i] != ar[j]) {
        var suma = element + element2;
        if (suma % k == 0) {
          contador++;
        }
        suma = 0;
      }
    }
  }
  console.log(contador / 2);
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
