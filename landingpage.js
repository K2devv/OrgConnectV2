// landingpage.js
document.querySelector('.btn-secondary').addEventListener('click', () => {
    localStorage.setItem('userRole', 'guest');
    window.location.href = 'listOrgs.html'; // Redirect to main page for guests
  });
  
  document.querySelector('.btn-primary').addEventListener('click', () => {
    localStorage.setItem('userRole', 'user');
    window.location.href = 'loginpageV2.html'; // Redirect to login
  });
  
  document.querySelector('.btn-tertiary').addEventListener('click', () => {
    localStorage.setItem('userRole', 'orgAdmin');
    window.location.href = 'adminLogin.html'; // Redirect to admin login
  });
  

  