export interface Photo {
  id: string;
  url: string;
  caption: string;
  width?: number; // for grid layout
  height?: number; // for grid layout
}

export const galleryPhotos: Photo[] = [
  {
    id: "1",
    url: "/gallery/1.jpg",
    caption: "foto yang aku perlihatkan ke orang tua aku. cantik bangettt.",
  },
  {
    id: "2",
    url: "/gallery/2.jpg",
    caption: "senyum ini adalah bukti bahwa hari-hari berat pun bisa terasa ringan yakan.",
  },
  {
    id: "3",
    url: "/gallery/3.jpg",
    caption: "ini adalah wallpapers pertama aku dan ini cantik banget dawg.",
  },
  {
    id: "4",
    url: "/gallery/4.jpg",
    caption: "ini foto sarkas doang bcz lu jahil ke gw.",
  },
  {
    id: "5",
    url: "/gallery/5.jpg",
    caption: "foto ini yang paling lucu gemas, entah kenapa tapi ak suka sama foto ini, kalau ak bisa putar balik waktu, ak mau ketemu kamu dari awal.",
  },
  {
    id: "6",
    url: "/gallery/6.jpg",
    caption: "ini foto kamu setelah graduate school, walaupun sakit kepala, terus utbk hanya hitungan jari, dan kamu bisa lewatin itu semua. im so proud of you sayang.",
  },
  {
    id: "7",
    url: "/gallery/7.jpg",
    caption: "masa masa smp waktu lagi lucu lucunyahh.",
  },
  {
    id: "8",
    url: "/gallery/8.jpg",
    caption: "momen ini mungkin hal yang paling ak ingat, ini kita pertama kali jalan lumayan jauh walaupun masih di smd, disitu ak merasa kamu cantik bangett",
  },
  {
    id: "9",
    url: "/gallery/9.jpg",
    caption: "ini foto kamu waktu lagi lebaran cuantikkk pollllllllll.",
  },
  {
    id: "10",
    url: "/gallery/10.jpg",
    caption: "ini foto waktu pesantren kilat aduh ini cantik juga lagi sayang.",
  },
  {
    id: "11",
    url: "/gallery/11.jpg",
    caption: "nah kalau ini foto kamu ulang tahun ke 18 masa masa utbk mulai menghantui ahahahahah.",
  }
];

export const highlightMoments = [
  {
    id: "h1",
    title: "The Quiet Afternoons",
    desc: "aku mencintaimu itu. itu sebabnya aku takkan pernah selesai mendoakanmu.",
    url: "/highlights/1.jpg",
    align: "left"
  },
  {
    id: "h2",
    title: "Endless Conversations",
    desc: "kadang bahas hal random, kadang serius. ga selalu penting, tapi selalu berarti. entah kenapa, kalau sama kamu rasanya ga pernah gapernah lelah buat cerita.",
    url: "/highlights/2.jpg",
    align: "right"
  }
];
