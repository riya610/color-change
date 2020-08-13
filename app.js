document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;
document.getElementById('navyblueButton').onclick = switchNavyblue;
document.getElementById('redButton').onclick = switchRed;
document.getElementById('pinkButton').onclick = switchPink;

function switchGray() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'gray'; 
  document.getElementsByTagName('body')[0].style.color = 'white'; 
}

function switchWhite() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}

function switchBlue() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'lightblue'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}

function switchYellow() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}

function switchNavyblue() {
  document.getElementsByTagName('body')[0].style.backgroundColor = '#34495E'; 
  document.getElementsByTagName('body')[0].style.color = 'white'; 
}

function switchRed() {
  document.getElementsByTagName('body')[0].style.backgroundColor = '#FF5733'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}

function switchPink() {
  document.getElementsByTagName('body')[0].style.backgroundColor = '#A60835'; 
  document.getElementsByTagName('body')[0].style.color = 'white'; 
}