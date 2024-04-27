

// ***********************************************************************


// // assinment no 8
//  ans no 1 declare and initilize multidimensional array

// let mulArry = [
    
// ]
// console.log (mulArry)

// // an no 2

// let mulArray2 = [
//     [1,2,3],
//     [8,9,10],
//     [5,88,99]
// ]

// console.log (mulArray2)


// // no 3 array counting from 1 to 100
 
// let array = [9];
// let i=0
// while (i <= array[0]){
//     i++
//     console.log(`using while `,i)
// }

// for (i=1; i<array[0]; i++){
//     console.log(`using for loop `,i)
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let noForTable = +prompt("enter No. for table");
// let range = +prompt("Enter range for table");

// for (i=1; i<=range; i++){
//     equals = i*noForTable
//     document.write (`${noForTable} x ${i} = ${equals} <br> `);
// }

// 5. Write a program to print items of the following array
// using for loop:

// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

//  fruits = ["apple", "banana", "mango", "orange", "strawberry"];
//   for (i=0; i< fruits.length; i++){
//     document.write(fruits[i],`<br>`);
//   }

//   for (i=0; i< fruits.length; i++){
//     document.write (`<br>Element at index ${i} is ${fruits[i]} `)

//   }



// no 6Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// let count = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 
// document.write (`<h2>Counting</h2> <br>`);
// document.write (count);

// document.write (`<h2> Reverse Counting</h2> `);

// for (i=10; i>=0; i--){
//     document.write (`${count[i]},`)
// }



// document.write (`<h2>Even</h2> `);
// for (i=0; i<count.length; i++){
//     no = count[i];


//     if (no%2 == 0){
//         document.write(`${no},`)
//     }

//     else {
        
//     }
// }

// document.write (`<h2>Odd</h2> `);
// for (i=0; i<count.length; i++){
//     no = count[i];


//     if (no%2 !== 0){
//         document.write(`${no},`)
//     }

//     else {
        
//     }
// }


// document.write (`<h2>Series</h2> `);
// for (i=1; i<count.length; i++){
//     no = count[i];


//     if (no%2 == 0){
//         document.write(`${no}k,`)
//     }

//     else {
        
//     }
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let a = ['cake', 'apple pei', 'coolie', 'chips', 'pattoes'];
// let userA = prompt("enter your prompt").toLowerCase();

// if(a.includes(userA)){
//     document.write(`Your product ${userA} is available`)
// }
// else{

//       document.write(`Your product ${userA} is not available`)
  
// }


// no 8. Write a program to identify the largest number in the
// given array.


// a = [24, 53, 105,  78, 91, 12, 95, 98];
// let largetNo = a[0]

// for (i=0; i<a.length; i++ ){
//     if (a[i]>largetNo){
//         largetNo = a[i]
//     }
//     else{

//     }

// }
// console.log(`the largest no is ${largetNo}`)





// no 9. find the smallest no of an array
// a = [24, 53, 105,  78, 91, 12, 95, 98];
// let smallest = a[4];
// for (i=0; i<a.length; i++){
//     if(a[i]<smallest){
//         smallest = a[i]
//     }
// }
// console.log(`the smallest no in an array is ${smallest}`)





  


