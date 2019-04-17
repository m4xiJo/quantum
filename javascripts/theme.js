document.addEventListener("DOMContentLoaded", function(e) {
  moveDivsAround();
});

function moveDivsAround() {
  if (document.getElementById('main-menu')) document.getElementById('top-menu').insertAdjacentElement('beforeend', document.getElementById('main-menu'));
  if (document.getElementById('top-menu')) document.getElementById('main').insertAdjacentElement('beforeend', document.getElementById('top-menu'));
  if (document.getElementById('header')) document.getElementById('wrapper').insertAdjacentElement('beforeend', document.getElementById('header'));
  if (document.getElementById('main')) document.getElementById('wrapper').insertAdjacentElement('beforeend', document.getElementById('main'));
  if (document.getElementById('footer')) document.getElementsByTagName('body')[0].insertAdjacentElement('beforeend', document.getElementById('footer'));
  if (document.getElementById('quick-search')) document.getElementById('quick-search').insertAdjacentHTML('beforeend', '<div id="user-options" style="display: inline-block; width: 25px; background: red; height: 25px; margin-bottom: -10px;"></div>');
  if (document.getElementById('account')) document.getElementById('user-options').insertAdjacentElement('beforeend', document.getElementById('account'));
  if (document.getElementById('loggedas')) document.getElementById('user-options').insertAdjacentElement('beforeend', document.getElementById('loggedas'));
  if (document.getElementsByClassName('breadcrumbs')[0]) document.getElementById('content').insertAdjacentElement('afterbegin', document.getElementsByClassName('breadcrumbs')[0]);
  if (document.querySelector('.splitcontentleft > ul')) {
    document.getElementsByClassName('splitcontentleft')[0].insertAdjacentHTML('afterbegin', '<div class="box"><div>');
    document.querySelector('.splitcontentleft > .box').insertAdjacentElement('afterbegin', document.querySelector('.splitcontentleft > ul'));
  }
  //if (document.getElementById('main-menu')) document.getElementById('main-menu').insertAdjacentElement('afterbegin', document.querySelector('#top-menu > ul'));

  //Remove useless elements
  if (document.getElementsByClassName('tabs-buttons')[0]) document.getElementsByClassName("tabs-buttons")[0].remove(1);
  //if (document.getElementById('wrapper')) document.getElementById("wrapper").remove(1);
  if (document.getElementById('wrapper2')) document.getElementById("wrapper2").remove(1);
  if (document.getElementById('wrapper3')) document.getElementById("wrapper3").remove(1);


}
