const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    react: "📡",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `
Rᴇᴘᴏ Sɪᴛɪ Iɴꜰᴏᴍᴀᴛɪᴏɴ

📍ʀᴇᴘᴏ ʟɪɴᴋ 📎👇

👨‍💻◦

📍ᴘʟᴇᴀꜱᴇ ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴᴇʟ📎👇

👨‍💻◦ 

📍ᴘʟᴇᴀꜱᴇ ꜰᴏʟʟᴏᴡ ᴍʏ ᴡʜꜱᴛᴀᴘᴘ ᴄʜᴀɴᴇʟ 📎👇

👨‍💻◦ 

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ 
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/de82e3.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
