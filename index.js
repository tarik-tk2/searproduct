

const products = [
  {
    id: 001,
    name: "ca creative lipstick",
    img: "images/creativelipstick.jpg",
    price: 34,
  },
  {
    id: 002,
    name: "Dan Shoes",
    img: "images/danShoes.jpg",
    price: 50,
  },
  {
    id: 003,
    name: "Dan Shoes",
    img: "images/giorgioSunglass.jpg",
    price: 28,
  },
  {
    id: 004,
    name: "Irene Shoes",
    img: "images/irene-shoes.jpg",
    price: 29,
  },
  {
    id: 005,
    name: "Jakob Bag",
    img: "images/jakob-Bag.jpg",
    price: 54,
  },
  {
    id: 006,
    name: "Kiran CK Sunglass Bag",
    img: "images/kiran-sunglass.jpg",
    price: 35,
  },
  {
    id: 007,
    name: "Nimble Shirt ",
    img: "images/nimbleShirt.jpg",
    price: 30,
  },
  {
    id: 0010,
    name: "Nimble Long Shirt",
    img: "images/nimbleLOng.jpg",
    price: 90,
  },
  {
    id: 0020,
    name: "Sun Bag",
    img: "images/sunBag.jpg",
    price: 56,
  },
];
// const demoProduct = document. getElementById("products");

// const generateProduct = () => {
//   return (demoProduct.innerHTML = products.map(product => {
//     return `
//     <section id="product-section">
//       <div id="product-image">
//         <img src=${product.img} alt="" srcset="">
//       </div>
//       <div id="details">
//         <h3>${product.name.toLocaleUpperCase()}</h3>
//         <p>price $ <span>${product.price}</span></p>
//       </div>
//      </section>
//     `;
//   }).join(""))

// }
// generateProduct()
// function search() {
//   const getInput = document.getElementById("input-id").value.toUpperCase();
//   const products = document.getElementById("products");
//   const productSeection = document.querySelectorAll("#product-section");
//   const name = document.getElementsByTagName("h3")
//   for (let i = 0; i < name.length; i++) {
//     let items = productSeection[i].getElementsByTagName("h3")[0];
//     let value = items.innerHTML || items.innerText
//     if (value.toUpperCase().indexOf(getInput) > -1) {
//       productSeection[i].style.display = "";
//     } else {
//       productSeection[i].style.display = "none";
//     }
//   }
// }
const productsId = document.getElementById("products")
const generateProduct = () => {
  return productsId.innerHTML = products.map(product => {
    return `
    <section id="product-section">
       <div id="product-image">
         <img src=${product.img} alt="" srcset="">
       </div>
       <div id="details">
         <h3>${product.name.toLocaleUpperCase()}</h3>
         <p>price $ <span>${product.price}</span></p>
       </div>
      </section>`;
  }).join("")
}
generateProduct();
document.getElementById("input-id").addEventListener("keyup", () => {
  const getInput = document.getElementById("input-id").value.toUpperCase();
  const getProduct = document.getElementById("products");
  const getAllProducts = document.querySelectorAll("#product-section");
  const getH3 = document.getElementsByTagName('h3')
  for (let i = 0; i < getH3.length; i++) { 
    let getName = getAllProducts[i].getElementsByTagName('h3')[0]
    
    let getValue = getName.innerHTML || getName.innerText
    
    if (getValue.toUpperCase().indexOf(getInput) > -1) { 
        getAllProducts[i].style.display=''
    } 
    else {
      getAllProducts[i].style.display='none'
    }
  }
})
