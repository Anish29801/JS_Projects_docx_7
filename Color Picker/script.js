const btn = document.getElementById("button");

const Color_Picker = () => {
  let val = "0123456789ABCDEF";
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    hex=hex + val[Math.floor(Math.random() * 16)];
  }
  document.getElementById("Answer").innerHTML=hex;
  return hex;
};
console.log(Color_Picker());

function Color_Setter() {
  document.body.style.backgroundColor = Color_Picker();
}
btn.addEventListener("click", Color_Setter);
