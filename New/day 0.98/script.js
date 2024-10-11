//დავალება: შექმენი გენერატორი, რომელიც დააგენერირებს უწყვეტ რიცხვებს 0 დან უსადრულობამდე.

let ultNumbers = (()=>{
    let example = 0;
    while(true){
        example++
        // console.log(example)
    }
});
//ultNumbers()


//ფუნქცია, რომელიც დააგენერირებს ლუწ რიცხვებს
//დავალება: შექმენი გენერატორი, რომელიც დააგენერირებს მხოლოდ ლუწ რიცხვებს.

let evenNumbers = (()=>{
    let example = 0;
    while(example%2 == 0){
        example+2
        // console.log(example)
    }
});
// evenNumbers();


//ფუნქცია, რომელიც დააგენერირებს შემთხვევით რიცხვებს
//დავალება: შექმენი გენერატორი, რომელიც ყოველ ჯერზე დააგენერირებს შემთხვევით რიცხვს Math.random() ის გამოენებთ

let randomNumber = (()=>{
    let example = 0;
    example = Math.random()
    console.log(example)
});
randomNumber();



//ფუნქცია, რომელიც დაბეჭდავს სიტყვებს თითო ასო-ასო
//დავალება: შექმენი გენერატორი, რომელიც მიიღებს სიტყვას როგორც პარამეტრი და ყოველ ჯერზე დააბრუნებს თითო ასოს სიტყვიდან.

let wordLetter = (gela) => {
    for (let i = 0; i < gela.length; i++) {
        console.log(gela[i]);
    }
};
wordLetter("mamulaidze");


// შექმენი გენერატორი, რომელშიც იქნება array სადაც იქნება 0 დან 9 მდე ციფები და Math.random()
// ით ყოველ ჯერზე 8  random ციფრი დაბეჭდეთ

let randomGenerator = (()=>{
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let randomNumbers = '';

    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * numbers.length);
        randomNumbers += numbers[randomIndex];
    }

    console.log(randomNumbers);
});
randomGenerator();



