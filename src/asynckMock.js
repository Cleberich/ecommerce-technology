const products = [
    {"name":"iPhone 14 Pro Max",
    "badge": "NEW",
     "categorie": "smartphone",
     "description": "From $999 or $41/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1663611329492"},

    {"name":"iPhone 14 Plus",
    "badge": "NEW",
     "categorie": "smartphone",
     "description": "From $999 or $41/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958160674"},

    {"name":"iPhone 13 mini",
     "categorie": "smartphone",
     "description": "From $999 or $41/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958176452"},

    {"name":"iPhone SE",
     "categorie": "smartphone",
     "description": "From $999 or $41/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646415838921"},

   {"name":"MacBook Air with M1 chip",
   "badge": "BEST SELLER",
     "categorie": "macbook",
     "description": "From $999 or $41/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726242000"},
    
    {"name":"MacBook Air with M2 chip",
      "categorie": "macbook",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1653499620093"},
    
    {"name":"MacBook Pro 13”",
      "categorie": "macbook",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1653499620093"},
    
    {"name":"MacBook Pro 14” and 16”",
    "badge": "",
      "categorie": "macbook",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-16-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1653498040386"},
    
    {"name":"Apple Watch Ultra",
    "badge": "READY FOR ADVENTURE",
     "categorie": "watch",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra-202209?wid=340&hei=264&fmt=png-alpha&.v=1664212622022"},
    
    {"name":"Apple Watch Serie 8",
     "categorie": "watch",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s8-202209?wid=340&hei=264&fmt=jpeg&qlt=95&.v=1661647167115"},
    
    {"name":"Apple Watch SE",
    "badge": "APABLE AND AFFORDABLE",
     "categorie": "watch",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202209_GEO_US?wid=340&hei=264&fmt=png-alpha&.v=1661812058124"},
    
    {"name":"Apple Watch Hermès",
    "badge": "FASHION FORWARD",
     "categorie": "watch",
     "description": "From $1199 or $99/mo. for 24 mo.",
    "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-hermes-202209?wid=340&hei=264&fmt=jpeg&qlt=95&.v=1660616726938"}
]

export const getProducts = () =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)
        },1000)
    })
}
