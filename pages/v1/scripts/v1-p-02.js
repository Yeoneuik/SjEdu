window.onload = function () {
    var video = document.getElementById("vid");
    var snack = document.getElementById("snack");


    video.onended = function() {
        snack.style.display = "block";
        snack.onclick = parent.nextContent;
    }

    video.oncanplaythrough = function() {
        document.getElementById("loading").style.display = "none";
    }

    video.onplaying = function() {
        document.getElementById("loading").style.display = "none";
    }
       
}