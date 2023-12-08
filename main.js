function showMenu () {
    const btn = document.querySelector('.header__btn');
    const list = document.querySelector('.menu');
    console.log(btn);

    btn.addEventListener('click', function(){
        list.classList.toggle('active');
    });
}
showMenu();