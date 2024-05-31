// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let arr = []
arr.push('Adina')
arr.push('Tabassum')
arr.push('Musaffa')
arr.push('Moni')
document.write(arr+"<br>")
document.write("<h3>Accessing values from an array</h3> "+"<br>")
document.write(arr.shift()+"<br>")
document.write(arr.shift()+"<br>")
document.write(arr.shift()+"<br>")
document.write(arr.shift()+"<br>")


