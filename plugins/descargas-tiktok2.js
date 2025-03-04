import fetch from "node-fetch"; 

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0])
    throw `_📌️ Uso del comando_*\n *${usedPrefix + command} https://vm.tiktok.com/ZM66Jpk3P/*`;
    await m.react("⌛");

  try {
    let res = await fetch(`https://bk9.fun/download/tiktok?url=${args[0]}`);
    let json = await res.json();

    if (json.status) {
      const videoUrl = json.BK9.BK9; 
      conn.sendFile(
        m.chat,
        videoUrl,
        "tiktok.mp4",
        `${json.BK9.desc}`,
        m
      );
    } else {
      throw new Error("No se pudo obtener el contenido de TikTok.");
    }
  } catch (error) {
    console.error("Error al obtener el contenido de TikTok:", error);
    await m.reply(
      "❌ Error: No se pudo descargar el contenido de TikTok. Asegúrate de que la URL sea válida."
    );
  }
};

handler.help = ["tiktok *<url>*"];
handler.tags = ["downloader"];
handler.command = ["tiktok2", "tt2"];
handler.limit = 2

export default handler;