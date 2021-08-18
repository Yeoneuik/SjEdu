//GetComponent("../../script/main.js").nextContent();

window.onload = function () {
    var video = document.getElementById("vid");
    var snack = document.getElementById("snack");
    var nextButton = document.getElementById("nextButton");

    video.onended = function () {
        snack.style.display = "block";
        snack.onclick = parent.startGame;
        nextButton.style.display = "block";
        nextButton.onclick = parent.nextContent;
    }

    var promise = video.play();

    if (promise !== undefined) {
        promise.then(_ => {
            // 자동 재생 시작
            document.getElementById("loading").style.display = "none";
        }).catch(error => {
            // 자동 재생 불가
            console.log('자동재생 실패');
        });
    }
}