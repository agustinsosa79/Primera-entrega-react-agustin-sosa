

const productos = [
    {
        id: "1",
        nombre: "Remera",
        precio: 15.99,
        categoria: "remeras",
        imagen: "https://d2r9epyceweg5n.cloudfront.net/stores/924/816/products/remera_color_mangacorta-negra1-fc804563ba57e392e115530959581060-1024-1024.jpg", 
        stock: 100,
        descripcion: "Una remera suave y cómoda q se ajusta al cuerpo."
    },
    {
        id: "2",
        nombre: "Jean cargo",
        precio: 29.99,
        categoria: "pantalones",
        imagen: "https://kinderkids.com.ar/cdn/shop/products/95915b52-a7f4-4372-b8a3-ef5b9b0c619b_1200x1200.jpg?v=1691422083",
        stock: 50,
        descripcion: "Jean cargo de alta calidad"
    },
    {
        id: "3",
        nombre: "Remera overzise",
        precio: 49.99,
        categoria: "remeras",
        imagen: "https://d22fxaf9t8d39k.cloudfront.net/5dd25598dbee089fc788bad2dd339f9148ea98ccc48823d14f036600e98fcc2f70344.jpeg",
        stock: 30,
        descripcion: "Una remera ancha corte oversize."
    },
    {
        id: "4",
        nombre: "Buzo nirvana",
        precio: 24.99,
        categoria: "buzos",
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/339/064/products/nirvana-in-utero-canguro1-f0ea139965ac37f40616885170712956-480-0.png",
        stock: 75,
        descripcion: "Un buzo cómodo y abrigado de la banda de rock 'Nirvana' con capucha."
    },
    {
        id: "5",
        nombre: "Campera Fremhie",
        precio: 19.99,
        categoria: "camperas",
        imagen: "https://m.media-amazon.com/images/I/71LOn6ahGzS._AC_UL1500_.jpg",
        stock: 40,
        descripcion: "Campera con  dos angeles estampados."
    },
    {
        id: "6",
        nombre: "Jean cargo ",
        precio: 79.99,
        categoria: "pantalones",
        imagen: "https://images-na.ssl-images-amazon.com/images/I/61dQbvkkyML._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg",
        stock: 20,
        descripcion: "Jean corte ancho de color negro."
    },
    {
        id: "7",
        nombre: "Remera top",
        precio: 14.99,
        categoria: "remeras",
        imagen: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-topper-oversize-mujer-marron-800020165045001-1.jpg",
        stock: 60,
        descripcion: "remera corta corte top unisex."
    },
    {
        id: "8",
        nombre: "Buzo corto ",
        precio: 17.99,
        categoria: "buzos",
        imagen: "https://acdn.mitiendanube.com/stores/001/936/837/products/buzo-1b1-c2d56fab44c9848e1e16690890625845-640-0.jpg",
        stock: 35,
        descripcion: "Buzo negro de lana, corto a la cintura."
    },
    {
        id: "9",
        nombre: "Buzo largo",
        precio: 34.99,
        categoria: "buzos",
        imagen: "https://http2.mlstatic.com/D_973382-MLA43784089403_102020-O.jpg",
        stock: 25,
        descripcion: "Buzo blanco largo en las mangas, y hasta debajo de la cintura"
    },
    {
        id: "10",
        nombre: "Gorra deportiva",
        precio: 9.99,
        categoria: "camperas",
        imagen: "https://www.harley-davidson.com.ar/catalogo/images/productos/98114-16VM-small/1.jpg",
        stock: 80,
        descripcion: "Una gorra deportiva para protegerse del sol."
    },
    {
        id: "11",
        nombre: "Buzo dolar",
        precio: 89.99,
        categoria: "buzos",
        imagen: "https://shato.com.ar/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-09-at-11.32.44-1.jpeg",
        stock: 15,
        descripcion: "Un  buzo bien abrigado cálido, estilo oversize."
    },
    {
        id: "12",
        nombre: "Pantalon cargo",
        precio: 7.99,
        categoria: "pantalones",
        imagen: "https://ae01.alicdn.com/kf/Sd1e4839257264613954c5a57095c7320D/Legible-pantalones-de-pierna-ancha-para-hombre-pantal-n-informal-holgado-con-cintura-el-stica-para.jpg",
        stock: 100,
        descripcion: "Pantalon cargo con bolsillos grandes al costado."
    },
    {
        id: "13",
        nombre: "Remera LMA",
        precio: 49.99,
        categoria: "remeras",
        imagen: "https://www.tiendaganga.com/wp-content/uploads/2023/02/remeras-estampados-scaled.webp",
        stock: 30,
        descripcion: "Remera estampada estilo oversize"
    },
    {
        id: "14",
        nombre: "Pantalon corto / cargo",
        precio: 29.99,
        categoria: "pantalones",
        imagen: "https://tequierofashion.com/cdn/shop/files/HTB1ZWyDbROD3KVjSZFFq6An9pXa7_1024x1024.jpg?v=1691608958",
        stock: 45,
        descripcion: "Pantalon cargo de gabardina de color azul, corto con bolzillos al costado. Van hasta por debajo de las rodillas."
    },
    {
        id: "15",
        nombre: "Campera de Jean",
        precio: 39.99,
        categoria: "camperas",
        imagen: "https://d22fxaf9t8d39k.cloudfront.net/b5f29d2f78a52a1d12611b21140965c91cdcc789b9e5ce566078f6e4523431ae19966.jpeg",
        stock: 50,
        descripcion: "Campera de jean con lana por adentro, bien abrigada."
    },
    {
        id: "16",
        nombre: "Campera rompeviento",
        precio: 59.99,
        categoria: "camperas",
        imagen: "https://d22fxaf9t8d39k.cloudfront.net/a31085c208270059362a8e40f69327e8e5ec4c61325d87f5c477486f25bb4d3f87975.jpeg",
        stock: 25,
        descripcion: "Campera vintage de colores."
    },
    {
        id: "17",
        nombre: "Remera oversize",
        precio: 27.99,
        categoria: "remeras",
        imagen: "https://www.tiendaganga.com/wp-content/uploads/2023/02/remeras-con-estampas-scaled.webp",
        stock: 40,
        descripcion: "Remera estilo oversize, con un oso estampado."
    },
    {
        id: "18",
        nombre: "Buzo DUKE",
        precio: 6.99,
        categoria: "buzos",
        imagen: "https://www.tiendaganga.com/wp-content/uploads/2022/10/buzo-mujer-2.webp",
        stock: 70,
        descripcion: "Buzo corto DUKE, excelenta para ambiente no muy calidos ni muy frios."
    },
    {
        id: "19",
        nombre: "Pantalon corto / cargo",
        precio: 16.99,
        categoria: "pantalones",
        imagen: "https://m.media-amazon.com/images/I/71juERJjUFS._AC_UY1000_.jpg",
        stock: 55,
        descripcion: "Pantalon cargo de gabardina de color negro, corto con bolzillos al costado. Van hasta por debajo de las rodillas."
    },
    {
        id: "20",
        nombre: "buzo sweet",
        precio: 19.99,
        categoria: "buzos",
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/887/995/products/15374-negro1-776ff6553b69a8149116219465199113-1024-1024.jpg",
        stock: 90,
        descripcion: "buzo cortito de lana, al cuerpo"
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

    export const getProductsByCategory = (categoryId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const productsInCategory = productos.filter(prod => prod.categoria === categoryId);
                resolve(productsInCategory);
            }, 500);
        });
    }
