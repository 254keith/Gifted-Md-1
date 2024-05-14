"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gifted } = require("../gifted/gifted");
gifted({ nomCom: "wagroup", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join the OFFICIAL Gifted-Md WhatsApp Group\n\n';
    let d = 'https://chat.whatsapp.com/ExdDIwx7j36Ci7VP0TbCYw';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

gifted({ nomCom: "channel", reaction: "🤍", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join the OFFICIAL Gifted-Md WhatsApp Channel.\n\n';
    let d = 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

gifted({ nomCom: "channel2", reaction: "🤍", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join the OFFICIAL Gifted-Tech WhatsApp Channel.\n\n';
    let d = 'https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

gifted({ nomCom: "community", reaction: "🤍", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join the OFFICIAL Gifted-Md WhatsApp Community.\n\n';
    let d = 'https://chat.whatsapp.com/J6Gc8hVrTxS0dq4e02lS7H';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

gifted({ nomCom: "discussion", reaction: "🤍", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join the OFFICIAL Gifted-Md WhatsApp Discussion Group.\n\n';
    let d = 'https://chat.whatsapp.com/Czb6vkT4oaKLg80VN74QSA';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
