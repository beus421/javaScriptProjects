const f = document.querySelector("form");

f.addEventListener("submit", (e) => {
  e.preventDefault();

  let h = Number(document.querySelector("#height").value);

  console.log();
  let w = Number(document.querySelector("#weight").value);

  if (h > 0 && w > 0 && isNaN(h) === false && isNaN(w) === false) {
    let bmi = (w / h / h) * 10000;
    console.log(bmi);

    let r = document.createTextNode(`${bmi}`);

    document.getElementById("results").style.fontSize = "20px";
    document.getElementById("results").style.fontWeight = "700";
    document.getElementById("results").style.color = "Black";
    document.getElementById("results").style.display = "flex";
    document.getElementById("results").style.justifyContent = "center";
    document.querySelector("#results").appendChild(r);
    console.log(results);
  } else {
    console.log("INVALID");
  }
});
