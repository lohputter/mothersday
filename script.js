var page = 0;
function reveal() {
    document.getElementsByClassName("book")[0].style.display = "flex";
    document.getElementById("nice").style.display = "block";
    document.getElementsByTagName("button")[0].style.display = "none";
    document.getElementsByTagName("h2")[0].style.display = "none";
}
function playMusic() {
    document.getElementsByClassName("book")[page].style.display = "none";
    document.getElementById("audio").play();
    for (let i=0; i<20; i++) {
        let heart = document.createElement("span");
        heart.style.display = "block";
        let hearts = ["❤️", "💕", "💗", "💜"];
        heart.innerHTML = hearts[Math.floor(Math.random() * 4)];
        heart.style.left = `${Math.random()*100}%`;
        heart.style.animationDelay = `${Math.random()*10}s`;
        document.body.appendChild(heart);
    }
    document.getElementById("focus").style.display = "inline-block";
    setTimeout(function(){
        document.getElementById("focus").style.opacity = 1.0;
        document.getElementById('subtitle').style.opacity = 1.0;
    }, 12500);
    let timings = [18000, 23500, 28800, 32800, 38500, 43000, 47700, 55400, 60500, 66000, 72200, 76000, 81500, 86700, 91000, 101000, 107000, 112000, 119500, 125000, 130500, 134500];
    let subtitles = ["When everything I do is wrong", "You give me hope and consolation", "You give me strength to carry on", "And you're always there to lend a hand", "In everything I do", "That's the wonder", "The wonder of you", "And when you smile the world is brighter", "You touch my hand and I'm a king", "Your kiss to me is worth a fortune", "Your love for me is everything", "I guess I'll never know the reason why", "You love me as you do", "That's the wonder", "The wonder of you", "Oh oh oh oh", "oh oh oh oh", "oh oh oh oh", "I guess I'll never know the reason why", "You love me as you do", "That's the wonder", "The wonder of you"];
    let chosen = 0;
    for (let i=0; i<subtitles.length; i++) {
        setTimeout(function(){
            document.getElementById('focus').style.opacity = 0;
            document.getElementById('subtitle').style.opacity = 0;
        }, timings[i]);
        setTimeout(function(){
            document.getElementById("focus").style.opacity = 1.0;
            document.getElementById('subtitle').style.opacity = 1.0;
            document.getElementById('focus').src = `mother${i+1}.jpeg`;
            document.getElementById('subtitle').innerHTML = subtitles[i];
        }, timings[i]+500);
    }
    setTimeout(function(){
        document.getElementById('subtitle').innerHTML = "Love ya mama :))"
    }, 137000);
}
document.onkeydown = function (e) {
    if (e.key == "ArrowRight") {
        if (page != 1) {
            document.getElementsByClassName("book")[page].style.display = "none";
            page++;
            document.getElementsByClassName("book")[page].style.display = "flex";
        }
    } else if (e.key == "ArrowLeft") {
        if (page != 0) {
            document.getElementsByClassName("book")[page].style.display = "none";
            page--;
            document.getElementsByClassName("book")[page].style.display = "flex";
        }
    }
};