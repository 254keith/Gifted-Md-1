
const { gifted } = require("../gifted/gifted");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


gifted({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚨', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    let timeStart = Date.now();
    return repondre('*Gifted-Md Speed:*\n ```' + 90 + '``` *ms*') 
    let timeEnd = Date.now();
    await zk.sendMessage(dest, {texte:'*Gifted-Md Speed:*' + (timeStart - timeEnd) + '``` *ms*')
  }
)
