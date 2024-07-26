let num1 = prompt();
let num2 = prompt();
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);



function submitAct(event){
    event.preventDefault();

    let userName = document.getElementById("textinput").value;
    let userBirt = document.getElementById("dateinput").value;
    console.log(userName)
    console.log(userBirt)
}



            //ar shvebaaa
// function submitFunc(event){
//     let textInput = document.getElementById("paragraph").value;
//     let colorInput = document.getElementById("color").value;
//     let pContent = document.getElementById("pText");

//     pContent.textContent = textInput.textContent
// }
