//CARROSSEL
document.addEventListener('DOMContentLoaded', () => {
    const carrosselTrack = document.querySelector('.carrossel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carrosselItems = document.querySelectorAll('.carrossel-item');

    if (!carrosselTrack || !prevBtn || !nextBtn || carrosselItems.length === 0) {
        console.error("ERRO: Um ou mais elementos do carrossel não foram encontrados. Verifique os seletores CSS e o HTML.");
        return; 
    }

    let currentIndex = 0;
    const itemsPerView = 1; 

    function updateCarousel() {
        if (carrosselItems.length === 0) {
            console.warn("Erro no carrossel, corrigir!!");
            return;
        }
        
        const itemStyle = getComputedStyle(carrosselItems[0]);
        const marginLeft = parseFloat(itemStyle.marginLeft) || 0;
        const marginRight = parseFloat(itemStyle.marginRight) || 0; 


        const itemWidth = carrosselItems[0].offsetWidth + marginLeft + marginRight;

        carrosselTrack.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        console.log('Transform aplicado:', `translateX(${-currentIndex * itemWidth}px)`);
    }

    prevBtn.addEventListener('click', () => {
        console.log('Botão Anterior clicado!');
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        } else {
            console.log('Já no primeiro item. Não é possível retroceder.');
        }
    });

    nextBtn.addEventListener('click', () => {
        console.log('Botão Próximo clicado!');

        if (currentIndex < carrosselItems.length - itemsPerView) {
            currentIndex++;
            updateCarousel();
        } else {
            console.log('Já no último conjunto de itens visíveis. Não é possível avançar.');
        }
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel(); 
});

//BOTOES DO CALENDARIO (CANCELAR)
document.addEventListener('DOMContentLoaded', () => {
    const cancelButtons = document.querySelectorAll('.cancel-event-btn');

    cancelButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const confirmCancel = confirm('Tem certeza que deseja cancelar este evento?');
            if (!confirmCancel) {
                e.preventDefault(); // Impede qualquer ação futura, se houver
            } else {
                // Aqui você pode adicionar a lógica para remover o evento ou enviar ao servidor
                alert('Evento cancelado com sucesso!');
                button.closest('.event-card').remove();
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const btnAlterarAvatar = document.querySelector('.btn-alterar-avatar');
    const fileInput = document.getElementById('file-input');
    const avatarPlaceholder = document.querySelector('.avatar-placeholder');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Funcionalidade para o botão "Alterar" (abrir galeria)
    btnAlterarAvatar.addEventListener('click', () => {
        fileInput.click(); // Simula o clique no input de arquivo oculto
    });

    // Lida com a seleção de arquivo
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Remove o "X" ou qualquer conteúdo anterior e mostra a imagem
                avatarPlaceholder.innerHTML = '';
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.borderRadius = '50%';
                img.style.objectFit = 'cover'; // Garante que a imagem cubra o círculo
                avatarPlaceholder.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });

//MOSTRAR SENHA PERFIL ONG
    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.textContent = ' 🕳️'
        } else {
            passwordInput.type = 'password';
            togglePassword.textContent = ' 	👁'
        }
    });
//ALTERAR DADOS PERFIL ONG
    const btnAlterarDados = document.querySelector('.btn-alterar-dados');
    btnAlterarDados.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log('Dados a serem alterados:', { username, password });
       
        alert('Dados alterados com sucesso!');
    });
});