let p = .5;
let k = 2;
let t = 20;

    let xs = [];
    let ys = [];


const data = {
    labels: xs,
    datasets: [{
      label: 'Ecuació logística de diferencias',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: ys,
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            xAxes: {
              scaleLabel: {
                display: true,
                labelString: 'Termino'
              }
            }
          } 
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
function addData(chart, label, data) {
    
    chart.config.data.labels = label;
    chart.config.data.datasets[0].data = data;
    console.log(chart.config.data.labels)
    console.log(chart.config.data.datasets[0].data)
    chart.update();
}
function graficar(){
     xs = [];
     ys = [];

    p = document.getElementById("P").value
    
    k = document.getElementById("K").value
    t = document.getElementById("T").value

for (let i = 0; i < t; i++) {
    if (i == 0) {
        ys.push(k*p*(1-p))
        xs.push(i+1);
    }else{
        ys.push(k*(ys[i-1])*(1-(ys[i-1])))
        xs.push(i+1);
    }
}
console.log(xs,ys)
addData(myChart,xs,ys);
}


