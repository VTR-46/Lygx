window.onload = function () {

    const userLocal = JSON.parse(localStorage.getItem('UserDATA'));

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "TABELA",
            horizontalAlign: "left"
        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            innerRadius: 100,
            indexLabelFontSize: 17,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { label: "Saldo Restante",  y: remainingBalanceCalculation()  }
            ]
        }]

    });

    if (!userLocal || !userLocal.implements || userLocal.implements.length === 0) {
        chart.options.title.text = "Sem dados para exibir";
        chart.render();
        return;
    }

    chart.render();


    console.log(userLocal.firstName);


    for (let i = 0; i < userLocal.implements.length; i++) {
        console.log(userLocal.implements[i].value);
        chart.data[0].addTo("dataPoints", { y: userLocal.implements[i].value, label: userLocal.implements[i].nameData })
    }


}

function remainingBalanceCalculation() {
    const userLocal = JSON.parse(localStorage.getItem('UserDATA'));
    let k = userLocal.balance;

    for (let i = 0; i < userLocal.implements.length; i++) {
        k -= userLocal.implements[i].value;
        
    }
    return k;
}