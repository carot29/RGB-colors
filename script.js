document.getElementById("pre").addEventListener("click", rslt);

function rslt() {
  let redIn = document.getElementById("redIn").value;
  let greenIn = document.getElementById("greenIn").value;
  let blueIn = document.getElementById("blueIn").value;
  var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  document.getElementById("coldisp").style.backgroundColor = colourvar;
  document.getElementById(
    "rgbco"
  ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
}

// document.addEventListener("keypress", testFunction);

// let password = "hello";
// let userWord = "";
// function testFunction(event) {
//   userWord = userWord + event.key;

//   if (userWord == password) {
//     alert("You guess the password!");
//   }
//   console.log(userWord);
// }
