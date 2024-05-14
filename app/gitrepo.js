"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gifted } = require("../gifted/gifted");
gifted({ nomCom: "repo", reaction: "🤍", nomFichier: __filename }, async (dest, zk, commandeOptions) => {


const githubRepo = 'https://api.github.com/repos/mouricedevs/Gifted-Md';
const img = 'https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg';


    const response = await fetch(githubRepo); 
        const data = await response.json(); 
 
        if (data) {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastUpdate: data.updated_at,
                owner: data.owner.login,
               
            };
const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
            const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

const gitdata = `
ɢɪғᴛᴇᴅ-ᴍᴅ ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ, ᴍᴀᴅᴇ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ.

  *❲❒❳ Stars:* ${repoInfo.stars}
  *❲❒❳ Forks:* ${repoInfo.forks}
  *❲❒❳ Developer:* GiftedTech
  *❲❒❳ Created:* 2024-04-10T23:38:20Z
  *❲❒❳ Repo:* ${data.html_url}
  *❲❒❳ Updated On:* ${repoInfo.lastUpdate}
  *❲❒❳ Scan:* _https://web.giftedtechnexus.co.ke_
  
__________________________________
   *ɢɪғᴛᴇᴅ-ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*`;


await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });

} else {
console.log("Could not fetch data")

}


});
