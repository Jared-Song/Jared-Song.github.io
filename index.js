let interval = null;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function setup() {
  setupHeader();
  setupIntro();
}

function setupHeader() {
  const left = document.getElementById("left-side");
  const header = document.getElementById("header");
  const handleMove = (e) => {
    left.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
  };

  header.onmousemove = (e) => handleMove(e);
  header.ontouchmove = (e) => handleMove(e.touches[0]);
}

function setupIntro() {
  document.getElementById("greeting").onmouseover = (event) => {
    text = "I'm Jared. \n Nice to meet you!";
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

      iteration += 1 / 3;
    }, 30);
    document.getElementById("greeting").onmouseover = null;
  };
}

function resetHeadline() {
  clearInterval(interval);
  setupIntro();
  document.getElementById(
    "greeting"
  ).innerHTML = `Hi!<span class="emoji">😇</span>`;
}
