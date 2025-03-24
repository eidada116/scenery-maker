export default function initializeSelection() {
    const skyItem = document.querySelectorAll('.sky-item');
    const backgroundItem = document.querySelectorAll('.background-item');
    const groundItem = document.querySelectorAll('.ground-item');
    const floraItem = document.querySelectorAll('.flora-item');
    const faunaItem = document.querySelectorAll('.fauna-item');
    
    const images = document.querySelectorAll('.canvas-image');


    //HIDE ALL IMAGES
    images.forEach(image => {
        image.style.display = 'block'; 
        image.style.zIndex = '0'; 
    });

    function resetCategoryZIndex(categoryItems) {
        categoryItems.forEach(item => {
            const selectedId = item.id;
            const selectedImage = document.getElementById(selectedId + '-img');
            if (selectedImage) {
                selectedImage.style.zIndex = '0'; 
            }
        });
    }

    backgroundItem.forEach(item => {
        item.addEventListener('click', (e) => {
            const selectedId = e.target.id;
            const selectedImage = document.getElementById(selectedId + '-img'); 

            resetCategoryZIndex(backgroundItem); 

            if (selectedImage) {
                selectedImage.style.zIndex = '1'; 
            }
        });
    });

    skyItem.forEach(item => {
        item.addEventListener('click', (e) => {
            const selectedId = e.target.id;
            const selectedImage = document.getElementById(selectedId + '-img'); 

            resetCategoryZIndex(skyItem); 

            if (selectedImage) {
                selectedImage.style.zIndex = '1'; 
            }
        });
    });

    groundItem.forEach(item => {
        item.addEventListener('click', (e) => {
            const selectedId = e.target.id;
            const selectedImage = document.getElementById(selectedId + '-img'); 

            resetCategoryZIndex(groundItem); 

            if (selectedImage) {
                selectedImage.style.zIndex = '1'; 
            }
        });
    });

    floraItem.forEach(item => {
        item.addEventListener('click', (e) => {
            const selectedId = e.target.id;
            const selectedImage = document.getElementById(selectedId + '-img'); 

            resetCategoryZIndex(floraItem);

            if (selectedImage) {
                selectedImage.style.zIndex = '0';
            }
        });
    });

    faunaItem.forEach(item => {
        item.addEventListener('click', (e) => {
            const selectedId = e.target.id;
            const selectedImage = document.getElementById(selectedId + '-img'); 

            resetCategoryZIndex(faunaItem); 

            
            if (selectedImage) {
                selectedImage.style.zIndex = '1'; 
            }
        });
    });
}
