const container = document.getElementById('container');
const child = document.getElementById('child');

let posX = 0;
let posY = 0;
const size = 250;
let direction = 'right';

function move() {
    if (direction === 'right') {
        posX += 5;
        if (posX >= size) {
            posX = size;
            direction = 'down';
        }
    } else if (direction === 'down') {
        posY += 5;
        if (posY >= size) {
            posY = size;
            direction = 'left';
        }
    } else if (direction === 'left') {
        posX -= 5;
        if (posX <= 0) {
            posX = 0;
            direction = 'up';
        }
    } else if (direction === 'up') {
        posY -= 5;
        if (posY <= 0) {
            posY = 0;
            direction = 'right';
        }
    }

    child.style.left = posX + 'px';
    child.style.top = posY + 'px';
}

setInterval(move, 30);
