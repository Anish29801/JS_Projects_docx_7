const toggle = document.getElementById('main_dark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#e9e3db';
        body.style.color = '#0d1117';
        body.style.transition = '2s';
    }else{
        body.style.background = '#0d1117';
        body.style.color = '#e9e3db';
        body.style.transition = '3.5s';
    }
});