//=============『 Utama 』================== //
global.owner = ['6288295249563','6288294052009'] //ganti pakai nomormu biar bot berfungsi

//=============『 WM STICKER 』============== //
global.packname = '卂尺刀卄工'
global.author = '\n\n\n\n\n\n\n\n@ardhixs_'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd37372311698ed1d',
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
