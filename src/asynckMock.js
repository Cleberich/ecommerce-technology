const products = [
    {"name":"iPhone 14 Pro Max",
    "huella": "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
    "pantalla": "4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp",
    "procesador": "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
    "camera": "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
    "technology":"5G for fast downloads and high-quality streamingfootnote",
    "id": "1",
    "stock": " 9",
    "badge": "NEW",
     "category": "smartphone",
     "price": 990,
     "description": "From $999 or $41/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1663611329492",
    "img2": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14pro-digitalmat-gallery-2-202209?wid=728&hei=666&fmt=png-alpha&.v=1660830896841",
    "img3": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14pro-digitalmat-gallery-4-202209?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1660830896885",
    "img4": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14pro-digitalmat-gallery-3-202209?wid=728&hei=666&fmt=png-alpha&.v=1663346233180",
  },

    {"name":"iPhone 14 Plus",
    "huella": "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
    "pantalla": "4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp",
    "procesador": "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
    "camera": "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
    "technology":"5G for fast downloads and high-quality streamingfootnote",
    "id": "2",
    "stock": "3",
    "badge": "NEW",
     "category": "smartphone",
     "price": 990,
     "description": "From $999 or $41/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958160674"},

    {"name":"iPhone 13 mini",
    "huella": "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
    "pantalla": "4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp",
    "procesador": "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
    "camera": "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
    "technology":"5G for fast downloads and high-quality streamingfootnote",
    "id": "3",
    "price": 990,
     "category": "smartphone",
     "description": "From $999 or $41/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958176452"},

    {"name":"iPhone SE",
    "huella": "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
    "pantalla": "4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp",
    "procesador": "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
    "camera": "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
    "technology":"5G for fast downloads and high-quality streamingfootnote",
    "id": "4",
    "price": 990,
     "category": "smartphone",
     "description": "From $999 or $41/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646415838921"},

   {"name":"MacBook Air with M1 chip",
   "huella": "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
   "pantalla": "4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp",
   "procesador": "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
   "camera": "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
   "technology":"5G for fast downloads and high-quality streamingfootnote",
   "id": "5",
   "price": 990,
   "badge": "BEST SELLER",
     "category": "macbook",
     "description": "From $999 or $41/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726242000"},
    
    {"name":"MacBook Air with M2 chip",
    "huella": "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
    "pantalla": "4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp",
    "procesador": "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
    "camera": "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
    "technology":"",
    "price": 990,
    "category": "macbook",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1653499620093"},
    
    {"name":"MacBook Pro 13”",
    "huella": "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
    "pantalla": "4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp",
    "procesador": "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
    "camera": "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
    "technology":"5G for fast downloads and high-quality streamingfootnote",
    "id": "7",
    "price": 990,
    "stock": " ",
      "category": "macbook",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1653499620093"},
    
    {"name":"MacBook Pro 14” and 16”",
    "huella": "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
    "pantalla": "4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp",
    "procesador": "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
    "camera": "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
    "technology": "5G for fast downloads and high-quality streamingfootnotes",
    "id": "8",
    "stock": 8,
    "badge": "",
    "price": 990,
      "category": "macbook",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-16-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1653498040386"},
    
    {"name":"Apple Watch Ultra",
    "huella": "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
    "pantalla": "4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp",
    "procesador": "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
    "camera": "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
    "technology":"5G for fast downloads and high-quality streamingfootnote",
    "id": "9",
    "stock": 12,
    "price": 990,
    "badge": "READY FOR ADVENTURE",
     "category": "watch",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra-202209?wid=340&hei=264&fmt=png-alpha&.v=1664212622022"},
    
    {"name":"Apple Watch Serie 8",
    "huella": "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
    "pantalla": "4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp",
    "procesador": "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
    "camera": "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
    "id": "10",
    "price": 990,
     "category": "watch",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s8-202209?wid=340&hei=264&fmt=jpeg&qlt=95&.v=1661647167115"},
    
    {"name":"Apple Watch SE",
    "huella": "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
    "pantalla": "4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp",
    "procesador": "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
    "camera": "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
    "technology":"5G for fast downloads and high-quality streamingfootnote",
    "id": "11",
    "stock": 1,
    "price": 990,
    "badge": "APABLE AND AFFORDABLE",
     "category": "watch",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202209_GEO_US?wid=340&hei=264&fmt=png-alpha&.v=1661812058124"},
    
    {"name":"Apple Watch Hermès",
    "huella": "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
    "pantalla": "4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp",
    "procesador": "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
    "camera": "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
    "technology":"5G for fast downloads and high-quality streamingfootnote",
    "id": "12",
    "stock": 1,
    "price": 990,
    "badge": "FASHION FORWARD",
     "category": "watch",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-hermes-202209?wid=340&hei=264&fmt=jpeg&qlt=95&.v=1660616726938"}
]

// export const getProduct = () =>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(products)
//         },1000)
//     })
// }

export const getProducts = (categoryId) =>{
  return new Promise ((resolve, reject) =>{
      setTimeout(() =>{
          resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
          
      },1000)
  })
}
export const getProduct = (id) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === id))
      }, 1000)
  })
}
