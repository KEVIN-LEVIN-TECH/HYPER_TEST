const config = require('../config')
const {cmd , commands} = require('../command')



cmd({
    pattern: "support",
    desc: "To get the bot informations.",
    react: "⛓",
    category: "main",
    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` 👋 Hello ${pushname}

👨‍💻HYPER-MD Support Channels💗

Youtube Channel Link: 

Whatsapp Channel Link: 

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ`

return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/de82e3.jpg`},caption:about},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`}
}
})
