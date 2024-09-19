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

function showPlayers(team) {
    // Aquí podrías agregar la lógica para mostrar la plantilla del equipo seleccionado
    alert("Mostrar plantilla del " + team);
}
