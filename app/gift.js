const {gifted} = require('../gifted/gifted');
const fs = require('fs');
const ig = require('instagram-url-dl');

 const { writeFileSync } = require('fs');
const mumaker = require("mumaker");
const getFBInfo = require("@xaviabot/fb-downloader");

gifted({nomCom : "igdl" , categorie : "Downloader"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions ;

  let link = arg.join(' ')

  if (!arg[0]) { repondre('Veillez insérer un lien video instagramme');return}; 

  try {
     const response = await ig(link)
  
  let choix = response.data

    zk.sendMessage(dest,{video : {url : choix[0].url},caption : "*ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*",gifPlayback : false },{quoted : ms}) 
  } catch (e) {repondre("erreur survenue lors du téléchargement \n " + e)}

  

  
});


gifted({
  nomCom: "fbdl",
  categorie: "Download",
  reaction: "📽️"
},
async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Veuillez fournir une URL vidéo publique de Facebook à télécharger !');
    return;
  }

  const queryURL = arg.join(" ");

  try {
     getFBInfo(queryURL)
    .then((result) => {
       let caption = `
        titre: ${result.title}
        Lien: ${result.url}
      `;
       zk.sendMessage(dest,{image : { url : result.thumbnail}, caption : caption},{quoted : ms}) ;
       zk.sendMessage(dest, { video: { url: result.hd  }, caption: '*ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*' }, { quoted: ms });
      
    })
    .catch((error) => {console.log("Error:", error)
                      repondre(error)});


   
  } catch (error) {
    console.error('Erreur lors du téléchargement de la vidéo :', error);
    repondre('Erreur lors du téléchargement de la vidéo.' , error);
  }
});



gifted({ nomCom: "tikt", categorie: "Download", reaction: "🎵" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe,repondre } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}veiller lien_video_tiktok`);
    return;
  }

  const videoUrl = arg.join(" ");
  mumaker.tiktok(videoUrl)
    .then((data) => {
      const thumbnail = data.thumbnail;
      const author = data.author;
      const description = data.description;
      const media = Array.isArray(data.media) ? data.media.join(", ") : data.media;
      const music = data.music;
      const like = data.like;
      const comment = data.comment;
      const share = data.share;

      // Envoi du message avec le thumbnail de la vidéo
      const caption = `
        Auteur: ${author}
        Description: ${description}
        Média: ${media}
        Musique: ${music}
        J'aime: ${like}
        Commentaire: ${comment}
        Partages: ${share}
      `;

      
      zk.sendMessage(dest, { image: { url: thumbnail }, caption: caption},{quoted : ms});

      // Envoi de la vidéo sans commentaire
      zk.sendMessage(dest, { video: { url: data.media } });

      // Envoi des autres informations
      
    })
    .catch((err) => {
      console.error("Une erreur s'est produite :", err);
    });
});

gifted({
  nomCom: "fbdl2",
  categorie: "Download",
  reaction: "📽️"
},
async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Veuillez fournir une URL vidéo publique de Facebook à télécharger !');
    return;
  }

  const queryURL = arg.join(" ");

  try {
     getFBInfo(queryURL)
    .then((result) => {
       let caption = `
        titre: ${result.title}
        Lien: ${result.url}
      `;
       zk.sendMessage(dest,{image : { url : result.thumbnail}, caption : caption},{quoted : ms}) ;
       zk.sendMessage(dest, { video: { url: result.sd  }, caption: '*ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*' }, { quoted: ms });
      
    })
    .catch((error) => {console.log("Error:", error)
                      repondre(error)});


   
  } catch (error) {
    console.error('Erreur lors du téléchargement de la vidéo :', error);
    repondre('Erreur lors du téléchargement de la vidéo.' , error);
  }
});