const htmlElements = {
    blockAnimation : document.querySelector('.animationRect'),
    textBlockAnimation : document.querySelector('.animationRect p'),
}


const moveRect = function moveRectangles(height, width)
{
    let quantityRects,
        scaleMax,
        scaleMin;

    if (width > 300 || height < 450){
        quantityRects = 8;
        scaleMax = 9;
        scaleMin = 6;
    }
    if (width > 600){
        quantityRects = 39;
        scaleMax = 7;
        scaleMin = 4;
    }
        
    // while (htmlElements.textBlockAnimation.nextElementSibling) {
    //     htmlElements.blockAnimation.removeChild(htmlElements.textBlockAnimation.nextElementSibling);
    // }

    for (let i = 0; i <= quantityRects; i++)
    {
        let blockRect = document.createElement('div');
        blockRect.classList.add('blockRect');
        htmlElements.blockAnimation.appendChild(blockRect);
        blockRect.style.transform = `scale(${Math.floor(Math.random() * (scaleMax - scaleMin)) + scaleMin})`;
    }


    let firstPositionRect = setTimeout(() => {
        document.querySelectorAll('.blockRect').forEach(item => {
            item.style.left = Math.floor(Math.random() * (100 - (-10))) + (-10) + '%';
            item.style.top = Math.floor(Math.random() * (100 - (-10))) + (-10) + '%';
            item.style.boxShadow = `${10}px ${10}px ${50}px rgba(${0}, ${0}, ${0}, ${.4})`;
        });
    }, 1000);


    let posRect = function positionBlockRect()
    {
        setInterval(() => {
            let allBlocksRect = document.querySelectorAll('.blockRect');
                allBlocksRect.forEach(item => {
                item.style.left = Math.floor(Math.random() * (100 - (-10))) + (-10) + '%';
                item.style.top = Math.floor(Math.random() * (100 - (-10))) + (-10) + '%';
            });
        }, 6000);
    }
    posRect();
}


const paramScreen = function parametersScreen()
{
    moveRect(innerHeight, innerWidth);
}
paramScreen();