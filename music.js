class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }
  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("GİT", "BLOK3", "4.jpg", "4.mp3"),
  new Music("YAPAR MISIN?", "POIZI & MURAT BOZ", "5.jpg", "5.mp3"),
  new Music("NAPIYOSUN MESELA ?", "BLOK3", "6.png", "6.mp3"),
];
