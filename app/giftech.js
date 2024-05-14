const util = require('util');
const fs = require('fs-extra');
const { gifted } = require(__dirname + "/../gifted/gifted");
const { format } = require(__dirname + "/../gifted/functions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
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

gifted({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../gifted/gifted");
    var coms = {};
    var mode = "public";

    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }



 cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Africa/Nairobi');

// Create a date and time in EAT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭═══ *〘 ɢɪғᴛᴇᴅ-ᴍᴅ 〙* ═⊷
┃▫╭────────────
┃▫│ *ᴏᴡɴᴇʀ:* Gifted Tech
┃▫│ *ᴍᴏᴅᴇ:* ${mode}
┃▫│ *ᴜᴘᴛɪᴍᴇ:* ${runtime(process.uptime())} 
┃▫│ *ʀᴀᴍ:* ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())} 
┃▫│ *ᴛɪᴍᴇ-ɴᴏᴡ:* ${temps}
┃▫│ *ᴅᴀᴛᴇ-ᴛᴏᴅᴀʏ:* ${date} 
┃▫│ *ᴄᴏᴍᴍᴀɴᴅs:* ${cm.length} 
┃▫│ *ᴛʜᴇᴍᴇ:* Gifted
┃▫╰─────────────
╰═══════════════⊷`;

  let menuMsg=`  

 *ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*\n`;
 
  for (const cat in coms) {
        menuMsg += `
*╭────☉⁠🔹${cat}🔹☉⁠⊷*`;
        for (const cmd of coms[cat]) {
        menuMsg += ` 
*│❒⁠⁠⁠⁠${cmd}*`;
        }
        menuMsg += `
*╰═════════════⊷*\n`
    }

    menuMsg += `
**ɢɪғᴛᴇᴅ ᴍᴅ*
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Gifted-MD*, développé par Djalega++" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu error " + e);
        repondre("🥵🥵 Menu error " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "*ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu error " + e);
        repondre("🥵🥵 Menu error " + e);
    }
} 
else {

    repondre(infoMsg + menuMsg);

}

});
