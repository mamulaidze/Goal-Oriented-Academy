                              // 1
for(let i = 1; i<=10; i++){
    if (i % 2==0){
        console.log("ეს ციფრი ლუწია: "+i)
    } else{
        console.log("ეს ციფრი კენტია: " +i)
    }
}
                             //    2
let realPass = "mamuuu";
let pass = false;
while (pass != true){
    let userInp = prompt("Enter password: ");
    if (userInp == realPass){
        console.log("well buhehe");
        pass = true;
    } 
    
    else{
        console.log("try again")
    }
}