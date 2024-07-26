//1. შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი string და ერთი number.
// თქვენი დავალებაა, რომ ამ ფუნქციაში მოახდინოთ +, -, *, / ამ ელემენტებზე და კონსოლში დაბეჭდოთ ეს შედეგები.
function mathematical(a , b){
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}
mathematical(5 , "gio");
mathematical(6 , 8);

//2. შექმენით ფუნქცია, რომელიც მომხმარებელს შეეკითხება ტექსტს, ფერს და
//background ფერს. მოწოდებული ინფორმაციით გამოიტანეთ ერთი პარაგრაფი, რომლის ტექსტიც იქნება
// მომხმარებლის მიერ მოწოდებული, ფერებიც შესაბამისად გამოტანილი.
const pInp = document.getElementById("emptyp");
const txtInp = document.getElementById("txtinp");
const backColor = document.getElementById("backcinp");
const txtColor = document.getElementById("colorinp");
const butt = document.getElementById("submitbutton")
function editParagraph(){
    pInp.textContent = txtInp.value;
    pInp.style.backgroundColor = backColor.value;
    pInp.style.color = txtColor.value;
    butt.style.color = "red"
}


//3. შექმენით ფუნქცია, რომელსაც გადაეცემა ორი რიცხვითი მნიშვნელობა. ამ 
//ორ რიცხვს შორის მოახდინეთ შემდეგი შედარებები: >, >=, <, <=, ==, != და დაბეჭდეთ ყველა შედეგი კონსოლში.
function anotherMathematical(a, b){
    console.log(a > b);
    console.log(a >= b);
    console.log(a < b);
    console.log(a == b);
    console.log(a != b);
}
anotherMathematical(9 ,5);
anotherMathematical(4 , 6);

//4. შექმენით ფუნქცია, რომელსაც გადაეცემა ელემენტი, მის მონაცემთა ტიპს არ აქვს მნიშვნელობა. ფუნქციაში გამოიყენეთ parseInt,
//parseFloat ამ ელემენტზე და დაბეჭდეთ შედეგები. ფუნქცია გმოიძახეთ რამდენიმეჯერ და გადაეცით სხვადასხვა პარამეტრები.
function thirdMatematical(a){
    console.log(parseFloat(a));
    console.log(parseInt(a));
}
thirdMatematical("55ehfbe");
thirdMatematical("5.5hh");
