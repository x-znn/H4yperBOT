/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-inner-declarations*/
/* eslint-disable no-useless-escape*/
/* eslint-disable no-undef*/
/* eslint-disable require-await*/
/* eslint-disable no-redeclare*/
/* eslint-disable quotes*/
/* eslint-disable no-dupe-else-if*/

/*
 *
 * BASE SOURCE BY : Slavyandesu / BocchiBOT
 * Remodifikasi By : MrG3P5
 * Version: 1.5.7
 */

/********** MODULES **********/
const { decryptMedia, Client } = require('@open-wa/wa-automate');
const fs = require('fs-extra');
const config = require('../config.json');
const Nekos = require('nekos.life');
const neko = new Nekos();
const os = require('os');
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const api = new API()
const NanaAPI = require('nana-api')
const nana = new NanaAPI()
const get = require('got');
const isPorn = require('is-porn');
const exec = require('await-exec');
const webp = require('webp-converter');
const sharp = require('sharp');
const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const google = require('google-it');
const bent = require('bent');
const path = require('path');
const ms = require('parse-ms');
const toMs = require('ms');
const canvas = require('canvacord');
const mathjs = require('mathjs');
const moment = require('moment-timezone');
const canva = require('../function/discord-canvas');
const canvar = require('../function/discord-canvas-balance');
const { JSDOM } = require('jsdom');
const cheerio = require('cheerio');
const amazonScraper = require('amazon-buddy');
const FormData = require('form-data');
const request = require('request');
const fetch = require('node-fetch');
const cookie = require('cookie');
const scrapeYt = require("scrape-yt");
const ytch = require('yt-channel-info');
const qs = require('qs');
const PasteGG = require("paste.gg");
const pasteGg = new PasteGG();
const exp = moment().tz("Asia/Jakarta").add(10, "minutes").format();
moment.tz.setDefault('Asia/Jakarta').locale('id');
/********** END OF MODULES **********/

/********** UTILS **********/
const { msgFilter, color, processTime, isUrl } = require('../tools');
const { uploadImages, toBuffer } = require('../tools/fetcher');
const { getStickerMaker } = require('../function/getStickerMaker');
const { level, card, register, weeaboo, misc, downloader, fun, afk, reminder, premium } = require('../function');
const { ind, eng } = require('./text/lang/');
const Exif = require('../tools/exif');
const exif = new Exif();
const errorImg = 'https://telegra.ph/file/add78d25dcebb3f61a9ce.jpg';
const urlcard = 'https://telegra.ph/file/2720768eae96398309f86.jpg';
/********** END OF UTILS **********/

/********** DATABASES **********/
const isAntiSpamImage2 = JSON.parse(fs.readFileSync('./database/group/antispamNSFW.json'));
const sewagc = JSON.parse(fs.readFileSync('./database/group/sewagc.json'));
const pamili100 = JSON.parse(fs.readFileSync('./database/user/family100.json'));
const caklontong = JSON.parse(fs.readFileSync('./database/user/caklontong.json'));
const tebakgambar = JSON.parse(fs.readFileSync('./database/user/tebakgambar.json'));
const _antikasar = JSON.parse(fs.readFileSync('./database/group/antibadword.json'));
const _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
const _antinsfw = JSON.parse(fs.readFileSync('./database/group/antinsfw.json'));
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'));
const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'));
const _autosticker = JSON.parse(fs.readFileSync('./database/group/autosticker.json'));
const _ban = JSON.parse(fs.readFileSync('./database/bot/banned.json'));
const _premium = JSON.parse(fs.readFileSync('./database/bot/premium.json'));
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'));
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'));
const limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
const limitmining = JSON.parse(fs.readFileSync('./database/user/koin.json'));
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
const _reminder = JSON.parse(fs.readFileSync('./database/user/reminder.json'));
const _bg = JSON.parse(fs.readFileSync('./database/user/background.json'));
const userbalance = JSON.parse(fs.readFileSync('./database/user/userbalance.json'));
let { banChats, limitCount, limitMining, namebot } = JSON.parse(fs.readFileSync('./config.json'));
/********** END OF DATABASES **********/

/********** MESSAGE HANDLER **********/
// eslint-disable-next-line no-undef
module.exports = msgHandler = async (znn = new Client(), message) => {
    try {
        const { type, id, from, t, sender, author, isGroupMsg, chat, caption, chatId, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const botNumber = await znn.getHostNumber() + '@c.us'
        const blockNumber = await znn.getBlockedIds()
        const ownerNumber = config.ownerBot
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await znn.getGroupAdmins(groupId) : ''
        const time = moment(t * 1000).format('DD/MM/YY HH:mm:ss')

        const chats = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓=;~|!+<>?#$%^&\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓=;~|!+<>?#$%^&\/\\©^]/gi)[0] : '-'
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const argu = body.split(/ +/g)
        const uaOverride = config.uaOverride
        const q = args.join(' ')
        const ar = args.map((v) => v.toLowerCase())
        const url = args.length !== 0 ? args[0] : ''
        const SN = GenerateSerialNumber("0000000000")
        const serial = sender.id
        const timeStart = Date.now() / 1000
        const tms = (Date.now() / 1000) - (timeStart);

        /********** VALIDATOR **********/
        const isCmd = body.startsWith(prefix)
        const isBlocked = blockNumber.includes(sender.id)
        const isOwner = sender.id === ownerNumber
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isBanned = _ban.includes(sender.id)
        const isPremium = premium.checkPremiumUser(sender.id, _premium)
        const isRegistered = register.checkRegisteredUser(sender.id, _registered)
        const isWelcomeOn = isGroupMsg ? _welcome.includes(groupId) : false
        const isDetectorOn = isGroupMsg ? _antilink.includes(groupId) : false
        const isAntiBadwordOn = isGroupMsg ? _antikasar.includes(groupId) : false
        const isLevelingOn = isGroupMsg ? _leveling.includes(groupId) : false
        const isAutoStickerOn = isGroupMsg ? _autosticker.includes(groupId) : false
        const isAntiNsfw = isGroupMsg ? _antinsfw.includes(groupId) : false
        const isAfkOn = afk.checkAfkUser(sender.id, _afk)
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
        const isQuotedGif = quotedMsg && quotedMsg.mimetype === 'image/gif'
        const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt')
        const isImage = type === 'image'
        const isVideo = type === 'video'
        /********** END OF VALIDATOR **********/

        // Automate
        premium.expiredCheck(_premium)

        // Serial Number Generator
        function GenerateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0, chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
        function GenerateSerialNumber(mask) {
            var serialNumber = "";
            if (mask != null) {
                for (var i = 0; i < mask.length; i++) {
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }

        function display(seconds) {
            var format = val => `0${Math.floor(val)}`.slice(-2)
            var hours = seconds / 3600
            var minutes = (seconds % 3600) / 60

            return [hours, minutes, seconds % 60].map(format).join(':')
        }

        function millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }

        function decimalToPersen(randNum) {
            return (randNum * 100).toFixed(2) + '%'
        }

        const getLevelingBalanceId = (userId) => {
            let position = null
            Object.keys(userbalance).forEach((i) => {
                if (userbalance[i].id === userId) {
                    position = i
                }
            })
            if (position !== null) {
                return userbalance[position].id
            }
        }

        const getLevelingBalance = (userId) => {
            let position = null
            Object.keys(userbalance).forEach((i) => {
                if (userbalance[i].id === userId) {
                    position = i
                }
            })
            if (position !== null) {
                return userbalance[position].level
            }
        }

        const getLevelingXpBC = (userId) => {
            let position = null
            Object.keys(userbalance).forEach((i) => {
                if (userbalance[i].id === userId) {
                    position = i
                }
            })
            if (position !== null) {
                return userbalance[position].xp
            }
        }

        const addLevelingIdBC = (userId) => {
            const obj = { id: userId, xp: 5, level: 1 }
            userbalance.push(obj)
            fs.writeFileSync('./database/user/userbalance.json', JSON.stringify(userbalance))
        }

        const addLevelingBalance = (userId, amount) => {
            let position = null
            Object.keys(userbalance).forEach((i) => {
                if (userbalance[i].id === userId) {
                    position = i
                }
            })
            if (position !== null) {
                userbalance[position].level += amount
                fs.writeFileSync('./database/user/userbalance.json', JSON.stringify(userbalance))
            }
        }

        const addLevelingXpBalance = (userId, amount) => {
            let position = null
            Object.keys(userbalance).forEach((i) => {
                if (userbalance[i].id === userId) {
                    position = i
                }
            })
            if (position !== null) {
                userbalance[position].xp += amount
                fs.writeFileSync('./database/user/userbalance.json', JSON.stringify(userbalance))
            }
        }

        const lessLevelingXpBalance = (userId, amount, userbalance) => {
            let position = null
            Object.keys(userbalance).forEach((i) => {
                if (userbalance[i].id === userId) {
                    position = i
                }
            })
            if (position !== null) {
                userbalance[position].xp -= amount
                fs.writeFileSync('./database/user/userbalance.json', JSON.stringify(userbalance))
            }
        }

        const checkATMuser = (serial) => {
            let position = false
            Object.keys(userbalance).forEach((i) => {
                if (userbalance[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                return userbalance[position].xp
            }
        }

        const bayarLimit = (serial, amount) => {
            let position = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit -= amount;
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
            }
        }

        const bayarCoin = (userId, amount) => {
            let position = false
            Object.keys(limitmining).forEach((i) => {
                if (limitmining[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                limitmining[position].limit -= amount;
                fs.writeFileSync('./database/user/koin.json', JSON.stringify(limitmining))
            }
        }

        const confirmATM = (serial, amount) => {
            let position = false
            Object.keys(userbalance).forEach((i) => {
                if (userbalance[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                userbalance[position].xp -= amount
                fs.writeFileSync('./database/user/userbalance.json', JSON.stringify(userbalance))
            }
        }

        const addSaldo = (serial, amount) => {
            let position = false
            Object.keys(userbalance).forEach((i) => {
                if (userbalance[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                userbalance[position].xp += amount
                fs.writeFileSync('./database/user/userbalance.json', JSON.stringify(userbalance))
            }
        }

        const confirmTranfer = (serial, amount) => {
            let position = false
            Object.keys(userbalance).forEach((i) => {
                if (userbalance[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                userbalance[position].xp += amount
                fs.writeFileSync('./database/user/userbalance.json', JSON.stringify(userbalance))
            }
        }

        // FUNCTION TEBAK GAMBAR
        const addgambar = (serial, jawaban, expired) => {
            let obi = { id: serial, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
            tebakgambar.push(obi)
            fs.writeFileSync('./database/user/tebakgambar.json', JSON.stringify(tebakgambar))
        }

        const getjawaban = (serial) => {
            let found = false
            Object.keys(tebakgambar).forEach((i) => {
                if (tebakgambar[i].id === serial) {
                    found = i
                }
            })
            if (found !== false) {
                return tebakgambar[found].jawaban
            }
        }

        const isTebakGambar = (serial) => {
            let status = false
            Object.keys(tebakgambar).forEach((i) => {
                if (tebakgambar[i].id === serial) {
                    status = true
                }
            })
            return status
        }

        const cekWaktuTG = (_dir, serial) => {
            setInterval(() => {
                let position = null
                Object.keys(tebakgambar).forEach((i) => {
                    if (Date.now() >= tebakgambar[i].expired) {
                        position = i
                    }
                })
                if (position !== null) {
                    znn.reply(from, `Waktu habis\n\n*Jawaban :* ${tebakgambar[position].jawaban}`, id)
                    console.log(`Waktu Habis : ${tebakgambar[position].id}`)
                    tebakgambar.splice(position, 1)
                    fs.writeFileSync('./database/user/tebakgambar.json', JSON.stringify(tebakgambar))
                }
            }, 1000)
        }

        const gettgposi = (userId) => {
            let position = null
            Object.keys(tebakgambar).forEach((i) => {
                if (tebakgambar[i].id === userId) {
                    position = i
                }
            })
            if (position !== null) {
                return position
            }
        }

        if (isTebakGambar(chatId)) {
            if (chats.match(getjawaban(chatId))) {
                const tebokgambar = Math.floor(Math.random() * 25000) + 1;
                var isDoneVerify = register.checkRegisteredUser(sender.id, _registered)
                if (!isDoneVerify) return znn.reply(from, `Maaf kamu belum melakukan ${prefix}verify`, id)
                znn.reply(from, `Benar!, Saldo ditambahkan +Rp ${convertBalanceToString(tebokgambar)}`, id)
                addSaldo(serial, tebokgambar)
                tebakgambar.splice(gettgposi(chatId, tebakgambar), 1)
                fs.writeFileSync('./database/user/tebakgambar.json', JSON.stringify(tebakgambar))
            }

        }

        // FUNCTION FAMILY100
        const addResult100 = (serial, jawaban, expired) => {
            let obi = { id: serial, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
            pamili100.push(obi)
            fs.writeFileSync('./database/user/family100.json', JSON.stringify(pamili100))
        }
        const getjawaban100 = (serial) => {
            let found = false
            Object.keys(pamili100).forEach((i) => {
                if (pamili100[i].id === serial) {
                    found = i
                }
            })
            if (found !== false) {
                return pamili100[found].jawaban
            }
        }
        const isFameleh100 = (serial) => {
            let status = false
            Object.keys(pamili100).forEach((i) => {
                if (pamili100[i].id === serial) {
                    status = true
                }
            })
            return status
        }
        const cekWaktuF100 = (_dir, serial) => {
            setInterval(() => {
                let position = null
                Object.keys(pamili100).forEach((i) => {
                    if (Date.now() >= pamili100[i].expired) {
                        position = i
                    }
                })
                if (position !== null) {
                    znn.reply(from, `Waktu habis\n\n*Jawaban :* ${pamili100[position].jawaban}`, id)
                    console.log(`Waktu Habis : ${pamili100[position].id}`)
                    pamili100.splice(position, 1)
                    fs.writeFileSync('./database/user/family100.json', JSON.stringify(pamili100))
                }
            }, 1000)
        }
        const gtFposi = (userId) => {
            let position = null
            Object.keys(pamili100).forEach((i) => {
                if (pamili100[i].id === userId) {
                    position = i
                }
            })
            if (position !== null) {
                return position
            }
        }

        if (isFameleh100(chatId)) {
            if (chats.match(getjawaban100(chatId))) {
                const pamele100 = Math.floor(Math.random() * 25000) + 1;
                var isDoneVerifyss = register.checkRegisteredUser(sender.id, _registered)
                if (!isDoneVerifyss) return znn.reply(from, `Maaf kamu belum melakukan ${prefix}verify`, id)
                znn.reply(from, `Benar!, Saldo ditambahkan +Rp ${convertBalanceToString(pamele100)}`, id)
                addSaldo(serial, pamele100)
                pamili100.splice(gtFposi(chatId, pamili100), 1)
                fs.writeFileSync('./database/user/family100.json', JSON.stringify(pamili100))
            }

        }

        // FUNCTION CAKLONTONG
        const addResultCaklontong = (serial, jawaban, expired) => {
            let obi = { id: serial, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
            caklontong.push(obi)
            fs.writeFileSync('./database/user/caklontong.json', JSON.stringify(caklontong))
        }
        const getjawabanCaklontong = (serial) => {
            let found = false
            Object.keys(caklontong).forEach((i) => {
                if (caklontong[i].id === serial) {
                    found = i
                }
            })
            if (found !== false) {
                return caklontong[found].jawaban
            }
        }
        const isCakLontong = (serial) => {
            let status = false
            Object.keys(caklontong).forEach((i) => {
                if (caklontong[i].id === serial) {
                    status = true
                }
            })
            return status
        }
        const cekWaktuCaklontong = (_dir, serial) => {
            setInterval(() => {
                let position = null
                Object.keys(caklontong).forEach((i) => {
                    if (Date.now() >= caklontong[i].expired) {
                        position = i
                    }
                })
                if (position !== null) {
                    znn.reply(from, `Waktu habis\n\n*Jawaban :* ${caklontong[position].jawaban}`, id)
                    console.log(`Waktu Habis : ${caklontong[position].id}`)
                    caklontong.splice(position, 1)
                    fs.writeFileSync('./database/user/caklontong.json', JSON.stringify(caklontong))
                }
            }, 1000)
        }
        const getCaklontongPosition = (userId) => {
            let position = null
            Object.keys(caklontong).forEach((i) => {
                if (caklontong[i].id === userId) {
                    position = i
                }
            })
            if (position !== null) {
                return position
            }
        }

        // FUNCTION SEWA GC
        const addSewaGc = (groupId, expired) => {
            let obi = { id: groupId, expired: Date.now() + toMs(`${expired}s`) }
            sewagc.push(obi)
            fs.writeFileSync('./database/group/sewagc.json', JSON.stringify(sewagc))
        }

        const cekWaktuSewa = (_dir, groupId) => {
            setInterval(() => {
                let position = null
                Object.keys(sewagc).forEach((i) => {
                    if (Date.now() >= sewagc[i].expired) {
                        position = i
                    }
                })
                if (position !== null) {
                    znn.sendText(sewagc[position].id, 'Maaf waktu sewa grup ini sudah habis saya harus keluar...')
                    znn.leaveGroup(sewagc[position].id)
                    sewagc.splice(position, 1)
                    fs.writeFileSync('./database/group/sewagc.json', JSON.stringify(sewagc))
                }
            }, 1000)
        }

        const isCheckGrup = (userId) => {
            let status = false
            Object.keys(sewagc).forEach((i) => {
                if (sewagc[i].id === userId) {
                    status = true
                }
            })
            return status
        }


        if (isCakLontong(chatId)) {
            if (chats.match(getjawabanCaklontong(chatId))) {
                const caklontonggs = Math.floor(Math.random() * 25000) + 1;
                var isDoneVerifys = register.checkRegisteredUser(sender.id, _registered)
                if (!isDoneVerifys) return znn.reply(from, `Maaf kamu belum melakukan ${prefix}verify`, id)
                znn.reply(from, `Benar!, Saldo ditambahkan +Rp ${convertBalanceToString(caklontonggs)}`, id)
                addSaldo(serial, caklontonggs)
                caklontong.splice(getCaklontongPosition(chatId, caklontong), 1)
                fs.writeFileSync('./database/user/caklontong.json', JSON.stringify(caklontong))
            }
        }

        const kelebihan = [
            'Soleh dan Soleha',
            'Pintar',
            'Rajin',
            'Teladan'
        ]
        const tipe = [
            'cool',
            'idaman',
            'Alami',
            'Keren',
            'Ideal',
            'Dia Bamget',
            'normal',
            'elite',
            'epic',
            'Legend'
        ]
        const ratenyaasu = [
            '100%',
            '95%',
            '90%',
            '85%',
            '80%',
            '75%',
            '70%',
            '65%',
            '60%',
            '55%',
            '50%',
            '45%',
            '40%',
            '35%',
            '30%',
            '25%',
            '20%',
            '15%',
            '10%',
            '5%'
        ]
        const sifat = [
            'Penolong',
            'Suka Membantu',
            'Saling Menolong',
            'Perhatian',
            'Ngak Cuek',
            'Romantis',
            'Dermawan',
            'Cool',
            'Peduli Kepada Sesama',
            'Suka Berkata Kasar'
        ]
        const hobby = [
            'Memasak',
            'Membantu Atok',
            'Mabar',
            'Nobar',
            'Sosmedtan',
            'Membantu Orang lain',
            'Nonton Anime',
            'Nonton Drakor',
            'Naik Motor',
            'Nyanyi',
            'Menari',
            'Bertumbuk',
            'Menggambar',
            'Foto fotoan Ga jelas',
            'Maen Game',
            'Berbicara Sendiri'
        ]
        const watak = [
            'top deh pokoknya',
            'penyayang',
            'pemurah',
            'Pemarah',
            'Pemaaf',
            'Penurut',
            'Baik',
            'baperan',
            'Baik-Hati',
            'penyabar',
            'UwU',
            'Suka Membantu'
        ]

        const randomwallpaper = ["https://telegra.ph/file/06a3da44628adf7a67e4b.jpg",
            "https://telegra.ph/file/f6f24b0b048da2afd4f90.jpg",
            "https://telegra.ph/file/38ec6e984853e57c347fe.jpg",
            "https://c.top4top.io/p_19089ijpc1.jpg",
            "https://telegra.ph/file/e0362017827d48b4c552c.jpg"]

        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }

        function isLimit(userId) {
            if (isPremium) { return false; }
            let found = false;
            for (let i of limit) {
                if (i.id === userId) {
                    let limits = i.limit;
                    if (limits >= limitCount) {
                        found = true;
                        znn.reply(from, `Opps Perintah BOT anda sudah mencapai batas, coba esok hari :)`, id)
                        return true;
                    } else {
                        limit
                        found = true;
                        return false;
                    }
                }
            }
            if (found === false) {
                let obj = { id: `${userId}`, limit: 1 };
                limit.push(obj);
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit));
                return false;
            }
        }

        function limitAdd(id) {
            if (isPremium) { return false; }
            var found = false;
            Object.keys(limit).forEach((i) => {
                if (limit[i].id == id) {
                    found = i
                }
            })
            if (found !== false) {
                limit[found].limit += 1;
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit));
            }
        }

        function isLimitCoin(userId) {
            let found = false;
            for (let i of limitmining) {
                if (i.id === userId) {
                    let limits = i.limit;
                    if (limits >= limitMining) {
                        found = true;
                        znn.reply(from, `Coin anda sudah habis untuk bermain game silahkan beli di ${prefix}shopmenu atau menunggu jam 6 pagi untuk mendapatkan 30 Coin`)
                        return true;
                    } else {
                        limitmining
                        found = true;
                        return false;
                    }
                }
            }
            if (found === false) {
                let obj = { id: `${userId}`, limit: 1 };
                limitmining.push(obj);
                fs.writeFileSync('./database/user/koin.json', JSON.stringify(limitmining));
                return false;
            }
        }

        function limitAddCoin(id) {
            var found = false;
            Object.keys(limitmining).forEach((i) => {
                if (limitmining[i].id == id) {
                    found = i
                }
            })
            if (found !== false) {
                limitmining[found].limit += 1;
                fs.writeFileSync('./database/user/koin.json', JSON.stringify(limitmining));
            }
        }

        function convertBalanceToString(angka) {
            var balancenyeini = '';
            var angkarev = angka.toString().split('').reverse().join('');
            for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) balancenyeini += angkarev.substr(i, 3) + '.';
            return '' + balancenyeini.split('', balancenyeini.length - 1).reverse().join('');
        }

        function clamp(value, min, max) {
            return Math.min(Math.max(min, value), max)
        }

        function banChat() {
            if (banChats == true) {
                return false
            } else {
                return true
            }
        }

        const sleeps = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        const addAntiSpamImage2 = (serial, expired) => {
            let obi = { id: serial, expired: Date.now() + toMs(`${expired}s`) }
            isAntiSpamImage2.push(obi)
            fs.writeFileSync('./database/group/antispamNSFW.json', JSON.stringify(isAntiSpamImage2))
        }

        const cekWaktuAntiSpamNsfw = (_dir, serial) => {
            setInterval(() => {
                let position = null
                Object.keys(isAntiSpamImage2).forEach((i) => {
                    if (Date.now() >= isAntiSpamImage2[i].expired) {
                        position = i
                    }
                })
                if (position !== null) {
                    isAntiSpamImage2.splice(position, 1)
                    fs.writeFileSync('./database/group/antispamNSFW.json', JSON.stringify(isAntiSpamImage2))
                }
            }, 1000)
        }

        const isAntiSpamImagesNSFW = (serial) => {
            let status = false
            Object.keys(isAntiSpamImage2).forEach((i) => {
                if (isAntiSpamImage2[i].id === serial) {
                    status = true
                }
            })
            return status
        }

        // FUNCTION CALL ROLE / RANK
        const levelRole = level.getLevelingLevel(sender.id, _level)
        var role = 'Bronze'
        if (levelRole >= 10) {
            role = 'Silver'
        } else if (levelRole >= 15) {
            role = 'Gold'
        } else if (levelRole >= 20) {
            role = 'Platinum'
        } else if (levelRole >= 30) {
            role = 'Diamond'
        } else if (levelRole >= 40) {
            role = 'Master'
        } else if (levelRole >= 50) {
            role = 'GrandMaster'
        }

        // Leveling [BETA] by Slavyan
        if (isGroupMsg && isRegistered && !level.isGained(sender.id) && !isBanned && isLevelingOn) {
            try {
                level.addCooldown(sender.id)
                const currentLevel = level.getLevelingLevel(sender.id, _level)
                const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
                const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                level.addLevelingXp(sender.id, amountXp, _level)
                if (requiredXp <= level.getLevelingXp(sender.id, _level)) {
                    level.addLevelingLevel(sender.id, 1, _level)
                    const userLevel = level.getLevelingLevel(sender.id, _level)
                    const fetchXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    await znn.reply(from, `*「 LEVEL UP 」*\n\n• *Name:* ${pushname.substring(0, 10)}\n• *XP:* ${level.getLevelingXp(sender.id, _level)} / ${fetchXp}\n• *Level:* ${currentLevel} -> ${level.getLevelingLevel(sender.id, _level)} 🆙 \n• *Rank:* ${role}\n\nCongrats!! 🎉🎉`, id)
                }
            } catch (err) {
                console.error(err)
            }
        }

        if (isCmd && isRegistered && !isBanned) {
            const CurrentBalance = getLevelingBalance(sender.id, userbalance)
            const checkIdBc = getLevelingBalanceId(sender.id, userbalance)
            try {
                if (CurrentBalance === undefined && checkIdBc === undefined) addLevelingIdBC(sender.id, userbalance)
                const amountXpBC = Math.floor(Math.random() * 10) + 150
                const requiredXpBC = 200 * (Math.pow(2, CurrentBalance) - 1)
                const getLevelBC = getLevelingBalance(sender.id, userbalance)
                addLevelingXpBalance(sender.id, amountXpBC, userbalance)
                if (requiredXpBC <= getLevelingXpBC(sender.id, userbalance)) {
                    addLevelingBalance(sender.id, 1, userbalance)
                    const fetchXpBC = 200 * (Math.pow(2, getLevelingBalance(sender.id, userbalance)) - 1)
                }
            } catch (err) {
                console.error(err)
            }
        }

        // Anti-group link detector
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorOn) {
            if (chats.match == undefined) { return false; }
            if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                const valid = await znn.inviteInfo(chats)
                if (valid) {
                    console.log(color('[KICK]', 'red'), color(`ANTI LINK`, 'yellow'))
                    await znn.reply(from, `*「 ANTI GROUP LINK 」*\n\nKamu mengirim link group chat!\nMaaf tapi kami harus mengeluarkan mu...\nSelamat tinggal~`, id)
                    await znn.removeParticipant(groupId, sender.id)
                } else {
                    console.log(color('[WARN]', 'green'), color('LINK IS SAFE', 'yellow'))
                }
            }
        }

        // Anti-Badword detector
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiBadwordOn) {
            if (chats == 'anjing' || chats == 'ajg' || chats == 'babi' || chats == 'kntl' || chats == 'kontol' || chats == 'mmk' || chats == 'memek' || chats == 'bangsat' || chats == 'bgst' || chats == 'tolol' || chats == 'tlol') {
                console.log(color('[KICK]', 'red'), color(`ANTI BADWORD`, 'yellow'))
                await znn.reply(from, `Kata kasar detected!`, id)
                await znn.removeParticipant(groupId, sender.id)
            }
        }

        // Anti-fake-group link detector
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorOn && !isOwner) {
            if (chats.match(/(https:\/\/chat.(?!whatsapp.com))/gi)) {
                console.log(color('[KICK]', 'red'), color(`「 *ANTI FAKE-LINK* 」\n\nMaaf ${pushname.substring(0, 10)} kamu mengirimkan link disaat anti fake-link menyala, kamu akan dikick`, 'yellow'))
                await znn.reply(from, 'Fake group link detected!', id)
                await znn.removeParticipant(groupId, sender.id)
            }
        }

        // Anti NSFW links but kinda uneffective
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiNsfw && !isOwner) {
            if (isMedia && isImage || isQuotedImage) {
                if (isAntiSpamImagesNSFW(serial)) { return false; }
                addAntiSpamImage2(serial, 20)
                cekWaktuAntiSpamNsfw(serial)
                var encryptMedia = isQuotedImage ? quotedMsg : message
                var mediaData = await decryptMedia(encryptMedia, uaOverride)
                var linkImgs = await uploadImages(mediaData, `${sender.id}_img`)
                var NSFAI = require('nsfai');

                var nsfai = new NSFAI("7de862cc40c04e71ae01ba3f3b376a0f");

                function handleResult(result) {
                    if (result.sfw) {
                        znn.reply(from, `Image ini aman dari NSFW dengan persentasi ${decimalToPersen(result.confidence)}`, id)
                    } else {
                        znn.reply(from, `Image ini Terdeteksi NSFW dengan persentasi ${decimalToPersen(result.confidence)}`, id)
                        sleeps(2000)
                        znn.removeParticipant(groupId, sender.id)
                    }
                }

                function handleError(error) {
                    nsfai.predict(linkImgs, handleResult)
                        .then(handleResult)
                        .catch(handleError);
                }
            } else if (isUrl(chats)) {
                const classify = new URL(isUrl(chats))
                console.log(color('[FILTER]', 'yellow'), 'Checking link:', classify.hostname)
                isPorn(classify.hostname, async (err, status) => {
                    if (err) return console.error(err)
                    if (status) {
                        console.log(color('[NSFW]', 'red'), color('The link is classified as NSFW!', 'yellow'))
                        await znn.reply(from, 'Terdeteksi link nsfw', id)
                        await znn.removeParticipant(groupId, sender.id)
                    } else {
                        console.log(('[NEUTRAL]'), color('The link is safe!'))
                    }
                })
            }
        }

        // Auto-sticker
        if (isGroupMsg && isAutoStickerOn && isMedia && isImage && !isCmd) {
            const mediaData = await decryptMedia(message, uaOverride)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await znn.sendImageAsSticker(from, imageBase64, { author: `${config.authorstickerpack}`, pack: `${config.packagenamestick}`, keepScale: false })
        }

        // AFK by Slavyan
        if (isGroupMsg) {
            for (let ment of mentionedJidList) {
                if (afk.checkAfkUser(ment, _afk)) {
                    const getId = afk.getAfkId(ment, _afk)
                    const getReason = afk.getAfkReason(getId, _afk)
                    const getTime = afk.getAfkTime(getId, _afk)
                    await znn.reply(from, `*「 AFK MODE 」*\nHeyy!, Jangan ganggu dia\n• *Reason*: ${getReason}\n• *Since*: ${getTime}`, id)
                }
            }
            if (afk.checkAfkUser(sender.id, _afk) && !isCmd) {
                _afk.splice(afk.getAfkPosition(sender.id, _afk), 1)
                fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
                await znn.sendText(from, `*${pushname.substring(0, 10)}* telah kembali dari AFK! Selamat datang kembali`)
            }
        }

        if (chats == 'prefix' || (chats == 'cekprefix')) {
            znn.reply(from, `Prefix yang digunakan saat ini adalah MultiPrefix`, id)
        }

        // Ignore banned and blocked users
        if (isCmd && (isBanned || isBlocked) && !isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(sender.id.replace('@c.us', '')))
        if (isCmd && (isBanned || isBlocked) && isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(sender.id.replace('@c.us', '')), 'in', color(name || formattedTitle))

        // Anti-spam
    //    if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) return console.log(color('[SPAM]', 'red'), co
    //    (time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(sender.id.replace('@c.us', '')))
    //    if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) return console.log(color('[SPAM]', 'red'), col
    //    (time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(sender.id.replace('@c.us', ''))
    //    color(name || formattedTitle))

        // Log
        if (isCmd && !isGroupMsg) console.log(color('[CMD]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(sender.id.replace('@c.us', '')))
        if (isCmd && isGroupMsg) console.log(color('[CMD]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(sender.id.replace('@c.us', '')), 'in', color(name || formattedTitle))

         // Anti virtext by: @VideFrelan
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && !isOwner) {
           if (chats.length > 4000) {
               await znn.sendTextWithMentions(from, `@${sender.id} is detected sending a virtext.\nYou will be kicked!`)
               await znn.removeParticipant(groupId, sender.id)
            }
        } 
		
        // Anti-spam
        if (isCmd && !isOwner) msgFilter.addFilter(from)
        if (banChat() && !isBlocked && !isBanned || isOwner) {
            switch (command) {
                case 'banchat':
                    if (!isOwner) return
                    if (config.banChats === true) return znn.reply(from, `Already Banchat!`, id)
                    config.banChats = true
                    banChats = true
                    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2))
                    znn.reply(from, 'Global chat has been enable!', id)
                    break
                case 'unbanchat':
                    if (!isOwner) return
                    if (config.banChats === false) return znn.reply(from, `Already Unbanchat!`, id)
                    config.banChats = false
                    banChats = false
                    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2))
                    znn.reply(from, 'Global chat has been disable!', id)
                    break
                case 'verify': case 'daftar': case 'register':
				    await znn.reply(from, `• ID : apabila verifynya tidak muncul brrti error, coba beberapasaat lagi. atau hubungi owner dengan cara ketik /owner
cara kedua yaitu mengganti nama. username wa jangan ada simbol aneh kalo bisa nama whatsappnya diganti menjadi " me " dan coba /verify lagi. thanks

• ENG : if the verification does not appear means an error, please try again later. or contact the owner by typing /owner The second way is to change the name. username wa, don't have strange symbols, if possible change the whatsapp name to "me" and try /verify again. thank you`, id)
                    const pictuser = await znn.getProfilePicFromServer(sender.id)
                    var mathrandomwp = randomwallpaper[Math.floor(Math.random() * (randomwallpaper.length))]
                    if (pictuser === undefined) {
                        var picx = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    } else {
                        picx = pictuser
                    }
                    const nonye = sender.id
                    const pporang = await znn.getProfilePicFromServer(sender.id)
                    var ceknya = nonye
                    var obj = _registered.some((val) => {
                        return val.id === ceknya
                    })
                    if (obj === true) {
                        return znn.reply(from, 'Btw, Kamu sudah melakukan verifikasi', id)
                    } else {
                        const mentah = await znn.checkNumberStatus(nonye)
                        const welcomer = await new canva.Welcome()
                            .setUsername(`NAMA : ${pushname.substring(0, 15)}`)
                            .setDiscriminator(`USER : ${_registered.length}`)
                            .setMemberCount('H4yperBot')
                            .setGuildName(name)
                            .setAvatar('https://telegra.ph/file/6c00fd3d91d591470a790.jpg')
                            .setColor('border', '#00100C')
                            .setColor('username-box', '#00100C')
                            .setColor('discriminator-box', '#00100C')
                            .setColor('message-box', '#00100C')
                            .setColor('title', '#Ffffff')
                            .setBackground(mathrandomwp)
                            .toAttachment()
                        const base64verify = `data:image/png;base64,${welcomer.toBuffer().toString('base64')}`
                        const registersss = ({
                            id: mentah.id._serialized
                        })
                        const givebalance = ({
                            id: mentah.id._serialized,
                            xp: 2000,
                            level: 1
                        })
                        const givecardata = ({
                            id: mentah.id._serialized,
                            link: urlcard
                        })
                        _registered.push(registersss)
                        fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))

                        userbalance.push(givebalance)
                        fs.writeFileSync('./database/user/userbalance.json', JSON.stringify(userbalance))

                        _bg.push(givecardata)
                        fs.writeFileSync('./database/user/background.json', JSON.stringify(_bg))
                        await znn.sendFile(from, base64verify, 'welcome.png', `「 *VERIFY-SUCCES* 」\n\n• Name: ${pushname.substring(0, 10)}\n• Nomer: ${sender.id.replace('@c.us', '')}\n• User ke: ${_registered.length}\n\n_Terimakasih telah melakukan verify_`)
                    }
                    break
                case 'totaluser':
                case 'listverify':
                case 'userlist':
                    await znn.reply(from, `Total users : ${_registered.length}`, id)
                    break
                case 'level':
                case 'ceklevel':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    const userLevel = level.getLevelingLevel(sender.id, _level)
                    const userXp = level.getLevelingXp(sender.id, _level)
                    const ppLink = await znn.getProfilePicFromServer(sender.id)
                    const bege = card.getBg(sender.id, _bg)
                    if (ppLink === undefined) {
                        var pepe = errorImg
                    } else {
                        pepe = ppLink
                    }
                    const requiredXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    const namacardlevel = Math.floor(Math.random() * 10) + 20
                    const rank = new canvas.Rank()
                        .setAvatar(pepe)
                        .setLevel(userLevel)
                        .setLevelColor('#ff0000', '#ff0000')
                        .setRank(1, `${role}`, true)
                        .setCurrentXP(userXp)
                        .setOverlay('#ff0000', 100, false)
                        .setRequiredXP(requiredXp)
                        .setProgressBar('#ff0000', 'COLOR')
                        .setBackground('IMAGE', bege)
                        .setUsername(pushname, '#ff0000')
                        .setDiscriminator(sender.id.substring(6, 10))
                    rank.build()
                        .then(async (buffer) => {
                            canvas.write(buffer, `${namacardlevel}_card.png`)
                            await znn.sendFile(from, `${namacardlevel}_card.png`, `${namacardlevel}_card.png`, `「 *INFO LEVEL* 」\n\n• *Username:* ${pushname.substring(0, 10)}\n• *Level:* ${userLevel}\n• *Rank:* ${role}\n• *Xp Info:* ${userXp} / ${requiredXp}`, id)
                            fs.unlinkSync(`${namacardlevel}_card.png`)
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await znn.reply(from, 'Error!', id)
                        })
                    break
                case 'cekatm':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    const pictusers = await znn.getProfilePicFromServer(sender.id)
                    const userBalancenye = getLevelingXpBC(sender.id, userbalance)
                    mathrandomwp = randomwallpaper[Math.floor(Math.random() * (randomwallpaper.length))]
                    if (pictusers === undefined) {
                        picx = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    } else {
                        picx = pictusers
                    }
                    const welcomers = await new canvar.Welcome()
                        .setUsername(`NAMA : ${pushname.substring(0, 10)}`)
                        .setDiscriminator(`Saldo : ${convertBalanceToString(userBalancenye)}`)
                        .setMemberCount('H4yperBot')
                        .setGuildName(name)
                        .setAvatar('https://telegra.ph/file/6c00fd3d91d591470a790.jpg')
                        .setColor('border', '#00100C')
                        .setColor('username-box', '#00100C')
                        .setColor('discriminator-box', '#00100C')
                        .setColor('message-box', '#00100C')
                        .setColor('title', '#Ffffff')
                        .setBackground(mathrandomwp)
                        .toAttachment()
                    const base64verifys = `data:image/png;base64,${welcomers.toBuffer().toString('base64')}`
                    await znn.sendFile(from, base64verifys, 'welcome.png', `「 *INFO ATM USER* 」

• Name: ${pushname.substring(0, 10)}
• Saldo: Rp ${convertBalanceToString(userBalancenye)}`)
                    break
                case 'start':
                    znn.reply(from, `Hallo ${pushname.substring(0, 10)} 👋🏻

Thank you for using H4, don't forget to read TOS

*TOS IND*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Dilarang Spam Command Terhadap bot atau masuk kedalam listhell
7. Dilarang Telp/Vc Karena Sistem akan memblockir bagi yang menelpon
8. Dilarang Spam demi mendapatkan level!

*TOS ENG*
1. Text and your WhatsApp username will be stored on the server as long as the bot is active
2. Your data will be deleted when bot Offline
3. We do not store pictures, videos, files, audios and documents that you send
4. We will not ask you to provide personal information
5. If you find a bug / error, please report it directly to the bot Owner
6. Do not spam commands against bots or enter the listhell
7. Do not call / Vc because the system will block those who call
8. No Spam for each xp leveling!

_Now type ${prefix}menu_`, id)
                    break
                case 'hilih':
                    const hiliw = quotedMsg.type == 'chat' ? quotedMsg.body : ''
                    if (hiliw == `${prefix}hilih`) { return false; }
                    const hili = hiliw.replace(/a|u|e|o/g, "i")
                    await znn.reply(from, hili, id)
                    break
                case 'halah':
                    const halah = quotedMsg.type == 'chat' ? quotedMsg.body : ''
                    if (halah == `${prefix}halah`) { return false; }
                    const hala = halah.replace(/i|u|e|o/g, "a")
                    await znn.reply(from, hala, id)
                    break
                case 'heleh':
                    const heleh = quotedMsg.type == 'chat' ? quotedMsg.body : ''
                    if (heleh == `${prefix}heleh`) { return false; }
                    const hele = heleh.replace(/i|u|a|o/g, "e")
                    await znn.reply(from, hele, id)
                    break
                case 'holoh':
                    const holoh = quotedMsg.type == 'chat' ? quotedMsg.body : ''
                    if (holoh == `${prefix}holoh`) { return false; }
                    const holo = holoh.replace(/i|u|e|a/g, "o")
                    await znn.reply(from, holo, id)
                    break
                case 'huluh':
                    const huluh = quotedMsg.type == 'chat' ? quotedMsg.body : ''
                    if (huluh == `${prefix}huluh`) { return false; }
                    const hulu = huluh.replace(/i|o|e|a/g, "u")
                    await znn.reply(from, hulu, id)
                    break
                case 'toplevel':
                case 'leaderboard':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                    let leaderboard = '「 *TOP LEVEL* 」\n\n'
                    try {
                        for (let i = 0; i < 10; i++) {
                            leaderboard += `${i + 1}. wa.me/${_level[i].id.replace('@c.us', '')}\n• *Level:* ${_level[i].level}\n• *XP:* ${_level[i].xp}\n\n`
                        }
                        await znn.reply(from, leaderboard, id)
                    } catch (err) {
                        await znn.reply(from, `Perlu setidaknya *10* user yang memiliki level di database`, id)
                    }
                    break
                case 'topbalance':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    userbalance.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                    let leaderboards = '「 *TOP BALANCE* 」\n\n'
                    let nomBC = 0
                    try {
                        for (let i = 0; i < 10; i++) {
                            nomBC++
                            leaderboards += `[ ${nomBC} ] \n• USER : @${userbalance[i].id.replace('@c.us', '')}\n• BALANCE : Rp ${convertBalanceToString(userbalance[i].xp)}\n\n`
                        }
                        await znn.sendTextWithMentions(from, leaderboards)
                    } catch (err) {
                        console.error(err)
                        await znn.reply(from, `Perlu setidaknya *10* user yang memiliki level di database`, id)
                    }
                    break
                case 'setbackground':
                case 'setbg':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    if (isMedia && isImage || isQuotedImage) {
                        await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const mediaData = await decryptMedia(encryptMedia, uaOverride)
                        const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                        const levels = level.getLevelingLevel(sender.id, _level)
                        const xps = level.getLevelingXp(sender.id, _level)
                        if (levels === undefined && xps === undefined) return await znn.reply(from, `Maaf ${pushname.substring(0, 10)} kamu belum memiliki level:(`, id)
                        card.replaceBg(sender.id, linkImg, _bg)
                        await znn.reply(from, 'Success set new background!', id)
                    } else {
                        await znn.reply(from, `Salah!, Silahkan reply/kirim image dengan caption ${prefix}setbg`, id)
                    }
                    break
                case 'tebakgambar':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isTebakGambar(serial)) return await znn.reply(from, `*IND*\n• Masih ada jawaban yang belum dijawab\n\n*ENG*\n• There are still unanswered answers`, id)
                    if (isLimitCoin(serial)) return znn.reply(from, `Sepertinya coinmu habis, Silahkan beli di ${prefix}shopmenu`, id)
                    const hargatebakgambar = 5000
                    const waktujwb = 30
                    if (checkATMuser(serial) <= hargatebakgambar) return znn.reply(from, `Saldomu harus ada Rp. ${convertBalanceToString(hargatebakgambar)}+ untuk memainkan game ini, silahkan cek dengan cara ${prefix}cekatm`, id)
                    if (checkATMuser(serial) >= hargatebakgambar) {
                        function tebak_gambar() {
                            return new Promise((resolve, reject) => {
                                var url_floor = `https://jawabantebakgambar.net/id-${Math.floor(Math.random() * 2685)}.html`
                                axios.get(url_floor)
                                    .then(({ data }) => {
                                        var $ = cheerio.load(data)
                                        var img = `https://jawabantebakgambar.net${$('#images > li > a > img').attr('src')}`
                                        var jawaban = $('#images > li > a > img').attr('alt').replace('Jawaban ', '')
                                        var result = {
                                            img: img,
                                            jawaban: jawaban
                                        }
                                        resolve(result)
                                    })
                                    .catch(reject)
                            })
                        }

                        tebak_gambar()
                            .then((hasil) => {
                                const jwbntolw = hasil.jawaban.toLowerCase()
                                const replacetekstebakgambar = jwbntolw.replace(/a|i|u|e|o/g, "-")
                                znn.sendFileFromUrl(from, hasil.img, 'tebakgambar.jpg', `_Silahkan Jawab Maksud Dari Gambar Ini_\n\n• Waktu: 30 dtk\n• Kisi-kisi: ${replacetekstebakgambar}`, id)
                                addgambar(chatId, jwbntolw, waktujwb)
                                cekWaktuTG(chatId)
                                limitAddCoin(serial)
                            }).catch((err) => {
                                znn.reply(from, `Terjadi Kesalahan`, id)
                            })
                    }
                    break
                case 'suit':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimitCoin(serial)) return znn.reply(from, `Sepertinya coinmu telah habis, Silahkan beli di ${prefix}shopmenu`, id)
                    if (!q) return await znn.reply(from, `Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`, id)
                    const hargasuit = 5000
                    if (checkATMuser(serial) <= hargasuit) return znn.reply(from, `Sepertinya saldomu tidak cukup, untuk bermain game ini harus ada Rp. 5.000+, silahkan cek dengan cara ${prefix}cekatm`, id)
                    if (checkATMuser(serial) >= hargasuit) {
                        if (!q.match(/batu|gunting|kertas/)) return znn.reply(from, `Format salah`, id)
                        if (q.match(/batu|gunting|kertas/)) {
                            await limitAddCoin(serial)
                            confirmATM(serial, hargasuit)
                            await sleeps(3000)

                            var computer = Math.random();

                            const hadiahnye = Math.floor(Math.random() * 10000) + 1;
                            const hadiahtostr = convertBalanceToString(hadiahnye)
                            const balikin = hargasuit * 1

                            if (computer < 0.34) {
                                computer = 'batu';
                            } else if (computer >= 0.34 && computer < 0.67) {
                                computer = 'gunting';
                            } else {
                                computer = 'kertas';
                            }

                            if (q == computer) {
                                znn.reply(from, `Pertandingan Seri!\nSaldomu dikembalikan Rp ${convertBalanceToString(hargasuit)}`, id)
                                addSaldo(serial, balikin)
                            } else if (q == 'batu') {
                                if (computer == 'gunting') {
                                    znn.reply(from, `*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!, SALDO +Rp ${hadiahtostr}`, id)
                                    addSaldo(serial, hadiahnye)
                                } else {
                                    znn.reply(from, `*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`, id)
                                }
                            } else if (q == 'gunting') {
                                if (computer == 'batu') {
                                    znn.reply(from, `*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`, id)
                                } else {
                                    znn.reply(from, `*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!, SALDO +Rp ${hadiahtostr}`, id)
                                    addSaldo(serial, hadiahnye)
                                }
                            } else if (q == 'kertas') {
                                if (computer == 'batu') {
                                    znn.reply(from, `*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!, SALDO +Rp ${hadiahtostr}`, id)
                                    addSaldo(serial, hadiahnye)
                                } else {
                                    znn.reply(from, `*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`, id)
                                }
                            }
                        }
                    }
                    break
                case 'casino':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimitCoin(serial)) return znn.reply(from, `Sepertinya coinmu habis, Silahkan beli di ${prefix}shopmenu`, id)
                    if (!q) return await znn.reply(from, `Format salah!\n\nKirim perintah ${prefix}casino jumlah\nContoh: ${prefix}casino 5000`, id)
                    let digits_only = string => [...string].every(c => '0123456789'.includes(c));
                    if (digits_only(q) == false) return await znn.reply(from, `Only Number!`, id)
                    if (digits_only(q) == true) {
                        const betcasino = Math.floor(q)
                        const maximalcsn = 100001
                        if (betcasino >= maximalcsn) return znn.reply(from, `Maximal 100k`, id)
                        if (checkATMuser(serial) <= betcasino) return znn.reply(from, `*IND*\n• Sepertinya saldomu tidak cukup untuk taruhan Rp. ${convertBalanceToString(q)}, Silahkan cek dengan cara ${prefix}cekatm\n\n*ENG*\n• It looks like your balance is not enough for the bet Rp. ${convertBalanceToString(q)}, Please check your balance type ${prefix}cekatm`, id)
                        if (checkATMuser(serial) >= betcasino) {
                            await limitAddCoin(serial)
                            confirmATM(serial, betcasino)
                            const hadiahcsn = betcasino * 2
                            const maxcasino = 30
                            const thisyou = Math.floor(Math.random() * maxcasino) + 1;
                            const thiscomputer = Math.floor(Math.random() * maxcasino) + 1;
                            if (thisyou >= thiscomputer) {
                                znn.reply(from, `*RESULT*\n\n• You: ${thisyou}\n• Computer: ${thiscomputer}\n\nCongrats! You win and get Rp. ${convertBalanceToString(hadiahcsn)}`, id)
                                addSaldo(serial, hadiahcsn)
                            } else if (thisyou <= thiscomputer) {
                                znn.reply(from, `*RESULT*\n\n• You: ${thisyou}\n• Computer: ${thiscomputer}\n\nSorry! You lose:(`, id)
                            } else if (thisyou == thiscomputer) {
                                znn.reply(from, `*RESULT*\n\n• You: ${thisyou}\n• Computer: ${thiscomputer}\n\nDraw!`, id)
                            }
                        }
                    }
                    break
                case 'alaudio':
                    let digits_onlys = string => [...string].every(c => '0123456789'.includes(c));
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (digits_onlys(q) == false) return await znn.reply(from, `Masukan urutan surah contoh: ${prefix}alaudio 2`, id)
                    if (q >= '115') return znn.reply(from, `Jumlah surah cuma ada 114 kak`, id)
                    if (digits_onlys(q) == true) {
                        var xzy321 = JSON.parse(fs.readFileSync('./dbraw/listsurah.json'))
                        var resultsurah = `Surah: ${xzy321[Number(q) - 1].name}\nJenis: ${xzy321[Number(q) - 1].type}\nUrl Audio: ${xzy321[Number(q) - 1].recitation}`
                        znn.reply(from, resultsurah, id)
                    }
                    break
                case 'slot':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimitCoin(serial)) return znn.reply(from, `Sepertinya coinmu telah habis, Silahkan beli di ${prefix}shopmenu`, id)
                    let digits_onlyss = string => [...string].every(c => '0123456789'.includes(c));
                    if (digits_onlyss(q) == false) return await znn.reply(from, `Only Number!`, id)
                    if (digits_onlyss(q) == true) {

                        const betslot = Math.floor(q)
                        const maximalslot = 100001
                        if (betslot >= maximalslot) return znn.reply(from, `Maximal 100k`, id)
                        const isislots = [
                            '🍊 : 🍒 : 🍐',
                            '🍒 : 🔔 : 🍊',
                            '🍇 : 🍒 : 🍐',
                            '🍊 : 🍋 : 🔔',
                            '💎 : 💎 : 💎',
                            '🔔 : 🍒 : 🍊',
                            '🍊 : 🍋 : 🔔',
                            '💎 : 🍒 : 🍋',
                            '🍊 : 🍒 : 💎',
                            '💎 : 🔔 : 🍇',
                            '💎 : 💎 : 💎',
                            '🍐 : 💎 : 🔔',
                            '🍊 : 🍋 : 🍒',
                            '🔔 : 🔔 : 🍇',
                            '🔔 : 🍐 : 🍇',
                            '💎 : 💎 : 💎'
                        ]
                        if (checkATMuser(serial) <= betslot) return znn.reply(from, `*IND*\n• Sepertinya saldomu tidak cukup untuk taruhan Rp. ${convertBalanceToString(q)}, Silahkan cek dengan cara ${prefix}cekatm\n\n*ENG*\n• It looks like your balance is not enough for the bet Rp. ${convertBalanceToString(q)}, Please check your balance type ${prefix}cekatm`, id)
                        if (checkATMuser(serial) >= betslot) {
                            confirmATM(serial, betslot)
                            const rewardslot = betslot * 2 - 2000
                            const mathslots = isislots[Math.floor(Math.random() * (isislots.length))]
                            await limitAddCoin(serial)
                            if (mathslots == '💎 : 💎 : 💎') {
                                znn.reply(from, `*「 RESULT-SLOT 」*

🍋 : 🍇 : 🍍
💎 : 💎 : 💎 <~
🍋 : 🍒 : 🍍

Congrats You win!
Reward: +Rp. ${convertBalanceToString(rewardslot)}`, id)
                                addSaldo(serial, rewardslot)
                            } else {
                                znn.reply(from, `*「 RESULT-SLOT 」*

🍌 : 🍍 : 💎
${mathslots} <~
💎 : 🍌 : 🍌

Sorry You lost:(`, id)
                            }
                        }
                    }
                    break
                case 'searchsticker':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return

                    request.get(`https://getstickerpack.com/stickers?query=${q}`, function (err, res, html) {
                        if (!err && res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            const dataArrsticker = [];
                            $('div.sticker-pack-block.text-center').each((i, el) => {
                                const liststikel = $(el).find('img').attr('data-cfsrc');
                                dataArrsticker.push(liststikel)
                            })
                            const randompictstikel = dataArrsticker[Math.floor(Math.random() * (dataArrsticker.length))]
                            znn.sendStickerfromUrl(from, randompictstikel, id)
                            limitAdd(serial)
                        } else {
                            znn.reply(from, `Gagal dalam pengambilan data!`, id)
                        }
                    })
                    break
                case 'stickertele':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return

                    axios.get(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${q}`).then((res) => {
                        const randomgetstele = res.data.result.stickers[Math.floor(Math.random() * (res.data.result.stickers.length))]
                        axios.get(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${randomgetstele.file_id}`).then((res) => {
                            axios.get(`https://ezgif.com/webp-to-jpg?url=https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${res.data.result.file_path}`).then((res) => {
                                var $ = cheerio.load(res.data)
                                var urlstikeltele = $('#target').attr('src');
                                znn.sendStickerfromUrl(from, `https:${urlstikeltele}`, id)
                                limitAdd(serial)
                            }).catch((e) => {
                                znn.reply(from, 'Gagal dalam pengambilan data', id)
                            })
                        }).catch((e) => {
                            znn.reply(from, 'Gagal dalam pengambilan data', id)
                        })
                    }).catch((e) => {
                        znn.reply(from, 'Gagal dalam pengambilan data', id)
                    })
                    break
                case 'heroml':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    function herodetails(name) {
                        return new Promise((resolve, reject) => {
                            var splitStr = name.toLowerCase().split(' ');
                            for (let i = 0; i < splitStr.length; i++) {
                                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
                            }
                            var que = splitStr.join(' ')
                            axios.get('https://mobile-legends.fandom.com/wiki/' + que)
                                .then(({ data }) => {
                                    var $ = cheerio.load(data)
                                    var mw = []
                                    var attrib = []
                                    var skill = []
                                    var name = $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > table > tbody > tr > td > font > b').text()
                                    $('.mw-headline').get().map((res) => {
                                        var mwna = $(res).text()
                                        mw.push(mwna)
                                    })
                                    $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td').get().map((rest) => {
                                        var haz = $(rest).text().replace(/\n/g, '')
                                        attrib.push(haz)
                                    })
                                    $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > div.progressbar-small.progressbar > div').get().map((rest) => {
                                        skill.push($(rest).attr('style').replace('width:', ''))
                                    })
                                    axios.get('https://mobile-legends.fandom.com/wiki/' + que + '/Story')
                                        .then(({ data }) => {
                                            var $ = cheerio.load(data)
                                            var pre = []
                                            $('#mw-content-text > div > p').get().map((rest) => {
                                                pre.push($(rest).text())
                                            })
                                            var story = pre.slice(3).join('\n')
                                            var items = []
                                            var character = []
                                            $('#mw-content-text > div > aside > section > div').get().map((rest) => {
                                                character.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g, '').replace(/\n/g, ''))
                                            })
                                            $('#mw-content-text > div > aside > div').get().map((rest) => {
                                                items.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g, '').replace(/\n/g, ''))
                                            })
                                            var img = $('#mw-content-text > div > aside > figure > a').attr('href')
                                            var chara = character.slice(0, 2)
                                            var result = {
                                                status: 200,
                                                hero_name: name + ` ( ${mw[0].replace('CV:', ' CV:')} )`,
                                                entrance_quotes: attrib[2].replace('Entrance Quotes', '').replace('\n', ''),
                                                hero_feature: attrib[attrib.length - 1].replace('Hero Feature', ''),
                                                image: img,
                                                items: items,
                                                character: {
                                                    chara
                                                },
                                                attributes: {
                                                    movement_speed: attrib[12].replace('● Movement Speed', ''),
                                                    physical_attack: attrib[13].replace('● Physical Attack', ''),
                                                    magic_power: attrib[14].replace('● Magic Power', ''),
                                                    attack_speed: attrib[15].replace('● Attack Speed', ''),
                                                    physical_defense: attrib[16].replace('● Physical Defense', ''),
                                                    magic_defense: attrib[17].replace('● Magic Defense', ''),
                                                    basic_atk_crit_rate: attrib[18].replace('● Basic ATK Crit Rate', ''),
                                                    hp: attrib[19].replace('● HP', ''),
                                                    mana: attrib[20].replace('● Mana', ''),
                                                    ability_crit_rate: attrib[21].replace('● Ability Crit Rate', ''),
                                                    hp_regen: attrib[22].replace('● HP Regen', ''),
                                                    mana_regen: attrib[23].replace('● Mana Regen', '')
                                                },
                                                price: {
                                                    battle_point: mw[1].split('|')[0].replace(/ /g, ''),
                                                    diamond: mw[1].split('|')[1].replace(/ /g, ''),
                                                    hero_fragment: mw[1].split('|')[2] ? mw[1].split('|')[2].replace(/ /g, '') : 'none'
                                                },
                                                role: mw[2],
                                                skill: {
                                                    durability: skill[0],
                                                    offense: skill[1],
                                                    skill_effects: skill[2],
                                                    difficulty: skill[3]
                                                },
                                                speciality: mw[3],
                                                laning_recommendation: mw[4],
                                                release_date: mw[5],
                                                background_story: story
                                            }
                                            resolve(result)
                                        }).catch((e) => reject({ status: 404, message: e.message }))
                                }).catch((e) => reject({ status: 404, message: e.message }))
                        })
                    }

                    herodetails(q)
                        .then((hasil) => {
                            var resultheroml = `「 *RESULT-FOUND!* 」

• Nama Hero: ${hasil.hero_name}
• Quotes: ${hasil.entrance_quotes}
• Hero Feature: ${hasil.hero_feature}
• Price Point: ${hasil.price.battle_point.trim()}
• Price Diamond: ${hasil.price.diamond}
• Role: ${hasil.role}
• Movement speed: ${hasil.attributes.movement_speed}
• Physical Attack: ${hasil.attributes.physical_attack}
• Attack Speed: ${hasil.attributes.attack_speed}
• Hp: ${hasil.attributes.hp} / ${hasil.attributes.hp_regen} _Regen_
• Mana: ${hasil.attributes.mana} / ${hasil.attributes.mana_regen} _Regen_
• Recommend Lane: ${hasil.laning_recommendation}
• Release: ${hasil.release_date}
• Background History: ${hasil.background_story.trim()}
`
                            znn.sendFileFromUrl(from, hasil.image, `${sender.id}.jpg`, resultheroml, id)
                        }).catch((err) => {
                            znn.reply(from, `Maaf, Hero ${q} tidak ditemukan`, id)
                        })
                    break
                case 'wattpad':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    async function wattpadSearch(query) {
                        return new Promise((resolve, reject) => {
                            axios.get('https://www.wattpad.com/search/' + query)
                                .then(({ data }) => {
                                    var $ = cheerio.load(data)
                                    var title = []
                                    var url = []
                                    var id = []
                                    var img = []
                                    $('#results-stories > div > ul > li > div > a > div.cover.cover-xs.pull-left > img').get().map((rest) => {
                                        title.push($(rest).attr('alt'))
                                        img.push($(rest).attr('src'))
                                    })
                                    $('#results-stories > div > ul > li > div > a').get().map((rest) => {
                                        url.push('https://www.wattpad.com' + $(rest).attr('href'))
                                        id.push($(rest).attr('data-id'))
                                    })
                                    var results = []
                                    for (let i = 0; i < title.length; i++) {
                                        var ress = {
                                            id: id[i],
                                            title: title[i],
                                            thumb: img[i],
                                            url: url[i],

                                        }
                                        results.push(ress)
                                    }
                                    resolve(results)
                                }).catch(reject)
                        })
                    }

                    wattpadSearch(q)
                        .then((hasil) => {
                            var resultwp = '「 *RESULT-FOUND!* 」\n\n'
                            for (let i = 0; i < hasil.length; i++) {
                                resultwp += `• ID: ${hasil[i].id}\n• Judul: ${hasil[i].title}\n• Url: ${hasil[i].url}\n\n`
                            }
                            znn.reply(from, resultwp, id)
                        }).catch((err) => {
                            znn.reply(from, `Cerita ${q} tidak ditemukan`, id)
                        })
                    break
                case 'say':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    znn.reply(from, q, id)
                    break
				case 'creepyfact': // By Kris
                if (!isRegistered) return await znn.reply(from, ind.notRegistered(), id)
               // await znn.reply(from, ind.wait(), id)
                fetch('https://raw.githubusercontent.com/TheSploit/CreepyFact/main/creepy.txt')
                    .then((res) => res.text())
                    .then(async (body) => {
                        let creepyx = body.split('\n')
                        let creepyz = creepyx[Math.floor(Math.random() * creepyx.length)]
                        await znn.reply(from, creepyz, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await znn.reply(from, 'Error!', id)
                    })
                break
			    case 'cerpen': // By Kris
                if (!isRegistered) return await znn.reply(from, ind.notRegistered(), id)
                if (isLimit(serial)) return
                await limitAdd(serial)
                await znn.reply(from, ind.wait(), id)
                axios.get('https://masgi.herokuapp.com/api/cerpen')
                    .then(async (res) => await znn.reply(from, res.data.data, id))
                    .catch(async (err) => {
                        console.error(err)
                        await znn.reply(from, 'Error!', id)
                    })
                break
				case 'cersex':
                if (!isRegistered) return await znn.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                   // if (!isNsfw) return await znn.reply(from, ind.notNsfw(), id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    await znn.reply(from, ind.wait(), id)
                    fun.cersex()
                        .then(async ({ result }) => {
                            await znn.sendFileFromUrl(from, result.image, 'cersex.jpg', `*── 「 ${result.judul} 」 ──*\n\n${result.cerita}`, id)
                            console.log('Success sending cersex!')
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await znn.reply(from, 'Error!', id)
                        })
                } else {
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    await znn.reply(from, ind.wait(), id)
                    fun.cersex()
                        .then(async ({ result }) => {
                            await znn.sendFileFromUrl(from, result.image, 'cersex.jpg', `*── 「 ${result.judul} 」 ──*\n\n${result.cerita}`, id)
                            console.log('Success sending cersex!')
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await znn.reply(from, 'Error!', id)
                        })
                }
                break
                case 'igstalk':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    axios.get(`https://www.instagram.com/${q}/?__a=1`).then(({ data }) => {
                        const user = data.graphql.user
                        const resultigstalk = `</ *RESULT-FOUND!* >
                    
• id: ${user.id}
• biography: ${user.biography}
• Follower: ${user.edge_followed_by.count}
• Following: ${user.edge_follow.count}
• fullName: ${user.full_name}
• highlightCount: ${user.highlight_reel_count}
• isBusinessAccount: ${user.is_business_account ? 'Yes' : 'No'}
• isRecentUser: ${user.is_joined_recently ? 'Yes' : 'No'}
• isPrivate: ${user.is_private ? 'Yes' : 'No'}
• isVerified: ${user.is_verified ? 'Yes' : 'No'}
• username: ${user.username}
• postsCount: ${user.edge_owner_to_timeline_media.count}`

                        znn.sendFileFromUrl(from, `${user.profile_pic_url_hd}`, `${sender.id}.jpg`, resultigstalk.trim(), id)
                    }).catch((err) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'afk':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Command ini hanya bisa digunakan di dalam grup!`, id)
                    if (isAfkOn) return await znn.reply(from, `Fitur AFK telah diaktifkan sebelumnya`, id)
                    if (q.length > 100) return znn.reply(from, 'Kepanjangan oe alesan apa mau drama?', id)
                    const reason = q ? q : 'Nothing.'
                    afk.addAfkUser(sender.id, time, reason, _afk)
                    await znn.reply(from, `Feature AFK success *activated*!\n\n• *Username*: ${pushname.substring(0, 10)}\n• *Reason*: ${reason}`, id)
                    break
                case 'wallanime':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    const walnime = ['https://wallpaperaccess.com/full/395986.jpg', 'https://wallpaperaccess.com/full/21628.jpg', 'https://wallpaperaccess.com/full/21622.jpg', 'https://wallpaperaccess.com/full/21612.jpg', 'https://wallpaperaccess.com/full/21611.png', 'https://wallpaperaccess.com/full/21597.jpg', 'https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png', 'https://wallpaperaccess.com/full/21591.jpg', 'https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg', 'https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg', 'https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png', 'https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg', 'https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png', 'https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg', 'https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg', 'https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png', 'https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png', 'https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg', 'https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg', 'https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png', 'https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png', 'https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg', 'https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png', 'https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg', 'https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg', 'https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg', 'https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png', 'https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg', 'https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg', 'https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png', 'https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg', 'https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png', 'https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg', 'https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg', 'https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg', 'https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png', 'https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg', 'https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png', 'https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg', 'https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg', 'https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg', 'https://cdn.nekos.life/wallpaper/3db40hylKs8.png', 'https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg', 'https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png', 'https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg', 'https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg', 'https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg', 'https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg', 'https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg', 'https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg', 'https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png', 'https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg', 'https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg', 'https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg', 'https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png', 'https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png', 'https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png', 'https://cdn.nekos.life/wallpaper/yO6ioREenLA.png', 'https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg', 'https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png', 'https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png', 'https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg', 'https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg', 'https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg', 'https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg', 'https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg', 'https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png', 'https://cdn.nekos.life/wallpaper/32EAswpy3M8.png', 'https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png', 'https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg', 'https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png', 'https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg', 'https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png', 'https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png', 'https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg', 'https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg', 'https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png', 'https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg', 'https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg', 'https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg', 'https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png', 'https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png', 'https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg', 'https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg', 'https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg', 'https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png', 'https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg', 'https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png', 'https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg', 'https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png', 'https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg', 'https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg', 'https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg', 'https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg', 'https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg', 'https://cdn.nekos.life/wallpaper/9ru2luBo360.png', 'https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png', 'https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png', 'https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg', 'https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg', 'https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg', 'https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg', 'https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg', 'https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg', 'https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg', 'https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png', 'https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png', 'https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg', 'https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg', 'https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png', 'https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg', 'https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg', 'https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg', 'https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg', 'https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg', 'https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg', 'https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg', 'https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg', 'https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg', 'https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png', 'https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg', 'https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg', 'https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png', 'https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg', 'https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png', 'https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg', 'https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png', 'https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg', 'https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png', 'https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg', 'https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg', 'https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png', 'https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png', 'https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png', 'https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png', 'https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png', 'https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png', 'https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png', 'https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png', 'https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg', 'https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg', 'https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg', 'https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg', 'https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg', 'https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png', 'https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg', 'https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg', 'https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg', 'https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg', 'https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg', 'https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg', 'https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png', 'https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png', 'https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png', 'https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg', 'https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg', 'https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg', 'https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg', 'https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg', 'https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png', 'https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png', 'https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg', 'https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png', 'https://cdn.nekos.life/wallpaper/3db40hylKs8.png', 'https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg', 'https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg', 'https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png', 'https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png', 'https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg', 'https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png', 'https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg', 'https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg', 'https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png', 'https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg', 'https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg', 'https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg', 'https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg', 'https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg', 'https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg', 'https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg', 'https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png', 'https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png', 'https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg', 'https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png', 'https://cdn.nekos.life/wallpaper/58C37kkq39Y.png', 'https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg', 'https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg', 'https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg', 'https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png', 'https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg', 'https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg', 'https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg', 'https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg', 'https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png', 'https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg', 'https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg', 'https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png', 'https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg', 'https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg', 'https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg', 'https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg', 'https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png', 'https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png', 'https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg', 'https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg', 'https://cdn.nekos.life/wallpaper/89MQq6KaggI.png', 'https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
                    let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
                    znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    znn.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '*Wallanime!*', id)
                    break
                case 'googleimage':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    var gis = require('g-i-s')

                    async function ImageSearch(query) {
                        return new Promise((resolve, reject) => {
                            gis(query, logResults)
                            function logResults(error, results) {
                                if (error) {
                                    reject(error)
                                }
                                else {
                                    let url = []
                                    for (let i = 0; i < results.length; i++) {
                                        url.push(decodeURIComponent(JSON.parse(`"${results[i].url}"`)))
                                    }
                                    resolve(url)
                                }
                            }
                        })
                    }


                    ImageSearch(q)
                        .then((hasil) => {
                            var mathlolires = Math.floor(Math.random() * 50) + 1;
                            znn.sendFileFromUrl(from, hasil[mathlolires], `${sender.id}.jpg`, `Hasil: ${q}`, id)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi Kesalahan`, id)
                        })
                    break
                case 'lyric':
                case 'lirik':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    var lyricsFinder = require('lyrics-finder');

                    lyricsFinder(q)
                        .then((hasil) => {
                            znn.reply(from, hasil, id)
                        }).catch((err) => {
                            znn.reply(from, `Lirik ${q} tidak ditemukan`, id)
                        })
                    break
                case 'tinyurl':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    var TinyURL = require('tinyurl');
                    TinyURL.shorten(q, function (res, err) {
                        if (err) return znn.reply(from, `Terjadi kesalahan`, id)
                        znn.reply(from, res, id)
                    })
                    break
                case 'qrcode':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (q.length > 201) return znn.reply(from, `Text melebihi 200`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var QRCode = require('qrcode')

                    QRCode.toDataURL(q)
                        .then((hasil) => {
                            znn.sendFile(from, hasil, `${sender.id}.jpg`, `*${q}*`, id)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi kesalahan`, id)
                        })
                    break
                case 'ebase64':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (q.length > 1024) return znn.reply(from, `Maximal 1.024 Text/String`, id)
                    znn.reply(from, Buffer.from(q).toString('base64'), id)
                    break
                case 'debase64':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (q.length > 1024) return znn.reply(from, `Maximal 1.024 Text/String`, id)
                    znn.reply(from, Buffer.from(q, 'base64').toString('ascii'), id)
                    break
                case 'ehex':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    var convertHex = require('amrhextotext')
                    if (q.length > 1024) return znn.reply(from, `Maximal 1.024 Text/String`, id)
                    znn.reply(from, convertHex.textToHex(q), id)
                    break
                case 'dehex':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    var convertHex = require('amrhextotext')
                    if (q.length > 1024) return znn.reply(from, `Maximal 1.024 Text/String`, id)
                    znn.reply(from, convertHex.hexToUtf8(q), id)
                    break
                case 'instastory':
                case 'igstory':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isGroupMsg) return await znn.reply(from, `Command ini hanya bisa dilakukan diprivate chat dikarenakan akan mengirim semua igstory`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    misc.its(q)
                        .then(async ({ result }) => {
                            for (let i = 0; i < result.story.itemlist.length; i++) {
                                const { urlDownload } = result.story.itemlist[i]
                                await znn.sendFileFromUrl(from, urlDownload, '', 'Nehhh...', id)
                            }
                        })
                    break
                case 'manga':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var Kitsu = require('search-kitsu');
                    var API = new Kitsu();

                    API.searchAnime(q)
                        .then((res) => {
                            var resultsearchmanga = `「 *RESULT-FOUND!* 」

• Judul: ${res[0].attributes.titles.en}
• Id: ${res[0].id}
• Average Rating : ${res[0].attributes.averageRating}
• User Count : ${res[0].attributes.userCount}
• Favorites Count : ${res[0].attributes.favoritesCount}
• Start Date : ${res[0].attributes.startDate}
• Popularity Rank : ${res[0].attributes.popularityRank}
• Rating Rank : ${res[0].attributes.ratingRank}
• Age Rating : ${res[0].attributes.ageRating}
• Minimum Age : ${res[0].attributes.ageRatingGuide}
• Sub Type : ${res[0].attributes.subtype}
• Nsfw: ${res[0].attributes.nsfw ? 'Ya' : 'tidak'}
• Synopsis: ${res[0].attributes.synopsis}
`
                            znn.sendFileFromUrl(from, res[0].posterImage.medium, `${sender.id}.jpg`, resultsearchmanga, id)
                        }).catch((e) => {
                            znn.reply(from, `Manga ${q} tidak di temukan`, id)
                        })
                    break
                case 'google':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    if (q == undefined || q == ' ') return znn.reply(from, `*Hasil Pencarian : ${q}* tidak ditemukan`, id)
                    google({ 'query': q }).then(results => {
                        let vars = `_*Hasil Pencarian : ${q}*_\n`
                        for (let i = 0; i < results.length; i++) {
                            vars += `\n──────────────\n\n• *Judul* : ${results[i].title}\n• *Deskripsi* : ${results[i].snippet}\n• *Link* : ${results[i].link}\n`
                        }
                        znn.reply(from, vars, id);
                    }).catch(e => {
                        znn.reply(from, `Pencarian ${q} tidak ditemukan`)
                    })
                    break
                case 'kbbi':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)

                    request(`https://kbbi.kemdikbud.go.id/entri/${q}`, (error, res, html) => {
                        if (!error && res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            var jdlkbbi = $('body > div.container.body-content > h2').text();
                            var isikbbi = $('body > div.container.body-content > ol > li:nth-child(1)').text().replace('n', '');
                            var resultkbbi = `「 RESULT-FOUND! 」
                          
• Judul: ${jdlkbbi}
• Isi: ${isikbbi.trim()}
`
                            znn.reply(from, resultkbbi, id)
                        } else if (error) {
                            znn.reply(from, `Kbbi ${q} tidak ditemukan`)
                        }
                    })
                    break
                case 'cekspek':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    try {

                        request(`https://www.gsmarena.com/res.php3?sSearch=${q}`, (error, res, html) => {
                            if (!error && res.statusCode == 200) {
                                var $ = cheerio.load(html);
                                $('#review-body > div > ul > li:nth-child(1) > a').each((i, el) => {
                                    var urlnyaa = $(el).attr('href');
                                    var urlimage = $('#review-body > div > ul > li:nth-child(1) > a > img').attr('src');
                                    request(`https://www.gsmarena.com/${urlnyaa}`, (e, res, html) => {
                                        if (!e && res.statusCode == 200) {
                                            var $ = cheerio.load(html);

                                            $('#body > div > div.review-header > div > div.article-info-line.page-specs.light.border-bottom > h1').each((i, el) => {
                                                var judulitem = $(el).text();
                                                var displaytipe = $('#specs-list > table:nth-child(5) > tbody > tr:nth-child(1) > td.nfo').text();
                                                var displaySize = $('#specs-list > table:nth-child(5) > tbody > tr:nth-child(2) > td.nfo').text();
                                                var displayreso = $('#specs-list > table:nth-child(5) > tbody > tr:nth-child(3) > td.nfo').text();
                                                var chipset = $('#specs-list > table:nth-child(6) > tbody > tr:nth-child(2) > td.nfo').text();
                                                var merkos = $('#specs-list > table:nth-child(6) > tbody > tr:nth-child(1) > td.nfo').text();
                                                var merkcpu = $('#specs-list > table:nth-child(6) > tbody > tr:nth-child(3) > td.nfo').text();
                                                var internalspek = $('#specs-list > table:nth-child(7) > tbody > tr:nth-child(2) > td.nfo').text();
                                                var spekkamera = $('#specs-list > table:nth-child(8) > tbody > tr:nth-child(1) > td.nfo').text();
                                                var spekbatre = $('#specs-list > table:nth-child(13) > tbody > tr:nth-child(1) > td.nfo').text();
                                                var allresultspek = `「 *RESULT FOUND!*」

• Spek: ${judulitem}
• Display Tipe: ${displaytipe}
• Display Size: ${displaySize}
• Display Resolusi: ${displayreso}
• Chipset: ${chipset}
• OS: ${merkos}
• Cpu: ${merkcpu}
• Internal: ${internalspek}
• Kamera: ${spekkamera}
• Batterai: ${spekbatre}
`
                                                znn.sendFileFromUrl(from, urlimage, `${sender.id}.jpg`, allresultspek, id)
                                            })
                                        }
                                    })
                                })

                            }
                        })
                    } catch (e) {
                        znn.reply(from, `Spek ${q} tidak ditemukan`, id)
                    }
                    break
                case 'ytstalk':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    async function ytSearch(username) {
                        var ytss = await scrapeYt.search(username)
                        return ytss;
                    }

                    ytSearch(q)
                        .then((res) => {
                            ytch.getChannelInfo(res[0].id, 0).then((ress) => {
                                var resultchannelinfo = `</ RESULT-FOUND! >
                                
• Channel: ${ress.author}
• Subscriber: ${convertBalanceToString(ress.subscriberCount)}
• ChannelVerified: ${res.isVerified ? 'Yes' : 'No'}
• isFamilyFriendly: ${res.isFamilyFriendly ? 'Yes' : 'No'}
• Description: ${ress.description}
• Link: ${ress.authorUrl}`
                                znn.sendFileFromUrl(from, ress.authorThumbnails[2].url, `${sender.id}.png`, resultchannelinfo.trim(), id)
                            }).catch((e) => {
                                znn.reply(from, `Data channel tidak ditemukan`, id)
                            })
                        }).catch((e) => {
                            znn.reply(from, `Data channel tidak ditemukan`, id)
                        })
                    break
                case 'cuaca':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    var weather = require('weather-js');

                    weather.find({ search: q, degreeType: 'F' }, function (err, res) {
                        if (err) return znn.reply(from, `Cuaca di ${q} tidak ditemukan!`, id)
                        var resultcuaca = `RESULT
  
• Daerah: ${res[0].location.name}
• Latitude: ${res[0].location.lat}
• Longitude: ${res[0].location.long}
• TimeZone: ${res[0].location.timezone}
• Temperature: ${res[0].current.temperature}°
• Tanggal: ${res[0].current.date}
• Waktu: ${res[0].current.observationtime}
• Hari: ${res[0].current.day}
• Cuaca: ${res[0].current.skytext}`
                        znn.reply(from, resultcuaca, id)
                    });
                    break
                case 'ipgeolocation':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    var ip2location = require('ip-to-location');

                    ip2location.fetch(q)
                        .then(res => {
                            var resultipgeo = `*RESULT-FOUND!*

• IpAddress: ${q}
• Code Negara: ${res.country_code}
• Negara: ${res.country_name}
• Region Code: ${res.region_code}
• Region Name: ${res.region_name}
• City: ${res.city}
• Isp: ${res.isp}
• Zip Code: ${res.zip_code}
• TimeZone: ${res.time_zone}
• Latitude: ${res.latitude}
• Longitude: ${res.longitude}
`
                            znn.reply(from, resultipgeo, id)
                        }).catch((e) => {
                            znn.reply(from, `IP ${q} tidak ditemukan!`, id)
                        })
                    break
                case 'encodebinary':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (q.length > 1024) return await znn.reply(from, `Gagal membuat karena Teks melebihi 1.024`, id)
                    try {
                        function encode(char) {
                            return char.split("").map(str => {
                                const converted = str.charCodeAt(0).toString(2);
                                return converted.padStart(8, "0");
                            }).join(" ")
                        }
                        znn.reply(from, `「 *ENCODE TEKS TO BINARY* 」

*FROM*
• ${q}
                    
*TO*
• ${encode(q)}`, id)
                    } catch (err) {
                        console.log(err)
                        znn.reply(from, `Something err`, id)
                    }
                    break
                case 'decodebinary':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (q.length > 1024) return await znn.reply(from, `Gagal membuat karena Teks melebihi 1.024`, id)
                    try {
                        function decode(char) {
                            return char.split(" ").map(str => String.fromCharCode(Number.parseInt(str, 2))).join("");
                        }
                        znn.reply(from, `「 *DECODE BINARY TO TEKS* 」

*FROM*
• ${q}
                        
*TO*
• ${decode(q)}`, id)
                    } catch (err) {
                        console.log(err)
                        znn.reply(from, 'Something err', id)
                    }
                    break
                case 'ramalpasangan':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah. contoh : /ramalpasangan Fauzann | nama ceweklu/cowoklu :)`, id)
                    if (!q.includes('|')) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    var namayouu = q.substring(0, q.indexOf('|') - 1)
                    var namashee = q.substring(q.lastIndexOf('|') + 2)
                    axios.get(`https://www.primbon.com/kecocokan_nama_pasangan.php?nama1=${namayouu}&nama2=${namashee}&proses=+Submit%21+`)
                        .then(({ data }) => {
                            var $ = cheerio.load(data)
                            var progress = 'https://www.primbon.com/' + $('#body > img').attr('src')
                            var isi = $('#body').text().split(namashee)[1].replace('< Hitung Kembali', '').split('\n')[0]
                            var posi = isi.split('Sisi Negatif Anda: ')[0].replace('Sisi Positif Anda: ', '')
                            var nega = isi.split('Sisi Negatif Anda: ')[1]
                            var res = {
                                result: {
                                    nama1: namayouu,
                                    nama2: namashee,
                                    thumb: progress,
                                    positif: posi,
                                    negatif: nega
                                }
                            }
                            var resultramalan = `「 *HASIL-RAMALAN* 」

• Nama: ${res.result.nama1}
• Pasangan: ${res.result.nama2}
• Positif: ${res.result.positif}
• Negatif: ${res.result.negatif}
`
                            znn.sendFileFromUrl(from, res.result.thumb, `${sender.id}.jpg`, resultramalan, id)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi Kesalahan`, id)
                        })
                    break
                case 'tts':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    try {
                        var dataBhs = args[0]
                        const ttsHZ = require('node-gtts')(dataBhs)
                        var dataText = body.slice(8)
                        if (dataText === '') return znn.reply(from, 'Masukkan teksnya', id)
                        if (dataText.length > 500) return znn.reply(from, 'Teks terlalu panjang!', id)
                        var dataBhs = body.slice(5, 7)
                        ttsHZ.save('./temp/tts.mp3', dataText, function () {
                            znn.sendPtt(from, './temp/tts.mp3', id)
                        })
                    } catch (err) {
                        znn.reply(from, `Format salah! yang benar adalah\nContoh: ${prefix}tts id cek`, id)
                    }
                    break
                case 'flip':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    const sides = Math.floor(Math.random() * 2) + 1
                    if (sides == 1) {
                        znn.sendStickerfromUrl(from, 'https://i.ibb.co/LJjkVK5/heads.png', id)
                    } else {
                        znn.sendStickerfromUrl(from, 'https://i.ibb.co/wNnZ4QD/tails.png', id)
                    }
                    break
                case 'tomp3':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    if ((isMedia && isVideo || isQuotedVideo)) {
                        await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                        const encryptMedia = isQuotedVideo ? quotedMsg : message
                        const _mimetype = isQuotedVideo ? quotedMsg.mimetype : mimetype
                        console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
                        const mediaData = await decryptMedia(encryptMedia, uaOverride)
                        const temp = './temp'
                        const name = new Date() * 1
                        const fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
                        const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                        fs.writeFile(fileInputPath, mediaData, (err) => {
                            if (err) return console.error(err)
                            ffmpeg(fileInputPath)
                                .format('mp3')
                                .on('start', (commandLine) => {
                                    //console.log(color('[FFmpeg]', 'green'), commandLine) Nyepam su
                                })
                                .on('progress', (progress) => {
                                    //console.log(color('[FFmpeg]', 'green'), progress) Nyepam ugha
                                })
                                .on('end', async () => {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    await znn.sendFile(from, fileOutputPath, 'audio.mp3', '', id)
                                    setTimeout(() => {
                                        fs.unlinkSync(fileInputPath)
                                        fs.unlinkSync(fileOutputPath)
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                    } else {
                        await znn.reply(from, `Reply videonya kaka dengan caption ${prefix}tomp3`, id)
                    }
                    break
                case 'playstore':
                case 'ps':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isPremium) return znn.reply(from, `Maaf kak ${pushname.substring(0, 10)}\nPerintah ini hanya bisa digunakan user premium!`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    var gplay = require('google-play-scraper');

                    gplay.search({
                        term: q,
                        num: 1
                    })
                        .then((hasil) => {
                            var resultpstore = `「 *PLAYSTORE 」
  
• Judul: ${hasil[0].title}
• Packname: ${hasil[0].appId}
• Developer: ${hasil[0].developer}
• Summary: ${hasil[0].summary}
• Ratings: ${hasil[0].scoreText}
• Link: ${hasil[0].url}
`
                            znn.sendFileFromUrl(from, hasil[0].icon, `${sender.id}.jpg`, resultpstore, id)
                        }).catch((err) => {
                            znn.reply(from, `Hasil ${q} tidak ditemukan`, id)
                        })
                    break
                case 'math':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    try {
                        if (typeof mathjs.evaluate(q) !== 'number') {
                            await znn.reply(from, `gunakan angka`, id)
                        } else {
                            await znn.reply(from, `*「 MATH 」*\n\n${q} = ${mathjs.evaluate(q)}`, id)
                        }
                    } catch (err) {
                        znn.reply(from, 'Terjadi Kesalahan', id)
                    }
                    break
                case 'partner':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isGroupMsg) return await znn.reply(from, 'Command ini tidak bisa digunakan di dalam grup!\nKarena saya menjaga privasi seseorang untuk tidak diumbar!', id)
                    await znn.reply(from, 'Looking for a partner...', id)
                    await znn.sendContact(from, register.getRegisteredRandomId(_registered))
                    await znn.sendText(from, `Partner found: 🙉\n*${prefix}next* — find a new partner`, id)
                    break
                case 'next':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isGroupMsg) return await znn.reply(from, 'Command ini tidak bisa digunakan di dalam grup!\nKarena saya menjaga privasi seseorang untuk tidak diumbar!', id)
                    await znn.reply(from, 'Looking for a partner...', id)
                    await znn.sendContact(from, register.getRegisteredRandomId(_registered))
                    await znn.sendText(from, `Partner found: 🙉\n*${prefix}next* — find a new partner`, id)
                    break
                case 'tiktokstalk':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    var TikTokScraper = require('tiktok-scraper');

                    TikTokScraper.getUserProfileInfo(q)
                        .then((hasil) => {
                            var resulttiktokstalk = `「 *TIKTOK-STALK* 」

• Username: ${hasil.user.nickname}
• Follower: ${hasil.stats.followerCount}
• Following: ${hasil.stats.followingCount}
• Private: ${hasil.user.privateAccount ? 'Ya' : 'Tidak'}
`
                            znn.sendFileFromUrl(from, hasil.user.avatarMedium, `${sender.id}.jpg`, resulttiktokstalk, id)
                        }).catch((err) => {
                            znn.reply(from, `Maaf akun ${q} tidak ditemukan!`, id)
                        })
                    break
                case 'soundcloud':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return

                    async function scsearch(query) {
                        return new Promise((resolve, reject) => {
                            fetch(`https://api-v2.soundcloud.com/search?q=${query}&variant_ids=&facet=model&user_id=633430-613432-186952-974126&client_id=Jso9j707fOmQVz48JLun3FOSX7ir5SPH&limit=20&offset=0&linked_partitioning=1&app_version=1619787272&app_locale=en`, {
                                "headers": {
                                    "accept": "application/json, text/javascript, */*; q=0.01",
                                    "accept-language": "en-US,en;q=0.9",
                                    "cache-control": "no-cache",
                                    "pragma": "no-cache",
                                    "sec-fetch-dest": "empty",
                                    "sec-fetch-mode": "cors",
                                    "sec-fetch-site": "same-site",
                                    "sec-gpc": "1"
                                },
                                "referrer": "https://soundcloud.com/",
                                "referrerPolicy": "origin",
                                "body": null,
                                "method": "GET",
                                "mode": "cors"
                            }).then((res) => res.json())
                                .then((json) => {
                                    var resultsc = [];
                                    for (let i = 0; i < json.collection.length; i++) {
                                        resultsc.push({
                                            judul: json.collection[i].title ? json.collection[i].title : 'Tidak ada keterangan',
                                            link: json.collection[i].permalink_url,
                                            imagelink: json.collection[i].artwork_url ? json.collection[i].artwork_url : 'Tidak ada keterangan',
                                            trackformat: json.collection[i].track_format ? json.collection[i].track_format : 'Tidak ada keterangan',
                                            likeCount: json.collection[i].likes_count ? json.collection[i].likes_count : 'Tidak ada keterangan',
                                            playbackcount: json.collection[i].playback_count ? json.collection[i].playback_count : 'Tidak ada keterangan',
                                            urn: json.collection[i].urn ? json.collection[i].urn : 'Tidak ada keterangan',
                                            uri: json.collection[i].uri ? json.collection[i].uri : 'Tidak ada keterangan'
                                        })
                                    }
                                    resolve(resultsc)
                                }).catch(reject)
                        })
                    }

                    scsearch(q).then((data) => {
                        const generatesc = data[Math.floor(Math.random() * (data.length))]
                        axios.get(`https://soundcloudtomp3.app/download/?url=${generatesc.link}`).then((res) => {
                            var $ = cheerio.load(res.data)
                            var urlscdown = $('#main > div > div > div:nth-child(7) > div.col-md-8.order-3 > table > tbody > tr:nth-child(2) > td > a').attr('href');
                            const resultsc = `</ *RESULT-FOUND! >

• Judul: ${generatesc.judul}
• TrackFormat: ${generatesc.trackformat}
• LikeCount: ${generatesc.likeCount}
• PlaybackCount: ${generatesc.playbackcount}
• URN: ${generatesc.urn}
• URI: ${generatesc.uri}

_Mohon tunggu, Audio sedang dikirim...._`

                            znn.reply(from, resultsc, id)
                            znn.sendFileFromUrl(from, urlscdown, `${sender.id}.mp3`, ``)
                            limitAdd(serial)
                        }).catch((e) => {
                            znn.reply(from, `Gagal dalam pengambilan data`, id)
                        })
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'playaudio':
                    var yts = require('yt-search')
                    var ytdl = require('ytdl-core')
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isPremium) return znn.reply(from, `Maaf kak ${pushname.substring(0, 10)}\nPerintah ini hanya bisa digunakan user premium!`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    nyari = await yts(q)
                    pe = nyari.all
                    randm = pe[Math.floor(Math.random() * pe.length)];
                    playpid = await ytdl.getInfo(randm.videoId)
                    audio = ytdl.filterFormats(playpid.formats, 'audioonly')
                    video = ytdl.filterFormats(playpid.formats, 'audioandvideo')
                    verif = playpid.videoDetails.author.verifed ? "Terverifikasi" : "Tidak terverifikasi"
                    thumbnails = playpid.videoDetails.thumbnails
                    thumb = thumbnails[thumbnails.length - 1].url
                    if (playpid.videoDetails.lengthSeconds > 601) return znn.reply(from, `Maaf ${pushname.substring(0, 10)}, Durasi audio melebihi 10 Menit`, id)
                    znn.sendFileFromUrl(from, thumb, 'pp.png', `「 *NOW PLAYING AUDIO!* 」

• Judul: ${playpid.videoDetails.title}
• Upload: ${playpid.videoDetails.uploadDate}
• Views: ${playpid.videoDetails.viewCount}

00:18ㅤ ━━━━⬤───────ㅤ ${display(playpid.videoDetails.lengthSeconds)}

            ⇆    ◁     ||     ▷    ↺

Media sedang dikirim, mohon tunggu...
`, id)
                    znn.sendFileFromUrl(from, audio[0].url, `${sender.id}.mp3`, `Nih gan`)
                    break
                case 'playvideo':
                    var yts = require('yt-search')
                    var ytdl = require('ytdl-core')
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isPremium) return znn.reply(from, `Maaf kak ${pushname.substring(0, 10)}\nPerintah ini hanya bisa digunakan user premium!`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    var nyari = await yts(q)
                    var pe = nyari.all
                    var randm = pe[Math.floor(Math.random() * pe.length)];
                    var playpid = await ytdl.getInfo(randm.videoId)
                    audio = ytdl.filterFormats(playpid.formats, 'audioonly')
                    video = ytdl.filterFormats(playpid.formats, 'audioandvideo')
                    var verif = playpid.videoDetails.author.verifed ? "Terverifikasi" : "Tidak terverifikasi"
                    thumbnails = playpid.videoDetails.thumbnails
                    thumb = thumbnails[thumbnails.length - 1].url
                    if (playpid.videoDetails.lengthSeconds > 601) return znn.reply(from, `Maaf ${pushname.substring(0, 10)}, Durasi video melebihi 10 Menit`, id)
                    znn.sendFileFromUrl(from, thumb, 'pp.png', `「 *NOW PLAYING VIDEO!* 」

• Judul: ${playpid.videoDetails.title}
• Upload: ${playpid.videoDetails.uploadDate}
• Views: ${convertBalanceToString(playpid.videoDetails.viewCount)}

00:18ㅤ━━━━⬤───────ㅤ${display(playpid.videoDetails.lengthSeconds)}

            ⇆    ◁     ||     ▷    ↺

Media sedang dikirim, mohon tunggu...`, id)
                    znn.sendFileFromUrl(from, video[0].url, 'pp.mp4', '', id)
                    break
				case 'play':
                if (!isRegistered) return await znn.reply(from, ind.notRegistered(), id)
                if (!q) return await znn.reply(from, `CONTOH : /play outbreaker`, id)
                if (isLimit(serial)) return
                await limitAdd(serial)
                await znn.reply(from, ind.wait(), id)
                misc.ytPlay(q)
                    .then(async ({ result }) => {
                        if (Number(result.size.split(' MB')[0]) >= 15.0) return znn.sendFileFromUrl(from, result.image, `${result.title}.jpg`, `Judul: ${result.title}\nSize: *${result.size}*\n\nGagal, Maksimal video size adalah *10MB*!`, id)
                        await znn.sendFileFromUrl(from, result.image, `${result.title}.jpg`, ind.ytPlay(result), id)
                        const responses = await fetch(result.mp3)
                        const buffer = await responses.buffer()
                        await fs.writeFile(`./temp/ytplay_${sender.id}.mp3`, buffer)
                        await znn.sendFile(from, `./temp/ytplay_${sender.id}.mp3`, `ytplay_${sender.id}`, id)
                        console.log('Success sending Play MP3!')
                        fs.unlinkSync(`./temp/ytplay_${sender.id}.mp3`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await znn.reply(from, 'Error!', id)
                    })
                break
			    case 'ytsearch': case 'yts': case 'youtubesearch':
                if (!isRegistered) return await znn.reply(from, ind.notRegistered(), id)
                if (!q) return await znn.reply(from, ind.wrongFormat(), id)
			    if (isGroupMsg) return await znn.reply(from, `Command ini hanya bisa dilakukan diprivate chat dikarenakan akan mengirim semua ytsearch`, id)
                if (isLimit(serial)) return
                await limitAdd(serial)
                await znn.reply(from, ind.wait(), id)
                try {
                    misc.ytSearch(q)
                        .then(async ({ result }) => {
                            for (let i = 0; i < 5; i++) {
                                const { urlyt, image, title, channel, duration, views } = await result[i]
                                await znn.sendFileFromUrl(from, image, `${title}.jpg`, ind.ytResult(urlyt, title, channel, duration, views), id)
                                console.log('Success sending YouTube results!')
                            }
                        })
                } catch (err) {
                    console.error(err)
                    await znn.reply(from, 'Error!', id)
                }
                break
                case 'otakulast':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    request(`https://otakudesu.moe/ongoing-anime/`, function (err, res, html) {
                        if (!err && res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            const dataArrotakuon = [];
                            $('div.detpost').each((i, el) => {
                                const judulotakuon = $(el).find('div > a > div > h2').text().trim();
                                const epsotakuon = $(el).find('div.epz').text().trim();
                                const rilisdayotaku = $(el).find('div.epztipe').text().trim();
                                const tanggalotaku = $(el).find('div.newnime').text().trim();
                                const urlotakuon = $(el).find('div.thumb > a').attr('href');
                                dataArrotakuon.push({
                                    judul: judulotakuon,
                                    episode: epsotakuon,
                                    rilis: rilisdayotaku + ' ' + tanggalotaku,
                                    link: urlotakuon
                                })
                            })
                            let resultotakuon = `</ *OTAKU-LAST!* >\n\n`
                            for (let i = 0; i < dataArrotakuon.length; i++) {
                                resultotakuon += `• Judul: ${dataArrotakuon[i].judul}\n• Episode: ${dataArrotakuon[i].episode}\n• Tanggal: ${dataArrotakuon[i].rilis}\n• Link: ${dataArrotakuon[i].link}\n\n`
                            }
                            znn.reply(from, resultotakuon.trim(), id)
                        } else {
                            znn.reply(from, 'Gagal dalam pengambilan data', id)
                        }
                    })
                    break
                case 'nikchecker':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    let digits_onlys1 = string => [...string].every(c => '0123456789'.includes(c));
                    if (digits_onlys1(q) == false) return await znn.reply(from, `Tidak ada huruf di nik!`, id)
                    if (digits_onlys1(q) == true) {
                        try {
                            var nikchecker = require("nik-parse-api");

                            var ccnik = nikchecker.nikParse(q)
                            var resultnikchecker = `*RESULT-FOUND!*

• Nik Valid: ${ccnik.pesan}
• Nik: ${ccnik.data.nik}
• Kelamin: ${ccnik.data.kelamin}
• Tgl Lahir: ${ccnik.data.lahir}
• Provinsi: ${ccnik.data.provinsi}
• KotaKab: ${ccnik.data.kotakab}
• Kecamatan: ${ccnik.data.kecamatan}
• Kode Pos: ${ccnik.data.tambahan.kodepos}
• Umur: ${ccnik.data.tambahan.usia}
• Ultah: ${ccnik.data.tambahan.ultah}
• Zodiak: ${ccnik.data.tambahan.zodiak}
• Uniqcode: ${ccnik.data.uniqcode}
• Pasaran: ${ccnik.data.tambahan.pasaran}
`
                            znn.reply(from, resultnikchecker, id)
                            limitAdd(serial)
                        } catch (e) {
                            znn.reply(from, `Nik ${q} tidak ditemukan`, id)
                        }
                    }
                    break
                case 'cekgrup':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    if (!isUrl(url) && !url.includes('chat.whatsapp.com')) return await znn.reply(from, `URL tidak valid!`, id)
                    function convertStampDate(unixtimestamp) {
                        var months_arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                        var date = new Date(unixtimestamp * 1000);
                        var year = date.getFullYear();
                        var month = months_arr[date.getMonth()];
                        var day = date.getDate();
                        var hours = date.getHours();
                        var minutes = "0" + date.getMinutes();
                        var seconds = "0" + date.getSeconds();
                        var fulldate = month + ' ' + day + '-' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                        var convdataTime = month + ' ' + day;
                        return fulldate;
                    }
                    znn.inviteInfo(q)
                        .then((res) => {
                            znn.reply(from, `JudulGC: ${res.subject}\nJmlh Mmber: ${res.size}\nCreate At: ${convertStampDate(res.creation)}\nOwnerGC: wa.me/${res.owner.replace('@c.us', '')}\nDeskripsi: ${res.desc}`, id)
                            limitAdd(serial)
                        }).catch((e) => {
                            znn.reply(from, `Bot tidak bisa membaca link tersebut karena telah di setel ulang!`, id)
                        })
                    break
                case 'ytmp4':
                    var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    if (!isUrl(url) && !url.includes('youtu.be')) return await znn.reply(from, `URL tidak valid!`, id)

                    function post(url, formdata) {
                        return fetch(url, {
                            method: 'POST',
                            headers: {
                                accept: "*/*",
                                'accept-language': "en-US,en;q=0.9",
                                'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
                            },
                            body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
                        })
                    }

                    (async (url) => {
                        var url = url
                        await post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                            url,
                            q_auto: 0,
                            ajax: 1
                        }).then((data) => {
                            var mine = data.json()
                            mine.then(console.log)
                        })
                    });

                    function ytv(url) {
                        return new Promise((resolve, reject) => {
                            if (ytIdRegex.test(url)) {
                                let ytId = ytIdRegex.exec(url)
                                url = 'https://youtu.be/' + ytId[1]
                                post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                                    url,
                                    q_auto: 0,
                                    ajax: 1
                                })
                                    .then(res => res.json())
                                    .then(res => {
                                        console.log('Scraping Ytmp4')
                                        var document = (new JSDOM(res.result)).window.document
                                        var yaha = document.querySelectorAll('td')
                                        var filesize = yaha[yaha.length - 23].innerHTML
                                        var id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                                        var thumb = document.querySelector('img').src
                                        var title = document.querySelector('b').innerHTML

                                        post('https://www.y2mate.com/mates/en60/convert', {
                                            type: 'youtube',
                                            _id: id[1],
                                            v_id: ytId[1],
                                            ajax: '1',
                                            token: '',
                                            ftype: 'mp4',
                                            fquality: 360
                                        })
                                            .then(res => res.json())
                                            .then(res => {
                                                let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                                                resolve({
                                                    dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                                    thumb,
                                                    title,
                                                    filesizeF: filesize,
                                                    filesize: KB
                                                })
                                            }).catch(reject)
                                    }).catch(reject)
                            } else reject('URL INVALID')
                        })
                    }

                    ytv(q)
                        .then((hasil) => {
                            var TinyURL = require('tinyurl');
                            TinyURL.shorten(hasil.dl_link, function (res, err) {
                                if (Number(hasil.filesizeF.split(' MB')[0]) >= 15.0) return znn.sendFileFromUrl(from, hasil.thumb, `${sender.id}.jpg`, `• Judul: ${hasil.title}\n• Size: ${hasil.filesizeF}\n• Link: ${res}\n\n_Karena Size file melebihi 15mb, Silahkan download dengan link yang sudah di siapkan_`, id)
                                znn.sendFileFromUrl(from, hasil.thumb, `${sender.id}.jpg`, `「 *RESULT-FOUND!* 」\n\n• Judul: ${hasil.title}\n• Size: ${hasil.filesizeF}`, id)
                                znn.sendFileFromUrl(from, hasil.dl_link, `${sender.id}.mp4`, `Nihhh`, id)
                            })
                        })
                    break
                case 'fbdl-mp3':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!isUrl(url) && !url.includes('facebook.com')) return await znn.reply(from, `URL tidak valid!`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    fetch("https://www.getfvid.com/downloader", {
                        "credentials": "include",
                        "headers": {
                            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
                            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                            "Accept-Language": "en-US,en;q=0.5",
                            "Content-Type": "application/x-www-form-urlencoded",
                            "Upgrade-Insecure-Requests": "1",
                            "Pragma": "no-cache",
                            "Cache-Control": "no-cache"
                        },
                        "referrer": "https://www.getfvid.com/",
                        "body": `url=${q}`,
                        "method": "POST",
                        "mode": "cors"
                    }).then((data) => data.text())
                        .then((text) => {
                            const $ = cheerio.load(text)
                            const urldlfbmp3 = $('.btns-download > p:nth-child(3) > a:nth-child(1)').attr('href');
                            znn.sendFileFromUrl(from, urldlfbmp3, `${sender.id}.mp3`, ``)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi kesalahan`, id)
                        })
                    break
                case 'fbdl-mp4':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!isUrl(url) && !url.includes('facebook.com')) return await znn.reply(from, `URL tidak valid!`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    fetch("https://www.getfvid.com/downloader", {
                        "credentials": "include",
                        "headers": {
                            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
                            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                            "Accept-Language": "en-US,en;q=0.5",
                            "Content-Type": "application/x-www-form-urlencoded",
                            "Upgrade-Insecure-Requests": "1",
                            "Pragma": "no-cache",
                            "Cache-Control": "no-cache"
                        },
                        "referrer": "https://www.getfvid.com/",
                        "body": `url=${q}`,
                        "method": "POST",
                        "mode": "cors"
                    }).then((data) => data.text())
                        .then((text) => {
                            const $ = cheerio.load(text)
                            const urldlfbmp4 = $('.btns-download > p:nth-child(2) > a:nth-child(1)').attr('href');
                            const captionfbdl = $('.card-title > a:nth-child(1)').text().trim();
                            znn.sendFileFromUrl(from, urldlfbmp4, `${sender.id}.mp4`, `Caption: ${captionfbdl}`, id)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi kesalahan`, id)
                        })
                    break
                case 'sfiledl':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!isUrl(url) && !url.includes('sfile.mobi')) return await znn.reply(from, `URL tidak valid!`, id)
                    if (isLimit(serial)) return
                    request(q, function (err, res, html) {
                        if (!err && res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            var namesfile = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(2) > b').text().trim();
                            var uploaderfile = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(4) > a:nth-child(2)').text().trim();
                            var sfileuploadat = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(5)').text().trim();
                            var sfiletipe = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(3)').text().trim();
                            var sfiletotaldown = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(6)').text().trim();
                            var sfiledesk = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(7) > center > h1').text().trim();
                            var sfileurldownload = $('#download').attr('href');
                            var namasfile = $('body > div.w3-row-padding.w3-container.w3-white > div > center > span > img').attr('alt')
                            var sfilesize = $('#download').text().trim();
                            var resultsfile = `*SFILE-DOWNLOADER*

• Judul: ${namesfile}
• Uplaoder: ${uploaderfile}
• UploadAt: ${sfileuploadat.replace('- Uploaded: ', '')}
• FileType: ${sfiletipe.replace('- ', '')}
• Size: ${sfilesize.replace('Download File ', '')}
• Total Download: ${sfiletotaldown.replace('- Downloads: ', '')}
• Deskripsi: ${sfiledesk}

_Media akan dikirim..._`
                            znn.reply(from, resultsfile, id)
                            znn.sendFileFromUrl(from, sfileurldownload, `${namasfile}`, ``)
                            limitAdd(serial)
                        } else {
                            znn.reply(from, `Terjadi kesalahan!`, id)
                        }
                    })
                    break
                case 'sfilelast':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return

                    request(`https://sfile.mobi/uploads.php`, function (err, res, html) {
                        if (!err && res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            var resultsfilemobi = []
                            $('div.list').each((i, el) => {
                                var namesfilelist = $(el).find('a').text().trim();
                                var keterangansfile = $(el).find('small').text().trim();
                                var urlsfilee = $(el).find('a').attr('href')
                                resultsfilemobi.push({
                                    Judul: namesfilelist,
                                    Ket: keterangansfile,
                                    Link: urlsfilee
                                })
                            })
                            // jgn nanya knpa gk pake loop?, soalnya ada 21 index,, tpi di index 21 itu null/kosong:v
                            var ArrSfile = `</ *SFILE - LAST* >

• Judul: ${resultsfilemobi[0].Judul}
• Ket: ${resultsfilemobi[0].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[0].Link}

• Judul: ${resultsfilemobi[1].Judul}
• Ket: ${resultsfilemobi[1].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[1].Link}

• Judul: ${resultsfilemobi[2].Judul}
• Ket: ${resultsfilemobi[2].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[2].Link}

• Judul: ${resultsfilemobi[3].Judul}
• Ket: ${resultsfilemobi[3].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[3].Link}

• Judul: ${resultsfilemobi[4].Judul}
• Ket: ${resultsfilemobi[4].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[4].Link}

• Judul: ${resultsfilemobi[5].Judul}
• Ket: ${resultsfilemobi[5].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[5].Link}

• Judul: ${resultsfilemobi[6].Judul}
• Ket: ${resultsfilemobi[6].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[6].Link}

• Judul: ${resultsfilemobi[7].Judul}
• Ket: ${resultsfilemobi[7].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[7].Link}

• Judul: ${resultsfilemobi[8].Judul}
• Ket: ${resultsfilemobi[8].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[8].Link}

• Judul: ${resultsfilemobi[9].Judul}
• Ket: ${resultsfilemobi[9].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[9].Link}

• Judul: ${resultsfilemobi[10].Judul}
• Ket: ${resultsfilemobi[10].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[10].Link}

• Judul: ${resultsfilemobi[11].Judul}
• Ket: ${resultsfilemobi[11].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[11].Link}

• Judul: ${resultsfilemobi[12].Judul}
• Ket: ${resultsfilemobi[12].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[12].Link}

• Judul: ${resultsfilemobi[13].Judul}
• Ket: ${resultsfilemobi[13].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[13].Link}

• Judul: ${resultsfilemobi[14].Judul}
• Ket: ${resultsfilemobi[14].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[14].Link}

• Judul: ${resultsfilemobi[15].Judul}
• Ket: ${resultsfilemobi[15].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[15].Link}

• Judul: ${resultsfilemobi[16].Judul}
• Ket: ${resultsfilemobi[16].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[16].Link}

• Judul: ${resultsfilemobi[17].Judul}
• Ket: ${resultsfilemobi[17].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[17].Link}

• Judul: ${resultsfilemobi[18].Judul}
• Ket: ${resultsfilemobi[18].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[18].Link}

• Judul: ${resultsfilemobi[19].Judul}
• Ket: ${resultsfilemobi[19].Ket.replace(', ', '\n• ')}
• Link: ${resultsfilemobi[19].Link}`
                            znn.reply(from, ArrSfile.trim(), id)
                            limitAdd(serial)
                        } else {
                            znn.reply(from, `Gagal dalam mengambil data!`, id)
                        }
                    })
                    break
                case 'dork':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    google({ 'query': q, 'disableConsole': true })
                        .then((res) => {
                            var resultdork = `</ *RESULT-DORK* >\n\n`
                            for (let i = 0; i < res.length; i++) {
                                resultdork += `${i + 1}. ${res[i].link}\n`
                            }
                            znn.reply(from, resultdork.trim(), id)
                        }).catch((e) => {
                            znn.reply(from, `Gagal dalam pengambilan data!`, id)
                        })
                    break
                case 'tiktokmusic':
                case 'tiktokmusik':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!isUrl(url) && !url.includes('tiktok.com')) return await znn.reply(from, `URL tidak valid!`, id)
                    if (isLimit(serial)) return

                    function ssstik(url) {
                        return new Promise((resolve, reject) => {
                            var BASEurl = 'https://ssstik.io'
                            axios.request({
                                url: BASEurl,
                                method: 'get',
                                headers: {
                                    'cookie': '__cfduid=deb9cec7a40793d1abe009bb9961a92d41617497572; PHPSESSID=7ivsp9hc6askg1qocpi8lfpn7n; __cflb=02DiuEcwseaiqqyPC5q2cQqNGembhyZ5QaychuqFzev83; _ga=GA1.2.131585469.1617497575; _gid=GA1.2.1629908100.1617497575; _gat_UA-3524196-6=1',
                                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
                                    'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"'
                                }
                            })
                                .then(({ data }) => {
                                    var $ = cheerio.load(data)
                                    var urlPost = $('form[data-hx-target="#target"]').attr('data-hx-post')
                                    var tokenJSON = $('form[data-hx-target="#target"]').attr('include-vals')
                                    var tt = tokenJSON.replace(/'/g, '').replace('tt:', '').split(',')[0]
                                    var ts = tokenJSON.split('ts:')[1]
                                    // console.log({ pst: urlPost, tt: tt, ts: ts })
                                    var config = {
                                        headers: {
                                            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                                            'cookie': '__cfduid=deb9cec7a40793d1abe009bb9961a92d41617497572; PHPSESSID=7ivsp9hc6askg1qocpi8lfpn7n; __cflb=02DiuEcwseaiqqyPC5q2cQqNGembhyZ5QaychuqFzev83; _ga=GA1.2.131585469.1617497575; _gid=GA1.2.1629908100.1617497575; _gat_UA-3524196-6=1',
                                            'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
                                            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
                                        },
                                        dataPost: {
                                            'id': url,
                                            'locale': 'en',
                                            'tt': tt,
                                            'ts': ts
                                        }
                                    }
                                    axios.post(BASEurl + urlPost, qs.stringify(config.dataPost), { headers: config.headers })
                                        .then(({ data }) => {
                                            var $ = cheerio.load(data)
                                            var result = {
                                                status: true,
                                                text: $('div > p.maintext').text(),
                                                pic: $('div > img').attr('src'),
                                                videonowm: BASEurl + $('div > a.without_watermark').attr('href'),
                                                videonowm2: $('div > a.without_watermark_direct').attr('href'),
                                                music: $('div > a.music').attr('href')
                                            }
                                            if ($('div > a.without_watermark_direct').attr('href') !== undefined) {
                                                resolve(result)
                                            } else {
                                                reject({ status: false, message: 'Tautan ini telah terunduh sebelumnya' })
                                            }
                                        })
                                        .catch(reject)
                                })
                                .catch(reject)
                        })
                    }

                    ssstik(q)
                        .then((res) => {
                            znn.sendFileFromUrl(from, res.pic, `${sender.id}.jpg`, `</ TIKTOKDL-MUSIC >\n\nCaption: ${res.text}\n\n_Audio sedang dikirim..._`, id)
                            znn.sendFileFromUrl(from, res.music, `${sender.id}.mp3`, ``)
                            limitAdd(serial)
                        }).catch((e) => {
                            znn.reply(from, `Terjadi kesalahan saat pengambilan data!`, id)
                        })
                    break
                case 'tiktokdd.l':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!isUrl(url) && !url.includes('tiktok.com')) return await znn.reply(from, `URL tidak valid!`, id)
                    if (isLimit(serial)) return

                    async function TiktokDownload(url) {
                        var geturl = await fetch("https://keeptiktok.com/?lang=ID", {
                            method: 'GET',
                            headers: {
                                "User-Agent": "GoogleBot"
                            }
                        })
                        var caritoken = await geturl.text()
                        var hasilcookie = geturl.headers.get('set-cookie').split(',').map(v => cookie.parse(v)).reduce((a, c) => { return { ...a, ...c } }, {})
                        hasilcookie = {
                            _cfduid: hasilcookie._cfduid,
                            PHPSESSID: hasilcookie.PHPSESSID
                        }
                        hasilcookie = Object.entries(hasilcookie).map(([name, value]) => cookie.serialize(name, value)).join('; ')
                        var $ = cheerio.load(caritoken)
                        var token = $('input[name="token"]').attr("value")
                        var form = new FormData()
                        form.append('url', url)
                        form.append('token', token)
                        var geturl2 = await fetch("https://keeptiktok.com/?lang=ID", {
                            method: 'POST',
                            headers: {
                                "Accept": "/",
                                "Accept-Language": "en-US,en;q=0.9",
                                "User-Agent": "GoogleBot",
                                "Cookie": hasilcookie,
                                ...form.getHeaders()
                            },
                            body: form.getBuffer()
                        })
                        var cariurl = await geturl2.text()
                        var $$ = cheerio.load(cariurl)
                        var hasil = $$('source').attr("src")
                        return hasil
                    }

                    TiktokDownload(q)
                        .then((res) => {
                            znn.sendFileFromUrl(from, res, `${sender.id}.mp4`, `Nih kak`, id)
                            limitAdd(serial)
                        }).catch((e) => {
                            znn.reply(from, `Gagal saat Mendownload data!`, id)
                        })
                    break
				case 'tiktok': case 'tiktokdl':
                if (!isRegistered) return await znn.reply(from, ind.notRegistered(), id)
                if (!isUrl(url) && !url.includes('tiktok.com')) return await znn.reply(from, ind.wrongFormat(), id)
                if (isLimit(serial)) return
                await limitAdd(serial)
                await znn.reply(from, ind.wait(), id)
                downloader.tik(url)
                    .then(async ({ result })=> {
                        await znn.sendFileFromUrl(from, result.video, 'TikTok.mp4', '', id)
                        console.log('Success sending TikTok video!')
                    })
                    .catch(async (err) => {
                        console.log(err)
                        await znn.reply(from, 'Error!', id)
                    })
                break
			    case 'tiktoknowm':
                if (!isRegistered) return await znn.reply(from, ind.notRegistered(), id)
                if (!isUrl(url) && !url.includes('tiktok.com')) return await znn.reply(from, ind.wrongFormat(), id)
                if (isLimit(serial)) return
                await limitAdd(serial)
                await znn.reply(from, ind.wait(), id)
                downloader.tiknowm(url)
                    .then(async ({ result })=> {
                        await znn.sendFileFromUrl(from, result.video, 'TikTok.mp4', '', id)
                        console.log('Success sending TikTokNowm video!')
                    })
                    .catch(async (err) => {
                        console.log(err)
                        await znn.reply(from, 'Error!', id)
                    })
                break
                case 'getsourcecode':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)

                    async function pasteGG(code, options = {}) {
                        if (!code) {
                            throw new Error("Input code !!");
                            return false;
                        }
                        if (options[0]) {
                            throw new Error("Options not object")
                        }
                        if (options) {
                            if (typeof options !== "object") {
                                throw new Error("Options not object !!");
                            }
                        }
                        !options.title ? (options.title = "untitled") : options.title;
                        !options.description
                            ? (options.description = "no description - zr")
                            : options.description;
                        !options.nameFile ? (options.nameFile = "getsourcecode.txt") : options.nameFile;

                        let hasilPost = await pasteGg.post({
                            name: options.title, // Optional
                            description: options.description,
                            expires: exp,
                            files: [
                                {
                                    name: options.nameFile,
                                    content: {
                                        format: "text",
                                        value: `${code}`,
                                    },
                                },
                            ],
                        });

                        return hasilPost;
                    }

                    axios.get(q).then((res) => {
                        pasteGG(res.data).then((data) => {
                            znn.reply(from, `</ SUCCESS GET SOURCE-CODE >\n\n• SourceCode: ${q}\n• Format: TXT\n• ID: ${data.result.id}\n• Created at: ${data.result.created_at}\n• Url: ${data.result.url}`, id)
                        }).catch((e) => {
                            znn.reply(from, `Gagal dalam pengambilan data!`, id)
                        })
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data!`, id)
                    })
                    break
                case 'slinedl':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!isUrl(url) && !url.includes('store.line.me')) return await znn.reply(from, `URL tidak valid!`, id)
                    if (isLimit(serial)) return

                    request(q, function (err, res, html) {
                        if (!err && res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            var resultslinedownload = [];
                            $('li.FnStickerPreviewItem').each((i, el) => {
                                var linksline = $(el).find('div > span').attr('style').split('background-image:url(').join('').replace(';compress=true);', '');
                                resultslinedownload.push({
                                    link: linksline
                                })
                            })
                            znn.sendStickerfromUrl(from, resultslinedownload[0].link)
                            sleeps(2000)
                            znn.sendStickerfromUrl(from, resultslinedownload[1].link)
                            sleeps(2000)
                            znn.sendStickerfromUrl(from, resultslinedownload[2].link)
                            sleeps(2000)
                            znn.sendStickerfromUrl(from, resultslinedownload[3].link)
                            sleeps(2000)
                            znn.sendStickerfromUrl(from, resultslinedownload[4].link)
                            limitAdd(serial)
                        } else {
                            znn.reply(from, `Gagal dalam pengambilan data!`, id)
                        }
                    })
                    break
                case 'smulevideo':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!isUrl(url) && !url.includes('www.smule.com')) return await znn.reply(from, `URL tidak valid!\nUrl yang valid: https://www.smule.com/recording/lewis-capaldi-someone-you-loved/2027750707_2937753991`, id)
                    axios.get(`https://singdownloader.com/smule/${q.replace('https://www.smule.com/', '')}#result`).then((res) => {
                        if (res.status == 200) {
                            var $ = cheerio.load(res.data)
                            var urldownsmule = $('.getting-started-info > div:nth-child(9) > a:nth-child(1)').attr('href');
                            znn.sendFileFromUrl(from, urldownsmule, `${sender.id}.mp4`, `Nihh`, id)
                        } else {
                            znn.reply(from, `Gagal dalam pengambilan data!`, id)
                        }
                    })
                    break
                case 'amazon':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    const randomnumbera = Math.floor(Math.random() * 50) + 1;

                    amazonScraper.products({ keyword: q, number: randomnumbera }).then((res) => {
                        var reusltamazon = `</ *RESULT-FOUND!* >

• Item: ${res.result[0].title}
• Review: ${res.result[0].reviews.total_reviews}
• Rating: ${res.result[0].reviews.rating}
• Price: ${res.result[0].price.current_price} ${res.result[0].price.currency}
• Score: ${res.result[0].score}
• Discounted: ${res.result[0].price.discounted ? 'Yes' : 'No'}
• Url: ${res.result[0].url}
• Sponsored: ${res.result[0].sponsored ? 'Yes' : 'No'}
• BestSeller: ${res.result[0].bestSeller ? 'Yes' : 'No'}
• AmazonPrime: ${res.result[0].amazonPrime ? 'Yes' : 'No'}`
                        znn.sendFileFromUrl(from, res.result[0].thumbnail, `${sender.id}.jpg`, reusltamazon.trim(), id)
                        limitAdd(serial)
                    }).catch((err) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'smuleaudio':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!isUrl(url) && !url.includes('www.smule.com')) return await znn.reply(from, `URL tidak valid!\nUrl yang valid: https://www.smule.com/recording/lewis-capaldi-someone-you-loved/2027750707_2937753991`, id)
                    axios.get(`https://singdownloader.com/smule/${q.replace('https://www.smule.com/', '')}#result`).then((res) => {
                        if (res.status == 200) {
                            var $ = cheerio.load(res.data)
                            var urldownsmule = $('.getting-started-info > div:nth-child(5) > a:nth-child(1)').attr('href');
                            znn.sendFileFromUrl(from, urldownsmule, `${sender.id}.mp3`, ``)
                        } else {
                            znn.reply(from, `Gagal dalam pengambilan data!`, id)
                        }
                    })
                    break
                case 'ytmp3':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!isUrl(url) && !url.includes('youtu.be')) return await znn.reply(from, `URL tidak valid!`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/

                    function post(url, formdata) {
                        return fetch(url, {
                            method: 'POST',
                            headers: {
                                accept: "/",
                                'accept-language': "en-US,en;q=0.9",
                                'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
                            },
                            body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
                        })
                    }

                    function yta(url) {
                        return new Promise((resolve, reject) => {
                            if (ytIdRegex.test(url)) {
                                let ytId = ytIdRegex.exec(url)
                                url = 'https://youtu.be/' + ytId[1]
                                post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                                    url,
                                    q_auto: 0,
                                    ajax: 1
                                })
                                    .then(res => res.json())
                                    .then(res => {
                                        var document = (new JSDOM(res.result)).window.document
                                        var type = document.querySelectorAll('td')
                                        var filesize = type[type.length - 10].innerHTML
                                        var id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                                        var thumb = document.querySelector('img').src
                                        var title = document.querySelector('b').innerHTML

                                        post('https://www.y2mate.com/mates/en60/convert', {
                                            type: 'youtube',
                                            _id: id[1],
                                            v_id: ytId[1],
                                            ajax: '1',
                                            token: '',
                                            ftype: 'mp3',
                                            fquality: 128
                                        })
                                            .then(res => res.json())
                                            .then(res => {
                                                let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                                                resolve({
                                                    dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                                    thumb,
                                                    title,
                                                    filesizeF: filesize,
                                                    filesize: KB
                                                })
                                            }).catch(reject)
                                    }).catch(reject)
                            } else reject('URL INVALID')
                        })
                    }

                    yta(q)
                        .then((hasil) => {
                            var TinyURL = require('tinyurl');
                            TinyURL.shorten(hasil.dl_link, function (res, err) {
                                if (Number(hasil.filesizeF.split(' MB')[0]) >= 15.0) return znn.sendFileFromUrl(from, hasil.thumb, `${sender.id}.jpg`, `• Judul: ${hasil.title}\n• Size: ${hasil.filesizeF}\n• Link: ${res}\n\n_Karena Size file melebihi 15mb, Silahkan download dengan link yang sudah di siapkan_`, id)
                                znn.sendFileFromUrl(from, hasil.thumb, `${sender.id}.jpg`, `「 RESULT-FOUND! 」\n\n• Judul: ${hasil.title}\n• Size: ${hasil.filesizeF}`, id)
                                znn.sendFileFromUrl(from, hasil.dl_link, `${sender.id}.mp3`)
                            })
                        })
                    break
                case 'whois':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    var whois = require('whois-json');

                    whois(q)
                        .then((res) => {
                            var resultwhois = `「 *RESULT-FOUND!* 」

• Domain: ${res.domainName}
• adminOrganization: ${res.adminOrganization}
• Contact Email: ${res.registrarAbuseContactEmail}
• Contact Phone: ${res.registrarAbuseContactPhone}
• Server: ${res.nameServer}
• DomainID:  ${res.registryDomainId}
• WhoIsSERVER: ${res.registrarWhoisServer}
`
                            znn.reply(from, resultwhois, id)
                        }).catch((e) => {
                            znn.reply(from, `Terjadi Kesalahan atau URL tidak valid!`, id)
                        })
                    break
                case 'reminder':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q.includes('|')) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const timeRemind = q.substring(0, q.indexOf('|') - 1)
                    const messRemind = q.substring(q.lastIndexOf('|') + 2)
                    const parsedTime = ms(toMs(timeRemind))
                    reminder.addReminder(sender.id, messRemind, timeRemind, _reminder)
                    await znn.sendTextWithMentions(from, `*「 REMINDER 」*\n\nReminder diaktifkan! :3\n\n• *Pesan*: ${messRemind}\n• *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik\n• *Untuk*: @${sender.id.replace('@c.us', '')}`, id)
                    const intervRemind = setInterval(async () => {
                        if (Date.now() >= reminder.getReminderTime(sender.id, _reminder)) {
                            await znn.sendTextWithMentions(from, `⏰ *「 REMINDER 」* ⏰\n\nAkhirnya tepat waktu~ @${sender.id.replace('@c.us', '')}\n\n• *Pesan*: ${reminder.getReminderMsg(sender.id, _reminder)}`)
                            _reminder.splice(reminder.getReminderPosition(sender.id, _reminder), 1)
                            fs.writeFileSync('./database/user/reminder.json', JSON.stringify(_reminder))
                            clearInterval(intervRemind)
                        }
                    }, 1000)
                    break
                case 'join':
                    if (!isOwner) return znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Linknya mana?\nContoh ${prefix}join https://example.com`, id)
                    const checkInvite = await znn.inviteInfo(q)
                    const waktusewa = 2629800
                    if (isOwner) {
                        await znn.joinGroupViaLink(q)
                        await znn.reply(from, `Udah kelar nih^^`, id)
                        await znn.sendText(checkInvite.id, `Hello!! Im DarkChat-BOT\n\nKetik ${prefix}verify untuk melakukan verifikasi`)
                        addSewaGc(checkInvite.id, waktusewa)
                        cekWaktuSewa(checkInvite.id)
                    } else {
                        const getGroupData = await znn.getAllGroups()
                        if (getGroupData.length >= groupLimit) {
                            await znn.reply(from, `Invite refused. Max group is: ${groupLimit}`, id)
                        } else if (getGroupData.size <= memberLimit) {
                            await znn.reply(from, `Invite refused. Minimum member is: ${memberLimit}`, id)
                        } else {
                            await znn.joinGroupViaLink(q)
                            await znn.reply(from, `Udah kelar nih^^`, id)
                            await znn.sendText(checkInvite.id, `Hello!! Im DarkChat-BOT\n\nKetik ${prefix}verify untuk melakukan verifikasi`)
                            addSewaGc(checkInvite.id, waktusewa)
                            cekWaktuSewa(checkInvite.id)
                        }
                    }
                    break
                case 'inspect':
                    if (!isOwner) return
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isMedia && isImage || isQuotedImage) {
                        var encryptMedia = isQuotedImage ? quotedMsg : message
                        var mediaData = await decryptMedia(encryptMedia, uaOverride)
                        var linkImgs = await uploadImages(mediaData, `${sender.id}_img`)
                        var tf = require('@tensorflow/tfjs-node')
                        var nsfw = require('nsfwjs')

                        async function fn() {
                            const pic = await axios.get(linkImgs, {
                                responseType: 'arraybuffer',
                            })
                            var model = await nsfw.load()
                            var image = await tf.node.decodeImage(pic.data, 3)
                            var predictions = await model.classify(image)
                            image.dispose()
                            console.log(predictions)
                            var listres = ''
                            for (let i of predictions) {
                                listres += `${i.className} : ${decimalToPersen(i.probability)}\n`
                            }
                            znn.reply(from, listres, id)
                        }
                        fn()
                    }
                    break
                case 'imagetourl':
                case 'imgtourl':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isMedia && isImage || isQuotedImage) {
                        await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const mediaData = await decryptMedia(encryptMedia, uaOverride)
                        const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                        await znn.reply(from, linkImg, id)
                    } else {
                        await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'bass': {
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isQuotedAudio) return await znn.reply(from, `Reply vnnya kaka dengan valuenya\nContoh : ${prefix}bass 1000`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    if (isQuotedAudio) {
                        let dB = 20
                        let freq = 60
                        if (args[0]) dB = clamp(parseInt(args[0]) || 20, 0, 50)
                        if (args[1]) freq = clamp(parseInt(args[1]) || 20, 20, 500)
                        let mediaData = await decryptMedia(quotedMsg)
                        let temp = './temp'
                        let name = new Date() * 1
                        let fileInputPath = path.join(temp, 'audio', `${name}.mp3`)
                        let fileOutputPath = path.join(temp, 'audio', `${name}_2.mp3`)
                        console.log(color('[fs]', 'green'), `Writing media into '${fileInputPath}'`)
                        fs.writeFile(fileInputPath, mediaData, err => {
                            if (err) return znn.sendText(from, 'Ada yang error saat menulis file', id)
                            ffmpeg(fileInputPath)
                                .audioFilter('equalizer=f=' + freq + ':width_type=o:width=2:g=' + dB)
                                .format('mp3')
                                .on('start', function (commandLine) {
                                    //console.log()
                                })
                                .on('progress', function (progress) {
                                    //console.log()
                                })
                                .on('end', function () {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    znn.sendPtt(from, fileOutputPath, id)
                                    setTimeout(() => {
                                        try {
                                            fs.unlinkSync(fileInputPath)
                                            fs.unlinkSync(fileOutputPath)
                                        } catch (e) { _err(e) }
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                    }
                }
                    break
                case 'menu':
                case 'help':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    const jumlahUser = _registered.length
                    const levelMenu = level.getLevelingLevel(sender.id, _level)
                    const xpMenu = level.getLevelingXp(sender.id, _level)
                    const getIngfoLevel = level.getLevelingLevel(sender.id, _level)
                    const fetchReqLevel = 5 * Math.pow(getIngfoLevel, 2) + 50 * getIngfoLevel + 100
                    const BalanceUser = getLevelingXpBC(sender.id, userbalance)
                    const BalanceUserToString = convertBalanceToString(BalanceUser)

                    // COUNT DATE BUAT EVENT
                    var countDownDate = new Date("Apr 13, 2021 00:00:00").getTime();
                    var now = new Date().getTime();
                    var distance = countDownDate - now;
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    // FORMAT UP TIME
                    function format(seconds) {
                        function pad(s) {
                            return (s < 10 ? '0' : '') + s;
                        }

                        var hours = Math.floor(seconds / (60 * 60));
                        var minutes = Math.floor(seconds % (60 * 60) / 60);
                        var seconds = Math.floor(seconds % 60);

                        return pad(hours) + 'h ' + pad(minutes) + 'm ' + pad(seconds) + 's';
                    }

                    var uptime = process.uptime();
                    znn.reply(from, `Hallo Mina 👋🏻
Im H4yperBOT-BETA

*STATUS*
• Nama: ${pushname.substring(0, 10)}
• Level: ${levelMenu}
• XP: ${xpMenu} / ${fetchReqLevel}
• Rank: ${role}
• Premium: ${isPremium ? 'Yes' : 'No'}
• Balance: Rp ${BalanceUserToString}

*MAIN-MENU*
• ${prefix}gamemenu
• ${prefix}shopmenu
• ${prefix}downloadmenu
• ${prefix}ownermenu
• ${prefix}funmenu
• ${prefix}asupanmenu
• ${prefix}groupmenu
• ${prefix}mediamenu
• ${prefix}animemenu
• ${prefix}kerangmenu
• ${prefix}premiummenu
• ${prefix}othermenu
• ${prefix}stickermenu
• ${prefix}infomenu
• ${prefix}systemmenu
• ${prefix}toolsmenu

*STATUS-BOT*
• Total User: ${convertBalanceToString(jumlahUser)}
• Runtime: ${format(uptime)}
• Prefix: Multi Prefix`, id)
                    break
                case 'kapankah':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    const when = args.join(' ')
                    const kapankah = ['1 Minggu lagi', 'Tidak mungkin', '1 Bulan lagi', '1 Tahun lagi']
                    const ans = kapankah[Math.floor(Math.random() * (kapankah.length))]
                    if (!when) znn.reply(from, 'Format salah! Ketik *#menu* untuk penggunaan.')
                    await znn.reply(from, `Pertanyaan: *${when}* \n\nJawaban: ${ans}`, id)
                    break
                case 'nilai':
                case 'rate':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Harap masukkan pesan yang ingin disampaikan`, id)
                    const ratenilai = Math.floor(Math.random() * 100) + 1;
                    await znn.reply(from, `Pertanyaan: *${q}* \n\nJawaban: ${ratenilai}%`, id)
                    break
                case 'berapakah':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Harap masukkan pesan yang ingin disampaikan`, id)
                    const xixixixi = Math.floor(Math.random() * 10) + 15
                    znn.reply(from, `Pertanyaan: Berapakah ${q}\nJawaban: ${xixixixi}`, id)
                    break
                case 'apakah':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const apakah = ['Ya', 'Tidak', 'Mungkin', 'Coba Ulangi']
                    const jawab = apakah[Math.floor(Math.random() * (apakah.length))]
                    await znn.reply(from, `Pertanyaan: *${q}* \n\nJawaban: ${jawab}`, id)
                    break
                case 'bisakah':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const bisakah = ['Bisa', 'Tidak Bisa', 'Mungkin', 'Coba Ulangi']
                    const jbsk = bisakah[Math.floor(Math.random() * (bisakah.length))]
                    await znn.reply(from, `Pertanyaan: ${q}\nJawaban: ${jbsk}`, id)
                    break
                case 'rategay':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const rategay = Math.floor(Math.random() * 100) + 1;
                    znn.reply(from, `• Seberapa Gay: ${q}\n• Jawaban : ${rategay}%`, id)
                    break
                case 'ratelesbi':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const ratelesbi = Math.floor(Math.random() * 100) + 1;
                    znn.reply(from, `• Seberapa Lesbi: ${q}\n• Jawaban : ${ratelesbi}%`, id)
                    break
                case 'ratetampan':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const ratetampan = Math.floor(Math.random() * 100) + 1;
                    znn.reply(from, `• Nama: ${q}\n• Tingkat Ketampanan: ${ratetampan}%`, id)
                    break
                case 'ratecantik':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const ratecantik = Math.floor(Math.random() * 100) + 1;
                    znn.reply(from, `• Nama: ${q}\n• Tingkat Kecantikan: ${ratecantik}%`, id)
                    break
                case 'animesearch':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    var Anime = require('anime-scraper').Anime

                    Anime.fromName(q)
                        .then((res) => {
                            var resultanimes = `「 *ANIME-SEARCH* 」

• Judul: ${res.name}
• Gener: ${res.genres[0]} dan ${res.genres[1]}
• Rilis: ${res.released}
• Link: ${res.url.replace('https://gogoanime.io', '')}
• Summary: ${res.summary.trim()}
`
                            znn.reply(from, resultanimes, id)
                        }).catch((err) => {
                            znn.reply(from, `Anime ${q} tidak ditemukan`, id)
                        })
                    break
                case 'groupinfo':
                case 'grupinfo':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return znn.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                    var totalMem = chat.groupMetadata.participants.length
                    var desc = chat.groupMetadata.desc
                    var groupnames = name
                    var welgrp = _welcome.includes(chat.id)
                    var antlink = _antilink.includes(chat.id)
                    var levelings = _leveling.includes(chat.id)
                    var autostick = _autosticker.includes(groupId)
                    var antinsfw = _antinsfw.includes(groupId)
                    var antikasar321 = _antikasar.includes(groupId)
                    var grouppic = await znn.getProfilePicFromServer(chat.id)
                    if (grouppic == undefined) {
                        var pfp = errorurl
                    } else {
                        var pfp = grouppic
                    }
                    await znn.sendFileFromUrl(from, pfp, 'group.png', `*「 GROUP INFO 」*

• *Name*: ${groupnames}
• *Members*: ${totalMem}
• *Welcome*: ${welgrp ? 'On' : 'Off'}
• *Anti Link*: ${antlink ? 'On' : 'Off'}
• *Anti Nsfw*: ${antinsfw ? 'On' : 'Off'}
• *Anti Kasar*: ${antikasar321 ? 'On' : 'Off'}
• *Auto Sticker*: ${autostick ? 'On' : 'Off'}
• *System Leveling*: ${levelings ? 'On' : 'Off'}
• *Group Description*
${desc}`)
                    break
                case 'searchsticker':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    request(`https://getstickerpack.com/stickers?query=${q}`, function (err, res, html) {
                        if (!err && res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            var gotolinkstikel = $('div.col-md-6:nth-child(1) > a:nth-child(1)').attr('href');
                            request(gotolinkstikel, function (err, res, html) {
                                if (!err && res.statusCode == 200) {
                                    var $ = cheerio.load(html)
                                    var dataArrcaristikel = [];
                                    $('div.col-xl-3').each((i, el) => {
                                        var urlstikels = $(el).find('img').attr('data-src-large');
                                        dataArrcaristikel.push({
                                            link: urlstikels
                                        })
                                    })
                                    console.log(dataArrcaristikel)
                                } else {
                                    console.log(err)
                                }
                            })
                        } else {
                            console.log(err)
                        }
                    })
                    break
                case 'fun':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return znn.reply(from, '*IND*\n• perintah ini hanya dapat digunakan di dalam grup\n\n*ENG*\n• This command can only be used within the group', id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const groupMemeks = await znn.getGroupMembers(groupId)
                    const memsmek = groupMemeks
                    const auahajg = memsmek[Math.floor(Math.random() * memsmek.length)];
                    const sapaa = `${q} adalah @${auahajg.id.replace(/@c.us/g, '')}`
                    await znn.sendTextWithMentions(from, sapaa, id)
                    break
                case 'downloadmenu': case 'menudownload':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *DOWNLOAD-MENU* >
• ${prefix}play <link>
• ${prefix}youtubesearch <query>
• ${prefix}fbdl-mp3 <link>
• ${prefix}fbdl-mp4 <link>
• ${prefix}slinedl <link>
• ${prefix}smulevideo <link>
• ${prefix}smuleaudio <link>
• ${prefix}tiktoknowm <link>
• ${prefix}tiktokdl <link>
• ${prefix}tiktokmusic <link>
• ${prefix}sfiledl <link>
• ${prefix}ytmp3 <link>
• ${prefix}ytmp4 <link>
• ${prefix}igdl <link>
• ${prefix}igstory <username>
• ${prefix}igdlpoto <link>`, id)
                    break
                case 'stickermenu': case 'menusticker': case 'stikermenu': case 'menustiker':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *STICKER-MENU* >

• ${prefix}tocs <reply sticker>
• ${prefix}cs <reply image>
• ${prefix}stickerwaifu
• ${prefix}s <reply image>
• ${prefix}scrop <reply image>
• ${prefix}sgif
• ${prefix}searchsticker <query>
• ${prefix}doge
• ${prefix}stickertele <query>
• ${prefix}ttps <teks>
• ${prefix}stickerwm author | packname
• ${prefix}takestick author | packname
• ${prefix}esticker <emoji>
`, id)
                    break
                case 'grup':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Fitur ini hanya bisa digunakan didalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, 'Fitur ini hanya bisa digunakan oleh admin', id)
                    if (!isBotGroupAdmins) return await znn.reply(from, 'Fitur ini bekerja apabila bot menjadi admin', id)
                    if (ar[0] === 'close') {
                        await znn.setGroupToAdminsOnly(groupId, true)
                        await znn.sendText(from, 'Succes close grup!')
                    } else if (ar[0] === 'open') {
                        await znn.setGroupToAdminsOnly(groupId, false)
                        await znn.sendText(from, 'Success open grup!')
                    } else {
                        await znn.reply(from, 'Format salah', id)
                    }
                    break
                case 'tagall':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Fitur ini hanya bisa digunakan didalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, 'Fitur ini hanya bisa digunakan oleh admin', id)
                    const groupMem = await znn.getGroupMembers(groupId)
                    let txt = '</ *TAG-ALL* >\n'
                    for (let i = 0; i < groupMem.length; i++) {
                        txt += '-> '
                        txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                    }
                    txt += '</ *TAG-ALL* >'
                    await znn.sendTextWithMentions(from, txt)
                    break
                case 'out':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Fitur ini hanya bisa digunakan didalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, 'Fitur ini hanya bisa digunakan oleh admin', id)
                    if (!isBotGroupAdmins) return await znn.reply(from, 'Fitur ini bekerja apabila bot menjadi admin', id)
                    if (!isGroupAdmins) return znn.reply(from, 'Owner dan admin grup Only', id)
                    if (!quotedMsg) return znn.reply(from, 'Untuk mengkick member dengan cara mereply msg member yang ingin dikick', id)
                    await znn.removeParticipant(from, quotedMsgObj.sender.id)
                    break
				 case 'adds':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Fitur ini hanya bisa digunakan didalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, 'Fitur ini hanya bisa digunakan oleh admin', id)
                    if (!isBotGroupAdmins) return await znn.reply(from, 'Fitur ini bekerja apabila bot menjadi admin', id)
                    if (!isGroupAdmins) return znn.reply(from, 'Owner dan admin grup Only', id)
                    if (!quotedMsg) return znn.reply(from, 'Untuk mengkick member dengan cara mereply msg member yang ingin ditaambahkan', id)
                    await znn.addParticipant(from, quotedMsgObj.sender.id)
                    break
                case 'pm':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Fitur ini hanya bisa digunakan didalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, 'Fitur ini hanya bisa digunakan oleh admin', id)
                    if (!isBotGroupAdmins) return await znn.reply(from, 'Fitur ini bekerja apabila bot menjadi admin', id)
                    if (!quotedMsg) return znn.reply(from, 'Untuk Promote Member dengan cara mereply msg member yang ingin dijadikan admin', id)
                    await znn.promoteParticipant(from, quotedMsgObj.sender.id)
                    await znn.reply(from, 'Succes Mengangkat Admin', id)
                    break
                case 'dm':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Fitur ini hanya bisa digunakan didalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, 'Fitur ini hanya bisa digunakan oleh admin', id)
                    if (!isBotGroupAdmins) return await znn.reply(from, 'Fitur ini bekerja apabila bot menjadi admin', id)
                    if (!quotedMsg) return znn.reply(from, 'Untuk men-demote Admin dengan cara mereply msg member yang ingin di turunkan menjadi member', id)
                    await znn.demoteParticipant(from, quotedMsgObj.sender.id)
                    await znn.reply(from, 'Succes Demote Member', id)
                    break
                case 'promote':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Fitur ini hanya bisa digunakan didalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, 'Fitur ini hanya bisa digunakan oleh admin', id)
                    if (!isBotGroupAdmins) return await znn.reply(from, 'Fitur ini bekerja apabila bot menjadi admin', id)
                    if (mentionedJidList.length !== 1) return await znn.reply(from, 'Format salah', id)
                    if (mentionedJidList[0] === botNumber) return await znn.reply(from, 'Format salah', id)
                    if (groupAdmins.includes(mentionedJidList[0])) return await znn.reply(from, 'tidak bisa dipromote karena Sudah menjadi admin', id)
                    await znn.promoteParticipant(groupId, mentionedJidList[0])
                    await znn.reply(from, 'Success', id)
                    break
                case 'demote':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Fitur ini hanya bisa digunakan didalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, 'Fitur ini hanya bisa digunakan oleh admin', id)
                    if (!isBotGroupAdmins) return await znn.reply(from, 'Fitur ini bekerja apabila bot menjadi admin', id)
                    if (mentionedJidList.length !== 1) return await znn.reply(from, 'Format salah', id)
                    if (mentionedJidList[0] === botNumber) return await znn.reply(from, 'Format salah', id)
                    if (!groupAdmins.includes(mentionedJidList[0])) return await znn.reply(from, 'Yang anda demote bukanlah admin', id)
                    await znn.demoteParticipant(groupId, mentionedJidList[0])
                    await znn.reply(from, 'Success', id)
                    break
                case 'add':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Fitur ini hanya bisa digunakan didalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, 'Fitur ini hanya bisa digunakan oleh admin', id)
                    if (!isBotGroupAdmins) return await znn.reply(from, 'Fitur ini bekerja apabila bot menjadi admin', id)
                    if (args.length !== 1) return await znn.reply(from, 'Format salah silahkan tag sesorang untuk diadd', id)
                    try {
                        await znn.addParticipant(from, `${args[0]}@c.us`)
                        await znn.sendText(from, '🎉 Welcome! 🎉')
                    } catch (err) {
                        console.error(err)
                        await znn.reply(from, 'Error!', id)
                    }
                    break
                case 'kick':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Fitur ini hanya bisa digunakan didalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, 'Fitur ini hanya bisa digunakan oleh admin', id)
                    if (!isBotGroupAdmins) return await znn.reply(from, 'Fitur ini bekerja apabila bot menjadi admin', id)
                    if (mentionedJidList.length === 0) return await znn.reply(from, 'Format salah silahkan tag sesorang untuk', id)
                    if (mentionedJidList[0] === botNumber) return await znn.reply(from, 'Format salah silahkan tag sesorang untuk dikick', id)
                    await znn.sendTextWithMentions(from, `Good bye~\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
                    for (let i of mentionedJidList) {
                        if (groupAdmins.includes(i)) return await znn.sendText(from, 'Format salah silahkan tag sesorang untuk dikick')
                        await znn.removeParticipant(groupId, i)
                    }
                    break
                case 'grupmenu': case 'groupmenu': case 'menugrup': case 'menugroup':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *GROUP-MENU* >

• ${prefix}tagme
• ${prefix}kick @tag
• ${prefix}add 628xxx
• ${prefix}promote @tag
• ${prefix}demote @tag
• ${prefix}grup open|close
• ${prefix}tagall
• ${prefix}out <reply chat orng>
• ${prefix}adds <reply chat orng>
• ${prefix}dm <reply chat orang>
• ${prefix}pm <reply chat orng>
• ${prefix}reminder 10s | pesan_pengingat
• ${prefix}jadian
• ${prefix}fun <question>
• ${prefix}truth
• ${prefix}dare
• ${prefix}tod
• ${prefix}ava <reply chat orang>
• ${prefix}afk <reason>
• ${prefix}setgrupname <optional>
• ${prefix}sider <reply chat bot>
• ${prefix}linkgrup
• ${prefix}resetlinkgrup
• ${prefix}setgroupicon <reply image>
• ${prefix}groupinfo
• ${prefix}adminlist
• ${prefix}ownergroup
• ${prefix}leave
• ${prefix}delete <reply chat bot>
`, id)
                    break
                case 'funmenu': case 'menufun':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *FUN-MENU* >

• ${prefix}cekwatak
• ${prefix}citacita
• ${prefix}creepyfact
• ${prefix}cerpen
• ${prefix}cersex
• ${prefix}say <teks>
• ${prefix}partner
`, id)
                case 'asupanmenu': case 'menuasupan':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *ASUPAN-MENU* >

• ${prefix}lolivid
• ${prefix}ptl
`, id)
                    break
                case 'ownermenu': case 'ownermenu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *OWNER-MENU* >

• ${prefix}readallchat
• ${prefix}refresh
• ${prefix}exec <execute cmd>
• ${prefix}blacklist add @tag/628xx
• ${prefix}blacklist del @tag/628xx
• ${prefix}getses
• ${prefix}exif pack_name | author_name
• ${prefix}shutdown
• ${prefix}bc
• ${prefix}leaveall
• ${prefix}ngehek <?>
• ${prefix}restart
• ${prefix}eval <?>
• ${prefix}setname
• ${prefix}setstatus
• ${prefix}setpict
• ${prefix}banchat
• ${prefix}premium add @tag/628xx 30d
• ${prefix}premium del @tag/628xx
• ${prefix}unbanchat
`, id)
                    break
                case 'igdlpoto':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!isUrl(url) && !url.includes('instagram.com')) return await znn.reply(from, `URL tidak valid!`, id)
                    if (isLimit(serial)) return
                    const igpoto = async (igLink) => {
                        function post(url, formdata) {
                            return fetch(url, {
                                method: 'POST',
                                headers: {
                                    accept: "*/*",
                                    'X-Requested-With': "XMLHttpRequest",
                                    'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
                                },
                                body: new URLSearchParams(Object.entries(formdata))
                            })
                        }
                        const hasil = []
                        const res = await post('https://igdownloader.com/ajax', {
                            link: igLink,
                            downloader: 'photo'
                        })
                        const mela = await res.json()
                        const $ = cheerio.load(mela.html)
                        let foto = $('div').find('.img-block > div > div.post > img').attr('src')
                        return foto
                    }

                    igpoto(q).then((res) => {
                        znn.sendFileFromUrl(from, res, `${sender.id}.jpg`, `Nihh`, id)
                        limitAdd(serial)
                    }).catch((e) => {
                        znn.reply(from, 'Gagal dalam pengambilan data', id)
                    })
                    break
                case 'igdlvidedo':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!isUrl(url) && !url.includes('instagram.com')) return await znn.reply(from, `URL tidak valid!`, id)
                    if (isLimit(serial)) return
                    fetch("https://instasaveonline.com/instagram-video-downloader.php#content", {
                        "credentials": "include",
                        "headers": {
                            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
                            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                            "Accept-Language": "en-US,en;q=0.5",
                            "Content-Type": "application/x-www-form-urlencoded",
                            "Upgrade-Insecure-Requests": "1",
                            "Pragma": "no-cache",
                            "Cache-Control": "no-cache"
                        },
                        "referrer": "https://instasaveonline.com/instagram-video-downloader.php",
                        "body": `link=${q}&submit=`,
                        "method": "POST",
                        "mode": "cors"
                    }).then((res) => res.text())
                        .then((text) => {
                            const $ = cheerio.load(text)
                            const urlvideoig_ = $('.dlsection > a:nth-child(4)').attr('href');
                            znn.sendFileFromUrl(from, urlvideoig_, `${sender.id}.mp4`, `Nih`, id)
                        }).catch((e) => {
                        znn.reply(from, 'Gagal dalam pengambilan data', id)
                    })
                    break
                case 'detiknews':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    axios.get('https://news.detik.com/ajax/mostpopular')
                        .then(({ data }) => {
                            var $ = cheerio.load(data.html)
                            var title = []
                            var url = []
                            $('div > h3 > a').get().map((rest) => {
                                title.push($(rest).text())
                            })

                            $('div > h3 > a').get().map((rest) => {
                                url.push($(rest).attr('href'))
                            })
                            var result = []
                            for (let i = 0; i < title.length; i++) {
                                result.push({
                                    title: title[i],
                                    url: url[i]
                                })
                            }
                            var resultdtkcom = `「 *DETIK-COM* 」\n\n`
                            for (let i = 0; i < result.length; i++) {
                                resultdtkcom += `• Judul: ${result[i].title}\n• Url: ${result[i].url}\n\n`
                            }
                            znn.reply(from, resultdtkcom, id)
                        })
                    break
				case 'igdl': // by: VideFrelan
                case 'instadl':
                if (!isRegistered) return await znn.reply(from, ind.notRegistered(), id)
                if (!isUrl(url) && !url.includes('instagram.com')) return await znn.reply(from, ind.wrongFormat(), id)
                if (isLimit(serial)) return
                await limitAdd(serial)
                await znn.reply(from, ind.wait(), id)
                downloader.insta(url)
                    .then(async ({ result }) => {
                        for (let i = 0; i < result.post.length; i++) {
                            if (result.post[i].type === 'image') {
                                await znn.sendFileFromUrl(from, result.post[i].urlDownload, 'igpostdl.jpg', `*...:* *Instagram Downloader* *:...*\n\nUsername: ${result.owner_username}\nCaption: ${result.caption}`, id)
                            } else if (result.post[i].type === 'video') {
                                await znn.sendFileFromUrl(from, result.post[i].urlDownload, 'igpostdl.mp4', `*...:* *Instagram Downloader* *:...*\n\nUsername: ${result.owner_username}\nCaption: ${result.caption}`, id)
                            }
                        }
                        console.log('Success sending Instagram media!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await znn.reply(from, 'Error!', id)
                    })
                break 
                case 'topmanga':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)

                    request(`https://myanimelist.net/topmanga.php`, function (err, res, html) {
                        if (!err & res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            var dataArrTopmanga = [];
                            $('tr.ranking-list').each((i, el) => {
                                var judultopmanga = $(el).find('h3 > a').text();
                                var scoretopmanga = $(el).find('td > div > span').text();
                                var infotopmanga = $(el).find('td.title.al.va-t.clearfix.word-break > div > div.information.di-ib.mt4').text().split(' ').join('').replace('\n', '');
                                var linktopmanga = $(el).find('h3 > a').attr('href');
                                dataArrTopmanga.push({
                                    Judul: judultopmanga,
                                    Score: scoretopmanga,
                                    Informasi: infotopmanga,
                                    Link: linktopmanga
                                })
                            })
                            var resulttopmanga = `*</ TOP MANGA >*\n\n`
                            for (let i = 0; i < dataArrTopmanga.length; i++) {
                                resulttopmanga += `• Judul: ${dataArrTopmanga[i].Judul}\n• Score: ${dataArrTopmanga[i].Score}\n• Link: ${dataArrTopmanga[i].Link}\n• Informasi: ${dataArrTopmanga[i].Informasi.replace('\n', '')}\n`
                            }
                            znn.reply(from, resulttopmanga.trim(), id)
                        } else {
                            znn.reply(from, `Gagal dalam mengambil data!`, id)
                        }
                    })
                    break
                case 'nomortogel':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    request('https://nomortogelhariini.net/', function (err, res, html) {
                        if (err) return znn.reply(from, `Tidak dapat mencari nomer togel terbaru!`, id)
                        if (!err && res.statusCode == 200) {
                            var $ = cheerio.load(html);
                            var numberhongkong = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > span').text();
                            var periode1 = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(1) > td:nth-child(3)').text();
                            var tanggal1 = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(1) > td:nth-child(2)').text();

                            var numbersingapur = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > span').text();
                            var periode2 = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(2) > td:nth-child(3)').text();
                            var tanggal2 = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(2) > td:nth-child(2)').text();

                            var numbersydney = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(3) > td:nth-child(4) > span').text();
                            var periode3 = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(3) > td:nth-child(3)').text();
                            var tanggal3 = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(3) > td:nth-child(2)').text();

                            var numbermagnum = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(4) > td:nth-child(4) > span').text();
                            var periode4 = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(4) > td:nth-child(3)').text();
                            var tanggal4 = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(4) > td:nth-child(2)').text();

                            var numberPCSO = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(5) > td:nth-child(4) > span').text();
                            var periode5 = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(5) > td:nth-child(3)').text();
                            var tanggal5 = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(5) > td:nth-child(2)').text();

                            var numberbullseye = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(6) > td:nth-child(4) > span').text();
                            var periode6 = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(6) > td:nth-child(3)').text();
                            var tanggal6 = $('body > div > div.py-1.px-2 > div > table > tbody > tr:nth-child(6) > td:nth-child(2)').text();

                            var resultnumbertogel = `*RESULT*
        
Hongkong: ${numberhongkong}
Periode: ${periode1}
Tanggal: ${tanggal1}

Singapura: ${numbersingapur}
Periode: ${periode2}
Tanggal: ${tanggal2}

Sydney: ${numbersydney}
Periode: ${periode3}
Tanggal: ${tanggal3}

Magnum4D: ${numbermagnum}
Periode: ${periode4}
Tanggal: ${tanggal4}

PCSO: ${numberPCSO}
Periode: ${periode5}
Tanggal: ${tanggal5}

BullsEye: ${numberbullseye}
Periode: ${periode6}
Tanggal: ${tanggal6}`
                            znn.reply(from, resultnumbertogel, id)
                        }
                    })
                    break
                case 'githubstalk':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    request(`https://github.com/${q}`, function (err, res, html) {
                        if (err) return znn.reply(from, `Github ${q} tidak ditemukan!`, id)
                        if (!err & res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            var usernamegithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-nickname.vcard-username.d-block').text().trim();
                            var fullnamegithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-name.vcard-fullname.d-block.overflow-hidden').text().trim();
                            var biogithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.p-note.user-profile-bio.mb-3.js-user-profile-bio.f4 > div').text().trim();
                            var followergithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.flex-order-1.flex-md-order-none.mt-2.mt-md-0 > div > a:nth-child(1) > span').text().trim();
                            var followinggithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.flex-order-1.flex-md-order-none.mt-2.mt-md-0 > div > a:nth-child(2) > span').text().trim();
                            var jumlahrepo = $('#js-pjax-container > div.mt-4.position-sticky.top-0.d-none.d-md-block.color-bg-primary.width-full.border-bottom.color-border-secondary > div > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div > nav > a:nth-child(2) > span').text().trim();
                            var imagegithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.position-relative.d-inline-block.col-2.col-md-12.mr-3.mr-md-0.flex-shrink-0 > a > img').attr('src');
                            var stargithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.flex-order-1.flex-md-order-none.mt-2.mt-md-0 > div > a:nth-child(3) > span').text().trim();
                            var resultgithub = `*GITHUB-STALK*
        
Username: ${usernamegithub}
Fullname: ${fullnamegithub}
Bio: ${biogithub}
Follower: ${followergithub}
Following: ${followinggithub}
Star: ${stargithub}
Jumlah Repo: ${jumlahrepo}`
                            znn.sendFileFromUrl(from, imagegithub, `${sender.id}.png`, resultgithub, id)
                        }
                    })
                    break
                case 'newstickerline':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)

                    request('https://store.line.me/stickershop/showcase/new/id', function (err, res, html) {
                        if (!err && res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            var dataArrnewsline = [];
                            var urlnewsline = 'https://store.line.me'
                            $('li.mdCMN02Li').each((i, el) => {
                                var judulnewsline = $(el).find('a > div > p').text();
                                var linknewsline = $(el).find('a').attr('href');
                                dataArrnewsline.push({
                                    Judul: judulnewsline,
                                    Link: urlnewsline + linknewsline
                                })
                            })
                            var resultnewsline = `</ *NEW-STICKERLINE* >\n\n`
                            for (let i = 0; i < dataArrnewsline.length; i++) {
                                resultnewsline += `• Judul: ${dataArrnewsline[i].Judul}\n• Link: ${dataArrnewsline[i].Link}\n\n`
                            }
                            znn.reply(from, resultnewsline.trim(), id)
                        } else {
                            znn.reply(from, `Gagal dalam pengambilan data!`, id)
                        }
                    })
                    break
                case 'mediamenu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *MEDIA-MENU* >

• ${prefix}githubstalk <username>
• ${prefix}soundcloud <query>
• ${prefix}apkpure <query>
• ${prefix}nomortogel
• ${prefix}brainly <query>
• ${prefix}antara-news
• ${prefix}happymod <optional>
• ${prefix}newstickerline
• ${prefix}amazon <optional>
• ${prefix}sfilelast
• ${prefix}cuaca <daerah>
• ${prefix}ramalpasangan kamu | dia
• ${prefix}tiktokstalk <username>
• ${prefix}wattpad <optional>
• ${prefix}detiknews
• ${prefix}ytstalk <username>
• ${prefix}googleimage <optional>
• ${prefix}lk21 <optional>
• ${prefix}heroml <optional>
• ${prefix}tinyurl <link>
• ${prefix}cekspek <model hp>
• ${prefix}artinama <optional>
• ${prefix}wallpaper <optional>
• ${prefix}tts <kode bahasa> <teks>
• ${prefix}igstalk <username>
• ${prefix}kbbi <optional>
• ${prefix}google <optional> 
• ${prefix}pinterest <query>
• ${prefix}lirik <optional>
• ${prefix}qrcode <optional>
• ${prefix}artikata <query>
• ${prefix}artimipi <query>
• ${prefix}doramaindo <query>
• ${prefix}drakor <query>
• ${prefix}movie <query>
• ${prefix}growstock <query>
• ${prefix}jalantikus <query>
• ${prefix}kompastv
• ${prefix}moddroid
• ${prefix}nomorhoki`, id)
                    break
                case 'nomorhoki':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)

                    const nomorhoki = (no) => new Promise((resolve, reject) => {
                        fetch("https://www.primbon.com/no_hoki_bagua_shuzi.php", {
                            "headers": {
                                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                                "accept-language": "en-US,en;q=0.9",
                                "cache-control": "max-age=0",
                                "content-type": "application/x-www-form-urlencoded",
                                "sec-fetch-dest": "document",
                                "sec-fetch-mode": "navigate",
                                "sec-fetch-site": "same-origin",
                                "sec-fetch-user": "?1",
                                "sec-gpc": "1",
                                "upgrade-insecure-requests": "1"
                            },
                            "referrer": "https://www.primbon.com/no_hoki_bagua_shuzi.htm",
                            "referrerPolicy": "strict-origin-when-cross-origin",
                            "body": `nomer=${no}&submit=+Submit%21+`,
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "omit"
                        }).then((res) => res.text())
                            .then((text) => {
                                const $ = cheerio.load(text)
                                $('#body').each((i, el) => {
                                    const energipositif = $(el).find('table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(1)').text().replace('ENERGI POSITIF', '');
                                    const energinegatif = $(el).find('table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(3)').text().replace('ENERGI NEGATIF', '');
                                    const ratenomer = $(el).find('b:nth-child(6)').text().replace('% Angka Bagua Shuzi : ', '')
                                    resolve({
                                        status: 200,
                                        energipositif: energipositif,
                                        energinegatif: energinegatif,
                                        rate: ratenomer
                                    })
                                })
                            })
                    })

                    nomorhoki(q).then(data => {
                        znn.reply(from, `*NOMOR-HOKI*\n\n• No: ${q}\n• Rate: ${data.rate}\n• Positif: ${data.energipositif}\n• Negatif: ${data.energinegatif}`, id)
                    }).catch(err => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'moddroid':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)

                    const moddroid = (query) => new Promise((resolve, reject) => {
                        axios.get(`https://moddroid.com/?s=${query}`)
                            .then(({ data }) => {
                                const $ = cheerio.load(data)
                                let title = []
                                let url = []
                                let img = []
                                $('div.row > div.col-12 > a').get().map((rest) => {
                                    url.push($(rest).attr('href'))
                                })
                                $('div.row > div.col-12 > a').get().map((rest) => {
                                    title.push($(rest).attr('title'))
                                })
                                $('div.row > div.col-12 > a > div.flex-shrink-0 > img').get().map((rest) => {
                                    img.push($(rest).attr('src'))
                                })
                                let result = []
                                for (let i = 0; i < url.length; i++) {
                                    result.push({
                                        url: url[i],
                                        title: title[i],
                                        img: img[i]
                                    })
                                }
                                resolve(result)
                            })
                    })

                    moddroid(q).then(data => {
                        let txt_ = `*MOD-DROID-SEARCH*\n\n`
                        for (let x = 0; x < data.length; x++) {
                            txt_ += `• Judul: ${data[x].title}\n• Url: ${data[x].url}\n\n`
                        }
                        znn.reply(from, txt_.trim(), id)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'konachan':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)

                    const konachanSearch = (query) => new Promise((resolve, reject) => {
                        fetch(`https://konachan.net/post?tags=${query}`, {
                            "credentials": "include",
                            "headers": {
                                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
                                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                                "Accept-Language": "en-US,en;q=0.5",
                                "Upgrade-Insecure-Requests": "1",
                                "Pragma": "no-cache",
                                "Cache-Control": "no-cache"
                            },
                            "referrer": "https://konachan.net/",
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.text())
                            .then((text) => {
                                const $ = cheerio.load(text)
                                const dataArr = [];
                                $('li.creator-id-181250').each((i, el) => {
                                    const allgraburl = $(el).find('div.inner > a').attr('href');
                                    dataArr.push(`https://konachan.net${allgraburl}`)
                                })
                                const randomPict = dataArr[Math.floor(Math.random() * dataArr.length)];
                                axios.get(randomPict).then(data => {
                                    const $$ = cheerio.load(data.data)
                                    const id = $$('#stats > ul:nth-child(2) > li:nth-child(2)').text().replace('Id: ', '').trim();
                                    const postAt = $$('#stats > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)').text().trim();
                                    const size = $$('#stats > ul:nth-child(2) > li:nth-child(4)').text().replace('Size: ', '').trim();
                                    const rating = $$('#stats > ul:nth-child(2) > li:nth-child(6)').text().replace('Rating: ', '').trim();
                                    const score = $$('#stats > ul:nth-child(2) > li:nth-child(7)').text().replace('Score: ', '').trim();
                                    const source = $$('#stats > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)').attr('href');
                                    const image = $$('#image').attr('src');
                                    resolve({
                                        status: 200,
                                        id: id,
                                        postAt: postAt,
                                        size: size,
                                        rating: rating,
                                        score: score,
                                        source: source,
                                        image: image
                                    })
                                })
                            })
                    })

                    konachanSearch(q).then(data => {
                        znn.sendFileFromUrl(from, data.image, `${sender.id}.png`, `*KONACHAN-SEARCH*\n\n• ID: ${data.id}\n• PostAt: ${data.postAt}\n• SizeImage: ${data.size}\n• Source: ${data.source}\n• Rating: ${data.rating}\n• Score: ${data.score}`, id)
                    }).catch(err => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'kompastv':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)

                    async function kompasTvNews() {
                        return new Promise((resolve, reject) => {
                            fetch("https://www.kompas.tv/", {
                                "headers": {
                                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                                    "accept-language": "en-US,en;q=0.9",
                                    "cache-control": "max-age=0",
                                    "sec-fetch-dest": "document",
                                    "sec-fetch-mode": "navigate",
                                    "sec-fetch-site": "none",
                                    "sec-fetch-user": "?1",
                                    "sec-gpc": "1",
                                    "upgrade-insecure-requests": "1"
                                },
                                "referrerPolicy": "strict-origin-when-cross-origin",
                                "body": null,
                                "method": "GET",
                                "mode": "cors"
                            }).then((res) => res.text())
                                .then((text) => {
                                    const $ = cheerio.load(text)
                                    const dataArrdetik = [];
                                    $('section > div > div.col-70').each((i, el) => {
                                        const title = $(el).find('h2 > a').text();
                                        const waktu = $(el).find('span.time-news.p10').text();
                                        const url = $(el).find('h2 > a').attr('href');
                                        dataArrdetik.push({
                                            title: title ? title : '',
                                            waktu: waktu ? waktu : '',
                                            url: url ? url : ''
                                        })
                                    })
                                    resolve(dataArrdetik)
                                })
                        })
                    }

                    kompasTvNews().then(data => {
                        let txt_ = `*KOMPASTV-NEWS*\n\n`
                        for (let x = 0; x < data.length; x++) {
                            txt_ += `• Judul: ${data[x].title}\n• Waktu: ${data[x].waktu}\n• Url: ${data[x].url}\n\n`
                        }
                        znn.reply(from, txt_.trim(), id)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'jalantikus':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const jalantikus = (query) => new Promise((resolve, reject) => {
                        axios.get(`https://jalantikus.com/search/whatsapp/?q=${query}`)
                            .then(({ data }) => {
                                const $ = cheerio.load(data)
                                let title = []
                                let url = []
                                let img = []
                                $('div.news-container > section > div.news-item > a').get().map((rest) => {
                                    url.push($(rest).attr('href'))
                                })
                                $('div.news-container > section > div.news-item > div.news-image > picture > img').get().map((rest) => {
                                    title.push($(rest).attr('alt'))
                                })
                                $('div.news-container > section > div.news-item > div.news-image > picture > img').get().map((rest) => {
                                    img.push($(rest).attr('data-src'))
                                })
                                let result = []
                                for (let i = 0; i < url.length; i++) {
                                    result.push({
                                        url: url[i],
                                        title: title[i],
                                        img: img[i]
                                    })
                                }
                                resolve(result)
                            })
                    })

                    jalantikus(q).then(data => {
                        let txt_ = `*JALANTIKUS-SEARCH*\n\n`
                        for (let x = 0; x < data.length; x++) {
                            txt_ += `• Judul: ${data[x].title}\n• Url: ${data[x].url}\n\n`
                        }
                        znn.reply(from, txt_.trim(), id)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'growstock':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)

                    const growstockSearch = (query) => new Promise((resolve, reject) => {
                        fetch(`https://growstocks.xyz/search?item=${query}`, {
                            "credentials": "include",
                            "headers": {
                                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
                                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                                "Accept-Language": "en-US,en;q=0.5",
                                "Upgrade-Insecure-Requests": "1",
                                "Pragma": "no-cache",
                                "Cache-Control": "no-cache"
                            },
                            "referrer": "https://growstocks.xyz/",
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.text())
                            .then((text) => {
                                const $ = cheerio.load(text)
                                const dataArr = [];
                                $('div.searchRes').each((i, el) => {
                                    const title = $(el).find('div > div > h2 > a').text().trim();
                                    const price = $(el).find('div > div > p:nth-child(3) > b:nth-child(1)').text().trim();
                                    const editedAt = $(el).find('div > div > p:nth-child(5) > b:nth-child(1)').text().trim();
                                    dataArr.push({
                                        title: title,
                                        price: price ? price : 'Data tidak terbaca',
                                        editedAt: editedAt ? editedAt : 'Data tidak terbaca',
                                    })
                                })
                                resolve(dataArr)
                            })
                    })

                    growstockSearch(q).then(data => {
                        let txt_ = `*GROWSTOCK-SEARCH*\n\n`
                        for (let x = 0; x < data.length; x++) {
                            txt_ += `• Judul: ${data[x].title}\n• Price: ${data[x].price}\n• editedAt: ${data[x].editedAt}\n\n`
                        }
                        znn.reply(from, txt_.trim(), id)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'drakor':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)

                    const drakorSearch = (query) => new Promise((resolve, reject) => {
                        fetch(`https://drakorindo.life/?s=${query}`, {
                            "credentials": "include",
                            "headers": {
                                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
                                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                                "Accept-Language": "en-US,en;q=0.5",
                                "Upgrade-Insecure-Requests": "1",
                                "Pragma": "no-cache",
                                "Cache-Control": "no-cache"
                            },
                            "referrer": "https://drakorindo.life/",
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.text())
                            .then((text) => {
                                const $ = cheerio.load(text)
                                const dataArr = [];
                                $('article.mh-loop-item').each((i, el) => {
                                    const title = $(el).find('div > header > h3 > a').text().trim();
                                    const updateAt = $(el).find('div > header > div > span:nth-child(1)').text().trim();
                                    const commentCOunt = $(el).find('div > header > div > span:nth-child(3) > a').text().trim();
                                    const image = $(el).find('figure > a > img').attr('src');
                                    const url = $(el).find('div > header > h3 > a').attr('href')
                                    const description = $(el).find('div > div > div > p:nth-child(1)').text().trim();
                                    dataArr.push({
                                        title: title,
                                        updateAt: updateAt,
                                        commentCOunt: commentCOunt,
                                        image: image,
                                        source: url,
                                        description: description
                                    })
                                })
                                resolve(dataArr)
                            })
                    })

                    drakorSearch(q).then(data => {
                        let txt_ = `*DRAKOR-SEARCH*\n\n`
                        for(let x = 0; x < data.length; x++) {
                            txt_ += `• Judul: ${data[x].title}\n• updateAt: ${data[x].updateAt}\n• CommentCount: ${data[x].commentCOunt}\n• url: ${data[x].source}\n• Desc: ${data[x].description}\n\n`
                        }
                        znn.reply(from, txt_.trim(), id)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'doramaindo':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)

                    const doramaindoSearch = (query) => new Promise((resolve, reject) => {
                        axios.get(`https://doramaindo.id/?s=${query}&post_type=series`).then(data => {
                            const $ = cheerio.load(data.data)
                            const dataArr = [];
                            $('div.resultnime').each((i, el) => {
                                const title = $(el).find('div > h2 > a').text().trim();
                                const status = $(el).find('div > div:nth-child(2) > p > a:nth-child(2)').text().trim();
                                const genre = $(el).find('div > div:nth-child(3) > p').text().replace('Genre : ', '').trim();
                                const image = $(el).find('div > img').attr('src');
                                const url = $(el).find('div > h2 > a').attr('href')
                                dataArr.push({
                                    title: title,
                                    status: status,
                                    genre: genre,
                                    image: image,
                                    source: url
                                })
                            })
                            resolve({
                                status: 200,
                                data: dataArr
                            })
                        })
                    })

                    doramaindoSearch(q).then(data => {
                        let text_ = '*DORAMA-INDO*\n\n'
                        for (let x = 0; x < data.data.length; x++) {
                            text_ += `• Judul: ${data.data[x].title}\n• Status: ${data.data[x].status}\n• Genre: ${data.data[x].genre}\n• Url: ${data.data[x].source}\n\n`
                        }
                        znn.reply(from, text_.trim(), id)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'dewabatch':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)

                    const dewabatchSearch = (query) => new Promise((resolve, reject) => {
                        axios.get(`https://dewabatch.com/?s=${query}`).then((res) => {
                            const $ = cheerio.load(res.data)
                            const dataArr = [];
                            $('div.dtl').each((i, el) => {
                                const title = $(el).find('h2 > a').text().trim();
                                const url = $(el).find('h2 > a').attr('href');
                                const rating = $(el).find(' div.footer-content-post.fotdesktoppost > div.contentleft > span:nth-child(1) > rating > ratingval > ratingvalue').text().trim();
                                const uploadAt = $(el).find('div.footer-content-post.fotdesktoppost > div.contentleft > span:nth-child(2) > a').text().trim();
                                const desc = $(el).find('div.entry-content.synopspost').text().trim();
                                dataArr.push({
                                    title: title,
                                    rating: rating,
                                    uploadAt: uploadAt,
                                    url: url,
                                    desc: desc
                                })
                            })
                            resolve({
                                status: 200,
                                data: dataArr
                            })
                        })
                    })

                    dewabatchSearch(q).then(data => {
                        let text_ = `</ *DEWA-BATCH* >\n\n`
                        for (let x = 0; x < data.data.length; x++) {
                            text_ += `• Judul: ${data.data[x].title}\n• Rating: ${data.data[x].rating}\n• UploadAt: ${data.data[x].uploadAt}\n• Url: ${data.data[x].url}\n• Desc: ${data.data[x].desc}\n\n`
                        }
                        znn.reply(from, text_.trim(), id)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'artikata':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const artikata = (query) => new Promise((resolve, reject) => {
                        fetch("https://www.artikata.com/translate.php", {
                            "headers": {
                                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                                "accept-language": "en-US,en;q=0.9",
                                "cache-control": "max-age=0",
                                "content-type": "application/x-www-form-urlencoded",
                                "sec-fetch-dest": "document",
                                "sec-fetch-mode": "navigate",
                                "sec-fetch-site": "same-origin",
                                "sec-fetch-user": "?1",
                                "sec-gpc": "1",
                                "upgrade-insecure-requests": "1"
                            },
                            "referrer": "https://www.artikata.com/",
                            "referrerPolicy": "strict-origin-when-cross-origin",
                            "body": `input=${query}&submit.x=0&submit.y=0`,
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "omit"
                        }).then((res) => res.text())
                            .then((text) => {
                                const $ = cheerio.load(text)
                                $('div.contents9 > table > tbody > tr').each((i, el) => {
                                    const artikataa = $(el).find('td:nth-child(2)').text();
                                    resolve(artikataa)
                                })
                            })
                    })

                    artikata(q).then((data) => {
                        znn.reply(from, data, id)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'artimipi':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const artimimpis = (query) => new Promise((resolve, reject) => {
                        axios.get(`https://www.primbon.com/tafsir_mimpi.php?mimpi=${query}&submit=+Submit+`).then((data) => {
                            const $ = cheerio.load(data.data)
                            $('#body').each((i, el) => {
                                const isiresult = $(el).text().trim();
                                resolve(isiresult)
                            })
                        })
                    })

                    artimimpis(q).then((data) => {
                        znn.reply(from, data, id)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'pinterest':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah.contoh : /pinterest anime`, id)
                    if (isLimit(serial)) return

                    async function pinterestSearch(query) {
                        return new Promise((resolve, reject) => {
                            fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                                "headers": {
                                    "accept": "application/json, text/javascript, */*, q=0.01",
                                    "accept-language": "en-US,en;q=0.9",
                                    "cache-control": "no-cache",
                                    "pragma": "no-cache",
                                    "sec-fetch-dest": "empty",
                                    "sec-fetch-mode": "cors",
                                    "sec-fetch-site": "same-origin",
                                    "sec-gpc": "1",
                                    "x-app-version": "9a236a4",
                                    "x-pinterest-appstate": "active",
                                    "x-requested-with": "XMLHttpRequest"
                                },
                                "referrer": "https://www.pinterest.com/",
                                "referrerPolicy": "origin",
                                "body": null,
                                "method": "GET",
                                "mode": "cors"
                            }).then((res) => res.json())
                                .then((json) => {
                                    const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                                    var result = [];
                                    result.push({
                                        link: generatepin.images.orig.url
                                    })
                                    resolve(result)
                                }).catch(reject)
                        })
                    }


                    pinterestSearch(q).then((data) => {
                        znn.sendFileFromUrl(from, data[0].link, `${sender.id}.jpg`, `Hasil Pencarian: ${q}`, id)
                        limitAdd(serial)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'apkpure':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const apkpure = (query) => new Promise((resolve, reject) => {
                        axios.get(`https://apkpure.com/id/search?q=${query}`)
                            .then(({ data }) => {
                                const $ = cheerio.load(data)
                                let title = []
                                let url = []
                                let img = []
                                $('dl.search-dl > dt > a').get().map((rest) => {
                                    url.push($(rest).attr('href'))
                                })
                                $('dl.search-dl > dt > a').get().map((rest) => {
                                    title.push($(rest).attr('title'))
                                })
                                $('dl.search-dl > dt > a > img').get().map((rest) => {
                                    img.push($(rest).attr('src'))
                                })
                                let result = []
                                for (let i = 0; i < url.length; i++) {
                                    result.push({
                                        url: `https://apkpure.com${url[i]}`,
                                        title: title[i],
                                        img: img[i]
                                    })
                                }
                                resolve(result)
                            })
                    })

                    apkpure(q).then(res => {
                        let text_ = `</ *APK-PURE* >\n\n`
                        for (let x = 0; x < res.length; x++) {
                            text_ += `• Judul: ${res[x].title}\n• Url: ${res[x].url}\n\n`
                        }
                        znn.reply(from, text_.trim(), id)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
				 case 'brainly':
                if (isLimit(serial)) return
                    await limitAdd(serial)
                if (args.length === 1) return znn.reply(from, `Kirim perintah /brainly <query>\nContoh : /brainly keajaiban dunia`, id)
                    try {
                    const resp = await axios.get('https://api.vhtear.com/branly?query=' + body.slice(10) + '&apikey=Fauzann99')
                    if (resp.data.error) return znn.reply(from, resp.data.error, id)
                    const anm2 = `➸ Jawaban : ${resp.data.result.data}`
                        znn.reply(from, anm2, id)
                        } catch (err) {
                        console.error(err.message)
                        await znn.reply(from, 'Pertanyaan atau Jawaban Tidak Ditemukan!')
                        znn.sendText(ownerNumber, 'Brainly Error : ' + err)
                        await limitAdd(serial)
						}
                        break
                case 'antara-news':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    const antaranews = () => new Promise((resolve, reject) => {
                        axios.get('https://www.antaranews.com/')
                            .then(({ data }) => {
                                const $ = cheerio.load(data)
                                let title = []
                                let url = []
                                let img = []
                                $('article.simple-post > div > a').get().map((rest) => {
                                    url.push($(rest).attr('href'))
                                })
                                $('article.simple-post > div > a').get().map((rest) => {
                                    title.push($(rest).attr('title'))
                                })
                                $('article.simple-post > div > a > picture > img').get().map((rest) => {
                                    img.push($(rest).attr('data-src'))
                                })
                                let result = []
                                for (let i = 0; i < url.length; i++) {
                                    result.push({
                                        url: url[i],
                                        title: title[i],
                                        img: img[i]
                                    })
                                }
                                resolve(result)
                            })

                    })

                    antaranews().then(res => {
                        let text_ = `</ *ANTARA-NEWS.COM* >\n\n`
                        for (let x = 0; x < res.length; x++) {
                            text_ += `• Judul: ${res[x].title}\n• Url: ${res[x].url}\n\n`
                        }
                        znn.reply(from, text_.trim(), id)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'topanime':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)

                    request(`https://myanimelist.net/topanime.php`, function (err, res, html) {
                        if (!err & res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            var dataArrTopAnime = [];
                            $('tr.ranking-list').each((i, el) => {
                                var judultopanime = $(el).find('h3 > a').text();
                                var scoretopanime = $(el).find('td > div > span').text();
                                var infotopanime = $(el).find('td.title.al.va-t.word-break > div > div.information.di-ib.mt4').text().split(' ').join('');
                                var linktopanime = $(el).find('h3 > a').attr('href');
                                dataArrTopAnime.push({
                                    Judul: judultopanime,
                                    Score: scoretopanime,
                                    Informasi: infotopanime,
                                    Link: linktopanime
                                })
                            })
                            var resulttopanime = `*</ TOP ANIME >*\n\n`
                            for (let i = 0; i < dataArrTopAnime.length; i++) {
                                resulttopanime += `• Judul: ${dataArrTopAnime[i].Judul}\n• Score: ${dataArrTopAnime[i].Score}\n• Link: ${dataArrTopAnime[i].Link}\n• Informasi: ${dataArrTopAnime[i].Informasi}\n`
                            }
                            znn.reply(from, resulttopanime.trim(), id)
                        } else {
                            znn.reply(from, `Gagal Dalam mengambil data!`, id)
                        }
                    })
                    break
                case 'animemenu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *ANIME-MENU* >

• ${prefix}topmanga
• ${prefix}topanime
• ${prefix}konachan <query>
• ${prefix}dewabatch <query>
• ${prefix}mangasearch <optional>
• ${prefix}animesearch <optional>
• ${prefix}maluser <query>
• ${prefix}otakulast
• ${prefix}kemono
• ${prefix}loli
• ${prefix}shota
• ${prefix}waifu
• ${prefix}husbu
• ${prefix}wait <reply image>
• ${prefix}malanime <optional>
• ${prefix}malcharacter <optional>
• ${prefix}neonimelast
• ${prefix}anoboylast`, id)
                    break
                case 'neonimeongoing':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    request('https://nekonime.vip/ongoing-list/', function (err, res, html) {
                        if (!err & res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            var resultnekonime = []
                            $('div.article-body').each((i, el) => {
                                var judulnekonime = $(el).find('a').text();
                                var linknekonime = $(el).find('a').attr('href');
                                var resultnekopush = {
                                    Judul: judulnekonime,
                                    Link: linknekonime
                                }
                                resultnekonime.push(resultnekopush)
                            })
                            var resultnekonime321 = `</ *NEONIME-ON-GOING* >\n\n`
                            for (let i = 0; i < resultnekonime.length; i++) {
                                resultnekonime321 += `• Judul: ${resultnekonime[i].Judul}\n• Link: ${resultnekonime[i].Link}\n\n`
                            }
                            znn.reply(from, resultnekonime321.trim(), id)
                        } else {
                            znn.reply(from, `Terjadi kesalahan saat mengambil data!`, id)
                        }
                    })
                    break
                case 'anoboylast':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    request('https://anoboy.media/', function (err, res, html) {
                        if (!err & res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            var resultanoboylasts = []
                            $('div.amv').each((i, el) => {
                                var judullastanoboy = $(el).find('h3').text();
                                var lastupdatenoboy = $(el).find('div.jamup').text();
                                var resultanoboylast = {
                                    Judul: judullastanoboy,
                                    Waktu: lastupdatenoboy
                                }
                                resultanoboylasts.push(resultanoboylast)
                            })
                            var resultanoboylastt = `</ *ANOBOY-LAST* >\n\n`
                            for (let i = 0; i < resultanoboylasts.length; i++) {
                                resultanoboylastt += `• Judul: ${resultanoboylasts[i].Judul}\n• Waktu: ${resultanoboylasts[i].Waktu.replace('UP', '')}\n\n`
                            }
                            znn.reply(from, resultanoboylastt.trim(), id)
                        } else {
                            znn.reply(from, `Terjadi kesalahan saat mengambil data!`, id)
                        }
                    })
                    break
                case 'kerangmenu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *KERANG-MENU* >

• ${prefix}berapakah <optional>
• ${prefix}apakah <optional>
• ${prefix}rate <optional>
• ${prefix}bisakah <optional>
• ${prefix}kapankah <optional>
• ${prefix}ratecantik <optional>
• ${prefix}ratetampan <optional>
• ${prefix}ratelesbi <optional>
• ${prefix}rategay <optional>`, id)
                    break
                case 'premiummenu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *PREMIUM-MENU* >

• ${prefix}mediafire <url>
• ${prefix}playaudio <query>
• ${prefix}playvideo <query>
• ${prefix}playstore <optional>
• ${prefix}stickerwm author | packname
• ${prefix}takestick author | packname`, id)
                    break
                case 'ccgenerator':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    var CCgenerator = require('creditcard-generator')
                    var resultccgen = `*CC-GENERATOR*\n\n`
                    for (let i = 0; i < 10; i++) {
                        var CCgenerators = CCgenerator.GenCC("Mastercard", 10, Math.random)

                        resultccgen += `${i + 1}. ${CCgenerators[i]}\n`
                    }
                    znn.reply(from, resultccgen, id)
                    break
                case 'toolsmenu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *TOOLS-MENU* >

• ${prefix}ccgenerator
• ${prefix}whois <domain>
• ${prefix}ipgeolocation <ip>
• ${prefix}searchgrup <query>
• ${prefix}nikchecker <nik>
• ${prefix}getsourcecode <link>
• ${prefix}ebase64 <teks>
• ${prefix}dork <teks>
• ${prefix}debase64 <encrypt bs64>
• ${prefix}ehex <teks>
• ${prefix}dehex <encrypt hex>
• ${prefix}encodebinary <teks>
• ${prefix}decodebinary <encrypt binary>`, id)
                    break
                case 'shopmenu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *SHOP-MENU* >

• ${prefix}buycoin <jumlah>
• ${prefix}buylimit <jumlah>
• ${prefix}buypremium <jumlah>`, id)
                    break
                case 'gamemenu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *GAME-MENU* >

• ${prefix}family100
• ${prefix}tebakgambar
• ${prefix}caklontong
• ${prefix}suit batu
• ${prefix}casino <jumlah>
• ${prefix}slot <jumlah>`, id)
                    break
                case 'othermenu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *OTHER-MENU* >

• ${prefix}cekgrup <url>
• ${prefix}transfer 628xxx 5000
• ${prefix}cekatm
• ${prefix}bucin
• ${prefix}me
• ${prefix}tosticker [reply chat orang]
• ${prefix}hilih <reply chat>
• ${prefix}halah <reply chat>
• ${prefix}holoh <reply chat>
• ${prefix}heleh <reply chat>
• ${prefix}huluh <reply chat>
• ${prefix}cekpremium
• ${prefix}readmore teks1 | teks2
• ${prefix}imgtourl
• ${prefix}jadwalbola
• ${prefix}listvn
• ${prefix}bass <reply vn>
• ${prefix}tomp3 <reply video>
• ${prefix}katabijak
• ${prefix}fakta
• ${prefix}pantun
• ${prefix}bahasa
• ${prefix}toimg
• ${prefix}neko
• ${prefix}artimimpi <optional>
• ${prefix}quotes
• ${prefix}infogempa
• ${prefix}bugreport <teks>
`, id)
                    break
                case 'infomenu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *INFO-MENU* >

• ${prefix}limit
• ${prefix}cekcoin
• ${prefix}totaluser
• ${prefix}ping
• ${prefix}speed
• ${prefix}iklan
• ${prefix}info
• ${prefix}limit
• ${prefix}tos
• ${prefix}donate
• ${prefix}H4grup
• ${prefix}owner
• ${prefix}listhell
• ${prefix}listpremium
• ${prefix}listgroup
`, id)
                    break
                case 'systemmenu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *SYSTEM-MENU* >

• ${prefix}antibadword on|off
• ${prefix}antilink on|off
• ${prefix}autosticker on|off
• ${prefix}antinsfw on|off
• ${prefix}leveling on|off
• ${prefix}cekatm
• ${prefix}ceklevel
• ${prefix}topbalance
• ${prefix}toplevel
`, id)
                    break
                case 'donate':
                case 'donasi':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_idid\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `「 *DONATION* 」

• Pulsa : 0813-4429-1903
• Dana  : 0813-4429-1903
• https://trakteer.id/fauzann-t6uwd

_Terimakasih yang sudah mau berdonasi^^, donasi ini akan digunakan untuk penambahan biaya server_
`, id)
                    break
                case 'tos':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `*TOS DarkChat-BOT*
    
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Dilarang Spam Command Terhadap bot atau masuk kedalam listhell
7. Dilarang Telp/Vc Karena Sistem akan memblockir bagi yang menelpon
8. Dilarang Spam demi mendapatkan level!

_Regards © MrG3P5_
`, id)
                    break
                case 'bahasa':
                case 'listbahasa':
                case 'bahasalist':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `List code language\n

• sq        Albanian
• ar        Arabic
• hy        Armenian
• ca        Catalan
• zh        Chinese
• zh-cn     Chinese (China)
• zh-tw     Chinese (Taiwan)
• zh-yue    Chinese (Cantonese)
• hr        Croatian
• cs        Czech
• da        Danish
• nl        Dutch
• en        English
• en-au     English (Australia)
• en-uk     English (United Kingdom)
• en-us     English (United States)
• eo        Esperanto
• fi        Finnish
• fr        French
• de        German
• el        Greek
• ht        Haitian Creole
• hi        Hindi
• hu        Hungarian
• is        Icelandic
• id        Indonesian
• it        Italian
• ja        Japanese
• ko        Korean
• la        Latin
• lv        Latvian
• mk        Macedonian
• no        Norwegian
• pl        Polish
• pt        Portuguese
• pt-br     Portuguese (Brazil)
• ro        Romanian
• ru        Russian
• sr        Serbian
• sk        Slovak
• es        Spanish
• es-es     Spanish (Spain)
• es-us     Spanish (United States)
• sw        Swahili
• sv        Swedish
• ta        Tamil
• th        Thai
• tr        Turkish
• vi        Vietnamese
• cy        Welsh

Example:
${prefix}tts en hello
`, id)
                    break
                case 'H4group': case 'H4grup': case 'h4group': case 'h4grup':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `*LINK GC 1*
https://chat.whatsapp.com/JGNEjPL3kmrBLc3UfeuqmM
                
*LINK GC 2*
https://chat.whatsapp.com/KXrljTUwjYA9AZhYiV7TBJ\nDont forget join ${pushname.substring(0, 10)}, for get information update!`, id)
                    break
                case 'ping':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    const loadedMsg = await znn.getAmountOfLoadedMessages()
                    const chatIds = await znn.getAllChatIds()
                    const groups = await znn.getAllGroups()
                    const groupsIn = groups.filter(x => x.groupMetadata.participants.map(x => [botNumber, '6281281370986@c.us'].includes(x.id._serialized)).includes(true))
                    const me = await znn.getMe()
                    const battery = await znn.getBatteryLevel()
                    const isCharging = await znn.getIsPlugged()
                    const cpus = os.cpus().map(cpu => {
                        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                        return cpu
                    })
                    znn.reply(from, `「 *𝙎𝙏𝘼𝙏𝙐𝙎 𝘾𝙃𝘼𝙏* 」
            
• Loaded Messages: ${loadedMsg}
• Group Chats: ${groups.length}
• Group Joined: ${groupsIn.length}
• Group Left: ${groups.length - groupsIn.length}
• Personal Chats: ${chatIds.length - groups.length}
• Personal Chats Active: ${chatIds.length - groups.length - groupsIn.length}
• Total Chats: ${chatIds.length}
• Total Chats Active: ${chatIds.length - groupsIn.length}
• Charger: ${isCharging}
• Penggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
• Cpu: ${cpus.length}
\n「 *𝙎𝙏𝘼𝙏𝙐𝙎 𝙃𝙋 𝘽𝙊𝙏* 」\n${(`
\n• Battery: ${battery}% ${isCharging ? '_Sedang Dicas_' : '_Tidak dicas_'}
${Object.keys(me.phone).map(key => `• ${key}: ${me.phone[key]}`).join('\n')}`.slice(1, -1))}\n\n\n*Speed* > Uwuuu!`, id)
                    break
                case 'listhell':
                case 'helllist':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    let block = `*「 LIST HELL 」*

Total Block: *${blockNumber.length}* user\n`
                    for (let i of blockNumber) {
                        block += `• ${i.replace('@c.us', '')}\n`
                    }
                    await znn.reply(from, block, id)
                    break
                case 'speed':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    const speeds = moment() / 1000 - t
                    znn.reply(from, `「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${millisToMinutesAndSeconds(speeds)} Sec 💬`, id)
                    break
                case 'ownerbot':
                case 'owner':
                case 'creator':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    await znn.sendContact(from, ownerNumber)
                    break
                case 'tagme':
                    znn.sendTextWithMentions(from, `@${sender.id.replace("@c.us", "")} Tagged`)
                    break
                case 'delete':
                case 'del':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!quotedMsg) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!quotedMsgObj.fromMe) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    await znn.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
                    break
                case 'listgroup':
                    znn.getAllGroups().then((res) => {
                        let gc = `*This is list of group* :\n`
                        for (let i = 0; i < res.length; i++) {
                            gc += `\n═════════════════\n\n• *No* : ${i + 1}\n• *Nama* : ${res[i].name}\n• *Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n• *Tidak Spam* : ${res[i].notSpam}\n`
                        }
                        znn.reply(from, gc, id)
                    })
                    break
                case 'bugreport':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Harap masukkan pesan yang ingin disampaikan`, id)
                    if (isGroupMsg) {
                        znn.sendText(ownerNumber, `「 *BUG-REPORT* 」\n• *Waktu:* ${time}\n• *No Pengirim:* wa.me/${sender.id.match(/\d+/g)}\n• *Group:* ${formattedTitle}\n• *Message:* ${q}`)
                        znn.reply(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.', id)
                    } else {
                        znn.sendText(ownerNumber, `「 *BUG-REPORT* 」\n• *Waktu:* ${time}\n• *No Pengirim:* wa.me/${sender.id.match(/\d+/g)}\n• *Message:* ${q}`)
                        znn.reply(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.', id)
                    }
                    break
                case 'premiumcheck':
                case 'cekpremium':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isPremium) return await znn.reply(from, `Anda belum terdaftar sebagai user premium`, id)
                    const cekExp = ms(premium.getPremiumExpired(sender.id, _premium) - Date.now())
                    await znn.reply(from, `*「 PREMIUM EXPIRE 」*
• *ID*: ${sender.id.replace('@c.us', '')}
• *Premium left*: ${cekExp.days} Hari ${cekExp.hours} Jam ${cekExp.minutes} Menit`, id)
                    break
                case 'premiumlist':
                case 'listpremium':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    let listPremi = '「 PREMIUM USER LIST 」\n\n'
                    let nomorList = 0
                    const deret = premium.getAllPremiumUser(_premium)
                    const arrayPremi = []
                    for (let i = 0; i < deret.length; i++) {
                        const checkExp = ms(premium.getPremiumExpired(deret[i], _premium) - Date.now())
                        arrayPremi.push(await znn.getContact(premium.getAllPremiumUser(_premium)[i]))
                        nomorList++
                        listPremi += `${nomorList}. wa.me/${premium.getAllPremiumUser(_premium)[i].replace('@c.us', '')}\n• Expired : ${checkExp.days}d ${checkExp.hours}h ${checkExp.minutes}m\n\n`
                    }
                    await znn.reply(from, listPremi, id)
                    break
                case 'limit':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isPremium) return await znn.sendText(from, `*「 LIMIT INFO 」*\n\n• Status : Premium👑\n• Sisa limit anda : 9999999\n• Note: Limit reset setip hari!\n• Limit Perhari : Unlimitied`, id)
                    var found = false
                    const limidat = JSON.parse(fs.readFileSync('./database/user/limit.json'))
                    for (let lmt of limidat) {
                        if (lmt.id === serial) {
                            const limitCounts = limitCount - lmt.limit
                            if (limitCounts <= 0) return znn.reply(from, `Limit request anda sudah habis\nUpgrade ke user premium untuk mendapatkan unlimited limit\n_Note : Limit akan direset setiap jam 6 Pagi!_`, id)
                            znn.reply(from, `Sisa limit request anda tersisa : *${limitCounts}*\nUpgrade ke user premium untuk mendapatkan unlimited limit\n_Note : Limit akan direset setiap jam! 6 Pagi_`, id)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: `${serial}`, limit: 1 };
                        limit.push(obj);
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit, 1));
                        znn.reply(from, `Sisa limit request anda tersisa : *${limitCount}*\nUpgrade ke user premium untuk mendapatkan unlimited limit\n_Note : Limit akan direset setiap jam 6 Pagi!_`, id)
                    }
                    break
                case 'cekcoin':
                case 'coin':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    var found = false
                    const limidata = JSON.parse(fs.readFileSync('./database/user/koin.json'))
                    for (let lmt of limidata) {
                        if (lmt.id === serial) {
                            const limitMinings = limitMining - lmt.limit
                            if (limitMinings <= 0) return znn.reply(from, `Coin anda telah habis, silah beli di ${prefix}shopmenu\n\nNOTE: Coin akan ditambah setiap jam 6 pagi/30 coin`, id)
                            znn.reply(from, `*「 INFO - COIN 」*\n\n• Username: ${pushname.substring(0, 10)}\n• Coin: *${limitMinings}* Coin left`, id)
                            found = true
                        }
                    }

                    if (found === false) {
                        let obj = { id: `${serial}`, limit: 1 };
                        limitmining.push(obj);
                        fs.writeFileSync('./database/user/koin.json', JSON.stringify(limitmining, 1));
                        znn.reply(from, `*「 INFO - COIN 」*\n\n• Username: ${pushname.substring(0, 10)}\n• Coin: *${limitMining}* Coin left`, id)
                    }
                    break
                case 'mangasearch':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)

                    axios.get(`https://myanimelist.net/search/prefix.json?type=manga&keyword=${q}&v=1`)
                        .then(({ data }) => {
                            var resultmangasearch = `*RESULT-MANGA*

• Judul: ${data.categories[0].items[0].name}
• ID: ${data.categories[0].items[0].id}
• Link: ${data.categories[0].items[0].url}
• Type: ${data.categories[0].items[0].type}
• Published: ${data.categories[0].items[0].payload.published}
• Score: ${data.categories[0].items[0].payload.score}
• Start-Year: ${data.categories[0].items[0].payload.start_year}
• Status: ${data.categories[0].items[0].payload.status}`
                            znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                            znn.reply(from, resultmangasearch.trim(), id)
                        }).catch((e) => {
                            znn.reply(from, `Manga ${q} tidak di temukan`, id)
                        })
                    break
                case 'neko':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    var nekoo = require('nekos.life');
                    var neko = new nekoo();

                    neko.nsfw.neko()
                        .then((hasil) => {
                            znn.sendFileFromUrl(from, hasil.url, `${sender.id}.jpg`, `*NEKO*`, id)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi Kesalahan`, id)
                        })
                    break
                case 'artimimpi':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    function artimimpi(katakunci) {
                        return new Promise((resolve, reject) => {
                            axios.get('https://www.primbon.com/tafsir_mimpi.php?mimpi=' + katakunci + '&submit=+Submit+')
                                .then(({ data }) => {
                                    var $ = cheerio.load(data)
                                    var detect = $('#body > font > i').text()
                                    var isAva = /Tidak ditemukan/g.test(detect) ? false : true
                                    if (isAva) {
                                        var isi = $('#body').text().split(`Hasil pencarian untuk kata kunci: ${katakunci}`)[1].replace(/\n\n\n\n\n\n\n\n\n/gi, '\n')
                                        var res = {
                                            status: true,
                                            result: isi
                                        }
                                        resolve(res)
                                    } else {
                                        var res = {
                                            status: false,
                                            result: `Data tidak ditemukan! Gunakan kata kunci.`
                                        }
                                        resolve(res)
                                    }
                                })
                                .catch(reject)
                        })
                    }
                    artimimpi(q)
                        .then((hasil) => {
                            if (hasil.result == false) return znn.reply(from, `Artimimpi ${q}, tidak ditemukan`, id)
                            znn.reply(from, hasil.result.trim(), id)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi kesalahan`, id)
                        })
                    break
                case 'stickerwaifu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    const swaifu = () => new Promise((resolve, reject) => {
                        const Arr = ["waifunime", "waifu anime", "waifu kemono"];
                        const random = Arr[Math.floor(Math.random() * (Arr.length))]
                        fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${random}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${random}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                            "headers": {
                                "accept": "application/json, text/javascript, */*, q=0.01",
                                "accept-language": "en-US,en;q=0.9",
                                "cache-control": "no-cache",
                                "pragma": "no-cache",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "sec-gpc": "1",
                                "x-app-version": "9a236a4",
                                "x-pinterest-appstate": "active",
                                "x-requested-with": "XMLHttpRequest"
                            },
                            "referrer": "https://www.pinterest.com/",
                            "referrerPolicy": "origin",
                            "body": null,
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.json())
                            .then((json) => {
                                const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                                resolve({
                                    status: 200,
                                    link: generatepin.images.orig.url
                                })
                            })
                    })

                    swaifu().then((data) => {
                        znn.sendStickerfromUrl(from, data.link, id)
                    }).catch((e) => {
                        znn.reply(from, `Gagal dalam pengambilan data`, id)
                    })
                    break
                case 'maluser':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    try {
                        const result = await axios.get(`https://api.jikan.moe/v3/user/${q}`)
                        const jikan = result.data
                        const Data = `*「 USER - MYANIMELIST 」*

• Username: ${jikan.username}
• User ID: ${jikan.user_id}
• Gender: ${jikan.gender}
• Location: ${jikan.location}
• Joined: ${jikan.joined}

*Anime Stats*
• Days Watched: ${jikan.anime_stats.days_watched}
• Mean Score: ${jikan.anime_stats.mean_score}
• Currently Watching: ${jikan.anime_stats.watching}
• Completed: ${jikan.anime_stats.completed}
• On Hold: ${jikan.anime_stats.on_hold}
• Dropped: ${jikan.anime_stats.dropped}
• Plan to Watch: ${jikan.anime_stats.plan_to_watch}

*Manga Stats*
• Days Read: ${jikan.manga_stats.days_read}
• Mean Score: ${jikan.manga_stats.mean_score}
• Currently Reading: ${jikan.manga_stats.reading}
• Completed: ${jikan.manga_stats.completed}
• On Hold: ${jikan.manga_stats.on_hold}
• Dropped: ${jikan.manga_stats.dropped}
• Plan to Read: ${jikan.manga_stats.plan_to_read}`

                        await znn.sendFileFromUrl(from, `${jikan.image_url}`, `user.png`, Data)
                    } catch (err) {
                        console.log(err)
                        await znn.sendFileFromUrl(from, errorImg, 'error.png', 'Maaf, User tidak ditemukan')
                    }
                    break
                case 'lk21':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    function lk21Search(query) {
                        return new Promise((resolve, reject) => {
                            var film = query
                            axios.get('http://167.99.71.200/?s=' + film)
                                .then(({ data }) => {
                                    var $ = cheerio.load(data)
                                    var url = $('div > div.content-thumbnail.text-center > a').attr('href')
                                    axios.get(url)
                                        .then(({ data }) => {
                                            var $ = cheerio.load(data)
                                            var judul = $('div > div.gmr-movie-data.clearfix > div > h1').text()
                                            var desc = $('div > div.entry-content.entry-content-single > p:nth-child(1)').text()

                                            var link1 = $('#download1').attr('href')
                                            var link2 = $('#download2').attr('href')
                                            var link = []
                                            link.push({
                                                link1,
                                                link2
                                            })
                                            var res = {
                                                result: true,
                                                title: judul,
                                                description: desc,
                                                link: link
                                            }
                                            resolve(res)
                                        }).catch(() => {
                                            reject({
                                                status: false,
                                                result: `Tidak bisa menemukan data ${query}`
                                            })
                                        })
                                }).catch(() => {
                                    reject({
                                        status: false,
                                        result: `Tidak bisa menemukan data ${query}`
                                    })
                                })
                        })
                    }

                    lk21Search(q)
                        .then((hasil) => {
                            var resultlk21s = `「 MOVIE-FOUND! 」

• Judul: ${hasil.title}
• Deskripsi: ${hasil.description}
• Link: ${hasil.link[0].link1}
`
                            if (hasil.link[0].link1 == undefined) return znn.reply(from, `Maaf untuk movie ${q}, Url masih belum tersedia`, id)
                            znn.reply(from, resultlk21s, id)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi kesalahan`, id)
                        })
                    break
			   case 'movie':
                if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                if (isLimit(serial)) return
                await limitAdd(serial)
                await znn.reply(from, ind.wait(), id)
                misc.movie(q)
                    .then(async ({ result }) => {
                        let movies = `Result for: *${result.judul}*`
                        for (let i = 0; i < result.data.length; i++) {
                            movies +=  `\n\n➸ *Quality:* : ${result.data[i].resolusi}\n➸ *URL*: ${result.data[i].urlDownload}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        movies += '\n\nBy: VideFrelan'
                        await znn.reply(from, movies, id)
                        console.log('Success sending movie result!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await znn.reply(from, 'Error!', id)
                    })
            break
                case 'wallpaper':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var { AnimeWallpaper } = require('../node_modules/anime-wallpaper/dist');
                    var wall = new AnimeWallpaper();
                    wall.getAnimeWall2(q)
                        .then((res) => {
                            znn.sendFileFromUrl(from, res[0].image, `${sender.id}.jpg`, `Hasil Pencarian: ${res[0].title}`, id)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi Kesalahan`, id)
                        })
                    break
                case 'infogempa':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    try {

                        request(`https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg`, (error, res, html) => {
                            if (!error && res.statusCode == 200) {
                                var $ = cheerio.load(html)
                                var daerahbmkg = $('body > div.wrapper > div.container.content > div > div.col-md-8 > div > div > table > tbody > tr:nth-child(1) > td:nth-child(6) > a').text();
                                var Tkedalaman = $('body > div.wrapper > div.container.content > div > div.col-md-8 > div > div > table > tbody > tr:nth-child(1) > td:nth-child(5)').text();
                                var Magnitudo = $('body > div.wrapper > div.container.content > div > div.col-md-8 > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4)').text();
                                var lintangBujur = $('body > div.wrapper > div.container.content > div > div.col-md-8 > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3)').text();
                                var waktugempa = $('body > div.wrapper > div.container.content > div > div.col-md-8 > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2)').text();
                                var resultbmkg = `「 *INFO-GEMPA* 」

• Daerah: ${daerahbmkg.trim()}
• Tingkat Kedalaman: ${Tkedalaman.trim()}
• Magnitud: ${Magnitudo.trim()}
• LintangBujur: ${lintangBujur.trim()}
• Waktu: ${waktugempa.trim()}`
                            }
                            znn.reply(from, resultbmkg, id)
                        })
                    } catch (e) {
                        znn.reply(from, `Terjadi Kesalahan`, id)
                    }
                    break
                case 'kemono':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    const kemono = () => new Promise((resolve, reject) => {
                        const Arr = ["kemononime", "kemono anime", "anime kemono"];
                        const random = Arr[Math.floor(Math.random() * (Arr.length))]
                        fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${random}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${random}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                            "headers": {
                                "accept": "application/json, text/javascript, */*, q=0.01",
                                "accept-language": "en-US,en;q=0.9",
                                "cache-control": "no-cache",
                                "pragma": "no-cache",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "sec-gpc": "1",
                                "x-app-version": "9a236a4",
                                "x-pinterest-appstate": "active",
                                "x-requested-with": "XMLHttpRequest"
                            },
                            "referrer": "https://www.pinterest.com/",
                            "referrerPolicy": "origin",
                            "body": null,
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.json())
                            .then((json) => {
                                const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                                resolve({
                                    status: 200,
                                    link: generatepin.images.orig.url
                                })
                            })
                    })

                    kemono().then((data) => {
                        znn.sendFileFromUrl(from, data.link, `${sender.id}.png`, `*RANDOM-KEMONO*`, id)
                    }).catch((e) => {
                        console.log(e)
                    })
                    break
                case 'wait':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                        if (isMedia) {
                            var mediaData = await decryptMedia(message, uaOverride)
                        } else {
                            var mediaData = await decryptMedia(quotedMsg, uaOverride)
                        }
                        const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        znn.reply(from, 'Searching....', id)
                        fetch('https://trace.moe/api/search', {
                            method: 'POST',
                            body: JSON.stringify({ image: imgBS4 }),
                            headers: { "Content-Type": "application/json" }
                        })
                            .then(respon => respon.json())
                            .then(resolt => {
                                if (resolt.docs && resolt.docs.length <= 0) {
                                    znn.reply(from, 'Maaf, saya tidak tau ini anime apa', id)
                                }
                                const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                                teks = ''
                                if (similarity < 0.92) {
                                    teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                                }
                                teks += `• Title Japanese: ${title}\n• Title chinese: ${title_chinese}\n• Title Romaji: ${title_romaji}\n• Title English: ${title_english}\n`
                                teks += `• Ecchi: ${is_adult}\n`
                                teks += `• Eps: ${episode.toString()}\n`
                                teks += `• Kesamaan: ${(similarity * 100).toFixed(1)}%\n`
                                var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                                znn.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                                    znn.reply(from, teks, id)
                                })
                            })
                            .catch(() => {
                                znn.reply(from, 'Error !', id)
                            })
                    } else {
                        znn.reply(from, `Format salah, Silahkan reply gambar anime dengan caption ${prefix}wait`, id)
                    }
                    break
                case 'waifu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    const waifu = () => new Promise((resolve, reject) => {
                        const Arr = ["waifunime", "waifu anime", "anime waifu"];
                        const random = Arr[Math.floor(Math.random() * (Arr.length))]
                        fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${random}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${random}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                            "headers": {
                                "accept": "application/json, text/javascript, */*, q=0.01",
                                "accept-language": "en-US,en;q=0.9",
                                "cache-control": "no-cache",
                                "pragma": "no-cache",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "sec-gpc": "1",
                                "x-app-version": "9a236a4",
                                "x-pinterest-appstate": "active",
                                "x-requested-with": "XMLHttpRequest"
                            },
                            "referrer": "https://www.pinterest.com/",
                            "referrerPolicy": "origin",
                            "body": null,
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.json())
                            .then((json) => {
                                const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                                resolve({
                                    status: 200,
                                    link: generatepin.images.orig.url
                                })
                            })
                    })

                    waifu().then((data) => {
                        znn.sendFileFromUrl(from, data.link, `${sender.id}.png`, `WAIFU!`, id)
                    }).catch((e) => {
                        console.log(e)
                    })
                    break
                case 'husbu':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    const diti = fs.readFileSync('./lib/husbu.json')
                    const ditiJsin = JSON.parse(diti)
                    const rindIndix = Math.floor(Math.random() * ditiJsin.length)
                    const rindKiy = ditiJsin[rindIndix]
                    znn.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
                    break
                case 'citacita':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var xzyppp = fs.readFileSync('./dbraw/citacita.json')
                    var ditiin = JSON.parse(xzyppp)
                    var rwscwx = Math.floor(Math.random() * ditiin.length)
                    var rin421 = ditiin[rwscwx]
                    znn.sendPtt(from, rin421.citacita, `${sender.id}.mp3`, id)
                    break
                case 'fakta':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var xzyppp = fs.readFileSync('./dbraw/fakta.json')
                    var ditiin = JSON.parse(xzyppp)
                    var rwscwx = Math.floor(Math.random() * ditiin.length)
                    var rin421 = ditiin[rwscwx]
                    znn.reply(from, rin421.fakta, id)
                    break
                case 'katabijak':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var xzyppp = fs.readFileSync('./dbraw/katabijak.json')
                    var ditiin = JSON.parse(xzyppp)
                    var rwscwx = Math.floor(Math.random() * ditiin.length)
                    var rin421 = ditiin[rwscwx]
                    znn.reply(from, rin421.katabijak, id)
                    break
                case 'darkjoke':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var xzyppp = fs.readFileSync('./dbraw/darkjoke.json')
                    var ditiin = JSON.parse(xzyppp)
                    var rwscwx = Math.floor(Math.random() * ditiin.length)
                    var rin421 = ditiin[rwscwx]
                    znn.sendFileFromUrl(from, rin421.result, `${sender.id}.jpg`, `*Dark-Joke*`, id)
                    break
                case 'quotes':
                case 'quote':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var xzyppp = fs.readFileSync('./dbraw/quote.json')
                    var ditiin = JSON.parse(xzyppp)
                    var rwscwx = Math.floor(Math.random() * ditiin.length)
                    var rin421 = ditiin[rwscwx]
                    znn.reply(from, `Quotes: ${rin421.quote}\nAuthor: ${rin421.author}`, id)
                    break
					
					
		   // ASUPANNNNNNNN
			    case 'lolivid':  //Piyobot
                if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                if (isLimit(serial)) return
                await limitAdd(serial)
			    await znn.reply(from, ind.wait(), id)
                weeaboo.loli()
                    .then(async (body) => {
                        let lolipiyo = body.split('\n')
                        let papololi = lolipiyo[Math.floor(Math.random() * lolipiyo.length)]
                        await znn.sendFileFromUrl(from, papololi, 'loli.mp4', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await znn.reply(from, 'Error!', id)
                    })
                break
				case 'ptl': // shansekai
                if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                if (isLimit(serial)) return
                await limitAdd(serial)
                await znn.reply(from, ind.wait(), id)
                fun.asupan()
                    .then(async (body) => {
                        const asupan = body.split('\n')
                        const asupanx = asupan[Math.floor(Math.random() * asupan.length)]
                        await znn.sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'asupan.mp4', 'Tuh asu, jan dipake coly.', id)
                        console.log('Success sending video!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await znn.reply(from, 'Error!', id)
                    })
            break
		   // YESSSS
                case 'dare':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    var dbtodgame = JSON.parse(fs.readFileSync('./dbraw/dare.json'))
                    var rdtodgame = dbtodgame[Math.floor(Math.random() * (dbtodgame.length))]
                    znn.reply(from, rdtodgame, id)
                    break
                case 'truth':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    var dbtodgame = JSON.parse(fs.readFileSync('./dbraw/truth.json'))
                    var rdtodgame = dbtodgame[Math.floor(Math.random() * (dbtodgame.length))]
                    znn.reply(from, rdtodgame, id)
                    break
                case 'cehor':
                case 'ceritahoror':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var xzyppp = fs.readFileSync('./dbraw/cehor.json')
                    var ditiin = JSON.parse(xzyppp)
                    var rwscwx = Math.floor(Math.random() * ditiin.length)
                    var rin421 = ditiin[rwscwx]
                    znn.sendFileFromUrl(from, rin421.thumb, `${sender.id}.jpg`, `「 *CERITA-HOROR* 」\n\n• Judul: ${rin421.judul}\n• Deskripsi: ${rin421.desc}\n• Story: ${rin421.story}`)
                    break
                case 'caklontong':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isCakLontong(serial)) return await znn.reply(from, `*IND*\n• Masih ada jawaban yang belum dijawab\n\n*ENG*\n• There are still unanswered answers`, id)
                    if (isLimitCoin(serial)) return znn.reply(from, `Sepertinya coinmu habis, Silahkan beli di ${prefix}shopmenu`, id)
                    var hargafamily100 = 5000
                    var waktufamily100 = 30
                    if (checkATMuser(serial) <= hargafamily100) return znn.reply(from, `Saldomu harus ada Rp. ${convertBalanceToString(hargafamily100)}+ untuk memainkan game ini, silahkan cek dengan cara ${prefix}cekatm`, id)
                    if (checkATMuser(serial) >= hargafamily100) {
                        var xzyppp = fs.readFileSync('./dbraw/caklontong.json')
                        var ditiin = JSON.parse(xzyppp)
                        var rwscwx = Math.floor(Math.random() * ditiin.length)
                        var rin421 = ditiin[rwscwx]
                        var jawabancaklontong = rin421.jawaban.toLowerCase()
                        var replacetekscaklontong = jawabancaklontong.replace(/a|i|u|e|o/g, "-")
                        znn.reply(from, `*SOAL*\n• ${rin421.soal} ?\n\n• WAKTU: 30 DETIK\n• Kisi-Kisi: ${replacetekscaklontong}`, id)
                        addResultCaklontong(chatId, jawabancaklontong, waktufamily100)
                        cekWaktuCaklontong(chatId)
                        limitAddCoin(serial)
                    }
                    break
                case 'family100':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isCakLontong(serial)) return await znn.reply(from, `*IND*\n• Masih ada jawaban yang belum dijawab\n\n*ENG*\n• There are still unanswered answers`, id)
                    if (isLimitCoin(serial)) return znn.reply(from, `Sepertinya coinmu habis, Silahkan beli di ${prefix}shopmenu`, id)
                    var hargafamily100 = 5000
                    var waktufamily100 = 30
                    if (checkATMuser(serial) <= hargafamily100) return znn.reply(from, `Saldomu harus ada Rp. ${convertBalanceToString(hargafamily100)}+ untuk memainkan game ini, silahkan cek dengan cara ${prefix}cekatm`, id)
                    if (checkATMuser(serial) >= hargafamily100) {
                        var xzyppp = fs.readFileSync('./dbraw/family100.json')
                        var ditiin = JSON.parse(xzyppp)
                        var rwscwx = Math.floor(Math.random() * ditiin.length)
                        var rin421 = ditiin[rwscwx]
                        var jawabancaklontong = rin421.jawaban.toLowerCase()
                        var replacetekscaklontong = jawabancaklontong.replace(/a|i|u|e|o/g, "-")
                        znn.reply(from, `*SOAL*\n• ${rin421.soal} ?\n\n• WAKTU: 30 DETIK\n• Kisi-Kisi: ${replacetekscaklontong}`, id)
                        addResult100(chatId, jawabancaklontong, waktufamily100)
                        cekWaktuF100(chatId)
                        limitAddCoin(serial)
                    }
                    break
                case 'motivasi':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var xzyppp = fs.readFileSync('./dbraw/motivasi.json')
                    var ditiin = JSON.parse(xzyppp)
                    var rwscwx = Math.floor(Math.random() * ditiin.length)
                    var rin421 = ditiin[rwscwx]
                    znn.reply(from, rin421.motivasi, id)
                    break
                case 'pantun':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var xzyppp = fs.readFileSync('./dbraw/pantun.json')
                    var ditiin = JSON.parse(xzyppp)
                    var rwscwx = Math.floor(Math.random() * ditiin.length)
                    var rin421 = ditiin[rwscwx]
                    znn.reply(from, rin421.Pantun, id)
                    break
                case 'malanime':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var malScraperss = require('mal-scraper')
                    var search = malScraperss.search

                    search.search('anime', { term: q })
                        .then((res) => {
                            var resultmalscrap = `「 *RESULT-FOUND!* 」
  
• Judul: ${res[0].title}
• Score: ${res[0].score}
• Member: ${res[0].members}
• Url: ${res[0].url}
• Deskripsi: ${res[0].shortDescription}
`
                            znn.sendFileFromUrl(from, res[0].thumbnail, `${sender.id}.jpg`, resultmalscrap, id)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi Kesalahan`, id)
                        })
                    break
                case 'malcharacter':
                    const keywords = args.join(' ')
                    try {
                        const data = await fetch(
                            `https://api.jikan.moe/v3/search/character?q=${keywords}`
                        )
                        const parsed = await data.json()
                        if (!parsed) {
                            await znn.sendFileFromUrl(from, errorImg, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
                            return null
                        }
                        const { name, alternative_names, url, image_url } = parsed.results[0]
                        const contentt = `*Anime Ditemukan!*

✨️ *Name:* ${name}
💌️ *Alternative Names:* ${alternative_names}
🌐️ *URL*: ${url}`

                        const image = await bent("buffer")(image_url)
                        const base64 = `data:image/jpg;base64,${image.toString("base64")}`
                        znn.sendImage(from, base64, name, contentt)
                    } catch (err) {
                        console.error(err.message)
                        await znn.sendFileFromUrl(from, errorImg, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
                    }
                    break
                case 'shota':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var gis = require('g-i-s');

                    async function randomShota(query) {
                        return new Promise((resolve, reject) => {
                            var optsss = {
                                searchTerm: query,
                                queryStringAddition: '&tbs=ic:trans',
                                filterOutDomains: [
                                    'pinterest.com'
                                ]
                            };
                            gis(optsss, logResults)
                            function logResults(error, results) {
                                if (error) {
                                    reject(error)
                                }
                                else {
                                    let url = []
                                    for (let i = 0; i < results.length; i++) {
                                        url.push(decodeURIComponent(JSON.parse(`"${results[i].url}"`)))
                                    }
                                    resolve(url)
                                }
                            }
                        })
                    }


                    randomShota('shota anime')
                        .then((res) => {
                            var mathlolires = Math.floor(Math.random() * 50) + 1;
                            znn.sendFileFromUrl(from, res[mathlolires], `${sender.id}.jpg`, `*SHOTA*`, id)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi Kesalahan`, id)
                        })
                    break
                case 'loli':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    var gis = require('g-i-s');

                    async function randomLoli(query) {
                        return new Promise((resolve, reject) => {
                            var optsss = {
                                searchTerm: query,
                                queryStringAddition: '&tbs=ic:trans',
                                filterOutDomains: [
                                    'pinterest.com'
                                ]
                            };
                            gis(optsss, logResults)
                            function logResults(error, results) {
                                if (error) {
                                    reject(error)
                                }
                                else {
                                    let url = []
                                    for (let i = 0; i < results.length; i++) {
                                        url.push(decodeURIComponent(JSON.parse(`"${results[i].url}"`)))
                                    }
                                    resolve(url)
                                }
                            }
                        })
                    }


                    randomLoli('loli cute')
                        .then((res) => {
                            var mathlolires = Math.floor(Math.random() * 50) + 1;
                            znn.sendFileFromUrl(from, res[mathlolires], `${sender.id}.jpg`, `*LOLIMU KAWAN*`, id)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi Kesalahan`, id)
                        })
                    break
                case 'neonimelast':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    try {
                        function neonimeLatest() {
                            return new Promise((resolve, reject) => {
                                axios.get('https://neonime.vip')
                                    .then(({ data }) => {
                                        var $ = cheerio.load(data)
                                        var ress = []
                                        var season = []
                                        var hasil = []
                                        $('div.item.episode-home > span').get().map((ress) => {
                                            season.push($(ress).text())
                                        })
                                        $('div.item.episode-home > div.image > a > img').get().map((rest) => {
                                            ress.push({
                                                title: $(rest).attr('alt'),
                                                thumb: $(rest).attr('data-src')
                                            })
                                        })
                                        for (let i = 0; i < ress.length; i++) {
                                            hasil.push({
                                                title: ress[i].title,
                                                season: season[i],
                                                thumb: ress[i].thumb
                                            })
                                        }
                                        resolve(hasil)
                                    }).catch(() => reject({
                                        status: false,
                                        message: "404"
                                    }))
                            })
                        }

                        neonimeLatest()
                            .then((hasil) => {
                                let resultneoinme = `「 *NEOINME-LAST 」\n\n`
                                for (let i = 0; i < hasil.length; i++) {
                                    resultneoinme += `• Judul: ${hasil[i].title}\n• Season: ${hasil[i].season}\n\n`
                                }
                                znn.reply(from, resultneoinme, id)
                            })
                    } catch (err) {
                        znn.reply(from, `Terjadi kesalahan!`, id)
                    }
                    break
                case 'profile':
                case 'me':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (quotedMsg) {
                        const getQuoted = quotedMsgObj.sender.id
                        const profilePic = await znn.getProfilePicFromServer(getQuoted)
                        const username = quotedMsgObj.sender.name
                        const statuses = await znn.getStatus(getQuoted)
                        const benet = _ban.includes(getQuoted) ? 'Yes' : 'No'
                        const adm = groupAdmins.includes(getQuoted) ? 'Yes' : 'No'
                        const premi = premium.checkPremiumUser(getQuoted, _premium) ? 'Yes' : 'No'
                        const levelMe = level.getLevelingLevel(getQuoted, _level)
                        const xpMe = level.getLevelingXp(getQuoted, _level)
                        const req = 200 * (Math.pow(2, levelMe) - 1)
                        const { status } = statuses
                        if (profilePic === undefined) {
                            var pfp = errorImg
                        } else {
                            pfp = profilePic
                        }
                        await znn.sendFileFromUrl(from, pfp, `${username}.jpg`, `*「 USER-INFO 」*

• Username: ${username}
• Status: ${status}
• Premium: ${premi}
• Banned: ${benet}
• Admin: ${adm}

_Your progress:_
• Level: ${levelMe}
• XP: ${xpMe} / ${req}`, id)
                    } else {
                        const profilePic = await znn.getProfilePicFromServer(sender.id)
                        const username = pushname
                        const statuses = await znn.getStatus(sender.id)
                        const benet = isBanned ? 'Yes' : 'No'
                        const adm = isGroupAdmins ? 'Yes' : 'No'
                        const premi = isPremium ? 'Yes' : 'No'
                        const levelMe = level.getLevelingLevel(sender.id, _level)
                        const xpMe = level.getLevelingXp(sender.id, _level)
                        const req = 200 * (Math.pow(2, levelMe) - 1)
                        const { status } = statuses
                        if (profilePic === undefined) {
                            var pfps = errorImg
                        } else {
                            pfps = profilePic
                        }
                        await znn.sendFileFromUrl(from, pfps, `${username}.jpg`, `*「 USER-INFO 」*

• Username: ${username}
• Status: ${status}
• Premium: ${premi}
• Banned: ${benet}
• Admin: ${adm}

_Your progress:_
• Level: ${levelMe}
• XP: ${xpMe} / ${req}`, id)
                    }
                    break
                case 'artinama':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    axios.get(`https://www.primbon.com/arti_nama.php?nama1=${q}&proses=+Submit%21+`)
                        .then(({ data }) => {
                            var $ = cheerio.load(data)
                            var result = $('#body').text().split('Nama:')[0]
                            znn.reply(from, result.trim(), id)
                        }).catch((err) => {
                            znn.reply(from, `Terjadi kesalahan`, id)
                        })
                    break
                case 'tod':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    await znn.reply(from, 'Sebelum bermain berjanjilah akan melaksanakan apapun perintah yang diberikan.', id)
                    await znn.sendText(from, `Silakan ketik *${prefix}truth* atau *${prefix}dare*`)
                    break
                case 'happymod':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    request(`https://www.happymod.com/search.html?q=${q}`, function (err, res, html) {
                        if (!err && res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            var dataArrhappymod = [];
                            $('div.pdt-app-msg').each((i, el) => {
                                var titlehappymod = $(el).find('h3 > a').text();
                                var linkhappymod = $(el).find('h3 > a').attr('href');
                                var ratehappymod = $(el).find('div.clearfix > span').text();
                                dataArrhappymod.push({
                                    judul: titlehappymod,
                                    link: 'https://www.happymod.com' + linkhappymod,
                                    rate: ratehappymod
                                })
                            })
                            var resulthappymodsearch = `</ *Happy - MOD* >\n\n`
                            for (let i = 0; i < dataArrhappymod.length; i++) {
                                resulthappymodsearch += `• Judul: ${dataArrhappymod[i].judul}\n• Link: ${dataArrhappymod[i].link}\n• Rating: ${dataArrhappymod[i].rate}\n\n`
                            }
                            znn.reply(from, resulthappymodsearch.trim(), id)
                        } else {
                            znn.reply(from, `Gagal mengambil data pada pencarian: ${q}`, id)
                        }
                    })
                    break
                case 'readmore':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (!q.includes('|')) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    var more = String.fromCharCode(8206)
                    var readMore = more.repeat(4001)
                    const rmoreteks1 = q.substring(0, q.indexOf('|') - 1)
                    const rmoreteks2 = q.substring(q.lastIndexOf('|') + 2)
                    znn.reply(from, `${rmoreteks1}${readMore}${rmoreteks2}`, id)
                    break
                case 'jadwalbola':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                    try {

                        request(`https://gilabola.com/internasional/jadwal-bola-malam-ini/`, (error, res, html) => {
                            if (!error && res.statusCode == 200) {
                                var $ = cheerio.load(html)
                                var hariinfobola = $('#tablepress-5 > tbody > tr.row-1 > td.column-1').text();
                                var ingfobola1 = $('#tablepress-5 > tbody > tr.row-1 > td.column-2').text();
                                var ingfobola2 = $('#tablepress-5 > tbody > tr.row-1 > td.column-3').text();
                                var resultingfobola = `</ *JADWAL-BOLA* >

• Hari: ${hariinfobola.trim()}
• Pertandingan: ${ingfobola1.trim()}
• StasiunTV: ${ingfobola2.trim()}`
                            }
                            znn.reply(from, resultingfobola, id)
                        })
                    } catch (e) {
                        znn.reply(from, `Terjadi Kesalahan`, id)
                    }
                    break
                case 'stickerwm':
                case 'stcwm':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isPremium) return znn.reply(from, `Maaf kak ${pushname.substring(0, 10)}\nPerintah ini hanya bisa digunakan user premium!`, id)
                    if (!q.includes('|')) return await znn.reply(from, `Format salah.kirim gambar dengan caption /stickerwm nama | nama`, id)
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                    if (isMedia && isImage || isQuotedImage) {
                        await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                        const packname = q.substring(0, q.indexOf('|') - 1)
                        const author = q.substring(q.lastIndexOf('|') + 2)
                        exif.create(packname, author, `stc_${sender.id}`)
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const mediaData = await decryptMedia(encryptMedia, uaOverride)
                        webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                            .then((res) => {
                                sharp(res)
                                    .resize(512, 512)
                                    .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                        if (err) return console.error(err)
                                        await exec(`webpmux -set exif ./temp/stc_${sender.id}.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: false })
                                        if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                            const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                            const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                            await znn.sendRawWebpAsSticker(from, base64)
                                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                            fs.unlinkSync(`./temp/${sender.id}.webp`)
                                            fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                            fs.unlinkSync(`./temp/stc_${sender.id}.exif`)
                                        }
                                    })
                            })
                            .catch(async (err) => {
                                console.error(err)
                                await znn.reply(from, 'Error!', id)
                            })
                    } else {
                        await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'takestick':
                case 'take':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isPremium) return znn.reply(from, `Maaf kak ${pushname.substring(0, 10)}\nPerintah ini hanya bisa digunakan user premium!`, id)
                    if (!q.includes('|')) return await znn.reply(from, `Format salah.reply sticker dengan caption /takestick nama | nama`, id)
                    if (quotedMsg && quotedMsg.type == 'sticker') {
                        const mediaDataTake = await decryptMedia(quotedMsg, uaOverride)
                        const packname = q.substring(0, q.indexOf('|') - 1)
                        const author = q.substring(q.lastIndexOf('|') + 2)
                        exif.create(packname, author, `takestick_${sender.id}`)
                        webp.buffer2webpbuffer(mediaDataTake, 'jpg', '-q 100')
                            .then((res) => {
                                sharp(res)
                                    .resize(512, 512)
                                    .toFile(`./temp/takestickstage_${sender.id}.webp`, async (err) => {
                                        if (err) return console.error(err)
                                        await exec(`webpmux -set exif ./temp/takestick_${sender.id}.exif ./temp/takestickstage_${sender.id}.webp -o ./temp/takestick_${sender.id}.webp`, { log: false })
                                        if (fs.existsSync(`./temp/takestick_${sender.id}.webp`)) {
                                            const data = fs.readFileSync(`./temp/takestick_${sender.id}.webp`)
                                            const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                            await znn.sendRawWebpAsSticker(from, base64)
                                            fs.unlinkSync(`./temp/takestick_${sender.id}.webp`)
                                            fs.unlinkSync(`./temp/takestickstage_${sender.id}.webp`)
                                            fs.unlinkSync(`./temp/takestick_${sender.id}.exif`)
                                        }
                                    })
                            })
                    } else {
                        await znn.reply(from, `Format salah.reply sticker dengan caption /takestick nama | nama`, id)
                    }
                    break
                case 'tocs':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (quotedMsg && quotedMsg.type == 'sticker') {
                        await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const roundedCorner = Buffer.from(
                            '<svg><rect x="0" y="0" width="600" height="600" rx="300" ry="300"/></svg>'
                        );
                        webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                            .then((res) => {
                                sharp(mediaData).resize({
                                    width: 600,
                                    height: 600
                                }).composite([{
                                    input: roundedCorner,
                                    blend: 'dest-in'
                                }])
                                    .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                        if (err) return console.error(err)
                                        await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: false })
                                        if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                            const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                            const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                            await znn.sendRawWebpAsSticker(from, base64)
                                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                            fs.unlinkSync(`./temp/${sender.id}.webp`)
                                            fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                        }
                                    })
                            })
                    } else {
                        await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'circlesticker':
                case 'circlestiker':
                case 'cs':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isMedia && isImage || isQuotedImage) {
                        await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const mediaData = await decryptMedia(encryptMedia, uaOverride)
                        const roundedCorners = Buffer.from(
                            '<svg><rect x="0" y="0" width="600" height="600" rx="300" ry="300"/></svg>'
                        );
                        webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                            .then((res) => {
                                sharp(mediaData).resize({
                                    width: 600,
                                    height: 600
                                }).composite([{
                                    input: roundedCorners,
                                    blend: 'dest-in'
                                }])
                                    .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                        if (err) return console.error(err)
                                        await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: false })
                                        if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                            const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                            const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                            await znn.sendRawWebpAsSticker(from, base64)
                                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                            fs.unlinkSync(`./temp/${sender.id}.webp`)
                                            fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                        }
                                    })
                            })
                    } else {
                        await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'scrop':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isMedia && isImage || isQuotedImage) {
                        const encryptMediass = isQuotedImage ? quotedMsg : message
                        const mediaDatass = await decryptMedia(encryptMediass, uaOverride)
                        const namestickernye = Math.floor(Math.random() * 10) + 30
                        webp.buffer2webpbuffer(mediaDatass, 'jpg', '-q 100')
                            .then((res) => {
                                sharp(res)
                                    .resize(512, 512)
                                    .toFile(`./temp/stage_${namestickernye}.webp`, async (err) => {
                                        if (err) return console.error(err)
                                        await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${namestickernye}.webp -o ./temp/${namestickernye}_stikel.webp`, { log: false })
                                        if (fs.existsSync(`./temp/${namestickernye}_stikel.webp`)) {
                                            const data = fs.readFileSync(`./temp/${namestickernye}_stikel.webp`)
                                            const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                            await znn.sendRawWebpAsSticker(from, base64)
                                            //console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                            fs.unlinkSync(`./temp/${namestickernye}_stikel.webp`)
                                            fs.unlinkSync(`./temp/stage_${namestickernye}.webp`)
                                        }
                                    })
                            })
                    } else {
                        await znn.sendText(from, `Format salah.kirim gambar atau reply gambar dengan caption /scrop`, id)
                    }
                    break
                case 'sticker':
                case 'stiker':
                case 's':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isMedia && isImage || isQuotedImage) {
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const mediaData = await decryptMedia(encryptMedia, uaOverride)
                        webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                            .then((res) => {
                                sharp(res)
                                    .resize({
                                        width: 512,
                                        height: 512,
                                        fit: 'contain',
                                        background: {
                                            r: 255,
                                            g: 255,
                                            b: 255,
                                            alpha: 0
                                        }
                                    })
                                    .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                        if (err) return console.error(err)
                                        await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: false })
                                        if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                            const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                            const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                            await znn.sendRawWebpAsSticker(from, base64)
                                            //console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                            fs.unlinkSync(`./temp/${sender.id}.webp`)
                                            fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                        }
                                    })
                            })
                    } else {
                        await znn.reply(from, `Format salah.kirim gambar dengan caption /s,apabila itu gif/video maka /sgif`, id)
                    }
                    break
		       case 'dogesticker': case 'doge':
                if (!isRegistered) return await znn.reply(from, ind.notRegistered(), id)
               // if (!isGroupMsg) return await znn.reply(from, ind.groupOnly(), id)
               // if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await znn.reply(from, ind.limit(), id)
               // limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.doge()
                    .then(async (body) => {
                        const dogeg = body.split('\n')
                        const dogegx = dogeg[Math.floor(Math.random() * dogeg.length)]
                        await znn.sendStickerfromUrl(from, dogegx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await znn.reply(from, 'Error!', id)
                    })
               break
                case 'ttps':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (q.length > 50) return await znn.reply(from, `Maximal 50 Huruf/angka`, id)
                    try {
                        var text2png = require('text2png');
                        var listcolorttps = ["green", "white", "blue", "red", "black", "yellow", "cyan"]
                        var randomlistcol = listcolorttps[Math.floor(Math.random() * listcolorttps.length)]

                        fs.writeFileSync('out.png', text2png(q, {
                            font: '15px sans-serif',
                            color: randomlistcol,
                            lineSpacing: 2,
                            padding: 10
                        }));
                        znn.sendImageAsSticker(from, 'out.png', { author: `${config.authorstickerpack}`, pack: `${config.packagenamestick}`, keepScale: true })
                    } catch (er) {
                        znn, reply(from, `Terjadi kesalahan`, id)
                    }
                    break
                case 'setprefix':
                    if (!isOwner) return znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    config.prefix = q
                    prefix = q
                    fs.writeFileSync('./config.json', JSON.stringify(config))
                    znn.sendText(from, `Berhasil Mengganti Prefix Ke 「 *${q}* 」`, id)
                    break
                case 'stickergif':
                case 'stikergif':
                case 'sgif':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isMedia && type === 'video' || mimetype === 'image/gif') {
                        await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                        try {
                            const mediaData = await decryptMedia(message, uaOverride)
                            const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                            await znn.sendMp4AsSticker(from, videoBase64, null, { stickerMetadata: true, pack: `${config.packagenamestick}`, author: `${config.authorstickerpack}`, fps: 15, startTime: `00:00:00.0`, endTime: `00:00:012.0`, crop: false, loop: 0 })
                        } catch (err) {
                            await znn.reply(from, `Ukuran video terlalu besar`, id)
                        }
                    } else if (isQuotedGif || isQuotedVideo) {
                        await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                        try {
                            const mediaData = await decryptMedia(quotedMsg, uaOverride)
                            const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                            await znn.sendMp4AsSticker(from, videoBase64, null, { stickerMetadata: true, pack: `${config.packagenamestick}`, author: `${config.authorstickerpack}`, fps: 15, startTime: `00:00:00.0`, endTime: `00:00:012.0`, crop: false, loop: 0 })
                        } catch (err) {
                            await znn.reply(from, `Ukuran video terlalu besar`, id)
                        }
                    } else {
                        await znn.reply(from, `Format salah.kirim gif atau video dengan caption /sgif bisa reply gif dan video juga.`, id)
                    }
                    break
                case 'stickertoimg':
                case 'stikertoimg':
                case 'toimg':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (isQuotedSticker) {
                        await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                        try {
                            const mediaData = await decryptMedia(quotedMsg, uaOverride)
                            const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                            await znn.sendFile(from, imageBase64, 'sticker.png', '', id)
                        } catch (err) {
                            console.error(err)
                            await znn.reply(from, 'Error!', id)
                        }
                    } else {
                        await znn.reply(from, `Format salah.reply sticker dengan caption /toimg`, id)
                    }
                    break
                case 'emojisticker':
                case 'emojistiker':
                case 'esticker':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah.contoh /esticker ❤`, id)
                    var { EmojiAPI } = require("emoji-api");
                    var emojitopng = new EmojiAPI();

                    emojitopng.get(q)
                        .then((res) => {
                            znn.sendImageAsSticker(from, res.images[4].url, { author: `${config.authorstickerpack}`, pack: `${config.packagenamestick}`, keepScale: false })
                        }).catch((err) => {
                            znn.reply(from, `Terjadi Kesalahan atau emoji tidak support`, id)
                        })
                    break
                case 'jadian':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return znn.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                    const groupMemek = await znn.getGroupMembers(groupId)
                    const mem = groupMemek
                    const aku = mem[Math.floor(Math.random() * mem.length)];
                    const kamu = mem[Math.floor(Math.random() * mem.length)];
                    const sapa = `Cieee... @${aku.id.replace(/@c.us/g, '')} 💘 @${kamu.id.replace(/[@c.us]/g, '')} baru jadian nih\nBagi pj nya dong`
                    await znn.sendTextWithMentions(from, sapa, id)
                    break
                case 'ava':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return znn.reply(from, 'Fitur ini hanya bisa diugnakan di dalam grup', id)
                    if (!quotedMsg) return znn.reply(from, 'Quote/reply pesan seseorang yang akan di download fotonya!!', id)
                    try {
                        const dp = await znn.getProfilePicFromServer(quotedMsgObj.sender.id)
                        if (dp == undefined) {
                            var pfp = znn.reply(from, 'Dia ini pemalu, mungkin sedang depresi tidak berani memasang foto profil', id)
                        } else {
                            var pfp = znn.sendFileFromUrl(from, dp, 'profile.png', 'Nih bro', id)
                        }
                    } catch {
                        znn.reply(from, 'Tidak ada foto profil/private', id)
                    }
                    break
                case 'setgroupname':
                case 'setgrupname':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return znn.reply(from, `Command ini hanya bisa digunakan di dalam grup!`, id)
                    if (!isGroupAdmins) return znn.reply(from, `Command ini hanya bisa digunakan oleh admin grup!`, id)
                    if (!isBotGroupAdmins) return znn.reply(from, `Jadikan bot sebagai admin terlebih dahulu!`, id)
                    const namagrup = body.slice(13)
                    let sebelum = chat.groupMetadata.formattedName
                    let halaman = global.page ? global.page : await znn.getPage()
                    await halaman.evaluate((chatId, subject) =>
                        Store.WapQuery.changeSubject(chatId, subject), groupId, `${namagrup}`)
                    znn.sendTextWithMentions(from, `Nama group telah diubah oleh admin @${sender.id.replace('@c.us', '')}\n\n• Before: ${sebelum}\n• After: ${namagrup}`)
                    break
                case 'adminlist':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return znn.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                    const getListGroupMem = await znn.getGroupMembers(groupId)
                    let mimin = '*LIST ADMIN*'
                    for (let admon of getListGroupMem) {
                        mimin += `• @${admon.replace(/@c.us/g, '')}\n`
                    }
                    await sleeps(2000)
                    await znn.sendTextWithMentions(from, mimin)
                    break
                case 'ownergroup':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return znn.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                    const Owner_ = chat.groupMetadata.owner
                    await znn.sendTextWithMentions(from, `Owner Group : @${Owner_}`)
                    break
                case 'leave':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Command ini hanya bisa digunakan di dalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, `Command ini hanya bisa digunakan oleh admin grup!`, id)
                    await znn.sendText(from, 'Sayounara~ 👋')
                    await sleeps(3000)
                    await znn.leaveGroup(groupId)
                    break
                case 'groupicon':
                case 'setgroupicon':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Command ini hanya bisa digunakan di dalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, `Command ini hanya bisa digunakan oleh admin grup!`, id)
                    if (!isBotGroupAdmins) return znn.reply(from, `Jadikan bot sebagai admin terlebih dahulu!`, id)
                    if (isMedia && isImage || isQuotedImage) {
                        await znn.reply(from, `_Tunggu sebentar lagi diproses kak_`, id)
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                        const mediaData = await decryptMedia(encryptMedia, uaOverride)
                        const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                        await znn.setGroupIcon(groupId, imageBase64)
                        await znn.sendText(from, `Udah kelar nih^^`)
                    } else {
                        await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'antibadword':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Command ini hanya bisa digunakan di dalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, `Command ini hanya bisa digunakan oleh admin grup!`, id)
                    if (!isBotGroupAdmins) return await znn.reply(from, `Jadikan bot sebagai admin terlebih dahulu!`, id)
                    if (ar[0] === 'on') {
                        if (isAntiBadwordOn) return await znn.reply(from, '_Anti badword telah diaktifkan sebelumnya_', id)
                        _antikasar.push(groupId)
                        fs.writeFileSync('./database/group/antibadword.json', JSON.stringify(_antikasar))
                        await znn.reply(from, 'ANTI-BADWORD berhasil diaktifkan di grup ini', id)
                    } else if (ar[0] === 'off') {
                        _antikasar.splice(groupId, 1)
                        fs.writeFileSync('./database/group/antibadword.json', JSON.stringify(_antikasar))
                        await znn.reply(from, 'ANTI-BADWORD berhasil dimatikan di grup ini', id)
                    } else {
                        await znn.reply(from, `Format salah!`, id)
                    }
                    break
                case 'antilink':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Command ini hanya bisa digunakan di dalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, `Command ini hanya bisa digunakan oleh admin grup!`, id)
                    if (!isBotGroupAdmins) return await znn.reply(from, `Jadikan bot sebagai admin terlebih dahulu!`, id)
                    if (ar[0] === 'on') {
                        if (isDetectorOn) return await znn.reply(from, `Fitur anti-group link telah diaktifkan sebelumnya`, id)
                        _antilink.push(groupId)
                        fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
                        await znn.reply(from, `*「 ANTI GROUP LINK 」*\n\n*IND*\n• Perhatian untuk penghuni grup ${(name || formattedTitle)}, Grup ini memiliki anti-group link detector, apabila ada salah satu member mengirim group link di sini maka dia akan ter-kick secara otomatis.\n*ENG*\n• Attention all group members ${(name || formattedTitle)}, This group has anti-group link detector, if member send group link here, he will be kicked automatically.\n\nThanks.\n- Admin ${(name || formattedTitle)}`, id)
                    } else if (ar[0] === 'off') {
                        _antilink.splice(groupId, 1)
                        fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
                        await znn.reply(from, `Fitur anti-group link berhasil *dinonaktifkan*!`, id)
                    } else {
                        await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'leveling':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Command ini hanya bisa digunakan di dalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, `Command ini hanya bisa digunakan oleh admin grup!`, id)
                    if (ar[0] === 'on') {
                        if (isLevelingOn) return await znn.reply(from, `Fitur leveling telah diaktifkan sebelumnya`, id)
                        _leveling.push(groupId)
                        fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                        await znn.reply(from, `Fitur leveling berhasil *diaktifkan*!`, id)
                    } else if (ar[0] === 'off') {
                        _leveling.splice(groupId, 1)
                        fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                        await znn.reply(from, `Fitur leveling berhasil *dinonaktifkan*!`, id)
                    } else {
                        await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'sider':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return znn.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                    if (!quotedMsg) return znn.reply(from, `Tolong Reply Pesan DarkChat-BOT`, id)
                    if (!quotedMsgObj.fromMe) return znn.reply(from, `Tolong Reply Pesan DarkChat-BOT`, id)
                    try {
                        const reader = await znn.getMessageReaders(quotedMsgObj.id)
                        let list = ''
                        for (let pembaca of reader) {
                            list += `• @${pembaca.id.replace(/@c.us/g, '')}\n`
                        }
                        znn.sendTextWithMentions(from, `*List sider*\n${list}`)
                    } catch (err) {
                        console.log(err)
                        znn.reply(from, `*IND*\nMaaf, Belum Ada Yang Membaca Pesan DarkChat-BOT atau Mereka Menonaktifkan Read Receipts\n\n*ENG*\nSorry, no one has read the DarkChat-BOT messages yet or they have disabled Read Receipts`, id)
                    }
                    break
                case 'linkgroup':
                case 'linkgrup':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return znn.reply(from, `Command ini hanya bisa digunakan di dalam grup!`, id)
                    if (!isGroupAdmins) return znn.reply(from, `Command ini hanya bisa digunakan oleh admin grup!`, id)
                    if (!isBotGroupAdmins) return znn.reply(from, `Jadikan bot sebagai admin terlebih dahulu!`, id)
                    const namagcnye = chat.formattedTitle
                    var gclink = await znn.getGroupInviteLink(groupId)
                    var linkgc = `Link group : *${namagcnye}*\n\n ${gclink}`
                    znn.reply(from, linkgc, id)
                    break
                case 'resetlinkgrup':
                case 'setlink':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return znn.reply(from, `Command ini hanya bisa digunakan di dalam grup!`, id)
                    if (!isGroupAdmins) return znn.reply(from, `Command ini hanya bisa digunakan oleh admin grup!`, id)
                    if (!isBotGroupAdmins) return znn.reply(from, `Jadikan bot sebagai admin terlebih dahulu!`, id)
                    if (isGroupMsg) {
                        await znn.revokeGroupInviteLink(groupId);
                        znn.sendTextWithMentions(from, `Link group telah direset oleh admin @${sender.id.replace('@c.us', '')}`)
                    }
                    break
                case 'welcome':
                    if (!isOwner) return znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Command ini hanya bisa digunakan di dalam grup!`, id)
                    if (ar[0] === 'on') {
                        if (isWelcomeOn) return await znn.reply(from, `Fitur welcome telah diaktifkan sebelumnya`, id)
                        _welcome.push(groupId)
                        fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welcome))
                        await znn.reply(from, `Fitur welcome berhasil *diaktifkan*!`, id)
                    } else if (ar[0] === 'off') {
                        _welcome.splice(groupId, 1)
                        fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welcome))
                        await znn.reply(from, `Fitur welcome berhasil *dinonaktifkan*!`, id)
                    } else {
                        await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'autosticker':
                case 'autostiker':
                case 'autostik':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Command ini hanya bisa digunakan di dalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, `Command ini hanya bisa digunakan oleh admin grup!`, id)
                    if (ar[0] === 'on') {
                        if (isAutoStickerOn) return await znn.reply(from, `Fitur auto-stiker telah diaktifkan sebelumnya`, id)
                        _autosticker.push(groupId)
                        fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(_autosticker))
                        await znn.reply(from, `Fitur auto-stiker berhasil *diaktifkan*!`, id)
                    } else if (ar[0] === 'off') {
                        _autosticker.splice(groupId, 1)
                        fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(_autosticker))
                        await znn.reply(from, `Fitur auto-stiker berhasil *dinonaktifkan*`, id)
                    } else {
                        await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'antinsfw':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!isGroupMsg) return await znn.reply(from, `Command ini hanya bisa digunakan di dalam grup!`, id)
                    if (!isGroupAdmins) return await znn.reply(from, `Command ini hanya bisa digunakan oleh admin grup!`, id)
                    if (!isBotGroupAdmins) return await znn.reply(from, `Jadikan bot sebagai admin terlebih dahulu!`, id)
                    if (ar[0] === 'on') {
                        if (isDetectorOn) return await znn.reply(from, `Fitur anti-NSFW link telah diaktifkan sebelumnya`, id)
                        _antinsfw.push(groupId)
                        fs.writeFileSync('./database/group/antinsfw.json', JSON.stringify(_antinsfw))
                        await znn.reply(from, `*「 ANTI NSFW LINK 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini memiliki anti-NSFW link detector, apabila ada salah satu member mengirim link NSFW/porn di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`, id)
                    } else if (ar[0] === 'off') {
                        _antinsfw.splice(groupId, 1)
                        fs.writeFileSync('./database/group/antinsfw.json', JSON.stringify(_antinsfw))
                        await znn.reply(from, `Fitur anti-NSFW link berhasil *dinonaktifkan*!`, id)
                    } else {
                        await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'cekwatak':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    var namao = pushname
                    var prfx = await znn.getProfilePicFromServer(sender)
                    const wtk = watak[Math.floor(Math.random() * (watak.length))]
                    const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
                    const sft = sifat[Math.floor(Math.random() * (sifat.length))]
                    const hby = hobby[Math.floor(Math.random() * (hobby.length))]
                    const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
                    const typo = tipe[Math.floor(Math.random() * (tipe.length))]
                    await znn.reply(from, `[ INTROGASI SUKSES ]\n\n• *Nama* : ${namao}\n• *Watak* : ${wtk}\n• *Akhlak* : ${akhlak}\n• *Sifat* : ${sft}\n• *Hobby* : ${hby}\n• *Tipe* : ${typo}\n• *Kelebihan* : ${klbh}\n\n*Note*\n_ini hanya main main_`, id)
                    break
                case 'bucin':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    var xzyppp = fs.readFileSync('./dbraw/bucin.json')
                    var ditiin = JSON.parse(xzyppp)
                    var rwscwx = Math.floor(Math.random() * ditiin.length)
                    var rin421 = ditiin[rwscwx]
                    znn.reply(from, rin421.bucin, id)
                    break
                case 'info':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    znn.reply(from, `</ *INFORMATION* >

• BOT Type: NodeJS v14.x.x
• Name: H4yperBOT
• Version: 1.5.7
• Instagram: znn_id

</ *THANKS TO* >

• Allah SWT
• Emack
• </LeysCoders>
• X- MrG3P5
• Zam
• Dave
• Slavyandesu
• And All creator bot

_Since © 2020_`, id)
                    break
                case 'bc':
                    if (!isOwner) return znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    bctxt = body.slice(4)
                    txtbc = `「 *H4yperBOT BC* 」\n${bctxt}`
                    const semuagrup = await znn.getAllChatIds();
                    if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        for (let grupnya of semuagrup) {
                            var cekgrup = await znn.getChatById(grupnya)
                            if (!cekgrup.isReadOnly)
                                znn.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
                        }
                        znn.reply(from, 'Broadcast sukses!', id)
                    } else {
                        for (let grupnya of semuagrup) {
                            var cekgrup = await znn.getChatById(grupnya)
                            if (!cekgrup.isReadOnly)
                                znn.sendText(grupnya, txtbc)
                        }
                        znn.reply(from, 'Broadcast Success!', id)
                    }
                    break
                case 'clearall':
                    if (!isOwner) return await znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    const allChats = await znn.getAllChats()
                    for (let delChats of allChats) {
                        await znn.deleteChat(delChats.id)
                    }
                    await znn.reply(from, `Done Owner~`, id)
                    break
                case 'leaveall':
                    if (!isOwner) return await znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    if (!q) return await znn.reply(from, `Harap masukkan pesan yang ingin disampaikan`, id)
                    const allGroup = await znn.getAllGroups()
                    for (let gclist of allGroup) {
                        await znn.sendText(gclist.contact.id, q)
                        await znn.leaveGroup(gclist.contact.id)
                    }
                    await znn.reply(from, `Done Owner~`)
                    break
                case 'getses':
                    if (!isOwner) return await znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    const ses = await znn.getSnapshot()
                    await znn.sendFile(from, ses, 'session.png', `Done Owner~`)
                    break
                case 'blacklist':
                    if (!isOwner) return await znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    if (ar[0] === 'add') {
                        if (mentionedJidList.length !== 0) {
                            for (let benet of mentionedJidList) {
                                if (benet === botNumber) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                                await znn.contactBlock(benet)
                                _ban.push(benet)
                                fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                            }
                            await znn.reply(from, `Done Owner~`, id)
                        } else {
                            await znn.contactBlock(args[1] + '@c.us')
                            _ban.push(args[1] + '@c.us')
                            fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                            await znn.reply(from, `Done Owner~`, id)
                        }
                    } else if (ar[0] === 'del') {
                        if (mentionedJidList.length !== 0) {
                            if (mentionedJidList[0] === botNumber) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                            await znn.contactUnblock(mentionedJidList[0], 1)
                            _ban.splice(mentionedJidList[0], 1)
                            fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                            await znn.reply(from, `Done Owner~`, id)
                        } else {
                            await znn.contactUnblock(args[1] + '@c.us', 1)
                            _ban.splice(args[1] + '@c.us', 1)
                            fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                            await znn.reply(from, `Done Owner~`, id)
                        }
                    } else {
                        await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'restart': // WORK IF YOU RUN USING PM2
                    if (!isOwner) return znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    znn.reply(from, '_Reset all db_', id)
                    var obj = []
                    var spawn = require('child_process').exec;
                    fs.writeFileSync('./database/user/limit.json', JSON.stringify(obj));
                    fs.writeFileSync('./database/group/welcome.json', JSON.stringify(obj));
                    fs.writeFileSync('./database/user/koin.json', JSON.stringify(obj));
                    function os_func() {
                        this.execCommand = function (command) {
                            return new Promise((resolve, reject) => {
                                spawn(command, (error, stdout) => {
                                    if (error) {
                                        reject(error);
                                        return;
                                    }
                                    resolve(stdout)
                                });
                            })
                        }
                    }
                    var oz = new os_func();
                    oz.execCommand('pm2 restart index').then(() => {
                        znn.reply(from, `Success Reset & Restart database!`, id)
                    }).catch((e) => {
                        console.log(e)
                    })
                    break
                case 'refresh': // WORK IF YOU RUN USING PM2
                    if (!isOwner) { return false; }
                    znn.reply(from, '_Refresh!_', id)
                    var spawn = require('child_process').exec;
                    function os_func() {
                        this.execCommand = function (command) {
                            return new Promise((resolve, reject) => {
                                spawn(command, (error, stdout) => {
                                    if (error) {
                                        reject(error);
                                        return;
                                    }
                                    resolve(stdout)
                                });
                            })
                        }
                    }
                    var oz = new os_func();
                    oz.execCommand('pm2 restart index').then(() => {
                        znn.reply(from, `Success Refresh!`, id)
                    }).catch(err => {
                        console.log("os >>>", err);
                    })
                    break
                case 'resetlimit':
                    if (!isOwner) return znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    try {
                        znn.reply(from, `「 *RESET-LIMIT* 」\n\nSedang Mereset semua limit`, id)
                        const remset = []
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(remset));
                        fs.writeFileSync('./database/group/welcome.json', JSON.stringify(remset));
                        fs.writeFileSync('./database/user/koin.json', JSON.stringify(remset));
                        znn.sendText(from, `*Berhasil Mereset Limit user!*`, id)
                    } catch (err) {
                        console.log(err)
                        znn.sendText(from, `Terjadi Kesalahan`, id)
                    }
                    break
                case 'exec':
                    if (!isOwner) return znn.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner!`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    var spawn = require('child_process').exec;
                    function os_func() {
                        this.execCommand = function (command) {
                            return new Promise((resolve, reject) => {
                                spawn(command, (error, stdout) => {
                                    if (error) {
                                        reject(error);
                                        return;
                                    }
                                    resolve(stdout)
                                });
                            })
                        }
                    }
                    var oz = new os_func();
                    oz.execCommand(q).then((res) => {
                        znn.reply(from, `${res}`, id)
                    }).catch(err => {
                        return znn.reply(from, `(ERR)> ${err}`, id)
                    })
                    break
                case 'eval':
                case 'ev':
                    if (!isOwner) return await znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    try {
                        let evaled = await eval(q)
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await znn.sendText(from, evaled)
                    } catch (err) {
                        console.error(err)
                        await znn.reply(from, `[Error]\n> ${err}`, id)
                    }
                    break
                case 'setname':
                    if (!isOwner) return znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    const setnem = body.slice(9)
                    await znn.setMyName(setnem)
                    znn.sendTextWithMentions(from, `Makasih Nama Barunya @${sender.id.replace('@c.us', '')}`)
                    break
                case 'setpict':
                    if (!isOwner) return znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    if (isMedia) {
                        const mediaData = await decryptMedia(message)
                        const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        await znn.setProfilePic(imageBase64)
                        znn.reply(from, `Makasih Owner Sama Foto Profilenya`, id)
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await znn.setProfilePic(imageBase64)
                        znn.reply(from, `Makasih Owner Sama Foto Profilenya`, id)
                    } else {
                        znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'shutdown':
                    if (!isOwner) return await znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    znn.reply(from, 'Bye Owner Sama~ 👋', id)
                        .then(async () => await znn.kill())
                        .catch(() => new Error('Target closed.'))
                    break
                case 'buylimit':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Berapa limit yang mau di beli bre?\n1 Point Limit = Rp. 1500\n\nPastiin uang kakak cukup juga kak!\nCara Pembelian: ${prefix}buylimit 1\nCara cek uang: ${prefix}cekatm`, id)
                    let digits_onlys2 = string => [...string].every(c => '0123456789'.includes(c));
                    if (digits_onlys2(q) == false) return await znn.reply(from, `Only Number!`, id)
                    if (digits_onlys2(q) == true) {
                        const koinPerlimit = 1500
                        const total = koinPerlimit * q
                        const maximallimit = 101
                        if (q >= maximallimit) return znn.reply(from, `Maximal 100 Limit`, id)
                        if (checkATMuser(serial) <= total) return znn.reply(from, `maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`, id)
                        if (checkATMuser(serial) >= total) {
                            confirmATM(serial, total)
                            bayarLimit(serial, q)
                            const xxz = `${checkATMuser(serial)}`
                            await znn.reply(from, `*「 PEMBAYARAN BERHASIL 」*\n\n• *Penerima:* ${pushname.substring(0, 10)}\n• *Total harga:* Rp. ${convertBalanceToString(total)} / ${q} limit\n• *Sisa saldo:* Rp. ${checkATMuser(xxz)}\n\nproses berhasil dengan nomer pembayaran \n${SN}`, id)
                        }
                    }
                    break
                case 'buycoin':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Berapa limit yang mau di beli bre?\n1 Coin = Rp. 1500\n\nPastiin uang kakak cukup juga kak!\nCara Pembelian: ${prefix}buycoin 5\nCara cek uang: ${prefix}cekatm`, id)
                    const koinPerlimits = 1500
                    const totals = koinPerlimits * q
                    const maximalcoin = 101
                    let digits_onlys3 = string => [...string].every(c => '0123456789'.includes(c));
                    if (digits_onlys3(q) == false) return await znn.reply(from, `Only Number!`, id)
                    if (digits_onlys3(q) == true) {
                        if (q >= maximalcoin) return znn.reply(from, `Maximal 100 Coin`, id)
                        if (checkATMuser(serial) <= totals) return znn.reply(from, `maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`, id)
                        if (checkATMuser(serial) >= totals) {
                            confirmATM(serial, totals)
                            bayarCoin(serial, q)
                            const xpw = `${checkATMuser(serial)}`
                            await znn.reply(from, `*「 PEMBAYARAN BERHASIL 」*\n\n• *Penerima:* ${pushname.substring(0, 10)}\n• *Total harga:* Rp. ${convertBalanceToString(totals)} / ${q} Coin\n• *Sisa saldo:* Rp. ${convertBalanceToString(xpw)}\n\nproses berhasil dengan nomer pembayaran \n${SN}`, id)
                        }
                    }
                    break
                case 'readallchat':
                    if (!isOwner) return znn.reply(from, 'Perintah ini hanya untuk Owner DarkChat-BOT', id)
                    const readall = await znn.getAllChats()
                    for (let allchatnye of readall) {
                        await sleeps(3000)
                        await znn.sendSeen(allchatnye.id)
                    }
                    znn.reply(from, 'Succes read all chat!', id)
                    break
                case 'buypremium':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return znn.reply(from, `Mau beli yang berapa hari nih bre?\n1 Days = Rp. 50K\n\nPastiin uang kakak cukup juga kak!\nCara Pembelian: ${prefix}buypremium 1\nCara cek uang: ${prefix}cekatm`, id)
                    let digits_onlys4 = string => [...string].every(c => '0123456789'.includes(c));
                    const cekExps = ms(premium.getPremiumExpired(sender.id, _premium) - Date.now())
                    if (isPremium) return await znn.reply(from, `*「 ALREADY PREMIUM 」*
• *ID*: ${sender.id.replace('@c.us', '')}
• *Premium left*: ${cekExps.days} Hari ${cekExps.hours} Jam ${cekExps.minutes} Menit`, id)
                    if (digits_onlys4(q) == false) return await znn.reply(from, `Only Number!`, id)
                    if (digits_onlys4(q) == true) {
                        const balperday = 50000
                        const totalprem = balperday * q
                        const maximallimit = 61
                        if (q >= maximallimit) return znn.reply(from, `Maximal 60 Days`, id)
                        if (checkATMuser(serial) <= totalprem) return znn.reply(from, `Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`, id)
                        if (checkATMuser(serial) >= totalprem) {
                            confirmATM(serial, totalprem)
                            bayarLimit(serial, q)
                            premium.addPremiumUser(serial, `${q}d`, _premium)
                            await znn.reply(from, `*「 PEMBAYARAN BERHASIL 」*

• *Penerima:* ${pushname.substring(0, 10)}
• *Total harga:* Rp. ${convertBalanceToString(totalprem)} / ${q} Days
• *Sisa saldo:* Rp. ${convertBalanceToString(checkATMuser(serial))}

_Proses berhasil dengan nomer pembayaran_
: ${SN}`, id)
                        }
                    }
                    break
                case 'premium':
                    if (!isOwner) return await znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    if (ar[0] === 'add') {
                        if (mentionedJidList.length !== 0) {
                            for (let benet of mentionedJidList) {
                                if (benet === botNumber) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                                premium.addPremiumUser(benet, args[2], _premium)
                                await znn.reply(from, `*「 PREMIUM ADDED 」*\n\n• *ID*: ${benet}\n• *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                            }
                        } else {
                            premium.addPremiumUser(args[1] + '@c.us', args[2], _premium)
                            await znn.reply(from, `*「 PREMIUM ADDED 」*\n\n• *ID*: ${args[1]}@c.us\n• *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                        }
                    } else if (ar[0] === 'del') {
                        if (mentionedJidList.length !== 0) {
                            if (mentionedJidList[0] === botNumber) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                            _premium.splice(premium.getPremiumPosition(mentionedJidList[0], _premium), 1)
                            fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                            await znn.reply(from, `Done Owner~`, id)
                        } else {
                            _premium.splice(premium.getPremiumPosition(args[1] + '@c.us', _premium), 1)
                            fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                            await znn.reply(from, `Done Owner~`, id)
                        }
                    } else {
                        await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    }
                    break
                case 'searchgrup':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!q) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    if (isLimit(serial)) return
                    request.post(`https://groupsor.link/group/searchmore/${q}`, function (err, res, html) {
                        if (!err && res.statusCode == 200) {
                            var $ = cheerio.load(html)
                            const dataArrcarigrup = [];
                            $('div.maindiv').each((i, el) => {
                                var titlegc = $(el).find('div > a').attr('title').replace('Whatsapp group invite link:', '').trim();
                                var listlinkgc = $(el).find('div > a').attr('href').replace('https://groupsor.link/group/invite/', 'https://chat.whatsapp.com/').trim();
                                dataArrcarigrup.push({
                                    judul: titlegc,
                                    link: listlinkgc
                                })
                            })
                            let resultcarigc = `*RESULT-FOUND!*\n\n`
                            for (let i = 0; i < dataArrcarigrup.length; i++) {
                                resultcarigc += `• Title: ${dataArrcarigrup[i].judul}\n• Link: ${dataArrcarigrup[i].link}\n\n`
                            }
                            znn.reply(from, resultcarigc.trim(), id)
                            limitAdd(serial)
                        } else {
                            znn.reply(from, `Tidak ditemukan grup ${q}`, id)
                        }
                    })
                    break
                case 'ngehek':
                    if (!isOwner) return await znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    if (!q) return znn.reply(from, `targetnya apa?`, id)
                    const hasilhek = 30000000
                    addSaldo(serial, hasilhek)
                    znn.reply(from, `Succes ngehek ${q} dan mendapatkan ${convertBalanceToString(hasilhek)}`, id)
                    break
                case 'transfer': case 'tf':
                    if (!isRegistered) return await znn.reply(from, `Kamu belum terdaftar di database!, Silakan register dengan cara ${prefix}verify\n\nJangan lupa follow ig-dev ya ^-^\nwww.instagram.com/znn_id\n\n1 follow = support dari kalian`, id)
                    if (!args[0] || !args[1]) return await znn.reply(from, `Format salah! gunakan dengan cara\n\nKirim: ${prefix}transfer 628xxx jumlah\nContoh: ${prefix}transfer 6281344291903 5000`, id)
                    const fixbug = Math.floor(args[1])
                    if (checkATMuser(serial) <= fixbug) return znn.reply(from, `Saldonya tidak cukup untuk mentransfer ${convertBalanceToString(args[1])}`, id)
                    let digits_onlys5 = string => [...string].every(c => '0123456789'.includes(c));
                    if (digits_onlys5(args[0]) == false || digits_onlys5(args[1]) == false) return await znn.reply(from, `Format salah! gunakan dengan cara\n\nKirim: ${prefix}transfer 628xxx jumlah\nContoh: ${prefix}transfer 6281344291903 5000`, id)
                    var isDoneVerify = register.checkRegisteredUser(args[0] + '@c.us', _registered)
                    if (!isDoneVerify) return znn.reply(from, `Maaf ${args[0]} belum melakukan ${prefix}verify`, id)
                    if (args[1] == '0') return znn.reply(from, `Masukan nominal bukan 0`, id)
                    if (digits_onlys5(args[1]) == true) {
                        if (checkATMuser(serial) >= fixbug) {
                            var ceknya = args[0]
                            var obj = _registered.some((val) => {
                                return val.id === ceknya
                            })
                            if (obj === true) {
                                return znn.reply(from, `Nomor ${args[0]} tidak terverifikasi di database!, silahkan ${prefix}verify terlebih dahulu untuk melakukan transaksi`, id)
                            } else {
                                confirmATM(serial, fixbug, userbalance)
                                addSaldo(args[0] + '@c.us', fixbug, userbalance)
                                await znn.reply(from, `*「 TRANSFER SUCCESS 」*
    
• PENERIMA: ${args[0].replace('@c.us', '')}
• JUMLAH TF: Rp. ${convertBalanceToString(fixbug)}
• SISA SALDO: Rp. ${convertBalanceToString(checkATMuser(serial))}
• SN: ${SN}`, id)
                            }
                        }
                    }
                    break
                case 'setstatus':
                    if (!isOwner) return await znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    if (!q) return await znn.reply(from, `Harap masukkan pesan yang ingin disampaikan`, id)
                    znn.setMyStatus(q)
                    znn.sendText(from, `Done Owner~`, id)
                    break
                case 'exif':
                    if (!isOwner) return await znn.reply(from, `Command ini khusus Owner-H4!`, id)
                    if (!q.includes('|')) return await znn.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`, id)
                    const namaPack = q.substring(0, q.indexOf('|') - 1)
                    const authorPack = q.substring(q.lastIndexOf('|') + 2)
                    exif.create(namaPack, authorPack)
                    await znn.reply(from, `Done Owner~`, id)
                    break
                default:
            }
        }
        // AUTO STICKER PRIVATE CHAT
        if (!isGroupMsg && isMedia && isImage && !isCmd) {
            const mediaData = await decryptMedia(message, uaOverride)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await znn.sendImageAsSticker(from, imageBase64, { author: `${config.authorstickerpack}`, pack: `${config.packagenamestick}`, keepScale: true })
        }
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err)
    }
}
/********** END OF MESSAGE HANDLER **********/
