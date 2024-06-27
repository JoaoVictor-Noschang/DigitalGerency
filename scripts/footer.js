dateInFooter();
userLoginInFooter();

function dateInFooter() {
    const dateDocument = document.querySelector('#footerDate');

    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

    const currentDate = date.toLocaleString('pt-BR', options);

    dateDocument.textContent = currentDate;
}


function userLoginInFooter() {
    const userInFooter = document.querySelector("#footerUser");

    const footerUser = JSON.parse(localStorage.getItem("key"));

    userInFooter.textContent = `${footerUser.id} - ${footerUser.user}`;
}
