require("dotenv").config();
const {
  Pool
} = require('pg');
const s = require('../set');
var dbUrl = s.DATABASE_URL ? s.DATABASE_URL : 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';
const proConfig = {
  'connectionString': dbUrl,
  'ssl': {
    'rejectUnauthorized': false
  }
};
const pool = new Pool(proConfig);
async function creerTableWarnUsers() {
  const _0x154ab4 = await pool.connect();
  try {
    await _0x154ab4.query("\n        CREATE TABLE IF NOT EXISTS warn_users (\n          jid text PRIMARY KEY,\n          warn_count integer DEFAULT 0\n        );\n      ");
    console.log("La table 'warn_users' a été créée avec succès.");
  } catch (_0x5043f0) {
    console.error("Erreur lors de la création de la table 'warn_users':", _0x5043f0);
  } finally {
    _0x154ab4.release();
  }
}
;
creerTableWarnUsers();
async function ajouterUtilisateurAvecWarnCount(_0x42eede) {
  const _0x29045b = await pool.connect();
  try {
    const _0x3bd43d = [_0x42eede];
    await _0x29045b.query("\n        INSERT INTO warn_users (jid, warn_count)\n        VALUES ($1, 1)\n        ON CONFLICT (jid)\n        DO UPDATE SET warn_count = warn_users.warn_count + 1;\n      ", _0x3bd43d);
    console.log("Utilisateur " + _0x42eede + " ajouté ou mis à jour avec un warn_count de 1.");
  } catch (_0x402aae) {
    console.error("Erreur lors de l'ajout ou de la mise à jour de l'utilisateur :", _0x402aae);
  } finally {
    _0x29045b.release();
  }
}
;
async function getWarnCountByJID(_0x399050) {
  const _0x1c160b = await pool.connect();
  try {
    const _0x484266 = [_0x399050];
    const _0x3bcd3b = await _0x1c160b.query("SELECT warn_count FROM warn_users WHERE jid = $1", _0x484266);
    if (_0x3bcd3b.rows.length > 0x0) {
      const _0x56fbc9 = _0x3bcd3b.rows[0x0].warn_count;
      return _0x56fbc9;
    } else {
      return 0x0;
    }
  } catch (_0x57ae71) {
    console.error("Erreur lors de la récupération du warn_count :", _0x57ae71);
    return -0x1;
  } finally {
    _0x1c160b.release();
  }
}
;
async function resetWarnCountByJID(_0x32b46a) {
  const _0x3116a6 = await pool.connect();
  try {
    const _0x3a79ef = [_0x32b46a];
    await _0x3116a6.query("UPDATE warn_users SET warn_count = 0 WHERE jid = $1", _0x3a79ef);
    console.log("Le warn_count de l'utilisateur " + _0x32b46a + " a été réinitialisé à 0.");
  } catch (_0x2a0923) {
    console.error("Erreur lors de la réinitialisation du warn_count :", _0x2a0923);
  } finally {
    _0x3116a6.release();
  }
}
module.exports = {
  'ajouterUtilisateurAvecWarnCount': ajouterUtilisateurAvecWarnCount,
  'getWarnCountByJID': getWarnCountByJID,
  'resetWarnCountByJID': resetWarnCountByJID
};
