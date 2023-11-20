document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Lógica de validação aqui
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');

    // Verificar se o e-mail é válido
    if (!isValidEmail(emailInput.value)) {
        displayError(emailError, 'E-mail inválido');
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    } else {
        hideError(emailError);
    }

    // Outras verificações (exemplo): campos vazios
    if (isEmpty(nameInput.value) || isEmpty(passwordInput.value)) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    }
});

// Função para verificar se o e-mail é válido
function isValidEmail(email) {
    // Utilizando uma expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para verificar se uma string está vazia
function isEmpty(value) {
    return value.trim() === '';
}

// Adiciona a lógica para mostrar/ocultar a senha
const togglePasswordButton = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePasswordButton.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});
