
var usdDollarObj = document.querySelector("#USD");
var EuroObj = document.querySelector("#EUR");
var uzsSumObj = document.querySelector("#UZS");
var changeCurrent = document.querySelector("#change");
var resetSite = document.querySelector("#reset");
var convertCur = document.querySelector("#convert");


// var usdDollar = usdDollarObj.value;
// var uzsEur = EuroObj.value;
// var uzsSum = uzsSumObj.value;

// console.log(usdDollar);
// console.log(uzsEur);
// console.log(uzsSum);

// usdDollarObj.value = usdDollar;
// EuroObj.value = uzsEur;
// uzsSumObj.value = uzsSum;


convertCur.addEventListener("click", (b) => {
  if (usdDollarObj.value != ""){
    var x = usdDollarObj.value*11400;
    console.log(x);
    uzsSumObj.value = x;
  } else{
    var y = uzsSumObj.value/11400;
    console.log(y);
    usdDollarObj.value = y;
  }

  if (EuroObj.value != ""){
    var z = EuroObj.value*12300;
    console.log(z);
    uzsSumObj.value = z;
  } else{
    var y = uzsSumObj.value/12300;
    console.log(y);
    EuroObj.value = y;
  }

})


resetSite.addEventListener("click", (c) => {
  usdDollarObj.value = "";
  uzsSumObj.value = "";
  EuroObj.value = "";
})