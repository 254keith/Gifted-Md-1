
const {france } = require("../framework/france");
const axios = require('axios');


france({
  nomCom: "hwaifu",
  categorie: "Hentai",
  reaction: "🙄"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.waifu.pics/nsfw/waifu'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Erreur lors de la récupération des données : ' +error);
  }
});


  /////////////// hneko //////////
france({
  nomCom: "trap",
  categorie: "Hentai",
  reaction: "🙄"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.waifu.pics/nsfw/trap'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('An Error occurred while retrieving data:', error);
  }
});

france({
  nomCom: "hneko",
  categorie: "Hentai",
  reaction: "🙄"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.waifu.pics/nsfw/neko'//apiWaifu("neko"); // Remplace avec ton lien réel

  try { for (let i = 0 ;i < 5 ; i++) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occured while retrieving data:', error);
  }
});


france({
  nomCom: "bj",
  categorie: "Hentai",
  reaction: "🙄"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/nsfw/blowjob'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});

france({
  nomCom: "ass",
  categorie: "Hentai",
  reaction: "🍑"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/nsfw/ass'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});

france({
  nomCom: "fuck",
  categorie: "Hentai",
  reaction: "💦 "
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/nsfw/fuck'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});




france({
  nomCom: "pussy",
  categorie: "Hentai",
  reaction: "😋"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/nsfw/pussy'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});




france({
  nomCom: "dick",
  categorie: "Hentai",
  reaction: "😋"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/nsfw/dick'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});


france({
  nomCom: "porngif",
  categorie: "Hentai",
  reaction: "😋"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/nsfw/porngif'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});


france({
  nomCom: "messi",
  categorie: "Wallpapers",
  reaction: "😋"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/wallpaper/messi'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});


france({
  nomCom: "car",
  categorie: "Wallpapers",
  reaction: "🚗"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/wallpaper/car'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});

france({
  nomCom: "enemy",
  categorie: "Wallpapers",
  reaction: "💀"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/wallpaper/horror'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});

france({
  nomCom: "random",
  categorie: "Wallpapers",
  reaction: "😋"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/wallpaper/random'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});

france({
  nomCom: "pubg",
  categorie: "Hentai",
  reaction: "😋"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/wallpaper/pubg'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});

france({
  nomCom: "dog",
  categorie: "Wallpapers",
  reaction: "🐶"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/wallpaper/dog'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});

france({
  nomCom: "cr7",
  categorie: "Wallpapers",
  reaction: "😋"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/wallpaper/cr7'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});

france({
  nomCom: "blackpink",
  categorie: "Wallpapers",
  reaction: "😋"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/wallpaper/blackpink'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});


france({
  nomCom: "bike",
  categorie: "Wallpapers",
  reaction: "🚲"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/wallpaper/bike'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});

france({
  nomCom: "aesthetic",
  categorie: "Wallpapers",
  reaction: ""
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/wallpaper/asthetic'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});

france({
  nomCom: "islamic",
  categorie: "Wallpapers",
  reaction: "🌻"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/wallpaper/islamic'; // Remplace avec ton lien réel

  try { for (let i = 0 ; i < 5 ; i++ ) {
    const response = await axios.get(url);
    const imageUrl = response.data.url;

    zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms }); }
  } catch (error) {
    repondre('Error occurred while retrieving data :', error);
  }
});


  
