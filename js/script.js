document.addEventListener('DOMContentLoaded', function() {
    const imagePaths = [];
    const imageNames = Array.from({ length: 139 }, (v, i) => `${i + 1}/139`);

    fetch('descriptions.json')
    .then(response => response.json())
    .then(customDescriptions => {
        for(let i = 1; i <= 139; i++) {
            imagePaths.push(`../Photos/${i}.png`);
        }

        const slideElement = document.getElementById('slide');
        
        imagePaths.forEach((path, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.style.backgroundImage = `url(${path})`;
      
            const contentDiv = document.createElement('div');
            contentDiv.className = 'content';
      
            const nameDiv = document.createElement('div');
            nameDiv.className = 'name';
            nameDiv.textContent = imageNames[index];
      
            const desDiv = document.createElement('div');
            desDiv.className = 'des';
            desDiv.textContent = customDescriptions[index];
      
            const button = document.createElement('button');
            button.textContent = 'See full picture';
            button.onclick = function() { showFullPicture(path) };
      
            contentDiv.appendChild(nameDiv);
            contentDiv.appendChild(desDiv);
            contentDiv.appendChild(button);
            itemDiv.appendChild(contentDiv);
            slideElement.appendChild(itemDiv);
        });

        setUpButtons();
    })
    .catch(error => console.error('Error loading descriptions:', error));
});

function setUpButtons() {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    nextButton.onclick = function() {
        let items = document.querySelectorAll('.item');
        let slideElement = document.getElementById('slide');
        slideElement.appendChild(items[0]);
    };

    prevButton.onclick = function() {
        let items = document.querySelectorAll('.item');
        let slideElement = document.getElementById('slide');
        slideElement.prepend(items[items.length - 1]);
    };
}
  
  function showFullPicture(imagePath) {
    const modal = document.createElement('div');
    modal.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center; z-index: 10000;';
  
    const image = document.createElement('img');
    image.src = imagePath;
    image.style = 'max-height: 100vh; width: auto;'; 
  
    const closeModal = document.createElement('button');
    closeModal.textContent = 'Close';
    closeModal.onclick = function() { modal.remove(); };
    closeModal.style = 'position: absolute; top: 20px; right: 20px;';
  
    modal.appendChild(image);
    modal.appendChild(closeModal);
    document.body.appendChild(modal);
  }
  
  