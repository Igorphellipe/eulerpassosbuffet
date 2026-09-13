const AUTH_URL = 'api/auth.php';

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById('login-form');
  const errorEl = document.getElementById('login-error');

  // Se já estiver autenticado, redireciona para admin
  try {
    const response = await fetch(AUTH_URL, { credentials: 'same-origin' });
    const result = await response.json();
    if (response.ok && result.authenticated) window.location.href = 'admin.html';
  } catch (e) { /* ignore */ }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;

    try {
      const response = await fetch(AUTH_URL, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: pass })
      });
      if (!response.ok) throw new Error('Falha na autenticação');
      window.location.href = 'admin.html';
    } catch (error) {
      console.error(error);
      errorEl.classList.remove('hidden');
      setTimeout(() => errorEl.classList.add('hidden'), 3500);
    }
  });
});
