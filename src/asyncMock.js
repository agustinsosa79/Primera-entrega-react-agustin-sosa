import imagen from './img/camiseta-de-algodon.png'

const productos = [
    {
        id: "1",
        nombre: "Camiseta de algodón",
        precio: 15.99,
        categoria: "Camisetas",
        imagen: imagen,
        stock: 100,
        descripcion: "Una camiseta de algodón suave y cómoda en varios colores disponibles."
    },
    {
        id: 2,
        nombre: "Pantalones vaqueros",
        precio: 29.99,
        categoria: "Pantalones",
        imagen: "imagen2.jpg",
        stock: 50,
        descripcion: "Jeans de alta calidad en diferentes tallas y estilos."
    },
    {
        id: 3,
        nombre: "Vestido de fiesta",
        precio: 49.99,
        categoria: "Vestidos",
        imagen: "imagen3.jpg",
        stock: 30,
        descripcion: "Un elegante vestido de fiesta para ocasiones especiales."
    },
    {
        id: 4,
        nombre: "Sudadera con capucha",
        precio: 24.99,
        categoria: "Sudaderas",
        imagen: "imagen4.jpg",
        stock: 75,
        descripcion: "Una sudadera cómoda y abrigada con capucha."
    },
    {
        id: 5,
        nombre: "Falda plisada",
        precio: 19.99,
        categoria: "Faldas",
        imagen: "imagen5.jpg",
        stock: 40,
        descripcion: "Una falda plisada con un diseño elegante."
    },
    {
        id: 6,
        nombre: "Chaqueta de cuero",
        precio: 79.99,
        categoria: "Chaquetas",
        imagen: "imagen6.jpg",
        stock: 20,
        descripcion: "Una chaqueta de cuero genuino para un estilo audaz."
    },
    {
        id: 7,
        nombre: "Shorts deportivos",
        precio: 14.99,
        categoria: "Shorts",
        imagen: "imagen7.jpg",
        stock: 60,
        descripcion: "Shorts cómodos ideales para actividades deportivas."
    },
    {
        id: 8,
        nombre: "Blusa floral",
        precio: 17.99,
        categoria: "Blusas",
        imagen: "imagen8.jpg",
        stock: 35,
        descripcion: "Una blusa con un bonito estampado floral."
    },
    {
        id: 9,
        nombre: "Traje de baño",
        precio: 34.99,
        categoria: "Trajes de baño",
        imagen: "imagen9.jpg",
        stock: 25,
        descripcion: "Un traje de baño moderno y cómodo para la playa."
    },
    {
        id: 10,
        nombre: "Gorra deportiva",
        precio: 9.99,
        categoria: "Accesorios",
        imagen: "imagen10.jpg",
        stock: 80,
        descripcion: "Una gorra deportiva para protegerse del sol."
    },
    {
        id: 11,
        nombre: "Abrigo de invierno",
        precio: 89.99,
        categoria: "Abrigos",
        imagen: "imagen11.jpg",
        stock: 15,
        descripcion: "Un abrigo cálido y elegante para el invierno."
    },
    {
        id: 12,
        nombre: "Calcetines de lana",
        precio: 7.99,
        categoria: "Calcetines",
        imagen: "imagen12.jpg",
        stock: 100,
        descripcion: "Calcetines suaves y abrigados para mantener los pies calientes."
    },
    {
        id: 13,
        nombre: "Chaleco acolchado",
        precio: 49.99,
        categoria: "Chalecos",
        imagen: "imagen13.jpg",
        stock: 30,
        descripcion: "Un chaleco acolchado para un estilo casual y cómodo."
    },
    {
        id: 14,
        nombre: "Pijama de franela",
        precio: 29.99,
        categoria: "Pijamas",
        imagen: "imagen14.jpg",
        stock: 45,
        descripcion: "Un pijama de franela suave y cálido para las noches frías."
    },
    {
        id: 15,
        nombre: "Zapatillas deportivas",
        precio: 39.99,
        categoria: "Zapatos",
        imagen: "imagen15.jpg",
        stock: 50,
        descripcion: "Zapatillas cómodas para el deporte y el uso diario."
    },
    {
        id: 16,
        nombre: "Blazer de moda",
        precio: 59.99,
        categoria: "Chaquetas",
        imagen: "imagen16.jpg",
        stock: 25,
        descripcion: "Un blazer elegante para eventos formales."
    },
    {
        id: 17,
        nombre: "Vestido de verano",
        precio: 27.99,
        categoria: "Vestidos",
        imagen: "imagen17.jpg",
        stock: 40,
        descripcion: "Un vestido ligero y fresco para el verano."
    },
    {
        id: 18,
        nombre: "Calcetines deportivos",
        precio: 6.99,
        categoria: "Calcetines",
        imagen: "imagen18.jpg",
        stock: 70,
        descripcion: "Calcetines deportivos ideales para el ejercicio."
    },
    {
        id: 19,
        nombre: "Pantalones cortos de playa",
        precio: 16.99,
        categoria: "Shorts",
        imagen: "imagen19.jpg",
        stock: 55,
        descripcion: "Pantalones cortos perfectos para la playa y la piscina."
    },
    {
        id: 20,
        nombre: "Gafas de sol de moda",
        precio: 19.99,
        categoria: "Accesorios",
        imagen: "",
        stock: 90,
        descripcion: "Gafas de sol modernas para proteger los ojos del sol."
    }
];


    export const getProducts = () => {

        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve(productos)
            }, 500);
        })
    }

    export const getProductsById = (productId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(prod => prod.id === productId))
            }, 500)
        })
    }
