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
        quantityRects = 8;
        scaleMax = 9;
        scaleMin = 6;
    }
    if (width > 600){
        quantityRects = 49;
        scaleMax = 6;
        scaleMin = 3;
    }
        
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
            });
        }, 5000);
    }
    posRect();
}


const paramScreen = function parametersScreen()
{
    moveRect(innerHeight, innerWidth);
}
paramScreen();