function toggleNav() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
