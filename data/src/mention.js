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
async function creerTableMention() {
  const _0x2e0551 = await pool.connect();
  try {
    await _0x2e0551.query("\n        CREATE TABLE IF NOT EXISTS mention (\n          id serial PRIMARY KEY,\n          status text DEFAULT 'non',\n          url text,\n          type text,\n          message text\n        );\n      ");
    console.log("La table 'mention' a été créée avec succès.");
  } catch (_0x41e852) {
    console.error("Une erreur est survenue lors de la création de la table 'mention':", _0x41e852);
  } finally {
    _0x2e0551.release();
  }
}
;
creerTableMention();
async function addOrUpdateDataInMention(_0x21f5f3, _0x3248aa, _0x173a1c) {
  const _0x2815c3 = await pool.connect();
  try {
    const _0x213235 = [_0x21f5f3, _0x3248aa, _0x173a1c];
    await _0x2815c3.query("\n              INSERT INTO mention (id, url, type, message)\n              VALUES (1, $1, $2, $3)\n              ON CONFLICT (id)\n              DO UPDATE SET  url = excluded.url, type = excluded.type , message = excluded.message;\n          ", _0x213235);
    console.log("Données ajoutées ou mises à jour dans la table 'mention' avec succès.");
  } catch (_0x474a57) {
    console.error("Erreur lors de l'ajout ou de la mise à jour des données dans la table 'mention':", _0x474a57);
  } finally {
    _0x2815c3.release();
  }
}
;
async function modifierStatusId1(_0x423842) {
  const _0x3d015e = await pool.connect();
  try {
    const _0x242b39 = [_0x423842];
    await _0x3d015e.query("\n            UPDATE mention\n            SET status = $1\n            WHERE id = 1;\n        ", _0x242b39);
    console.log("Le status a été modifié avec succès pour l'ID 1 dans la table 'mention'.");
  } catch (_0x538c7b) {
    console.error("Erreur lors de la modification du status pour l'ID 1 dans la table 'mention':", _0x538c7b);
  } finally {
    _0x3d015e.release();
  }
}
;
async function recupererToutesLesValeurs() {
  const _0x2bfe2d = await pool.connect();
  try {
    const _0x576257 = await _0x2bfe2d.query("\n            SELECT * FROM mention;\n        ");
    console.log("Voici toutes les valeurs de la table 'mention':", _0x576257.rows);
    return _0x576257.rows;
  } catch (_0x15018a) {
    console.error("Erreur lors de la récupération des valeurs de la table 'mention':", _0x15018a);
  } finally {
    _0x2bfe2d.release();
  }
}
;
module.exports = {
  'addOrUpdateDataInMention': addOrUpdateDataInMention,
  'recupererToutesLesValeurs': recupererToutesLesValeurs,
  'modifierStatusId1': modifierStatusId1
};
