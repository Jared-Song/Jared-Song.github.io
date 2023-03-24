function setup() {
  setupHeader();
  setupIntro();
}

function setupHeader() {
  const left = document.getElementById("left-side");
  
  const handleMove = (e) => {
    left.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
  };

  document.onmousemove = (e) => handleMove(e);
  document.ontouchmove = (e) => handleMove(e.touches[0]);
}

function setupIntro() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector("h2").onmouseover = (event) => {
    text = "I'm Jared.";
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = text
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 4;
    }, 30);
  };
}

function resetHeadline() {
  document.querySelector("h2").innerText = "Hi!😇";
}
