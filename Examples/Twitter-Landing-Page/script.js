document.addEventListener('DOMContentLoaded', () => {
    const createAccountBtn = document.getElementById('createAccountBtn');
    const signInBtn = document.getElementById('signInBtn');
    const createAccountModal = document.getElementById('createAccountModal');
    const signInModal = document.getElementById('signInModal');
    const closeBtns = document.querySelectorAll('.close');

    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    createAccountBtn.addEventListener('click', () => openModal(createAccountModal));
    signInBtn.addEventListener('click', () => openModal(signInModal));

    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal);
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
});
