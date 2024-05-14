"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gifted } = require("../gifted/gifted");
gifted({ nomCom: "tempmail", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*Gifted-Md* Temporary Emails: \n \n ' + "Click the links below to create unlimited TEMPORARY Emails. *ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*\n\n";
    let d = ' 1️⃣ https://tempumail.com\n\n 2️⃣ https://etempmail.com\n\n 3️⃣ https://ghostmail.one\n\n 4️⃣ https://tempmailid.com';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
