require("dotenv").config();
const {
  Pool
} = require('pg');
let s = require("../set");
var dbUrl = s.DATABASE_URL ? s.DATABASE_URL : 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';
const proConfig = {
  'connectionString': dbUrl,
  'ssl': {
    'rejectUnauthorized': false
  }
};
const pool = new Pool(proConfig);
async function createTablecron() {
  const _0x2021e1 = await pool.connect();
  try {
    await _0x2021e1.query("\n        CREATE TABLE IF NOT EXISTS cron (\n          group_id text PRIMARY KEY,\n          mute_at text default null,\n          unmute_at text default null\n        );\n      ");
    console.log("La table 'cron' a été créée avec succès.");
  } catch (_0x82abe7) {
    console.error("Une erreur est survenue lors de la création de la table 'cron':", _0x82abe7);
  } finally {
    _0x2021e1.release();
  }
}
;
createTablecron();
async function getCron() {
  const _0x5e5458 = await pool.connect();
  try {
    const _0x534f09 = await _0x5e5458.query("SELECT * FROM cron");
    return _0x534f09.rows;
  } catch (_0x10eb9b) {
    console.error("Erreur lors de la récupération des données de la table \"cron\":", _0x10eb9b);
  } finally {
    _0x5e5458.release();
  }
}
;
async function addCron(_0x5a5f80, _0x12661b, _0x58f00b) {
  const _0x48e3cf = await pool.connect();
  try {
    let _0x29f813 = await _0x48e3cf.query("\n      SELECT * FROM cron WHERE group_id = $1", [_0x5a5f80]);
    let _0x3ade71 = _0x29f813.rows.length > 0x0;
    if (_0x3ade71) {
      await _0x48e3cf.query("\n    UPDATE cron SET " + _0x12661b + " = $1 WHERE group_id = $2 ", [_0x58f00b, _0x5a5f80]);
    } else {
      const _0x4f44e4 = "\n      INSERT INTO cron (group_id, " + _0x12661b + ") \n      VALUES ($1, $2)";
      await _0x48e3cf.query(_0x4f44e4, [_0x5a5f80, _0x58f00b]);
    }
  } catch (_0xd9754a) {
    console.error("Erreur lors de l'ajout de la donnée dans la table \"cron\":", _0xd9754a);
  } finally {
    _0x48e3cf.release();
  }
}
async function getCronById(_0x179437) {
  const _0x2423df = await pool.connect();
  try {
    const _0x479dd5 = await _0x2423df.query("SELECT * FROM cron WHERE group_id = $1", [_0x179437]);
    return _0x479dd5.rows[0x0];
  } catch (_0x30eaaf) {
    console.error("Erreur lors de la récupération des données de la table \"cron\":", _0x30eaaf);
  } finally {
    _0x2423df.release();
  }
}
async function delCron(_0xa265b9) {
  const _0x3c96d6 = await pool.connect();
  try {
    await _0x3c96d6.query("DELETE FROM cron WHERE group_id = $1", [_0xa265b9]);
  } catch (_0x45829e) {
    console.error("Erreur lors de la suppression de la donnée dans la table \"cron\":", _0x45829e);
  } finally {
    _0x3c96d6.release();
  }
}
module.exports = {
  'getCron': getCron,
  'addCron': addCron,
  'delCron': delCron,
  'getCronById': getCronById
};
