setGame("1200x600");
game.folder = "assets";
//file gambar yang dipakai dalam game
var dataGambar = {
    logo: "awal.jpg",
    startBtn: "tombolStart.png",
    cover: "belakang.jpg",
    playBtn: "btn-play.png",
    maxBtn: "maxBtn.png",
    minBtn: "minBtn.png",
    idle: "Idle (32x32).png",
    doublejump: "Double Jump (32x32).png",
    jump: "Jump (32x32).png",
    fall: "Fall (32x32).png",
    hit: "Hit (32x32).png",
    tileset: "Terrain (1).png",
    bg: "belakang.jpg",
    item1: "Bananas.png",
    bendera: "flag.png",
    // musuh1Idel:"enemy1Idle.png",
    // musuh1Hit:"enemy1Hit.png"

}
//file suara yang dipakai dalam game
var suara = {
    suara: "latar.mp3",
    suaraMati: "mario.mp3",
    //   suaraKarakterMati: "mario-die.wav",
    //   suaraAmbilItem: "coin.wav",
    //   suaraDisentuhMusuh: "power-up.wav",
    //   suaraFinish: "stage-clear.wav",
}

//load gambar dan suara lalu jalankan startScreen
loading(dataGambar, suara, startScreen);

function startScreen() {
    hapusLayar("#D9D9D9");
    tampilkanGambar(dataGambar.logo, 600, 250);
    var startBtn = tombol(dataGambar.startBtn, 600, 350);
    if (tekan(startBtn)) {
        jalankan(halamanCover);
    }
}
function halamanCover() {
    hapusLayar("#67d2d6");
    gambarFull(dataGambar.cover);
    var playBtn = tombol(dataGambar.playBtn, 1100, 500);
    if (tekan(playBtn)) {
        setAwal();
        mainkanSuara(dataSuara.suara);
        jalankan(gameLoop);
    }
    resizeBtn(1150, 50);
}

function setAwal() {
    game.hero = setSprite(dataGambar.idle, 32, 32);
    game.skalaSprite = 2;
    game.hero.animDiam = dataGambar.idle;
    game.hero.animLompat = dataGambar.jump;
    game.hero.animJalan = dataGambar.doublejump;
    game.hero.animJatuh = dataGambar.fall;
    game.hero.animMati = dataGambar.hit;
    setPlatform(this["map_" + game.level], dataGambar.tileset, 32, game.hero);
    game.gameOver = ulangiPermainan;
    setPlatformItem(1, dataGambar.item1);
    //musuh
    // var musuh1 ={};
    // musuh1.animDiam = dataGambar.musuh1Idel;
    // musuh1.animMati = dataGambar.musuh1Hit;
    // setPlatformEnemy(1, musuh1);
    //trigger
    setPlatformTrigger(1, dataGambar.bendera);
}
function ulangiPermainan() {
    game.aktif = true;
    setAwal();
    mainkanSuara(dataSuara.suaraMati);
    jalankan(gameLoop);
}

function gameLoop() {
    hapusLayar();
    if (game.kanan) {
        gerakLevel(game.hero, 3, 0);
    } else if (game.kiri) {
        gerakLevel(game.hero, -3, 0);
    }
    if (game.atas) {
        gerakLevel(game.hero, 0, -10);
    }
    latar(dataGambar.bg, 0.5, 0);
    buatLevel();
    cekItem();
    teks(game.score, 40, 60);
}
function cekItem() {
    if (game.itemID > 0) {
        tambahScore(10);
        game.itemID = 0;
    }
    if (game.triggerID) {
        game.triggerID = 0;
        game.aktif = false;
        game.level++;
        if (game.level == 1) {
            var input = prompt('siapa nama kamu?');
            // alert(Hallo ${ input });
        }
        if (game.level == 2) {
            prompt('siapa nama kamu?');
        }

        setTimeout(ulangiPermainan, 1000);
    }
}