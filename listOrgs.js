document.addEventListener('DOMContentLoaded', function() {
    const notifBtn = document.getElementById('notif-btn');
    const notifPopup = document.getElementById('notif-popup');

    notifBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        notifPopup.classList.toggle('show');
        notifBtn.classList.toggle('clicked');
    });

    document.addEventListener('click', function(e) {
        if (!notifPopup.contains(e.target) && !notifBtn.contains(e.target)) {
            notifPopup.classList.remove('show');
            notifBtn.classList.remove('clicked');
        }
    });

    notifPopup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Add search functionality
const searchInput = document.querySelector('.search-container input');
const cards = document.querySelectorAll('.card-container');

searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('.title').textContent.toLowerCase();
        const description = card.querySelector('.description').textContent.toLowerCase();

        // Check if the search term matches either title or description
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    let hasResults = false;

    cards.forEach(card => {
        const title = card.querySelector('.title').textContent.toLowerCase();
        const description = card.querySelector('.description').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
            hasResults = true;
        } else {
            card.style.display = 'none';
        }
    });

    // Show/hide no results message
    let noResultsMsg = document.querySelector('.no-results-message');
    if (!hasResults && searchTerm !== '') {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results-message';
            noResultsMsg.style.textAlign = 'center';
            noResultsMsg.style.marginTop = '20px';
            noResultsMsg.style.color = '#666';
            document.querySelector('.flex-container').appendChild(noResultsMsg);
        }
        noResultsMsg.textContent = 'No organizations found matching your search.';
        noResultsMsg.style.display = 'block';
    } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
});