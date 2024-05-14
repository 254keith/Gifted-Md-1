require("dotenv").config();
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
async function createSudoTable() {
  const _0x26b3f9 = await pool.connect();
  try {
    await _0x26b3f9.query("\n      CREATE TABLE IF NOT EXISTS sudo (\n        id serial PRIMARY KEY,\n        jid text NOT NULL\n      );\n    ");
    console.log("La table 'sudo' a été créée avec succès.");
  } catch (_0xdf58ca) {
    console.error("Une erreur est survenue lors de la création de la table 'sudo':", _0xdf58ca);
  } finally {
    _0x26b3f9.release();
  }
}
createSudoTable();
async function issudo(_0x47dc26) {
  const _0x188036 = await pool.connect();
  try {
    const _0x418680 = [_0x47dc26];
    const _0x366877 = await _0x188036.query("SELECT EXISTS (SELECT 1 FROM sudo WHERE jid = $1)", _0x418680);
    return _0x366877.rows[0x0].exists;
  } catch (_0x4934c1) {
    console.error("Erreur lors de la vérification du groupe banni :", _0x4934c1);
    return false;
  } finally {
    _0x188036.release();
  }
}
async function removeSudoNumber(_0x2210e3) {
  const _0x5f4a11 = await pool.connect();
  try {
    const _0x3783da = [_0x2210e3];
    await _0x5f4a11.query("DELETE FROM sudo WHERE jid = $1", _0x3783da);
    console.log("Numéro de téléphone " + _0x2210e3 + " supprimé de la liste des numéros de téléphone autorisés.");
  } catch (_0x15e036) {
    console.error("Erreur lors de la suppression du numéro de téléphone autorisé :", _0x15e036);
  } finally {
    _0x5f4a11.release();
  }
}
async function addSudoNumber(_0x24b3e7) {
  const _0x12c03e = await pool.connect();
  try {
    const _0x35f71f = [_0x24b3e7];
    await _0x12c03e.query("INSERT INTO sudo (jid) VALUES ($1)", _0x35f71f);
    console.log("Numéro de téléphone " + _0x24b3e7 + " ajouté à la liste des numéros de téléphone autorisés.");
  } catch (_0x47024b) {
    console.error("Erreur lors de l'ajout du numéro de téléphone autorisé :", _0x47024b);
  } finally {
    _0x12c03e.release();
  }
}
async function getAllSudoNumbers() {
  const _0x4bd27b = await pool.connect();
  try {
    const _0x577848 = await _0x4bd27b.query("SELECT jid FROM sudo");
    const _0x127ad9 = _0x577848.rows.map(_0x4e870d => _0x4e870d.jid);
    return _0x127ad9;
  } catch (_0x4fb070) {
    console.error("Erreur lors de la récupération des numéros de téléphone autorisés :", _0x4fb070);
    return [];
  } finally {
    _0x4bd27b.release();
  }
}
async function isSudoTableNotEmpty() {
  const _0xdf1c51 = await pool.connect();
  try {
    const _0x18fa68 = await _0xdf1c51.query("SELECT COUNT(*) FROM sudo");
    const _0x242dd7 = parseInt(_0x18fa68.rows[0x0].count);
    return _0x242dd7 > 0x0;
  } catch (_0xdb870e) {
    console.error("Erreur lors de la vérification de la table \"sudo\" :", _0xdb870e);
    return false;
  } finally {
    _0xdf1c51.release();
  }
}
;
module.exports = {
  'issudo': issudo,
  'addSudoNumber': addSudoNumber,
  'removeSudoNumber': removeSudoNumber,
  'getAllSudoNumbers': getAllSudoNumbers,
  'isSudoTableNotEmpty': isSudoTableNotEmpty
};
