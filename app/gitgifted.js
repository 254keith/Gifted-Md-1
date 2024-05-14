"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gifted } = require("../gifted/gifted");
gifted({ nomCom: "gifted",reaction: "😌"}, async (dest, zk, commandeOptions) => {


const githubRepo = 'https://api.github.com/repos/mouricedevs/Gifted-Md';

const img = 'https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg';

    const response = await fetch(githubRepo); 
        const data = await response.json(); 
 
        if (data) {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                
                
               
            };


const gitdata = `
*A Total of ${repoInfo.forks} People have Deployed and are Currently using Gifted-Md.*

*${repoInfo.stars} People have starred it Showing a sign of Loving it.*

*ɢɪғᴛᴇᴅ-ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*`;




await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });

} else {
console.log("Could not fetch data")

}


});
