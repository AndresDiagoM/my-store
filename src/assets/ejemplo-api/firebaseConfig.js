//-------------------------------------------------------------
// AGREGAR PRODUCTOS A FIRESTORE
/*
  pegar esto en el componente de home en constructor, e importar el modelo de categoria
*/
let productos = [
  {
    "id": 5,
    "title": "Intelligent Soft Gloves",
    "price": 319,
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://unsplash.com/es/fotos/una-persona-nadando-en-el-oceano-rodeada-de-peces-4K_x--J2Jbc",
      "https://unsplash.com/es/fotos/una-persona-nadando-en-el-oceano-rodeada-de-peces-4K_x--J2Jbc",
      "https://unsplash.com/es/fotos/una-persona-nadando-en-el-oceano-rodeada-de-peces-4K_x--J2Jbc"
    ]
  },
  {
    "id": 6,
    "title": "Small Concrete Shirt",
    "price": 54,
    "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    "category": {
      "id": 4,
      "name": "Toys",
      "typeImg": "any"
    },
    "images": [
      "https://picsum.photos/640/480?random=1",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 7,
    "title": "Handmade Fresh Hat",
    "price": 71,
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "category": {
      "id": 1,
      "name": "Clothes",
      "typeImg": "people"
    },
    "images": [
      "https://picsum.photos/640/480?random=1",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 8,
    "title": "Practical Metal Cheese",
    "price": 780,
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=2",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 9,
    "title": "Intelligent Plastic Towels",
    "price": 959,
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "category": {
      "id": 5,
      "name": "Others",
      "typeImg": "animals"
    },
    "images": [
      "https://picsum.photos/640/480?random=2",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 10,
    "title": "Sleek Metal Tuna",
    "price": 190,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "category": {
      "id": 4,
      "name": "Toys",
      "typeImg": "any"
    },
    "images": [
      "https://picsum.photos/640/480?random=3",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 11,
    "title": "Unbranded Cotton Ball",
    "price": 727,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=13",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 12,
    "title": "Gorgeous Rubber Sausages",
    "price": 702,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "category": {
      "id": 4,
      "name": "Toys",
      "typeImg": "any"
    },
    "images": [
      "https://picsum.photos/640/480?random=4",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 13,
    "title": "Handmade Soft Bike",
    "price": 160,
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "images": [
      "https://picsum.photos/640/480?random=4",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 14,
    "title": "Intelligent Metal Pizza",
    "price": 68,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=5",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 15,
    "title": "Rustic Wooden Soap",
    "price": 16,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=5",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 16,
    "title": "Gorgeous Frozen Hat",
    "price": 910,
    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    "category": {
      "id": 1,
      "name": "Clothes",
      "typeImg": "people"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 17,
    "title": "Licensed Granite Sausages",
    "price": 33,
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "category": {
      "id": 1,
      "name": "Clothes",
      "typeImg": "people"
    },
    "images": [
      "https://picsum.photos/640/480?random=11",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 18,
    "title": "Sleek Soft Hat",
    "price": 471,
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "category": {
      "id": 4,
      "name": "Toys",
      "typeImg": "any"
    },
    "images": [
      "https://picsum.photos/640/480?random=12",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 19,
    "title": "Intelligent Metal Chair",
    "price": 740,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "images": [
      "https://picsum.photos/640/480?random=1",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 20,
    "title": "Handcrafted Frozen Sausages",
    "price": 793,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "category": {
      "id": 5,
      "name": "Others",
      "typeImg": "animals"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480",
      "https://picsum.photos/640/480"
    ]
  },
  {
    "id": 21,
    "title": "Generic Frozen Hat",
    "price": 25,
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "category": {
      "id": 5,
      "name": "Others",
      "typeImg": "animals"
    },
    "images": [
      "https://picsum.photos/640/480?random=9",
      "https://picsum.photos/640/480?random=9",
      "https://picsum.photos/640/480?random=9"
    ]
  },
  {
    "id": 22,
    "title": "Small Frozen Salad",
    "price": 777,
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 23,
    "title": "Sleek Granite Tuna",
    "price": 416,
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 24,
    "title": "Handmade Soft Pants",
    "price": 244,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 25,
    "title": "Handmade Plastic Gloves",
    "price": 705,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "category": {
      "id": 5,
      "name": "Others",
      "typeImg": "animals"
    },
    "images": [
      "https://picsum.photos/640/480?random=8",
      "https://picsum.photos/640/480?random=8",
      "https://picsum.photos/640/480?random=8"
    ]
  },
  {
    "id": 26,
    "title": "Practical Soft Ball",
    "price": 277,
    "description": "The Football Is Good For Training And Recreational Purposes",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 27,
    "title": "Tasty Cotton Bacon",
    "price": 232,
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "category": {
      "id": 5,
      "name": "Others",
      "typeImg": "animals"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 28,
    "title": "Small Steel Pizza",
    "price": 107,
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "category": {
      "id": 5,
      "name": "Others",
      "typeImg": "animals"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 29,
    "title": "Generic Granite Ball",
    "price": 268,
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 30,
    "title": "Unbranded Cotton Cheese",
    "price": 758,
    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 31,
    "title": "Small Granite Gloves",
    "price": 715,
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "category": {
      "id": 4,
      "name": "Toys",
      "typeImg": "any"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 32,
    "title": "Unbranded Rubber Shirt",
    "price": 613,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "category": {
      "id": 1,
      "name": "Clothes",
      "typeImg": "people"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 33,
    "title": "Fantastic Plastic Sausages",
    "price": 700,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 34,
    "title": "Handcrafted Rubber Cheese",
    "price": 426,
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "category": {
      "id": 5,
      "name": "Others",
      "typeImg": "animals"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 35,
    "title": "Gorgeous Frozen Salad",
    "price": 92,
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 36,
    "title": "Refined Plastic Pants",
    "price": 843,
    "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 37,
    "title": "Awesome Wooden Salad",
    "price": 975,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "category": {
      "id": 5,
      "name": "Others",
      "typeImg": "animals"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 38,
    "title": "Sleek Frozen Towels",
    "price": 608,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 39,
    "title": "Handmade Frozen Soap",
    "price": 675,
    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 40,
    "title": "Practical Plastic Pizza",
    "price": 715,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 41,
    "title": "Incredible Metal Bike",
    "price": 702,
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "category": {
      "id": 4,
      "name": "Toys",
      "typeImg": "any"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 42,
    "title": "Unbranded Cotton Mouse",
    "price": 425,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 43,
    "title": "Incredible Metal Keyboard",
    "price": 26,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 44,
    "title": "Licensed Plastic Pants",
    "price": 919,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "category": {
      "id": 1,
      "name": "Clothes",
      "typeImg": "people"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 45,
    "title": "Ergonomic Plastic Hat",
    "price": 702,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 46,
    "title": "Fantastic Wooden Chips",
    "price": 530,
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 47,
    "title": "Fantastic Rubber Tuna",
    "price": 817,
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 48,
    "title": "Awesome Wooden Keyboard",
    "price": 803,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 49,
    "title": "Small Soft Salad",
    "price": 338,
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "category": {
      "id": 1,
      "name": "Clothes",
      "typeImg": "people"
    },
    "images": [
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "id": 50,
    "title": "Sleek Rubber Tuna",
    "price": 720,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "category": {
      "id": 3,
      "name": "Furniture",
      "typeImg": "arch"
    },
    "images": [
      "https://images.unsplash.com/photo-1556505622-49ea9f8eaf76?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://picsum.photos/640/480?random=10",
      "https://picsum.photos/640/480?random=10"
    ]
  },
  {
    "title": "Piedra Filosofal",
    "description": "Una roca de valor infinito",
    "images": [
      "https://imagenes.catholic.net/imagenes_db/c70b86_18780.jpg"
    ],
    "price": 8,
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "id": 51
  },
  {
    "title": "Piedra Filosofal",
    "description": "Una roca de valor infinito",
    "images": [
      "https://images.unsplash.com/photo-1562162135-9f64f33e623b?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "price": 8,
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "id": 52
  },
  {
    "title": "La piedra Roja",
    "description": "Una roca de valor infinito",
    "images": [
      "https://images.unsplash.com/photo-1522776851755-3914469f0ca2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "price": 8,
    "category": {
      "id": 2,
      "name": "Electronics",
      "typeImg": "tech"
    },
    "id": 53
  }
]
let productos2: Product[] = [];

productos.forEach((producto) => {
  //map each product from var productos to productos2 array
  const category: Category = {
    id: producto.category.id.toString(),
    name: producto.category.name,
  }
  const product: Product = {
    id: producto.id.toString(),
    title: producto.title,
    price: producto.price,
    description: producto.description,
    category: category,
    image: producto.images[0],
    images: producto.images
  }
  productos2.push(product);
});
//console.log('productos2', productos2);

// add every product to the database
productos2.forEach((producto) => {
  this.productsService.createFirestore(producto).then(() => {
    console.log('Producto agregado');
  });
});
