require("dotenv").config();
const {
  Pool
} = require('pg');
const s = require("../set");
var dbUrl = s.DATABASE_URL ? s.DATABASE_URL : 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';
const proConfig = {
  'connectionString': dbUrl,
  'ssl': {
    'rejectUnauthorized': false
  }
};
const pool = new Pool(proConfig);
const creerTableHentai = async () => {
  try {
    await pool.query("\n      CREATE TABLE IF NOT EXISTS hentai (\n        groupeJid text PRIMARY KEY\n      );\n    ");
    console.log("La table 'hentai' avec 'groupeJid' comme clé primaire a été créée avec succès.");
  } catch (_0x5ec7ad) {
    console.error("Une erreur est survenue lors de la création de la table 'hentai':", _0x5ec7ad);
  }
};
creerTableHentai();
async function addToHentaiList(_0x422658) {
  const _0x59853b = await pool.connect();
  try {
    const _0x1fcfab = [_0x422658];
    await _0x59853b.query("INSERT INTO hentai (groupeJid) VALUES ($1)", _0x1fcfab);
    console.log("Le groupe JID " + _0x422658 + " a été ajouté à la liste de hentai.");
  } catch (_0x59153c) {
    console.error("Erreur lors de l'ajout du groupe à la liste de hentai :", _0x59153c);
  } finally {
    _0x59853b.release();
  }
}
async function checkFromHentaiList(_0x5276e1) {
  const _0x2cf7cb = await pool.connect();
  try {
    const _0x57953c = [_0x5276e1];
    const _0x5e456a = await _0x2cf7cb.query("SELECT EXISTS (SELECT 1 FROM hentai WHERE groupeJid = $1)", _0x57953c);
    return _0x5e456a.rows[0x0].exists;
  } catch (_0x4767ee) {
    console.error("Erreur lors de la vérification de la présence du groupe dans la liste de hentai :", _0x4767ee);
    return false;
  } finally {
    _0x2cf7cb.release();
  }
}
async function removeFromHentaiList(_0x1dea43) {
  const _0x1b7d73 = await pool.connect();
  try {
    const _0x5acf06 = [_0x1dea43];
    await _0x1b7d73.query("DELETE FROM hentai WHERE groupeJid = $1", _0x5acf06);
    console.log("Le groupe JID " + _0x1dea43 + " a été supprimé de la liste de hentai.");
  } catch (_0x298628) {
    console.error("Erreur lors de la suppression du groupe de la liste de hentai :", _0x298628);
  } finally {
    _0x1b7d73.release();
  }
}
module.exports = {
  'addToHentaiList': addToHentaiList,
  'checkFromHentaiList': checkFromHentaiList,
  'removeFromHentaiList': removeFromHentaiList
};
