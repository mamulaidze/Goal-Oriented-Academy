const myDiv = document.getElementById('my-div');
let len = 10;
let x = 0;
let y = 0;
const limit = 500; // Set the movement limit to 500px

document.addEventListener('keydown', event => {
    if (event.key.startsWith('Arrow')) {
        switch(event.key) {
            case 'ArrowUp':
                if (y - len >= 0) y -= len;
                break;
            case 'ArrowDown':
                if (y + len <= limit) y += len;
                break;
            case 'ArrowLeft':
                if (x - len >= 0) x -= len;
                break;
            case 'ArrowRight':
                if (x + len <= limit) x += len;
                break;
        }

        myDiv.style.border = '4px solid red';
        myDiv.style.borderRadius = '10px';
        myDiv.style.top = `${y}px`;
        myDiv.style.left = `${x}px`;
    }
});
