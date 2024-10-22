const galleryDiv = document.getElementById('gallery');
function fetchImages() {
    const Url = 'https://picsum.photos/v2/list?page=1&limit=10';
    fetch(Url)
        .then(response => {
             return response.json()
        })
        .then(data => {
            console.log('Image Data:', data);
            if (data) {
                displayImages(data);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            galleryDiv.textContent = 'Failed to load images';
        });
}

function displayImages(images) {
    galleryDiv.innerHTML = ''; 
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        imgElement.alt = image.author;
        galleryDiv.appendChild(imgElement);
    });
}
fetchImages();

