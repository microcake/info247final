// INFO 247 - Final Project
// Donut Chart


var width = 250,
    height = 250,
    radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 50);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.population; });


//  

d3.csv("js/data.csv", function(error, data) {

var svg = d3.selectAll("#testd3").append("svg")
    .attr({
    "height": "1000px",
    "width": "1000px"
    })
    .append("g")
    .attr("transform", "translate(" + width/2 + "," + height/2 + ")");


  data.forEach(function(d) {
    d.population = +d.population;
    console.log(d.population)
  });

  var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  console.log("hi i'm here");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.age);
        console.log("hi i got here, my name is Earl"); });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.data.age; });

});