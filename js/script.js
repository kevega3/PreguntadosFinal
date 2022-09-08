
// Horas
function Horas(){
  var currentTimes = new Date();
  var hourss = currentTimes.getHours();
  var minutess = currentTimes.getMinutes();

  if (minutess < 10) {
    var minutesSii = "0" + minutess;
  } else {
    var minutesSii = minutess;
  }
  var HorasString = "";
  HorasString =  hourss + ":" + minutesSii;
  
  return HorasString; 
}
// Horas




// HorasPrimerMensaje
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();

function HoraChatWhat() {
  var displayHours = document.querySelectorAll(".displayHours");

  if (minutes < 10) {
    var minutesSi = "0" + minutes;
  } else {
    var minutesSi = minutes;
  }
  displayHours[0].innerHTML = hours + ":" + minutesSi;
}
// HorasPrimerMensaje



// Saludo Youtube

function saludaSpoty() {

  var SaludarSpoty = document.getElementById("Saludar");
  if (hours < 24 && hours > 18) {
    SaludarSpoty.innerHTML = "Buenas Noches";
  } else if (hours > 1 && hours < 12) {
    SaludarSpoty.innerHTML = "Buenos Días";
  } else {
    SaludarSpoty.innerHTML = "Buenas Tardes";
  }

}

// Saludo Youtube

// ReconocimientoVoice
function activeVoice() { 

  $(".BloquearBoton").attr('disabled', 'disabled');
  $(".contenedorLista").addClass("opacado"); 
  
  QuitarBtonMi();
  PosicionUno();
  const texts = document.querySelector(".texts");
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  let p = document.createElement("p");
  let horas = document.createElement("span");
  let Phoras = document.createElement("span");
  let check = document.createElement("i");
  let pestaña = document.createElement("span");
  
  
  // fa-solid fa-check iconocheck
  recognition.addEventListener("result", (e) => {
    const text = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
    // inserta texto  
    texts.appendChild(p);
    p.classList.add("Persona");
    p.innerText = text;
    // inserta horas persona
    p.appendChild(Phoras);
    Phoras.innerHTML = Horas();
    Phoras.classList.add("displayHoursPersona");
    // inserta texto


    // insertaPestaña
    p.appendChild(pestaña);
    pestaña.classList.add("PestañaPersona");
  // insertaPestaña
    if (e.results[0].isFinal) {
      horas.innerHTML = Horas();
      horas.classList.add("displayHours");
      check.classList.add("fa-solid");
      check.classList.add("fa-check");
      check.classList.add("iconocheck");
      // inserta horas replay
      Desicion(check,horas,texts,p,text);
      p = document.createElement("p");
    }
  });
  recognition.addEventListener("end", () => {
    PonerQuitarBtonMi();
    $(".BloquearBoton").removeAttr('disabled');
    $(".contenedorLista").removeClass("opacado"); 
  });
  recognition.start();
}
// ReconocimientoVoice

// BotonesPreguntados

function Preguntados(pregunta) {
  // DesactivaBtn
  $(".BloquearBoton").attr('disabled', 'disabled');
  $(".contenedorLista").addClass("opacado"); 
  // DesactivaBtn
  const texts = document.querySelector(".texts");
  let p = document.createElement("p");
  let horas = document.createElement("span");
  let Phoras = document.createElement("span");
  let check = document.createElement("i");
  let pestaña = document.createElement("span");

  texts.appendChild(p);
  p.classList.add("Persona");
  p.innerText = pregunta;
  
  p.appendChild(Phoras);
  Phoras.innerHTML = Horas();
  Phoras.classList.add("displayHoursPersona");

  p.appendChild(pestaña);
  pestaña.classList.add("PestañaPersona");

  horas.innerHTML = Horas();
  horas.classList.add("displayHours");
  check.classList.add("fa-solid");
  check.classList.add("fa-check");
  check.classList.add("iconocheck");


  

  Desicion(check,horas,texts,p,pregunta);
}














































