window.addEventListener('load', () => {
  let worldConfirm = document.querySelector("#world-confirm");
  let worldRecover = document.querySelector("#world-recover");
  let indoConfirm = document.querySelector("#indo-confirm");
  let indoRecover = document.querySelector("#indo-recover");


  let api = `https://coronavirus-tracker-api.herokuapp.com/all`;

  fetch(api).then(response => {
    return response.json();
  }).then(data => {
    let confirmed = data.latest.confirmed;
    let recovered = data.latest.recovered;
    let idConfirmed = data.confirmed.locations;
    let idConfirm;
    let idRecovered = data.recovered.locations;
    let idRecover;

    idConfirmed.forEach(element => {
      if (element.country_code === "ID") {
        idConfirm = element.latest;
      }
    });

    idRecovered.forEach(element => {
      if (element.country_code === "ID") {
        idRecover = element.latest;
      }
    });

    worldConfirm.textContent = confirmed;
    worldRecover.textContent = recovered;
    indoConfirm.textContent = idConfirm;
    indoRecover.textContent = idRecover;
  });

});