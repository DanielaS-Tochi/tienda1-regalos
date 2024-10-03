// Puedes usar JavaScript para agregar funcionalidades como:
// - Cargar productos desde un archivo JSON
// - Crear un carrito de compras
// - Agregar efectos interactivos

// Ejemplo básico para crear productos dinámicamente:
const productos = [
    {
        nombre: "Ramo de flores",
        descripcion: "Un ramo de flores frescas para mamá",
        precio: 50,
        imagen: "imagen1.jpg"
    },
    // Agrega más productos aquí
];

const contenedorProductos = document.querySelector('.productos');

productos.forEach(producto => {
    const productoElement = document.createElement('div');
    productoElement.classList.add('producto');
    // ... Crear el HTML del producto y agregarlo a productoElement
    contenedorProductos.appendChild(productoElement);
});