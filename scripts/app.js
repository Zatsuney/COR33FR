console.log('Script loaded'); // Vérifiez que le script est bien chargé

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            document.querySelector(target).classList.add('active');
        });
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        // Ouvrir le menu
        menuToggle.addEventListener('click', function () {
            navMenu.classList.add('open');
        });

        // Fermer le menu
        menuClose.addEventListener('click', function () {
            navMenu.classList.remove('open');
        });
    } else {
        console.error('Menu toggle, menu close, or nav menu not found');
    }

    const subMenuToggle = document.querySelector('.sub-menu-toggle');
    const subMenu = document.querySelector('.sub-tabs ul');

    if (subMenuToggle && subMenu) {
        // Gérer l'ouverture et la fermeture du sous-menu
        subMenuToggle.addEventListener('click', function () {
            subMenu.classList.toggle('open'); // Ajoute ou supprime la classe "open"
        });
    } else {
        console.error('Sub-menu toggle or sub-menu not found');
    }
});
