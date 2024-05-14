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
const creerTableBanGroup = async () => {
  try {
    await pool.query("\n      CREATE TABLE IF NOT EXISTS banGroup (\n        groupeJid text PRIMARY KEY\n      );\n    ");
    console.log("La table 'banGroup' a été créée avec succès.");
  } catch (_0x7ad857) {
    console.error("Une erreur est survenue lors de la création de la table 'banGroup':", _0x7ad857);
  }
};
creerTableBanGroup();
async function addGroupToBanList(_0x269472) {
  const _0x3a136f = await pool.connect();
  try {
    const _0x33e279 = [_0x269472];
    await _0x3a136f.query("INSERT INTO banGroup (groupeJid) VALUES ($1)", _0x33e279);
    console.log("Groupe JID " + _0x269472 + " ajouté à la liste des groupes bannis.");
  } catch (_0x3848fb) {
    console.error("Erreur lors de l'ajout du groupe banni :", _0x3848fb);
  } finally {
    _0x3a136f.release();
  }
}
async function isGroupBanned(_0x68fbc3) {
  const _0x3bab38 = await pool.connect();
  try {
    const _0x5018dc = [_0x68fbc3];
    const _0x13c903 = await _0x3bab38.query("SELECT EXISTS (SELECT 1 FROM banGroup WHERE groupeJid = $1)", _0x5018dc);
    return _0x13c903.rows[0x0].exists;
  } catch (_0x1a3589) {
    console.error("Erreur lors de la vérification du groupe banni :", _0x1a3589);
    return false;
  } finally {
    _0x3bab38.release();
  }
}
async function removeGroupFromBanList(_0x50f929) {
  const _0x2d4908 = await pool.connect();
  try {
    const _0x538cdf = [_0x50f929];
    await _0x2d4908.query("DELETE FROM banGroup WHERE groupeJid = $1", _0x538cdf);
    console.log("Groupe JID " + _0x50f929 + " supprimé de la liste des groupes bannis.");
  } catch (_0x3f6235) {
    console.error("Erreur lors de la suppression du groupe banni :", _0x3f6235);
  } finally {
    _0x2d4908.release();
  }
}
module.exports = {
  'addGroupToBanList': addGroupToBanList,
  'isGroupBanned': isGroupBanned,
  'removeGroupFromBanList': removeGroupFromBanList
};
