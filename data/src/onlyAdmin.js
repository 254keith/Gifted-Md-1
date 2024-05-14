require("dotenv").config();
const {
  Pool
} = require('pg');
const s = require('../set');
var dbUrl = s.DATABASE_URL ? s.DATABASE_URL : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9";
const proConfig = {
  'connectionString': dbUrl,
  'ssl': {
    'rejectUnauthorized': false
  }
};
const pool = new Pool(proConfig);
const creerTableOnlyAdmin = async () => {
  try {
    await pool.query("\n      CREATE TABLE IF NOT EXISTS onlyAdmin (\n        groupeJid text PRIMARY KEY\n      );\n    ");
    console.log("La table 'onlyAdmin' a été créée avec succès.");
  } catch (_0x2328af) {
    console.error("Une erreur est survenue lors de la création de la table 'onlyAdmin':", _0x2328af);
  }
};
creerTableOnlyAdmin();
async function addGroupToOnlyAdminList(_0x3a7fbe) {
  const _0x5f99c = await pool.connect();
  try {
    const _0x1d7cb8 = [_0x3a7fbe];
    await _0x5f99c.query("INSERT INTO onlyAdmin (groupeJid) VALUES ($1)", _0x1d7cb8);
    console.log("Groupe JID " + _0x3a7fbe + " ajouté à la liste des groupes onlyAdmin.");
  } catch (_0xf7308a) {
    console.error("Erreur lors de l'ajout du groupe onlyAdmin :", _0xf7308a);
  } finally {
    _0x5f99c.release();
  }
}
async function isGroupOnlyAdmin(_0xf0ac1b) {
  const _0x1f71a5 = await pool.connect();
  try {
    const _0x375505 = [_0xf0ac1b];
    const _0x1dcdd6 = await _0x1f71a5.query("SELECT EXISTS (SELECT 1 FROM onlyAdmin WHERE groupeJid = $1)", _0x375505);
    return _0x1dcdd6.rows[0x0].exists;
  } catch (_0x44bf3c) {
    console.error("Erreur lors de la vérification du groupe onlyAdmin :", _0x44bf3c);
    return false;
  } finally {
    _0x1f71a5.release();
  }
}
async function removeGroupFromOnlyAdminList(_0x111771) {
  const _0x58e59e = await pool.connect();
  try {
    const _0x3a3567 = [_0x111771];
    await _0x58e59e.query("DELETE FROM onlyAdmin WHERE groupeJid = $1", _0x3a3567);
    console.log("Groupe JID " + _0x111771 + " supprimé de la liste des groupes onlyAdmin.");
  } catch (_0x294c35) {
    console.error("Erreur lors de la suppression du groupe onlyAdmin :", _0x294c35);
  } finally {
    _0x58e59e.release();
  }
}
module.exports = {
  'addGroupToOnlyAdminList': addGroupToOnlyAdminList,
  'isGroupOnlyAdmin': isGroupOnlyAdmin,
  'removeGroupFromOnlyAdminList': removeGroupFromOnlyAdminList
};
