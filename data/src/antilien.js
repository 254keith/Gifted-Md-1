require("dotenv").config();
const {
  Pool
} = require('pg');
let s = require(".../set");
var dbUrl = s.DATABASE_URL ? s.DATABASE_URL : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9";
const proConfig = {
  'connectionString': dbUrl,
  'ssl': {
    'rejectUnauthorized': false
  }
};
const pool = new Pool(proConfig);
async function createAntilienTable() {
  const _0x836b76 = await pool.connect();
  try {
    await _0x836b76.query("\n      CREATE TABLE IF NOT EXISTS antilien (\n        jid text PRIMARY KEY,\n        etat text,\n        action text\n      );\n    ");
    console.log("La table 'antilien' a été créée avec succès.");
  } catch (_0x336f7f) {
    console.error("Une erreur est survenue lors de la création de la table 'antilien':", _0x336f7f);
  } finally {
    _0x836b76.release();
  }
}
createAntilienTable();
async function ajouterOuMettreAJourJid(_0x55dabb, _0x112bff) {
  const _0x5c72e4 = await pool.connect();
  try {
    const _0x5f50db = await _0x5c72e4.query("SELECT * FROM antilien WHERE jid = $1", [_0x55dabb]);
    const _0x791161 = _0x5f50db.rows.length > 0x0;
    if (_0x791161) {
      await _0x5c72e4.query("UPDATE antilien SET etat = $1 WHERE jid = $2", [_0x112bff, _0x55dabb]);
    } else {
      await _0x5c72e4.query("INSERT INTO antilien (jid, etat, action) VALUES ($1, $2, $3)", [_0x55dabb, _0x112bff, "supp"]);
    }
    console.log("JID " + _0x55dabb + " ajouté ou mis à jour avec succès dans la table 'antilien'.");
  } catch (_0x262db5) {
    console.error("Erreur lors de l'ajout ou de la mise à jour du JID dans la table ,", _0x262db5);
  } finally {
    _0x5c72e4.release();
  }
}
;
async function mettreAJourAction(_0x30b9f9, _0x26a81e) {
  const _0x2ca9b7 = await pool.connect();
  try {
    const _0x579aed = await _0x2ca9b7.query("SELECT * FROM antilien WHERE jid = $1", [_0x30b9f9]);
    const _0x11b8a0 = _0x579aed.rows.length > 0x0;
    if (_0x11b8a0) {
      await _0x2ca9b7.query("UPDATE antilien SET action = $1 WHERE jid = $2", [_0x26a81e, _0x30b9f9]);
    } else {
      await _0x2ca9b7.query("INSERT INTO antilien (jid, etat, action) VALUES ($1, $2, $3)", [_0x30b9f9, "non", _0x26a81e]);
    }
    console.log("Action mise à jour avec succès pour le JID " + _0x30b9f9 + " dans la table 'antilien'.");
  } catch (_0x5d2c4b) {
    console.error("Erreur lors de la mise à jour de l'action pour le JID dans la table  :", _0x5d2c4b);
  } finally {
    _0x2ca9b7.release();
  }
}
;
async function verifierEtatJid(_0x5001a0) {
  const _0x180fd3 = await pool.connect();
  try {
    const _0x47ddb1 = await _0x180fd3.query("SELECT etat FROM antilien WHERE jid = $1", [_0x5001a0]);
    if (_0x47ddb1.rows.length > 0x0) {
      const _0x5d786a = _0x47ddb1.rows[0x0].etat;
      return _0x5d786a === "oui";
    } else {
      return false;
    }
  } catch (_0x409974) {
    console.error("Erreur lors de la vérification de l'état du JID dans la table ", _0x409974);
    return false;
  } finally {
    _0x180fd3.release();
  }
}
;
async function recupererActionJid(_0x4d728a) {
  const _0x5612c4 = await pool.connect();
  try {
    const _0x26b369 = await _0x5612c4.query("SELECT action FROM antilien WHERE jid = $1", [_0x4d728a]);
    if (_0x26b369.rows.length > 0x0) {
      const _0x5530a6 = _0x26b369.rows[0x0].action;
      return _0x5530a6;
    } else {
      return "supp";
    }
  } catch (_0x212e68) {
    console.error("Erreur lors de la récupération de l'action du JID dans la table :", _0x212e68);
    return "supp";
  } finally {
    _0x5612c4.release();
  }
}
;
module.exports = {
  'mettreAJourAction': mettreAJourAction,
  'ajouterOuMettreAJourJid': ajouterOuMettreAJourJid,
  'verifierEtatJid': verifierEtatJid,
  'recupererActionJid': recupererActionJid
};
