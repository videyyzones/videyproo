const fs = require('fs');

let data = JSON.parse(fs.readFileSync('videos.json'));

// tambah video baru
let newVideo = {
  title: "Video " + (data.length + 1),
  file: "https://cdn.videy.co/bucZLATR1.mp4"
};

data.push(newVideo);

fs.writeFileSync('videos.json', JSON.stringify(data, null, 2));
