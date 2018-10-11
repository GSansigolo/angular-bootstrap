function upload(formData) {
    let files = formData.getAll('uploads');
    let promises = files.map((x) => getImage(x)
        .then(img => ({
            id: img,
            originalName: x.name,
            fileName: x.name,
            url: img
        }))
    );    
    return Promise.all(promises);
    
}

function getImage(file) {
    return new Promise((resolve, reject) => {
        let fReader = new FileReader();
        let img = document.createElement('img');

        fReader.onload = () => {
            img.src = fReader.result;
            resolve(getBase64Image(img));
        }

        fReader.readAsDataURL(file);
    })
}

function getBase64Image(img) {
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    let dataURL = img.src;
    return dataURL;
}

export { upload }