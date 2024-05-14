



'use strict';
Object.defineProperty(exports, "__esModule", {
  'value': true
});
exports.reaction = exports.recept_message = exports.getBuffer = exports.zJson = exports.apiWaifu = exports.format = exports.fruit = exports.tabCmd = exports.police = exports.styletext = exports.xlab = exports.ajouterCommande = undefined;
const axios = require('axios');
const path = require("path");
const cheerio = require("cheerio");
const baileys_1 = require("@whiskeysockets/baileys");
const fs = require("fs-extra");
const util = require("util");
let {
  listall
} = require('./stylish-font');
module.exports.genererNomFichier = async _0x371d54 => {
  var _0x5c1201 = Math.floor(Math.random() * 0x7d0);
  var _0x321f36 = "Zok" + _0x5c1201 + '.' + _0x371d54;
  return _0x321f36;
};
module.exports.stick = async (_0xb18de3, _0x5eea3d) => {
  var _0x435202 = new Sticker(_0xb18de3, {
    'pack': "Gifted-Md",
    'author': _0x5eea3d,
    'type': StickerTypes.FULL,
    'categories': ['🤩', '🎉'],
    'id': "12345",
    'quality': 0x32,
    'background': "#000000"
  });
  return _0x435202;
};
async function zJson(_0x8f3ef4, _0x1b1f17) {
  try {
    if (_0x1b1f17) {
      _0x1b1f17;
    } else {
      ({});
    }
    const _0x40d69b = await axios({
      'method': 'GET',
      'url': _0x8f3ef4,
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
      },
      ..._0x1b1f17
    });
    return _0x40d69b.data;
  } catch (_0x342628) {
    return _0x342628;
  }
}
exports.zJson = zJson;
async function getBuffer(_0x2321e3, _0x1b3af6) {
  try {
    if (_0x1b3af6) {
      _0x1b3af6;
    } else {
      ({});
    }
    const _0x22aff0 = await axios({
      'method': "GET",
      'url': _0x2321e3,
      'headers': {
        'DNT': 0x1,
        'Upgrade-Insecure-Request': 0x1
      },
      ..._0x1b3af6,
      'responseType': "arrayBuffer"
    });
    return _0x22aff0.data;
  } catch (_0x391b88) {
    console.log(_0x391b88);
  }
}
exports.getBuffer = getBuffer;
async function recept_message(_0x40f115, _0x3092a6, _0xc2a99e) {
  if (!_0x3092a6) {
    return;
  }
  if (_0x3092a6.key) {
    _0x3092a6.cleMessage = _0x3092a6.key;
    _0x3092a6.idMessage = _0x3092a6.key.id;
    _0x3092a6.origineMessage = _0x3092a6.key.remoteJid;
    _0x3092a6.moi = _0x3092a6.key.fromMe;
    _0x3092a6.groupe = _0x3092a6.origineMessage.endsWith("@g.us");
    _0x3092a6.origineBot = _0x3092a6.idMessage.startsWith('BAE5') && _0x3092a6.idMessage.length == 0x10;
  }
  if (_0x3092a6.message) {
    0x0;
    _0x3092a6.typeMessage = baileys_1.getContentType(_0x3092a6.message);
    _0x3092a6.ms = _0x3092a6.typeMessage == "viewOnceMessage" ? _0x3092a6.message[_0x3092a6.typeMessage].message[(0x0, baileys_1.getContentType)(_0x3092a6.message[_0x3092a6.typeMessage].message)] : _0x3092a6.message[_0x3092a6.typeMessage];
    try {
      switch (_0x3092a6.typeMessage) {
        case "conversation":
          _0x3092a6.corpsMessage = _0x3092a6.message.conversation;
          break;
        case "imageMessage":
          _0x3092a6.corpsMessage = _0x3092a6.message.imageMessage.caption;
          break;
        case 'videoMessage':
          _0x3092a6.corpsMessage = _0x3092a6.message.videoMessage.caption;
          break;
        case "entendedTextMessage":
          _0x3092a6.corpsMessage = _0x3092a6.message.extendedTextMessage.Textarea;
          break;
        case "buttonsResponseMessage":
          _0x3092a6.corpsMessage = _0x3092a6.message.buttonsResponseMessage.SelectedButtonId;
          break;
        case "listResponseMessage":
          _0x3092a6.corpsMessage = _0x3092a6.message.listResponseMessage.singleSelectReply.selectedRowId;
          break;
        case "templateButtonReplyMessage":
          _0x3092a6.corpsMessage = _0x3092a6.message.templateButtonReplyMessage.selectedId;
          break;
        case 'messageContextInfo':
          _0x3092a6.corpsMessage = _0x3092a6.message.buttonsResponseMessage.SelectedButtonId || _0x3092a6.message.listResponseMessage.singleSelectReply.selectedRowId || _0x3092a6.text || '';
          break;
        default:
          _0x3092a6.corpsMessage = false;
      }
    } catch {
      _0x3092a6.corpsMessage = false;
    }
  }
  _0x3092a6.mentionedJid = _0x3092a6.ms.contextInfo ? _0x3092a6.ms.contextInfo.mentionedJid : [];
  if (_0x3092a6.quoted) {}
  return _0x3092a6;
}
exports.recept_message = recept_message;
function styletext(_0x5754ef) {
  return new Promise((_0x133448, _0x2b98a8) => {
    axios.get("http://qaz.wtf/u/convert.cgi?text=" + _0x5754ef).then(({
      data: _0x27bacf
    }) => {
      let _0x365502 = cheerio.load(_0x27bacf);
      let _0x700c94 = [];
      _0x365502("table > tbody > tr").each(function (_0x4347ba, _0x4406f9) {
        _0x700c94.push({
          'name': _0x365502(_0x4406f9).find("td:nth-child(1) > span").text(),
          'result': _0x365502(_0x4406f9).find("td:nth-child(2)").text().trim()
        });
      });
      _0x133448(_0x700c94);
    });
  });
}
exports.styletext = styletext;
async function apiWaifu(_0x5a9c04) {
  var _0x30536b = "https://api.waifu.pics/nsfw/";
  if (_0x5a9c04 == "waifu") {
    _0x30536b += _0x5a9c04;
  } else {
    if (_0x5a9c04 == 'trap') {
      _0x30536b += _0x5a9c04;
    } else {
      if (_0x5a9c04 == "neko") {
        _0x30536b += _0x5a9c04;
      } else if (_0x5a9c04 == "blowjob") {
        _0x30536b += "blowjob";
      } else {
        _0x30536b = "https://api.waifu.pics/nsfw/waifu";
      }
    }
  }
  try {
    const _0x504eb6 = await axios.get(_0x30536b);
    return _0x504eb6.data.url;
  } catch (_0x506105) {
    console.log(_0x506105);
  }
}
exports.apiWaifu = apiWaifu;
var tabCmd = {};
exports.tabCmd = tabCmd;
var reaction = {};
exports.reaction = reaction;
var fruit = {};
exports.fruit = fruit;
async function ajouterCommande() {
  fs.readdirSync(__dirname + "/../app").forEach(_0x52368c => {
    if (path.extname(_0x52368c).toLowerCase() == ".js") {
      require(__dirname + '/../app/' + _0x52368c.split(".js")[0x0]);
      console.log("fichier : " + _0x52368c);
    }
  });
}
exports.ajouterCommande = ajouterCommande;
async function xlab() {
  const _0x37d2ce = util.promisify(fs.readdir);
  var _0x5d2d8d = await _0x37d2ce("./app/");
  _0x5d2d8d.forEach(_0x2bb311 => {
    if (_0x2bb311.endsWith(".js")) {
      var {
        commande: _0x1f8d64
      } = require(__dirname + "/../app/" + _0x2bb311.split(".js")[0x0]);
      var _0x44731f;
      if (_0x1f8d64) {
        _0x44731f = _0x1f8d64();
      } else {
        _0x44731f = null;
      }
      if (_0x44731f != null) {
        for (const _0x5f3f54 of _0x44731f.nomCom) {
          fruit[_0x5f3f54] = _0x44731f.execute;
        }
      }
    }
  });
}
exports.xlab = xlab;
const human_readable_1 = require("human-readable");
0x0;
const format = human_readable_1.sizeFormatter({
  'std': 'JEDEC',
  'decimalPlaces': 0x2,
  'keepTrailingZeroes': false,
  'render': (_0x3b047e, _0x57ee45) => _0x3b047e + " " + _0x57ee45 + 'B'
});
exports.format = format;
function police(_0x2d3c7f, _0x467c3e) {
  _0x467c3e = _0x467c3e - 0x1;
  return listall(_0x2d3c7f)[_0x467c3e];
}
exports.police = police;
