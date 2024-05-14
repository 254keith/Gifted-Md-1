const { gifted } = require("../gifted/gifted");
const { getytlink, ytdwn } = require("../gifted/ytdl-core");
const yts = require("yt-search");
const ytdl = require('ytdl-core');
const fs = require('fs');

gifted({ nomCom: "yts", categorie: "Search", reaction: "✋" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
  const query = arg.join(" ");

  if (!query[0]) {
    repondre("what do you want");
    return;
  }

  try {
    const info = await yts(query);
    const resultat = info.videos;

    let captions = "";
    for (let i = 0; i < 10; i++) {
      captions += `----------------\nTitle: ${resultat[i].title}\nTime : ${resultat[i].timestamp}\nUrl: ${resultat[i].url}\n`;
    }
    captions += " *ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*";

    // repondre(captions)
    zk.sendMessage(dest, { image: { url: resultat[0].thumbnail }, caption: captions }, { quoted: ms });
  } catch (error) {
    repondre("Erreur lors de la procédure : " + error);
  }
});

gifted({
  nomCom: "ytmp4",
  categorie: "Download",
  reaction: "🎥"
}, async (origineMessage, zk, commandeOptions) => {
  const { arg, ms, repondre } = commandeOptions;

  if (!arg[0]) {
    repondre("insert a youtube link");
    return;
  }

  const topo = arg.join(" ");
  try {
    /* const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const Element = videos[0];

      let InfoMess = {
        image: { url: videos[0].thumbnail },
        caption: ` *ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0:* _${Element.title}_
*Durée :* _${Element.timestamp}_
*Lien :* _${Element.url}_
_*En cours de téléchargement...*_\n\n`
      };

      zk.sendMessage(origineMessage, InfoMess, { quoted: ms });
    */

    // Obtenir les informations de la vidéo à partir du lien YouTube
    const videoInfo = await ytdl.getInfo(topo);
    // Format vidéo avec la meilleure qualité disponible
    const format = ytdl.chooseFormat(videoInfo.formats, { quality: '18' });
    // Télécharger la vidéo
    const videoStream = ytdl.downloadFromInfo(videoInfo, { format });

    // Nom du fichier local pour sauvegarder la vidéo
    const filename = 'video.mp4';

    // Écrire le flux vidéo dans un fichier local
    const fileStream = fs.createWriteStream(filename);
    videoStream.pipe(fileStream);

    fileStream.on('finish', () => {
      // Envoi du fichier vidéo en utilisant l'URL du fichier local
      zk.sendMessage(origineMessage, { video: { url: `./${filename}` }, caption: " *ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*", gifPlayback: false }, { quoted: ms });

    });

    fileStream.on('error', (error) => {
      console.error('Erreur lors de l\'écriture du fichier vidéo :', error);
      repondre('Une erreur est survenue lors de l\'écriture du fichier vidéo.');
    });

  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.' + error);
  }
});

gifted({
  nomCom: "ytmp3",
  categorie: "Download",
  reaction: "💿"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Insert a youtube link");
    return;
  }

  try {
    let topo = arg.join(" ");

    const audioStream = ytdl(topo, { filter: 'audioonly', quality: 'highestaudio' });

    // Nom du fichier local pour sauvegarder le fichier audio
    const filename = 'audio.mp3';

    // Écrire le flux audio dans un fichier local
    const fileStream = fs.createWriteStream(filename);
    audioStream.pipe(fileStream);

    fileStream.on('finish', () => {
      // Envoi du fichier audio en utilisant l'URL du fichier local
      zk.sendMessage(origineMessage, { audio: { url: `./${filename}` }, mimetype: 'audio/mp4' }, { quoted: ms, ptt: false });
      console.log("Envoi du fichier audio terminé !");
    });

    fileStream.on('error', (error) => {
      console.error('Erreur lors de l\'écriture du fichier audio :', error);
      repondre('Une erreur est survenue lors de l\'écriture du fichier audio.');
    });

  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.');
  }
});