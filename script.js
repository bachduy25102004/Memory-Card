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

grid.forEach((row, rowID) => {
    row.forEach((card, cardID) => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = 'card.png';
        // img.style.width = '100px';
        div.append(img);
        div.className = 'card-container';
        // div.id
        //  = (rowID + 1)*(cardID + 1);
        div.id = `${rowID} - ${cardID}`;
        gridContainer.appendChild(div);
    })
});




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
// let firstClick ;
let twoCardsClick = false;
let clicked = [];

for (let i = 0; i < cardsArray.length; i++) {
    
    cardsArray[i].addEventListener('click', () => {
            // console.log(card);
            // console.log(index);
        const img = cardsArray[i].children[0];
        cardsArray[i].classList.add('rotate')
        if (clicked.length !== 2) {
            img.src = grid[Math.floor(i/4)][i%4];
        }
        
        if (clicked.length === 0) {
            // clicked++;
            clicked.push(cardsArray[i]); 
            console.log(clicked[0]);
            
            // return;
        };

        if (clicked.length === 1) {
            if (cardsArray[i].id !== clicked[0].id) {
                clicked.push(cardsArray[i]);
                console.log(clicked[1]);
                
            };
        };
       
        // console.log(clicked);
        // console.log('click on ' +  i);
        
        
        
       

        // if (clicked === 1) {
        //     if (firstClick.id != cardsArray[i].id) {
        //         clicked++;
        //     }
        // }
        // firstClick.disabled = true;
            
        if (clicked.length === 2) {
            twoCardsClick = true;
            // clicked = [];
        };
        // const firstImg = firstClick.children[0];
        // console.log(twoCardsClick);

        console.log("selected cards:", clicked);
        

        if (twoCardsClick) {
            // console.log('1 : ' + clicked[0].);
            // console.log('2 : ' + clicked[1].src);

            if (clicked[0].children[0].src !== clicked[1].children[0].src) {
                console.log('not the same');

                // console.log(clicked[0].children[0].src);
                // console.log(clicked[1].children[0].src);

                // clicked[0].children[0].src = 'card.png'

                
                
                setTimeout(() => {
                    
                    clicked[0].children[0].src = 'card.png';
                    clicked[1].children[0].src = 'card.png';
                    twoCardsClick = false;
                    clicked = [];
                    // twoCardsClick = false;

                }, 1000);
            } else {
                twoCardsClick = false;
                    clicked = [];
            }
            
            
        };
    });
    
}
// console.log(grid);
