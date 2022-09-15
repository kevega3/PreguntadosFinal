
function colores_google(n) {
  var colores_g = ["#FF0000", "#0027FF", "#06C000", "#FFFB00"];
  return colores_g[n % colores_g.length];
}

var padding = {
  top: 20,
  right: 40,
  bottom: 0,
  left: 0
},
  w = 500 - padding.left - padding.right,
  h = 500 - padding.top - padding.bottom,
  r = Math.min(w, h) / 2,
  rotation = 0,
  oldrotation = 0,
  picked = 100000,
  oldpick = []
var c20 = d3.scale.category20();







var data = [{
  "value": 1,
  "question": "What CSS property is used for specifying the area between the content and its border?",
  "color": colores_google(0),
  "ColorCuerpo": "Eres el equipo rojo, Primera pregunta",
  "colorEquipo": "Rojo"
}, // padding
{

  "value": 1,
  "question": "What CSS property is used for changing the font?",
  "color": colores_google(1),
  "ColorCuerpo": "Eres el equipo  Azul, Primera pregunta",
  "colorEquipo": "Azul"
}, //font-family
{
  "value": 1,
  "question": "What CSS property is used for changing the font?",
  "color": colores_google(2),
  "ColorCuerpo": "Eres el equipo Verde, Primera pregunta",
  "colorEquipo": "Verde"
}, //font-family
{
  "value": 1,
  "question": "What CSS property is used for changing the font?",
  "color": colores_google(3),
  "ColorCuerpo": "Eres el equipo Amarillo, Primera pregunta",
  "colorEquipo": "Amarillo"
},
];


var svg = d3.select('#chart')
  .append("svg")
  .data([data])
  .attr("width", w + padding.left + padding.right)
  // .attr("class", "VelozIn") Agrega Clase ome 
  .attr("height", h + padding.top + padding.bottom);
var container = svg.append("g")
  .attr("class", "chartholder")
  .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");
var vis = container
  .append("g");



var pie = d3.layout.pie().sort(null).value(function (d) {
  return 1;
});
var arc = d3.svg.arc().outerRadius(r);

var arcs = vis.selectAll("g.slice")
  .data(pie)
  .enter()
  .append("g")
  .attr("class", "slice");
arcs.append("path")
  .attr("fill", function (d, i) {
    return colores_google(i);
  })
  .attr("d", function (d) {

    return arc(d);
  });




arcs.append("text").attr("transform", function (d) {
  d.innerRadius = 0;
  d.outerRadius = r;
  d.angle = (d.startAngle + d.endAngle) / 2;
  return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
})

container.on("click", spin);

function spin(d) {
  container.on("click", null);
  //all slices have been seen, all done
  console.log("OldPick: " + oldpick.length, "Data length: " + data.length);










  if (oldpick.length == data.length) {
    console.log("done");
    container.on("click", null);
    return;
  }
  var ps = 360 / data.length,
    pieslice = Math.round(1440 / data.length),
    rng = Math.floor((Math.random() * 1440) + 360);
  rotation = (Math.round(rng / ps) * ps);
  picked = Math.round(data.length - (rotation % 360) / ps);
  picked = picked >= data.length ? (picked % data.length) : picked;
  if (oldpick.indexOf(picked) !== -1) {
    d3.select(this).call(spin);
    return;
  } else {
    oldpick.push(picked);
  }
  rotation += 90 - Math.round(ps / 2);


  vis.transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function () {


      //Marca La pregunta como vista pa mark question as seen
      // d3.select(".slice:nth-child(" + (picked + 1) + ") path")
      //   .attr("fill", "opacity: .7");
      //Marca La pregunta como vista pa mark question as seen

      //Aqui llena la pregunta pa
      // d3.select("#question h1")
      //   .text(data[picked].question);
      //Aqui llena la pregunta pa


      Muestracolor(data[picked].color, data[picked].colorEquipo);

      oldrotation = rotation;
      container.on("click", spin);
    });
}


function Muestracolor(color, ColorEquip) {
  let HablaADAPues = data[picked].ColorCuerpo;
  responsiveVoice.speak(HablaADAPues, 'Spanish Latin American Female');
  setTimeout(() => {
    svg.attr("class", "quit");
  }, 2000);
  setTimeout(() => {
    $(".contenedorVH").removeClass("quit");
  }, 2000);

  let idColor = document.getElementById("ColorEquipo");
  idColor.style.backgroundColor = color;

  ActivaPreguntados();

}






//Flecha pa
svg.append("g")
  // .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
  .attr("transform", "translate(465,260)")
  .append("path")
  // .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
  .attr("d", "M-30.5,0L0,20.5L0,-20.5Z")
  .style({
    "fill": "white",

  });

//draw spin circle
container.append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 80)
  .style({
    "fill": "white",
    "cursor": "pointer",
    "box-shadow": "0 0.15em 0 rgba(0, 0, 0, 0.25)"
  });






//spin text
container.append("text")
  .attr("x", 0)
  .attr("y", 15)
  .attr("text-anchor", "middle")

  .style({
    "font-weight": "bold",
    "font-size": "35px",
    "color": "#B5B5B5",
    "font-family": "'Work Sans', sans-serif"

  })
  .text("Girar");

function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function (t) {
    return "rotate(" + i(t) + ")";
  };
}

function getRandomNumbers() {
  var array = new Uint16Array(1000);
  var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
  if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
    window.crypto.getRandomValues(array);
    console.log("works");
  } else {
    for (var i = 0; i < 1000; i++) {
      array[i] = Math.floor(Math.random() * 100000) + 1;
    }
  }
  return array;
}



