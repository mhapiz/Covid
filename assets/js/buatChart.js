function buatChart() {
  let daerah = new Array();
  let positif = new Array();
  let canvasChart = document.getElementById('myChart');

  fetch("https://api.kawalcorona.com/indonesia/provinsi/")
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.forEach(el => {
        daerah.push(el.attributes.Provinsi);
        positif.push(el.attributes.Kasus_Posi);
      });
      new Chart(canvasChart, {
        type: "bar",
        data: {
          labels: daerah,
          datasets: [{
            label: "Yang Positif",
            backgroundColor: "#c45850",
            data: positif,
            borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: "Kasus Positif Covid-19"
          }
        }
      });
    });
}