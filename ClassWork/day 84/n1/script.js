document.getElementById('mydiv');
let move = 0;

function animate() {
    const right = setInterval(function(){
    mydiv.style.left = move + 'px';
    move += 10;    
    if(move >=500){
        clearInterval(right);
    }
    },100)

}
animate();