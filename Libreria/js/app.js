function login() {
      const usuario  = document.getElementById('usuario').value.trim();
      const password = document.getElementById('password').value.trim();
      const errorMsg = document.getElementById('errorMsg');

      if (usuario === 'admin' && password === '1234') {
        window.location.href = '../index.html';
      } else {
        errorMsg.classList.add('show');
      }
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Enter') login();
    });
