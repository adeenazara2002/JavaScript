// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].



let A = [24, 53, 78, 91, 12];
let maxNumber = A[0];
for (let i = 1; i < A.length; i++) {
    if (A[i] > maxNumber) {
        maxNumber = A[i];
    }
}
console.log(maxNumber);

