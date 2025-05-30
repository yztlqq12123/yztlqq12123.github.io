// 从images.json加载图片文件名
fetch('images.json')
    .then(response => response.json())
    .then(images => {
        const gallery = document.getElementById('gallery');
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = `images/${image}`;
            imgElement.alt = `图片 ${image}`;
            gallery.appendChild(imgElement);
        });
    })
    .catch(error => {
        console.error('加载图片列表失败:', error);
    });
