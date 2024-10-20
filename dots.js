const boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let modal = document.querySelector('modal');
let red = true;


const winningPatterns = [

    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],

    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],
    [1, 8, 15, 22],
    [8, 15, 22, 29],
    [15, 22, 29, 36],
    [2, 9, 16, 23],
    [9, 16, 23, 30],
    [16, 23, 30, 37],
    [3, 10, 17, 24],
    [10, 17, 24, 31],
    [17, 24, 31, 38],
    [4, 11, 18, 25],
    [11, 18, 25, 32],
    [18, 25, 32, 39],
    [5, 12, 19, 26],
    [12, 19, 26, 33],
    [19, 26, 33, 40],
    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41],

    [0, 8, 16, 24],
    [8, 16, 24, 32],
    [16, 24, 32, 40],
    [1, 9, 17, 25],
    [9, 17, 25, 33],
    [17, 25, 33, 41],
    [2, 10, 18, 26],
    [10, 18, 26, 34],
    [3, 11, 19, 27],

    [6, 12, 18, 24],
    [12, 18, 24, 30],
    [18, 24, 30, 36],
    [5, 11, 17, 23],
    [11, 17, 23, 29],
    [17, 23, 29, 35],
    [4, 10, 16, 22],
    [10, 16, 22, 28],
    [3, 9, 15, 21]

]



for (let box of boxes) {
    box.addEventListener('click', () => {
        console.log('clicked');
        box.classList.add('flex');

        if (red) {
            box.innerHTML = `
                <div class="red-circle"></div>
            `;
            red = false;

        } else {
            box.innerHTML = `
                <div class="green-circle"></div>
            `;
            red = true;

        }
        box.disabled = true;

        checkWinner();
        
    });

}

const checkWinner = ()=>{

    for(let pattern of winningPatterns){

        const pos0 = boxes[pattern[0]].innerHTML;
        const pos1 = boxes[pattern[1]].innerHTML;
        const pos2 = boxes[pattern[2]].innerHTML;
        const pos3 = boxes[pattern[3]].innerHTML;

        if(pos0 !=='' && pos1 !=='' && pos2 !=='' && pos3 !==''){
            if(pos0 === pos1 && pos0 === pos2 && pos0===pos3 && pos1===pos2 && pos1===pos3 && pos2===pos3){
                showWinner(pos0);
            }
        }

    }

}

const showWinner = (winner) => {
    console.log(winner);
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const resetGame = () => {
    red = true; 
    enableBoxes();
}


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = ''; 
    }
}

reset.addEventListener('click',resetGame);
