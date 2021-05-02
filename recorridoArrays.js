var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

var nombreArticulos = articulos.map(function(articulo){
    retunr articulo.nombre
});

// Genera un nuevo Arrays
var encuentraArticulo = articulo.find(function(articulo){
  return articulo.nombre === "Laptop"
});

// No genera un nuevo Arrays
articulos.forEach((function(articulo){
  console.log(articulo.nombre);
});

// Validacion de verdadero o falso se genera un nuevo Arrays
var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
});
