const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

username.addEventListener("blur", () => {
    checkInputUsername();
});

email.addEventListener("blur", () => {
    checkInputEmail();
});

function checkInputUsername() {
    const usernameValue = username.value;

    if(usernameValue === "") {
        //mostrar mensagem de erro
        errorInput(username, "Campo obrigatório.")
    } else {
        const formItem = username.parentElement;
        formItem.className = "input-box";
    }
};

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

function checkInputTelefone() {
    const telefoneValue = telefone.value;

    if(telefoneValue === "") {
        //mostrar mensagem de erro
        errorInput(telefone, "Campo obrigatório.")
    } else {
        const formItem = telefone.parentElement;
        formItem.className = "input-box";
    }
};

function checkInputPassword() {
    const passwordValue = password.value;

    if(passwordValue === "") {
        //mostrar mensagem de erro
        errorInput(password, "Campo obrigatório.")
    } else if (passwordValue.length <8) {
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
    } else {
        const formItem = password.parentElement;
        formItem.className = "input-box";
    }
};

function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPasswordValue === "") {
        //mostrar mensagem de erro
        errorInput(passwordConfirmation, "Campo obrigatório.")
    } else if (confirmationPasswordValue !== passwordValue) {
        errorInput(passwordConfirmation, "As senhas precisam ser iguais.");
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "input-box";
    }
};

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputTelefone()
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".input-box");

    const isValid = [...formItems].every( (item) => {
        return item.className === "input-box"
    });

    if (isValid) {
        alert("Cadastrado com sucesso!");
        username.value = "";
        email.value = "";
        telefone.value = "";
        password.value = "";
        passwordConfirmation.value = "";
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