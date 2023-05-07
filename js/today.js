const todaySvg = d3.select("svg.today");
const todayGroups = todaySvg
  .selectAll("g")
  .data(todayData)
  .enter()
  .append("g")
  .attr("transform", (d, i) => `translate(${i * 36} ,0)`);

const barScale = d3.scaleLinear().domain([0, 2000]).range([1, 112]);
const hourFormat = d3.format("02");

todayGroups
  .append("rect")
  .attr("x", 0)
  .attr("y", 10)
  .attr("width", 24)
  .attr("height", 120)
  .attr("class", "transparent");

todayGroups
  .append("rect")
  .attr("x", 0)
  .attr("y", 130)
  .attr("width", 24)
  .attr("height", 1)
  .transition()
  .delay((d, i) => i * 20)
  .duration(300)
  .attr("y", (d) => 130 - barScale(d))
  .attr("height", (d) => barScale(d));

todayGroups
  .append("text")
  .attr("x", 12)
  .attr("y", 150)
  .attr("class", "hours")
  .text((d, i) => hourFormat(i));

todayGroups
  .append("text")
  .attr("x", 12)
  .attr("y", (d, i) => 120 - barScale(d))
  .attr("class", "steps")
  .text((d) => d);
