document.addEventListener('DOMContentLoaded', function() {
  // Get the container where login buttons are displayed
  const authStatus = document.getElementById('authStatus');
  
  // Check if the user is logged in (stored in localStorage)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const isAdmin = localStorage.getItem('role') === 'admin';
  
  // Update the button display based on the login state
  if (isLoggedIn) {
      // If the user is logged in, show a welcome message and logout button
      const username = localStorage.getItem('username');
      authStatus.innerHTML = `
          <p>Welcome, ${username}!</p>
          <button class="btn-primary" onclick="logout()">Log Out</button>
      `;
  } else {
      // If not logged in, show login and guest options
      authStatus.innerHTML = `
          <a href="#" class="btn-primary" onclick="login()">Log In</a>
          <a href="#" class="btn-secondary" onclick="loginAsGuest()">Log In as Guest</a>
          <a href="#" class="btn-tertiary" onclick="loginAsAdmin()">Log in as Org Admin</a>
      `;
  }
});

// Function to simulate login as regular user
function login() {
  const username = prompt("Enter your username:");
  if (username) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('role', 'user');
      window.location.reload();  // Refresh the page to update UI
  }
}

// Function to simulate login as a guest and redirect
function loginAsGuest() {
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('role', 'guest');
  localStorage.setItem('username', 'Guest');
  
  // Redirect to the guest dashboard (or any page you want)
  window.location.href = 'aboutusV2.html'; // Change to the desired page
}

// Function to simulate login as organization admin
function loginAsAdmin() {
  const username = prompt("Enter admin username:");
  if (username) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('role', 'admin');
      window.location.reload();  // Refresh the page to update UI
  }
}

// Function to log out the user
function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  localStorage.removeItem('role');
  window.location.reload();  // Refresh the page to update UI
}
