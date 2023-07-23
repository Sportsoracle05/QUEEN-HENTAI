
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
🇱🇰 *DONATE* 🇱🇰
If you get more info of 💝 Queen Oracle 💝 Please Contact 2349085771938 💰`
let img = 'https://telegra.ph/file/7d84f663bc6e7fdac5c66.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donasi'] 

export default handler
