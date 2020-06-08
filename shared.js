var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

console.dir(backdrop);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display='block';
        // backdrop.style.display='block';
        // modal.className = 'open';
    modal.classList.add('open');
    backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', function () {
// mobileNav.style.display = 'none';
mobileNav.classList.remove('open');
    closeModal();

});

if (modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal () {
    // modal.style.display='none';
    // backdrop.style.display='none';
    if (modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
// mobileNav.style.display = 'block';
// backdrop.style.display = 'block';
mobileNav.classList.add('open')
backdrop.classList.add('open')
})