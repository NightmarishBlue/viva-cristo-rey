window.addEventListener('load', () => {
    let audio = document.getElementById("audio");

    audio.src = "./gods-not-dead.opus";
    audio.load();

    this.addEventListener('click', function play() {
        this.removeEventListener('click', play);
        audio.play();
    });
});