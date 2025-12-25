let user = JSON.parse(localStorage.getItem('UserDATA')) || {
    firstName: "User",
    lastName: "NameX",
    balance: 1000,
    implements: []
};

function implemntess(name, v) {
    this.nameData = name;
    this.value = v;
    this.total = 0;
    this.sets = [];
}

function balanceF() {
    const balanceI = document.querySelector('#balanceID');
    balanceI.innerHTML = `<h4>${user.balance}</h4>`;
}

function welcome() {
    const nameI = document.querySelector('#nameID');
    nameI.innerHTML = `<h2>${user.lastName}</h2>`;
}

function addI() {
    const nameI = document.querySelector('#addName');
    const valueI = document.querySelector('#addValue');

    if (!nameI.value || !valueI.value) return;

    const imp = new implemntess(
        nameI.value,
        Number(valueI.value)
    );

    user.implements.push(imp);
    localStorage.setItem('UserDATA', JSON.stringify(user));

    nameI.value = '';
    valueI.value = '';
}

const bootForm = document.querySelector('#bootForm');
bootForm.addEventListener('submit', function (event) {

    addI();
});

window.onload = balanceF(), welcome();

