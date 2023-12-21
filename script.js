document.addEventListener('DOMContentLoaded', function() {
  const imagePaths = []; // Array of your 139 image paths
  for(let i = 1; i <= 139; i++) {
      imagePaths.push(`Photos/${i}.JPEG`); // Assuming your images are named in a sequential manner
  }

  const slideElement = document.getElementById('slide');
  
  imagePaths.forEach((path) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'item';
      itemDiv.style.backgroundImage = `url(${path})`;

      const contentDiv = document.createElement('div');
      contentDiv.className = 'content';

      const nameDiv = document.createElement('div');
      nameDiv.className = 'name';
      nameDiv.textContent = 'LUNDEV'; // Replace with relevant text or make dynamic

      const desDiv = document.createElement('div');
      desDiv.className = 'des';
      desDiv.textContent = 'Description here'; // Replace with relevant text or make dynamic

      const button = document.createElement('button');
      button.textContent = 'See full picture';

      contentDiv.appendChild(nameDiv);
      contentDiv.appendChild(desDiv);
      contentDiv.appendChild(button);
      itemDiv.appendChild(contentDiv);
      slideElement.appendChild(itemDiv);
  });

  document.getElementById('next').onclick = function() {
      let lists = document.querySelectorAll('.item');
      slideElement.appendChild(lists[0]);
  }

  document.getElementById('prev').onclick = function() {
      let lists = document.querySelectorAll('.item');
      slideElement.prepend(lists[lists.length - 1]);
  }
});
