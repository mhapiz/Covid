function liveCorona() {
  let worldConfirm = document.querySelector("#world-confirm");
  let worldRecover = document.querySelector("#world-recover");
  let indoConfirm = document.querySelector("#indo-confirm");
  let indoRecover = document.querySelector("#indo-recover");
  let indoPercent = document.querySelector("#indo-persen");
  let updateSpan = document.querySelector(".up");

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  setInterval(function() {
    fetch("https://api.kawalcorona.com/")
      .then(result => {
        return result.json();
      })
      .then(data => {
        let idConfirm;
        let idRecover;
        data.forEach(element => {
          if (element.attributes.Country_Region == "Indonesia") {
            idDeath = element.attributes.Deaths;
            idConfirm = element.attributes.Confirmed;
            idRecover = element.attributes.Recovered;
            lastUpdate = new Date(element.attributes.Last_Update);
          }
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
        var day = hariHari[lastUpdate.getUTCDay()];
        var date = lastUpdate.getUTCDate();
        var year = lastUpdate.getUTCFullYear();
        var hour = lastUpdate.getHours();
        var minute = lastUpdate.getMinutes();
        var fullJam = hour + ":" + minute;
        var waktu =
          day + ", " + date + " " + month + " " + year + " Jam " + fullJam;

        var s;
        s = (idRecover / idConfirm) * 100;

        updateSpan.textContent = waktu;
        indoConfirm.textContent = formatNumber(idConfirm);
        indoRecover.textContent = formatNumber(idRecover);
        indoPercent.textContent = Math.round(s);
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
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  liveCorona();
});
