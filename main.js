const bill = document.querySelector(".inputs__value");
const people = document.querySelector(".people__value");
const buttons = document.querySelectorAll(".btns__btn");
const tipResult = document.querySelector(".results__text-value--tip");
const total = document.querySelector(".results__text-value--total");
const alert = document.getElementById("alert");
const custom = document.querySelector(".btns__input");
const reset = document.querySelector(".results__btn");

let billNumber = parseInt(bill.value);
let peopleNumber = parseInt(people.value);

let tipValue = 5;

buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    //Cambiar estilos
    removeActive();
    element.classList.add("btns__btn--active");

    tipValue = parseInt(event.target.innerText.slice(0, -1));
    calculateTip();
  });
});

function removeActive() {
  buttons.forEach((element) => {
    element.classList.remove("btns__btn--active");
  });
}

//Actualizando el bill
bill.addEventListener("input", () => {
  billNumber = parseFloat(bill.value);
  calculateTip();
});

//Actualizando Custom

custom.addEventListener("click", () => {
  removeActive();
});

custom.addEventListener("input", () => {
  removeActive();
  tipValue = parseInt(custom.value);
  if (!isNaN(tipValue)) {
    calculateTip();
  }
});

//Actualizando Personas
people.addEventListener("input", () => {
  peopleNumber = parseFloat(people.value);

  // console.log(peopleNumber);
  if (peopleNumber === 0 || isNaN(peopleNumber)) {
    people.style.borderColor = "rgb(164, 68, 68)";
    alert.classList.add("error");
  } else {
    people.style.borderColor = "hsl(172, 67%, 45%)";
    alert.classList.remove("error");
    calculateTip();
  }
});

function calculateTip() {
  //Calculo de Tip Amount
  tipResult.innerText = `$${(
    (billNumber * tipValue) /
    100 /
    peopleNumber
  ).toFixed(1)}`;
  //Calculo de Total
  total.innerText = `$${(
    ((billNumber * tipValue) / 100 + billNumber) /
    peopleNumber
  ).toFixed(1)}`;
}

//Reset

reset.addEventListener("click", () => {
  bill.value = 0;
  billNumber = 0;
  people.value = 5;
  peopleNumber = 5;
  custom.value = "";
  calculateTip();
});
