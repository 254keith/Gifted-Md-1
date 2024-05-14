const translatte = require("translatte");
async function traduire(_0xd0f5e9, _0x122fd1) {
  try {
    const _0x164243 = await translatte(_0xd0f5e9, _0x122fd1);
    return _0x164243.text;
  } catch (_0x116d9c) {
    throw _0x116d9c;
  }
}
module.exports = traduire;
