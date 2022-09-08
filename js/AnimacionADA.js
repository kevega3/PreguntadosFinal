

function BtonYoutube(){
    $(".ContenedorIntro").addClass("quit");
    $(".ContenedorVideosGeneral").removeClass("quit");

    saludaSpoty();
}   

function BtonWhats(){
    $(".ContenedorIntro").addClass("quit");
    $(".ContenedorWhatsAPPGeral").removeClass("quit");
    HoraChatWhat();
}   


function VolverInicioWhats(){
    $(".ContenedorWhatsAPPGeral").addClass("quit");
    $(".ContenedorIntro").removeClass("quit");
}   

function VolverInicioYoutube(){
    $(".ContenedorVideosGeneral").addClass("quit");
    $(".ContenedorIntro").removeClass("quit");
}   


























// function cambiaImg(){
//     var ADAIMg = document.getElementById("Ada");
//     ADAIMg.setAttribute('src', '../img/ADA/ADA_Respira.gif');
//     ADAIMg.setAttribute('style', 'width:73%');
//     $(".ContenedorBars").addClass("quit");
//     $(".BoxMicro").removeClass("quit");
//     $("#Ada").addClass("boxBoton");
// }

// function MiraYoutube(){
//     var ADAIMg = document.getElementById("Ada");
//     ADAIMg.setAttribute('src', '../img/ADA/ADA_Respira_izq.gif');
//     ADAIMg.setAttribute('style', 'width:73%');
//     var cancelarMicro = closeVoiceYoutub();
//     $(".ContenedorBars").addClass("quit");
//     $(".BoxMicro").removeClass("quit");
//     $("#Ada").addClass("boxBoton");
//     return cancelarMicro;
    
// }


var ADAIMg = document.getElementById("Ada");
function PosicionUno(){
    ADAIMg.setAttribute('src', '../img/ADA/ADA-lateral-der.gif');
    $(".ImgADA").addClass("boxBoton");
    ADAIMg.setAttribute('style', width="48%");
}



function BocaADA(time){
    ADAIMg.setAttribute('src', '../img/ADA/ADA-lateral-der-2.gif');
    $(".ContenedorBocca").removeClass("quit");
    setTimeout(()=>{
        $(".ContenedorBocca").addClass("quit");
    }, time);
    setTimeout(()=>{
        ADAIMg.setAttribute('src', '../img/ADA/ADA-lateral-der.gif'); 
    }, time);
}

function BocaADARapido(time){
    ADAIMg.setAttribute('src', '../img/ADA/ADA-lateral-der-2.gif');
    $(".ContenedorBocca").removeClass("quit");
    setTimeout(()=>{
        $(".ContenedorBocca").addClass("quit");
    }, time);
    setTimeout(()=>{
        ADAIMg.setAttribute('src', '../img/ADA/ADA-lateral-der.gif');
        $(".contenedorLista").removeAttr('disabled');
        $(".BloquearBoton").removeAttr('disabled', 'disabled');
        $(".contenedorLista").removeClass("opacado"); 
    }, time);
}

function QuebuenaP(time,btn){
    ADAIMg.setAttribute('src', '../img/ADA/ADA-lateral-der-2.gif');
    $(".ContenedorBocca").removeClass("quit");
    setTimeout(()=>{
        $(".ContenedorBocca").addClass("quit");
    }, time);
    setTimeout(()=>{
        ADAIMg.setAttribute('src', '../img/ADA/ADA-lateral-der.gif');
        $(".contenedorLista").removeAttr('disabled');
        $(".BloquearBoton").removeAttr('disabled', 'disabled');

    }, time);
    setTimeout(() => {
        document.getElementById(btn).click()
        $(".contenedorLista").removeAttr('disabled');
        $(".BloquearBoton").removeAttr('disabled', 'disabled');
        $(".contenedorLista").removeClass("opacado"); 
    }, time+500);
}


function EsperaAudio(texto,time,masTime,btn) {
    setTimeout(() => {
        responsiveVoice.speak(texto, 'Spanish Latin American Female');
        ADAIMg.setAttribute('src', '../img/ADA/ADA-lateral-der-2.gif');
        $(".ContenedorBocca").removeClass("quit");
    }, time);
    setTimeout(() => {
        $(".ContenedorBocca").addClass("quit");
        ADAIMg.setAttribute('src', '../img/ADA/ADA-lateral-der.gif');
    }, time+masTime);
    setTimeout(() => {
        $(".contenedorLista").removeAttr('disabled');
        $(".BloquearBoton").removeAttr('disabled', 'disabled');
        $(".contenedorLista").removeClass("opacado");
        document.getElementById(btn).click()
    }, time+masTime+800);
}

function QuitarBtonMi(){
    $(".BoxMicro").addClass("quit");
    $(".ContenedorBars").removeClass("quit");
}

function PonerQuitarBtonMi(){
    $(".BoxMicro").removeClass("quit");
    $(".ContenedorBars").addClass("quit");
}



// scroll 
function scrollPro(){
    $("#divu").animate({ scrollTop: $('#divu').prop("scrollHeight") }, 1000);
}
// scroll 

