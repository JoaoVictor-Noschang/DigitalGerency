const users = [
    {
        id: 100,
        senha: '123',
        user: 'João Victor',
        cargo: 'Conferênte de Setor'
    },
    {
        id: 200,
        senha: '456',
        user: 'Romário',
        cargo: 'Gerênte de Estoque'
    },
    {
        id: 300,
        senha: '789',
        user: 'Amélia',
        cargo: 'Estoquista'
    }
];

const buttonEnter = document.querySelector('#btn-enter');

const loginInput = document.querySelector('#login');
const senhaInput = document.querySelector('#senha');

const userName = document.querySelector('#userName');
const userCarg = document.querySelector('#userCarg');


loginInput.addEventListener("change", () => {
    showUser()
});

function showUser() {
    const loginCurrenc =  loginInput.value;

    if (loginInput.value != '') {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == loginCurrenc) {
                userName.innerHTML = users[i].user;
                userCarg.innerHTML = users[i].cargo;
                break;
            } else {
                userName.innerHTML = '';
                userCarg.innerHTML = '';
            }
        }
    }
}


buttonEnter.addEventListener("click", (event) => {
    event.preventDefault();

    verificarLogin();
    
});

// Aqui está dando erro, está funcionando apenas o primeiro objeto na lista.
function verificarLogin() {
    const loginValue = loginInput.value;
    const senhaValue = senhaInput.value;
    
    if (loginValue != '' && senhaValue != '') {

        const user = users.find(user => user.id == loginValue && user.senha == senhaValue);

        localStorage.setItem("key", JSON.stringify(user));

        if (user) {
            //window.location.replace('./main.html');
            window.location.assign('./main.html');

        } else {
            alert("Login ou senhas INCORREROS!");
        }

    } else {
        alert('Todos os campos precisam ser preenchidos!');
    }

}



