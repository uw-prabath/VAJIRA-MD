const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


global.thumb = fs.readFileSync('./lib/bugs/venom.jpg')
const BOTNAME = 'UW TECH SHOW BOT™';
const FOOTERNAME = '>UW TECH SHOW BOT 2024';
global.owner = process.env.OWNER_NUMBER  || '94758900210' ;  // ADD YOUR NUMBER WITHOUT +
    
    
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'VAJIRA-MD=iQMXVTaC#DV9vgYdi_myf60Vf9yDHz_wN_tYfw-ap-gk9WFCc1n0' ,
travaSend: process.env.TRAVA_SEND || '25' ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || 'UDAVIN' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LOGO: process.env.LOGO || `https://i.ibb.co/XYjX038/logo.jpg` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech',
MONGODB_URI :process.env.MONGODB_URI === undefined ? 'mongodb+srv://sachintharashan26:9hVStJbuE3uxwRtZ@cluster0.o0ec025.mongodb.net/' : process.env.MONGODB_URI,  
FOOTER: process.env.FOOTER || '‌🤫 UW TECH SHOW BOT 2024 🤫',    
PREFIX: process.env.PREFIX || '.' ,
LANG:  process.env.LANG || 'SI' ,    
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || true  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || true  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || true  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
DISABLE_PM: process.env.DISABLE_PM || true ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
ALIVE: process.env.ALIVE || `default`,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
WELCOME:  process.env.WELCOME  || true ,
ANTI_DELETE : process.env.ANTI_DELETE || false ,
};
