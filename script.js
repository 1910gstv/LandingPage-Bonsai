const submenu = document.querySelectorAll('.questions-item .question-link')
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.questions-item').classList.remove('expand') : null);
    if (this.closest('.questions-item').classList != 'expand');
    this.closest('.questions-item').classList.toggle('expand');
}