import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['2349085771938', 'Sports Oracle', true],
  ['2349085771938', 'Sports Oracle', true], 
  [''] 
] //Number of owners

global.mods = ['2349085771938','2349085771938'] 
global.prems = ['2349085771938', '2349085771938', '2349085771938']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  livescore: 'https://allsportsapi.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://allsportsapi.com': 'e09b909145afee2ae3c555e628f646849f50d90b89fa5aed97a5cd995d1ba17d'
}

// Sticker WM
global.botname = '💝 Queen Oracle 💝'
global.premium = 'true'
global.packname = '💝 Queen Oracle 💝 Created By 💝 Sports Oracle  💝' 
global.author = '💝 Sports Oracle 💝' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/oosfantasyleague\n' 
global.dygp = 'https://chat.whatsapp.com/Kr05jMZ5YNM9X7pBPzH7tv'
global.fgsc = 'https://bit.ly/43BQzLP' 
global.fgyt = 'https://chat.whatsapp.com/Kr05jMZ5YNM9X7pBPzH7tv'
global.fgpyp = 'https://chat.whatsapp.com/Kr05jMZ5YNM9X7pBPzH7tv'
global.fglog = 'https://i.ibb.co/T1DqdYz/thumbnail.jpg' 


global.wait = '*⌛ _Oracle bot loading..._* *▰▰▰▱▱▱▱▱*⊱─━━━━⊱༻●༺⊰━━━━─⊰'
global.rwait = '⏳'
global.dmoji = '🤣'
global.done = '☑️'
global.error = '❌' 
global.xmoji = '🫶' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
