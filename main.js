const carousel = document.getElementById('productCarousel');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  const cardWidth = 28 * 16 + 24; // largura dos cards em px + margin (Tailwind)

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
// (Opcional) Auto-scroll a cada X segundos
   setInterval(() => {
     carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
   }, 5000);


 
   const card = carousel.querySelector('.min-w-80');
 
 
   nextBtn.addEventListener('click', () => {
     carousel.scrollBy({
       left: cardWidth,
       behavior: 'smooth'
     });
   });
 
   prevBtn.addEventListener('click', () => {
     carousel.scrollBy({
       left: -cardWidth,
       behavior: 'smooth'
     });
   });


