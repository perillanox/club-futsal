// Efecto de resaltar los enlaces del menú al pasar el cursor
const menuItems = document.querySelectorAll('nav a');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = '#80ff80'; // Cambia a verde claro
    });

    item.addEventListener('mouseleave', () => {
        item.style.color = 'white'; // Vuelve al blanco
    });
});
