setGame("1200x600");
game.folder = "assets";
//file gambar yang dipakai dalam game
// Virtual guy
var MainCr1 = "Main Characters/Virtual Guy/";
// Mask dude
var MainCr2 = "Main Characters/Mask Dude/";
// Ninja frog
var MainCr3 = "Main Characters/Ninja Frog/";
// Pink man
var MainCr4 = "Main Characters/Pink Man/";
// musuh
var MusuhCr = "Main Characters/Ninja Frog/";
// var MusuhCr = "Enemies/AngryPig/";
// console.log(MainCr);

var gambar = {
	logo: "logo.png",
	startBtn: "tombolStart2.png",
	restartBtn: "btn-restart.png",
	playAgainBtn: "play-again-btn.png",
	cover: "cover.png",
	cover2: "cover2.png",
	cover3: "cover3.png",
	cover4: "cover4.png",
	cover5: "cover5.png",
	cover6: "cover6.png",
	selectKarakter: "select-karakter-bg.png",
	playBtn: "btn-play.png",
	maxBtn: "maxBtn.png",
	minBtn: "minBtn.png",
	// Virtual guy
	idle1: `${MainCr1}Idle (32x32).png`,
	run1: `${MainCr1}Run (32x32).png`,
	jump1: `${MainCr1}Jump (32x32).png`,
	fall1: `${MainCr1}Fall (32x32).png`,
	hit1: `${MainCr1}Hit (32x32).png`,
	// Mask dude
	idle2: `${MainCr2}Idle (32x32).png`,
	run2: `${MainCr2}Run (32x32).png`,
	jump2: `${MainCr2}Jump (32x32).png`,
	fall2: `${MainCr2}Fall (32x32).png`,
	hit2: `${MainCr2}Hit (32x32).png`,
	// Ninja frog
	idle3: `${MainCr3}Idle (32x32).png`,
	run3: `${MainCr3}Run (32x32).png`,
	jump3: `${MainCr3}Jump (32x32).png`,
	fall3: `${MainCr3}Fall (32x32).png`,
	hit3: `${MainCr3}Hit (32x32).png`,
	// Pink man
	idle4: `${MainCr4}Idle (32x32).png`,
	run4: `${MainCr4}Run (32x32).png`,
	jump4: `${MainCr4}Jump (32x32).png`,
	fall4: `${MainCr4}Fall (32x32).png`,
	hit4: `${MainCr4}Hit (32x32).png`,
	tileset: "Terrain/terrain.png",
	bg: `Background/bg1.jpg`,
	item1: "Items/Fruits/Apple.png",
	item2: "Items/Fruits/Bananas.png",
	item3: "Items/Fruits/Orange.png",
	musuh1Idle: `${MusuhCr}Idle (32x32).png`,
	musuh1Run: `${MusuhCr}Run (32x32).png`,
	musuh1Hit: `${MusuhCr}Hit (32x32).png`,
	bendera: "Items/Checkpoints/Checkpoint/Checkpoint (Flag Idle)(64x64).png",
	musicOn: "music-on.png",
	musicOff: "music-off.png",
	hati: "hati.png"
}

//file suara yang dipakai dalam game
var suara = {
	backSound: "Music/MusicDonkey.mp3",
	suaraMati: "Music/you-has-been.mp3",
	suaraMenang: "Music/victory-ml.mp3",
	suaraChekPoint: "Music/chekPoint.mp3",
	suaraCoc: "Music/coc-sound.mp3",
	suaraDefeatMl: "Music/defeat-ml.mp3",
	suaraShutdownMl: "Music/shutdown-ml.mp3",
	suaraSelect: "Music/sound-select.mp3",
	// kill musuh ML
	kill_1: "Music/kill-1.mp3",
	kill_2: "Music/kill-2.mp3",
	kill_3: "Music/kill-3.mp3",
	kill_4: "Music/kill-4.mp3",
	kill_5: "Music/kill-5.mp3",
}

// Fungsi untuk memulai audio setelah tindakan pengguna
const backsound = new Audio('assets/Music/MusicDonkey.mp3');
// backsound.autoplay = true;
backsound.loop = true;
function startBacksound() {
	backsound.play();
}

function stopBacksound() {
	backsound.pause();
	backsound.currentTime = 0;
}

//load gambar dan suara lalu jalankan startScreen
loading(gambar, suara, startScreen);

function startScreen() {
	// hapusLayar("#2E4374");
	gambarFull(dataGambar.cover3);
	// tampilkanGambar(dataGambar.logo, 600, 250);
	// var startBtn = tombol(dataGambar.startBtn, 200, 90);
	var startBtn = tombol(dataGambar.startBtn, 600, 350);
	if (tekan(startBtn)) {
		mainkanSuara(dataSuara.suaraSelect);
		startBacksound();
		jalankan(halamanSelectCaracter);
	}
	resizeBtn(1150, 50);
}

var jumlahHati = 5;

function halamanCover() {
	hapusLayar("#2E4374");
	gambarFull(dataGambar.cover);
	var playBtn = tombol(dataGambar.playBtn, 1100, 500);
	if (tekan(playBtn)) {
		setAwal();
		jalankan(gameLoop);
		jumlahHati = 5;
	}
	resizeBtn(1150, 50);
}

var dataIdle;
var datajump;
var datarun;
var datafall;
var datahit;

function halamanSelectCaracter() {
	hapusLayar("#2E4374");
	gambarFull(dataGambar.cover4);
	var playBtn4 = tombol(dataGambar.selectKarakter, 890, 320); //4
	var playBtn1 = tombol(dataGambar.selectKarakter, 700, 320); //1
	var playBtn3 = tombol(dataGambar.selectKarakter, 510, 320);
	var playBtn2 = tombol(dataGambar.selectKarakter, 320, 320); //2
	if (tekan(playBtn4)) {
		mainkanSuara(dataSuara.suaraSelect);
		// MainCr = "Main Characters/Pink Man/";
		dataIdle = dataGambar.idle4;
		datajump = dataGambar.jump4;
		datarun = dataGambar.run4;
		datafall = dataGambar.fall4;
		datahit = dataGambar.hit4;
		setAwal();
		jalankan(mulaiPermainan);
		jumlahHati = 5;
		stopBacksound();
	}
	if (tekan(playBtn1)) {
		mainkanSuara(dataSuara.suaraSelect);
		// MainCr = "Main Characters/Virtual guy/";
		dataIdle = dataGambar.idle1;
		datajump = dataGambar.jump1;
		datarun = dataGambar.run1;
		datafall = dataGambar.fall1;
		datahit = dataGambar.hit1;
		setAwal();
		jalankan(mulaiPermainan);
		jumlahHati = 5;
		stopBacksound();
	}
	if (tekan(playBtn3)) {
		mainkanSuara(dataSuara.suaraSelect);
		// MainCr = "Main Characters/Ninja Frog/";
		dataIdle = dataGambar.idle3;
		datajump = dataGambar.jump3;
		datarun = dataGambar.run3;
		datafall = dataGambar.fall3;
		datahit = dataGambar.hit3;
		setAwal();
		jalankan(mulaiPermainan);
		jumlahHati = 5;
		stopBacksound();
	}
	if (tekan(playBtn2)) {
		mainkanSuara(dataSuara.suaraSelect);
		// MainCr = "Main Characters/Mask Dude/";
		dataIdle = dataGambar.idle2;
		datajump = dataGambar.jump2;
		datarun = dataGambar.run2;
		datafall = dataGambar.fall2;
		datahit = dataGambar.hit2;
		setAwal();
		jalankan(mulaiPermainan);
		jumlahHati = 5;
		stopBacksound();
	}
	resizeBtn(1150, 50);
}

function setAwal() {
	game.hero = setSprite(dataIdle, 32, 32);
	game.hero.animDiam = dataIdle;
	console.log(datajump)
	game.hero.animLompat = datajump;
	game.hero.animJalan = datarun;
	game.hero.animJatuh = datafall;
	game.hero.animMati = datahit;
	game.skalaSprite = 2;
	setPlatform(this["map_" + game.level], dataGambar.tileset, 32, game.hero);
	game.gameOver = ulangiPermainan;
	//item
	setPlatformItem(1, dataGambar.item1);
	setPlatformItem(2, dataGambar.item2);
	setPlatformItem(3, dataGambar.item3);
	// musuh
	var musuh1 = {};
	musuh1.animDiam = dataGambar.musuh1Idle;
	musuh1.animJalan = dataGambar.musuh1Run;
	musuh1.animMati = dataGambar.musuh1Hit;
	setPlatformEnemy(1, musuh1);
	// trigger
	setPlatformTrigger(1, dataGambar.bendera);
}

function mulaiPermainan() {
	mainkanSuara(dataSuara.suaraCoc);
	game.aktif = true;
	game.score = 0;
	game.score2 = 0;
	setAwal();
	jalankan(gameLoop);
}

function ulangiPermainan() {
	if (game.score2 > 1) {
		mainkanSuara(dataSuara.suaraShutdownMl);
	} else {
		mainkanSuara(dataSuara.suaraMati);
	}

	game.aktif = true;
	game.score = 0;
	game.score2 = 0;
	setAwal();
	jalankan(gameLoop);

	jumlahHati--;

	if (jumlahHati == 0) {
		setTimeout(mainkanSuara(dataSuara.suaraDefeatMl), 2000);
		jalankan(gameOverScreen);
	}
}

function lanjutPermainan() {
	game.aktif = true;
	game.score = 0;
	game.score2 = 0;
	setAwal();
	jalankan(gameLoop);
}

function gameWinScreen() {
	hapusLayar("#2E4374");
	gambarFull(dataGambar.cover6);
	var startBtn = tombol(dataGambar.playAgainBtn, 600, 350);
	if (tekan(startBtn)) {
		location.reload();
	}
}

function gameOverScreen() {
	hapusLayar("#2E4374");
	gambarFull(dataGambar.cover5);
	var startBtn = tombol(dataGambar.restartBtn, 600, 350);
	if (tekan(startBtn)) {
		location.reload();
	}
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
	// if (game.level === 1) {
	// 	latar(dataGambar.bgLevel1, 0.5, 0);
	// } else if (game.level === 2) {
	// 	latar(dataGambar.bgLevel2, 0.5, 0);
	// } else if (game.level === 3) {
	// 	latar(dataGambar.bgLevel3, 0.5, 0);
	// } else if (game.level === 4) {
	// 	latar(dataGambar.bgLevel4, 0.5, 0);
	// } else if (game.level === 5) {
	// 	latar(dataGambar.bgLevel4, 0.5, 0);
	// }
	buatLevel();
	cekItem();
	var soundBtnOf = tombol(dataGambar.musicOff, 50, 50);
	var soundBtnOn = tombol(dataGambar.musicOn, 140, 50);
	let startX = 50;
	let spacing = 70;
	for (let i = 0; i < jumlahHati; i++) {
		tombol(dataGambar.hati, startX, 560);
		startX += spacing;
	}

	if (tekan(soundBtnOf)) {
		// dataGambar.musicOff = "music-on.png";
		stopBacksound();
	}
	if (tekan(soundBtnOn)) {
		// dataGambar.musicOff = "music-on.png";
		startBacksound();
	}
	console.log(game.jump)
	teks(`Level : ${game.level}`, 20, 120, "Calibri-bold-28pt-left-lightblue");
	teks(`Point : ${game.score}`, 20, 150, "Calibri-bold-20pt-left-lightblue");
	teks(`Kill : ${game.score2}`, 20, 180, "Calibri-bold-20pt-left-lightblue");
}

function cekItem() {
	if (game.itemID > 0) {
		tambahScore(10);
		game.itemID = 0;
		mainkanSuara(dataSuara.suaraChekPoint);
	}
	if (game.musuhID != 0) {
		tambahScoreKill(1);
		game.musuhID = 0;
		jumlahHati++;
		switch (game.score2) {
			case 1:
				mainkanSuara(dataSuara.kill_1);
				break;
			case 2:
				mainkanSuara(dataSuara.kill_2);
				break;
			case 3:
				mainkanSuara(dataSuara.kill_3);
				break;
			case 4:
				mainkanSuara(dataSuara.kill_4);
				break;
			case 5:
				mainkanSuara(dataSuara.kill_5);
				break;
			default:
				mainkanSuara(dataSuara.kill_5);
				break;
		}
	}
	if (game.triggerID == 1) {
		game.triggerID = 0;
		game.aktif = false;
		game.level++;
		mainkanSuara(dataSuara.suaraMenang);
		// alert('tess')
		setTimeout(lanjutPermainan, 1000);
		if (game.level == 6) {
			jalankan(gameWinScreen);
		}
	}
}