  document.addEventListener("DOMContentLoaded", () => {
      const shop = [
        { title: 'German-Shepherd', image: 'assets/german shepherd.png', price: '$120', description: 'Gentle and hypoallergenic companion.' },
        { title: 'Great-Dane', image: 'assets/great-dane.png', price: '$45', description: 'Fluffy and fun, perfect for kids.' },
        { title: 'Labrador', image: 'assets/lab-puppy.png', price: '$35', description: 'Lively and social beginner pet.' },
        { title: 'Golden-Retriever', image: 'assets/GoldenRetriever2.png', price: '$25', description: 'Soft, cozy and easy to wash.' },
        { title: 'Chihuahua', image: 'assets/chihuahua.jpg', price: '$30', description: 'Wholesome nutrition for furry friends.' },
        { title: 'Saint-Bernard', image: 'assets/saint-bernard.png', price: '$20', description: 'Simple and clean litter solution.' }
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