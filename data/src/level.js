require("dotenv").config();
const {
  Pool
} = require('pg');
const s = require("../set");
const dbUrl = s.DATABASE_URL ? s.DATABASE_URL : 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';
const proConfig = {
  'connectionString': dbUrl,
  'ssl': {
    'rejectUnauthorized': false
  }
};
const pool = new Pool(proConfig);
async function createUsersRankTable() {
  const _0x813f41 = await pool.connect();
  try {
    await _0x813f41.query("\n      CREATE TABLE IF NOT EXISTS users_rank (\n        id SERIAL PRIMARY KEY,\n        jid VARCHAR(255) UNIQUE,\n        xp INTEGER DEFAULT 0,\n        messages INTEGER DEFAULT 0\n      );\n    ");
  } catch (_0x24ef62) {
    console.error("Erreur lors de la création de la table users_rank:", _0x24ef62);
  } finally {
    _0x813f41.release();
  }
}
async function ajouterOuMettreAJourUserData(_0x22bbbf) {
  const _0x498bfc = await pool.connect();
  try {
    const _0x33f267 = await _0x498bfc.query("SELECT * FROM users_rank WHERE jid = $1", [_0x22bbbf]);
    const _0x58cf3a = _0x33f267.rows.length > 0x0;
    if (_0x58cf3a) {
      await _0x498bfc.query("UPDATE users_rank SET xp = xp + 10, messages = messages + 1 WHERE jid = $1", [_0x22bbbf]);
    } else {
      await _0x498bfc.query("INSERT INTO users_rank (jid, xp, messages) VALUES ($1, $2, $3)", [_0x22bbbf, 0xa, 0x1]);
    }
  } catch (_0x3c6529) {
    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", _0x3c6529);
  } finally {
    _0x498bfc.release();
  }
}
;
async function getMessagesAndXPByJID(_0x56de18) {
  const _0x26e61b = await pool.connect();
  try {
    const _0x2e71bf = await _0x26e61b.query("SELECT messages, xp FROM users_rank WHERE jid = $1", [_0x56de18]);
    if (_0x2e71bf.rows.length > 0x0) {
      const {
        messages: _0x58c721,
        xp: _0x2d2579
      } = _0x2e71bf.rows[0x0];
      return {
        'messages': _0x58c721,
        'xp': _0x2d2579
      };
    } else {
      return {
        'messages': 0x0,
        'xp': 0x0
      };
    }
  } catch (_0x371323) {
    console.error("Erreur lors de la récupération des données de l'utilisateur:", _0x371323);
    return {
      'messages': 0x0,
      'xp': 0x0
    };
  } finally {
    _0x26e61b.release();
  }
}
async function getBottom10Users() {
  const _0x46f87e = await pool.connect();
  try {
    const _0x144dca = await _0x46f87e.query("SELECT jid, xp , messages FROM users_rank ORDER BY xp DESC LIMIT 10");
    return _0x144dca.rows;
  } catch (_0x59b622) {
    console.error("Erreur lors de la récupération du bottom 10 des utilisateurs:", _0x59b622);
    return [];
  } finally {
    _0x46f87e.release();
  }
}
createUsersRankTable();
module.exports = {
  'ajouterOuMettreAJourUserData': ajouterOuMettreAJourUserData,
  'getMessagesAndXPByJID': getMessagesAndXPByJID,
  'getBottom10Users': getBottom10Users
};
