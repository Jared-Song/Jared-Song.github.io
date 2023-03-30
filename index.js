const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function setup() {
  setupHome();
  setupHeader();
  setupGallery();
  setupBlob();
  setupWordEffects();
}

function setupBlob() {
  const blob = document.getElementById("blob");

  window.onpointermove = (event) => {
    const { clientX, clientY } = event;

    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };
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

function setupWordEffects() {
  let links_interval;
  let projects_interval;
  const screen = document.querySelector(".screen");
  const links = document.getElementById("link-sub-heading");
  const projects = document.getElementById("projects-sub-heading");

  screen.onmouseenter = () => {
    clearInterval(links_interval);
    clearInterval(projects_interval);
    links_interval = setLetterInterval(links_interval, links);
    projects_interval = setLetterInterval(projects_interval, projects);
  };
}

function setLetterInterval(interval, element) {
  let iteration = 0;
  return setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return element.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iteration >= element.dataset.value.length) {
      clearInterval(interval);
    }
    iteration += 1 / 3;
  }, 30);
}
