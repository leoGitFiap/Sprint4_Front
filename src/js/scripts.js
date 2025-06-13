document.addEventListener('DOMContentLoaded', function() {
    // Cadastro
    const cadastroForm = document.getElementById('cadastroForm');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const confirmarSenha = document.getElementById('confirmarSenha').value;

            if (senha !== confirmarSenha) {
                const alert = document.createElement('div');
                alert.className = 'alert alert-danger animate__animated animate__fadeIn mt-3';
                alert.textContent = 'As senhas não coincidem!';
                cadastroForm.appendChild(alert);
                setTimeout(() => alert.remove(), 3000);
                return;
            }

            localStorage.setItem('user', JSON.stringify({ email, senha }));
            const success = document.createElement('div');
            success.className = 'alert alert-success animate__animated animate__fadeIn mt-3';
            success.textContent = 'Cadastro realizado com sucesso!';
            cadastroForm.appendChild(success);
            setTimeout(() => window.location.href = 'login.html', 2000);
        });
    }

    // Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const user = JSON.parse(localStorage.getItem('user'));

            const alert = document.createElement('div');
            alert.className = 'alert mt-3 animate__animated animate__fadeIn';
            if (user && user.email === email && user.senha === senha) {
                alert.className += ' alert-success';
                alert.textContent = 'Login bem-sucedido!';
                loginForm.appendChild(alert);
                setTimeout(() => window.location.href = 'index.html', 2000);
            } else {
                alert.className += ' alert-danger';
                alert.textContent = 'Email ou senha incorretos!';
                loginForm.appendChild(alert);
                setTimeout(() => alert.remove(), 3000);
            }
        });
    }
});