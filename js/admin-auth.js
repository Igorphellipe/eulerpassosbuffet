const ADMIN_AUTH_URL = 'api/auth.php';

fetch(ADMIN_AUTH_URL, { credentials: 'same-origin' })
  .then(response => response.ok ? response.json() : null)
  .then(result => {
    if (!result?.authenticated) {
      try { sessionStorage.removeItem('adminAuth'); } catch (error) { /* storage opcional */ }
      window.location.replace('login.html');
    }
  })
  .catch(() => {
    try { sessionStorage.removeItem('adminAuth'); } catch (error) { /* storage opcional */ }
    window.location.replace('login.html');
  });