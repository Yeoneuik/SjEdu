window.onload = function () {
    var video = document.getElementById("vid");
    var snack = document.getElementById("snack");
    var button = document.getElementById("button");


    video.onended = function() {
        snack.style.display = "block";
        snack.onclick = parent.startGame;
        button.oncomplete = parent.nextContent;
        button.play();
    }

    video.oncanplaythrough = function() {
        document.getElementById("loading").style.display = "none";
    }

    video.onplaying = function() {
        document.getElementById("loading").style.display = "none";
    }
}

