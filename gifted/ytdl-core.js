const yts = require("yt-search");
const ytdl = require("ytdl-core");
async function getytlink(_0x4f2762) {
  try {
    const _0x19fe39 = await yts(_0x4f2762);
    const _0x12e66d = _0x19fe39.videos;
    const _0x3ed7ba = _0x12e66d[0x0];
    return {
      'lien': _0x3ed7ba.url,
      'affiche': _0x3ed7ba.thumbnail,
      'titre': _0x3ed7ba.title,
      'duree': _0x3ed7ba.timestamp,
      'id': _0x3ed7ba.videoId
    };
  } catch (_0x1b4afd) {
    console.error("Error Searching from  YouTube :", _0x1b4afd);
    return null;
  }
}
module.exports = getytlink;
async function ytdwn(_0x541951) {
  const _0x1625c5 = await ytdl.getInfo(_0x541951);
  const _0x47c04e = ytdl.chooseFormat(_0x1625c5.formats, {
    'quality': '18'
  });
  const _0x3cd1b7 = ytdl.downloadFromInfo(_0x1625c5, _0x47c04e);
  return _0x3cd1b7;
}
module.exports = ytdwn;
