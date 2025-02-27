const container
    = document.querySelector('.js-container');

container.addEventListener('mousemove',
    (event) => {
        if (!document.getElementById('drawCheck')?.checked) {
            return;
        }
        const posX = event.offsetX;
        // console.log('posX: ' + posX);

        const posY = event.offsetY;
        // console. log('posy: ', posy);

        const img = document.createElement('img');
        img.classList.add('img');

        const imgName = document.querySelector('input[name="r"]:checked')?.value

        img.src = `img/${imgName}.png`;
        img.style.left = posX + 'px';
        img.style.top = posY + 'px';
        container.append(img);

        const randomSize = Math.random() * 100;
        const imgSizePx = randomSize + 'px';
        img.style.width = imgSizePx;
        img.style.height = imgSizePx;

        img.addEventListener('animationend', () => {
            img.remove()
        })
    }
)



function createHeart(event) {
    const posX = event.offsetX;
    // console. log( 'posX: posX);
    const posY = event.offsetY;
    // console. log('posy: ', posy);
    let img = document.createElement('img');
    img.classList.add('img');

    img.src = 'img/fire.png';
    img.style.left = posX + 'px';
    img.style.top = posY + 'px';
    container.append(img);

    const randomSize = Math.random() * 100;
    const imgSizePx = randomSize + 'px';
    img.style.width = imgSizePx;
    img.style.height = imgSizePx;

    img.addEventListener('animationend', () => {
        img.remove()
    })
}
