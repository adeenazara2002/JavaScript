// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

let char = prompt("Enter a character")
bool = true

if(char.length != 1){
    alert("Enter a single character")
}

else if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U')
    { 
        alert(bool)
}

else{
  alert(!bool)
}
