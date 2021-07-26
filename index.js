/* eslint-disable no-unused-vars */
const { create, Client } = require('@open-wa/wa-automate')
const { color, options } = require('./tools')
const { loader } = require('./function')
const figlet = require('figlet')
const msgHandler = require('./message/znn')
const canvas = require('discord-canvas')
const config = require('./config.json')
const { Swiftcord } = require('./function/swiftcord');
const cord = new Swiftcord();
const ownerNumber = config.ownerBot
const fs = require('fs-extra')
const randomwallpaper = ['https://telegra.ph/file/06a3da44628adf7a67e4b.jpg',
'https://telegra.ph/file/f6f24b0b048da2afd4f90.jpg',
'https://telegra.ph/file/38ec6e984853e57c347fe.jpg',
'https://c.top4top.io/p_19089ijpc1.jpg',
'https://telegra.ph/file/e0362017827d48b4c552c.jpg']

const start = (znn = new Client()) => {
    console.log(color(figlet.textSync('--------------', 'Larry 3D'), 'green'))
    console.log(color(figlet.textSync(' Fauzann-BOT', 'Larry 3D'), 'red'))
    console.log(color(figlet.textSync('--------------', 'Larry 3D'), 'green'))
    console.log(color('=> Bot successfully loaded! Database:', 'green'), color(loader.getAllDirFiles('./database').length), color('Library:', 'yellow'), color(loader.getAllDirFiles('./lib').length), color('Function:', 'yellow'), color(loader.getAllDirFiles('./function').length))
    console.log(color('[znn]', 'cyan'), color('Fauzann-BOT is online now!', 'green'))
    console.log(color('[S]', 'cyan'), color('Welcome back, znn! Hope you are doing well~', 'green'))
    
    loader.nocache('../message/znn.js', m => console.log(color('[WATCH]', 'cyan'), color(`~> '${m}'`, 'green'), 'file is updated!'))

    // Force it to keep the current session
    znn.onStateChanged((state) => {
        ///console.log('[znn STATE]', state)
        if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') znn.forceRefocus()
    })

    // Set all received message to seen
    znn.onAck((x) => {
        const { to } = x
        if (x !== 3) znn.sendSeen(to)
    })

    // Listening added to group
    znn.onAddedToGroup(async (chat) => {
        const gc = await znn.getAllGroups()
        if (ownerNumber.includes(chat.id)) {
            await znn.sendText(chat.id, `Terima kasih telah mengundangku, para member *${chat.contact.name}*!, Silakan register dengan cara ketik: !verify`)
        } else if (gc.length > config.MemberLimit) {
            await znn.sendText(chat.id, `Max groups reached!\n\nCurrent status: ${gc.length}/${config.MemberLimit}`)
            await znn.deleteChat(chat.id)
            await znn.leaveGroup(chat.id)
        } else if (chat.groupMetadata.participants.length < config.MemberLimit) {
            await znn.sendText(chat.id, `Need at least ${config.MemberLimit} members in group!`)
            await znn.deleteChat(chat.id)
            await znn.leaveGroup(chat.id)
        } else {
            await znn.sendText(chat.id, `Terima kasih telah mengundangku, para member *${chat.contact.name}*!, Silakan register dengan cara ketik: !verify`)
        }
    })

    // Listening to messages
    znn.onMessage((message) => {
        znn.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 2000) {
                    console.log(color('[znn]', 'cyan'), color(`Loaded message reach ${msg}, cuting message cache...`, 'green'))
                    //console.log('[znn]', color(`Loaded message reach ${msg}, cuting message cache...`, 'yellow'))
                    znn.cutMsgCache()
                    console.log(color('[znn]', 'cyan'), color('Success Cache deleted!', 'green'))
                    //console.log('[znn]', color('Cache deleted!', 'yellow'))
                }
            })
        // Below is an watched version but it will affect the performance
        require('./message/znn.js')(znn, message)
        // msgHandler(znn, message)
    })

    // Block person who called bot
    znn.onIncomingCall(async (callData) => {
        await znn.sendText(callData.peerJid, `Bot tidak menerima panggilan. Karena kamu telah melanggar rules, maka kamu telah diblok, Harap hubungi owner: wa.me/${ownerNumber.replace('@c.us', '')}`)
        await znn.contactBlock(callData.peerJid)
        console.log(color('[BLOCK]', 'red'), color(`${callData.peerJid} has been blocked. Reason:`, 'yellow'), color('CALLING THE BOT', 'cyan'))
    })

    // Listen to group's event
    znn.onGlobalParticipantsChanged(async (event) => {
        const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
        const isWelcome = _welcome.includes(event.chat)
        const gcChat = await znn.getChatById(event.chat)
        const pcChat = await znn.getContact(event.who)
        let { pushname, verifiedName, formattedName } = pcChat
        pushname = pushname || verifiedName || formattedName
        const { name, groupMetadata } = gcChat
        const botNumbers = await znn.getHostNumber() + '@c.us'
        try {
            if (event.action === 'add' && event.who !== botNumbers && isWelcome) {
                    const pictuserwel = await znn.getProfilePicFromServer(event.who)
                    var mathrandomwp = randomwallpaper[Math.floor(Math.random() * (randomwallpaper.length))]
                    
                    if (pictuserwel === undefined) {
                        var picx = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png';
                    } else {
                        picx = pictuserwel
                    }

                    const imagewelkom = await cord.Welcome()
                        .setUsername(pushname.substring(0, 10))
                        .setDiscriminator('')
                        .setMemberCount('Fauzann-BOT')
                        .setGuildName(name)
                        .setGuildIcon('https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png')
                        .setAvatar(picx)
                        .setBackground(mathrandomwp)
                        .toAttachment();
                        const buffimgbs64 = `data:image/png;base64,${imagewelkom.toString('base64')}`
                        znn.sendFile(event.chat, buffimgbs64, `${pushname}.png`, `</ *WELCOME!* >\n\n• Grup: ${name}\n• Username: ${pushname.substring(0, 10)}\n\n_Jangan lupa ikutin rules yang ada di grup ini^.^_`)
            } else if (event.action === 'remove' && event.who !== botNumbers && isWelcome) {
                const pic = await znn.getProfilePicFromServer(event.who)
                var mathrandomwps = randomwallpaper[Math.floor(Math.random() * (randomwallpaper.length))]
                if (pic === undefined) {
                    var picxs = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                } else {
                    picxs = pic
                }
                const imagewelkoms = await cord.Goodbye()
                        .setUsername(pushname.substring(0, 10))
                        .setDiscriminator('')
                        .setMemberCount('Fauzann-BOT')
                        .setGuildName(name)
                        .setGuildIcon('https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png')
                        .setAvatar(picxs)
                        .setBackground(mathrandomwps)
                        .toAttachment();
                        const buffimgbs64s = `data:image/png;base64,${imagewelkoms.toString('base64')}`
                        znn.sendFile(event.chat, buffimgbs64s, `${pushname}.png`, `</ *GOOD-BYE!* >\n\n• Grup: ${name}\n• Username: ${pushname.substring(0, 10)}\n\n_Kasihan pasti baperan...._`)
            }
        } catch (err) {
            console.error(err)
        }
    })
}

// Creating session
create(options(start))
    .then((znn) => start(znn))
    .catch((err) => console.error(err))
