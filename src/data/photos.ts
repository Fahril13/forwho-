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
    caption: "Momen saat kita menghabiskan waktu tanpa rencana yang jelas, tapi terasa paling menyenangkan.",
  },
  {
    id: "2",
    url: "/gallery/2.jpg",
    caption: "Senyum ini adalah bukti bahwa hari-hari berat pun bisa terasa ringan.",
  },
  {
    id: "3",
    url: "/gallery/3.jpg",
    caption: "Jendela, kopi, dan tawa yang tidak pernah habis. Sederhana namun penuh makna.",
  },
  {
    id: "4",
    url: "/gallery/4.jpg",
    caption: "Entah apa yang kita bicarakan saat ini, tapi rasanya tidak ingin hari cepat berlalu.",
  },
  {
    id: "5",
    url: "/gallery/5.jpg",
    caption: "Perjalanan kecil yang selalu membawa memori besar.",
  },
  {
    id: "6",
    url: "/gallery/6.jpg",
    caption: "Tempat favorit. Cerita favorit. Orang favorit.",
  },
  {
    id: "7",
    url: "/gallery/7.jpg",
    caption: "Masa-masa penuh dengan kejutan manis yang tak pernah terpikirkan.",
  },
  {
    id: "8",
    url: "/gallery/8.jpg",
    caption: "Momen ini mungkin singkat, namun memorinya bertahan selamanya.",
  },
  {
    id: "9",
    url: "/gallery/9.jpg",
    caption: "Percakapan larut malam dan pemikiran serampangan yang menyenangkan.",
  },
  {
    id: "10",
    url: "/gallery/10.jpg",
    caption: "Terkadang yang paling indah adalah di saat kita diam bersama.",
  },
  {
    id: "11",
    url: "/gallery/11.jpg",
    caption: "Hari di mana semuanya terasa pas, dan tidak ada yang perlu dicemaskan.",
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
