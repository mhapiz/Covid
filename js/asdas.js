window.addEventListener("load", () => {
  let worldConfirm = document.querySelector("#world-confirm");
  let worldRecover = document.querySelector("#world-recover");
  let indoConfirm = document.querySelector("#indo-confirm");
  let indoRecover = document.querySelector("#indo-recover");
  let indoPercent = document.querySelector("#indo-persen");
  let updateSpan = document.querySelector(".up");

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  function tanggal(d) {
    return d;
  }

  fetch("https://api.kawalcorona.com/")
    .then(response => {
      return response.json();
    })
    .then(data => {
      let idConfirm;
      let idRecover;
      data.forEach(d => {
        if (element.attributes.Country_Region == "Indonesia") {
          idConfirm = element.attributes.Confirmed;
          console.log(idConfirm);
        }
      });
      // data.forEach(element => {
      //   if (
      //     element.attributes.Country_Region == "Indonesia" &&
      //     element.attributes.OBJECTID == 65
      //   ) {
      //     idConfirm = element.attributes.Confirmed;
      //     idRecover = element.attributes.Recovered;
      //     lastUpdate = new Date(element.attributes.Last_Update);
      //   }

    });

  var hariHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu"
  ];

  var bulanBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "Nopember",
    "Desember"
  ];

  var month = bulanBulan[lastUpdate.getUTCMonth() + 1]; //months from 1-12
  var day = hariHari[lastUpdate.getUTCDay() + 1];
  var date = lastUpdate.getUTCDate();
  var year = lastUpdate.getUTCFullYear();
  var hour = lastUpdate.getHours();
  var minute = lastUpdate.getMinutes();
  var fullJam = hour + ":" + minute;
  var waktu =
    day + ", " + date + " " + month + " " + year + " Jam " + fullJam;

  var s;
  s = idRecover / 100 * idConfirm

  updateSpan.textContent = waktu;
  indoConfirm.textContent = formatNumber(idConfirm);
  indoRecover.textContent = formatNumber(idRecover);
  indoPercent.textContent = s;
});

fetch("https://api.kawalcorona.com/positif/")
  .then(data => {
    return data.json();
  })
  .then(data => {
    confirmed = data.value;
    worldConfirm.textContent = formatNumber(confirmed);
  });


fetch("https://api.kawalcorona.com/sembuh/")
  .then(data => {
    return data.json();
  })
  .then(data => {
    recovered = data.value;
    worldRecover.textContent = formatNumber(recovered);
    return recovered;
  });