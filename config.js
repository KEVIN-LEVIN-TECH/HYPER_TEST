const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID|| 'sVRl2aTB#Glpe7siUwqHUsOnIjt2CXfXf_QZgTFyAD5H_OXLFOXA',
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/tCkmbMx/IMG-20240913-WA0041.jpg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_TYPING:"true",
AUTO_BIO:"true",
AUTO_VOICE:"true"
};
