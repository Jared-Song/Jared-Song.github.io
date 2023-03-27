function setupGallery() {
  const gallery = document.getElementById("gallery");
  const handleOnDown = (e) => (gallery.dataset.mouseDownAt = e.clientX);

  const handleOnUp = () => {
    gallery.dataset.mouseDownAt = "0";
    gallery.dataset.prevPercentage = gallery.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (gallery.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(gallery.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(gallery.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    gallery.dataset.percentage = nextPercentage;

    gallery.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of gallery.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };
  window.onmouseup = (e) => handleOnUp(e);
  window.onmousedown = (e) => handleOnDown(e);

  // touch events
  window.ontouchstart = (e) => handleOnDown(e.touches[0]);
  window.ontouchend = (e) => handleOnUp(e.touches[0]);
  window.onmousemove = (e) => handleOnMove(e);
  window.ontouchmove = (e) => handleOnMove(e.touches[0]);
}
