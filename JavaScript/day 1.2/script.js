function submitFunc() {
    const name = document.getElementById("userName").value;
    const surname = document.getElementById("lastName").value;
    const username = document.getElementById("nickname").value;
    const password = document.getElementById("password").value;

    document.getElementById("h1").textContent = "Hello " + name+"!";

    const profile = {
        name: name,
        surname: surname,
        username: username,
        password: password
    }
    console.log(profile)
}
function confrimFunc(){
    let conf =confirm("are you sure?")
    if (conf){
        console.log("man is sure")
    }
    else{
        console.log("man is not sure")
    }
}
confrimFunc()