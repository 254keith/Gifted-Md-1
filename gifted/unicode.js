module.exports = new StyleText();
function StyleText() {
  this.tools = {
    'flip': {
      'init': function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },
      'encode': function (_0x5a68ff) {
        var _0x1aea18 = [];
        var _0x38cf0f;
        var _0x20b8a1 = 0x0;
        for (var _0x2f4b28 = _0x5a68ff.length; _0x20b8a1 < _0x2f4b28; _0x20b8a1++) {
          _0x38cf0f = _0x5a68ff.charAt(_0x20b8a1);
          if (_0x20b8a1 > 0x0 && (_0x38cf0f == '̤' || _0x38cf0f == '̗' || _0x38cf0f == '̖' || _0x38cf0f == '̮')) {
            _0x38cf0f = this.map[_0x5a68ff.charAt(_0x20b8a1 - 0x1) + _0x38cf0f];
            _0x1aea18.pop();
          } else {
            _0x38cf0f = this.map[_0x38cf0f];
            if (typeof _0x38cf0f == "undefined") {
              _0x38cf0f = _0x5a68ff.charAt(_0x20b8a1);
            }
          }
          _0x1aea18.push(_0x38cf0f);
        }
        return _0x1aea18.reverse().join('');
      },
      'decode': function (_0x1a5b4f) {
        var _0x2b52f7 = [];
        var _0x3215f3;
        var _0x813f88 = 0x0;
        for (var _0xceb529 = _0x1a5b4f.length; _0x813f88 < _0xceb529; _0x813f88++) {
          _0x3215f3 = _0x1a5b4f.charAt(_0x813f88);
          if (_0x813f88 > 0x0 && (_0x3215f3 == '̤' || _0x3215f3 == '̗' || _0x3215f3 == '̖' || _0x3215f3 == '̮')) {
            _0x3215f3 = this.map[_0x1a5b4f.charAt(_0x813f88 - 0x1) + _0x3215f3];
            _0x2b52f7.pop();
          } else {
            _0x3215f3 = this.map[_0x3215f3];
            if (typeof _0x3215f3 == "undefined") {
              _0x3215f3 = _0x1a5b4f.charAt(_0x813f88);
            }
          }
          _0x2b52f7.push(_0x3215f3);
        }
        return _0x2b52f7.reverse().join('');
      },
      'map': {
        'a': 'ɐ',
        'b': 'q',
        'c': 'ɔ',
        'd': 'p',
        'e': 'ǝ',
        'f': 'ɟ',
        'g': 'ɓ',
        'h': 'ɥ',
        'i': 'ı',
        'j': 'ɾ',
        'k': 'ʞ',
        'l': 'l',
        'm': 'ɯ',
        'n': 'u',
        'r': 'ɹ',
        't': 'ʇ',
        'v': 'ʌ',
        'w': 'ʍ',
        'y': 'ʎ',
        'A': '∀',
        'B': 'ᙠ',
        'C': 'Ɔ',
        'D': 'ᗡ',
        'E': 'Ǝ',
        'F': 'Ⅎ',
        'G': '⅁',
        'J': 'ſ',
        'K': '⋊',
        'L': '˥',
        'M': 'W',
        'P': 'Ԁ',
        'Q': 'Ό',
        'R': 'ᴚ',
        'T': '⊥',
        'U': '∩',
        'V': 'Λ',
        'Y': '⅄',
        0x1: '⇂',
        0x2: 'ᄅ',
        0x3: 'Ɛ',
        0x4: 'ㄣ',
        0x5: 'ގ',
        0x6: '9',
        0x7: 'ㄥ',
        '&': '⅋',
        '.': '˙',
        "\"": '„',
        ';': '؛',
        '[': ']',
        '(': ')',
        '{': '}',
        '?': '¿',
        '!': '¡',
        "'": ',',
        '<': '>',
        '‾': '_',
        '¯': '_',
        '‿': '⁀',
        '⁅': '⁆',
        '∴': '∵',
        "\r": "\n",
        'ß': 'ᙠ',
        '̈': '̤',
        'ä': "ɐ̤",
        'ö': "o̤",
        'ü': "n̤",
        'Ä': "∀̤",
        'Ö': "O̤",
        'Ü': "∩̤",
        '´': " ̗",
        'é': "ǝ̗",
        'á': "ɐ̗",
        'ó': "o̗",
        'ú': "n̗",
        'É': "Ǝ̗",
        'Á': "∀̗",
        'Ó': "O̗",
        'Ú': "∩̗",
        '`': " ̖",
        'è': "ǝ̖",
        'à': "ɐ̖",
        'ò': "o̖",
        'ù': "n̖",
        'È': "Ǝ̖",
        'À': "∀̖",
        'Ò': "O̖",
        'Ù': "∩̖",
        '^': " ̮",
        'ê': "ǝ̮",
        'â': "ɐ̮",
        'ô': "o̮",
        'û': "n̮",
        'Ê': "Ǝ̮",
        'Â': "∀̮",
        'Ô': "O̮",
        'Û': "∩̮"
      }
    },
    'mirror': {
      'init': function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },
      'encode': function (_0x48d708) {
        var _0x4554e1 = [];
        var _0x48b3bc;
        var _0x1e52cd = [];
        var _0x5d12c4 = 0x0;
        for (var _0x374f76 = _0x48d708.length; _0x5d12c4 < _0x374f76; _0x5d12c4++) {
          _0x48b3bc = _0x48d708.charAt(_0x5d12c4);
          if (_0x5d12c4 > 0x0 && (_0x48b3bc == '̈' || _0x48b3bc == '̀' || _0x48b3bc == '́' || _0x48b3bc == '̂')) {
            _0x48b3bc = this.map[_0x48d708.charAt(_0x5d12c4 - 0x1) + _0x48b3bc];
            _0x4554e1.pop();
          } else {
            _0x48b3bc = this.map[_0x48b3bc];
            if (typeof _0x48b3bc == "undefined") {
              _0x48b3bc = _0x48d708.charAt(_0x5d12c4);
            }
          }
          if (_0x48b3bc == "\n") {
            _0x1e52cd.push(_0x4554e1.reverse().join(''));
            _0x4554e1 = [];
          } else {
            _0x4554e1.push(_0x48b3bc);
          }
        }
        _0x1e52cd.push(_0x4554e1.reverse().join(''));
        return _0x1e52cd.join("\n");
      },
      'decode': function (_0x690ca3) {
        var _0x3c4651 = [];
        var _0xbe82d6;
        var _0x53be6a = [];
        var _0x1844e4 = 0x0;
        for (var _0x279846 = _0x690ca3.length; _0x1844e4 < _0x279846; _0x1844e4++) {
          _0xbe82d6 = _0x690ca3.charAt(_0x1844e4);
          if (_0x1844e4 > 0x0 && (_0xbe82d6 == '̈' || _0xbe82d6 == '̀' || _0xbe82d6 == '́' || _0xbe82d6 == '̂')) {
            _0xbe82d6 = this.map[_0x690ca3.charAt(_0x1844e4 - 0x1) + _0xbe82d6];
            _0x3c4651.pop();
          } else {
            _0xbe82d6 = this.map[_0xbe82d6];
            if (typeof _0xbe82d6 == "undefined") {
              _0xbe82d6 = _0x690ca3.charAt(_0x1844e4);
            }
          }
          if (_0xbe82d6 == "\n") {
            _0x53be6a.push(_0x3c4651.reverse().join(''));
            _0x3c4651 = [];
          } else {
            _0x3c4651.push(_0xbe82d6);
          }
        }
        _0x53be6a.push(_0x3c4651.reverse().join(''));
        return _0x53be6a.join("\n");
      },
      'map': {
        'a': 'ɒ',
        'b': 'd',
        'c': 'ɔ',
        'e': 'ɘ',
        'f': 'Ꮈ',
        'g': 'ǫ',
        'h': 'ʜ',
        'j': 'ꞁ',
        'k': 'ʞ',
        'l': '|',
        'n': 'ᴎ',
        'p': 'q',
        'r': 'ɿ',
        's': 'ꙅ',
        't': 'ƚ',
        'y': 'ʏ',
        'z': 'ƹ',
        'B': 'ᙠ',
        'C': 'Ɔ',
        'D': 'ᗡ',
        'E': 'Ǝ',
        'F': 'ꟻ',
        'G': 'Ꭾ',
        'J': 'Ⴑ',
        'K': '⋊',
        'L': '⅃',
        'N': 'Ͷ',
        'P': 'ꟼ',
        'Q': 'Ọ',
        'R': 'Я',
        'S': 'Ꙅ',
        'Z': 'Ƹ',
        0x1: '',
        0x2: '',
        0x3: '',
        0x4: '',
        0x5: '',
        0x6: '',
        0x7: '',
        '&': '',
        ';': '',
        '[': ']',
        '(': ')',
        '{': '}',
        '?': '⸮',
        '<': '>',
        'ä': "ɒ̈",
        'ß': 'ᙠ',
        '´': '`',
        'é': "ɘ̀",
        'á': "ɒ̀",
        'ó': 'ò',
        'ú': 'ù',
        'É': "Ǝ̀",
        'Á': 'À',
        'Ó': 'Ò',
        'Ú': 'Ù',
        '`': '´',
        'è': "ɘ́",
        'à': "ɒ́",
        'È': "Ǝ́",
        'ê': "ɘ̂",
        'â': "ɒ̂",
        'Ê': "Ǝ̂",
        'Ø': 'ᴓ',
        'ø': 'ᴓ'
      }
    },
    'creepify': {
      'init': function () {
        for (var _0x32f684 = 0x300; _0x32f684 <= 0x315; _0x32f684++) {
          this.diacriticsTop.push(String.fromCharCode(_0x32f684));
        }
        for (var _0x32f684 = 0x316; _0x32f684 <= 0x333; _0x32f684++) {
          if (_0x32f684 != 0x31a && _0x32f684 != 0x31b) {
            this.diacriticsBottom.push(String.fromCharCode(_0x32f684));
          }
        }
        this.diacriticsTop.push(String.fromCharCode(0x31a));
        this.diacriticsTop.push(String.fromCharCode(0x31b));
        for (var _0x32f684 = 0x334; _0x32f684 <= 0x338; _0x32f684++) {
          this.diacriticsMiddle.push(String.fromCharCode(_0x32f684));
        }
        for (var _0x32f684 = 0x339; _0x32f684 <= 0x33c; _0x32f684++) {
          this.diacriticsBottom.push(String.fromCharCode(_0x32f684));
        }
        for (var _0x32f684 = 0x33d; _0x32f684 <= 0x344; _0x32f684++) {
          this.diacriticsTop.push(String.fromCharCode(_0x32f684));
        }
        this.diacriticsTop.push(String.fromCharCode(0x344));
        this.diacriticsBottom.push(String.fromCharCode(0x345));
        this.diacriticsTop.push(String.fromCharCode(0x346));
        this.diacriticsBottom.push(String.fromCharCode(0x347));
        this.diacriticsBottom.push(String.fromCharCode(0x348));
        this.diacriticsBottom.push(String.fromCharCode(0x349));
        this.diacriticsTop.push(String.fromCharCode(0x34a));
        this.diacriticsTop.push(String.fromCharCode(0x34b));
        this.diacriticsTop.push(String.fromCharCode(0x34c));
        this.diacriticsBottom.push(String.fromCharCode(0x34d));
        this.diacriticsBottom.push(String.fromCharCode(0x34e));
        this.diacriticsTop.push(String.fromCharCode(0x350));
        this.diacriticsTop.push(String.fromCharCode(0x351));
        this.diacriticsTop.push(String.fromCharCode(0x352));
        this.diacriticsBottom.push(String.fromCharCode(0x353));
        this.diacriticsBottom.push(String.fromCharCode(0x354));
        this.diacriticsBottom.push(String.fromCharCode(0x355));
        this.diacriticsBottom.push(String.fromCharCode(0x356));
        this.diacriticsTop.push(String.fromCharCode(0x357));
        this.diacriticsTop.push(String.fromCharCode(0x358));
        this.diacriticsBottom.push(String.fromCharCode(0x359));
        this.diacriticsBottom.push(String.fromCharCode(0x35a));
        this.diacriticsTop.push(String.fromCharCode(0x35b));
        this.diacriticsBottom.push(String.fromCharCode(0x35c));
        this.diacriticsTop.push(String.fromCharCode(0x35d));
        this.diacriticsTop.push(String.fromCharCode(0x35d));
        this.diacriticsBottom.push(String.fromCharCode(0x35f));
        this.diacriticsTop.push(String.fromCharCode(0x360));
        this.diacriticsTop.push(String.fromCharCode(0x361));
      },
      'encode': function (_0x444311) {
        var _0x14776b = '';
        var _0x4a6843;
        for (i in _0x444311) {
          _0x4a6843 = _0x444311[i];
          if (this.options.middle) {
            _0x4a6843 += this.diacriticsMiddle[Math.floor(Math.random() * this.diacriticsMiddle.length)];
          }
          if (this.options.top) {
            var _0x5afc41 = this.diacriticsTop.length - 0x1;
            var _0x387a71 = 0x0;
            for (var _0x5a5e41 = this.options.maxHeight - Math.random() * (this.options.randomization / 0x64 * this.options.maxHeight); _0x387a71 < _0x5a5e41; _0x387a71++) {
              _0x4a6843 += this.diacriticsTop[Math.floor(Math.random() * _0x5afc41)];
            }
          }
          if (this.options.bottom) {
            var _0x3f7111 = this.diacriticsBottom.length - 0x1;
            var _0x387a71 = 0x0;
            for (var _0x5a5e41 = this.options.maxHeight - Math.random() * (this.options.randomization / 0x64 * this.options.maxHeight); _0x387a71 < _0x5a5e41; _0x387a71++) {
              _0x4a6843 += this.diacriticsBottom[Math.floor(Math.random() * _0x3f7111)];
            }
          }
          _0x14776b += _0x4a6843;
        }
        return _0x14776b;
      },
      'decode': function (_0x378d25) {
        var _0x4fd93f = '';
        var _0x397c17;
        for (i in _0x378d25) {
          _0x397c17 = _0x378d25[i].charCodeAt(0x0);
          if (_0x397c17 < 0x300 || _0x397c17 > 0x361) {
            _0x4fd93f += _0x378d25[i];
          }
        }
        return _0x4fd93f;
      },
      'diacriticsTop': [],
      'diacriticsMiddle': [],
      'diacriticsBottom': [],
      'options': {
        'top': true,
        'middle': true,
        'bottom': true,
        'maxHeight': 0xf,
        'randomization': 0x64
      }
    },
    'bubbles': {
      'init': function () {
        for (var _0x2880b1 = 0x31; _0x2880b1 <= 0x39; _0x2880b1++) {
          this.map[String.fromCharCode(_0x2880b1)] = String.fromCharCode(_0x2880b1 + 0x242f);
        }
        this.map['0'] = '⓪';
        for (var _0x2880b1 = 0x41; _0x2880b1 <= 0x5a; _0x2880b1++) {
          this.map[String.fromCharCode(_0x2880b1)] = String.fromCharCode(_0x2880b1 + 0x2475);
        }
        for (var _0x2880b1 = 0x61; _0x2880b1 <= 0x7a; _0x2880b1++) {
          this.map[String.fromCharCode(_0x2880b1)] = String.fromCharCode(_0x2880b1 + 0x246f);
        }
        for (_0x2880b1 in this.map) {
          this.mapInverse[this.map[_0x2880b1]] = _0x2880b1;
        }
      },
      'encode': function (_0x65ab0a) {
        var _0x4b315f = '';
        var _0x27e69c;
        var _0x58e2b5 = true;
        for (i in _0x65ab0a) {
          _0x27e69c = this.map[_0x65ab0a[i]];
          if (typeof _0x27e69c == "undefined") {
            if (_0x65ab0a[i].charCodeAt(0x0) >= 0x21) {
              _0x27e69c = _0x65ab0a[i] + String.fromCharCode(0x20dd);
              if (!_0x58e2b5) {
                _0x27e69c = String.fromCharCode(0x202f) + String.fromCharCode(0xa0) + String.fromCharCode(0xa0) + String.fromCharCode(0x202f) + _0x27e69c;
              }
            } else {
              _0x27e69c = _0x65ab0a[i];
            }
          }
          _0x4b315f += _0x27e69c;
          _0x58e2b5 = _0x27e69c == "\n";
        }
        return _0x4b315f;
      },
      'decode': function (_0x27fd9d) {
        var _0x1bdfb5 = '';
        var _0x16d8f2;
        var _0x44160d = '';
        for (i in _0x27fd9d) {
          _0x16d8f2 = this.mapInverse[_0x27fd9d[i]];
          _0x1bdfb5 += typeof _0x16d8f2 == 'undefined' ? _0x27fd9d[i] : _0x16d8f2;
        }
        for (i in _0x1bdfb5) {
          _0x16d8f2 = _0x1bdfb5[i].charCodeAt(0x0);
          if (_0x16d8f2 != 0xa0 && _0x16d8f2 != 0x202f && _0x16d8f2 != 0x20dd) {
            _0x44160d += _0x1bdfb5[i];
          }
        }
        return _0x44160d;
      },
      'map': {},
      'mapInverse': {}
    },
    'squares': {
      'init': function () {},
      'encode': function (_0x17ace8) {
        var _0x408ed9 = '';
        var _0x547d38;
        var _0x393dfc = true;
        for (i in _0x17ace8) {
          if (_0x17ace8[i].charCodeAt(0x0) >= 0x21) {
            _0x547d38 = _0x17ace8[i] + String.fromCharCode(0x20de);
            if (!_0x393dfc) {
              _0x547d38 = String.fromCharCode(0x202f) + String.fromCharCode(0xa0) + String.fromCharCode(0xa0) + String.fromCharCode(0x202f) + _0x547d38;
            }
          } else {
            _0x547d38 = _0x17ace8[i];
          }
          _0x408ed9 += _0x547d38;
          _0x393dfc = _0x547d38 == "\n";
        }
        return _0x408ed9;
      },
      'decode': function (_0xa88897) {
        var _0x4ef408 = '';
        var _0x5e539d;
        for (i in _0xa88897) {
          _0x5e539d = _0xa88897[i].charCodeAt(0x0);
          if (_0x5e539d != 0xa0 && _0x5e539d != 0x202f && _0x5e539d != 0x20de) {
            _0x4ef408 += _0xa88897[i];
          }
        }
        return _0x4ef408;
      }
    },
    'roundsquares': {
      'init': function () {},
      'encode': function (_0x460e22) {
        var _0x285cae = '';
        var _0x4484f8;
        var _0xb55e8e = true;
        for (i in _0x460e22) {
          if (_0x460e22[i].charCodeAt(0x0) >= 0x21) {
            _0x4484f8 = _0x460e22[i] + String.fromCharCode(0x20e3);
            if (!_0xb55e8e) {
              _0x4484f8 = String.fromCharCode(0xa0) + String.fromCharCode(0xa0) + String.fromCharCode(0xa0) + _0x4484f8;
            }
          } else {
            _0x4484f8 = _0x460e22[i];
          }
          _0x285cae += _0x4484f8;
          _0xb55e8e = _0x4484f8 == "\n";
        }
        return _0x285cae;
      },
      'decode': function (_0x2163d0) {
        var _0x424c95 = '';
        var _0x2d16f8;
        for (i in _0x2163d0) {
          _0x2d16f8 = _0x2163d0[i].charCodeAt(0x0);
          if (_0x2d16f8 != 0xa0 && _0x2d16f8 != 0x202f && _0x2d16f8 != 0x20e3) {
            _0x424c95 += _0x2163d0[i];
          }
        }
        return _0x424c95;
      }
    },
    'bent': {
      'init': function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },
      'encode': function (_0x2c4d41) {
        var _0x56532e = '';
        var _0x4a0e23;
        var _0x2521b8 = 0x0;
        for (var _0x4345b6 = _0x2c4d41.length; _0x2521b8 < _0x4345b6; _0x2521b8++) {
          _0x4a0e23 = this.map[_0x2c4d41.charAt(_0x2521b8)];
          if (typeof _0x4a0e23 == "undefined") {
            _0x4a0e23 = _0x2c4d41.charAt(_0x2521b8);
          }
          _0x56532e += _0x4a0e23;
        }
        return _0x56532e;
      },
      'decode': function (_0x28d943) {
        var _0x42ad9c = '';
        var _0x2c58fb;
        var _0x312110 = 0x0;
        for (var _0x414c42 = _0x28d943.length; _0x312110 < _0x414c42; _0x312110++) {
          _0x2c58fb = this.map[_0x28d943.charAt(_0x312110)];
          if (typeof _0x2c58fb == 'undefined') {
            _0x2c58fb = _0x28d943.charAt(_0x312110);
          }
          _0x42ad9c += _0x2c58fb;
        }
        return _0x42ad9c;
      },
      'map': {
        'a': 'ą',
        'b': 'ҍ',
        'c': 'ç',
        'd': 'ժ',
        'e': 'ҽ',
        'f': 'ƒ',
        'g': 'ց',
        'h': 'հ',
        'i': 'ì',
        'j': 'ʝ',
        'k': 'ҟ',
        'l': 'Ӏ',
        'm': 'ʍ',
        'n': 'ղ',
        'o': 'օ',
        'p': 'ք',
        'q': 'զ',
        'r': 'ɾ',
        's': 'ʂ',
        't': 'է',
        'u': 'մ',
        'v': 'ѵ',
        'w': 'ա',
        'x': '×',
        'y': 'վ',
        'z': 'Հ',
        'A': 'Ⱥ',
        'B': 'β',
        'C': '↻',
        'D': 'Ꭰ',
        'E': 'Ɛ',
        'F': 'Ƒ',
        'G': 'Ɠ',
        'H': 'Ƕ',
        'I': 'į',
        'J': 'ل',
        'K': 'Ҡ',
        'L': 'Ꝉ',
        'M': 'Ɱ',
        'N': 'ហ',
        'O': 'ට',
        'P': 'φ',
        'Q': 'Ҩ',
        'R': 'འ',
        'S': 'Ϛ',
        'T': 'Ͳ',
        'U': 'Ա',
        'V': 'Ỽ',
        'W': 'చ',
        'X': 'ჯ',
        'Y': 'Ӌ',
        'Z': 'ɀ',
        0x0: '⊘',
        0x1: "������",
        0x2: 'ϩ',
        0x3: 'Ӡ',
        0x4: '५',
        0x5: 'Ƽ',
        0x6: 'Ϭ',
        0x7: '7',
        0x8: '������',
        0x9: '९',
        '&': '⅋',
        '(': '{',
        ')': '}',
        '{': '(',
        '}': ')',
        'ä': "ą̈",
        'ö': "օ̈",
        'ü': "մ̈",
        'Ä': "Ⱥ̈",
        'Ö': "ට̈",
        'Ü': "Ա̈",
        'é': "ҽ́",
        'á': "ą́",
        'ó': "օ́",
        'ú': "մ́",
        'É': "Ɛ́",
        'Á': "Ⱥ́",
        'Ó': "ට́",
        'Ú': "Ա́",
        'è': "ҽ̀",
        'à': "ą̀",
        'ò': "օ̀",
        'ù': "մ̀",
        'È': "Ɛ̀",
        'À': "Ⱥ̀",
        'Ò': "ට̀",
        'Ù': "Ա̀",
        'ê': "ҽ̂",
        'â': "ą̂",
        'ô': "օ̂",
        'û': "մ̂",
        'Ê': "Ɛ̂",
        'Â': "Ⱥ̂",
        'Ô': "ට̂",
        'Û': "Ա̂"
      }
    },
    'tiny': {
      'init': function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },
      'encode': function (_0x375a96) {
        var _0x2ec269 = '';
        var _0xa167f3;
        _0x375a96 = _0x375a96.toUpperCase();
        var _0x46029f = 0x0;
        for (var _0x301586 = _0x375a96.length; _0x46029f < _0x301586; _0x46029f++) {
          _0xa167f3 = this.map[_0x375a96.charAt(_0x46029f)];
          if (typeof _0xa167f3 == "undefined") {
            _0xa167f3 = _0x375a96.charAt(_0x46029f);
          }
          _0x2ec269 += _0xa167f3;
        }
        return _0x2ec269;
      },
      'decode': function (_0x3ef7aa) {
        var _0x35aaf7 = '';
        var _0x38cab0;
        var _0x359bfe = 0x0;
        for (var _0x587295 = _0x3ef7aa.length; _0x359bfe < _0x587295; _0x359bfe++) {
          _0x38cab0 = this.map[_0x3ef7aa.charAt(_0x359bfe)];
          if (typeof _0x38cab0 == "undefined") {
            _0x38cab0 = _0x3ef7aa.charAt(_0x359bfe);
          }
          _0x35aaf7 += _0x38cab0;
        }
        return _0x35aaf7;
      },
      'map': {
        'A': 'ᴀ',
        'B': 'ʙ',
        'C': 'ᴄ',
        'D': 'ᴅ',
        'E': 'ᴇ',
        'F': 'ꜰ',
        'G': 'ɢ',
        'H': 'ʜ',
        'I': 'ɪ',
        'J': 'ᴊ',
        'K': 'ᴋ',
        'L': 'ʟ',
        'M': 'ᴍ',
        'N': 'ɴ',
        'O': 'ᴏ',
        'P': 'ᴘ',
        'Q': 'Q',
        'R': 'ʀ',
        'S': 'ꜱ',
        'T': 'ᴛ',
        'U': 'ᴜ',
        'V': 'ᴠ',
        'W': 'ᴡ',
        'X': 'x',
        'Y': 'ʏ',
        'Z': 'ᴢ'
      }
    }
  };
  for (i in this.tools) {
    this.tools[i].init();
  }
  this.getHTML = function (_0x50ff3c) {
    var _0x39f448 = '';
    var _0x1781c5;
    var _0x458350 = true;
    var _0x445ad2 = 0x0;
    var _0x1a0ac6 = 0x0;
    var _0xe5c55e = 0x0;
    for (var _0x1ce029 = _0x50ff3c.length; _0xe5c55e < _0x1ce029; _0xe5c55e++) {
      _0x1781c5 = _0x50ff3c.charCodeAt(_0xe5c55e);
      if (_0x1781c5 == 0xa || _0x1781c5 == 0xd) {
        _0x39f448 += "<br>\n";
        _0x458350 = true;
      } else {
        if (_0x1781c5 == 0x20) {
          if (_0x458350) {
            _0x39f448 += " ";
            _0x458350 = false;
          } else {
            _0x39f448 += "&nbsp;";
            _0x458350 = true;
          }
        } else {
          if (_0x1781c5 >= 0xd800 && _0x1781c5 <= 0xdbff) {
            _0x445ad2 = _0x1781c5;
            _0x1a0ac6 = 0x0;
          } else if (_0x445ad2 > 0x0) {
            if (_0x1781c5 >= 0xdc00 && _0x1781c5 <= 0xdfff) {
              _0x1a0ac6 = (_0x445ad2 - 0xd800) * 0x400 + (_0x1781c5 - 0xdc00) + 0x10000;
            }
            _0x445ad2 = 0x0;
          } else {
            _0x1a0ac6 = _0x1781c5;
          }
          if (_0x1a0ac6 != 0x0) {
            _0x39f448 += '&#x' + _0x1a0ac6.toString(0x10) + ';';
            _0x458350 = true;
          }
        }
      }
    }
    return _0x39f448;
  };
}
