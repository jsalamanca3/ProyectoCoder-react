const productos = [
    {
      title: "Charmeleon",
      id: 1,
      stock: 10,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      price: 3000,
      category: "fuego",
    },
    {
      title: "Vulpix",
      id: 2,
      stock: 3,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg",
      price: 500,
      category: "fuego"
    },
    {
      title: "Pikachu",
      id: 3,
      stock: 10,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
      price: 1800,
      category: "electrico",
    },
    {
      title: "Arbok",
      id: 4,
      stock: 2,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
      price: 150,
      category: "veneno",
    },
    {
      title: "Haunter",
      id: 5,
      stock: 6,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg",
      price: 700,
      category: "fantasma",
    },
    {
      title: "Gengar",
      id: 6,
      stock: 8,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg",
      price: 700,
      category: "fantasma"
    },
    {
      title: "Vileplume",
      id: 7,
      stock: 3,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",
      price: 1250,
      category: "planta",
    },
    {
      title: "Venonat",
      id: 8,
      stock: 8,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/48.svg",
      price: 1700,
      category: "planta",
    },
    {
      title: "Arcanine",
      id: 9,
      stock: 10,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/59.svg",
      price: 3100,
      category: "fuego",
    },
    {
      title: "Primeape",
      id: 10,
      stock: 4,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/57.svg",
      price: 560,
      category: "lucha",
    },
  ];

  function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const date = new Date().toLocaleDateString;
        resolve(productos, date);
      }, 2000);
    });
  }

  export function getProductData(idURL) {
    return new Promise((resolve, reject) => {
      const productRequested = productos.find(
        (item) => item.id === Number(idURL)
      );
      setTimeout(() => {
        resolve(productRequested);
      }, 2000);
    });
  }

  export function getCategoryData(categoryURL) {
    return new Promise((resolve, reject) => {
      const categoryRequested = productos.filter((item) => {
        return item.category.toLowerCase() === categoryURL.toLowerCase();
      });
      setTimeout(() => {
        resolve(categoryRequested);
      }, 2000);
    });
  }

  export default getData;