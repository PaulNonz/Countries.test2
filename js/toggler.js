const buttonTuggler = document.getElementById('navbar-button-toggler');
const body = document.getElementById('entire-body');
const navLogo = document.getElementsByTagName('a')[0];
const navBgCol = document.getElementById('padder');
const searcher = document.getElementById('searcher');
const filterer =document.getElementById('filterer');
const imgCh = document.getElementById('img-sizer');
const searcherImg = document.getElementById('searcher-img');
const filterImg = document.getElementById('filterer-img');


let changeCol = true;

buttonTuggler.addEventListener('click', function toggle(value) {
        if (changeCol) {
                body.style.backgroundColor = '#212E37';
                buttonTuggler.textContent = 'Light Mode';
                buttonTuggler.style.color = '#EFF1F0';
                buttonTuggler.style.backgroundColor = '#2B3743';
                navLogo.style.color = '#EFF1F0';
                navBgCol.style.backgroundColor = '#2B3743';
                searcher.style.color = '#EFF1F0';
                searcher.style.backgroundColor = '#2B3743';
                filterer.style.color = '#EFF1F0';
                filterer.style.backgroundColor = '#2B3743';
                imgCh.src = 'img/2.Moon-_Sleep_-Night.png';
                filterImg.src = 'img/6.right.arrow.night.png';
                searcherImg.src = './img/3.search-icon-night.png';
          } else {
                body.style.backgroundColor = '#EFF1F0';
                buttonTuggler.textContent = 'Dark Mode';
                buttonTuggler.style.color = 'black';
                buttonTuggler.style.backgroundColor = '#EFF1F0';
                navLogo.style.color = 'black';
                navBgCol.style.backgroundColor = '#EFF1F0';
                searcher.style.color = 'black';
                searcher.style.backgroundColor = '#EFF1F0';
                filterer.style.color = 'black';
                filterer.style.backgroundColor = '#EFF1F0';
                imgCh.src = './img/1.Moon-_Sleep_-Day.png';
                filterImg.src = './img/6.right.arrow.day.png';
                searcherImg.src = './img/4.search-icon-day.png';
        } 
        changeCol = !changeCol
});



