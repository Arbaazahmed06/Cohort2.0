//Write a Program to print the largest number in the array//
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);