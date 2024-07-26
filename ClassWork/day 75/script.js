let t = new Date()

console.log(t.getDate())
console.log(t.getDay())
console.log(t.getFullYear())
console.log(t.getHours())
console.log(t.getMilliseconds())
console.log(t.getMinutes())
console.log(t.getMonth())
console.log(t.getSeconds())
console.log(t.getTime())
console.log(t.getTimezoneOffset())

let d = new Date();

d.setDate(13)
console.log(d.getDate())
console.log(d.getDate() + 30)

//2
v =setTimeout(function(){
    console.log("5 seconds passed")
},5000)

//3
seconds = 0

f = setInterval(function(){
    if(seconds == 60){
        console.log("1 min passed")
        clearInterval(seconds)
    }
    seconds++
    console.log("seconds passed")
},1000)

//4 

g = setInterval(function(){
    j = new Date()
    console.log(j.getSeconds())
},1000)