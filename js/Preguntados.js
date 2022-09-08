function Desicion(check, horas, texts, p, text) {

  var check1 = check;
  let pestañaChat = document.createElement("span");
  scrollPro();
  if (text.includes("Hola") || text.includes("Buenas tardes") || text.includes("Buenos días") ) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "hola, como estas 😇";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    responsiveVoice.speak('Hola,como estas', 'Spanish Latin American Female');
    BocaADARapido(1800);
  }
  else if (
    text.includes("y tú") || text.includes("Cómo estás") || text.includes("estoy bien")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "estoy muy bien gracias, ¿ Puedo ayudarte en algo ? 😊";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    responsiveVoice.speak('Estoy muy bien gracias,Puedo ayudarte en algo?', 'Spanish Latin American Female');
    BocaADARapido(2750);
  }

  else if (text.includes("gracias") || text.includes("Muy bien gracias") || text.includes("Muchas gracias") || text.includes("Gracias")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "De nada, es un placer 😇";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    responsiveVoice.speak('De nada, es un placer ', 'Spanish Latin American Female');
    BocaADARapido(1800);

  } else if (text.includes("Cómo te llamas") ||  text.includes("quién eres") || text.includes("preséntate") || text.includes("presentación")||text.includes(" presentes")   ) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Mi nombre es ADA,soy la asistente virtual de la CAC mucho gusto🤭 ";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    
    BocaADARapido(4300);
    responsiveVoice.speak('Mi nombre es ADA,soy el asistente virtual de la CAC mucho gusto', 'Spanish Latin American Female');
  }














  // Preguntas 
  // Preguntas 
  else if (text.includes("siscat") || text.includes("siscac") || text.includes("sis Cat") || text.includes("Qué es SISCAC") || text.includes("siscap") || text.includes("scac")  ) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "SISCAC es la plataforma dispuesta por la CAC, para que las IPS y EPS puedan registrar y validar en tiempo real la información de los pacientes de alto costo. 🤓 ";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    responsiveVoice.speak('siscat es la plataforma dispuesta por la cat para que las IPS y EPS puedan registrar y validar ', 'Spanish Latin American Female');
    BocaADA(6900);
    EsperaAudio("en tiempo real la información de los pacientes de alto costo,Mira este video", 7500, 5000, "btn101");


  } else if (text.includes("abdicar") || text.includes("auditar") || text.includes("Autocad") || text.includes("Qué es AudiCAC") || text.includes("Audi car")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "AudiCAC es Aplicativo dispuesto para la auditoria de pacientes reportados por las entidades, aqui te muestro un video. 😉";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    responsiveVoice.speak('audicat es un Aplicativo dispuesto para la auditoria de pacientes reportados por las entidades', 'Spanish Latin American Female');

    BocaADA(6000);
    EsperaAudio("Aqui un video", 7000, 1800, "btn100");
  }

  else if (text.includes("blockchain") || text.includes("bloch") || text.includes("¿Que es el blockchain?")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "La implementacion de blockchain en la salud nos permite tener datos limpios y trasparentes asi aumentando la seguridad de la informacion,dame un momento 😉";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    BocaADA(6000);
    responsiveVoice.speak('la implementacion de blockchain en la salud nos permite tener datos limpios y trasparentes. ', 'Spanish Latin American Female');

    EsperaAudio("así aumentando la seguridad de la informacion, dame un momento", 7000, 4100, "btn100");

  }else if(text.includes("datos") || text.includes("dato") || text.includes("información") || text.includes("verifica")){

            if (text.includes("¿Cómo llega la información a la  CAC?") || text.includes("llega") || text.includes("ciclo")  )    {
              p = document.createElement("p");
              p.classList.add("replay");
              p.innerText = "Los datos son los modelos colaborativos de las interfaces que se vuelven fundamentales para la toma de  decisiones,Dame un segundo y te doy mas detalles 😀";
              texts.appendChild(p).appendChild(horas);
              p.appendChild(check);
              p.appendChild(pestañaChat);
              pestañaChat.classList.add("Pestaña");
              BocaADA(6000);
          
              responsiveVoice.speak('la información y los datos que son suministrados a la CAC se vuelven fundamentales para la toma de', 'Spanish Latin American Female');
              EsperaAudio("decisiones,Dame un segundo y te doy mas detalles", 6800, 3500, "btn110");
            }
          else if(text.includes("¿Como se verifica la calidad del dato en la CAC?") || text.includes("verifica") || text.includes("calidad")|| text.includes("confiables")  || text.includes("verídicos")  ){
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "Nosotros promovemos la calidad del dato como eje de toma de decisiones confiables, mira esto 😊";
            texts.appendChild(p).appendChild(horas);
            p.appendChild(check);
            p.appendChild(pestañaChat);
            pestañaChat.classList.add("Pestaña");
            
            responsiveVoice.speak('nosotros promovemos la calidad del dato como eje de toma de decisiones confiables, mira esto ', 'Spanish Latin American Female');
            QuebuenaP(6000,"btn111")
          }else{
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "No tengo ese tipo de informacion, dimela de otra forma 😥";
            texts.appendChild(p).appendChild(horas);
            p.appendChild(check);
            p.appendChild(pestañaChat);
            pestañaChat.classList.add("Pestaña");

            BocaADARapido(1000);
            responsiveVoice.speak('No tengo ese tipo de informacion, dimela de otra forma ', 'Spanish Latin American Female');
          } 

}
  else if (text.includes("¿Que es HIGIA?") || text.includes("higia") || text.includes("lejía") || text.includes("ysy a") || text.includes("exigía") || text.includes("hégira") || text.includes("égida") || text.includes("y gía")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "HIGIA es una Herramienta interactiva de inteligencia de negocios que dispone información epidemiológica de las diferentes enfermedades de alto costo,dame un momento🤓";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");
    BocaADA(6000);
    responsiveVoice.speak('igia es una Herramienta interactiva de inteligencia de negocios que dispone informacion', 'Spanish Latin American Female');
    EsperaAudio("epidemiológica de las diferentes enfermedades de alto costo,dame un momento", 6500, 4800, "btn103");
  } else if (text.includes("¿Que es ARCAC?") || text.includes("arca") || text.includes("arcade") || text.includes("Art Attack") || text.includes("Arkham")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Claro, dame un segundo";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    QuebuenaP(2000, "btn104");
    responsiveVoice.speak('Claro, dame un segundo', 'Spanish Latin American Female');

  } else if (text.includes("modelo predictivo poblacional") || text.includes("modelo predictivo") || text.includes("grc") || text.includes("¿Qué es el modelo predictivo poblacional?")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Nadie me habia hecho esa pregunta.Dame un segundo 🤩";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    QuebuenaP(4000, "btn105");
    responsiveVoice.speak('Nadie me habia hecho esa pregunta.Dame un segundo', 'Spanish Latin American Female');

  }
  
  else if (text.includes("herramientas técnicas") || text.includes("¿Qué herramientas técnicas provee la CAC?")|| text.includes("técnica")|| text.includes("técnicas") )  {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Que buena pregunta,dame un momento";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    QuebuenaP(2500, "btn106");
    responsiveVoice.speak('que buena pregunta,dame un momento', 'Spanish Latin American Female');

  } else if (text.includes("¿Cuáles son los consensos que genera la CAC?") || text.includes("conceptos") || text.includes("consejos") || text.includes("consenso") || text.includes("consensos")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Que buena pregunta,dame un momento";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);

    pestañaChat.classList.add("Pestaña");
    QuebuenaP(2500, "btn107");
    responsiveVoice.speak('que buena pregunta,dame un momento', 'Spanish Latin American Female');

  } 
  
  
  else if(text.includes("libro") || text.includes("libros") || text.includes("enfermedades de alto costo")|| text.includes("iacc") || text.includes("iasfe")|| text.includes("investigación")){
    if (text.includes("investigación")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Dame un segundo  porfavor";
      texts.appendChild(p).appendChild(horas);
      p.appendChild(check);
      p.appendChild(pestañaChat);
      pestañaChat.classList.add("Pestaña");
      QuebuenaP(2400, "btn109");
      responsiveVoice.speak('Dame un segundo porfavor', 'Spanish Latin American Female');
    }
    else if (text.includes("¿Como acceder a los libros de situación de EAC?") || text.includes("enfermedades de alto costo") || text.includes(" b y H sida") || text.includes("artritis") || text.includes("b&h y Sida") || text.includes("hemofilia") || text.includes("cáncer") || text.includes("enfermedad renal") || text.includes("hepatitis b")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Que buena pregunta,dame un momento";
      texts.appendChild(p).appendChild(horas);
      p.appendChild(check);
      p.appendChild(pestañaChat);
  
      pestañaChat.classList.add("Pestaña");
  
      QuebuenaP(2500, "btn108");
      responsiveVoice.speak('que buena pregunta,dame un momento', 'Spanish Latin American Female');
  
    } 
    else{
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Lo siento, no entiendo tu pregunta";
      texts.appendChild(p).appendChild(horas);
      p.appendChild(check);
      p.appendChild(pestañaChat);
      pestañaChat.classList.add("Pestaña");
      BocaADARapido(2800);
      responsiveVoice.speak('Lo siento, no entiendo tu pregunta', 'Spanish Latin American Female');
    }
  }
  
  
  
  
  
  
  
  
  else if (text.includes("¿Analítica avanzada aplicada en la salud?")  || text.includes("analítica")|| text.includes("aplicada")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "La analítica avanzada aplicada en salud, promoviendo la cultura data driven 🤖,mira esto";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");
    QuebuenaP(6000, "btn112");
    responsiveVoice.speak('La analítica avanzada aplicada en salud, promoviendo la cultura data driven,mira esto', 'Spanish Latin American Female');
  }


// HITOSCAC
else if (text.includes("¿Qué No es la Cuenta de Alto Costo?") || text.includes("qué no es la cuenta alto costo") || text.includes("qué no es la caca")  ) {

  p = document.createElement("p");
  p.classList.add("replay");
  p.innerText = "Nadie me habia hecho esa pregunta";
  texts.appendChild(p).appendChild(horas);
  p.appendChild(check);

  p.appendChild(pestañaChat);
  pestañaChat.classList.add("Pestaña");

  p1 = document.createElement("p");
  p1.classList.add("replay");
  p1.innerText = "Nadie me habia hecho esa pregunta";
  texts.appendChild(p1).appendChild(horas);
  p1.appendChild(check);
  




  


  // BocaADA(6000);
  // responsiveVoice.speak('La implementacion de blockchain en la salud nos permite tener datos limpios y trasparentes.', 'Spanish Latin American Female');

  // EsperaAudio("así aumentando la seguridad de la informacion, dame un momento", 7000, 4100, "btn100");

}


// HITOSCAC















else if (text.includes("caca") || text.includes("cuenta de alto costo") || text.includes("¿Que es la CAC?") || text.includes("la cac") || text.includes("cuenta")) {
  p = document.createElement("p");
  p.classList.add("replay");
  p.innerText = " LA CAC (Cuenta de Alto Costo) 🥰 Somos una institución que facilita la gestión de las entidades del sistema de salud mediante la generación de información objetiva y confiable.Ya te doy mas detalles 😍";

  texts.appendChild(p).appendChild(horas);  
  p.appendChild(check);
  p.appendChild(pestañaChat);
  pestañaChat.classList.add("Pestaña");

  responsiveVoice.speak('Somos una institución que facilita la gestión de las entidades del sistema de salud, ', 'Spanish Latin American Female');
  BocaADA(5300);
  EsperaAudio("mediante la generación de información objetiva y confiable, ya te doy mas detalles", 5900, 5600, "btn102");
  
}else if (text.includes("una pregunta") || text.includes("tengo una pregunta")) {
  p = document.createElement("p");
  p.classList.add("replay");
  p.innerText = "Claro dimela 😉";

  texts.appendChild(p).appendChild(horas);
  p.appendChild(check);
  p.appendChild(pestañaChat);
  pestañaChat.classList.add("Pestaña");

  responsiveVoice.speak('Claro dimela', 'Spanish Latin American Female');
  BocaADARapido(1800);

}

  else {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Puedes decirmelo de otra forma 😊?";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    BocaADARapido(2000);
    responsiveVoice.speak('Puedes decirmelo de otra forma', 'Spanish Latin American Female');

  }
  scrollPro();

}