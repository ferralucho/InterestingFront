import loadImage from './load-image-as-callback';

let addImg = (src) => {
    let imgElement = document.createElement('img');
    imgElement.src = img.src;
    document.body.appendChild(imgElement);
};

//callback hell
loadImage('images/cat1.jpg', (error, img1) => {
    if (error) throw error;
    addImg(img1.src);
    loadImageCallbacked('images/cat2.jpg', (error, img2) => {
        if (error) throw error;
        addImg(img2.src);
    })
})