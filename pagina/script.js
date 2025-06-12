document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('show-password-checkbox');

    if (showPasswordCheckbox && passwordInput) {
        showPasswordCheckbox.addEventListener('change', () => {
            if (showPasswordCheckbox.checked) {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });
    }

    const loginForm = document.querySelector('.login-box form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const usernameEmail = document.getElementById('username-email').value;
            const password = document.getElementById('password').value;

            if (usernameEmail === '' || password === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            console.log('Username/Email:', usernameEmail);
            console.log('Password:', password);

            alert('Formulário enviado (apenas para demonstração).');
        });
    }
});