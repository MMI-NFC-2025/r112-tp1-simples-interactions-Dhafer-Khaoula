// TODO
//Exercice1
const aMettreEnRouge = document.getElementById("a-mettre-en-rouge");

aMettreEnRouge.style.color = "red";

//Exercice2
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");

enRougeSuiteAClick.addEventListener("click", () => {
    enRougeSuiteAClick.style.color = "red"; 
});

//Exercice3
const collH2 = document.querySelectorAll("h2");
collH2.forEach((elm) => {
    elm.addEventListener("click", (evt) => {

evt.target.style.color = "red";
    });
  });
