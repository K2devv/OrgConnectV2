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