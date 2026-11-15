var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/orang5.png') {
        myImage.setAttribute ('src', 'images/firefox-icon.png');
    } else {
        myImage.setAttribute ('src', 'images/orang5.png'); 
    }   
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1')

function setUserName() {
    var myName = prompt('Please Enter Your Name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool. ' + myName;
}

myButton.onclick = function() {
  setUserName();
}

if(!localStorage,getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}