let handler = async (m, { conn, usedprefix, text }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/pixelate', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: conn.getName(m.sender)
}), 'error.png', '🌀 *AQUÍ ESTA LA IMAGEN PIXELADA!!*\n𝙀𝙞𝙠𝙧𝙤𝙯𝘽𝙤𝙩-𝙈𝘿 | 𝙀𝙄𝙆𝙍𝙊𝙕𝙂𝙍𝘼𝙋𝙃𝙄𝘾𝙎', m)
}
handler.help = ['pixel','difuminar']
handler.tags = ['maker']
handler.command = /^(pixel|pixelar|difuminar)$/i
export default handler
