require('dotenv').config();
const {
  Pool
} = require('pg');
let s = require("../set");
var dbUrl = s.DATABASE_URL ? s.DATABASE_URL : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9";
const proConfig = {
  'connectionString': dbUrl,
  'ssl': {
    'rejectUnauthorized': false
  }
};
const pool = new Pool(proConfig);
async function createAntibotTable() {
  const _0x1e40ac = await pool.connect();
  try {
    await _0x1e40ac.query("\n      CREATE TABLE IF NOT EXISTS antibot (\n        jid text PRIMARY KEY,\n        etat text,\n        action text\n      );\n    ");
    console.log("La table 'antibot' a été créée avec succès.");
  } catch (_0x2d58fa) {
    console.error("Une erreur est survenue lors de la création de la table 'antibot':", _0x2d58fa);
  } finally {
    _0x1e40ac.release();
  }
}
createAntibotTable();
async function atbajouterOuMettreAJourJid(_0x2ca4bb, _0x157f44) {
  const _0x45fa27 = await pool.connect();
  try {
    const _0x370821 = await _0x45fa27.query("SELECT * FROM antibot WHERE jid = $1", [_0x2ca4bb]);
    const _0x1c6d55 = _0x370821.rows.length > 0x0;
    if (_0x1c6d55) {
      await _0x45fa27.query("UPDATE antibot SET etat = $1 WHERE jid = $2", [_0x157f44, _0x2ca4bb]);
    } else {
      await _0x45fa27.query("INSERT INTO antibot (jid, etat, action) VALUES ($1, $2, $3)", [_0x2ca4bb, _0x157f44, "supp"]);
    }
    console.log("JID " + _0x2ca4bb + " ajouté ou mis à jour avec succès dans la table 'antibot'.");
  } catch (_0x15ce6a) {
    console.error("Erreur lors de l'ajout ou de la mise à jour du JID dans la table ,", _0x15ce6a);
  } finally {
    _0x45fa27.release();
  }
}
;
async function atbmettreAJourAction(_0x26d92e, _0x240cce) {
  const _0x1033ce = await pool.connect();
  try {
    const _0x44d08d = await _0x1033ce.query("SELECT * FROM antibot WHERE jid = $1", [_0x26d92e]);
    const _0x2799dc = _0x44d08d.rows.length > 0x0;
    if (_0x2799dc) {
      await _0x1033ce.query("UPDATE antibot SET action = $1 WHERE jid = $2", [_0x240cce, _0x26d92e]);
    } else {
      await _0x1033ce.query("INSERT INTO antibot (jid, etat, action) VALUES ($1, $2, $3)", [_0x26d92e, "non", _0x240cce]);
    }
    console.log("Action mise à jour avec succès pour le JID " + _0x26d92e + " dans la table 'antibot'.");
  } catch (_0x38fe9f) {
    console.error("Erreur lors de la mise à jour de l'action pour le JID dans la table  :", _0x38fe9f);
  } finally {
    _0x1033ce.release();
  }
}
;
async function atbverifierEtatJid(_0x51f861) {
  const _0x3a25f5 = await pool.connect();
  try {
    const _0x3c18af = await _0x3a25f5.query("SELECT etat FROM antibot WHERE jid = $1", [_0x51f861]);
    if (_0x3c18af.rows.length > 0x0) {
      const _0x5246ed = _0x3c18af.rows[0x0].etat;
      return _0x5246ed === "oui";
    } else {
      return false;
    }
  } catch (_0x25b7f8) {
    console.error("Erreur lors de la vérification de l'état du JID dans la table ", _0x25b7f8);
    return false;
  } finally {
    _0x3a25f5.release();
  }
}
;
async function atbrecupererActionJid(_0x16a002) {
  const _0x24177b = await pool.connect();
  try {
    const _0x2cd996 = await _0x24177b.query("SELECT action FROM antibot WHERE jid = $1", [_0x16a002]);
    if (_0x2cd996.rows.length > 0x0) {
      const _0xa42282 = _0x2cd996.rows[0x0].action;
      return _0xa42282;
    } else {
      return "supp";
    }
  } catch (_0x3aebb1) {
    console.error("Erreur lors de la récupération de l'action du JID dans la table :", _0x3aebb1);
    return "supp";
  } finally {
    _0x24177b.release();
  }
}
;
module.exports = {
  'atbmettreAJourAction': atbmettreAJourAction,
  'atbajouterOuMettreAJourJid': atbajouterOuMettreAJourJid,
  'atbverifierEtatJid': atbverifierEtatJid,
  'atbrecupererActionJid': atbrecupererActionJid
};
