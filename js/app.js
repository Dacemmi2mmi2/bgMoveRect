const htmlElements = {
    blockAnimation : document.querySelector('.animationRect'),
}


for (let i = 0; i <= 99; i++)
{
    let blockRect = document.createElement('div');
    blockRect.classList.add('blockRect');
    htmlElements.blockAnimation.appendChild(blockRect);
    blockRect.style.left = Math.floor(Math.random() * (100 - (-10))) + (-10) + '%';
    blockRect.style.top = Math.floor(Math.random() * (100 - (-10))) + (-10) + '%';
    blockRect.style.transform = `scale(${Math.floor(Math.random() * (5 -2)) + 2})`;
}


const posRect = function positionBlockRect()
{
    setInterval(() => {
        let allBlocksRect = document.querySelectorAll('.blockRect');
        allBlocksRect.forEach(item => {
            item.style.left = Math.floor(Math.random() * (100 - (-10))) + (-10) + '%';
            item.style.top = Math.floor(Math.random() * (100 - (-10))) + (-10) + '%';
            item.style.transform = `scale(${Math.floor(Math.random() * (4 -2)) + 2})`;
        });
    }, 4000);
}
posRect();