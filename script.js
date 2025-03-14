function showSection(sectionId) {
    document.getElementById("nav-bar").style.display = "none"; // to hide nav
    document.querySelectorAll(".content-section").forEach(section => {
        section.style.display = "none"; // hide all 
    });
    document.getElementById(sectionId).style.display = "block"; // Show selection
}

function resetView() {
    document.querySelectorAll(".content-section").forEach(section => {
        section.style.display = "none"; // Hide sections
    });
    document.getElementById("nav-bar").style.display = "block"; // Show the nav again
}
