const größe = document.getElementById("größe");
const alter = document.getElementById("age");
const gewicht = document.getElementById("gewicht");
const weiblich = document.getElementById("weiblich");
const männlich = document.getElementById("männlich");
const list = document.getElementById("list");
const submite = document.querySelector("button");
const outPutKcalG = document.getElementsByClassName("outPutKcalG")[0];
const outPutKcalGe = document.getElementsByClassName("outPutKcalGe")[0];

submite.addEventListener("click", () => {
  let outPut;
  let outPutGesamt;
  if (weiblich.checked) {
    outPut =
      655.1 + 9.6 * gewicht.value + 1.8 * größe.value - 4.7 * alter.value;
    outPutKcalG.innerHTML = outPut.toFixed(1);
  } else if (männlich.checked) {
    outPut = 664.7 + 13.7 * gewicht.value + 5 * größe.value - 6.8 * alter.value;
    outPutKcalG.innerHTML = outPut.toFixed(1);
  } else {
    alert("Falsche Eingaben");
    return;
  }
  switch (list.value) {
    case "Schlafen":
      outPutGesamt = 0.95 * outPut;
      outPutKcalGe.innerHTML = outPutGesamt.toFixed(1);
      break;
    case "Nur Sitzen":
      outPutGesamt = 1.2 * outPut;
      outPutKcalGe.innerHTML = outPutGesamt.toFixed(1);
      break;
    case "Aktivität":
      outPutGesamt = 1.5 * outPut;
      outPutKcalGe.innerHTML = outPutGesamt.toFixed(1);
      break;
    case "Stehender":
      outPutGesamt = 1.7 * outPut;
      outPutKcalGe.innerHTML = outPutGesamt.toFixed(1);
      break;
    case "Verkäufer":
      outPutGesamt = 1.9 * outPut;
      outPutKcalGe.innerHTML = outPutGesamt.toFixed(1);
      break;
    case "Körperlich":
      outPutGesamt = 2.2 * outPut;
      outPutKcalGe.innerHTML = outPutGesamt.toFixed(1);
      break;
  }
});
