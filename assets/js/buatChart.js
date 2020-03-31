function buatChart() {
  let daerah = new Array();
  let positif = new Array();
  let sembuh = new Array();
  let meni = new Array();
  let canvasChart = document.getElementById("myChart");
  let tDaerah = document.querySelector("#tDaerah");
  let tJumlah = document.querySelector("#tJumlah");

  fetch("https://api.kawalcorona.com/indonesia/provinsi/")
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.forEach(el => {
        daerah.push(el.attributes.Provinsi);
        positif.push(el.attributes.Kasus_Posi);
        sembuh.push(el.attributes.Kasus_Semb);
        meni.push(el.attributes.Kasus_Meni);

        $("#dataTab").append(
          "<tr>" +
          "<td>" +
          el.attributes.Provinsi +
          "</td>" +
          "<td>" +
          el.attributes.Kasus_Posi +
          "</td>" +
          "<td>" +
          el.attributes.Kasus_Semb +
          "</td>" +
          "<td>" +
          el.attributes.Kasus_Meni +
          "</td>" +
          "</tr>"
        );
      });

      new Chart(canvasChart, {
        type: "horizontalBar",
        data: {
          labels: daerah,
          datasets: [{
              label: "Positif",
              backgroundColor: "#00a8cc",
              data: positif,
            },
            {
              label: "Sembuh",
              backgroundColor: "#21bf73",
              data: sembuh,
            },
            {
              label: "Meninggal",
              backgroundColor: "#f0134d",
              data: meni,
            }
          ]
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