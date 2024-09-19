function showSection(sectionId) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Muestra la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

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
