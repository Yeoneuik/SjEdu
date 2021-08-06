const contents = [
    'v1/v1-p-01.html',
    'v1/v1-p-02.html',
    
]

var nowPlaying = 0;


function nextContent() {
    nowPlaying++;
    if (nowPlaying >= contents.length) {
        location.href = "../v1";
    } else {
        var iframe = document.getElementById('contentFrame');
        iframe.src = contents[nowPlaying];
    }
}

function prevContent() {
    if (nowPlaying > 0) {
        nowPlaying--;
        var iframe = document.getElementById('contentFrame');
        iframe.src = contents[nowPlaying];
    }
}

//오른쪽 왼쪽 클릭시 iframe 내부 콘텐츠 바뀜
    document.getElementById("b_back").onclick = prevContent;
    document.getElementById("b_forward").onclick = nextContent;



//아래는 시스템 이외의것들//



//ie 금지코드 시작
    var agent = navigator.userAgent.toLowerCase();
    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
        alert("인터넷 익스플로러는 세종시 온라인 공부방을 지원하지 않아요. 크롬으로 접속해주세요!");
        document.location.href = 'pororo_home.html';
    }

//풀스크린 코드

window.onload = function () {

    var elem = document.getElementById("videoContainer");

    document.getElementById("b_fullscreen").onclick = function() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }
    
}