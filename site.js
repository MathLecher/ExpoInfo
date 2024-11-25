$(document).ready(function () {
    console.log("Hello World!");
    let listeSpan = "";
    let phrase = "Bref, si vous en avez déjà rêver il le fait …"
    phrase = phrase.split(" ");
    phrase.forEach(mot => {
        listeSpan += `<span>${mot} </span>`
    });
    $('#targetArcEnCiel').append(listeSpan);
  });