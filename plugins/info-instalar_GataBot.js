let handler  = async (m, { conn, usedPrefix, command }) => {
let picture = './media/menus/Menu1.jpg'
let gata = `𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏 🐈

*━━━━━━━━━━━━━⬣*
✅ 𝗜𝗡𝗦𝗧𝗔𝗟𝗔𝗥 𝗘𝗡 𝗕𝗢𝗫𝗠𝗜𝗡𝗘
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*Eikroz𝘽𝙤𝙩-𝙈𝘿 : 𝘽𝙤𝙭𝙈𝙞𝙣𝙚*
*_https://youtu.be/Ko019wvu2Tc_*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_PAGINA OFICIAL_ 
_https://boxmineworld.com_
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_Tutorial - Crea una cuenta en la Dashboard_
_https://www.youtube.com/watch?v=ZAwBLuNmIlI_
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_DASHBOARD_
_https://dash.boxmineworld.com_
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_PANEL_
_https://panel.boxmineworld.com_
*━━━━━━━━━━━━━⬣*

*━━━━━━━━━━━━━⬣*
✅ 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙀𝙉 𝙏𝙀𝙍𝙈𝙐𝙓
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
termux-setup-storage
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/gata.sh | bash
*━━━━━━━━━━━━━⬣*

*━━━━━━━━━━━━━⬣*
✅ 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙀𝙉 𝙃𝙀𝙍𝙊𝙆𝙐
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*_https://heroku.com/deploy?template=https://github.com/GataNina-Li/GataBot-MD_*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*Añada lo siguente al Buildpack:*
_https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git_
_https://github.com/clhuang/heroku-buildpack-webp-binaries.git_
*━━━━━━━━━━━━━⬣*`
await 
//conn.sendFile(m.chat, gataImg, 'lp.jpg', gata, fkontak, false, { contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: accountsgb }}})}
conn.sendButton(m.chat, gata, `Comunícate con Mí Creadora si necesitas ayuda con la Instalación.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar']], 'termux-setup-storage\n\napt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/gata.sh | bash', fkontak)}
handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler


