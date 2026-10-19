document.querySelectorAll('[data-set-region]').forEach(function(b){
  b.addEventListener('click',function(){
    var r=b.getAttribute('data-set-region');
    document.documentElement.dataset.region=r;
    try{localStorage.setItem('ld-region',r);}catch(e){}
  });
});
// Newsletter: forms send the email to Substack (see the form's action)
document.querySelectorAll('[data-signup]').forEach(function(f){
  f.addEventListener('submit',function(e){
    if(!f.getAttribute('action')){e.preventDefault();}
    f.hidden=true;
    var t=f.nextElementSibling; if(t) t.hidden=false;
  });
});
// Mobile menu
var menuBtn=document.querySelector('.menu-btn');
if(menuBtn){
  menuBtn.setAttribute('aria-expanded','false');
  menuBtn.addEventListener('click',function(){
    var open=document.body.classList.toggle('menu-open');
    menuBtn.setAttribute('aria-expanded',open?'true':'false');
    menuBtn.textContent=open?'Close':'Menu';
  });
}
// Email links: the address is assembled here so it never appears whole in the page source
document.querySelectorAll('[data-user][data-domain]').forEach(function(a){
  var e=a.getAttribute('data-user')+'@'+a.getAttribute('data-domain');
  a.href='mailto:'+e;
  a.textContent=e;
});
