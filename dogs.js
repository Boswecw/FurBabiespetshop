class Product {
  constructor(title, image, price, description) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.description = description;
  }

  renderCard() {
    return `
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm h-100">
          <img src="${this.image}" class="card-img-top p-2" alt="${this.title}">
          <div class="card-body text-center">
            <h5 class="card-title text-primary">${this.title}</h5>
            <p class="card-text small">${this.description}</p>
            <p class="fw-bold text-success">${this.price}</p>
            <button class="btn btn-warning" aria-label="Add ${this.title} to Cart">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  }
}

class Carousel {
  constructor(products, containerId) {
    this.products = products;
    this.container = document.getElementById(containerId);
  }

  render() {
    let carouselHTML = "";

    for (let i = 0; i < this.products.length; i += 3) {
      const activeClass = i === 0 ? "active" : "";
      carouselHTML += `<div class="carousel-item ${activeClass}">
        <div class="row justify-content-center">`;

      for (let j = i; j < i + 3 && j < this.products.length; j++) {
        carouselHTML += this.products[j].renderCard();
      }

      carouselHTML += `</div></div>`;
    }

    this.container.innerHTML = carouselHTML;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const productData = [
    new Product('German-Shepherd', 'assets/german shepherd.png', '$120', 'Gentle and hypoallergenic companion.'),
    new Product('Great-Dane', 'assets/great-dane.png', '$45', 'Fluffy and fun, perfect for kids.'),
    new Product('Labrador', 'assets/lab-puppy.png', '$35', 'Lively and social beginner pet.'),
    new Product('Golden-Retriever', 'assets/GoldenRetriever2.png', '$25', 'Soft, cozy and easy to wash.'),
    new Product('Chihuahua', 'assets/chihuahua.jpg', '$30', 'Wholesome nutrition for furry friends.'),
    new Product('Saint-Bernard', 'assets/saint-bernard.png', '$20', 'Simple and clean litter solution.')
  ];

  const carousel = new Carousel(productData, "carouselContent");
  carousel.render();
});
