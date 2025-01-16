const img = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];
const gridContainer = document.querySelector('#grid-container');
const grid = [['', '', '', ''], ['', '', '', ''], ['', '', '', '']];
const imgList = [ ...img, ...img ];
console.log(imgList);


// for (let i = 0; i < img.length; i++) {
//     imgList.push(img[i]);
// }

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {        
        randPic = imgList[Math.floor(Math.random()*imgList.length)];
        grid[i][j] = randPic;
        const index = imgList.indexOf(randPic);
        imgList.splice(index, 1);
    }
}

grid.forEach(row => {
    row.forEach(card => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = 'card.png';
        // img.style.width = '100px';
        div.append(img);
        div.className = 'card-container';
        gridContainer.appendChild(div);
    })
});

let twoCardsClick = false;
let clicked = 0;

const cardsArray = document.querySelectorAll('.card-container');

// cardsArray.forEach((card, index) => {
//     card.addEventListener('click', () => {
//         // console.log(card);
//         // console.log(index);
//         const img = card.children[0];
//         img.src = grid[Math.floor(index/4)][index%4];
//         clicked++;
//         console.log(clicked);
        
        
//         if (clicked === 2) {
//             twoCardsClick = !twoCardsClick;
//             clicked = 0;
//         };

//         console.log(twoCardsClick);
//         if (twoCardsClick == true) {
//             setTimeout(() => {
//                 img.src = 'card.png';
//                 twoCardsClick = false;
//             }, 2000);
//         };
//     });
// });
let firstClick ;
for (let i = 0; i < cardsArray.length; i++) {
    cardsArray[i].addEventListener('click', () => {
            // console.log(card);
            // console.log(index);
        const img = cardsArray[i].children[0];
        img.src = grid[Math.floor(i/4)][i%4];
        clicked++;
        console.log(clicked);
        console.log('click on ' +  i);
        
        
        
        if (clicked === 1) {
            firstClick = cardsArray[i];
            console.log(firstClick);
            
        }

            
        if (clicked === 2) {
            twoCardsClick = !twoCardsClick;
            clicked = 0;
        };
        const firstImg = firstClick.children[0];
        console.log(twoCardsClick);
        if (twoCardsClick == true) {
            if (firstImg.src != img.src) {
                setTimeout(() => {
                
                firstImg.src = 'card.png';
                img.src = 'card.png';
                twoCardsClick = false;
                }, 2000);
            }
        };
    });
    
}
// console.log(grid);
