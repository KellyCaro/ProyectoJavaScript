var formElement = document.getElementById('login');

formElement.addEventListener("submit", (event) => {
    event.preventDefault(); // Corregido: agregado paréntesis y eliminado comentario
    let user = document.getElementById("user").value;
    let pass = document.getElementById("password").value;
    let res = { user: user, password: pass }
    console.log(res);

    fetch("http://localhost:6969/api/usuarios/login", {
        method: "POST",
        body: res,

    })
});