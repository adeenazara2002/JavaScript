// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cityNames = ['Karachi' , 'Islamabad' , 'Multan' , 'Lahore' , 'Quetta' , 'Peshawar']
document.write("City Names: "+cityNames+"<br>")
let selectedCities = cityNames.slice(2,5)
document.write("Selected Cities: "+selectedCities+"<br>")
