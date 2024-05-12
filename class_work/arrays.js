// push => add in last
// pop => remove from last
// shift => remove first element
// unshift => add first element

let arr = [0,'Adina',true]
console.log(arr[1])

let cities = ['Karachi' , 'Lahore' , 'Islamabad' , 'Muree' , 'Quetta']
console.log(cities)
cities.splice(2,2,'khi', 'lhr')
console.log(cities)

let fruits = ['Mango' , 'Apple', 'Banana', 'Orange', 'Grapes']
let newFruits = fruits.slice(2,4)
console.log(fruits)
console.log(newFruits)
