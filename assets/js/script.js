function kasusIndo() {

  let pos = document.querySelector("#indoPos");
  let sem = document.querySelector("#indoSem");
  let meni = document.querySelector("#indoMeni");

  fetch("https://api.kawalcorona.com/indonesia/")
    .then(res => {
      return res.json();
    })
    .then(data => {
      pos.textContent = data[0].positif;
      sem.textContent = data[0].sembuh;
      meni.textContent = data[0].meninggal;
    });
}