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
const creerTableevents = async () => {
  try {
    await pool.query("\n      CREATE TABLE IF NOT EXISTS events (\n        Id serial PRIMARY KEY,\n        jid text UNIQUE,\n        welcome text DEFAULT 'non',\n        goodbye text DEFAULT 'non',\n        antipromote text DEFAULT 'non',\n        antidemote text DEFAULT 'non'\n      );\n    ");
    console.log("La table 'events' a été créée avec succès.");
  } catch (_0x4e08c9) {
    console.error("Une erreur est survenue lors de la création de la table 'events':", _0x4e08c9);
  }
};
creerTableevents();
async function attribuerUnevaleur(_0x5e0351, _0x892ed6, _0x1e5609) {
  const _0x44d082 = await pool.connect();
  try {
    const _0x426160 = await _0x44d082.query("SELECT * FROM events WHERE jid = $1", [_0x5e0351]);
    const _0xbb52a0 = _0x426160.rows.length > 0x0;
    if (_0xbb52a0) {
      await _0x44d082.query("UPDATE events SET " + _0x892ed6 + " = $1 WHERE jid = $2", [_0x1e5609, _0x5e0351]);
      console.log("La colonne " + _0x892ed6 + " a été actualisée sur " + _0x1e5609 + " pour le jid " + _0x5e0351);
    } else {
      await _0x44d082.query("INSERT INTO events (jid, " + _0x892ed6 + ") VALUES ($1, $2)", [_0x5e0351, _0x1e5609]);
      console.log("Nouveau jid " + _0x5e0351 + " ajouté avec la colonne " + _0x892ed6 + " ayant la valeur " + _0x1e5609);
    }
  } catch (_0x2442f4) {
    console.error("Erreur lors de l'actualisation de events :", _0x2442f4);
  } finally {
    _0x44d082.release();
  }
}
;
async function recupevents(_0x595913, _0x3c464c) {
  const _0x1c4ac1 = await pool.connect();
  try {
    const _0x4ce617 = await _0x1c4ac1.query("SELECT " + _0x3c464c + " FROM events WHERE jid = $1", [_0x595913]);
    const _0x48f8f1 = _0x4ce617.rows.length > 0x0;
    return _0x48f8f1 ? _0x4ce617.rows[0x0][_0x3c464c] : "non";
  } catch (_0x243360) {
    console.error(_0x243360);
  } finally {
    _0x1c4ac1.release();
  }
}
module.exports = {
  'attribuerUnevaleur': attribuerUnevaleur,
  'recupevents': recupevents
};
