  //modal Video
  $(".demo02").animatedModal({
    animatedIn: 'lightSpeedIn',
    animatedOut: 'bounceOutDown',
    color: '#000000',
    width: '70% ',
    // width: '100% ',
    left: '33%',
    // left: '0%',
});

$(".circlein").animatedModal({
    animatedIn: 'lightSpeedIn',
    animatedOut: 'bounceOutDown',
    color: '#000000',
    width: '67%',
    left: '0%',
});


var vid = document.getElementById("myVideo");
var vid2 = document.getElementById("myVideo2");

function enableAutoplay(id, Video) {
    var idVideo = id;
    idVideo.setAttribute('src', Video);
    vid.autoplay = true;
    vid.load();
}
function disableAutoplay() {
    vid.autoplay = false;
    vid.load();
}

function enableAutoplayWhats(id, Video) {
    
    var idVideo = id;
    idVideo.setAttribute('src', Video);
    vid2.autoplay = true;
    vid2.load();
}
function disableAutoplayWhats() {
    vid2.autoplay = false;
    vid2.load();
}




document.getElementById("myVideo").addEventListener("ended", function () {
    document.getElementById("botonFinal").click();
});
document.getElementById("myVideo2").addEventListener("ended", function () {
    document.getElementById("botonFinalWhats").click();
});