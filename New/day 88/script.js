const color = document.getElementById('color');
const plus = document.getElementById('plus');

plus.addEventListener('click', (event) => {
    event.preventDefault();

    let newDiv = document.createElement('div');
    newDiv.className = 'txtDiv';
    newDiv.style.backgroundColor = color.value;
    newDiv.style.position = 'absolute';

    newDiv.innerHTML = `
        <div class="del">
            <span class="delete-btn">&#215;</span>
        </div>
        <div class="txt">
            <textarea class="clTxt" placeholder="write text"></textarea>
        </div>
    `;

    document.body.appendChild(newDiv);

    newDiv.querySelector('.delete-btn').addEventListener('click', function() {
        newDiv.remove();
    });

    newDiv.querySelector('.clTxt').addEventListener('mousedown', function(e) {
        e.stopPropagation();
    });

    let isDragging = false;
    let offsetX, offsetY;

    newDiv.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - newDiv.offsetLeft;
        offsetY = e.clientY - newDiv.offsetTop;
        newDiv.style.cursor = 'move';
    });
    console.log(isDragging)
    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            newDiv.style.left = (e.clientX - offsetX) + 'px';
            newDiv.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        newDiv.style.cursor = 'default';
    });
});



//2
const printElements = () => {
    const arr = [1, 2, 3, 4, 5];
    console.log("Array elements:");
    for (const element of arr) {
        console.log(element);
    }

    const obj = { a: 1, b: 2, c: 3 };
    console.log("Object properties:");
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
};

printElements();

