// by https://github.com/elrebelde21

import '../plugins/_content.js'
//let handler = m => m
//handler.all = async function (m) {
const antiSpam = new Map();
export async function before(m, { conn }) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return 
if (chat.isBanned) return
 
let vn = 'https://qu.ax/EQEJP.mp3'im
let bot = `${pickRandom([`*¡𝑬𝒚! 𝑨𝒒𝒖í 𝒆𝒔𝒕𝒐𝒚. 𝒀𝒐 𝒑𝒖𝒆𝒅𝒐 𝒂𝒚𝒖𝒅𝒂𝒓 👉👈 𝑯𝒆𝒚! 𝑰'𝒎 𝒉𝒆𝒓𝒆. 𝑰 𝒄𝒂𝒏 𝒉𝒆𝒍𝒑 🙌*`, `Aqui estoy | Here I am 😼`, `*Hola Aqui estoy yo puedo ayudar? | Hello, here I am, can I help? 😸*`])}`.tr()
let txt = `*¿Tu Nokia es muy lento y necesitas que tu bot esté activo 24/7?* 📱⏳

¡Tenemos la solución perfecta para ti! 🎉 Mantén tu bot funcionando sin interrupciones con nuestros servidores, Ofrecemos servidores gratuitos y de pago a precios súper accesibles, al alcance de todos. 💸 

🖥️ *Totalmente compatible con EikrozBot:* Disfruta al máximo de su potencial en nuestros servidores de alto rendimiento, asegurando una experiencia fluida y de alta calidad. El staff de EikrozBot y CorinPlus Host se encarga de que disfrutes de todas sus funciones al máximo. 😺✨

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*


*🟢 Dashboard:*


⚙️ *Panel*


💥 *Comunidad de WhatsApp:*


*🟣 Discord:*


🧡 *Canal de WhatsApp:*


🗣📲 *Contacto:*


No esperes más y lleva tu bot al siguiente nivel con nuestro servicio de alojamiento. ¡Es fácil, rápido y económico! 💪🚀` 

const lastMessageTime = antiSpam.get(m.sender) || 0;
const currentTime = Date.now();
if (currentTime - lastMessageTime < 5000) return 
antiSpam.set(m.sender, currentTime); 

if (/^infohost$/i.test(m.text)) {
 await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '', 
serverMessageId: '', 
newsletterName: '' }, 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: ``,
body: `¡El plus que necesitas!_`,
"previewType": "PHOTO",
thumbnailUrl: 'https://cloud.dorratz.com/files/0e620e089bf149565c789c350f4f3347.jpg', 
sourceUrl: accountsgb}}},
{ quoted: fkontak})
} 
 
if (/^bot$/i.test(m.text)) {
await conn.reply(m.chat, bot, m, fakeChannel)
await conn.sendPresenceUpdate('recording', m.chat)
await conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: m })   
} else if (/^simi$/i.test(m.text)) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝙃𝘼𝘽𝙇𝘼𝙍 𝘾𝙊𝙉𝙈𝙄𝙂𝙊\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*Hola Eikroz Bot*\n\n𝙒𝙍𝙄𝙏𝙀 𝘼 𝙏𝙀𝙓𝙏 𝙏𝙊 𝙏𝘼𝙇𝙆 𝙏𝙊 𝙈𝙀\n\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*Hello Eikroz Bot.*`, m);
} else if (m.text.includes(`bot`) || m.text.includes(`Bot`) || m.text.includes(`simsimi`) || m.text.includes(`simi`) || m.text.includes(`alexa`)) {   
//if (/^(bot|simi|simsimi)\s.+$/i.test(m.text)) {
if (m.text.includes('jadibot') || m.text.includes('bots') || m.text.includes('serbot') || m.text.includes('instalarbot') || m.text.includes('infobot')) return;
try {
await conn.sendPresenceUpdate('composing', m.chat)
async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

let query = m.text;
let username = `${m.pushName}`;

let syms1 = `Serás EikrozBot, el bot creado por 𝙀𝙄𝙆𝙍𝙊𝙕𝙂𝙍𝘼𝙋𝙃𝙄𝘾𝙎 para WhatsApp. Tu misión es entretener y también ser útil. Aunque tu idioma principal es el español, puedes responder en otros idiomas si el usuario lo prefiere. tiene este rol que chat divertido con exploit incluido osea los quiere dices es que este rol solo es humor no que tome nada real y usar mucho emojis el tu respuesta.

"general risa el chat por que este rol actúal más como simsimi" Chatbot no chatgpt. 

los quiere dices que tu respuesta sera humor negro, risa, memes.`;  

let result = await luminsesi(query, username, syms1);
await conn.reply(m.chat, result, m)
} catch {
try {
let gpt = await fetch(`${apis}/tools/simi?text=${m.text}`)
let res = await gpt.json()
await m.reply(res.data.message)
} catch (e) {
console.log(e) 
}}}

if (/^e$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`Que bueno sabe la letra E`, `eeeeee`])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}

/*if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`no puedo esta contra las política del grupo.😸`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callate putito_'])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}*/

if (/^reglas|normas|Reglas$/i.test(m.text) ) { //sin prefijo 
conn.reply(m.chat, `*╭┅〘 ⚠️ 𝗢𝗯𝗲𝗱𝗲𝗰𝗲 𝗹𝗮𝘀 𝗿𝗲𝗴𝗹𝗮𝘀 ⚠️ 〙*
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐥𝐥𝐚𝐦𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐒𝐩𝐚𝐦 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐍𝐨 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐑𝐞𝐬𝐩𝐞𝐭𝐚 𝐥𝐨𝐬 𝐭𝐞𝐫𝐦𝐢𝐧𝐨𝐬 𝐲 𝐜𝐨𝐧𝐝𝐢𝐜𝐢𝐨𝐧𝐞𝐬
*╰═┅ৡৢ͜͡✦═╡ EikrozBot-MD ╞═┅ৡৢ͜͡✦═╯*`, fkontak, m)}

if (/^Quiero un bot|como obtengo un bot?|Quiero un bot?|quiero un bot|solicitud|solicitó bot|solicito bot|Necesito un bot|necesito un bot$/i.test(m.text) ) {
conn.reply(m.chat,  `\`⚡¿Quieres un bot para tu grupo?\`

*🐈 Tiene varias opciones. Puedes instalarlo tú mismo siguiendo los pasos de instalación:*


\`⚡ ¿El bot estará activo 24/7?\`
_*Sí, nuestro bot está alojado en un servidor de pago para mantenerlo activo 24/7 (por eso también solicitamos donaciones para mantenerlo en funcionamiento) 💞*_

> *𝙂𝙧𝙖𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙨𝙪𝙨 𝙥𝙧𝙚𝙛𝙚𝙧𝙚𝙣𝙘𝙞𝙖𝙨 𝙚𝙣 ${gt} 🐈💞*`, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Hola ${name} 👋`, body: wm, previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})}
 
if (/^¿Qué es un Bot?|¿Qué es Bot?|Qué es Bot|qué es Bot|QUÉ ES UN BOT|¿QUÉ ES UN BOT?|¿qué es un Bot?|qué es un Bot|que es un Bot|Qué es un Bot?|Que es un Bot? $/i.test(m.text) ) {
conn.reply(m.chat, `\`✨ ¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩? ✨\`

🍃 _Un Bot es una inteligencia programada que permite realizar actividades dependiendo de lo que solicite. En temas de WhatsApp, es posible crear stickers, descargar música, vídeos, crear logos, buscar imágenes, interactuar en modo de conversación,  participar en juegos dentro de chats etc..._

🍃 *_Para ver el menú de comandos puedes usar:_*
#menu

𝙀𝙄𝙆𝙍𝙊𝙕𝙂𝙍𝘼𝙋𝙃𝙄𝘾𝙎`, m)}  
return !0 
}
//export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
