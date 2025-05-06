const products = [
    { title: "Laptop Pro", price: 74999, image: "laptop.jpg", tag: "New" },
    { title: "Smartphone X", price: 79999, image: "smartphone.jpg", tag: "Hot" },
    { title: "Wireless Earbuds", price: 1999, image: "earbuds.jpg", tag: "Sale" },
    { title: "Smartwatch", price: 5999, image: "smartwatch.jpg", tag: "New" },
    { title: "HD Camera", price: 24999, image: "camera.jpg", tag: "Featured" },
    { title: "Gaming Mouse", price: 1299, image: "gaming mouse.jpg", tag: "Hot" },
    { title: "Mechanical Keyboard", price: 2599, image: "mech keyboard.jpg", tag: "New" },
    { title: "4K Monitor", price: 21999, image: "monitor.jpg", tag: "Sale" },
    { title: "Tablet Pro", price: 28999, image: "tablet.jpg", tag: "Trending" },
    { title: "USB Charger", price: 499, image: "usb charger.jpg", tag: "Hot" },
    { title: "Bluetooth Speaker", price: 1799, image: "bt speaker.jpg", tag: "Sale" },
    { title: "Action Camera", price: 18999, image: "act camers.jpg", tag: "Featured" },
    { title: "Tech Book", price: 399, image: "techbook.jpg", tag: "New" },
    { title: "LED Strip Light", price: 999, image: "led.jpg", tag: "Cool" },
    { title: "VR Headset", price: 14999, image: "vr headset.jpg", tag: "Hot" },
  ];
  
  const container = document.getElementById('product-container');
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
  
    card.innerHTML = `
      <div class="badge">${product.tag}</div>
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>₹${product.price}</p>
      <button class="add-to-cart" onclick="addToCart('${product.title}')">Add to Cart</button>
    `;
  
    container.appendChild(card);
  });
  
  function addToCart(title) {
    alert(`"${title}" added to cart!`);
  }
  