
function Cal(){
let amount=Number(document.getElementById("amount").value);
let months = Number(document.getElementById("months").value);
let rate = Number(document.getElementById("rate").value);

console.log(amount);
console.log(months);
console.log(rate);


const interest = Math.round((amount * (rate * 0.01)) / months);
console.log(interest);
const total = ((amount / months) + interest).toFixed(2);
console.log(total);

document.getElementById("Answer").innerHTML="Rs. "+ total; 
}
function reset(){
let amount=Number(document.getElementById("amount").value);
let months = Number(document.getElementById("months").value);
let rate = Number(document.getElementById("rate").value);

amount=0;
rate=0;
months=0;
document.getElementById("amount").innerHTML=0; 
document.getElementById("months").innerHTML=0; 
document.getElementById("rate").innerHTML=0; 

}