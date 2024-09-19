function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    // Reset subsections when navigating to a new section
    const subsections = document.querySelectorAll('.subsection');
    subsections.forEach(subsection =>
