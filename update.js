const fs = require('fs');

let data = [];

try {
  data = JSON.parse(fs.readFileSync('videos.json', 'utf8'));
} catch (e) {
  data = [];
}

// contoh video baru (bisa kamu ganti logic random nanti)
let newVideo = {
  title: "Video " + (data.length + 1),
  file: "https://cdn.videy.co/bucZLATR1.mp4"
};

data.push(newVideo);

fs.writeFileSync('videos.json', JSON.stringify(data, null, 2));

console.log("✔ Video berhasil ditambahkan");
