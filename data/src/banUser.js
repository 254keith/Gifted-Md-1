require('dotenv').config();
const {
  Pool
} = require('pg');
const s = require("../set");
var dbUrl = s.DATABASE_URL ? s.DATABASE_URL : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9";
const proConfig = {
  'connectionString': dbUrl,
  'ssl': {
    'rejectUnauthorized': false
  }
};
const pool = new Pool(proConfig);
const creerTableBanUser = async () => {
  try {
    await pool.query("\n      CREATE TABLE IF NOT EXISTS banUser (\n        jid text PRIMARY KEY\n      );\n    ");
    console.log("La table 'banUser' a été créée avec succès.");
  } catch (_0x1c6293) {
    console.error("Une erreur est survenue lors de la création de la table 'banUser':", _0x1c6293);
  }
};
creerTableBanUser();
async function addUserToBanList(_0x20228c) {
  const _0x176ef6 = await pool.connect();
  try {
    const _0x1a77bb = [_0x20228c];
    await _0x176ef6.query("INSERT INTO banUser (jid) VALUES ($1)", _0x1a77bb);
    console.log("JID " + _0x20228c + " ajouté à la liste des bannis.");
  } catch (_0x5583a7) {
    console.error("Erreur lors de l'ajout de l'utilisateur banni :", _0x5583a7);
  } finally {
    _0x176ef6.release();
  }
}
async function isUserBanned(_0x5d6e12) {
  const _0x4d23ca = await pool.connect();
  try {
    const _0x3f4b38 = [_0x5d6e12];
    const _0x53a229 = await _0x4d23ca.query("SELECT EXISTS (SELECT 1 FROM banUser WHERE jid = $1)", _0x3f4b38);
    return _0x53a229.rows[0x0].exists;
  } catch (_0x36f66c) {
    console.error("Erreur lors de la vérification de l'utilisateur banni :", _0x36f66c);
    return false;
  } finally {
    _0x4d23ca.release();
  }
}
async function removeUserFromBanList(_0x119255) {
  const _0x3ae732 = await pool.connect();
  try {
    const _0x53f96a = [_0x119255];
    await _0x3ae732.query("DELETE FROM banUser WHERE jid = $1", _0x53f96a);
    console.log("JID " + _0x119255 + " supprimé de la liste des bannis.");
  } catch (_0x2364d1) {
    console.error("Erreur lors de la suppression de l'utilisateur banni :", _0x2364d1);
  } finally {
    _0x3ae732.release();
  }
}
module.exports = {
  'addUserToBanList': addUserToBanList,
  'isUserBanned': isUserBanned,
  'removeUserFromBanList': removeUserFromBanList
};
