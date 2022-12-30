var moreElement = document.querySelector('.more');
  var isDisplayed = false;
  
  document.getElementById('btn').addEventListener('click', function() {
    if (isDisplayed) {
      moreElement.style.display = 'none';
      isDisplayed = false;
    } else {
      moreElement.style.display = 'flex';
      isDisplayed = true;
    }
  });

var jadwalElement = document.querySelector('.jadwal-list');
  var jadwalDisplayed = false;
  
  document.getElementById('jadwal').addEventListener('click', function() {
    if (jadwalDisplayed) {
      jadwalElement.style.display = 'none';
      jadwalDisplayed = false;
    } else {
      jadwalElement.style.display = 'flex';
      jadwalDisplayed = true;
    }
});

var tagihanElement = document.querySelector('.tagihan-list');
  var tagihanDisplayed = false;
  
  document.getElementById('tagihan').addEventListener('click', function() {
    if (tagihanDisplayed) {
      tagihanElement.style.display = 'none';
      tagihanDisplayed = false;
    } else {
      tagihanElement.style.display = 'flex';
      tagihanDisplayed = true;
    }
});