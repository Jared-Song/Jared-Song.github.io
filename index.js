function setup() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector("h1").onmouseover = (event) => {
    text = "I'm Jared"
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
  document.querySelector("h1").innerText = "Hi!😇";
}