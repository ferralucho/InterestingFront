import loadImage from './load-image-promise';

let addImg = (src) => {
    let imgElement = document.createElement('img');
    imgElement.src = img.src;
    document.body.appendChild(imgElement);
};

Promise.all(
    [loadImage('images/cat1.jpg'), loadImage('images/cat2.jpg'), loadImage('images/cat3.jpg')]
).then((images) => {
    images.forEach(img => addImg(img.src));
}).catch((error) => {
    
})