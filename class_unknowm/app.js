let city = 'karachi';
let part = city.slice(3)
console.log(part);

// CHAPTER 23

let text = 'It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he World War II is just enough like them to grasp World War II  their minds and motives in ways that they cannot grasp his.';

for(var i =0; i<text.length;i++){
    if(text.slice(0,i) + 'World War II'){
        text = text.slice(0,i) + 'The second World War' + text.slice(i+12);
    }
}
console.log(text);

// alternate way of this

var newText = text.replace(/ World War II/g , "the Second World War");
// global replace using regex (regular expression)
console.log(newText);