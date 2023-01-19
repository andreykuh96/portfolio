const burger = document.querySelector('.header__burger'),
      menu = document.querySelector('.menu');
      menuItems = document.querySelector('.menu__items');
      transparentWindow = document.querySelector('.menu__transparent-window'),
      menuLink = document.querySelectorAll('.menu__item a'),
      menuCloseBtn = document.querySelector('.menu__close');

function closeMenu() {
    menu.classList.remove('menu_active');
    document.body.style.overflow = "";
}

function openMenu() {
    menu.classList.add('menu_active');
    document.body.style.overflow = "hidden";
}

burger.addEventListener('click', () => {
    openMenu();
})

menuCloseBtn.addEventListener('click', () => {
    closeMenu();
})

menu.addEventListener('click', (e) => {
    if (e.target === transparentWindow) {
        closeMenu();
    }

    menuLink.forEach(item => {
        if (e.target === item) {
            closeMenu();
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && menu.classList.contains('menu_active')) { 
        closeMenu();
    }
});