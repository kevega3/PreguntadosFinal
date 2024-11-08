let check = document.createElement("i");
let checkIncorrecto = document.createElement("i");
let triangule = document.createElement("span");
let Cuadrado = document.createElement("span");
let Circulo = document.createElement("span");
let rombo = document.createElement("span");


let preguntas_aleatorias = true;
let mostrar_pantalla_juego_términado = true;
let reiniciar_puntos_al_reiniciar_el_juego = true;

// Sonidos melos

var soundCorrect = new Audio();
soundCorrect.src = "../img/songs/Correcto.mp3";

var soundIncorret = new Audio();
soundIncorret.src = "../img/songs/Incorrecto.mp3";



function ActivaPreguntados() {
  base_preguntas = readText("../js/base-preguntas.json");
  interprete_bp = JSON.parse(base_preguntas);
  escogerPreguntaAleatoria();
};


// window.onload = function () {
//   base_preguntas = readText("../js/base-preguntas.json");
//   interprete_bp = JSON.parse(base_preguntas);
//   escogerPreguntaAleatoria();
// };

let pregunta;
let AudioPregunt;

let posibles_respuestas;
btn_correspondiente = [
  select_id("btn1VH"),
  select_id("btn2VH"),
  select_id("btn3VH"),
  select_id("btn4VH")
];
let npreguntas = [];

let preguntas_hechas = 0;
let preguntas_correctas = 0;

function escogerPreguntaAleatoria() {
  let n;
  if (preguntas_aleatorias) {
    n = Math.floor(Math.random() * interprete_bp.length);
  } else {
    n = 0;
  }

  while (npreguntas.includes(n)) {
    n++;
    if (n >= interprete_bp.length) {
      n = 0;
    }
    if (npreguntas.length == interprete_bp.length) {
      //Aquí es donde el juego se reinicia
      let iconoFinal;
      if (preguntas_correctas >= 2) {
        iconoFinal = "success";
      } else {
        iconoFinal = "error"
      }
      // validarPerdio o gano


      if (mostrar_pantalla_juego_términado) {
        
        swal.fire({
          title: "Juego finalizado",
          text:
            "Puntuación: " + preguntas_correctas + "/" + (preguntas_hechas),
          icon: iconoFinal
        });
      }
      if (reiniciar_puntos_al_reiniciar_el_juego) {
        preguntas_correctas = 0
        preguntas_hechas = 0
      }
      npreguntas = [];
    }
  }
  npreguntas.push(n);
  preguntas_hechas++;

  escogerPregunta(n);
}



function escogerPregunta(n) {
  pregunta = interprete_bp[n];
  AudioPregunta = pregunta.categoria;


  setTimeout(() => {
    select_id("pregunta").innerHTML = pregunta.pregunta;
  }, 2000);
  
  
  select_id("numero").innerHTML = n;
  let pc = preguntas_correctas;
  if (preguntas_hechas > 1) {
    select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas - 1);
  } else {
    select_id("puntaje").innerHTML = "";
  }

  style("imagen").objectFit = pregunta.objectFit;
  desordenarRespuestas(pregunta, AudioPregunta);

  if (pregunta.imagen) {
    select_id("imagen").setAttribute("src", pregunta.imagen);
    style("imagen").height = "200px";
    style("imagen").width = "100%";
  } else {
    style("imagen").height = "0px";
    style("imagen").width = "0px";
    setTimeout(() => {
      select_id("imagen").setAttribute("src", "");
    }, 500);
  }

}

function desordenarRespuestas(pregunta) {
  posibles_respuestas = [
    pregunta.respuesta,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3,
  ];
  posibles_respuestas.sort(() => Math.random() - 0.5);

  select_id("btn1VH").innerHTML = posibles_respuestas[0];
  select_id("btn2VH").innerHTML = posibles_respuestas[1];
  select_id("btn3VH").innerHTML = posibles_respuestas[2];
  select_id("btn4VH").innerHTML = posibles_respuestas[3];


  select_id("btn1VH").appendChild(triangule);
  triangule.classList.add("triangle-up");
  triangule.classList.add("IconoPreguntaVH");


  select_id("btn2VH").appendChild(Cuadrado);
  Cuadrado.classList.add("IconoPreguntaVH");
  Cuadrado.classList.add("Cuadrado-up");

  select_id("btn3VH").appendChild(Circulo);
  Circulo.classList.add("IconoPreguntaVH");
  Circulo.classList.add("Circulo-up");


  select_id("btn4VH").appendChild(rombo);
  rombo.classList.add("IconoPreguntaVH");
  rombo.classList.add("rombo");


  responsiveVoice.speak(AudioPregunta + ".A." + posibles_respuestas[0] + ".B." + posibles_respuestas[1] + ".C." + posibles_respuestas[2] + ".D." + posibles_respuestas[3], 'Spanish Latin American Female');


}

let suspender_botones = false;

function oprimir_btn(i) {
  if (suspender_botones) {
    return;
  }
  suspender_botones = true;
  if (posibles_respuestas[i] == pregunta.respuesta) {
    preguntas_correctas++;

    soundCorrect.play();


    btn_correspondiente[i].appendChild(check);
    check.classList.add("fa-solid");
    check.classList.add("fa-check");
    check.classList.add("IconoCheckVH");


    for (let k = 0; k < 4; k++) {
      btn_correspondiente[k].classList.add("HolaHola");
    }
  } else {
    soundIncorret.play();
    // btn_correspondiente[i].style.background = "red";
    for (let k = 0; k < 4; k++) {
      if (btn_correspondiente[k] == btn_correspondiente[i]) {

        btn_correspondiente[i].appendChild(checkIncorrecto);
        checkIncorrecto.classList.add("fas");
        checkIncorrecto.classList.add("fa-times");
        checkIncorrecto.classList.add("IconoCheckVHIncorrecto");

      } else {
        btn_correspondiente[k].classList.add("HolaHola");
      }
    }
  }
  for (let j = 0; j < 4; j++) {

    if (posibles_respuestas[j] == pregunta.respuesta) {

      btn_correspondiente[j].appendChild(check);
      check.classList.add("fa-solid");
      check.classList.add("fa-check");
      check.classList.add("IconoCheckVH");

      btn_correspondiente[j].classList.remove("HolaHola");
      break;
    }
  }


  setTimeout(() => {
    reiniciar();
    suspender_botones = false;
  }, 2000);
}


function reiniciar() {
  for (let k = 0; k < 4; k++) {
    btn_correspondiente[k].classList.remove("HolaHola");
    btn_correspondiente[k].classList.remove("Correctos");
  }
  btn_correspondiente[0].style.background = "red";
  btn_correspondiente[1].style.background = "blue";
  btn_correspondiente[2].style.background = "#D99D00";
  btn_correspondiente[3].style.background = "green";
  escogerPreguntaAleatoria();
}

function select_id(id) {
  return document.getElementById(id);
}

function style(id) {
  return select_id(id).style;
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}
