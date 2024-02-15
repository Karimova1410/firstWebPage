let image = document.querySelector('#image');
let flower = 'https://static-00.iconduck.com/assets.00/sun-symbol-emoji-2048x2048-wityey4r.png';
let isOriginal = true;

image.addEventListener('click', function () {
  if (isOriginal) {
    image.src = flower;
    isOriginal = false;
  } else {
    image.src = "images/alatoo.png";
    isOriginal = true;
  }
});

let helloButton = document.querySelector('#hello_button');
let hello = document.querySelector('h1');
helloButton.addEventListener('click', function () {
  const name = prompt('Please enter your name:');
  if (name !== null && name !== '') {
    hello.textContent = `Welcome,  ${name}!!!`;
  }
});