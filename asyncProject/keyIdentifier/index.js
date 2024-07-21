document.body.style.backgroundColor = '#212121'
let screen = document;

screen.addEventListener('keydown', function(e) {
  console.log('Key pressed:', e.key);

  document.querySelector('.key').innerHTML = `${e.key}`;

  // Generating a random hex color
  let s = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += s[Math.floor(Math.random() * 16)];
  }
  console.log(color);

  // Updating the body background color and text color
  document.body.style.backgroundColor = color;
  document.body.style.color = '#ffffff';
});


console.log(screen);
