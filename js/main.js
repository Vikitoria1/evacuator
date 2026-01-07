const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__button');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
  document.body.classList.toggle('menu-is-open');
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    menu.classList.remove('menu--open');
    document.body.classList.remove('menu-is-open');

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;

      function smoothScrollTo(endPos) {
        const startPos = window.pageYOffset;
        const distance = endPos - startPos;
        const duration = 800;
        let startTime = null;

        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const nextStep = startPos + distance * (timeElapsed / duration);

          window.scrollTo(0, nextStep);

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          } else {
            window.scrollTo(0, endPos);
          }
        }
        requestAnimationFrame(animation);
      }

      smoothScrollTo(targetPosition);
    }
  });
});