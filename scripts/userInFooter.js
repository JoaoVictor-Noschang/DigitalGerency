const userInFooter = document.querySelector("#footerUser");

const footerUser = JSON.parse(localStorage.getItem("key"));

userInFooter.textContent = `${footerUser.id} - ${footerUser.user}`;