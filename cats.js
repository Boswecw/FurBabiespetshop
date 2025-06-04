     document.addEventListener("DOMContentLoaded", () => {
      const shop = [
        { title: 'British Short-Hair', image: 'assets/CatA.png', price: '$120', description: 'Gentle and loveable companion.' },
        { title: 'Kitten', image: 'assets/KittenA.png', price: '$45', description: 'Fluffy and fun, perfect for kids.' },
        { title: 'Himalayan', image: 'assets/Himalayan.jpg', price: '$35', description: 'Lively and social beginner pet.' },
        { title: 'Russian Blue', image: 'assets/Russian-Blue.png', price: '$25', description: 'Beautiful fluffy ball of fun.' },
        { title: 'Siamese', image: 'assets/Siamese.png', price: '$30', description: 'Talkative social and unique companion.' },
        { title: 'Tabby', image: 'assets/Tabby.png', price: '$20', description: 'A friendly loveable cuddly buddy.' }
      ];

      let carouselHTML = "";
      for (let i = 0; i < shop.length; i += 3) {
        const activeClass = i === 0 ? 'active' : '';
        carouselHTML += `<div class="carousel-item ${activeClass}">
          <div class="row justify-content-center">`;

        for (let j = i; j < i + 3 && j < shop.length; j++) {
          const product = shop[j];
          carouselHTML += `
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm h-100">
                <img src="${product.image}" class="card-img-top p-2" alt="${product.title}">
                <div class="card-body text-center">
                  <h5 class="card-title text-primary">${product.title}</h5>
                  <p class="card-text small">${product.description}</p>
                  <p class="fw-bold text-success">${product.price}</p>
                  <button class="btn btn-warning" aria-label="Add ${product.title} to Cart">Add to Cart</button>
                </div>
              </div>
            </div>`;
        }

        carouselHTML += `</div></div>`;
      }

      document.getElementById("carouselContent").innerHTML = carouselHTML;
    });
  