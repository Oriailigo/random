let currentImageIndex = 0;

const images = [
    'certificado1.png',
    'imagen2.jpg',
    'imagen3.jpg',
    // Agrega aquí más nombres de archivos de imágenes según sea necesario
];

function populateGrid() {
    const gridContainer = document.getElementById('imageGrid');

    images.forEach((image, index) => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.innerHTML = `<img src="${image}" alt="Certificado ${index + 1}" onclick="openModal(${index})">`;
        gridContainer.appendChild(gridItem);
    });
}

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function changeImage(offset) {
    currentImageIndex += offset;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
}

document.getElementById('closeModal').addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

populateGrid();

// ... (el código anterior permanece sin cambios)

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
    modal.style.display = 'block';

    // Añadido: Cierre del pop-up al hacer clic fuera de la imagen
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

// ... (el código anterior permanece sin cambios)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    } else if (e.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (e.key === 'ArrowRight') {
        changeImage(1);
    }
});

// ... (el código anterior permanece sin cambios)

// ... (el código anterior permanece sin cambios)

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content');
    const modalImage = document.getElementById('modalImage');
    const prevButton = document.querySelector('.prev');
    
    // Añadido: Mover el botón "Anterior" a la izquierda de la imagen
    modalContent.insertBefore(prevButton, modalImage);

    modalImage.src = images[currentImageIndex];
    modal.style.display = 'block';

    // Añadido: Cierre del pop-up al hacer clic fuera de la imagen
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

// ... (el código anterior permanece sin cambios)

