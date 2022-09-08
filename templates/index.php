<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <link rel="stylesheet" href="../css/ModalAnimacion.css">
    <link rel="stylesheet" href="../css/stilos.css">
    <link rel="stylesheet" href="../css/bton.css">
    <link rel="stylesheet" href="../css/reload.css">
    <link rel="stylesheet" href="../css/animacionAda.css">
    <link rel="stylesheet" href="../css/AnimateVoice.css">
    <link rel="stylesheet" href="../css/Videos.css">
    <link rel="stylesheet" href="../css/spriteAda.css">
    <link rel="stylesheet" href="../css/ADA.css">
    <link rel="stylesheet" href="../css/Preguntados.css">
    <link rel="stylesheet" href="../css/PreguntadosVih.css">
    <!-- MODAL MICRO -->
    <link rel="stylesheet" href="../css/botnMin.css">
    <link rel="stylesheet" href="../css/chatBot.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css">
    <!-- MODAL MICRO -->

    <link rel="icon" href="../Img/simbolo_cac_color.png" type="image/gif" sizes="16x16">

    <!--Fuentes-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,700&display=swap"
        rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../css/bootstrap.min.css">

    <!-- Comando de voz -->

    <!--Voice ADA  -->
    <script src="../js/responsivevoice.js"></script>
    <title>15 años </title>
</head>

<body style="
font-family: 'Montserrat', sans-serif;
font-weight: bold;">
    </style>

    <div class="contenedorGeneral container-fluid">
        <!-- Intro -->
        <div class="ContenedorIntro quit box ">
            <div class="row">
                <div class="col-3 ColumnaIntroADA  ">
                    <img class="LogoCACIntro" src="../img/LOGO CAC_Colores y Blanco.png" alt="" width="95%">
                </div>
                <div class="col-6 ColumnaIntroADA ">

                    <?php include('BotonesIntro.html')?>

                    <img class="ADAFREntre" src="../img/ADA/ADAFrente.gif" alt="" width="95%">
                </div>
                <div class="col-3 ColumnaIntroADA">
                    <img class="Logo15AñosIntro" src="../img/15-años-logo-NegroDERE.png" alt="" width="75%">
                </div>
            </div>
        </div>
        <!-- Intro -->



        <!-- Videos -->
        <div class="ContenedorVideosGeneral  box">
            <div class="row">

                <div class="col-6  ColumnVideosContenedors1  ">
                    <?php include("PreguntadosVih.html")?>
                </div>

                <div class="col-6 ContenedorADAYoutube">
                    <?php //include("AdaYoutube.html")?>
                </div>
            </div>
        </div> <!-- ContenedorGenralVideos -->
        <!-- Videos -->






        <!-- WhatsApp  -->
        <div class="ContenedorWhatsAPPGeral quit  box ">
            <div class="row">
                <div class="col-5 ContenedorADAWhast">
                    <?php include("AdaWhats.html"); ?>
                    <?php include("VideosWhats.html"); ?>
                </div>
                <div class="col-3 ContenedorPreguntados">
                    <?php include("Preguntados.html"); ?>
                </div>
                <div class="col-4 ColumnBtonsContenedors">
                    <?php include("ModalMin.html"); ?>
                </div>
            </div>

        </div><!-- finalContenedorWhats -->
        <!-- WhatsApp  -->













        <div class="Footer ">
        <?php  include('Footer.html')?>
    </div>


    </div>
    <!--Final ContenedorGeral-->





    





    <?php include('ModalVideo.html') ?>



    <script src="../js/jquery.min.js"></script>
    <script src="../js/animacionModal.js"></script>
    <script src="../js/PlayVideos.js"></script>
    <script src="../js/AnimacionADA.js"></script>
    <script src="../js/Preguntados.js"></script>


    <!--Fonazome-->
    <script src="../js/Icons.js"></script>
    <!--  -->
    <script src="../js/bootstrap.bundle.min.js"></script>
    </script>
    <!-- Letras -->
    <script src="../js/index.js"></script>



    <!-- reconocimiento de voz -->
    <script src="../js/script.js"></script>


</body>

</html>