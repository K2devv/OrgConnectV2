// guestLock.js
document.addEventListener('DOMContentLoaded', () => {
    const userRole = localStorage.getItem('userRole'); // Retrieve user role
    const restrictedPages = ['officers.html', 'committee.html', 'handledevents.html', 'announcements.html'];
  
    // Check if user is a guest and on a restricted page
    if (userRole === 'guest') {
      const currentPage = window.location.pathname.split('/').pop();
      if (restrictedPages.includes(currentPage)) {
        // Display guest lock overlay
        document.getElementById('lock-overlay').style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      }
    }
  });

  
  function redirectToLogin() {
    localStorage.setItem('userRole', 'user'); // Optionally reset the role
    window.location.href = 'login.html'; // Redirect to login page
  }

  
  // Logout button functionality
document.querySelector('.logout-icon').addEventListener('click', () => {
    localStorage.removeItem('userRole'); // Clear role
    window.location.href = 'landingpage.html'; // Redirect to landing page
  });

  