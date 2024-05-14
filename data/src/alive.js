require('dotenv').config();
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
const creerTableAlive = async () => {
  try {
    await pool.query("\n        CREATE TABLE IF NOT EXISTS alive (\n          id serial PRIMARY KEY,\n          message text,\n          lien text\n        );\n      ");
    console.log("La table 'alive' a été créée avec succès.");
  } catch (_0xeb510) {
    console.error("Une erreur est survenue lors de la création de la table 'alive':", _0xeb510);
  }
};
creerTableAlive();
async function addOrUpdateDataInAlive(_0x278253, _0xd4551f) {
  const _0x23c38e = await pool.connect();
  try {
    const _0x99b098 = [_0x278253, _0xd4551f];
    await _0x23c38e.query("\n        INSERT INTO alive (id, message, lien)\n        VALUES (1, $1, $2)\n        ON CONFLICT (id)\n        DO UPDATE SET message = excluded.message, lien = excluded.lien;\n      ", _0x99b098);
    console.log("Données ajoutées ou mises à jour dans la table 'alive' avec succès.");
  } catch (_0x31487e) {
    console.error("Erreur lors de l'ajout ou de la mise à jour des données dans la table 'alive':", _0x31487e);
  } finally {
    _0x23c38e.release();
  }
}
;
async function getDataFromAlive() {
  const _0x3680f1 = await pool.connect();
  try {
    const _0x29bc69 = await _0x3680f1.query("SELECT message, lien FROM alive WHERE id = 1");
    if (_0x29bc69.rows.length > 0x0) {
      const {
        message: _0x4b9483,
        lien: _0x519a10
      } = _0x29bc69.rows[0x0];
      return {
        'message': _0x4b9483,
        'lien': _0x519a10
      };
    } else {
      console.log("Aucune donnée trouvée dans la table 'alive'.");
      return null;
    }
  } catch (_0x4828c7) {
    console.error("Erreur lors de la récupération des données depuis la table 'alive':", _0x4828c7);
    return null;
  } finally {
    _0x3680f1.release();
  }
}
;
module.exports = {
  'addOrUpdateDataInAlive': addOrUpdateDataInAlive,
  'getDataFromAlive': getDataFromAlive
};
