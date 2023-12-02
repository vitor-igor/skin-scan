const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

username.addEventListener("blur", () => {
    checkInputUsername();
});


function checkInputEmail() {
    const emailValue = email.value;

    if(emailValue === "") {
        //mostrar mensagem de erro
        errorInput(email, "Campo obrigatório.")
    } else {
        const formItem = email.parentElement;
        formItem.className = "input-box";
    }
};

function checkInputPassword() {
    const passwordValue = password.value;

    if(passwordValue === "") {
        //mostrar mensagem de erro
        errorInput(password, "Campo obrigatório.")
    } else if (passwordValue.length <8) {
        errorInput(password, ("A senha é inválida."));
    } else {
        const formItem = password.parentElement;
        formItem.className = "input-box";
    }
};


function checkForm() {
    checkInputEmail();
    checkInputPassword();

    const formItems = form.querySelectorAll(".input-box");

    const isValid = [...formItems].every( (item) => {
        return item.className === "input-box"
    });

    if (isValid) {
        alert("Cadastrado com sucesso!");
        username.value = "";
        password.value = "";
    } else {
        alert("Preencha todos os campos corretamente.")
    };
};

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "input-box error";
};