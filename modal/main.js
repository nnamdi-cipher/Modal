let modalContainer = document.querySelector('.modal-container');
let modalBtn = document.querySelector('.modal-btn');
let closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
})

window.addEventListener('click', function(e) {
    if(e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})
