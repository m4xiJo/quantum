//Global definitions
var emojiCodes = {
  ':D': '/images/emoji/GoogleBlob/blobgrin.png',
  '>(': '/images/emoji/GoogleBlob/blobangry.png',
  'B)': '/images/emoji/GoogleBlob/blobcool.png'
};

var allScripts = document.getElementsByTagName('script'); //Get this script path
var lastScript = allScripts[allScripts.length-1].src.split('?')[0].replace(/\/[^\/]+\/?$/, '').replace(/\/[^\/]+\/?$/, '');

//Execute things once page loaded...
document.addEventListener("DOMContentLoaded", function(e) {
  listenToHelpClick();
  document.getElementById("wrapper").classList.add('is-visible');
  if (document.getElementById('footer') !== null) document.getElementById('wrapper').insertAdjacentElement('afterend', document.getElementById('footer'));
  if (document.getElementById('quick-search') !== null) document.getElementById('main').insertAdjacentElement('beforebegin', document.getElementById('quick-search')); //Move the quick search outside parent container
  if (document.getElementById('main-menu') !== null) document.getElementById('main').insertAdjacentElement('beforebegin', document.getElementById('main-menu')); //Move main-menu outside parent container
  //document.getElementById("wrapper").classList.remove('is-visible');
  loopReplaceElements("wiki", "GoogleBlob", emojiCodes, lastScript);

});

//Emoji replacement function
function loopReplaceElements(targetClass, emojiPack, emojiCodes, themeRoot) {
  let buffer;
  let elements = document.getElementsByClassName(targetClass); //Target class of containers where to replace
    for (let i = 0; i < elements.length; i++) { //for each found element of class "wiki", execute...
      for (let j = 0; j < Object.keys(emojiCodes).length; j++) { //for each emoji key
        if (elements[i].innerText.includes(Object.keys(emojiCodes)[j]) && (elements[i].innerText.match(Object.keys(emojiCodes)[j]).length >= 1)) { //Detect if has duplicates
            //For each emoji duplicate
        }
        if (elements[i].innerText.includes(Object.keys(emojiCodes)[j])) {
          buffer = elements[i].innerText = elements[i].innerText.replace(Object.keys(emojiCodes)[j], '<img src="' + themeRoot + Object.values(emojiCodes)[j] + '"height="25px"/>');
          //let result = elements[i].innerHTML += buffer;
        }
      }
    }
}

//Inform users that they are going to Redmine.org page
function listenToHelpClick() {
  let currentHostname = window.location.hostname;
  document.addEventListener('click', function (event) {
  	if (event.target.matches('.help') && event.target.toString().match(/redmine\.org/g) && !event.target.toString().match(currentHostname)) {
      let usrChoice = confirm("You are now heading to: " + event.target + "!\n\nRedmine.org is the official Redmine powered website meant for development of Redmine itself, and thus a completely different page from yours, dispite similarities in design. \nPlease don't get confused where you ended up later as this concerns creation of test issues and any test posts in general, which wouldn't be appropriate on Redmine.org");
      if (usrChoice == false) event.preventDefault();
    }
  }, false);
}

//Local storage experiments
function localStorageManager(key, value, read) {
  if (read == true && localStorage.getItem(key) !== null) {
    return key = localStorage.getItem(key);
  }
  else if (read == true && localStorage.getItem(key) === null)
    return key = "Target key doesn't exist in the local storage!";

  if (read == false && localStorage.getItem(key) === null) {
    localStorage.setItem(key, value);
  }
  else if (read == false && localStorage.getItem(key) !== null) {
    localStorage.setItem(key, value);
  }
}
