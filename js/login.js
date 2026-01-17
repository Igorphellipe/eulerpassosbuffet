// login.js - validação simples (apenas para uso local/teste)
// Credenciais de teste (substitua por integração segura no futuro)
const LOGIN_CREDENTIALS = {
  username: 'admin',
  password: 'senha123'
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const errorEl = document.getElementById('login-error');

  // Se já estiver autenticado, redireciona para admin
  try {
    if (sessionStorage.getItem('adminAuth') === 'true') {
      window.location.href = 'admin.html';
      return;
    }
  } catch (e) { /* ignore */ }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;

    if (user === LOGIN_CREDENTIALS.username && pass === LOGIN_CREDENTIALS.password) {
      // marca sessão e redireciona
      try {
        sessionStorage.setItem('adminAuth', 'true');
      } catch (err) { console.warn('sessionStorage indisponível', err); }
      window.location.href = 'admin.html';
    } else {
      errorEl.classList.remove('hidden');
      setTimeout(() => errorEl.classList.add('hidden'), 3500);
    }
  });
});
