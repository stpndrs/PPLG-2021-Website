function toggleElements() {
  var moreElement = document.querySelector('.more');
  var jadwalElement = document.querySelector('.jadwal-list');
  var isDisplayed = false;
  var jadwalDisplayed = false;

  document.getElementById('btn').addEventListener('click', function() {
    if (isDisplayed) {
      moreElement.style.display = 'none';
      isDisplayed = false;
    } else {
      moreElement.style.display = 'flex';
      isDisplayed = true;
    }
  });

  document.getElementById('jadwal').addEventListener('click', function() {
    if (jadwalDisplayed) {
      jadwalElement.style.display = 'none';
      document.querySelector('.navbar').style.paddingBottom = '0';
      jadwalDisplayed = false;
    } else {
      jadwalElement.style.display = 'flex';
      document.querySelector('.navbar').style.paddingBottom = '5.5em';
      jadwalDisplayed = true;
    }
  });
}

if (window.innerWidth <= 600) {
  toggleElements();
}