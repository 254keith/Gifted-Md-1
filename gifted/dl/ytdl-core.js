const ytdl = require("youtubedl-core");
const yts = require('youtube-yts');
const ffmpeg = require("fluent-ffmpeg");
const NodeID3 = require("node-id3");
const fs = require('fs');
const {
  fetchBuffer
} = require('./Function');
const {
  randomBytes
} = require("crypto");
class YT {
  constructor() {}
  static ['isYTUrl'] = _0x5c1c44 => {
    return /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/.test(_0x5c1c44);
  };
  static ["getVideoID"] = _0x147189 => {
    if (!this.isYTUrl(_0x147189)) {
      throw new Error("is not YouTube URL");
    }
    return /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/.exec(_0x147189)[0x1];
  };
  static ['WriteTags'] = async (_0x5bbc0f, _0x4fa490) => {
    NodeID3.write({
      'title': _0x4fa490.Title,
      'artist': _0x4fa490.Artist,
      'originalArtist': _0x4fa490.Artist,
      'image': {
        'mime': "jpeg",
        'type': {
          'id': 0x3,
          'name': "front cover"
        },
        'imageBuffer': (await fetchBuffer(_0x4fa490.Image)).buffer,
        'description': "Cover of " + _0x4fa490.Title
      },
      'album': _0x4fa490.Album,
      'year': _0x4fa490.Year || ''
    }, _0x5bbc0f);
  };
  static ["search"] = async (_0x32bfbc, _0x421810 = {}) => {
    const _0x39ab78 = await yts.search({
      'query': _0x32bfbc,
      'hl': 'id',
      'gl': 'ID',
      ..._0x421810
    });
    return _0x39ab78.videos;
  };
  static ["downloadMusic"] = async _0x28bb3a => {
    try {
      const _0x550b41 = Array.isArray(_0x28bb3a) ? _0x28bb3a : await this.searchTrack(_0x28bb3a);
      const _0x45a5eb = _0x550b41[0x0];
      const _0x1eab13 = await ytdl.getInfo("https://www.youtube.com/watch?v=" + _0x45a5eb.id, {
        'lang': 'id'
      });
      let _0x3b42a4 = ytdl(_0x45a5eb.id, {
        'filter': 'audioonly',
        'quality': 0x8c
      });
      let _0x55f0ee = "./dustbin/" + randomBytes(0x3).toString("hex") + ".mp3";
      _0x3b42a4.on('error', _0xfe53f => console.log(_0xfe53f));
      const _0x531551 = await new Promise(_0xe5eb3d => {
        ffmpeg(_0x3b42a4).audioFrequency(0xac44).audioChannels(0x2).audioBitrate(0x80).audioCodec("libmp3lame").audioQuality(0x5).toFormat('mp3').save(_0x55f0ee).on("end", () => _0xe5eb3d(_0x55f0ee));
      });
      await this.WriteTags(_0x531551, {
        'Title': _0x45a5eb.title,
        'Artist': _0x45a5eb.artist,
        'Image': _0x45a5eb.image,
        'Album': _0x45a5eb.album,
        'Year': _0x1eab13.videoDetails.publishDate.split('-')[0x0]
      });
      return {
        'meta': _0x45a5eb,
        'path': _0x531551,
        'size': fs.statSync(_0x55f0ee).size
      };
    } catch (_0x5e7c07) {
      throw new Error(_0x5e7c07);
    }
  };
  static ["mp4"] = async (_0x20e34f, _0x115f8c = 0x86) => {
    try {
      if (!_0x20e34f) {
        throw new Error("Video ID or YouTube Url is required");
      }
      const _0x5a5f16 = this.isYTUrl(_0x20e34f) ? this.getVideoID(_0x20e34f) : _0x20e34f;
      const _0x17e11f = await ytdl.getInfo("https://www.youtube.com/watch?v=" + _0x5a5f16, {
        'lang': 'id'
      });
      const _0x42019a = ytdl.chooseFormat(_0x17e11f.formats, {
        'format': _0x115f8c,
        'filter': "videoandaudio"
      });
      return {
        'title': _0x17e11f.videoDetails.title,
        'thumb': _0x17e11f.videoDetails.thumbnails.slice(-0x1)[0x0],
        'date': _0x17e11f.videoDetails.publishDate,
        'duration': _0x17e11f.videoDetails.lengthSeconds,
        'channel': _0x17e11f.videoDetails.ownerChannelName,
        'quality': _0x42019a.qualityLabel,
        'contentLength': _0x42019a.contentLength,
        'description': _0x17e11f.videoDetails.description,
        'videoUrl': _0x42019a.url
      };
    } catch (_0x17410b) {
      throw _0x17410b;
    }
  };
  static ["mp3"] = async (_0x6f4243, _0x2fde14 = {}, _0x412ec6 = false) => {
    try {
      if (!_0x6f4243) {
        throw new Error("Video ID or YouTube Url is required");
      }
      _0x6f4243 = this.isYTUrl(_0x6f4243) ? "https://www.youtube.com/watch?v=" + this.getVideoID(_0x6f4243) : _0x6f4243;
      const {
        videoDetails: _0x30d0d3
      } = await ytdl.getInfo(_0x6f4243, {
        'lang': 'id'
      });
      let _0x140e98 = ytdl(_0x6f4243, {
        'filter': "audioonly",
        'quality': 0x8c
      });
      let _0x4e3d41 = './' + randomBytes(0x3).toString("hex") + ".mp3";
      let _0x12f1d8;
      _0x140e98.once("response", () => {
        _0x12f1d8 = Date.now();
      });
      _0x140e98.on("end", () => process.stdout.write("\n\n"));
      _0x140e98.on("error", _0x55f3c1 => console.log(_0x55f3c1));
      const _0xb5e7ec = await new Promise(_0x38ca9b => {
        ffmpeg(_0x140e98).audioFrequency(0xac44).audioChannels(0x2).audioBitrate(0x80).audioCodec("libmp3lame").audioQuality(0x5).toFormat("mp3").save(_0x4e3d41).on("end", () => {
          _0x38ca9b(_0x4e3d41);
        });
      });
      if (Object.keys(_0x2fde14).length !== 0x0) {
        await this.WriteTags(_0xb5e7ec, _0x2fde14);
      }
      if (_0x412ec6) {
        await this.WriteTags(_0xb5e7ec, {
          'Title': _0x30d0d3.title,
          'Album': _0x30d0d3.author.name,
          'Year': _0x30d0d3.publishDate.split('-')[0x0],
          'Image': _0x30d0d3.thumbnails.slice(-0x1)[0x0].url
        });
      }
      return {
        'meta': {
          'title': _0x30d0d3.title,
          'channel': _0x30d0d3.author.name,
          'seconds': _0x30d0d3.lengthSeconds,
          'description': _0x30d0d3.description,
          'image': _0x30d0d3.thumbnails.slice(-0x1)[0x0].url
        },
        'path': _0xb5e7ec,
        'size': fs.statSync(_0x4e3d41).size
      };
    } catch (_0x486df6) {
      throw _0x486df6;
    }
  };
}
module.exports = YT;
