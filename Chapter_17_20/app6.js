// 6. Generate the following series in your browser. See
// example output.

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write("<b>Counting:</b><br>")
for(let i =0; i<=array.length; i++){
    document.write(i+", ")
}
document.write("<br>")
document.write("<br>")



// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

document.write("<b>Reverse Counting:</b><br>")
for(let i =10; i>=1; i--){
    document.write(i+", ")

}
document.write("<br>")
document.write("<br>")



// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write("<b>Even Numbers:</b><br>")
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
    document.write(i+", ")        
    }
}
document.write("<br>")
document.write("<br>")



// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write("<b>Odd Numbers:</b><br>")
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
    document.write(i+", ")        
    }
}
document.write("<br>")
document.write("<br>")


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<b>Series:</b><br>")
for (let i = 2; i < array.length; i++) {
    if (array[i] % 2 != 0) {
    document.write(i+"k"+", ")        
    }
}
document.write("<br>")