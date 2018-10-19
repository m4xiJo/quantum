//Move main-menu outside parent containers



//Emoji replacement script
var allScripts = document.getElementsByTagName('script'); //Get this script path
var lastScript = allScripts[allScripts.length-1].src.split('?')[0].replace(/\/[^\/]+\/?$/, '').replace(/\/[^\/]+\/?$/, '');
//alert (lastScript);
//alert(document.getElementsByTagName('script')[scripts.length-1]);

var emojiPack = "GoogleBlob";
var emojiCodes = {
  ':D': '/images/emoji/GoogleBlob/blobgrin.png',
  '>(': '/images/emoji/GoogleBlob/blobangry.png',
  'B)': '/images/emoji/GoogleBlob/blobcool.png'
};

var targetClass = "wiki";

window.onload = function() {
  //var lol = document.getElementById('wrapper3').appendChild(document.getElementById('main-menu'));
  //var lol = document.getElementById('main-menu').insertBefore(document.getElementById('main')[0]);
  var lol2 = document.getElementById('main').insertAdjacentElement('beforebegin', document.getElementById('quick-search'));
  var lol = document.getElementById('main').insertAdjacentElement('beforebegin', document.getElementById('main-menu'));
  loopReplaceElements(targetClass, emojiPack, emojiCodes, lastScript);
}

function replaceEmoticons(emojiPack, emojiCodes, emoji) {

  let scripts = document.getElementsByTagName('script');
  let lastScript = scripts[scripts.length - 1].src.replace(/\/[^\/]+\/?$/, '').replace(/\/[^\/]+\/?$/, '');
  let processedURL = lastScript;
  // a simple regex to match the characters used in the emoticons
  return text.replace(/[:\-)D]+/g, function (match) {
    return typeof emoticons[match] != 'undefined' ? '<img src="'+processedURL+emoticons[match]+'"/>' : match;
  });
}

//loopThoughElements();

function loopReplaceElements(targetClass, emojiPack, emojiCodes, themeRoot) {
  let elements = document.getElementsByClassName(targetClass); //Target class of containers where to replace


    for (let i = 0; i < elements.length; i++) {
      for (let j = 0; j < Object.keys(emojiCodes).length; j++) {
        if (elements[i].innerText.includes(Object.keys(emojiCodes)[j])) {
          alert("Match! " + elements[i].innerText);
          let result = elements[i].innerHTML += '<img src="' + themeRoot + Object.values(emojiCodes)[j] + '"height="25px"/>';
          //strMessage1.innerHTML = strMessage1.innerHTML.replace(/aaaaaa./g,'<a href=\"http://www.google.com/').replace(/.bbbbbb/g,'/world\">Helloworld</a>');
        }
      }
    }
}
