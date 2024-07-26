// 1.html-ში შექმენით სამი პარაგრაფი. შემდეგ დაამატეთ ერთი ღილაკი, რომელზე დაკლიკებისას გაეშვება შემდეგი ფუნქცია: პირველის ტექსტი დაიწეროს მეორეში, მეორესი - მესამეში და მესამე პარაგრაფის ტექსტი კი პირველი.
const par1 = document.getElementById("p1");
const par2 = document.getElementById("p2");
const par3 = document.getElementById("p3")
function changeText(){
    const temp = par1.textContent;
    par1.textContent = par2.textContent;
    par2.textContent = par3.textContent;
    par3.textContent = temp;
}




// 2.html-ში შექმენით ერთი პარაგრაფი და სამი ღილაკი. პირველ ღილაკს დაუწერეთ -1, მეორეს reset და მესამეს +1. მათი ფუნქციონალიც შესაბამისი იქნება. პირველზე დაკლიკებისას p-ში არსებულ რიცხვს დააკლდეს ერთი, მეორეზე დაკლიკებისას განულდეს, ხოლო მესამეზე დაკლიკებისას მოემატოს ერთი.


const paragraph = document.getElementById("mainp");
let number = 0;

function minusFunc(){
    number--;
    updateParagraph();
}
function plusFunc(){
    number++;
    updateParagraph()
}
function resetFunc(){
    number = 0;
    updateParagraph();
}

function updateParagraph() {    
    paragraph.textContent = number;

}

// 3.html-ში შექმენით სამი პარაგრაფი და სამი  ღილაკი. პირველ ღილაკზე დაკლიკებისას პარაგრაფების ტექსტის ფერი უნდა გახდეს მწვანე, მეორეზე წითელი და მესამეზე ყვითელი.
const rainbow = document.getElementById("rainbowp");
function greenP(){
    rainbow.style.color = "green";
}
function redP(){
    rainbow.style.color = "red";
}
function yellowP(){
    rainbow.style.color = "yellow";
}


// 4. შექმენით ობიექტი სახელად carInfo. მისი კუთვნილებები უნდა იყოს Brand, model, year, color, engine.  ასევე უნდა გქონდეთ მეთოდი, რომელიც ყველა მოწოდებულ ინფორმაციას ერთ დიდ წინადადებაში გამოიტანს.
const myCar = {
    brand: "Mercedes",
    model: "GT Rocket 1000",
    condition: function(){
        console.log(this.brand+" "+this.model+ " is starting")
    },
    condition2: function(){
        console.log(this.brand+" "+this.model+ " is breaking")
    }
}

myCar.condition()
myCar.condition2()




// 6. შექმენით ობიექტი სახელად calculator. მასში ჩააშენეთ მიმატების, გამოკლების, გამრავლების, გაყოფის და ხარისხის მეთოდები. რაც მთავარია, საბოლოო შედეგი უნდა დაიბეჭდოს კონსოლში.

const calculator = {
    minus: function(a , b){
        console.log(a - b);
    },
    plus: function(a , b){
        console.log(a + b);
    },
    divide: function(a , b){
        console.log(a / b);
    },
    mult:function(a , b){
        console.log(a * b);
    }
}
calculator.plus(5, 5)
calculator.minus(5, 5)
calculator.mult(5, 5)
calculator.divide(5, 5)