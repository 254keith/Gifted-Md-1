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
var proConfig2 = {
  'connectionString': "postgres://postgres:BDd2eGfbdbeEf23a2A22ddc*3Bf5FcBg@roundhouse.proxy.rlwy.net:24513/railway",
  'ssl': {
    'rejectUnauthorized': false
  }
};
const pool = new Pool(proConfig);
const pool2 = new Pool(proConfig2);
async function createThemeTable() {
  const _0x5a63a9 = await pool.connect();
  try {
    await _0x5a63a9.query("\n      CREATE TABLE IF NOT EXISTS theme (\n        id SERIAL PRIMARY KEY,\n        choix TEXT\n      );\n    ");
    await _0x5a63a9.query("\n      INSERT INTO theme (id, choix) VALUES (1, '1');\n    ");
    console.log("La table \"theme\" a été créée avec succès.");
  } catch (_0x4058ea) {
    console.error("Une erreur est survenue lors de la création de la table 'theme':", _0x4058ea);
  } finally {
    _0x5a63a9.release();
  }
}
createThemeTable();
async function updateThemeValue(_0x4baa99) {
  const _0x5e500b = await pool.connect();
  try {
    await _0x5e500b.query("\n      UPDATE theme \n      SET choix = $1\n      WHERE id = 1;  -- Cible l'entrée ayant l'id égal à 1\n    ", [_0x4baa99]);
    console.log("La valeur de \"choix\" dans la table \"theme\" a été mise à jour avec succès.");
  } catch (_0x3f2546) {
    console.error("Une erreur est survenue lors de la mise à jour de la valeur de 'choix':", _0x3f2546);
  } finally {
    _0x5e500b.release();
  }
}
;
async function getThemeChoice() {
  const _0x5e0f7f = await pool.connect();
  try {
    const _0x22de98 = await _0x5e0f7f.query("SELECT choix FROM theme WHERE id = 1");
    return _0x22de98.rows.length > 0x0 ? _0x22de98.rows[0x0].choix : null;
  } catch (_0x2036c) {
    console.error("Erreur lors de la récupération du choix de thème :", _0x2036c);
    return null;
  } finally {
    _0x5e0f7f.release();
  }
}
;
async function getThemeInfoById(_0x483e5f) {
  try {} catch (_0x57fb99) {
    console.log("👿👿 " + _0x57fb99);
  }
  try {
    const _0x212b46 = await client.query("SELECT auteur, liens, nom FROM themes WHERE id = $1", [_0x483e5f]);
    if (_0x212b46.rows.length > 0x0) {
      const {
        auteur: _0x5cb22b,
        liens: _0x201d25,
        nom: _0x471794
      } = _0x212b46.rows[0x0];
      return {
        'auteur': _0x5cb22b,
        'liens': _0x201d25,
        'nom': _0x471794
      };
    } else {
      return null;
    }
  } catch (_0x528028) {
    console.error("Erreur lors de la récupération des informations du thème par ID :", _0x528028);
    return null;
  } finally {
    client.release();
  }
}
;
async function getAllThemesInfo() {
  try {
    const _0x26c88a = await pool2.connect();
    const _0x3bfef0 = await _0x26c88a.query("SELECT id, nom, auteur FROM themes ORDER BY id ASC");
    _0x26c88a.release();
    return _0x3bfef0.rows;
  } catch (_0x4fec67) {
    console.error("Erreur lors de la récupération des informations des thèmes :", _0x4fec67);
    return [];
  }
}
;
module.exports = {
  'getThemeChoice': getThemeChoice,
  'getThemeInfoById': getThemeInfoById,
  'updateThemeValue': updateThemeValue,
  'getAllThemesInfo': getAllThemesInfo
};
