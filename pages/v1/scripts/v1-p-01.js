window.onload = function () {
    var video = document.getElementById("vid");
    var snack = document.getElementById("snack");
    var nextButton = document.getElementById("nextButton");


    video.onended = function() {
        snack.style.display = "block";
        //snack.onclick = parent.nextContent;
        nextButton.style.display = "block";
        nextButton.onclick = parent.nextContent;
    }

    video.oncanplaythrough = function() {
        document.getElementById("loading").style.display = "none";
    }

    video.onplaying = function() {
        document.getElementById("loading").style.display = "none";
    }
       
}