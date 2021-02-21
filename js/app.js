const htmlElements = {
    blockAnimation : document.querySelector('.animationRect'),
    textBlockAnimation : document.querySelector('.animationRect p'),
}


const moveRect = function moveRectangles(height, width)
{
    let quantityRects,
        scaleMax,
        scaleMin;

    if (width > 300){
        quantityRects = 24;
        scaleMax = 6;
        scaleMin = 3;
    }
    if (width > 600){
        quantityRects = 99;
        scaleMax = 4;
        scaleMin = 2;
    }    
console.log(quantityRects);
    while (htmlElements.textBlockAnimation.nextElementSibling) {
        htmlElements.blockAnimation.removeChild(htmlElements.textBlockAnimation.nextElementSibling);
    }

    for (let i = 0; i <= quantityRects; i++)
    {
        let blockRect = document.createElement('div');
        blockRect.classList.add('blockRect');
        htmlElements.blockAnimation.appendChild(blockRect);
        blockRect.style.left = Math.floor(Math.random() * (100 - (-10))) + (-10) + '%';
        blockRect.style.top = Math.floor(Math.random() * (100 - (-10))) + (-10) + '%';
        blockRect.style.transform = `scale(${Math.floor(Math.random() * (scaleMax - scaleMin)) + scaleMin})`;
    }


    let posRect = function positionBlockRect()
    {
        setInterval(() => {
            let allBlocksRect = document.querySelectorAll('.blockRect');
                allBlocksRect.forEach(item => {
                item.style.left = Math.floor(Math.random() * (100 - (-10))) + (-10) + '%';
                item.style.top = Math.floor(Math.random() * (100 - (-10))) + (-10) + '%';
                item.style.transform = `scale(${Math.floor(Math.random() * (scaleMax - scaleMin)) + scaleMin})`;
            });
        }, 4000);
    }
    posRect();
}


const paramScreen = function parametersScreen()
{
    moveRect(innerHeight, innerWidth);
}
paramScreen();


window.addEventListener('resize', () => {
    paramScreen();
});
