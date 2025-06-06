const shop = [
  {
    title: 'Gerbil',
    image: './assets/GerbilA.png',
    price: '$20',
    description: 'Gerbils are small, friendly rodents, known for their social nature and active digging behavior, making them popular pets.'
  },
  {
    title: 'Golden Retriever Puppy',
    image: './assets/GoldenRetriever.png',
    price: '$1,200',
    description: 'Friendly, loyal, and great with families.'
  },
  {
    title: 'Parrot',
    image: './assets/Parrot.png',
    price: '$4,000',
    description: 'Colorful and talkative, needs lots of love and attention.'
  },
  {
    title: 'Rabbit',
    image: './assets/RabbitA.png',
    price: '$45',
    description: 'Fluffy and fun, perfect for kids.'
  },
  {
    title: 'Guinea Pig',
    image: './assets/GuineaPigsLPicon.png',
    price: '$35',
    description: 'Lively and social beginner pet.'
  },
  {
    title: 'Pet Bed',
    image: './assets/PetBeds.png',
    price: '$65',
    description: 'Soft, cozy and easy to wash.'
  },
  {
    title: 'Pet Food',
    image: './assets/PetFoodLPicon.png',
    price: '$30',
    description: 'Wholesome nutrition for furry friends.'
  },
  {
    title: 'Litter Box',
    image: './assets/literbox.png',
    price: '$45',
    description: 'Simple and clean litter solution.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  // Ensure grid is a Bootstrap row
  grid.classList.add('row', 'g-4');

  shop.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4';

    col.innerHTML = `
      <div class="card h-100 product-card shadow-sm">
        <img src="${product.image}" class="card-img-top p-2" alt="${product.title}">
        <div class="card-body text-center">
          <h5 class="card-title text-primary">${product.title}</h5>
          <p class="card-text small">${product.description}</p>
          <p class="fw-bold text-success">${product.price}</p>
          <button class="btn btn-warning">Add to Cart</button>
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
});

