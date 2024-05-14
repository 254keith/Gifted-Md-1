const { gifted } = require('../gifted/gifted');

gifted({ nomCom: 'quote', categorie: 'Group' }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, verifGroupe, arg } = commandeOptions;
  if (!verifGroupe) {
    repondre('Commande réservée au groupe uniquement');
    return;
  }

  if (!arg[0]) {
    try {
      fetch('https://animechan.xyz/api/random')
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`*Gifted-Md Quotes*

🎬 Anime: ${quote.anime}
👤 Character: ${quote.character}
💬 Quote: ${quote.quote}

*ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  } else {
    const query = arg.join(' ');

    try {
      fetch('https://animechan.xyz/api/random/character?name=' + query)
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`GIFTED-MD

🎬 Anime: ${quote.anime}
👤 Character: ${quote.character}
💬 Quote: ${quote.quote}

Powered by FLASH-MD`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  }
});
