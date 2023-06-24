let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("Correo");
    let password = document.getElementById("Contraseña");

    console.log('Correo:', email.value);
    console.log('Contraseña:', password.value);
});