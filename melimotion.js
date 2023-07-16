var circleItems = document.querySelectorAll('.circle-item');

circleItems.forEach(function(item) {
  var circleContent = item.querySelector('.circle-content');
  var imageDescription = item.querySelector('.image-description');
  var overlay = item.querySelector('.overlay');

  circleContent.addEventListener('click', function() {
    circleContent.style.display = 'none';
    imageDescription.style.display = 'block';
    overlay.style.display = 'block';
  });

  imageDescription.addEventListener('click', function() {
    circleContent.style.display = 'flex';
    imageDescription.style.display = 'none';
    overlay.style.display = 'none';
  });

  item.addEventListener('click', function(e) {
    e.stopPropagation(); // Evita que el evento de clic se propague a elementos padre
  });
});
