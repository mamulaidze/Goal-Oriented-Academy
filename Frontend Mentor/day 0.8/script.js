const h1Text = document.getElementById("h1");
const par = document.getElementById("paragraph");
const second = document.getElementById("secondsec");
const subButton = document.getElementById("subbutton")

function changeContent(){
    h1Text.textContent = "Thank you!";
    par.innerHTML = "We appreciate you taking the time to give a rating. <br>If you ever need more support, don't hesitate to get in touch!";
    second.textContent = " ";
    subButton.textContent = "S U B M I T E D"
}

