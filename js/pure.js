console.log("loaded");

const data = [100, 87, 27, 66, 45, 38];

const todaySvg = document.querySelector("svg");

data.forEach((d, i) => {
  const rectTag = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  rectTag.setAttribute("x", i * 36);
  rectTag.setAttribute("y", 112 - d);
  rectTag.setAttribute("width", 24);
  rectTag.setAttribute("height", d);

  todaySvg.appendChild(rectTag);
});
