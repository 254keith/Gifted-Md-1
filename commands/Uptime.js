const { france } = require("../framework/france");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');
const speed = require("performance-now");

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


france({ nomCom: 'uptime',
    desc: 'To check runtime',    
    Categorie: 'General',
    reaction: '⚙️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_Uptime of FLASH-MD: ${runtime(process.uptime())}_*`) 

   


  }
);


france({ nomCom: 'ss',
    desc: 'screenshots website',
    Categorie: 'General',
    reaction: '🎥', 
    fromMe: 'true', 

},
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

    if (!arg || arg.length === 0) return repondre("provide a link...");

         const linkk = arg.join(' ');



let linkkk = `https://api.maher-zubair.tech/misc/sstab?url=${linkk}&dimension=720x720`;

let res = await getBuffer(linkkk);
   let caption = '*Powered by FLASH-MD*' 

await zk.sendMessage(dest, { image: res }, { caption: caption }, { quoted: ms });


}
);

