document.addEventListener('DOMContentLoaded', function() {
  const imagePaths = [];
  const imageNames = Array.from({ length: 139 }, (v, i) => `${i + 1}/139`);
  const imageDescriptions = Array.from({ length: 139 }, (v, i) => `Description ${i + 1}`);

  for(let i = 1; i <= 139; i++) {
      imagePaths.push(`Photos/${i}.png`);
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
      nameDiv.textContent = imageNames[index]; // Use dynamic name

      const desDiv = document.createElement('div');
      desDiv.className = 'des';
      desDiv.textContent = imageDescriptions[index]; // Use dynamic description

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