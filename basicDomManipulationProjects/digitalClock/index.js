document.querySelector(`#clock`).style.fontSize = '20px';

function currentTime() {
  let t = new Date().toLocaleTimeString();
  let time = document.createTextNode(`${t}`);

  if (document.querySelector(`#clock`).hasChildNodes()) {
    document
      .querySelector(`#clock`)
      .removeChild(document.querySelector(`#clock`).firstChild);
  }
  document.querySelector(`#clock`).appendChild(time);
}

setInterval(currentTime, 500);

