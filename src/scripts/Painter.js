export default function initializePainter() {
  const painterBtns = document.querySelectorAll('.painter-button');
  const painterContainer = document.querySelectorAll('.scene-selection');

  painterContainer.forEach(container => {
    container.style.display = 'none';
  });

  document.getElementById('sky').style.display = 'flex';

  painterBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      painterContainer.forEach(container => {
        container.style.display = 'none';
      });

    
      const containerId = e.currentTarget.id.replace('-btn', '');
      const target = document.getElementById(containerId);

      if (target) {
        target.style.display = 'flex';
      }
    });
  });

  
}
