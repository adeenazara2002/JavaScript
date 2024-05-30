// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

let userInput = prompt("Enter item for which you are looking for")
let arr = ['cake', 'apple pie' , 'cookie' , 'chips' , 'patties']
for(let i = 0; i<=arr.length; i++){
    if(userInput == arr[i]){
        console.log("Item found: "+arr[i])
        break;
    }
    else{
        console.log("Item not found ")
    }
}