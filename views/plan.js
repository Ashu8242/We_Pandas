const close = document.querySelector(".close-icon");
      const cardArticle = document.querySelector(".weplan-article");

      // close card
      close.addEventListener("click", () => {
        cardArticle.classList.toggle("hide-article");

        const selectedText = document.querySelectorAll("#weplan-title-select");

        console.log(selectedText[1]);
        selectedText[1].classList.toggle("animateText");
        selectedText[1].setAttribute("id", "");
      });

      // click animation
      const wePlan = document.querySelectorAll(".img-text p");

      // trigger event onclick
      wePlan.forEach((elem) => {
        elem.addEventListener("click", () => {
          elem.classList.toggle("animateText");
          elem.setAttribute("id", "weplan-title-select");
          cardArticle.classList.toggle("hide-article");

          // dynamically setting backround property for specific text

          const bgImg = document.querySelector(".weplan-article--right");
          const text = String(elem.classList[1]);

          const imgUrl = "../assets/images/weplan-images/";
          switch (text) {
            case "expansion":
              bgImg.id = `bg-${text}`;
              break;
            case "art":
              bgImg.id = `bg-${text}`;
              break;
            case "innovation":
              bgImg.id = `bg-${text}`;
              break;
            case "lifestyle":
              bgImg.id = `bg-${text}`;
              break;
            case "community":
              bgImg.id = `bg-${text}`;
              break;
          }
        });
      });

      
const btnE = document.getElementById('exp');
const btnA = document.getElementById('arti');
const btnI = document.getElementById('inno');
const btnL = document.getElementById('life');
const btnC = document.getElementById('comma');


btnE.addEventListener('click', () => {
  // hide button
  btnA.style.display = 'none';
  btnI.style.display = 'none';
  btnL.style.display = 'none';
  btnC.style.display = 'none';
});

btnA.addEventListener('click', () => {
  // hide button
  btnE.style.display = 'none';
  btnI.style.display = 'none';
  btnL.style.display = 'none';
  btnC.style.display = 'none';
});

btnI.addEventListener('click', () => {
  // hide button
  btnA.style.display = 'none';
  btnE.style.display = 'none';
  btnL.style.display = 'none';
  btnC.style.display = 'none';
});

btnL.addEventListener('click', () => {
  // hide button
  btnA.style.display = 'none';
  btnI.style.display = 'none';
  btnE.style.display = 'none';
  btnC.style.display = 'none';
});

btnC.addEventListener('click', () => {
  // hide button
  btnA.style.display = 'none';
  btnI.style.display = 'none';
  btnL.style.display = 'none';
  btnE.style.display = 'none';
});

  // show div
  const box = document.getElementById('close');

  box.addEventListener('click', () => {
    // show button
    btnA.style.display = 'block';
    btnI.style.display = 'block';
    btnL.style.display = 'block';
    btnC.style.display = 'block';
    btnE.style.display = 'block';
  });
