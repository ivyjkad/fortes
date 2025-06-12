document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const cnpjInput = document.getElementById('cnpj');
    const foundationDateInput = document.getElementById('foundation-date');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password'); 
    const confirmPasswordInput = document.getElementById('confirm-password'); 

    if (cnpjInput) {
        cnpjInput.addEventListener('input', (e) => {
            e.target.value = formatCNPJ(e.target.value);
        });
    }

    if (foundationDateInput) {
        foundationDateInput.addEventListener('input', (e) => {
            e.target.value = formatDate(e.target.value);
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = formatPhone(e.target.value);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = emailInput.value;
            const name = nameInput.value;
            const cnpj = cnpjInput.value;
            const foundationDate = foundationDateInput.value;
            const phone = phoneInput.value;
            const password = passwordInput.value; 
            const confirmPassword = confirmPasswordInput.value; 

            if (email === '' || name === '' || cnpj === '' || foundationDate === '' || phone === '' || password === '' || confirmPassword === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            // Validação de senha
            if (password !== confirmPassword) {
                alert('As senhas não coincidem. Por favor, digite novamente.');
                passwordInput.value = '';
                confirmPasswordInput.value = '';
                passwordInput.focus();
                return; 
            }
            console.log('Dados de registro (incluindo senha):', {
                email,
                name,
                cnpj,
                foundationDate,
                phone,
                password 
            });


            alert('Usúario Cadastrado');
            registerForm.reset();
        });
    }
});