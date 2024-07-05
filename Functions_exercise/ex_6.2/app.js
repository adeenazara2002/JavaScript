// PRACTISE EXERCISE 6.2
// Create an array of descriptive words.

let descriptiveWordsArr = ['Beautiful' , 'Pleasant' , 'radiant' , 'splendid' , 'terrific']
console.log(descriptiveWordsArr);

// Create a function that contains a prompt asking the user for a name.?

function userName(){
    let userName = prompt('Enter your name');
    alert('Welcome to our website');
}
userName()

// Select a random value from the array using Math.random.

let randomVal = Math.floor(Math.random() * descriptiveWordsArr.length)
let random = descriptiveWordsArr[randomVal]
// Output into the console the prompt value and the randomly selected array
// value.
console.log('Random Value '+random);

// Invoke the function.

function randomWords(descriptiveWordsArr) {
    let randomVal = Math.floor(Math.random() * descriptiveWordsArr.length)
    return descriptiveWordsArr[randomVal]

}
let randomWord = randomWords(descriptiveWordsArr)
console.log('Using function: '+randomWord)