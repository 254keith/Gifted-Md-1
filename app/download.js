
const { mediafireDl } = require("../gifted/dl/Function");
const {gifted} = require('../gifted/gifted');
const fs = require('fs');
const getFBInfo = require("@xaviabot/fb-downloader");
const { default: axios } = require('axios');







/*gifted({nomCom : "igdl" , categorie : "Download"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions ;

  let link = arg.join(' ')

  if (!arg[0]) { repondre('Veillez insérer un lien video instagramme');return}; 

  try {
     
    let igvid = await axios('https://api.maher-zubair.tech/download/instagram?url='+link)

    if (igvid.data.data.data[0].type == 'video') {
    zk.sendMessage(dest,{video : {url : igvid.data.data.data[0].url},caption : "ig video downloader powered by *ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*",gifPlayback : false },{quoted : ms}) 
    }
    else {
        zk.sendMessage(dest,{image : {url : igvid.data.data.data[0].url},caption : "ig image downloader powered by *ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*"})
    }
  
  } catch (e) {repondre("erreur survenue lors du téléchargement \n " + e)}
  
});*/



gifted({nomCom : "insta" , categorie : "Download"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions;

let link = arg.join(' ')

  if (!arg[0]) { repondre('Please insert an Instagram video link');return};

try {
    const red = await fetch(`https://apis-samir.onrender.com/docs/#/downloader/get_igdl${link}`);
    const data = await red.application/json();
//  const data = await red.json();

    if (data && data.result && data.result.data && data.result.data.length > 0) {
        const media = data.result.data[0];
        if (media.type === 'video') {
            zk.sendMessage(dest, { video: { url: media.url }, caption: "*ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*", gifPlayback: false }, { quoted: ms });
        } else {
            zk.sendMessage(dest, { image: { url: media.url }, caption: "*ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*" });
        }
    } else {
        throw new Error("No media found in the response data");
    }
} catch (e) {
    console.error("An error occurred while downloading:", e);
}

});








gifted({ nomCom: "twitter", categorie: "Download" }, async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg } = commandeOptions;
    let linkz = arg.join(' ');

    if (!arg[0]) {
        repondre('Please insert a *TWITTER Video Link* for *Gifted-Md* to download ');
        return;
    }


try {
    
        const blue = await fetch(`https://api.maher-zubair.tech/download/twitter?url=${linkz}`);
        const data = await blue.json();

        if (data && data.data && data.data.HD) {
            const medi = data.data.HD;
           
                zk.sendMessage(dest, { video: { url: medi }, caption: "*ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*", gifPlayback: false }, { quoted: ms });

}
           
        } catch (e) { repondre("I am unable to download your media. \n " + e)}
       
            
        
    
});




gifted({nomCom : "tiktok" , categorie : "Download"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions;

let linkx = arg.join(' ')

  if (!arg[0]) { repondre('Please insert a Tik Tok video link');return};


const green = await fetch(`https://api.maher-zubair.tech/download/tiktok2?url=${linkx}`);
    const data = await green.json();

try {

if (data && data.result && data.result.url && data.result.url.nowm) {

const nowm = data.result.url.nowm;

zk.sendMessage(dest, { video: { url: nowm }, caption: "*ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*", gifPlayback: false }, { quoted: ms });
}


} catch (e) {repondre("I am unable to download the file. \n " + e)}



}); 



gifted({nomCom : "mediafire" , categorie : "Download"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions ;

  let link = arg.join(' ')

  if (!arg[0]) { repondre('Provide mediafire link\n\nmediafire <valid mediafire link>');return}; 

  try {
     
    
        const fileInfo = await mediafireDl(link);

if (fileInfo[0].size.split('MB')[0] >= 100) {
            return m.reply('File tooooo big');
        }

await zk.sendMessage(
            dest,
            {
                document: {
                    url: fileInfo[0].link,
                },
                fileName: fileInfo[0].nama,
                mimetype: fileInfo[0].mime,
                caption: `*ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0:* ${fileInfo[0].nama}`,  
            },
            { quoted: ms }
        );

    
  
  } catch (e) {repondre("I am unable to download the file. \n " + e)}
  
});


gifted({
  nomCom: "fb",
  categorie: "Download",
  reaction: "📽️"
},
async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Insert a public facebook video link!');
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
                      repondre('try fbdl2 on this link')});


   
  } catch (error) {
    console.error('An error occurred while *Gifted-Md* was downloading your media:', error);
    repondre('An error occurred while downloading your media.' , error);
  }
});



/*gifted({ nomCom: "tiktok", categorie: "Download", reaction: "🎵" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe,repondre } = commandeOptions;
  if (!arg[0]) {
    repondre(`how to use this command:\n ${prefixe}tiktok tiktok_video_link`);
    return;
  }

  const videoUrl = arg.join(" ");

 let data = await axios.get('https://api.maher-zubair.tech/download/tiktok?url='+ videoUrl) ;

  let tik = data.data.data

      // Envoi du message avec le thumbnail de la vidéo
      const caption = `
Author: ${tik.author}
Description: ${tik.desc}
      `;

         
      zk.sendMessage(dest, { video: { url: tik.links[0].a} , caption : caption },{quoted : ms});    

  
});*/

gifted({
  nomCom: "fb2",
  categorie: "Download",
  reaction: "📽️"
},
async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Insert a public facebook video link! !');
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
    console.error('An error occurred while Gifted-Md was downloading your media:', error);
    repondre('An error occurred while Gifted-Md was downloading your media.' , error);
  }
});
