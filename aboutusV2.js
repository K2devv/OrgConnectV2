document.addEventListener('DOMContentLoaded', () => {
    // Get restricted links
    const restrictedLinks = document.querySelectorAll('.restricted');
    const modal = document.getElementById('restrictionModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    // Show modal when a restricted link is clicked
    restrictedLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent navigation
            modal.style.display = 'flex';
        });
    });

    // Close modal when the close button is clicked
    modalCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// dark mode
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkmode-toggle');

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});
