// Select modal and its elements
const restrictionModal = document.getElementById("restrictionModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// Select all restricted sidebar links
const restrictedLinks = document.querySelectorAll(".sidebar .restricted");

// Initially ensure modal is hidden
restrictionModal.classList.remove("show");

// Add click event listener for each restricted link
restrictedLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent navigation to restricted page
    restrictionModal.classList.add("show"); // Show the modal
  });
});

// Close the modal when the close button is clicked
modalCloseBtn.addEventListener("click", () => {
  restrictionModal.classList.remove("show"); // Hide the modal
});

// Close the modal when clicking outside the modal content
restrictionModal.addEventListener("click", (event) => {
  if (event.target === restrictionModal) {
    restrictionModal.classList.remove("show"); // Hide the modal
  }
});




// dark mode
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkmode-toggle');

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});
