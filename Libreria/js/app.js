function login() {

    const usuario  = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    if (usuario === 'admin' && password === '1234') {

        // GUARDAR SESIÓN
        localStorage.setItem("login", "true");

        // IR AL DASHBOARD
        window.location.href = '../index.html';

    } else {

        errorMsg.classList.add('show');

    }
}

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') login();
});


const abrirModal = document.getElementById('abrirModal');

const cerrarModal = document.getElementById('cerrarModal');

const modal = document.getElementById('modalProducto');


if(abrirModal && modal){

    abrirModal.addEventListener('click', ()=>{

        modal.classList.add('activo');

    });

}


if(cerrarModal && modal){

    cerrarModal.addEventListener('click', ()=>{

        modal.classList.remove('activo');

    });

}




