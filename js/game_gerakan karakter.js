setGame("1200x600");
game.folder = "assets";
//file gambar yang dipakai dalam game
var MainCr = "Main Characters/Virtual Guy/";
console.log(MainCr);

var gambar = {
	logo: "logo.png",
	startBtn: "tombolStart.png",
	cover: "cover.jpg",
	playBtn: "btn-play.png",
	maxBtn: "maxBtn.png",
	minBtn: "minBtn.png",
	idle: `${MainCr}Idle (32x32).png`,
	run: `${MainCr}Run (32x32).png`,
	jump: `${MainCr}Jump (32x32).png`,
	fall: `${MainCr}Fall (32x32).png`,
}
//file suara yang dipakai dalam game
var suara = {
}

//load gambar dan suara lalu jalankan startScreen
loading(gambar, suara, startScreen);

function startScreen() {
	hapusLayar("#67d2d6");
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
		jalankan(gameLoop);
	}
	resizeBtn(1150, 50);
}

function setAwal() {
	game.hero = setSprite(dataGambar.idle, 32, 32);
	game.hero.x = 800;
	game.hero.y = 268;
	game.skalaSprite = 2;
	game.lantai = 300;
	game.lompat = false;
}

function gameLoop() {
	hapusLayar();
	if (!game.lompat) {
		if (game.kanan) {
			game.hero.img = dataGambar.run; game.hero.skalaX = 1;
			game.hero.x += 3;
		} else if (game.kiri) {
			game.hero.img = dataGambar.run; game.hero.skalaX = -1;
			game.hero.x -= 3;
		} else {
			game.hero.img = dataGambar.idle;
		}
		if (game.atas) {
			game.lompat = true;
			game.hero.img = dataGambar.jump;
			game.lompatY = -10;
		}
	} else {
		game.lompatY += 0.5;
		if (game.lompatY > 0) game.hero.img = dataGambar.fall;
		game.hero.y += game.lompatY;
		if (game.kanan) {
			game.hero.skalax = 1;
			game.hero.x += 3;
		} else if (game.kiri) {
			game.hero.skalaX = -1;
			game.hero.x -= 3;
		}
		if (game.hero.y >= game.lantai - 32) {
			game.hero.y = game.lantai - 32;
			game.lompat = false;
		}
	}
	loopSprite(game.hero);
}