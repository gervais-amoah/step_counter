const monthSvg = d3.select("svg.month");
const circleTags = monthSvg.selectAll("circle");
const monthsGroup = monthSvg.selectAll("g").data(monthData).enter().append("g");

monthsGroup.attr("transform", (d, i) => {
  const x = (i % 7) * 120 + 60;
  const y = Math.floor(i / 7) * 150 + 60;
  return `translate(${x}, ${y})`;
});

const radiusScale = d3.scaleSqrt().domain([0, 30000]).range([1, 50]);
const statsFormat = d3.format(",.0f");

monthsGroup
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", radiusScale(10000))
  .attr("class", "ring");

monthsGroup
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", radiusScale(20000))
  .attr("class", "ring");

monthsGroup
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 5)
  .attr("class", "actual")
  .transition()
  .duration(250)
  .delay((d, i) => i * 50)
  .ease(d3.easeCubicIn)
  .attr("r", (d, i) => radiusScale(d));

monthsGroup
  .append("text")
  .attr("class", "day")
  .attr("x", 0)
  .attr("y", 70)
  .text((d, i) => i + 1);

monthsGroup
  .append("text")
  .attr("class", "steps")
  .attr("x", 0)
  .attr("y", 70)
  .text((d) => statsFormat(d));
