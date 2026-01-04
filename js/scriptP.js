let user = JSON.parse(localStorage.getItem('UserDATA')) || {        //Funcionamento do programa por meio do localStorage
    firstName: "User",
    lastName: "NameX",
    balance: 1000,
    implements: []                      //Array de implementos
};

function implemntess(name, v) {            //Implementos
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

function averageCalc() {      //Media
    const userLocal = JSON.parse(localStorage.getItem('UserDATA'));
    let k = 0;
    let i;
    for (i = 0; i < userLocal.implements.length; i++) {
        k += userLocal.implements[i].value;


    }
    //console.log(k + " " + i );
    return k / i;
}

const resetbt = document.querySelector('#resetbt');
resetbt.addEventListener('click', function (params) {
    const userLocal = JSON.parse(localStorage.getItem('UserDATA'));
    console.log('testeFOI');
    console.log(userLocal);

    userLocal.implements = [];

    localStorage.setItem('UserDATA', JSON.stringify(userLocal));
    window.location.reload();


});

const altsaldobt = document.querySelector('#bootFormSaldo');
altsaldobt.addEventListener('submit', function (params) {
    const userLocal = JSON.parse(localStorage.getItem('UserDATA'));
    console.log('testeFOI');
    console.log(userLocal);

    const newbalance = document.querySelector('#newvalue');
    let n = newbalance.value;

    console.log(n);

    userLocal.balance = n;

    localStorage.setItem('UserDATA', JSON.stringify(userLocal));
    window.location.reload();


});

window.onload = balanceF(), welcome();

