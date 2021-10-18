/*======================================= COBRA TELEGRAM USER BOT =======================================
Coded By Sisula Welgamage
2021
*/
const path = require("path");
const telegramBot = require("node-telegram-bot-api");
const axios = require('axios');
const textmaker = require('cobra-telebot');
const fs = require("fs");
const Config = require('./config');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const simpleGit = require('simple-git');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })
const git = simpleGit();
const {songdownloadoptions} = require('./message')
const token = Config.BOT_TOKEN;
//
//
console.log('telegram වෙත සම්බන්ද වෙමින්!...මඳක් රැඳී සිටින්න.')
console.log('⬇️  Plugin ස්ථාපනය කිරීම ...')
console.log('✅ සාර්ථකව telegram වෙත සම්බන්ද විය!')
function _0x4acf() {
    var _0x35a096 = [
        'AXLfB',
        'roku\x20තොරතු',
        '/start',
        'console',
        'xy/neon-gl',
        'wETgz',
        'euouL',
        'ideo',
        'ote\x20ekli',
        'urvuR',
        'pMqmh',
        'MbSGd',
        'pdate',
        'lzIXw',
        'xaNkx',
        'xy/coffee-',
        '/panel',
        'xy/fur-eff',
        'rDlHE',
        'න\x20කරමින්!.',
        'KGkAq',
        'XNLxE',
        'pzGFl',
        'xbXDv',
        'puhkr',
        'rwnJG',
        'HWvGa',
        'WisJs',
        'XjtJy',
        '>\x0aᴄᴏʙʀᴀʙᴏᴛ',
        'includes',
        'grqZp',
        'xy/wood-he',
        'error',
        'uxTMc',
        'Cqfhv',
        'reset',
        'vsrBs',
        '╭─⬣\x20COBRA\x20',
        'යාවත්කාලීන',
        'gOhgO',
        'setFrame',
        'dwcPo',
        'chat',
        'sPDuC',
        'foIOG',
        'කරුණාකර\x20He',
        'VBhoG',
        'tunjR',
        'date',
        'https',
        'DROop',
        'XApUD',
        'XkrVu',
        '\x20කරන්න❌',
        'Vuket',
        'CYbzG',
        'ZCKoQ',
        'uery',
        '-gold?teks',
        'https://ha',
        'g...\x0a📁\x20Typ',
        '@thumb_vid',
        'wtDVO',
        'xy/under-f',
        'hMQPv',
        'xy/gradien',
        'xy/metalic',
        'warn',
        'MKIwr',
        '3|0|1|4|2|',
        'ලීන\x20කිරීම්',
        '..origin/',
        'split',
        'deo',
        'owTOe',
        'ttKZp',
        'fdIIG',
        'MDFDO',
        '\x20-\x20Check\x20U',
        '│➛\x20/ufall\x20',
        'IDWYN',
        'AMZVR',
        'APP_NAME',
        'UtDtQ',
        'g_audio_so',
        'PwPij',
        'pe\x20-\x20Video',
        'XOHOe',
        '│➛\x20/fur\x20\x20\x20',
        'qZfkd',
        'rass?teks=',
        'suPsG',
        'oNRoS',
        'tJmLr',
        'SKaTv',
        '/api/photo',
        '│➛\x20/crisp\x20',
        '│➛\x20/gneon\x20',
        'kKvle',
        'qeezJ',
        'LWxOS',
        'EnQul',
        '{}.constru',
        '🎧\x20Uploadin',
        'KUCLH',
        'ALIVE_LOGO',
        '♻️\x20Please\x20W',
        'jlJiq',
        'Please\x20Nee',
        'TTGWF',
        'yPhGk',
        'ujOQz',
        'xy/write-s',
        'WZwaj',
        'BKVfA',
        'responseTy',
        'nguage',
        'fUmQq',
        'OCdeZ',
        'uAUTk',
        '@audio_son',
        'length',
        'RekgO',
        'wlNfH',
        '│➛\x20/3cup\x20\x20',
        'EyUhn',
        'sitQA',
        'npFkX',
        '│➛\x20/embro\x20',
        '\x20නැත\x20⁉️',
        'bArNM',
        'ROmHl',
        'pjiyx',
        '/alive',
        'rMqLe',
        'YeTtH',
        'map',
        '1392168ulkbZD',
        'AEDGt',
        'thumbnail',
        'message',
        'jApkD',
        '\x20Maker',
        'sFEIV',
        'toString',
        'RKJCK',
        'get',
        'OYWwr',
        'Cant\x20Find\x20',
        'KBQDF',
        'pkSDK',
        'eStream',
        'sendPhoto',
        'g\x20Your\x20Son',
        'fetch',
        '777008ZGfzzo',
        'නව\x20යාවත්කා',
        'ODYcL',
        'bind',
        'zEuYU',
        'yRrMI',
        'InPcQ',
        'e\x20-\x20Audio\x20',
        'Anything',
        'SOZsO',
        'CHQdA',
        'xy/embroid',
        'catch',
        'oRYKL',
        'HrEkX',
        '│➛\x20/grass\x20',
        'OYCfu',
        'nature-bg?',
        '│➛\x20/ucube\x20',
        '│➛\x20/yrose\x20',
        'GMaCU',
        'addRemote',
        'xNJqt',
        'JofJJ',
        'HHgQc',
        '✅\x20සාර්ථකව\x20',
        'startsWith',
        'jkdkp',
        '1|3|4|2|0',
        'xJktJ',
        'ELnkl',
        'xy/underwa',
        'ing\x20Your\x20S',
        '3506503lcQase',
        'bSbMT',
        'zrfQc',
        'hczfX',
        'tnNwe',
        'bxmkO',
        'bpAEe',
        'IPITA',
        'TODWa',
        'trace',
        'all?teks=',
        '│➛\x20/bwood\x20',
        'nnfyk',
        'Hoyli',
        'JLRPZ',
        'hFmSh',
        '/apps/',
        'g\x20Your\x20Vid',
        'hBIUj',
        'eTSnW',
        'ARMjS',
        'xQRUD',
        'yqXWV',
        'ELDgc',
        'TPE1',
        'xUAsE',
        'FLHhX',
        'hrome?teks',
        'YTzdv',
        'BmuIU',
        'XGHYd',
        'gRUae',
        'fXZDo',
        'gBMAu',
        'oCXRS',
        'OQeIn',
        'ctlFI',
        'MmWxU',
        'VIiuh',
        'gPoge',
        'RnCwL',
        'end',
        'QnwPV',
        'GmpWJ',
        'rxdPA',
        'xy/wooden-',
        '/api/yt2/v',
        'QQAOE',
        '\x20/metalic\x20',
        'ment_song_',
        'FQAhn',
        '│➛\x20/romant',
        'document',
        'unvFA',
        '│➛\x20/song\x20\x20',
        'cobra',
        '.mp3',
        '♻️\x20‍යාවත්කාලී',
        'VKNMu',
        'VjsLF',
        'SZUvz',
        'xy/romanti',
        'LRmIr',
        'lvNJH',
        'Kspil',
        'xHrms',
        'බොට්\x20සඳහා\x20',
        'tXJua',
        'uYoYU',
        'rbxWC',
        'kMckW',
        'ocument',
        'KSiou',
        'onText',
        'replace',
        ']:\x20',
        '904930exiGIv',
        'JNnTd',
        'polling',
        'RLdHt',
        '│➛\x20/nsumme',
        '│➛\x20/burnp\x20',
        'ukgnm',
        'LOGO\x20PACK',
        'HHJri',
        'substring',
        'PUsgK',
        'ZrLcT',
        'xqMvp',
        'zNobb',
        '\x20කරන\x20ලදි..',
        'ExMwh',
        'TQltp',
        'yBDwu',
        'eZBRY',
        'Abzqj',
        'xy/teks-cu',
        'daMZg',
        'VUvzm',
        'Lbxns',
        'rPjpT',
        'roses?teks',
        'mnTZU',
        'push',
        'ideo?url=',
        'callback_q',
        'apply',
        'ong...',
        'EFoZP',
        'pEhQt',
        'fWhvW',
        '│➛\x20/nsky\x20\x20',
        '📽\x20Download',
        'qKJpo',
        'iomHL',
        'RvRqn',
        'eks=',
        'SKzgE',
        'jQCUY',
        'Izvub',
        'LfeMG',
        'xEQtC',
        'omYCU',
        '-\x20Update\x20Y',
        'qSegh',
        'sGDVq',
        '928618aPSnxZ',
        'wOOyP',
        'JNojU',
        'teks=',
        'stringify',
        'd\x20Word...',
        '-\x20Bot\x20Text',
        'eo...\x0a📁\x20Ty',
        'FbheD',
        'oBfAO',
        'YnHGk',
        'EOieU',
        'XZPkA',
        'Telebot',
        'MBxrQ',
        'ZEwad',
        'VGipG',
        'okuapp.com',
        'SNVEh',
        'vERRM',
        'inbow?teks',
        '│➛\x20/hwood\x20',
        'Cojel',
        'KyGRV',
        'iZZhW',
        'xy/under-g',
        'git_url',
        'c-messages',
        'GLrwO',
        'uHyxU',
        'tPMsa',
        'wOykB',
        'arrayBuffe',
        '│➛\x20/ccup\x20\x20',
        'total',
        'ALFGT',
        'DtxrX',
        'tUmEH',
        'UYIcI',
        'FtWRc',
        'HtYrm',
        'MUKlw',
        'WVNDI',
        '│➛\x20/upnow\x20',
        '\x20Document',
        'ery-text?t',
        'meiJw',
        'ObSUZ',
        '\x20Im\x20Cobra\x20',
        'mvNME',
        'YXIvc',
        'ownload',
        'NqIXT',
        'save',
        'hBZLN',
        'download',
        'Tdikw',
        'uYGvQ',
        'RBRfN',
        'BRANCH',
        'ent_song_d',
        'from',
        'qgyek',
        'pmplm',
        'first_name',
        'TbpkZ',
        'DeNGH',
        'RGHRb',
        'jyzud',
        'fsLfq',
        'Document',
        'myhwC',
        'rsWDb',
        'LsUkk',
        'JWKrs',
        'p?teks=',
        'nction()\x20',
        'CWUER',
        'eo_thumb_v',
        'pSxAF',
        'qhzzC',
        'tjwSB',
        'ubCoh',
        '@docvideo_',
        'KLcmd',
        'upstream',
        '│➛\x20/flame\x20',
        'ZCtde',
        'thumb_vide',
        'docvideo_d',
        'EccxZ',
        '\x20\x20-',
        'AoweM',
        'rzkNQ',
        'fBwYw',
        '🆕\x20[',
        'mVfRo',
        '│➛\x20/metali',
        'sefWM',
        '2625957RLEnOC',
        '│➛\x20/uwater',
        '-\x20song\x20lel',
        'grUYW',
        'aSOYz',
        'JDPXz',
        '__proto__',
        'ena',
        'Hello!\x20',
        'FEuYR',
        'di-api.her',
        'ByBKU',
        'API_KEY',
        '│➛\x20/panel\x20',
        'prototype',
        'sendAudio',
        'https://ap',
        'hobse',
        'VQirc',
        'vnOXe',
        'sendDocume',
        'all',
        'yHJXP',
        'buwgs',
        'FJvqM',
        'IPDMX',
        '📽\x20Uploadin',
        'LMsju',
        't-avatar?t',
        '-fire?teks',
        'lowestaudi',
        'xy/burn-pa',
        'return\x20(fu',
        'image',
        'RJrcT',
        'pipe',
        'descriptio',
        'ideo...',
        'XiQSt',
        'CxmUA',
        'tars?teks=',
        'SnTQx',
        'wyWng',
        'YpOvS',
        'author_nam',
        'nWnsm',
        'QNFIY',
        'table',
        '.jpg',
        'rNyxx',
        'cup?teks=',
        '\x20Name\x20හො\x20H',
        'wVipZ',
        'IfIpj',
        'KVWeq',
        '?teks=',
        '│➛\x20/update',
        'LxEuu',
        'dtXtu',
        'stream',
        'ojoNV',
        'createWrit',
        'rzyXH',
        'CBYjp',
        'readFileSy',
        'sendMessag',
        'tBxek',
        'GdYLH',
        'zhqUz',
        'LBxks',
        'iklni',
        'RRXyN',
        'dAdJv',
        'exception',
        '\x20ඇත✅\x20\x0a\x0aCha',
        'aphsB',
        'arraybuffe',
        'NnPAN',
        'HEROKU',
        'PkiTR',
        'vVxve',
        'example\x20-:',
        'data',
        '│➛\x20/gavate',
        'ufWwH',
        'heroku\x20rem',
        'video',
        '_audio_son',
        'SDTVt',
        'oovrk',
        'HvxDL',
        'constructo',
        'vkRcG',
        'song_docum',
        'exFxe',
        '4|0|3|2|1',
        'qcySF',
        'nges:\x0a',
        'EObmJ',
        'OpoUO',
        'title',
        'DrzpK',
        'pCHdH',
        'rn\x20this\x22)(',
        '/spack',
        'xy/crisp-c',
        'aRmdo',
        'ect?teks=',
        'ppVOz',
        'kwFni',
        'XAnpz',
        '│➛\x20/cofee\x20',
        'VKKgP',
        'e\x20-\x20audio',
        'zCGwE',
        'info',
        'NnTte',
        'audio/mpeg',
        'xy/funny-c',
        'AGgoS',
        'ESAEu',
        'kTOLX',
        'eroku\x20Api\x20',
        '╭─⬣\x20COMMAN',
        'FEIAM',
        'log',
        '-\x20Bot\x20Pane',
        'rdTsW',
        'iNHPH',
        'BsCqk',
        'WcTJd',
        'obBmi',
        'audioBitra',
        'xlEds',
        'RBVMw',
        'http',
        'LcsMb',
        'VazKW',
        'mwJQZ',
        'per?teks=',
        'pcYly',
        'ctor(\x22retu',
        '│➛\x20/spack\x20',
        '6396066DGjVsZ',
        'ebnuT'
    ];
    _0x4acf = function () {
        return _0x35a096;
    };
    return _0x4acf();
}
var _0x14607a = _0x4001, _0x2d2aea = _0x4001;
(function (_0x51fc2e, _0x4f2f04) {
    var _0x247491 = _0x4001, _0x1e6f4f = _0x4001, _0x3b1557 = _0x51fc2e();
    while (!![]) {
        try {
            var _0x2302e7 = parseInt(_0x247491(0x3cc)) / (0x7 * 0x282 + -0x1089 + -0x104) + parseInt(_0x247491(0x23c)) / (0x404 * 0x6 + -0x1 * 0x1863 + 0xb * 0x7) + -parseInt(_0x1e6f4f(0x29f)) / (0x67b + 0x4c3 + -0xb3b) + -parseInt(_0x1e6f4f(0x3ba)) / (-0x1 * 0x1949 + -0x209 * -0x8 + 0x905) + parseInt(_0x247491(0x20a)) / (-0xe22 + 0x1 * -0xc5a + 0x1a81) + parseInt(_0x1e6f4f(0x32e)) / (0x4 * 0x21 + -0x1 * -0x5cf + -0x64d) + -parseInt(_0x1e6f4f(0x3ed)) / (0x13a6 + 0x25c2 + -0x25 * 0x18d);
            if (_0x2302e7 === _0x4f2f04)
                break;
            else
                _0x3b1557['push'](_0x3b1557['shift']());
        } catch (_0x3c3163) {
            _0x3b1557['push'](_0x3b1557['shift']());
        }
    }
}(_0x4acf, -0x5b7b8 + -0x1459a9 + -0x25b9d9 * -0x1));
var _0x143dc5 = (function () {
        var _0x271738 = _0x4001, _0x1061b7 = _0x4001, _0x32929c = {
                'rDlHE': _0x271738(0x2fe),
                'VUvzm': _0x1061b7(0x2bf) + _0x271738(0x288),
                'ObSUZ': function (_0x248496) {
                    return _0x248496();
                },
                'tEebi': function (_0x540634, _0x242a47) {
                    return _0x540634 < _0x242a47;
                },
                'WZwaj': _0x1061b7(0x312),
                'CBYjp': 'error',
                'iZZhW': _0x271738(0x3f6),
                'SKzgE': function (_0x4e3fcc, _0x42fc83) {
                    return _0x4e3fcc === _0x42fc83;
                },
                'JPdhc': _0x271738(0x335)
            }, _0x8a24c = !![];
        return function (_0x1c7146, _0x23e66a) {
            var _0x587f95 = _0x271738, _0x1c2612 = _0x271738, _0x566868 = {
                    'wtDVO': _0x32929c[_0x587f95(0x342)],
                    'dtXtu': function (_0x5968d9, _0x483113) {
                        return _0x5968d9(_0x483113);
                    },
                    'kRzJb': function (_0x2cfe05, _0xf01647) {
                        return _0x2cfe05 + _0xf01647;
                    },
                    'AoNCr': _0x32929c[_0x1c2612(0x220)],
                    'MKIwr': '{}.constru' + 'ctor(\x22retu' + _0x587f95(0x306) + '\x20)',
                    'pCYZS': function (_0x1fdb9c) {
                        var _0x17e6db = _0x587f95;
                        return _0x32929c[_0x17e6db(0x26b)](_0x1fdb9c);
                    },
                    'rVJMt': function (_0x2b940e, _0x439802) {
                        return _0x32929c['tEebi'](_0x2b940e, _0x439802);
                    },
                    'nUJrg': _0x587f95(0x31c),
                    'bsZnA': 'warn',
                    'jQCUY': _0x32929c[_0x1c2612(0x3a2)],
                    'unvFA': _0x32929c[_0x587f95(0x2de)],
                    'uxTMc': _0x32929c[_0x1c2612(0x254)],
                    'AGgoS': function (_0x37eae1, _0xbb71ed) {
                        var _0x4c1f7e = _0x587f95;
                        return _0x32929c[_0x4c1f7e(0x233)](_0x37eae1, _0xbb71ed);
                    },
                    'RBRfN': _0x32929c['JPdhc'],
                    'JNnTd': _0x1c2612(0x3e0)
                }, _0xdef665 = _0x8a24c ? function () {
                    var _0x179b8c = _0x587f95, _0x22199f = _0x587f95, _0x4dc2cc = {
                            'ZEwad': _0x566868[_0x179b8c(0x36f)],
                            'JFSTl': function (_0x9e5bd7, _0x1a4b39) {
                                var _0x5ea7c5 = _0x179b8c;
                                return _0x566868[_0x5ea7c5(0x2d9)](_0x9e5bd7, _0x1a4b39);
                            },
                            'obBmi': function (_0x1a3690, _0x4d78f5) {
                                return _0x566868['kRzJb'](_0x1a3690, _0x4d78f5);
                            },
                            'BKVfA': _0x566868['AoNCr'],
                            'OyOjI': _0x566868[_0x22199f(0x375)],
                            'gSOmG': function (_0x351f45) {
                                return _0x566868['pCYZS'](_0x351f45);
                            },
                            'zTowj': function (_0x1a8355, _0x34d60c) {
                                return _0x566868['rVJMt'](_0x1a8355, _0x34d60c);
                            },
                            'jyzud': _0x566868['nUJrg'],
                            'jvrNS': _0x566868['bsZnA'],
                            'Abzqj': _0x566868[_0x22199f(0x234)],
                            'EObmJ': _0x566868[_0x22199f(0x1f3)],
                            'UYIcI': _0x179b8c(0x2ce),
                            'LcsMb': _0x566868[_0x22199f(0x352)]
                        };
                    if (_0x23e66a) {
                        if (_0x566868[_0x22199f(0x316)](_0x566868[_0x22199f(0x276)], _0x566868[_0x179b8c(0x20b)])) {
                            var _0x37b418 = _0x4dc2cc[_0x179b8c(0x24b)][_0x179b8c(0x379)]('|'), _0x721a66 = -0x4 * 0x44f + 0x527 * -0x1 + 0x1663;
                            while (!![]) {
                                switch (_0x37b418[_0x721a66++]) {
                                case '0':
                                    try {
                                        var _0x11ec6f = _0x4dc2cc['JFSTl'](_0x5a6c2b, _0x4dc2cc[_0x22199f(0x322)](_0x4dc2cc[_0x179b8c(0x3a3)] + _0x4dc2cc['OyOjI'], ');'));
                                        _0xf33177 = _0x4dc2cc['gSOmG'](_0x11ec6f);
                                    } catch (_0x52df) {
                                        _0xf33177 = _0x4c0d55;
                                    }
                                    continue;
                                case '1':
                                    for (var _0x2d05de = -0x18fd + 0x1bc7 + -0x2ca; _0x4dc2cc['zTowj'](_0x2d05de, _0x303efe[_0x22199f(0x3aa)]); _0x2d05de++) {
                                        var _0x272a99 = (_0x179b8c(0x376) + '5')[_0x179b8c(0x379)]('|'), _0xd624d8 = 0x595 + -0xc * -0x94 + 0xc85 * -0x1;
                                        while (!![]) {
                                            switch (_0x272a99[_0xd624d8++]) {
                                            case '0':
                                                var _0x2b33fd = _0x303efe[_0x2d05de];
                                                continue;
                                            case '1':
                                                var _0x3f495e = _0x66c062[_0x2b33fd] || _0x1811a6;
                                                continue;
                                            case '2':
                                                _0x1811a6[_0x22199f(0x3c1)] = _0x3f495e['toString']['bind'](_0x3f495e);
                                                continue;
                                            case '3':
                                                var _0x1811a6 = _0x35304a[_0x22199f(0x2fa) + 'r']['prototype'][_0x179b8c(0x3cf)](_0x476a7f);
                                                continue;
                                            case '4':
                                                _0x1811a6[_0x22199f(0x2a5)] = _0x265a1e[_0x22199f(0x3cf)](_0x180ccd);
                                                continue;
                                            case '5':
                                                _0x66c062[_0x2b33fd] = _0x1811a6;
                                                continue;
                                            }
                                            break;
                                        }
                                    }
                                    continue;
                                case '2':
                                    var _0x303efe = [
                                        _0x4dc2cc[_0x22199f(0x280)],
                                        _0x4dc2cc['jvrNS'],
                                        _0x4dc2cc[_0x179b8c(0x21d)],
                                        _0x4dc2cc[_0x179b8c(0x301)],
                                        'exception',
                                        _0x4dc2cc[_0x179b8c(0x262)],
                                        _0x4dc2cc[_0x179b8c(0x327)]
                                    ];
                                    continue;
                                case '3':
                                    var _0x66c062 = _0xf33177[_0x22199f(0x333)] = _0xf33177['console'] || {};
                                    continue;
                                case '4':
                                    var _0xf33177;
                                    continue;
                                }
                                break;
                            }
                        } else {
                            var _0x16707d = _0x23e66a['apply'](_0x1c7146, arguments);
                            return _0x23e66a = null, _0x16707d;
                        }
                    }
                } : function () {
                };
            return _0x8a24c = ![], _0xdef665;
        };
    }()), _0x573e4b = _0x143dc5(this, function () {
        var _0x38df60 = _0x4001, _0x2dc7c0 = _0x4001, _0x2c4bf3 = {
                'FJvqM': function (_0x57d087, _0x5278b6) {
                    return _0x57d087 < _0x5278b6;
                },
                'xcDyi': _0x38df60(0x31c),
                'daMZg': _0x38df60(0x374),
                'mCSzU': _0x2dc7c0(0x312),
                'jApkD': _0x2dc7c0(0x2e8),
                'dBMPG': _0x38df60(0x2ce),
                'fsLfq': _0x2dc7c0(0x3f6),
                'VjsLF': function (_0x424258, _0x36c424) {
                    return _0x424258(_0x36c424);
                },
                'CxmUA': function (_0x5371b9, _0x384002) {
                    return _0x5371b9 + _0x384002;
                },
                'yAHtU': 'return\x20(fu' + _0x2dc7c0(0x288),
                'XfYyM': _0x38df60(0x397) + _0x38df60(0x32c) + _0x2dc7c0(0x306) + '\x20)',
                'KnuMx': function (_0x272a5a) {
                    return _0x272a5a();
                }
            }, _0x4e32de = _0x2dc7c0(0x3e8)[_0x38df60(0x379)]('|'), _0x280f0e = -0x23 * 0x1a + 0x32f * 0x6 + -0xf8c;
        while (!![]) {
            switch (_0x4e32de[_0x280f0e++]) {
            case '0':
                for (var _0x4001a7 = 0xa4f * 0x3 + 0x11 * 0x14d + -0x350a; _0x2c4bf3[_0x2dc7c0(0x2b7)](_0x4001a7, _0x36559e[_0x38df60(0x3aa)]); _0x4001a7++) {
                    var _0x24ee99 = _0x143dc5['constructo' + 'r'][_0x38df60(0x2ad)][_0x38df60(0x3cf)](_0x143dc5), _0x13827f = _0x36559e[_0x4001a7], _0x4a6c58 = _0xfd36af[_0x13827f] || _0x24ee99;
                    _0x24ee99[_0x2dc7c0(0x2a5)] = _0x143dc5[_0x38df60(0x3cf)](_0x143dc5), _0x24ee99['toString'] = _0x4a6c58['toString'][_0x38df60(0x3cf)](_0x4a6c58), _0xfd36af[_0x13827f] = _0x24ee99;
                }
                continue;
            case '1':
                var _0x1c2c1b;
                continue;
            case '2':
                var _0x36559e = [
                    _0x2c4bf3['xcDyi'],
                    _0x2c4bf3[_0x2dc7c0(0x21f)],
                    _0x2c4bf3['mCSzU'],
                    _0x38df60(0x351),
                    _0x2c4bf3[_0x38df60(0x3be)],
                    _0x2c4bf3['dBMPG'],
                    _0x2c4bf3[_0x38df60(0x281)]
                ];
                continue;
            case '3':
                try {
                    var _0x43f64b = _0x2c4bf3[_0x2dc7c0(0x1f9)](Function, _0x2c4bf3[_0x38df60(0x2c6)](_0x2c4bf3['CxmUA'](_0x2c4bf3['yAHtU'], _0x2c4bf3['XfYyM']), ');'));
                    _0x1c2c1b = _0x2c4bf3['KnuMx'](_0x43f64b);
                } catch (_0x259d9e) {
                    _0x1c2c1b = window;
                }
                continue;
            case '4':
                var _0xfd36af = _0x1c2c1b['console'] = _0x1c2c1b['console'] || {};
                continue;
            }
            break;
        }
    });
function _0x4001(_0x4acffb, _0x40015c) {
    var _0xc3d40 = _0x4acf();
    return _0x4001 = function (_0x3079f1, _0x83b4f0) {
        _0x3079f1 = _0x3079f1 - (0x2e3 * 0x1 + 0x1a7d + -0x1b88);
        var _0x55a7aa = _0xc3d40[_0x3079f1];
        return _0x55a7aa;
    }, _0x4001(_0x4acffb, _0x40015c);
}
_0x573e4b();
var _0x205e0e = {};
_0x205e0e[_0x14607a(0x20c)] = !![];
const bot = new telegramBot(token, _0x205e0e);
bot['onText'](/\/start/, _0x583585 => {
    var _0x259158 = _0x14607a, _0x2ba9ad = _0x14607a, _0x5a8edd = {};
    _0x5a8edd[_0x259158(0x247)] = function (_0x4d380c, _0x5a9ecd) {
        return _0x4d380c + _0x5a9ecd;
    }, _0x5a8edd[_0x259158(0x371)] = _0x2ba9ad(0x307), _0x5a8edd[_0x259158(0x289)] = _0x259158(0x3b6), _0x5a8edd[_0x2ba9ad(0x358)] = _0x2ba9ad(0x332);
    var _0x4f2a6d = _0x5a8edd;
    bot[_0x2ba9ad(0x2e0) + 'e'](_0x583585['chat']['id'], _0x4f2a6d[_0x2ba9ad(0x247)](_0x4f2a6d[_0x259158(0x247)](_0x2ba9ad(0x2a7), _0x583585['chat'][_0x2ba9ad(0x27c)]), _0x259158(0x26c) + _0x259158(0x249)), {
        'reply_markup': {
            'keyboard': [
                [
                    _0x259158(0x340),
                    _0x4f2a6d[_0x2ba9ad(0x371)]
                ],
                [_0x4f2a6d['CWUER']],
                [_0x4f2a6d['gOhgO']]
            ]
        }
    });
}), bot[_0x14607a(0x207)](/\/alive/, _0x295e6f => {
    var _0x126aa0 = _0x2d2aea, _0x409fe5 = {
            'ELDgc': 'arraybuffe' + 'r',
            'LMsju': function (_0x3ec3d0) {
                return _0x3ec3d0();
            }
        };
    async function _0x341e79() {
        var _0x3f7477 = _0x4001, _0x381597 = _0x4001, _0x3261fe = {};
        _0x3261fe[_0x3f7477(0x3a4) + 'pe'] = _0x409fe5[_0x3f7477(0x404)];
        var _0x626dc4 = await axios['get'](Config[_0x3f7477(0x39a)], _0x3261fe);
        bot['sendPhoto'](_0x295e6f[_0x3f7477(0x35b)]['id'], Buffer['from'](_0x626dc4[_0x381597(0x2f1)]));
    }
    _0x409fe5[_0x126aa0(0x2ba)](_0x341e79);
}), bot[_0x14607a(0x207)](/\/upnow/, _0x259212 => {
    var _0x31a001 = _0x2d2aea, _0x86104f = _0x2d2aea, _0x13d389 = {
            'omYCU': function (_0x32011d, _0x326f04) {
                return _0x32011d + _0x326f04;
            },
            'KyGRV': function (_0x142749, _0x3d282f) {
                return _0x142749 + _0x3d282f;
            },
            'ExMwh': function (_0x387f22, _0x2056b5) {
                return _0x387f22 + _0x2056b5;
            },
            'xEQtC': _0x31a001(0x29b),
            'hKwnL': _0x31a001(0x209),
            'vkRcG': function (_0x47e6b6, _0x47882d) {
                return _0x47e6b6 + _0x47882d;
            },
            'grUYW': _0x86104f(0x2bf) + 'nction()\x20',
            'XkrVu': _0x86104f(0x397) + 'ctor(\x22retu' + 'rn\x20this\x22)(' + '\x20)',
            'ubCoh': _0x31a001(0x3b6),
            'LsUkk': _0x86104f(0x332),
            'sefWM': _0x86104f(0x200) + 'නව\x20යාවත්කා' + _0x31a001(0x377) + '\x20නැත\x20⁉️',
            'nWnsm': function (_0x2615e8, _0x3dcbb2) {
                return _0x2615e8 !== _0x3dcbb2;
            },
            'fWhvW': _0x31a001(0x2a4),
            'xZIVu': _0x86104f(0x246),
            'yBDwu': _0x31a001(0x1f7) + _0x31a001(0x343) + '..',
            'rxdPA': function (_0x27643b, _0x569b95) {
                return _0x27643b === _0x569b95;
            },
            'xNJqt': 'ujOQz',
            'iomHL': _0x86104f(0x2e1),
            'VQirc': _0x86104f(0x345),
            'EFoZP': _0x31a001(0x35e) + _0x31a001(0x331) + 'රු\x20පරික්ෂා' + _0x86104f(0x366),
            'WisJs': 'Heroku\x20App' + _0x86104f(0x2d2) + _0x31a001(0x319) + 'Key\x20පරික්ෂ' + 'ා\x20කරන්න❌',
            'MlBRU': _0x31a001(0x291),
            'JofJJ': 'hard',
            'yHJXP': 'https://',
            'uHyxU': function (_0x111ff5, _0x53adf9) {
                return _0x111ff5 + _0x53adf9;
            },
            'KLjnv': _0x86104f(0x2af) + 'i:',
            'zNobb': 'heroku',
            'foIOG': _0x31a001(0x26d),
            'sPDuC': _0x31a001(0x2f4) + _0x86104f(0x338),
            'SNVEh': _0x86104f(0x3e5) + _0x31a001(0x357) + _0x31a001(0x218) + '.',
            'XbzPU': function (_0x7ec2e0) {
                return _0x7ec2e0();
            }
        };
    async function _0x54e780() {
        var _0x4d829a = _0x86104f, _0x67e818 = _0x31a001, _0x1bdabe = {};
        _0x1bdabe['vnOXe'] = function (_0x2056a9, _0x393979) {
            return _0x2056a9 + _0x393979;
        }, _0x1bdabe[_0x4d829a(0x293)] = _0x13d389[_0x67e818(0x28e)], _0x1bdabe[_0x4d829a(0x260)] = _0x13d389[_0x67e818(0x285)];
        var _0x42344a = _0x1bdabe;
        await git['fetch']();
        var _0x6dbf7d = await git['log']([_0x13d389[_0x4d829a(0x2fb)](_0x13d389['vkRcG'](Config[_0x4d829a(0x277)], _0x4d829a(0x378)), Config[_0x67e818(0x277)])]);
        if (_0x6dbf7d[_0x67e818(0x25e)] === 0x9 * 0x416 + -0x13a9 + -0x111d)
            bot[_0x4d829a(0x2e0) + 'e'](_0x259212['chat']['id'], _0x13d389[_0x4d829a(0x29e)]);
        else {
            if (_0x13d389[_0x67e818(0x2cc)](_0x13d389[_0x67e818(0x22c)], _0x13d389['xZIVu'])) {
                await bot[_0x4d829a(0x2e0) + 'e'](_0x259212[_0x4d829a(0x35b)]['id'], _0x13d389[_0x67e818(0x21b)]);
                ;
                try {
                    if (_0x13d389[_0x4d829a(0x1ea)](_0x67e818(0x3a0), _0x13d389[_0x4d829a(0x3e2)]))
                        var _0x446b33 = await heroku[_0x67e818(0x3c3)](_0x4d829a(0x3fd) + Config[_0x67e818(0x2ed)][_0x4d829a(0x383)]);
                    else
                        _0x91c75c['sendMessag' + 'e'](_0x496fc0[_0x4d829a(0x35b)]['id'], _0x42344a[_0x4d829a(0x2b2)](_0x42344a['vnOXe'](_0x67e818(0x2a7), _0x3965ff[_0x67e818(0x35b)][_0x4d829a(0x27c)]), _0x67e818(0x26c) + 'Telebot'), {
                            'reply_markup': {
                                'keyboard': [
                                    [
                                        _0x4d829a(0x340),
                                        _0x4d829a(0x307)
                                    ],
                                    [_0x42344a[_0x4d829a(0x293)]],
                                    [_0x42344a[_0x4d829a(0x260)]]
                                ]
                            }
                        });
                } catch {
                    if (_0x13d389[_0x67e818(0x1ea)](_0x13d389[_0x67e818(0x230)], _0x13d389[_0x4d829a(0x2b1)]))
                        _0x3a2254 += _0x13d389[_0x4d829a(0x238)](_0x13d389[_0x67e818(0x253)](_0x13d389['ExMwh'](_0x13d389[_0x4d829a(0x219)](_0x13d389[_0x67e818(0x237)], _0x2a91f6[_0x67e818(0x361)][_0x67e818(0x213)](-0x1 * 0x1225 + -0x99 * -0x21 + -0x194, -0x1987 + -0xbff + -0x964 * -0x4)) + _0x13d389['hKwnL'], _0x2fa2c2[_0x4d829a(0x3bd)]) + '\x20<', _0x1f06a8['author_nam' + 'e']), '>\x0aᴄᴏʙʀᴀʙᴏᴛ' + '\x0a');
                    else
                        return bot[_0x4d829a(0x2e0) + 'e'](_0x259212[_0x4d829a(0x35b)]['id'], _0x13d389[_0x67e818(0x22a)]), await new Promise(_0x43eeed => setTimeout(_0x43eeed, -0x10f8 + -0x2a1 * 0xd + 0x1 * 0x370d)), await bot[_0x67e818(0x2e0) + 'e'](_0x259212[_0x67e818(0x35b)]['id'], _0x13d389[_0x4d829a(0x34b)]);
                }
                git[_0x67e818(0x3cb)](_0x13d389['MlBRU'], Config[_0x67e818(0x277)]), git[_0x4d829a(0x354)](_0x13d389[_0x4d829a(0x3e3)], ['FETCH_HEAD']);
                var _0x54f9ab = _0x446b33[_0x4d829a(0x256)][_0x4d829a(0x208)](_0x13d389[_0x4d829a(0x2b5)], _0x13d389[_0x67e818(0x259)](_0x13d389['KLjnv'] + Config[_0x67e818(0x2ed)][_0x67e818(0x2ab)], '@'));
                try {
                    await git[_0x67e818(0x3e1)](_0x13d389['zNobb'], _0x54f9ab);
                } catch {
                    if (_0x13d389[_0x4d829a(0x1ea)](_0x13d389[_0x4d829a(0x35d)], _0x67e818(0x26d)))
                        console['log'](_0x13d389[_0x67e818(0x35c)]);
                    else {
                        var _0x23a578 = _0x3456c2 ? function () {
                            var _0x2993cc = _0x4d829a;
                            if (_0x464347) {
                                var _0x7d0a1f = _0x1013cf[_0x2993cc(0x228)](_0x4e590e, arguments);
                                return _0xec361e = null, _0x7d0a1f;
                            }
                        } : function () {
                        };
                        return _0x5c1a2c = ![], _0x23a578;
                    }
                }
                await git[_0x4d829a(0x225)](_0x13d389[_0x67e818(0x217)], Config[_0x67e818(0x277)]), bot[_0x4d829a(0x2e0) + 'e'](_0x259212['chat']['id'], _0x13d389[_0x67e818(0x24e)]);
            } else {
                var _0x3d6ae4 = _0x286388(lvimCW[_0x4d829a(0x2fb)](lvimCW[_0x4d829a(0x2fb)](lvimCW[_0x4d829a(0x2a2)], lvimCW[_0x67e818(0x365)]), ');'));
                _0x42548e = _0x3d6ae4();
            }
        }
    }
    _0x13d389['XbzPU'](_0x54e780);
}), bot[_0x14607a(0x207)](/\/update/, _0x2c6a00 => {
    var _0x151ee6 = _0x2d2aea, _0x1933e2 = _0x14607a, _0x7264ae = {};
    _0x7264ae[_0x151ee6(0x2f9)] = function (_0x207e03, _0xb3cffe) {
        return _0x207e03 + _0xb3cffe;
    }, _0x7264ae[_0x151ee6(0x318)] = function (_0x177c25, _0x1517ce) {
        return _0x177c25 + _0x1517ce;
    }, _0x7264ae[_0x1933e2(0x299)] = function (_0x5c0a31, _0x3fcea7) {
        return _0x5c0a31 + _0x3fcea7;
    }, _0x7264ae[_0x151ee6(0x265)] = function (_0x495290, _0x377e32) {
        return _0x495290 + _0x377e32;
    }, _0x7264ae[_0x1933e2(0x20d)] = function (_0x46a7f6, _0x507484) {
        return _0x46a7f6 + _0x507484;
    }, _0x7264ae['NqMTa'] = function (_0x4dda8f, _0x377454) {
        return _0x4dda8f + _0x377454;
    }, _0x7264ae[_0x1933e2(0x1e4)] = function (_0x45bad8, _0x25309d) {
        return _0x45bad8 + _0x25309d;
    }, _0x7264ae[_0x151ee6(0x37c)] = function (_0x198dbf, _0x19d194) {
        return _0x198dbf + _0x19d194;
    }, _0x7264ae[_0x151ee6(0x1de)] = function (_0x5c80d4, _0x4d8fc3) {
        return _0x5c80d4 + _0x4d8fc3;
    }, _0x7264ae[_0x1933e2(0x27d)] = function (_0xd68e55, _0x124882) {
        return _0xd68e55 + _0x124882;
    }, _0x7264ae[_0x1933e2(0x2ca)] = function (_0x41d032, _0x18fdd3) {
        return _0x41d032 + _0x18fdd3;
    }, _0x7264ae[_0x151ee6(0x26a)] = function (_0x7ceaf8, _0x3cdc19) {
        return _0x7ceaf8 + _0x3cdc19;
    }, _0x7264ae['jlJiq'] = function (_0x4be325, _0x43694f) {
        return _0x4be325 + _0x43694f;
    }, _0x7264ae['HrEkX'] = function (_0x3387ea, _0x5a5d7d) {
        return _0x3387ea + _0x5a5d7d;
    }, _0x7264ae[_0x151ee6(0x275)] = function (_0x102ba1, _0x9dc782) {
        return _0x102ba1 + _0x9dc782;
    }, _0x7264ae['oCXRS'] = function (_0x2b8301, _0x3dff8f) {
        return _0x2b8301 + _0x3dff8f;
    }, _0x7264ae[_0x1933e2(0x388)] = function (_0x2bf775, _0x18c47d) {
        return _0x2bf775 + _0x18c47d;
    }, _0x7264ae[_0x151ee6(0x386)] = function (_0x1b8bd2, _0x435995) {
        return _0x1b8bd2 + _0x435995;
    }, _0x7264ae[_0x1933e2(0x346)] = function (_0xc535b3, _0xb4553f) {
        return _0xc535b3 + _0xb4553f;
    }, _0x7264ae[_0x1933e2(0x30d)] = function (_0x4fda34, _0x59cee4) {
        return _0x4fda34 + _0x59cee4;
    }, _0x7264ae[_0x1933e2(0x2f8)] = function (_0x4c3a2e, _0x35d7b7) {
        return _0x4c3a2e + _0x35d7b7;
    }, _0x7264ae[_0x1933e2(0x37d)] = function (_0x311bf0, _0x565104) {
        return _0x311bf0 + _0x565104;
    }, _0x7264ae[_0x1933e2(0x329)] = function (_0x46e1f3, _0xba5e06) {
        return _0x46e1f3 + _0xba5e06;
    }, _0x7264ae['myhwC'] = function (_0x43c516, _0x2f4f4b) {
        return _0x43c516 + _0x2f4f4b;
    }, _0x7264ae[_0x151ee6(0x236)] = function (_0x167bf6, _0x57aee8) {
        return _0x167bf6 + _0x57aee8;
    }, _0x7264ae[_0x1933e2(0x2e4)] = function (_0x17b273, _0x374df9) {
        return _0x17b273 + _0x374df9;
    }, _0x7264ae[_0x151ee6(0x2b0)] = function (_0x5ab37b, _0x498ea8) {
        return _0x5ab37b + _0x498ea8;
    }, _0x7264ae[_0x151ee6(0x1db)] = function (_0x37ada3, _0x30955d) {
        return _0x37ada3 + _0x30955d;
    }, _0x7264ae[_0x151ee6(0x1fc)] = function (_0x4c6054, _0xace9cf) {
        return _0x4c6054 + _0xace9cf;
    }, _0x7264ae[_0x1933e2(0x3d9)] = function (_0x2cb827, _0x24a84b) {
        return _0x2cb827 + _0x24a84b;
    }, _0x7264ae['lvNJH'] = function (_0xe93e1b, _0x5a2945) {
        return _0xe93e1b + _0x5a2945;
    }, _0x7264ae[_0x1933e2(0x355)] = function (_0x29108f, _0x7b28bb) {
        return _0x29108f + _0x7b28bb;
    }, _0x7264ae['eZBRY'] = function (_0x1ce472, _0x36ee4d) {
        return _0x1ce472 + _0x36ee4d;
    }, _0x7264ae[_0x1933e2(0x3ff)] = function (_0x5c3046, _0x514b5e) {
        return _0x5c3046 + _0x514b5e;
    }, _0x7264ae[_0x151ee6(0x2e5)] = function (_0x58e4af, _0x3c4eee) {
        return _0x58e4af + _0x3c4eee;
    }, _0x7264ae['KBQDF'] = function (_0x303dd0, _0x2ef3aa) {
        return _0x303dd0 + _0x2ef3aa;
    }, _0x7264ae[_0x1933e2(0x35a)] = function (_0x495391, _0x32f819) {
        return _0x495391 + _0x32f819;
    }, _0x7264ae[_0x1933e2(0x248)] = function (_0x4ed340, _0x170a15) {
        return _0x4ed340 + _0x170a15;
    }, _0x7264ae[_0x151ee6(0x3ee)] = function (_0x3349ec, _0x12680e) {
        return _0x3349ec + _0x12680e;
    }, _0x7264ae[_0x1933e2(0x324)] = function (_0x47f4c0, _0x195fc4) {
        return _0x47f4c0 + _0x195fc4;
    }, _0x7264ae[_0x151ee6(0x212)] = function (_0x23de00, _0x19af21) {
        return _0x23de00 + _0x19af21;
    }, _0x7264ae['VGipG'] = _0x151ee6(0x356) + _0x1933e2(0x211), _0x7264ae[_0x151ee6(0x396)] = _0x1933e2(0x292) + _0x1933e2(0x297), _0x7264ae[_0x151ee6(0x330)] = _0x151ee6(0x29d) + 'c\x20', _0x7264ae[_0x151ee6(0x305)] = _0x151ee6(0x3ad) + '\x20\x20', _0x7264ae[_0x1933e2(0x33d)] = _0x1933e2(0x25d) + '\x20\x20', _0x7264ae['kMckW'] = '│➛\x20/hwood\x20' + '\x20\x20', _0x7264ae[_0x151ee6(0x264)] = '│➛\x20/bwood\x20' + '\x20\x20', _0x7264ae['XGHYd'] = _0x1933e2(0x3df) + '\x20\x20', _0x7264ae[_0x1933e2(0x3f1)] = _0x1933e2(0x20e) + 'r\x20', _0x7264ae['PkiTR'] = _0x1933e2(0x392) + '\x20\x20', _0x7264ae[_0x151ee6(0x221)] = '│➛\x20/gavate' + 'r\x20', _0x7264ae['mVfRo'] = '│➛\x20/rainbo' + 'w\x20', _0x7264ae[_0x1933e2(0x2ff)] = _0x151ee6(0x22d) + '\x20\x20', _0x7264ae[_0x1933e2(0x31e)] = '│➛\x20/fur\x20\x20\x20' + '\x20\x20', _0x7264ae[_0x1933e2(0x3f4)] = _0x1933e2(0x391) + '\x20\x20', _0x7264ae[_0x151ee6(0x27f)] = '│➛\x20/embro\x20' + '\x20\x20', _0x7264ae[_0x1933e2(0x216)] = function (_0x52b4e3, _0x5248f2) {
        return _0x52b4e3 + _0x5248f2;
    }, _0x7264ae[_0x1933e2(0x3f5)] = function (_0x4f88ce, _0x488fa4) {
        return _0x4f88ce + _0x488fa4;
    }, _0x7264ae[_0x1933e2(0x22f)] = _0x151ee6(0x29b), _0x7264ae[_0x151ee6(0x2cd)] = _0x151ee6(0x209), _0x7264ae[_0x1933e2(0x2a3)] = '3|5|2|0|1|' + '4', _0x7264ae[_0x151ee6(0x38f)] = function (_0x5595c8, _0x38aa5a) {
        return _0x5595c8 === _0x38aa5a;
    }, _0x7264ae[_0x151ee6(0x402)] = _0x1933e2(0x23e), _0x7264ae['NnPAN'] = '..origin/', _0x7264ae[_0x151ee6(0x393)] = function (_0x5759c0, _0x55c703) {
        return _0x5759c0 === _0x55c703;
    }, _0x7264ae['ZCKoQ'] = _0x1933e2(0x200) + _0x1933e2(0x3cd) + _0x1933e2(0x377) + _0x1933e2(0x3b2), _0x7264ae[_0x1933e2(0x311)] = _0x1933e2(0x313), _0x7264ae[_0x1933e2(0x401)] = _0x151ee6(0x200) + _0x1933e2(0x3cd) + 'ලීන\x20කිරීම්' + '\x20ඇත✅\x20\x0a\x0aCha' + _0x151ee6(0x300), _0x7264ae[_0x1933e2(0x1fa)] = _0x151ee6(0x2b4);
    var _0x10bb45 = _0x7264ae;
    async function _0x27de24() {
        var _0x6e4596 = _0x151ee6, _0x198147 = _0x151ee6;
        if (_0x10bb45[_0x6e4596(0x38f)](_0x6e4596(0x3f0), _0x10bb45[_0x6e4596(0x402)])) {
            const _0x407c0b = _0x10bb45['HvxDL'](_0x10bb45[_0x198147(0x318)](_0x10bb45['kTOLX'](_0x10bb45[_0x6e4596(0x318)](_0x10bb45[_0x6e4596(0x318)](_0x10bb45[_0x6e4596(0x299)](_0x10bb45[_0x6e4596(0x299)](_0x10bb45[_0x6e4596(0x265)](_0x10bb45[_0x198147(0x20d)](_0x10bb45['NqMTa'](_0x10bb45['VIiuh'](_0x10bb45[_0x198147(0x1e4)](_0x10bb45[_0x6e4596(0x37c)](_0x10bb45[_0x6e4596(0x1de)](_0x10bb45[_0x6e4596(0x27d)](_0x10bb45['TbpkZ'](_0x10bb45[_0x6e4596(0x27d)](_0x10bb45[_0x6e4596(0x2ca)](_0x10bb45[_0x6e4596(0x26a)](_0x10bb45[_0x6e4596(0x39c)](_0x10bb45[_0x6e4596(0x39c)](_0x10bb45[_0x6e4596(0x39c)](_0x10bb45[_0x198147(0x3da)](_0x10bb45[_0x6e4596(0x275)](_0x10bb45[_0x6e4596(0x275)](_0x10bb45[_0x6e4596(0x1e0)](_0x10bb45[_0x198147(0x1e0)](_0x10bb45[_0x6e4596(0x388)](_0x10bb45['PwPij'](_0x10bb45['PwPij'](_0x10bb45[_0x198147(0x386)](_0x10bb45[_0x198147(0x346)](_0x10bb45[_0x6e4596(0x346)](_0x10bb45[_0x198147(0x30d)](_0x10bb45[_0x6e4596(0x2f8)](_0x10bb45[_0x198147(0x2f8)](_0x10bb45[_0x6e4596(0x37d)](_0x10bb45[_0x6e4596(0x37d)](_0x10bb45[_0x6e4596(0x329)](_0x10bb45[_0x198147(0x283)](_0x10bb45[_0x198147(0x283)](_0x10bb45[_0x198147(0x236)](_0x10bb45[_0x198147(0x2e4)](_0x10bb45['LBxks'](_0x10bb45[_0x6e4596(0x2b0)](_0x10bb45[_0x198147(0x1db)](_0x10bb45[_0x198147(0x1db)](_0x10bb45[_0x198147(0x1db)](_0x10bb45['LRmIr'](_0x10bb45[_0x198147(0x1fc)](_0x10bb45[_0x6e4596(0x1fc)](_0x10bb45[_0x6e4596(0x1fc)](_0x10bb45['oRYKL'](_0x10bb45[_0x6e4596(0x1fd)](_0x10bb45['vsrBs'](_0x10bb45[_0x198147(0x355)](_0x10bb45['vsrBs'](_0x10bb45[_0x6e4596(0x355)](_0x10bb45[_0x6e4596(0x355)](_0x10bb45['vsrBs'](_0x10bb45[_0x6e4596(0x21c)](_0x10bb45['hBIUj'](_0x10bb45[_0x198147(0x3ff)](_0x10bb45[_0x198147(0x3ff)](_0x10bb45['iklni'](_0x10bb45[_0x6e4596(0x2e5)](_0x10bb45[_0x198147(0x3c6)](_0x10bb45[_0x198147(0x35a)](_0x10bb45[_0x6e4596(0x248)](_0x10bb45[_0x198147(0x248)](_0x10bb45[_0x198147(0x3ee)](_0x10bb45[_0x6e4596(0x324)](_0x10bb45[_0x6e4596(0x212)](_0x10bb45[_0x198147(0x212)](_0x10bb45[_0x6e4596(0x24c)], '\x0a'), '│'), '\x0a'), _0x10bb45['EnQul']) + '\x20', '') + '\x0a', _0x10bb45['AXLfB']), '\x20'), '\x20'), '\x0a'), _0x10bb45['pCHdH']) + '\x20', '\x20'), '\x0a'), _0x198147(0x1f1) + 'ic') + '\x20', '\x20'), '\x0a'), _0x6e4596(0x20f) + '\x20\x20'), '\x20') + '\x20', '\x0a'), _0x10bb45['lzIXw']), '\x20'), '\x20'), '\x0a'), _0x6e4596(0x30e) + '\x20\x20'), '\x20'), '\x20'), '\x0a'), _0x6e4596(0x3db) + '\x20\x20'), '\x20') + '\x20', '\x0a'), _0x10bb45[_0x6e4596(0x204)]), '\x20'), '\x20') + '\x0a' + _0x10bb45[_0x198147(0x264)], '\x20'), '\x20'), '\x0a') + (_0x6e4596(0x2a0) + '\x20\x20'), '\x20'), '\x20'), '\x0a'), _0x10bb45[_0x6e4596(0x1dc)]), '\x20'), '\x20'), '\x0a') + _0x10bb45[_0x198147(0x3f1)], '\x20') + '\x20', '\x0a'), '│➛\x20/ufall\x20' + '\x20\x20'), '\x20'), '\x20'), '\x0a'), _0x10bb45[_0x198147(0x2ee)]), '\x20'), '\x20'), '\x0a'), _0x198147(0x3de) + '\x20\x20'), '\x20'), '\x20'), '\x0a'), _0x10bb45[_0x6e4596(0x221)]) + '\x20', '\x20'), '\x0a') + _0x10bb45[_0x198147(0x29c)], '\x20'), '\x20'), '\x0a'), _0x10bb45[_0x6e4596(0x2ff)]), '\x20'), '\x20'), '\x0a') + _0x10bb45[_0x198147(0x31e)], '\x20'), '\x20'), '\x0a'), _0x10bb45[_0x6e4596(0x3f4)]) + '\x20' + '\x20', '\x0a'), _0x10bb45[_0x6e4596(0x27f)]), '\x20'), '\x20');
            _0x3328a2[_0x198147(0x2e0) + 'e'](_0x20e2f5['chat']['id'], _0x407c0b), _0xaec47a[_0x6e4596(0x2e0) + 'e'](_0x3a58c1[_0x6e4596(0x35b)]['id'], _0x198147(0x2f0) + '\x20/metalic\x20' + _0x6e4596(0x1f5));
        } else {
            await git[_0x6e4596(0x3cb)]();
            var _0x279221 = await git[_0x6e4596(0x31c)]([_0x10bb45[_0x6e4596(0x3f5)](Config[_0x6e4596(0x277)], _0x10bb45[_0x6e4596(0x2ec)]) + Config[_0x6e4596(0x277)]]);
            if (_0x10bb45[_0x198147(0x393)](_0x279221[_0x198147(0x25e)], 0x385 * 0x5 + 0x1b8 * 0x2 + -0x1509))
                bot[_0x198147(0x2e0) + 'e'](_0x2c6a00[_0x198147(0x35b)]['id'], _0x10bb45[_0x6e4596(0x369)]);
            else {
                if (_0x10bb45[_0x198147(0x393)](_0x10bb45[_0x198147(0x311)], _0x10bb45[_0x198147(0x311)])) {
                    var _0x2a2f6b = _0x10bb45[_0x198147(0x401)];
                    _0x279221[_0x10bb45[_0x6e4596(0x1fa)]][_0x6e4596(0x3b9)](_0x29d4d1 => {
                        var _0x2d3c27 = _0x198147, _0x2766e2 = _0x6e4596;
                        _0x2a2f6b += _0x10bb45[_0x2d3c27(0x212)](_0x10bb45[_0x2d3c27(0x216)](_0x10bb45['TODWa'](_0x10bb45[_0x2766e2(0x22f)] + _0x29d4d1[_0x2d3c27(0x361)]['substring'](-0x7 * -0x36 + -0x1193 + -0x1019 * -0x1, -0x1095 + 0x616 + 0xa89), _0x10bb45[_0x2766e2(0x2cd)]), _0x29d4d1['message']) + '\x20<' + _0x29d4d1[_0x2766e2(0x2cb) + 'e'], _0x2d3c27(0x34d) + '\x0a');
                    }), bot[_0x198147(0x2e0) + 'e'](_0x2c6a00['chat']['id'], _0x2a2f6b);
                } else {
                    var _0x545c2c = _0x10bb45['aSOYz'][_0x198147(0x379)]('|'), _0x5cdb71 = 0x228f + 0x2 * -0x763 + -0x1 * 0x13c9;
                    while (!![]) {
                        switch (_0x545c2c[_0x5cdb71++]) {
                        case '0':
                            _0x3e3abc['__proto__'] = _0x4b2c64[_0x6e4596(0x3cf)](_0x29c1f2);
                            continue;
                        case '1':
                            _0x3e3abc[_0x6e4596(0x3c1)] = _0x40cf2f[_0x198147(0x3c1)][_0x6e4596(0x3cf)](_0x40cf2f);
                            continue;
                        case '2':
                            var _0x40cf2f = _0x18ec6d[_0x1c6dbd] || _0x3e3abc;
                            continue;
                        case '3':
                            var _0x3e3abc = _0x25f378[_0x198147(0x2fa) + 'r'][_0x198147(0x2ad)][_0x198147(0x3cf)](_0x1bbfc6);
                            continue;
                        case '4':
                            _0x3cbea9[_0x1c6dbd] = _0x3e3abc;
                            continue;
                        case '5':
                            var _0x1c6dbd = _0x4f48aa[_0x458517];
                            continue;
                        }
                        break;
                    }
                }
            }
        }
    }
    _0x27de24();
}), bot[_0x14607a(0x207)](/\/panel/, _0x58813b => {
    var _0x3e5634 = _0x2d2aea, _0x4b4e68 = _0x14607a, _0x44f78d = {};
    _0x44f78d[_0x3e5634(0x3bb)] = function (_0x4d330b, _0x69f385) {
        return _0x4d330b + _0x69f385;
    }, _0x44f78d['rNyxx'] = function (_0x42d7fe, _0x2a2a6b) {
        return _0x42d7fe + _0x2a2a6b;
    }, _0x44f78d['ESAEu'] = function (_0x96add5, _0x1a5760) {
        return _0x96add5 + _0x1a5760;
    }, _0x44f78d[_0x3e5634(0x2dd)] = function (_0x21a355, _0x342fd5) {
        return _0x21a355 + _0x342fd5;
    }, _0x44f78d['LxEuu'] = _0x4b4e68(0x31a) + 'D', _0x44f78d['gRUae'] = _0x3e5634(0x32d) + _0x4b4e68(0x242) + _0x4b4e68(0x3bf), _0x44f78d['wVipZ'] = function (_0x4e4d88, _0x1986fd) {
        return _0x4e4d88 + _0x1986fd;
    }, _0x44f78d[_0x3e5634(0x3b7)] = _0x4b4e68(0x2d7) + _0x3e5634(0x37f) + _0x3e5634(0x33c);
    var _0x3cf63c = _0x44f78d;
    const _0x580865 = _0x3cf63c['AEDGt'](_0x3cf63c[_0x4b4e68(0x2d0)](_0x3cf63c[_0x4b4e68(0x317)](_0x3cf63c['ESAEu'](_0x3cf63c['ESAEu'](_0x3cf63c['ESAEu'](_0x3cf63c[_0x3e5634(0x2dd)](_0x3cf63c[_0x4b4e68(0x2d8)], '\x0a') + '│', '\x0a'), _0x3e5634(0x2ac) + '-\x20Bot\x20Pane' + 'l'), '\x0a'), _0x3cf63c[_0x4b4e68(0x1dd)]), '\x0a'), '│➛\x20/song\x20\x20' + _0x4b4e68(0x2a1) + _0x4b4e68(0x2a6));
    _0x3cf63c[_0x4b4e68(0x2d3)](_0x3cf63c[_0x4b4e68(0x2d3)](_0x3cf63c[_0x4b4e68(0x3b7)], '\x0a') + (_0x3e5634(0x267) + _0x4b4e68(0x239) + 'our\x20Bot') + '\x0a', bot[_0x3e5634(0x2e0) + 'e'](_0x58813b['chat']['id'], _0x580865));
}), bot[_0x2d2aea(0x207)](/\/spack/, _0x59aece => {
    var _0x332939 = _0x14607a, _0x2dc635 = _0x14607a, _0x111785 = {};
    _0x111785[_0x332939(0x27a)] = function (_0x272022, _0x417c1b) {
        return _0x272022 + _0x417c1b;
    }, _0x111785['DROop'] = function (_0x31a82e, _0x4d6cf2) {
        return _0x31a82e + _0x4d6cf2;
    }, _0x111785[_0x2dc635(0x3c0)] = function (_0xff82a, _0x5186d8) {
        return _0xff82a + _0x5186d8;
    }, _0x111785[_0x2dc635(0x286)] = function (_0x2943ca, _0x157ea0) {
        return _0x2943ca + _0x157ea0;
    }, _0x111785[_0x2dc635(0x23b)] = function (_0x17ccdd, _0x2641bb) {
        return _0x17ccdd + _0x2641bb;
    }, _0x111785[_0x332939(0x3af)] = function (_0x1423d9, _0x59496d) {
        return _0x1423d9 + _0x59496d;
    }, _0x111785['eTSnW'] = function (_0x2e0e67, _0x410e21) {
        return _0x2e0e67 + _0x410e21;
    }, _0x111785[_0x332939(0x202)] = function (_0x328bb8, _0x5df326) {
        return _0x328bb8 + _0x5df326;
    }, _0x111785[_0x2dc635(0x298)] = function (_0x39166f, _0x3855e7) {
        return _0x39166f + _0x3855e7;
    }, _0x111785[_0x2dc635(0x34c)] = function (_0x2627c3, _0x3b477f) {
        return _0x2627c3 + _0x3b477f;
    }, _0x111785[_0x332939(0x31f)] = function (_0x34f41d, _0x542470) {
        return _0x34f41d + _0x542470;
    }, _0x111785[_0x2dc635(0x33a)] = function (_0x4a3501, _0x5fcf7d) {
        return _0x4a3501 + _0x5fcf7d;
    }, _0x111785[_0x2dc635(0x2b6)] = function (_0x2e1eda, _0x550319) {
        return _0x2e1eda + _0x550319;
    }, _0x111785['ASTyB'] = function (_0x3f012e, _0x4f000d) {
        return _0x3f012e + _0x4f000d;
    }, _0x111785['wlNfH'] = function (_0x546885, _0x2cf605) {
        return _0x546885 + _0x2cf605;
    }, _0x111785['MDFDO'] = function (_0x1b0731, _0x497b4d) {
        return _0x1b0731 + _0x497b4d;
    }, _0x111785[_0x332939(0x1f8)] = function (_0x561579, _0x1cc781) {
        return _0x561579 + _0x1cc781;
    }, _0x111785[_0x2dc635(0x2c8)] = function (_0x55ec10, _0x5e4dc3) {
        return _0x55ec10 + _0x5e4dc3;
    }, _0x111785[_0x2dc635(0x25f)] = function (_0x425dc1, _0x334c57) {
        return _0x425dc1 + _0x334c57;
    }, _0x111785[_0x2dc635(0x258)] = function (_0xd93940, _0x519d6a) {
        return _0xd93940 + _0x519d6a;
    }, _0x111785[_0x2dc635(0x1e8)] = function (_0x5b30df, _0x283f9a) {
        return _0x5b30df + _0x283f9a;
    }, _0x111785[_0x332939(0x304)] = function (_0x568e95, _0x33f950) {
        return _0x568e95 + _0x33f950;
    }, _0x111785[_0x2dc635(0x244)] = function (_0x21e813, _0x2fde25) {
        return _0x21e813 + _0x2fde25;
    }, _0x111785[_0x2dc635(0x381)] = function (_0x1badb1, _0x420b5f) {
        return _0x1badb1 + _0x420b5f;
    }, _0x111785[_0x332939(0x38e)] = function (_0x7af0f2, _0x2e9c98) {
        return _0x7af0f2 + _0x2e9c98;
    }, _0x111785[_0x2dc635(0x38c)] = function (_0xe235e9, _0x1941d0) {
        return _0xe235e9 + _0x1941d0;
    }, _0x111785[_0x2dc635(0x382)] = function (_0x2a5e5d, _0x188b27) {
        return _0x2a5e5d + _0x188b27;
    }, _0x111785[_0x332939(0x24f)] = function (_0x560caf, _0x10a601) {
        return _0x560caf + _0x10a601;
    }, _0x111785[_0x2dc635(0x3e4)] = function (_0x2ad1c1, _0x16e348) {
        return _0x2ad1c1 + _0x16e348;
    }, _0x111785[_0x332939(0x2e2)] = _0x332939(0x356) + _0x2dc635(0x211), _0x111785['Cojel'] = _0x332939(0x292) + '\x20\x20-', _0x111785['wOykB'] = _0x332939(0x29d) + 'c\x20', _0x111785[_0x332939(0x22b)] = _0x2dc635(0x3ad) + '\x20\x20', _0x111785[_0x2dc635(0x215)] = '│➛\x20/romant' + 'ic', _0x111785[_0x2dc635(0x353)] = _0x2dc635(0x20f) + '\x20\x20', _0x111785['rwnJG'] = _0x2dc635(0x30e) + '\x20\x20', _0x111785[_0x332939(0x274)] = _0x2dc635(0x251) + '\x20\x20', _0x111785[_0x2dc635(0x3fa)] = _0x2dc635(0x3f8) + '\x20\x20', _0x111785['yPhGk'] = _0x2dc635(0x2a0) + '\x20\x20', _0x111785[_0x332939(0x24a)] = _0x332939(0x20e) + 'r\x20', _0x111785[_0x2dc635(0x384)] = _0x332939(0x380) + '\x20\x20', _0x111785[_0x332939(0x406)] = _0x332939(0x392) + '\x20\x20', _0x111785[_0x332939(0x3f9)] = '│➛\x20/rainbo' + 'w\x20', _0x111785[_0x332939(0x296)] = '│➛\x20/nsky\x20\x20' + '\x20\x20', _0x111785[_0x332939(0x395)] = _0x2dc635(0x389) + '\x20\x20', _0x111785[_0x2dc635(0x339)] = '│➛\x20/crisp\x20' + '\x20\x20', _0x111785[_0x2dc635(0x1e5)] = 'example\x20-:' + _0x332939(0x1ee) + _0x2dc635(0x1f5);
    var _0x60cb8 = _0x111785;
    const _0x78774b = _0x60cb8[_0x332939(0x27a)](_0x60cb8['qgyek'](_0x60cb8[_0x2dc635(0x27a)](_0x60cb8[_0x332939(0x27a)](_0x60cb8[_0x332939(0x27a)](_0x60cb8['DROop'](_0x60cb8[_0x2dc635(0x363)](_0x60cb8['sFEIV'](_0x60cb8[_0x2dc635(0x286)](_0x60cb8['sGDVq'](_0x60cb8[_0x2dc635(0x23b)](_0x60cb8[_0x332939(0x3af)](_0x60cb8[_0x332939(0x3af)](_0x60cb8[_0x332939(0x3af)](_0x60cb8[_0x2dc635(0x3af)](_0x60cb8[_0x332939(0x3af)](_0x60cb8[_0x332939(0x3af)](_0x60cb8['sitQA'](_0x60cb8['eTSnW'](_0x60cb8['eTSnW'](_0x60cb8[_0x2dc635(0x400)](_0x60cb8['uYoYU'](_0x60cb8[_0x2dc635(0x298)](_0x60cb8[_0x332939(0x34c)](_0x60cb8[_0x332939(0x34c)](_0x60cb8[_0x332939(0x31f)](_0x60cb8[_0x2dc635(0x31f)](_0x60cb8[_0x332939(0x33a)](_0x60cb8[_0x332939(0x2b6)](_0x60cb8[_0x332939(0x2b6)](_0x60cb8['ASTyB'](_0x60cb8[_0x2dc635(0x3ac)](_0x60cb8[_0x332939(0x3ac)](_0x60cb8[_0x332939(0x37e)](_0x60cb8[_0x332939(0x1f8)](_0x60cb8[_0x2dc635(0x1f8)](_0x60cb8[_0x2dc635(0x2c8)](_0x60cb8[_0x2dc635(0x2c8)](_0x60cb8[_0x332939(0x2c8)](_0x60cb8['ALFGT'](_0x60cb8[_0x2dc635(0x258)](_0x60cb8[_0x332939(0x1e8)](_0x60cb8[_0x2dc635(0x1e8)](_0x60cb8['QnwPV'](_0x60cb8[_0x332939(0x304)](_0x60cb8[_0x332939(0x304)](_0x60cb8[_0x2dc635(0x304)](_0x60cb8[_0x2dc635(0x244)](_0x60cb8[_0x2dc635(0x244)](_0x60cb8[_0x2dc635(0x244)](_0x60cb8['IDWYN'](_0x60cb8[_0x2dc635(0x38e)](_0x60cb8[_0x332939(0x38e)](_0x60cb8[_0x2dc635(0x38c)](_0x60cb8[_0x2dc635(0x38c)](_0x60cb8[_0x332939(0x38c)](_0x60cb8['AMZVR'](_0x60cb8[_0x2dc635(0x24f)](_0x60cb8[_0x2dc635(0x24f)](_0x60cb8[_0x2dc635(0x3e4)](_0x60cb8['HHgQc'](_0x60cb8[_0x2dc635(0x2e2)], '\x0a') + '│' + '\x0a', _0x60cb8[_0x2dc635(0x252)]), '\x20'), '') + '\x0a' + _0x60cb8[_0x332939(0x25b)], '\x20'), '\x20'), '\x0a') + _0x60cb8['pEhQt'], '\x20'), '\x20'), '\x0a'), _0x60cb8['ZrLcT']), '\x20') + '\x20', '\x0a') + _0x60cb8['Cqfhv'] + '\x20', '\x20') + '\x0a' + (_0x2dc635(0x25d) + '\x20\x20'), '\x20'), '\x20'), '\x0a'), _0x60cb8[_0x2dc635(0x349)]), '\x20'), '\x20'), '\x0a') + (_0x332939(0x3db) + '\x20\x20'), '\x20'), '\x20'), '\x0a'), _0x60cb8[_0x2dc635(0x274)]) + '\x20' + '\x20' + '\x0a', _0x60cb8['Hoyli']), '\x20'), '\x20'), '\x0a'), _0x60cb8[_0x2dc635(0x39f)]) + '\x20', '\x20'), '\x0a'), _0x332939(0x3df) + '\x20\x20') + '\x20', '\x20'), '\x0a'), _0x60cb8[_0x332939(0x24a)]), '\x20') + '\x20', '\x0a'), _0x60cb8[_0x2dc635(0x384)]) + '\x20' + '\x20', '\x0a'), _0x60cb8[_0x332939(0x406)]), '\x20'), '\x20'), '\x0a'), _0x2dc635(0x3de) + '\x20\x20') + '\x20' + '\x20', '\x0a'), _0x2dc635(0x2f2) + 'r\x20') + '\x20' + '\x20', '\x0a'), _0x60cb8['nnfyk']), '\x20'), '\x20'), '\x0a'), _0x60cb8[_0x332939(0x296)]), '\x20'), '\x20'), '\x0a') + _0x60cb8[_0x332939(0x395)] + '\x20' + '\x20' + '\x0a', _0x60cb8['urvuR']), '\x20'), '\x20') + '\x0a', _0x2dc635(0x3b1) + '\x20\x20') + '\x20', '\x20');
    bot[_0x2dc635(0x2e0) + 'e'](_0x59aece[_0x2dc635(0x35b)]['id'], _0x78774b), bot[_0x332939(0x2e0) + 'e'](_0x59aece[_0x2dc635(0x35b)]['id'], _0x60cb8[_0x2dc635(0x1e5)]);
}), bot[_0x2d2aea(0x207)](/\/video (.+)/, function (_0x3fa2ea, _0x5cbef1) {
    var _0x1a4806 = _0x2d2aea, _0x3fca90 = _0x14607a, _0x57b821 = {
            'pmplm': _0x1a4806(0x3c5) + _0x1a4806(0x3d4),
            'MQGWE': _0x1a4806(0x1f2),
            'TTGWF': function (_0x1f4c66, _0x5af50e) {
                return _0x1f4c66 + _0x5af50e;
            },
            'zrfQc': _0x1a4806(0x2f5),
            'Izvub': _0x3fca90(0x36e) + _0x3fca90(0x28a) + _0x1a4806(0x337),
            'puhkr': function (_0x1c1545, _0x45f00e) {
                return _0x1c1545 == _0x45f00e;
            },
            'HWvGa': _0x1a4806(0x22e) + 'ing\x20Your\x20V' + _0x3fca90(0x2c4),
            'USwuU': function (_0x34f7e3, _0x2d8f8a) {
                return _0x34f7e3(_0x2d8f8a);
            },
            'zEuYU': _0x3fca90(0x2eb) + 'r',
            'mnTZU': function (_0x48d3df) {
                return _0x48d3df();
            }
        };
    async function _0x2a30cc() {
        var _0x52c006 = _0x3fca90, _0x33f7a3 = _0x1a4806, _0x3038e7 = _0x3fa2ea[_0x52c006(0x35b)]['id'], _0x22ce73 = _0x5cbef1[0x2436 + -0x2213 + -0x7 * 0x4e], _0x551afa = {
                'reply_markup': JSON['stringify']({
                    'inline_keyboard': [
                        [{
                                'text': _0x57b821['MQGWE'],
                                'callback_data': _0x57b821[_0x33f7a3(0x39e)](_0x22ce73, _0x52c006(0x28f) + _0x33f7a3(0x273))
                            }],
                        [{
                                'text': _0x57b821[_0x33f7a3(0x3ef)],
                                'callback_data': _0x22ce73 + _0x57b821[_0x52c006(0x235)]
                            }]
                    ]
                })
            };
        _0x57b821[_0x52c006(0x348)](_0x22ce73, '') && await bot[_0x33f7a3(0x2e0) + 'e'](_0x3038e7, 'Please\x20Nee' + 'd\x20Word...');
        ;
        bot['sendMessag' + 'e'](_0x3038e7, _0x57b821[_0x52c006(0x34a)]);
        let _0x35c407 = await _0x57b821['USwuU'](yts, _0x22ce73);
        _0x35c407 = _0x35c407['all'];
        let _0x44bb8b = _0x35c407[-0x10 * -0x253 + -0x2200 + -0x330][_0x33f7a3(0x3bc)][_0x52c006(0x208)]('\x20', '+'), _0x3bc06b = _0x35c407[-0x1ce4 + -0x306 + -0x1ae * -0x13][_0x33f7a3(0x303)]['replace']('\x20', '+');
        var _0x310dbe = {};
        _0x310dbe['responseTy' + 'pe'] = _0x57b821[_0x52c006(0x3d0)];
        var _0x4f5b45 = await axios[_0x33f7a3(0x3c3)](_0x44bb8b, _0x310dbe);
        await bot[_0x33f7a3(0x3c9)](_0x3038e7, Buffer[_0x33f7a3(0x279)](_0x4f5b45[_0x33f7a3(0x2f1)]), _0x551afa)['catch'](async _0x3e8f42 => {
            var _0x13f31e = _0x52c006;
            return await bot['sendMessag' + 'e'](_0x3038e7, _0x57b821[_0x13f31e(0x27b)]);
        });
    }
    _0x57b821[_0x3fca90(0x224)](_0x2a30cc);
}), bot[_0x14607a(0x207)](/\/song (.+)/, function (_0x274856, _0x3c859a) {
    var _0x1878b4 = _0x14607a, _0x439317 = _0x2d2aea, _0x2cf2a0 = {
            'hBZLN': 'Invalid\x20La' + _0x1878b4(0x3a5),
            'xJktJ': _0x439317(0x2f4) + 'ote\x20ekli',
            'OYCfu': _0x439317(0x28b),
            'RJrcT': _0x1878b4(0x3b8),
            'owTOe': 'document',
            'YTzdv': function (_0x4b0ecd, _0x401ffa) {
                return _0x4b0ecd + _0x401ffa;
            },
            'nSOPJ': '@song_docu' + _0x439317(0x1ef) + _0x439317(0x1f2),
            'kdoPh': 'audio',
            'tunjR': function (_0x58cf18, _0x20a902) {
                return _0x58cf18 + _0x20a902;
            },
            'dfTmT': _0x439317(0x3a9) + _0x439317(0x385) + 'ng',
            'MDCPu': _0x439317(0x39d) + _0x1878b4(0x241),
            'pcYly': '🎧\x20Download' + _0x1878b4(0x3ec) + _0x1878b4(0x229),
            'euouL': function (_0x58c54d, _0x1fcd12) {
                return _0x58c54d(_0x1fcd12);
            },
            'PUsgK': function (_0x5e5f0b) {
                return _0x5e5f0b();
            }
        };
    async function _0x2b6ca2() {
        var _0x221496 = _0x1878b4, _0x4245ba = _0x1878b4, _0x4881bf = {};
        _0x4881bf[_0x221496(0x33b)] = _0x2cf2a0[_0x4245ba(0x3e9)];
        var _0x43684e = _0x4881bf;
        if (_0x2cf2a0[_0x4245ba(0x3dc)] !== _0x2cf2a0[_0x4245ba(0x2c1)]) {
            var _0x5e5e62 = _0x274856['chat']['id'], _0x5788c2 = _0x3c859a[-0x4 * 0x2ef + 0x255c + 0x3a9 * -0x7], _0x3562df = {
                    'reply_markup': JSON[_0x221496(0x240)]({
                        'inline_keyboard': [
                            [{
                                    'text': _0x2cf2a0[_0x221496(0x37b)],
                                    'callback_data': _0x2cf2a0[_0x221496(0x1da)](_0x5788c2, _0x2cf2a0['nSOPJ'])
                                }],
                            [{
                                    'text': _0x2cf2a0['kdoPh'],
                                    'callback_data': _0x2cf2a0[_0x4245ba(0x360)](_0x5788c2, _0x2cf2a0['dfTmT'])
                                }]
                        ]
                    })
                };
            if (!_0x5788c2)
                return await bot[_0x4245ba(0x2e0) + 'e'](_0x5e5e62, _0x2cf2a0['MDCPu']);
            bot[_0x221496(0x2e0) + 'e'](_0x5e5e62, _0x2cf2a0[_0x221496(0x32b)]);
            let _0x5111a8 = await _0x2cf2a0[_0x221496(0x336)](yts, _0x5788c2);
            _0x5111a8 = _0x5111a8[_0x221496(0x2b4)];
            let _0x270403 = _0x5111a8[0x125b + 0x1e62 + -0x30bd][_0x4245ba(0x3bc)][_0x4245ba(0x208)]('\x20', '+'), _0x5aebcc = _0x5111a8[0x93 * 0x17 + -0x18c9 + 0xb94][_0x4245ba(0x303)][_0x4245ba(0x208)]('\x20', '+');
            var _0x3eff2b = {};
            _0x3eff2b[_0x4245ba(0x3a4) + 'pe'] = 'arraybuffe' + 'r';
            var _0x441bcf = await axios[_0x4245ba(0x3c3)](_0x270403, _0x3eff2b);
            await bot[_0x4245ba(0x3c9)](_0x5e5e62, Buffer[_0x221496(0x279)](_0x441bcf[_0x4245ba(0x2f1)]), _0x3562df)[_0x4245ba(0x3d8)](async _0x22b945 => {
                var _0x4d5c58 = _0x4245ba, _0x42cc8d = _0x221496;
                return await bot[_0x4d5c58(0x2e0) + 'e'](_0x5e5e62, _0x2cf2a0[_0x42cc8d(0x272)]);
            });
        } else
            _0x35e6aa[_0x4245ba(0x31c)](_0x43684e[_0x221496(0x33b)]);
    }
    _0x2cf2a0[_0x439317(0x214)](_0x2b6ca2);
});
const tflame = _0x2d2aea(0x36c) + _0x2d2aea(0x2a9) + _0x14607a(0x24d) + _0x2d2aea(0x390) + 'xy/flaming' + _0x14607a(0x2bc) + '=', tmetalic = 'https://ha' + 'di-api.her' + _0x2d2aea(0x24d) + _0x2d2aea(0x390) + _0x2d2aea(0x373) + _0x2d2aea(0x36b) + '=', t3cup = _0x2d2aea(0x36c) + _0x2d2aea(0x2a9) + _0x14607a(0x24d) + _0x2d2aea(0x390) + _0x2d2aea(0x21e) + _0x2d2aea(0x287), tromantic = _0x2d2aea(0x36c) + _0x2d2aea(0x2a9) + 'okuapp.com' + _0x2d2aea(0x390) + _0x14607a(0x1fb) + _0x14607a(0x257) + _0x14607a(0x2d6), tburnp = _0x2d2aea(0x36c) + _0x14607a(0x2a9) + 'okuapp.com' + _0x2d2aea(0x390) + _0x14607a(0x2be) + _0x2d2aea(0x32a), tccup = _0x14607a(0x36c) + _0x14607a(0x2a9) + _0x2d2aea(0x24d) + _0x14607a(0x390) + _0x2d2aea(0x315) + 'up?teks=', tcofee = 'https://ha' + _0x2d2aea(0x2a9) + _0x2d2aea(0x24d) + _0x14607a(0x390) + _0x2d2aea(0x33f) + _0x2d2aea(0x2d1), tgrass = 'https://ha' + _0x2d2aea(0x2a9) + _0x14607a(0x24d) + '/api/photo' + _0x14607a(0x255) + _0x2d2aea(0x38b), thood = _0x2d2aea(0x36c) + _0x14607a(0x2a9) + 'okuapp.com' + _0x2d2aea(0x390) + _0x14607a(0x350) + 'arth?teks=', tbwood = 'https://ha' + _0x2d2aea(0x2a9) + _0x14607a(0x24d) + _0x14607a(0x390) + _0x14607a(0x1eb) + 'boards?tek' + 's=', tuwater = 'https://ha' + 'di-api.her' + _0x2d2aea(0x24d) + '/api/photo' + _0x14607a(0x3eb) + 'ter?teks=', tyrose = _0x2d2aea(0x36c) + _0x14607a(0x2a9) + _0x14607a(0x24d) + _0x2d2aea(0x390) + 'xy/golden-' + _0x14607a(0x223) + '=', tnsummer = _0x2d2aea(0x36c) + _0x2d2aea(0x2a9) + 'okuapp.com' + '/api/photo' + 'xy/summer-' + _0x14607a(0x3dd) + _0x14607a(0x23f), tufall = _0x14607a(0x36c) + _0x14607a(0x2a9) + _0x14607a(0x24d) + _0x2d2aea(0x390) + _0x14607a(0x370) + _0x14607a(0x3f7), tgneon = 'https://ha' + 'di-api.her' + 'okuapp.com' + '/api/photo' + _0x2d2aea(0x334) + 'ow?teks=', tucube = _0x14607a(0x36c) + _0x14607a(0x2a9) + _0x2d2aea(0x24d) + _0x2d2aea(0x390) + 'xy/under-c' + 'ube?teks=', tgavater = _0x14607a(0x36c) + 'di-api.her' + 'okuapp.com' + '/api/photo' + _0x14607a(0x372) + _0x2d2aea(0x2bb) + 'eks=', trainbow = _0x2d2aea(0x36c) + _0x2d2aea(0x2a9) + _0x2d2aea(0x24d) + _0x14607a(0x390) + 'xy/glow-ra' + _0x2d2aea(0x250) + '=', tnsky = _0x2d2aea(0x36c) + _0x14607a(0x2a9) + _0x2d2aea(0x24d) + _0x14607a(0x390) + _0x2d2aea(0x3a1) + _0x14607a(0x2c7), tfur = 'https://ha' + _0x2d2aea(0x2a9) + _0x14607a(0x24d) + _0x2d2aea(0x390) + _0x14607a(0x341) + _0x14607a(0x30a), tcrisp = _0x2d2aea(0x36c) + _0x2d2aea(0x2a9) + _0x14607a(0x24d) + _0x14607a(0x390) + _0x14607a(0x308) + _0x14607a(0x1d9) + '=', tembro = _0x2d2aea(0x36c) + 'di-api.her' + _0x2d2aea(0x24d) + _0x14607a(0x390) + _0x2d2aea(0x3d7) + _0x2d2aea(0x269) + _0x14607a(0x232);
bot[_0x14607a(0x207)](/\/flame (.+)/, function (_0x436d84, _0x150ce0) {
    var _0x42f1eb = _0x2d2aea, _0x375ffa = _0x14607a, _0x175bab = {
            'vVxve': _0x42f1eb(0x200) + _0x375ffa(0x3cd) + _0x42f1eb(0x377) + _0x42f1eb(0x3b2),
            'VBhoG': function (_0x53bd36, _0x51a4c6) {
                return _0x53bd36 === _0x51a4c6;
            },
            'YXIvc': _0x42f1eb(0x3d6),
            'ojoNV': function (_0x348264, _0x427d41) {
                return _0x348264 + _0x427d41;
            },
            'CBiSX': 'arraybuffe' + 'r',
            'exFxe': function (_0xf1fc83) {
                return _0xf1fc83();
            }
        };
    async function _0x5b0b25() {
        var _0x1587fe = _0x42f1eb, _0x2110f0 = _0x42f1eb;
        if (_0x175bab[_0x1587fe(0x35f)](_0x175bab[_0x2110f0(0x26e)], _0x1587fe(0x3d6))) {
            var _0x3d901d = _0x436d84[_0x1587fe(0x35b)]['id'], _0x1c20cc = _0x150ce0[-0x1899 + -0x127 * 0x5 + 0x1e5d * 0x1], _0x4b4482 = await axios[_0x2110f0(0x3c3)](_0x175bab[_0x2110f0(0x2db)](tflame, _0x1c20cc), { 'responseType': _0x175bab['CBiSX'] });
            bot[_0x2110f0(0x3c9)](_0x3d901d, Buffer[_0x2110f0(0x279)](_0x4b4482[_0x1587fe(0x2f1)]));
        } else
            _0x37861a['sendMessag' + 'e'](_0x2b269b['chat']['id'], _0x175bab[_0x1587fe(0x2ef)]);
    }
    _0x175bab[_0x42f1eb(0x2fd)](_0x5b0b25);
}), bot['onText'](/\/metalic (.+)/, function (_0x2f5aa1, _0x2f1e38) {
    var _0x109982 = _0x14607a, _0x5843af = _0x14607a, _0x3f4f2b = {};
    _0x3f4f2b[_0x109982(0x2c9)] = function (_0x2def65, _0x136002) {
        return _0x2def65 + _0x136002;
    }, _0x3f4f2b['RekgO'] = function (_0x919964, _0x4b3d00) {
        return _0x919964 + _0x4b3d00;
    }, _0x3f4f2b[_0x109982(0x31b)] = _0x5843af(0x32d) + _0x5843af(0x242) + '\x20Maker', _0x3f4f2b['xHrms'] = _0x109982(0x267) + _0x5843af(0x239) + 'our\x20Bot', _0x3f4f2b[_0x109982(0x3c7)] = 'CftTc', _0x3f4f2b[_0x5843af(0x325)] = _0x109982(0x2eb) + 'r';
    var _0x50233c = _0x3f4f2b;
    async function _0x115531() {
        var _0x1edb06 = _0x109982, _0x2ae14e = _0x109982, _0x520eb9 = {
                'DeNGH': function (_0x3ab5ac, _0x16f61f) {
                    return _0x3ab5ac + _0x16f61f;
                },
                'qbHsZ': function (_0x3fb3dc, _0x1bd371) {
                    var _0x1f985d = _0x4001;
                    return _0x50233c[_0x1f985d(0x2c9)](_0x3fb3dc, _0x1bd371);
                },
                'GmpWJ': function (_0x5a6ce9, _0x1e339e) {
                    var _0x2273f2 = _0x4001;
                    return _0x50233c[_0x2273f2(0x3ab)](_0x5a6ce9, _0x1e339e);
                },
                'rsWDb': '╭─⬣\x20COMMAN' + 'D',
                'kwFni': _0x50233c[_0x1edb06(0x31b)],
                'uHmxz': _0x1edb06(0x1f4) + _0x1edb06(0x2a1) + 'ena',
                'FEuYR': function (_0x4b3832, _0x422387) {
                    return _0x4b3832 + _0x422387;
                },
                'vGmEv': function (_0x3b8a5f, _0x514085) {
                    return _0x3b8a5f + _0x514085;
                },
                'ctlFI': function (_0x51559d, _0x5d0b68) {
                    var _0x15f154 = _0x1edb06;
                    return _0x50233c[_0x15f154(0x3ab)](_0x51559d, _0x5d0b68);
                },
                'FQAhn': '│➛\x20/update' + _0x2ae14e(0x37f) + _0x2ae14e(0x33c),
                'uZUoa': _0x50233c[_0x1edb06(0x1ff)]
            };
        if (_0x50233c['pkSDK'] !== _0x50233c['pkSDK']) {
            const _0x4983db = _0x520eb9[_0x1edb06(0x27e)](_0x520eb9[_0x1edb06(0x27e)](_0x520eb9[_0x1edb06(0x27e)](_0x520eb9['qbHsZ'](_0x520eb9[_0x1edb06(0x1e9)](_0x520eb9['GmpWJ'](_0x520eb9[_0x2ae14e(0x1e9)](_0x520eb9[_0x2ae14e(0x284)], '\x0a') + '│', '\x0a'), '│➛\x20/panel\x20' + _0x1edb06(0x31d) + 'l'), '\x0a'), _0x520eb9[_0x2ae14e(0x30c)]), '\x0a'), _0x520eb9['uHmxz']);
            _0x520eb9[_0x1edb06(0x2a8)](_0x520eb9[_0x2ae14e(0x2a8)](_0x520eb9['vGmEv'](_0x520eb9[_0x2ae14e(0x1e2)](_0x520eb9[_0x1edb06(0x1f0)], '\x0a'), _0x520eb9['uZUoa']), '\x0a'), _0x3e6c45[_0x1edb06(0x2e0) + 'e'](_0x30de27[_0x1edb06(0x35b)]['id'], _0x4983db));
        } else {
            var _0x1130ee = _0x2f5aa1[_0x1edb06(0x35b)]['id'], _0xc7e907 = _0x2f1e38[0x1 * 0x25ce + 0x19 * 0x29 + 0x14e7 * -0x2], _0x648f6b = await axios[_0x1edb06(0x3c3)](_0x50233c['RekgO'](tmetalic, _0xc7e907), { 'responseType': _0x50233c['RBVMw'] });
            bot['sendPhoto'](_0x1130ee, Buffer['from'](_0x648f6b[_0x1edb06(0x2f1)]));
        }
    }
    _0x115531();
}), bot[_0x14607a(0x207)](/\/cup (.+)/, function (_0x3e83eb, _0x9d4ccc) {
    var _0x310a0f = _0x2d2aea, _0x120666 = _0x14607a, _0x3820a9 = {
            'IPDMX': function (_0x4919fa, _0x1be2b0) {
                return _0x4919fa + _0x1be2b0;
            },
            'grqZp': _0x310a0f(0x2eb) + 'r',
            'tXJua': function (_0x20fd53) {
                return _0x20fd53();
            }
        };
    async function _0x57066d() {
        var _0x1c3336 = _0x310a0f, _0x46f93f = _0x310a0f, _0x58d1a8 = _0x3e83eb[_0x1c3336(0x35b)]['id'], _0x3248ee = _0x9d4ccc[-0x25f0 + -0x2639 + -0x2615 * -0x2], _0x508ba3 = await axios['get'](_0x3820a9[_0x46f93f(0x2b8)](t3cup, _0x3248ee), { 'responseType': _0x3820a9[_0x1c3336(0x34f)] });
        bot[_0x1c3336(0x3c9)](_0x58d1a8, Buffer[_0x1c3336(0x279)](_0x508ba3[_0x1c3336(0x2f1)]));
    }
    _0x3820a9[_0x120666(0x201)](_0x57066d);
}), bot[_0x14607a(0x207)](/\/romantic (.+)/, function (_0x56bfa0, _0x422340) {
    var _0x2b8af5 = _0x2d2aea, _0x1d880c = _0x14607a, _0x4f3b51 = {
            'bxmkO': _0x2b8af5(0x200) + _0x1d880c(0x3cd) + 'ලීන\x20කිරීම්' + _0x2b8af5(0x3b2),
            'SOZsO': function (_0x1a2450, _0x36c50b) {
                return _0x1a2450 !== _0x36c50b;
            },
            'sAOZS': 'vCStB',
            'OQeIn': function (_0x588665, _0x2ef6dc) {
                return _0x588665 + _0x2ef6dc;
            },
            'dAdJv': _0x2b8af5(0x2eb) + 'r',
            'MmWxU': function (_0x2ef918) {
                return _0x2ef918();
            }
        };
    async function _0x2a39a8() {
        var _0x5361a9 = _0x1d880c, _0x503ae9 = _0x2b8af5;
        if (_0x4f3b51[_0x5361a9(0x3d5)](_0x4f3b51['sAOZS'], _0x4f3b51['sAOZS']))
            _0x193fc4['sendMessag' + 'e'](_0x177c14[_0x5361a9(0x35b)]['id'], _0x4f3b51[_0x5361a9(0x3f2)]);
        else {
            var _0x367a8f = _0x56bfa0[_0x5361a9(0x35b)]['id'], _0x40ec83 = _0x422340[0x220 + -0x1505 + -0x29 * -0x76], _0x215fb8 = await axios[_0x503ae9(0x3c3)](_0x4f3b51[_0x5361a9(0x1e1)](tromantic, _0x40ec83), { 'responseType': _0x4f3b51[_0x5361a9(0x2e7)] });
            bot[_0x503ae9(0x3c9)](_0x367a8f, Buffer[_0x503ae9(0x279)](_0x215fb8['data']));
        }
    }
    _0x4f3b51[_0x2b8af5(0x1e3)](_0x2a39a8);
}), bot[_0x14607a(0x207)](/\/burnp (.+)/, function (_0x587784, _0x590cd3) {
    var _0x1255a4 = _0x2d2aea, _0x1845f6 = _0x2d2aea, _0x3ea674 = {
            'Vuket': function (_0x536149, _0x5b1089) {
                return _0x536149 !== _0x5b1089;
            },
            'kReRL': function (_0x7445a8, _0x3660a7) {
                return _0x7445a8 + _0x3660a7;
            },
            'KVWeq': _0x1255a4(0x2eb) + 'r',
            'oNRoS': function (_0x41ace7) {
                return _0x41ace7();
            }
        };
    async function _0x408d10() {
        var _0x550ed9 = _0x1255a4, _0x3ca153 = _0x1255a4;
        if (_0x3ea674[_0x550ed9(0x367)](_0x3ca153(0x28d), _0x550ed9(0x28d))) {
            var _0xc5ce0a = _0x40483f[_0x550ed9(0x228)](_0x3e589a, arguments);
            return _0x37ea22 = null, _0xc5ce0a;
        } else {
            var _0x26c84b = _0x587784[_0x550ed9(0x35b)]['id'], _0x58f18a = _0x590cd3[0x1265 * -0x1 + 0x13b * -0x14 + 0x2b02], _0xbfa640 = await axios[_0x3ca153(0x3c3)](_0x3ea674['kReRL'](tburnp, _0x58f18a), { 'responseType': _0x3ea674[_0x550ed9(0x2d5)] });
            bot[_0x550ed9(0x3c9)](_0x26c84b, Buffer['from'](_0xbfa640[_0x3ca153(0x2f1)]));
        }
    }
    _0x3ea674[_0x1255a4(0x38d)](_0x408d10);
}), bot[_0x14607a(0x207)](/\/ccup (.+)/, function (_0x3c2c0a, _0x4d335c) {
    var _0x377a7a = _0x14607a, _0x283565 = {
            'npFkX': function (_0x4c205d, _0xc2a142) {
                return _0x4c205d === _0xc2a142;
            },
            'TQltp': 'wOOyP',
            'nbxYB': function (_0x39b468, _0xd8d145) {
                return _0x39b468 + _0xd8d145;
            },
            'uAUTk': _0x377a7a(0x2eb) + 'r',
            'sgvGB': function (_0x355322) {
                return _0x355322();
            }
        };
    async function _0xe4f0b2() {
        var _0x518ae6 = _0x377a7a, _0x2d99df = _0x377a7a;
        if (_0x283565[_0x518ae6(0x3b0)](_0x518ae6(0x23d), _0x283565[_0x518ae6(0x21a)])) {
            var _0x3c38e6 = _0x3c2c0a[_0x518ae6(0x35b)]['id'], _0x544652 = _0x4d335c[-0x1d89 + 0xa6f * 0x1 + 0x43 * 0x49], _0x296a3e = await axios[_0x2d99df(0x3c3)](_0x283565['nbxYB'](tccup, _0x544652), { 'responseType': _0x283565[_0x2d99df(0x3a8)] });
            bot['sendPhoto'](_0x3c38e6, Buffer[_0x2d99df(0x279)](_0x296a3e[_0x518ae6(0x2f1)]));
        } else {
            if (_0x21f4d3) {
                var _0x375016 = _0xdb7511[_0x518ae6(0x228)](_0x1d3bf3, arguments);
                return _0x14c064 = null, _0x375016;
            }
        }
    }
    _0x283565['sgvGB'](_0xe4f0b2);
}), bot['onText'](/\/cofee (.+)/, function (_0x368516, _0xcec900) {
    var _0x28850d = _0x14607a, _0x529fb3 = _0x2d2aea, _0xc7e677 = {
            'XisXn': function (_0x3f313e, _0x3fd4d8) {
                return _0x3f313e !== _0x3fd4d8;
            },
            'GDUqx': _0x28850d(0x1ed),
            'zhqUz': _0x28850d(0x2eb) + 'r',
            'CYbzG': function (_0x13fdfb) {
                return _0x13fdfb();
            }
        };
    async function _0x6150f0() {
        var _0x51e5e4 = _0x28850d, _0x1888f0 = _0x28850d;
        if (_0xc7e677['XisXn'](_0xc7e677['GDUqx'], _0x51e5e4(0x1ed)))
            _0x3c3928 = _0x372713;
        else {
            var _0x4d4240 = _0x368516['chat']['id'], _0x41c423 = _0xcec900[-0x9cd + -0xef * 0x29 + 0x3015], _0x3da9a8 = {};
            _0x3da9a8['responseTy' + 'pe'] = _0xc7e677[_0x1888f0(0x2e3)];
            var _0x3e3270 = await axios[_0x51e5e4(0x3c3)](tcofee + _0x41c423, _0x3da9a8);
            bot[_0x51e5e4(0x3c9)](_0x4d4240, Buffer['from'](_0x3e3270[_0x1888f0(0x2f1)]));
        }
    }
    _0xc7e677[_0x28850d(0x368)](_0x6150f0);
}), bot['onText'](/\/grass (.+)/, function (_0x2ceb5d, _0x4b953c) {
    var _0x47a426 = _0x14607a, _0x5e5a75 = _0x2d2aea, _0x4d31d7 = {
            'EYWXr': function (_0x51950a, _0x22c81a) {
                return _0x51950a + _0x22c81a;
            },
            'frxLX': _0x47a426(0x2eb) + 'r',
            'aRmdo': function (_0x220d3e) {
                return _0x220d3e();
            }
        };
    async function _0x2890f() {
        var _0x303034 = _0x47a426, _0x1d8f89 = _0x47a426, _0x3aaa33 = _0x2ceb5d['chat']['id'], _0x5adef1 = _0x4b953c[-0xd8d * 0x2 + -0x25 * -0xb1 + 0x186], _0x5c3d53 = await axios['get'](_0x4d31d7['EYWXr'](tgrass, _0x5adef1), { 'responseType': _0x4d31d7['frxLX'] });
        bot[_0x303034(0x3c9)](_0x3aaa33, Buffer['from'](_0x5c3d53[_0x303034(0x2f1)]));
    }
    _0x4d31d7[_0x47a426(0x309)](_0x2890f);
}), bot[_0x2d2aea(0x207)](/\/hwood (.+)/, function (_0x18991e, _0x4a89f2) {
    var _0x1fbf7e = _0x14607a, _0x3d9d26 = _0x14607a, _0x433e45 = {
            'ByBKU': function (_0xef546, _0x3e7896) {
                return _0xef546 + _0x3e7896;
            },
            'UoVoR': _0x1fbf7e(0x2eb) + 'r',
            'OYWwr': function (_0x4fb26e) {
                return _0x4fb26e();
            }
        };
    async function _0x10fb01() {
        var _0xad7cfb = _0x1fbf7e, _0x88b9fc = _0x1fbf7e, _0x77e7ca = _0x18991e[_0xad7cfb(0x35b)]['id'], _0xb3b16c = _0x4a89f2[-0x4e0 + -0x2273 + 0x2754], _0x9ad5f5 = await axios[_0xad7cfb(0x3c3)](_0x433e45[_0xad7cfb(0x2aa)](thood, _0xb3b16c), { 'responseType': _0x433e45['UoVoR'] });
        bot['sendPhoto'](_0x77e7ca, Buffer[_0x88b9fc(0x279)](_0x9ad5f5[_0x88b9fc(0x2f1)]));
    }
    _0x433e45[_0x1fbf7e(0x3c4)](_0x10fb01);
}), bot[_0x14607a(0x207)](/\/bwood (.+)/, function (_0x52b11e, _0xbdfe47) {
    var _0x2547c4 = _0x2d2aea, _0x4bac11 = _0x2d2aea, _0x45cd8f = {
            'FtWRc': function (_0x37c7e1, _0x23c6e1) {
                return _0x37c7e1 + _0x23c6e1;
            },
            'SDTVt': _0x2547c4(0x29b),
            'fBwYw': _0x2547c4(0x200) + _0x2547c4(0x3cd) + _0x2547c4(0x377) + _0x2547c4(0x2e9) + _0x2547c4(0x300),
            'RnCwL': _0x4bac11(0x2b4),
            'OpoUO': function (_0x4a1fbc, _0x4bb8b3) {
                return _0x4a1fbc !== _0x4bb8b3;
            },
            'RKJCK': _0x4bac11(0x403),
            'WcTJd': function (_0x23acc6) {
                return _0x23acc6();
            }
        };
    async function _0x518020() {
        var _0x368355 = _0x4bac11, _0x5cdf3a = _0x2547c4;
        if (_0x45cd8f[_0x368355(0x302)](_0x5cdf3a(0x3fb), _0x45cd8f[_0x368355(0x3c2)])) {
            var _0x1fc776 = _0x52b11e[_0x368355(0x35b)]['id'], _0x3089e2 = _0xbdfe47[-0x48 * -0x35 + -0x22 * -0x49 + 0x1899 * -0x1], _0x2fa698 = {};
            _0x2fa698[_0x5cdf3a(0x3a4) + 'pe'] = _0x368355(0x2eb) + 'r';
            var _0x1e31cc = await axios['get'](tbwood + _0x3089e2, _0x2fa698);
            bot[_0x368355(0x3c9)](_0x1fc776, Buffer[_0x5cdf3a(0x279)](_0x1e31cc[_0x5cdf3a(0x2f1)]));
        } else {
            var _0x395df8 = {
                    'uAsLK': function (_0x387f78, _0x50bcac) {
                        return _0x387f78 + _0x50bcac;
                    },
                    'VKKgP': function (_0x247d6a, _0x32d67d) {
                        return _0x247d6a + _0x32d67d;
                    },
                    'ELnkl': function (_0x24ce8f, _0x4cf1d3) {
                        var _0x2704c9 = _0x5cdf3a;
                        return _0x45cd8f[_0x2704c9(0x263)](_0x24ce8f, _0x4cf1d3);
                    },
                    'RRXyN': function (_0x1ba4a1, _0x1cd824) {
                        var _0x1083ce = _0x368355;
                        return _0x45cd8f[_0x1083ce(0x263)](_0x1ba4a1, _0x1cd824);
                    },
                    'yRrMI': _0x45cd8f[_0x5cdf3a(0x2f7)]
                }, _0x125fd1 = _0x45cd8f[_0x368355(0x29a)];
            _0x41b1fc[_0x45cd8f[_0x5cdf3a(0x1e6)]][_0x368355(0x3b9)](_0x3f3841 => {
                var _0x37db71 = _0x368355, _0x3a0342 = _0x5cdf3a;
                _0x125fd1 += _0x395df8['uAsLK'](_0x395df8[_0x37db71(0x30f)](_0x395df8[_0x37db71(0x3ea)](_0x395df8[_0x3a0342(0x2e6)](_0x395df8['RRXyN'](_0x395df8[_0x3a0342(0x3d1)], _0x3f3841['date'][_0x37db71(0x213)](0x1b0b + -0x1d54 + 0x5 * 0x75, 0x1bb2 + 0x207 * 0x11 + -0x3e1f)), _0x37db71(0x209)), _0x3f3841['message']), '\x20<'), _0x3f3841['author_nam' + 'e']) + ('>\x0aᴄᴏʙʀᴀʙᴏᴛ' + '\x0a');
            }), _0x420d0a[_0x368355(0x2e0) + 'e'](_0x55a584['chat']['id'], _0x125fd1);
        }
    }
    _0x45cd8f[_0x2547c4(0x321)](_0x518020);
}), bot['onText'](/\/uwater (.+)/, function (_0x83e80f, _0x2bfb06) {
    var _0x75418 = _0x14607a, _0x29c029 = {
            'ebnuT': _0x75418(0x2eb) + 'r',
            'bBIBP': function (_0x30a8ca) {
                return _0x30a8ca();
            }
        };
    async function _0x1c50f9() {
        var _0x1ec005 = _0x75418, _0x1902da = _0x75418, _0x157a79 = _0x83e80f['chat']['id'], _0x429051 = _0x2bfb06[-0x3 * 0x1cd + 0x3 * 0x70a + -0x1 * 0xfb6], _0x204a1b = {};
        _0x204a1b[_0x1ec005(0x3a4) + 'pe'] = _0x29c029[_0x1ec005(0x32f)];
        var _0x49a368 = await axios[_0x1ec005(0x3c3)](tuwater + _0x429051, _0x204a1b);
        bot[_0x1902da(0x3c9)](_0x157a79, Buffer[_0x1902da(0x279)](_0x49a368[_0x1902da(0x2f1)]));
    }
    _0x29c029['bBIBP'](_0x1c50f9);
}), bot[_0x14607a(0x207)](/\/yrose (.+)/, function (_0x1e7e5e, _0x2bcec8) {
    var _0x8c12de = _0x2d2aea, _0x73902 = {
            'NqIXT': 'arraybuffe' + 'r',
            'ODYcL': function (_0x55c8ea) {
                return _0x55c8ea();
            }
        };
    async function _0xcd56ea() {
        var _0x326afb = _0x4001, _0x5a9d1c = _0x4001, _0x7e5ff8 = _0x1e7e5e[_0x326afb(0x35b)]['id'], _0x585ae1 = _0x2bcec8[-0x1e49 + -0x1 * -0x178f + -0x6bb * -0x1], _0x2b2b6e = {};
        _0x2b2b6e['responseTy' + 'pe'] = _0x73902[_0x326afb(0x270)];
        var _0x4381e4 = await axios['get'](tyrose + _0x585ae1, _0x2b2b6e);
        bot[_0x5a9d1c(0x3c9)](_0x7e5ff8, Buffer[_0x326afb(0x279)](_0x4381e4[_0x326afb(0x2f1)]));
    }
    _0x73902[_0x8c12de(0x3ce)](_0xcd56ea);
}), bot['onText'](/\/nsummer (.+)/, function (_0x2a3bbf, _0x1b3693) {
    var _0x4ad879 = _0x2d2aea, _0x3bac09 = {
            'QVKdP': function (_0x39580b, _0x3b5702) {
                return _0x39580b + _0x3b5702;
            },
            'qhzzC': _0x4ad879(0x2eb) + 'r',
            'UkgoB': function (_0x502dcc) {
                return _0x502dcc();
            }
        };
    async function _0x1a3467() {
        var _0x3366b3 = _0x4ad879, _0x213135 = _0x4ad879, _0x2d323d = _0x2a3bbf[_0x3366b3(0x35b)]['id'], _0x38a79b = _0x1b3693[-0x15eb + 0x1324 + 0x2c8], _0x3278d3 = await axios['get'](_0x3bac09['QVKdP'](tnsummer, _0x38a79b), { 'responseType': _0x3bac09[_0x213135(0x28c)] });
        bot['sendPhoto'](_0x2d323d, Buffer[_0x213135(0x279)](_0x3278d3['data']));
    }
    _0x3bac09['UkgoB'](_0x1a3467);
}), bot[_0x14607a(0x207)](/\/ufall (.+)/, function (_0x431e2e, _0x1eb637) {
    var _0xa64be0 = _0x14607a, _0x101ded = {
            'tPMsa': function (_0x3f9c29, _0x51f0ab) {
                return _0x3f9c29 + _0x51f0ab;
            },
            'VazKW': function (_0x44dc9e) {
                return _0x44dc9e();
            }
        };
    async function _0x5543f7() {
        var _0x2e00d2 = _0x4001, _0x199e73 = _0x4001, _0x503e79 = _0x431e2e[_0x2e00d2(0x35b)]['id'], _0x372c58 = _0x1eb637[0x4f * 0x2d + -0x1 * 0x1687 + 0x1 * 0x8a5], _0x1da6b0 = {};
        _0x1da6b0[_0x2e00d2(0x3a4) + 'pe'] = _0x199e73(0x2eb) + 'r';
        var _0x4bc17a = await axios['get'](_0x101ded[_0x2e00d2(0x25a)](tufall, _0x372c58), _0x1da6b0);
        bot[_0x199e73(0x3c9)](_0x503e79, Buffer[_0x199e73(0x279)](_0x4bc17a[_0x199e73(0x2f1)]));
    }
    _0x101ded[_0xa64be0(0x328)](_0x5543f7);
}), bot['onText'](/\/gneon (.+)/, function (_0x2ddc0d, _0x1e90ab) {
    var _0x502e1f = _0x2d2aea, _0x56a30d = {
            'hnSEB': function (_0x19a481, _0x567cc1) {
                return _0x19a481 + _0x567cc1;
            },
            'KSiou': 'arraybuffe' + 'r',
            'KGkAq': function (_0x116881) {
                return _0x116881();
            }
        };
    async function _0x12bb2c() {
        var _0x3893b1 = _0x4001, _0x554a23 = _0x4001, _0x269303 = _0x2ddc0d[_0x3893b1(0x35b)]['id'], _0x24c7f9 = _0x1e90ab[-0x200b + -0x1b5 * -0x15 + -0x8b * 0x7], _0xb828ae = await axios[_0x3893b1(0x3c3)](_0x56a30d['hnSEB'](tgneon, _0x24c7f9), { 'responseType': _0x56a30d[_0x554a23(0x206)] });
        bot['sendPhoto'](_0x269303, Buffer['from'](_0xb828ae[_0x3893b1(0x2f1)]));
    }
    _0x56a30d[_0x502e1f(0x344)](_0x12bb2c);
}), bot[_0x14607a(0x207)](/\/ucube (.+)/, function (_0x15cf93, _0x5564f4) {
    var _0xfc79d5 = _0x14607a, _0x5990c7 = {
            'FLHhX': function (_0x3ddd0b, _0x292678) {
                return _0x3ddd0b + _0x292678;
            },
            'ukgnm': _0xfc79d5(0x2eb) + 'r',
            'mdlCX': function (_0x194fd6) {
                return _0x194fd6();
            }
        };
    async function _0x326f17() {
        var _0x4bf79c = _0xfc79d5, _0x106743 = _0xfc79d5, _0x43e8a6 = _0x15cf93['chat']['id'], _0x1d8bb9 = _0x5564f4[0x1445 * -0x1 + 0x907 * 0x3 + -0x6cf * 0x1], _0x4f1134 = await axios['get'](_0x5990c7[_0x4bf79c(0x1d8)](tucube, _0x1d8bb9), { 'responseType': _0x5990c7[_0x106743(0x210)] });
        bot['sendPhoto'](_0x43e8a6, Buffer[_0x4bf79c(0x279)](_0x4f1134['data']));
    }
    _0x5990c7['mdlCX'](_0x326f17);
}), bot[_0x14607a(0x207)](/\/gavater (.+)/, function (_0x1c357, _0x577e8b) {
    var _0x4627dc = _0x2d2aea, _0x6d8709 = _0x2d2aea, _0x330bb4 = {
            'BsCqk': _0x4627dc(0x2eb) + 'r',
            'Kspil': function (_0x12a75f) {
                return _0x12a75f();
            }
        };
    async function _0xc4cbca() {
        var _0x460529 = _0x4627dc, _0x477747 = _0x4627dc, _0x3413ea = _0x1c357[_0x460529(0x35b)]['id'], _0x103e8b = _0x577e8b[0x1323 + 0x1b78 + -0x2e9a], _0x3d3317 = {};
        _0x3d3317['responseTy' + 'pe'] = _0x330bb4[_0x477747(0x320)];
        var _0x4bc953 = await axios[_0x460529(0x3c3)](tgavater + _0x103e8b, _0x3d3317);
        bot[_0x477747(0x3c9)](_0x3413ea, Buffer[_0x477747(0x279)](_0x4bc953[_0x477747(0x2f1)]));
    }
    _0x330bb4[_0x4627dc(0x1fe)](_0xc4cbca);
}), bot[_0x2d2aea(0x207)](/\/rainbow (.+)/, function (_0x571a0c, _0x4dac6b) {
    var _0x44d499 = {
        'RFipD': function (_0x3181b0, _0x58fd1a) {
            return _0x3181b0 + _0x58fd1a;
        },
        'ertDN': 'arraybuffe' + 'r',
        'fAJqF': function (_0x29bf3a) {
            return _0x29bf3a();
        }
    };
    async function _0x5072cf() {
        var _0x42a4f0 = _0x4001, _0x3e7cce = _0x4001, _0x39f404 = _0x571a0c[_0x42a4f0(0x35b)]['id'], _0x202f47 = _0x4dac6b[0x1341 + -0x2347 + 0x1007], _0x3b8a10 = await axios[_0x42a4f0(0x3c3)](_0x44d499['RFipD'](trainbow, _0x202f47), { 'responseType': _0x44d499['ertDN'] });
        bot[_0x42a4f0(0x3c9)](_0x39f404, Buffer[_0x3e7cce(0x279)](_0x3b8a10['data']));
    }
    _0x44d499['fAJqF'](_0x5072cf);
}), bot[_0x14607a(0x207)](/\/nsky (.+)/, function (_0x4ffc6a, _0xaa0b8b) {
    var _0x531b1f = _0x2d2aea, _0x29bb34 = {};
    _0x29bb34['fUmQq'] = _0x531b1f(0x2eb) + 'r';
    var _0x5e3162 = _0x29bb34;
    async function _0x56125f() {
        var _0x1ae5ef = _0x531b1f, _0x2489bf = _0x531b1f, _0x392da0 = _0x4ffc6a[_0x1ae5ef(0x35b)]['id'], _0x914bf1 = _0xaa0b8b[-0x277 * -0x1 + -0x23eb + -0x3 * -0xb27], _0x1f3abb = {};
        _0x1f3abb[_0x2489bf(0x3a4) + 'pe'] = _0x5e3162[_0x2489bf(0x3a6)];
        var _0x50ee97 = await axios[_0x2489bf(0x3c3)](tnsky + _0x914bf1, _0x1f3abb);
        bot[_0x1ae5ef(0x3c9)](_0x392da0, Buffer[_0x1ae5ef(0x279)](_0x50ee97[_0x2489bf(0x2f1)]));
    }
    _0x56125f();
}), bot['onText'](/\/fur (.+)/, function (_0x3b83c6, _0x12bcd1) {
    async function _0x142a89() {
        var _0x1ae7e7 = _0x4001, _0x5af7ac = _0x4001, _0x473663 = _0x3b83c6[_0x1ae7e7(0x35b)]['id'], _0xfe995c = _0x12bcd1[0x4 * -0x2df + -0x1 * 0x15e1 + 0x215e], _0x2d1c7c = {};
        _0x2d1c7c['responseTy' + 'pe'] = _0x1ae7e7(0x2eb) + 'r';
        var _0x368f38 = await axios['get'](tfur + _0xfe995c, _0x2d1c7c);
        bot[_0x1ae7e7(0x3c9)](_0x473663, Buffer[_0x5af7ac(0x279)](_0x368f38['data']));
    }
    _0x142a89();
}), bot[_0x2d2aea(0x207)](/\/crisp (.+)/, function (_0x4e13b3, _0x20916d) {
    var _0x113940 = _0x14607a, _0x5ca88f = _0x14607a, _0x4c9639 = {
            'rPjpT': function (_0x2b584f, _0x246955) {
                return _0x2b584f + _0x246955;
            },
            'HhGwu': _0x113940(0x2eb) + 'r',
            'InPcQ': function (_0x1b2c8c) {
                return _0x1b2c8c();
            }
        };
    async function _0x5a281d() {
        var _0x51bbfc = _0x113940, _0x1ce997 = _0x113940, _0xd43ab2 = _0x4e13b3[_0x51bbfc(0x35b)]['id'], _0x5121e2 = _0x20916d[0xaab * 0x1 + -0x7df + 0x5 * -0x8f], _0x56e72c = await axios['get'](_0x4c9639[_0x51bbfc(0x222)](tcrisp, _0x5121e2), { 'responseType': _0x4c9639['HhGwu'] });
        bot[_0x51bbfc(0x3c9)](_0xd43ab2, Buffer[_0x51bbfc(0x279)](_0x56e72c['data']));
    }
    _0x4c9639[_0x5ca88f(0x3d2)](_0x5a281d);
}), bot[_0x14607a(0x207)](/\/embro (.+)/, function (_0x194edf, _0x1249d4) {
    var _0x1e5252 = _0x14607a, _0x1fa9af = {};
    _0x1fa9af[_0x1e5252(0x203)] = function (_0x225b2d, _0x9308eb) {
        return _0x225b2d + _0x9308eb;
    };
    var _0x470897 = _0x1fa9af;
    async function _0x48c911() {
        var _0x11779b = _0x1e5252, _0x687c64 = _0x1e5252, _0x1a5113 = _0x194edf['chat']['id'], _0x1513ad = _0x1249d4[-0xc75 * -0x1 + 0x31 * 0xc4 + -0xa4 * 0x4e], _0xba51e = {};
        _0xba51e[_0x11779b(0x3a4) + 'pe'] = 'arraybuffe' + 'r';
        var _0x5f293f = await axios[_0x11779b(0x3c3)](_0x470897['rbxWC'](tembro, _0x1513ad), _0xba51e);
        bot['sendPhoto'](_0x1a5113, Buffer[_0x11779b(0x279)](_0x5f293f['data']));
    }
    _0x48c911();
}), bot['on'](_0x2d2aea(0x227) + _0x14607a(0x36a), async _0x4390fd => {
    var _0x1cc2d6 = _0x14607a, _0x238950 = _0x14607a, _0x426ec9 = {
            'EyUhn': function (_0x1e96b4, _0x3430aa) {
                return _0x1e96b4 + _0x3430aa;
            },
            'qSegh': _0x1cc2d6(0x1f6),
            'hFmSh': 'TIT2',
            'OCdeZ': function (_0x5d4eed, _0x2bef50) {
                return _0x5d4eed + _0x2bef50;
            },
            'xbXDv': 'audio_song' + _0x1cc2d6(0x2f6) + 'g',
            'xaNkx': _0x1cc2d6(0x2b9) + _0x238950(0x3fe) + _0x1cc2d6(0x243) + _0x1cc2d6(0x387) + _0x238950(0x268),
            'bpAEe': _0x238950(0x2b9) + _0x238950(0x3fe) + _0x238950(0x243) + _0x238950(0x387),
            'bArNM': function (_0x2eb402, _0x42256d) {
                return _0x2eb402 + _0x42256d;
            },
            'Cmlsh': function (_0x3a8179, _0xe0746b) {
                return _0x3a8179(_0xe0746b);
            },
            'IfIpj': function (_0x4e3075, _0x5bbc82, _0x23d619) {
                return _0x4e3075(_0x5bbc82, _0x23d619);
            },
            'XfoCn': _0x1cc2d6(0x2bd) + 'o',
            'qZfkd': _0x1cc2d6(0x39b) + 'ait...',
            'WVNDI': '.jpg',
            'qeezJ': function (_0x17ad09, _0x418ae2) {
                return _0x17ad09(_0x418ae2);
            },
            'XiQSt': function (_0x586fba, _0x6f6998) {
                return _0x586fba | _0x6f6998;
            },
            'ufWwH': _0x238950(0x362),
            'oBfAO': _0x238950(0x326)
        };
    async function _0x39d5ab() {
        var _0x246e9b = _0x238950, _0x1b351b = _0x1cc2d6, _0x31a060 = {
                'ppVOz': function (_0x15be7f, _0x236ddc) {
                    var _0xe8e540 = _0x4001;
                    return _0x426ec9[_0xe8e540(0x3ae)](_0x15be7f, _0x236ddc);
                },
                'gBMAu': _0x426ec9[_0x246e9b(0x23a)],
                'WDmLZ': _0x426ec9[_0x246e9b(0x3fc)],
                'ROmHl': 'APIC',
                'pjiyx': function (_0x40feb1, _0x20e842) {
                    var _0x26865a = _0x1b351b;
                    return _0x426ec9[_0x26865a(0x3a7)](_0x40feb1, _0x20e842);
                },
                'KLcmd': 'audio/mpeg',
                'RvRqn': _0x426ec9[_0x246e9b(0x347)],
                'XApUD': _0x1b351b(0x398) + _0x1b351b(0x3ca) + _0x246e9b(0x36d) + _0x1b351b(0x310),
                'jkdkp': function (_0x253caf, _0x57e893) {
                    var _0x2af04a = _0x246e9b;
                    return _0x426ec9[_0x2af04a(0x3a7)](_0x253caf, _0x57e893);
                },
                'XuqGQ': _0x426ec9[_0x1b351b(0x33e)],
                'BSdQP': '.mp4',
                'tUmEH': _0x246e9b(0x294) + 'o_thumb_vi' + _0x1b351b(0x37a),
                'aphsB': _0x426ec9[_0x246e9b(0x3f3)],
                'KUCLH': function (_0x5bbad8, _0xb7fe74) {
                    var _0x36a2cd = _0x246e9b;
                    return _0x426ec9[_0x36a2cd(0x3b3)](_0x5bbad8, _0xb7fe74);
                }
            };
        const _0x24a34b = _0x4390fd[_0x246e9b(0x2f1)], _0x8359ec = _0x4390fd[_0x1b351b(0x3bd)][_0x1b351b(0x35b)]['id'], _0x50951b = _0x24a34b['split']('@')[-0x114 + -0x5b * 0x7 + 0x391];
        let _0x521c32 = await _0x426ec9['Cmlsh'](yts, _0x50951b);
        _0x521c32 = _0x521c32['all'];
        let _0x362f00 = _0x521c32[-0x205e + -0xa40 + 0x2a9e]['title']['replace']('\x20', '+'), _0x52e23c = _0x426ec9[_0x246e9b(0x2d4)](ytdl, _0x521c32[-0x436 + 0x8e * 0x2f + -0x15dc]['videoId'], { 'quality': _0x426ec9['XfoCn'] });
        await bot[_0x1b351b(0x2e0) + 'e'](_0x8359ec, _0x426ec9[_0x1b351b(0x38a)]), got[_0x1b351b(0x2da)](_0x521c32[0xaac * -0x1 + 0x1ae2 + 0x19 * -0xa6][_0x246e9b(0x2c0)])[_0x1b351b(0x2c2)](fs[_0x246e9b(0x2dc) + _0x246e9b(0x3c8)](_0x426ec9['bArNM'](_0x362f00, _0x426ec9[_0x246e9b(0x266)]))), _0x426ec9[_0x246e9b(0x394)](ffmpeg, _0x52e23c)[_0x246e9b(0x323) + 'te'](0xb07 + -0x2359 + 0x886 * 0x3)[_0x1b351b(0x271)](_0x426ec9['bArNM']('./', _0x362f00) + '.mp3')['on'](_0x246e9b(0x1e7), async () => {
            var _0x48e4aa = _0x1b351b, _0x50e933 = _0x1b351b;
            const _0x10e445 = new ID3Writer(fs[_0x48e4aa(0x2df) + 'nc'](_0x31a060['ppVOz'](_0x31a060[_0x48e4aa(0x30b)]('./', _0x362f00), _0x31a060['gBMAu'])));
            _0x10e445[_0x48e4aa(0x359)](_0x31a060['WDmLZ'], _0x521c32[-0x362 * -0xb + -0x207 * -0x9 + -0x3775 * 0x1][_0x50e933(0x303)])[_0x50e933(0x359)](_0x48e4aa(0x405), [_0x521c32[0x2560 + 0x2323 + -0x4883]['author']['name']])[_0x48e4aa(0x359)](_0x31a060[_0x48e4aa(0x3b4)], {
                'type': 0x3,
                'data': fs[_0x50e933(0x2df) + 'nc'](_0x31a060[_0x50e933(0x3b5)](_0x362f00, _0x50e933(0x2cf))),
                'description': _0x521c32[0x1592 + -0x23b * -0x3 + -0x1c43][_0x50e933(0x2c3) + 'n']
            }), _0x10e445['addTag']();
            if (_0x24a34b[_0x48e4aa(0x34e)](_0x48e4aa(0x2fc) + _0x48e4aa(0x278) + _0x50e933(0x205)))
                await bot[_0x48e4aa(0x2e0) + 'e'](_0x8359ec, _0x50e933(0x398) + _0x48e4aa(0x3ca) + _0x48e4aa(0x36d) + _0x50e933(0x3d3) + _0x50e933(0x282)), await bot[_0x50e933(0x2b3) + 'nt'](_0x8359ec, Buffer[_0x50e933(0x279)](_0x10e445['arrayBuffe' + 'r']), {
                    'filename': _0x31a060[_0x50e933(0x3b5)](_0x362f00, _0x31a060[_0x48e4aa(0x1df)]),
                    'contentType': _0x31a060[_0x50e933(0x290)]
                });
            else
                _0x24a34b[_0x48e4aa(0x34e)](_0x31a060[_0x50e933(0x231)]) && (await bot[_0x50e933(0x2e0) + 'e'](_0x8359ec, _0x31a060[_0x48e4aa(0x364)]), await bot[_0x48e4aa(0x2ae)](_0x8359ec, Buffer['from'](_0x10e445[_0x48e4aa(0x25c) + 'r']), {
                    'filename': _0x31a060[_0x48e4aa(0x3e7)](_0x362f00, _0x31a060['gBMAu']),
                    'contentType': _0x50e933(0x314)
                }));
        });
        if (_0x426ec9[_0x1b351b(0x2c5)](_0x24a34b['startsWith'](_0x426ec9[_0x1b351b(0x2f3)]), _0x24a34b[_0x246e9b(0x3e6)](_0x426ec9[_0x246e9b(0x245)]))) {
            const _0x5e8b7c = _0x4390fd[_0x1b351b(0x2f1)], _0x4999bd = _0x5e8b7c[_0x246e9b(0x379)]('@')[0x7 * -0x65 + -0x1 * 0x1c10 + 0x1ed3];
            await axios['get'](_0x1b351b(0x36c) + _0x1b351b(0x2a9) + _0x246e9b(0x24d) + _0x246e9b(0x1ec) + _0x246e9b(0x226) + _0x4999bd)['then'](async _0x164529 => {
                var _0xcc56cf = _0x246e9b, _0x2a54e6 = _0x1b351b;
                const {
                    download_video: _0x1be562,
                    title: _0x45bc6a
                } = _0x164529[_0xcc56cf(0x2f1)]['result'];
                var _0x45e59c = {};
                _0x45e59c[_0xcc56cf(0x3a4) + 'pe'] = 'arraybuffe' + 'r';
                var _0x300260 = await axios[_0xcc56cf(0x3c3)](_0x1be562, _0x45e59c);
                if (_0x24a34b[_0xcc56cf(0x34e)](_0xcc56cf(0x295) + _0xcc56cf(0x26f)))
                    bot[_0x2a54e6(0x2e0) + 'e'](_0x8359ec, _0x31a060['XuqGQ'], { 'filename': _0x31a060['jkdkp'](_0x45bc6a, _0x31a060['BSdQP']) }), await bot[_0xcc56cf(0x2b3) + 'nt'](_0x8359ec, Buffer[_0xcc56cf(0x279)](_0x300260[_0xcc56cf(0x2f1)]));
                else
                    _0x24a34b['includes'](_0x31a060[_0xcc56cf(0x261)]) && (bot[_0xcc56cf(0x2e0) + 'e'](_0x8359ec, _0x31a060[_0xcc56cf(0x2ea)]), { 'filename': _0x31a060[_0xcc56cf(0x399)](_0x45bc6a, _0x31a060['BSdQP']) }, await bot['sendVideo'](_0x8359ec, Buffer[_0x2a54e6(0x279)](_0x300260[_0xcc56cf(0x2f1)])));
            });
        }
    }
    _0x39d5ab();
});
