document.addEventListener("DOMContentLoaded", function () {
  var body = document.getElementById('sparkle-background');
  var template = document.querySelector('.template.sparkle');
  var stars = 500;
  var sparkle = 20;

  var size = 'small';
  var createStar = function () {
    var star = template.cloneNode(true);
    star.removeAttribute('id');
    star.style.top = (Math.random() * 100) + '%';
    star.style.left = (Math.random() * 100) + '%';
    star.style.animationDelay = (Math.random() * sparkle) + 's';
    star.style.WebkitAnimationDelay = (Math.random() * sparkle) + 's';
    star.style.MozAnimationDelay = (Math.random() * sparkle) + 's';
    star.classList.add(size);
    body.appendChild(star);
  };

  for (var i = 0; i < stars; i++) {
    if (i % 2 === 0) {
      size = 'small';
    } else if (i % 3 === 0) {
      size = 'medium';
    } else {
      size = 'large';
    }

    createStar();
  }
});  