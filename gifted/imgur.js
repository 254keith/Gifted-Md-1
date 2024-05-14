const axios = require("axios");
const fs = require('fs');
const FormData = require("form-data");
async function uploadImageToImgur(_0x341a1e, _0x1148ba) {
  try {
    const _0x5d0943 = new FormData();
    _0x5d0943.append("image", fs.createReadStream(_0x341a1e));
    const _0x1d094b = {
      'Authorization': "Client-ID " + _0x1148ba,
      ..._0x5d0943.getHeaders()
    };
    const _0xb42c48 = {
      'method': "post",
      'maxBodyLength': Infinity,
      'url': "https://api.imgur.com/3/image",
      'headers': _0x1d094b,
      'data': _0x5d0943
    };
    const _0x53eb2f = await axios(_0xb42c48);
    const _0x4812f1 = _0x53eb2f.data.data.link;
    return _0x4812f1;
  } catch (_0x2a3ac2) {
    console.error("Error while uploading to Imgur:", _0x2a3ac2);
    throw new Error("An error occurred while uploading to Imgur.");
  }
}
module.exports = {
  'uploadImageToImgur': uploadImageToImgur
};
