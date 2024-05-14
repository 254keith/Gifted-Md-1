require('dotenv').config();
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
async function creerTableStickcmd() {
  try {
    await pool.query("\n      CREATE TABLE IF NOT EXISTS stickcmd (\n        cmd text PRIMARY KEY,\n        id text NOT NULL\n      );\n    ");
    console.log("La table 'stickcmd' a été créée avec succès.");
  } catch (_0xcee2ed) {
    console.error("Une erreur est survenue lors de la création de la table 'stickcmd':", _0xcee2ed);
  }
}
creerTableStickcmd();
async function addstickcmd(_0x791ef5, _0x16ab3a) {
  let _0x1b4361;
  try {
    _0x1b4361 = await pool.connect();
    const _0x2480ac = [_0x791ef5, _0x16ab3a];
    await _0x1b4361.query("INSERT INTO stickcmd(cmd, id) VALUES ($1, $2)", _0x2480ac);
  } catch (_0x2da205) {
    console.log("Erreur lors de l'ajout du stickcmd", _0x2da205);
  } finally {
    if (_0x1b4361) {
      _0x1b4361.release();
    }
  }
}
async function inStickCmd(_0x27dffe) {
  let _0x397af4;
  try {
    _0x397af4 = await pool.connect();
    const _0x1e7f57 = [_0x27dffe];
    const _0x2f1782 = await _0x397af4.query("SELECT  EXISTS (SELECT 1 FROM stickcmd WHERE id = $1)", _0x1e7f57);
    return _0x2f1782.rows[0x0].exists;
  } catch (_0x59e0c0) {
    return false;
  } finally {
    if (_0x397af4) {
      _0x397af4.release();
    }
  }
}
async function deleteCmd(_0x145662) {
  const _0x37d0a0 = await pool.connect();
  try {
    const _0x2366f6 = [_0x145662];
    await _0x37d0a0.query("DELETE FROM stickcmd WHERE cmd = $1", _0x2366f6);
    console.log("Le stickcmd " + _0x145662 + " a été supprimé de la liste.");
  } catch (_0x59aa67) {
    console.error("Erreur lors de la suppression du stickcmd :", _0x59aa67);
  } finally {
    _0x37d0a0.release();
  }
}
;
async function getCmdById(_0xba0f01) {
  let _0x2adcad;
  try {
    _0x2adcad = await pool.connect();
    const _0xeaeb6b = [_0xba0f01];
    const _0x2f0655 = await _0x2adcad.query("SELECT cmd FROM stickcmd WHERE id = $1", _0xeaeb6b);
    return _0x2f0655.rows.length > 0x0 ? _0x2f0655.rows[0x0].cmd : null;
  } catch (_0x1a0652) {
    console.error("Erreur lors de la récupération du stickcmd par id :", _0x1a0652);
    return null;
  } finally {
    if (_0x2adcad) {
      _0x2adcad.release();
    }
  }
}
;
async function getAllStickCmds() {
  const _0x219be8 = await pool.connect();
  try {
    const _0x2b7380 = await _0x219be8.query("SELECT cmd FROM stickcmd");
    return _0x2b7380.rows;
  } catch (_0xe4c6d0) {
    console.error("Erreur lors de la récupération de toutes les commandes stickcmd :", _0xe4c6d0);
    return [];
  } finally {
    _0x219be8.release();
  }
}
;
module.exports = {
  'addstickcmd': addstickcmd,
  'deleteCmd': deleteCmd,
  'getCmdById': getCmdById,
  'inStickCmd': inStickCmd,
  'getAllStickCmds': getAllStickCmds
};
