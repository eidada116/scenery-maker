export default function initializeSelection() {
    const skyItem = document.querySelectorAll('.sky-item');
    const backgroundItem = document.querySelectorAll('.background-item');
    const groundItem = document.querySelectorAll('.ground-item');
    const floraItem = document.querySelectorAll('.flora-item');
    const faunaItem = document.querySelectorAll('.fauna-item');
    
    const images = document.querySelectorAll('.canvas-image');

    document.querySelectorAll('.canvas-image').forEach(image => {
        image.style.display = 'none'; 
        image.style.zIndex = '0';
    });


    function zIndexFix(categoryItems) {
        categoryItems.forEach(item => {
            const selectedId = item.id;
            const selectedImage = document.getElementById(selectedId + '-img');

            
            if (selectedImage) {

                const categoryContainer = selectedImage.parentElement; 
                categoryContainer.querySelectorAll('img').forEach(img => {
                    img.style.display = 'none'; 
                });

                selectedImage.style.display = 'block';
                selectedImage.style.zIndex = '1'; 
            }

        });
    }

    backgroundItem.forEach(item => {
        item.addEventListener('click', (e) => {
            const selectedId = e.target.id;
            const selectedImage = document.getElementById(selectedId + '-img'); 

            zIndexFix(backgroundItem); 

            
            if (selectedImage) {
                const categoryContainer = selectedImage.parentElement; 
                categoryContainer.querySelectorAll('img').forEach(img => {
                    img.style.display = 'none'; 
                });

                selectedImage.style.display = 'block';
                selectedImage.style.zIndex = '1'; 
            }


        });
    });

    skyItem.forEach(item => {
        item.addEventListener('click', (e) => {
            const selectedId = e.target.id;
            const selectedImage = document.getElementById(selectedId + '-img'); 

            zIndexFix(skyItem); 

            if (selectedImage) {
                const categoryContainer = selectedImage.parentElement; 
                categoryContainer.querySelectorAll('img').forEach(img => {
                    img.style.display = 'none'; 
                });

                selectedImage.style.display = 'block';
                selectedImage.style.zIndex = '1'; 
            }

        });
    });

    floraItem.forEach(item => {
        item.addEventListener('click', (e) => {
            const selectedId = e.target.id;
            const selectedImage = document.getElementById(selectedId + '-img'); 

            zIndexFix(floraItem); 

            if (selectedImage) {
                const categoryContainer = selectedImage.parentElement; 
                categoryContainer.querySelectorAll('img').forEach(img => {
                    img.style.display = 'none'; 
                });

                selectedImage.style.display = 'block';
                selectedImage.style.zIndex = '1'; 
            }
        });
    });

    faunaItem.forEach(item => {
        item.addEventListener('click', (e) => {
            const selectedId = e.target.id;
            const selectedImage = document.getElementById(selectedId + '-img'); 

            zIndexFix(faunaItem); 

            if (selectedImage) {
                const categoryContainer = selectedImage.parentElement; 
                categoryContainer.querySelectorAll('img').forEach(img => {
                    img.style.display = 'none'; 
                });

                selectedImage.style.display = 'block';
                selectedImage.style.zIndex = '1'; 
            }
        });
    });
}
