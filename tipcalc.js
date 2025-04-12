let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
let calculate = document.getElementById("calculate");
let total = document.getElementById("total");

function calculateTotal() {
  let billAmount = bill.value;
  let tipamount = tip.value;
  let totalvalue = '$' + (parseFloat(billAmount)+parseFloat(tipamount));

  total.innerText = totalvalue;

}
console.log(calculate);
calculate.addEventListener("click", calculateTotal);
