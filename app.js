const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#11052C", "#3D087B", "#F43B86","#F43B86", "#FFE459"];
const btn =document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

    const randomNumber = randomColor();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent =colors[randomNumber];
})

function randomColor(){
    return Math.floor(Math.random()* colors.length);
}