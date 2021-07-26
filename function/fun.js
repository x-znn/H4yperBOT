const { fetchText, fetchJson } = require('../tools/fetcher')
const config = require('../config.json')
const ph = require('@justalk/pornhub-api')

/**
 * Get tebak gambar quiz.
 * @returns {object}
 */
const tbkgmbr = () => new Promise((resolve, reject) => {
    console.log('Getting tebakgambar quiz...')
    fetchJson('http://videfikri.com/api/tebakgambar/')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get hilih text.
 * @param {string} query
 * @returns {object}
 */
const hilihteks = (query) => new Promise((resolve, reject) => {
    console.log(`Getting Hilih teks from: ${query}...`)
    fetchJson(`https://videfikri.com/api/hilih?query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Fortune-telling about you and your partner.
 * @param {string} name
 * @param {string} partner
 * @returns {object}
 */
const pasangan = (name, partner) => new Promise((resolve, reject) => {
    console.log(`Checking fortune for ${name} and ${partner}...`)
    fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${name}&pasangan=${partner}&apikey=Fauzann99`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get weekly zodiac fortune.
 * @param {string} zodiac
 * @returns {object}
 */
const zodiak = (zodiac) => new Promise((resolve, reject) => {
    console.log(`Get weekly zodiac fortune for ${zodiac}...`)
    fetchJson(`https://api.vhtear.com/zodiak?query=${zodiac}&apikey=Fauzann99`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Chat with SimiSimi.
 * @param {string} chat
 * @returns {object}
 */
const simi = (chat) => new Promise((resolve, reject) => {
    console.log('Get response from SimSumi...')
    fetchJson(`https://videfikri.com/api/simsimi?teks=${chat}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get truth.
 * @returns {string}
 */
const truth = () => new Promise((resolve, reject) => {
    console.log('Get random truth...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get dare.
 * @returns {string}
 */
const dare = () => new Promise((resolve, reject) => {
    console.log('Get random dare...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get weton fortune.
 * @param {string} date
 * @param {string} month
 * @param {string} year
 * @returns {object}
 */
const weton = (date, month, year) => new Promise((resolve, reject) => {
    console.log('Get weton data...')
    fetchJson(`https://api.vhtear.com/ramalweton?tgl=${date}&bln=${month}&thn=${year}&apikey=Fauzann99`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

/**
 * Get fresh videos from TikTok.
 * @returns {string}
 */
const asupan = () => new Promise((resolve, reject) => {
    console.log('Fetching video...')
    fetchText('http://sansekai.my.id/sansekai.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random cita-cita meme.
 * @returns {string}
 */
const cita = () => new Promise((resolve, reject) => {
    console.log('Get random cita-cita...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Cak Lontong quiz.
 * @returns {Promise<object>}
 */
const caklontong = () => new Promise((resolve, reject) => {
    console.log('Getting caklontong quiz...')
    fetchJson(`https://api.vhtear.com/funkuis&apikey=Fauzann99`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random dice.
 * @returns {string}
 */
const dadu = () => new Promise((resolve, reject) => {
    console.log('Get sticker....')
    fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/Dadu')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random Doge sticker.
 * @returns {string}
 */
const doge = () => new Promise((resolve, reject) => {
    console.log('Get sticker....')
    fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random lewd images from given subreddits.
 * @returns {Object}
 */
const randomLewd = () => new Promise((resolve, reject) => {
    const tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
    console.log(`Searching lewd from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get armpits pict.
 * @returns {Object}
 */
const armpits = () => new Promise((resolve, reject) => {
    console.log('Searching for armpits...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animearmpits')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get feets pict.
 * @returns {Object}
 */
const feets = () => new Promise((resolve, reject) => {
    console.log('Searching for feets...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animefeets')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get thighs pict.
 * @returns {Object}
 */
const thighs = () => new Promise((resolve, reject) => {
    console.log('Searching for thighs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animethighss')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ass pict.
 * @returns {Object}
 */
const ass = () => new Promise((resolve, reject) => {
    console.log('Searching for ass...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebooty')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get boobs pict.
 * @returns {Object}
 */
const boobs = () => new Promise((resolve, reject) => {
    console.log('Searching for boobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/biganimetiddies')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get belly pict.
 * @returns {Object}
 */
const belly = () => new Promise((resolve, reject) => {
    console.log('Searching for belly...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebellybutton')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get sideboobs pict.
 * @returns {Object}
 */
const sideboobs = () => new Promise((resolve, reject) => {
    console.log('Searching for sideboobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/sideoppai')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ahegao pict.
 * @returns {Object}
 */
const ahegao = () => new Promise((resolve, reject) => {
    console.log('Searching for ahegao...')
    fetchJson('https://meme-api.herokuapp.com/gimme/ahegao')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Pornhub metadata from URL.
 * @param {String} url 
 * @returns {Object}
 */
const phDl = (url) => new Promise((resolve, reject) => {
    console.log(`Get Pornhub metadata from ${url}`)
    ph.page(url, ['title', 'download_urls', 'thumbnail_url'])
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get XXX video from URL.
 * @param {String} url 
 * @returns {Object}
 */
const xxx = (url) => new Promise((resolve, reject) => {
    console.log(`Get XXX video from ${url}`)
    fetchJson(`https://api.vhtear.com/xxxdownload?link=${url}&apikey=Fauzann99`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random cersex.
 * @returns {Object}
 */
const cersex = () => new Promise((resolve, reject) => {
    console.log('Get random cersex...')
    fetchJson(`https://api.vhtear.com/cerita_sex&apikey=Fauzann99`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

// Premium version

/**
 * Get lewds.
 * @returns {Object}
 */
const mlewd = () => new Promise((resolve, reject) => {
    const tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
    console.log(`Searching lewd from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/5`) // Silakan atur jumlahnya
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


/**
 * Get armpits pict.
 * @returns {Object}
 */
const marmpits = () => new Promise((resolve, reject) => {
    console.log('Searching for armpits...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animearmpits/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get feets pict.
 * @returns {Object}
 */
const mfeets = () => new Promise((resolve, reject) => {
    console.log('Searching for feets...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animefeets/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get thighs pict.
 * @returns {Object}
 */
const mthighs = () => new Promise((resolve, reject) => {
    console.log('Searching for thighs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animethighss/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ass pict.
 * @returns {Object}
 */
const mass = () => new Promise((resolve, reject) => {
    console.log('Searching for ass...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebooty/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get boobs pict.
 * @returns {Object}
 */
const mboobs = () => new Promise((resolve, reject) => {
    console.log('Searching for boobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/biganimetiddies/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get belly pict.
 * @returns {Object}
 */
const mbelly = () => new Promise((resolve, reject) => {
    console.log('Searching for belly...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebellybutton/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get sideboobs pict.
 * @returns {Object}
 */
const msideboobs = () => new Promise((resolve, reject) => {
    console.log('Searching for sideboobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/sideoppai/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ahegao pict.
 * @returns {Object}
 */
const mahegao = () => new Promise((resolve, reject) => {
    console.log('Searching for ahegao...')
    fetchJson('https://meme-api.herokuapp.com/gimme/ahegao/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    pasangan,
    zodiak,
    simi,
    truth,
    dare,
    weton,
    asupan,
    cita,
    caklontong,
    hilihteks,
    tbkgmbr,
    dadu,
    doge,
	randomLewd,
    armpits,
    feets,
    thighs,
    ass,
    boobs,
    belly,
    sideboobs,
    ahegao,
    phDl,
    xxx,
    cersex,
    mlewd,
    mahegao,
    marmpits,
    mass,
    mbelly,
    mboobs,
    mfeets,
    msideboobs,
    mthighs
}
