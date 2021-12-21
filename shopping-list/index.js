let like = document.getElementById("like1");

like.addEventListener("click", function () {
  if (like.style.color == "black") {
    like.style.color = "red";
  } else {
    like.style.color = "black";
  }
});

let min = document.getElementById("min1");

min.addEventListener("click", function () {
  let inp1 = document.getElementById("in1");
  if (inp1.value > 0) {
    inp1.value--;
  }
});
let plus = document.getElementById("plus1");

plus.addEventListener("click", function () {
  let inp1 = document.getElementById("in1");

  inp1.value++;
});
let like2 = document.getElementById("like2");

like2.addEventListener("click", function () {
  if (like2.style.color == "black") {
    like2.style.color = "red";
  } else {
    like2.style.color = "black";
  }
});
let min2 = document.getElementById("min2");

min2.addEventListener("click", function () {
  let inp2 = document.getElementById("in2");
  if (inp2.value > 0) {
    inp2.value--;
  }
});
let plus2 = document.getElementById("plus2");

plus2.addEventListener("click", function () {
  let inp2 = document.getElementById("in2");

  inp2.value++;
});
let like3 = document.getElementById("like3");

like3.addEventListener("click", function () {
  if (like3.style.color == "black") {
    like3.style.color = "red";
  } else {
    like3.style.color = "black";
  }
});
let min3 = document.getElementById("min3");

min3.addEventListener("click", function () {
  let inp3 = document.getElementById("in3");
  if (inp3.value > 0) {
    inp3.value--;
  }
});
let plus3 = document.getElementById("plus3");

plus3.addEventListener("click", function () {
  let inp3 = document.getElementById("in3");

  inp3.value++;
});
let del = document.getElementById("del1");
del.addEventListener("click", function () {
  var elem = document.getElementById("it1");
  elem.remove();
});
let del2 = document.getElementById("del2");
del2.addEventListener("click", function () {
  var elem = document.getElementById("it2");
  elem.remove();
});
let del3 = document.getElementById("del3");
del3.addEventListener("click", function () {
  var elem = document.getElementById("it3");
  elem.remove();
});
function somme() {
  var prix1, prix2, prix3, sum;
  prix1 = Number(prix1.getElementById("prix1").value);
  prix2 = Number(prix2.getElementById("prix2").value);
  prix3 = Number(prix3.getElementById("prix3").value);
  sum = prix1 + prix2 + prix3;
  finalPrice.getElementById("finalPrice").value = sum;
}
