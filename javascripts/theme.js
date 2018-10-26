//Global definitions
var allScripts = document.getElementsByTagName('script'); //Get this script path
var lastScript = allScripts[allScripts.length-1].src.split('?')[0].replace(/\/[^\/]+\/?$/, '').replace(/\/[^\/]+\/?$/, '');

const localization = {
  "redmineOrgWarning": {
    "generic": ["You are now heading to: ", "Redmine.org uses Redmine for own needs, and thus a completely different site from this Redmine powered site, dispite possible similarities/identicalities in design. \nPlease don't get confused where you ended up later."],
    "en": ["You are now heading to: ", "Redmine.org uses Redmine for own needs, and thus a completely different site from this Redmine powered site, dispite possible similarities/identicalities in design. \nPlease don't get confused where you ended up later."],
    "sv": ["Du går över till: ", "Redmine.org använder Redmine för egna krav, då den webbsidan är helt annorlunda från den här Redmine driven sida. \nVänligen bli inte förvirrad där du hamnade senare."],
    "es": ["Du går över till: ", "Redmine.org använder Redmine för sig själv, då den webbsidan är helt annorlunda från den här Redmine driven sida. \nVänligen bli inte förvirrad där du hamnade senare."],
    "ja": ["You are now heading to: ", "To be localized..."],
    "ru": ["You are now heading to: ", "To be localized..."]
  },
  "externalLinkWarning" : {
    "en": ["Links are spoopy, are you sure? -> ", "Trust this domain from now on!"]
  },
  "emojiCodes" : {
    "GoogleBlob" : {
      ':grin:': '/images/emoji/GoogleBlob/blobgrin.png',
      ':angry:': '/images/emoji/GoogleBlob/blobangry.png',
      ':cool:': '/images/emoji/GoogleBlob/blobcool.png',
      ':evil:': '/images/emoji/128/emoji_u1f47f.png'
    }
  }
};

//String raplacer
String.prototype.replaceAll = function(target, replacement) {
    return this.split(target).join(replacement);
};

//Execute things once page loaded...
document.addEventListener("DOMContentLoaded", function(e) {
  listenToRedirectClicks();
  moveDivsAround();
  toggleContrast();
  //topMenuFeedback();
  parseEmojis(localization["emojiCodes"]["GoogleBlob"], lastScript);
  defaultGravatarInitials();
  //document.getElementById("wrapper").classList.add('is-visible');
});

//Move some containers out to achieve stickiness
function moveDivsAround() {
  if (document.getElementById('footer') !== null) document.getElementById('wrapper').insertAdjacentElement('afterend', document.getElementById('footer'));
  if (document.getElementById('quick-search') !== null) document.getElementById('main').insertAdjacentElement('beforebegin', document.getElementById('quick-search')); //Move the quick search outside parent container
  if (document.getElementById('main-menu') !== null) document.getElementById('main').insertAdjacentElement('beforebegin', document.getElementById('main-menu')); //Move main-menu outside parent container
  if (document.getElementById('top-menu') !== null) document.getElementById('top-menu').insertAdjacentHTML('beforeend', '<div id="contrastswitch" onclick="toggleContrast(true)"></div>'); //Place the contrast switcher
  if (document.getElementsByClassName('jstElements')[0]) document.getElementsByClassName('jstElements')[0].insertAdjacentHTML('beforeend', '<button type="button" tabindex="200" class="jstb_emoji" title="Emoji" onclick="showHideEmojiPicker()"><span>Emoji</span></button>'); //Place emoji selector button
}

//Inform users that they are about to go to Redmine.org from their Redmine page
function listenToRedirectClicks() {
  let currentHostname = window.location.hostname;
  let browserLanguage = (navigator.language && localization["redmineOrgWarning"][navigator.language.split('-')[0]]) ? navigator.language.split('-')[0] : "generic";
  document.addEventListener('click', function (event) {
    	if (localStorage.getItem("isAwareAboutRedmineORG") == null && event.target.toString().match(/redmine\.org/g) && !event.target.toString().match(currentHostname)) {
        let usrChoice = confirm(localization["redmineOrgWarning"][browserLanguage][0] + event.target + "!\n\n" + localization["redmineOrgWarning"][browserLanguage][1]);
        if (usrChoice == false) event.preventDefault();
        else if (usrChoice == true) {event.preventDefault(); localStorage.setItem("isAwareAboutRedmineORG", true); window.open(event.target, '_blank');}
      }
    else if (localStorage.getItem("isAwareAboutRedmineORG") !== null && event.target.toString().match(/redmine\.org/g) && !event.target.toString().match(currentHostname)) {
      event.preventDefault(); window.open(event.target, '_blank');
    }

    if (event.target.href && !event.target.toString().match(currentHostname) && !event.target.toString().match(/redmine\.org/g)) {
      let usrChoice = confirm(localization["externalLinkWarning"][browserLanguage][0] + event.target + "\n" + localization["externalLinkWarning"][browserLanguage][1]);
      if (usrChoice == false) event.preventDefault();
    }
  }, false);
}

//Emoji replacement function
function parseEmojis(emojiPack, themeRoot) {
  let elements = document.querySelectorAll(".wiki"); //Target classes of containers where to replace
    for (let i = 0; i < elements.length; i++) { //for each found element of class "wiki", execute...
      for (let j = 0; j < Object.keys(emojiPack).length; j++) { //for each emoji key
          elements[i].innerHTML = elements[i].innerHTML.replaceAll(Object.keys(emojiPack)[j], '<img src="' + themeRoot + Object.values(emojiPack)[j] + '"height="25px"/>');
      }
    }
  }


//Dark light mode switcher
function toggleContrast(set) {
    let targetElements = document.querySelectorAll("#wrapper");
    if (set && localStorage.getItem("isNight") === "false") localStorage.setItem("isNight", true);
    else if (set && localStorage.getItem("isNight") === "true") localStorage.setItem("isNight", false);

    if (localStorage.getItem("isNight") === null) localStorage.setItem("isNight", false);
    if (localStorage.getItem("isNight") === "false") {
      for (let i = 0; i < targetElements.length; i++) {
        targetElements[i].className = "day-mode";
      }
    }
    else if (localStorage.getItem("isNight") === "true") {
      for (let i = 0; i < targetElements.length; i++) {
        targetElements[i].className = "night-mode";
      }
    }
}

//Adds a bar to active buttons in the top menu, note that it's designed to match contents of buttons. For plugins, consider having button names to be identical to their location URL.
function topMenuFeedback() {
  let tbTargetElements = document.querySelectorAll(".home, .my-page, .projects, .administration, .user.active, .my-account, .register, .login");
  let mmTargetElements = (document.getElementById("main-menu")) ? document.getElementById("main-menu").querySelectorAll("a.selected") : null;
  alert(mmTargetElements[0].innerText.toLowerCase());
  for (let i = 0; i < tbTargetElements.length; i++) {
    //if (window.location.toString().match(tbTargetElements[i])) tbTargetElements[i].classList.add('tmbActive');
    //else if (window.location.toString().match(tbTargetElements[i]))

  }
}

function showHideEmojiPicker() {
let emojiChecks;
if (document.getElementById('emojiSelector') == null && document.getElementsByClassName('jstElements')[0] !== null) {
  let buildEmojicontent = '<div id="emojiSelector">';
      for (let j = 0; j < Object.keys(localization["emojiCodes"]["GoogleBlob"]).length; j++) { //for each emoji key
          buildEmojicontent += '<img style="cursor:pointer" src="' + lastScript + Object.values(localization["emojiCodes"]["GoogleBlob"])[j] + '" title="' + Object.keys(localization["emojiCodes"]["GoogleBlob"])[j] + '"height="25px"/>';
      }
      buildEmojicontent += '</div>';
      document.getElementsByClassName('jstElements')[0].insertAdjacentHTML('afterend', buildEmojicontent); //Place emoji selector
      document.getElementsByClassName('wiki-edit')[0].focus();

      document.getElementById('emojiSelector').addEventListener('click', emojiChecks = function (emojiClicks) {
        if (emojiClicks.target.tagName.toLowerCase() === "img") {
          document.getElementsByClassName('wiki-edit')[0].focus();
          insertInTextarea(document.activeElement, emojiClicks.target.title);
        }
      }, false);
}
  else if (document.getElementById('emojiSelector') !== null && document.getElementsByClassName('jstElements')[0] !== null) {
    document.getElementById('emojiSelector').removeEventListener('click', emojiChecks, false);
    document.getElementById('emojiSelector').remove(1);
  }
}

//Function to insert text in the focused area
function insertInTextarea(targetElement, textToInsert) {
  let start = targetElement.selectionStart;
  let end = targetElement.selectionEnd;
  let text = targetElement.value;
  let before = text.substring(0, start);
  let after  = text.substring(end, text.length);
  targetElement.value = (before + textToInsert + after);
  targetElement.selectionStart = el.selectionEnd = start + textToInsert.length;
  targetElement.focus();
}

// Generate avatar initials with https://ui-avatars.com/ if user Gravatar is unset
function defaultGravatarInitials() {
  let messages;
  //Forum page
  if (document.getElementsByClassName('message reply') !== null) {
    messages = document.getElementsByClassName('message reply');
    for (let i = 0; i < messages.length; i++) {
      messages[i].children[1].children[0].src = messages[i].children[1].children[0].src + "https%3A%2F%2Fui-avatars.com%2Fapi%2F/" + encodeURI(messages[i].children[1].children[2].innerText) + "/128/0D8ABC";
    }
  }
  //Activity page
  if (document.getElementById('activity') !== null) {

  }
  //Notes pages
  //News page
}


//Self generate avatar initials with if user Gravatar is unset
function defaultGravatarInitialsSG() {
  let gravatars = document.getElementsByClassName('gravatar');
  let usernames = document.getElementsByClassName('user active');
  //alert(gravatars.length);
  //alert(usernames.length);
  for (let i = 0; i < gravatars.length; i++) {
    //gravatars[i].remove();
    //gravatars[i].innerHTML.replace(gravatars[i].nodeName.toLowerCase(), 'div');
    //alert(gravatars[i].nodeName);
    alert(gravatars[i].src + " " + usernames[i].innerText);
  }
}
