//Global definitions
var emojiCodes = {
  ':D': '/images/emoji/GoogleBlob/blobgrin.png',
  '>(': '/images/emoji/GoogleBlob/blobangry.png',
  'B)': '/images/emoji/GoogleBlob/blobcool.png'
};

var allScripts = document.getElementsByTagName('script'); //Get this script path
var lastScript = allScripts[allScripts.length-1].src.split('?')[0].replace(/\/[^\/]+\/?$/, '').replace(/\/[^\/]+\/?$/, '');

window.onload = function() {
  document.getElementById('main').insertAdjacentElement('beforebegin', document.getElementById('quick-search')); //Move the quick search outside parent container
  document.getElementById('main').insertAdjacentElement('beforebegin', document.getElementById('main-menu')); //Move main-menu outside parent container
  loopReplaceElements("wiki", "GoogleBlob", emojiCodes, lastScript);
}


//Fade in effect
document.addEventListener("DOMContentLoaded", function(e) {
  document.getElementById("wrapper").classList.add('is-visible');
  //document.getElementById("wrapper").classList.remove('is-visible');
});

//Fade out effect

//WORK IN PROGRESS...


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
