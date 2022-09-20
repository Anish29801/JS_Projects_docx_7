
function checker(){
let word =document.getElementById("text1").value;
console.log(word);

let compressed_word=word.replace(/\s+/g, '');
console.log(compressed_word);

let len_compressed_word = compressed_word.length;

console.log(len_compressed_word);

document.getElementById("ans").innerHTML = `${word} has ${len_compressed_word} Characters`;
}