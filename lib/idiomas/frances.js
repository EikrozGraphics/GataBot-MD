const lenguaje = () => { return 'fr' } //Français  

//ALERTES MESSAGES
const smsAvisoRG = () => { return `╰⊱✅⊱ *RÉSULTAT* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *AVERTISSEMENT* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMATION* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ERREUR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *ACTION MAUVAISE* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *RAPPORT* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *SUCCÈS* ⊱💚⊱╮\n\n` }

//PARAMETRES DANS LES COMMANDES
const smsRowner = () => { return `\`\`\`¡¡CETTE COMMANDE NE PEUT ÊTRE UTILISÉE QUE PAR MOI EN TANT QUE CRÉATEUR DE BOT!!\`\`\`` }//NUMÉRO DE BOT
const smsOwner = () => { return `\`\`\`¡¡CETTE COMMANDE SEUL MON CRÉATEUR PEUT L\UTILISER!!\`\`\`` }//OWNER
const smsMods = () => { return `\`\`\`¡¡CETTE COMMANDE SEULS LES MODÉRATEURS ET MON CRÉATEUR PEUVENT L'UTILISER!!\`\`\`\`` }//MODÉRATEURS
const smsPremium = () => { return `\`\`\`¡¡CETTE COMMANDE EST UNIQUEMENT DISPONIBLE POUR LES UTILISATEURS PREMIUM ET MON CRÉATEUR(A) !! POUR OBTENIR PREMIUM ACHETEZ UN PASS EN UTILISANT #pass premium\`\`\`` }//UTILISATEURS PREMIUM
const smsGroup = () => { return `\`\`\`¡¡CETTE COMMANDE NE PEUT ÊTRE UTILISÉE QUE DANS LES GROUPES!!\`\`\`` }//PARA GRUPOS
const smsPrivate = () => { return `\`\`\`¡¡CETTE COMMANDE NE PEUT ÊTRE UTILISÉE QUE PAR LE PRIVÉ!!\`\`\`` }//AL PRIVADO
const smsAdmin = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO ES PARA ADMINS!!\`\`\`` }//ADMINS
const smsBotAdmin = () => { return `\`\`\`¡¡J\'AI BESOIN D\'ÊTRE ADMIN POUR QUE VOUS POUVEZ UTILISER CETTE COMMANDE!!\`\`\`` }//BOT CON ADMIN
const smsUnreg = () => { return `\`\`\`¡¡VOUS DEVEZ ÊTRE ENREGISTRÉ POUR UTILISER CETTE COMMANDE, ÉCRIVEZ #verify POUR VOUS INSCRIRE!!\`\`\`` }//VÉRIFIER
const smsRestrict = () => { return `\`\`\`¡¡CETTE COMMANDE EST RESTREINTE PAR MON CRÉATEUR!!\`\`\`` }//COMMANDE RESTREINTE

//MENU LISTA
const smsTime = () => { return `Heure actuelle`}
const smsUptime = () => { return `Courir pendant`}
const smsVersion = () => { return `Version de ${global.gt}`}
const smsTotalUsers = () => { return `Nombre total d'utilisateurs`}
const smsMode = () => { return `Il est en mode`}
const smsModePublic = () => { return `PUBLIQUE`}
const smsModePrivate = () => { return `PRIVÉ`}
const smsBanChats = () => { return `Chat(x) interdit(s)`}
const smsBanUsers = () => { return `Utilisateur(s) banni(s)`}
const smsPareja = () => { return `Couple`}
const smsResultPareja = () => { return `N'a pas de partenaire`}
const smsSaludo = () => { return `👋 !SALUT! BIENVENUE À) 👋`}
const smsDia = () => { return `🌇 Bonjour ⛅`}
const smsTarde = () => { return `🏙️ Bonsoir 🌤️`}
const smsTarde2 = () => { return `🌆 Bonsoir 🌥️`}
const smsNoche = () => { return `🌃 Bonne nuit 💫`}
const smsListaMenu = () => { return `⊹ LISTE DES MENUS ⊹`}
const smsLista1 = () => { return `🌟 INFORMATIONS GATABOT 🌟`}
const smsLista2 = () => { return `💖 CRÉATEUR 💖`}
const smsLista3 = () => { return `🎁 DONNER 🎁`}
const smsLista4 = () => { return `🚀 VITESSE 🚀`}
const smsLista5 = () => { return `💡 INFORMATIONS SUR LES MENUS 💡`}
const smsLista6 = () => { return `🌀 MENU ENTIER 🌀`}
const smsLista7 = () => { return `🐈 INSTALLER GATABOT 🐈`}
const smsLista8 = () => { return `🍄 SOYEZ UN SOUS-BOT 🍄`}
const smsLista9 = () => { return `📄 TERMES, CONDITIONS ET CONFIDENTIALITÉ 📄`}
const smsLista10 = () => { return `🌟 AVENTURE 🌟`}
const smsLista11 = () => { return `🏆 TOP MONDIAL 🏆`}
const smsLista12 = () => { return `🏅 UTILISATEURS PREMIUM 🏅`}
const smsLista13 = () => { return `🎟️ ÊTRE UN UTILISATEUR PREMIUM 🎟️`}
const smsLista14 = () => { return `🛣️ MISSIONS QUOTIDIENNES 🛣️`}
const smsLista15 = () => { return `⚗️ MENU RPG ⚗️`}
const smsLista16 = () => { return `🏪 MAGASIN D'ACHAT ET DE VENTE 🏪`}
const smsLista17 = () => { return `🎒 INVENTAIRE 🎒`}
const smsLista18 = () => { return `🌟 MULTIMÉDIA 🌟`}
const smsLista19 = () => { return `📲 MENU TÉLÉCHARGEMENTS 📲`}
const smsLista20 = () => { return `🔍 MENU DE RECHERCHE 🔍`}
const smsLista21 = () => { return `🛰️ MENU DU CONVERTISSEUR 🛰️`}
const smsLista22 = () => { return `🧰 MENU MODIFICATEUR AUDIO 🧰`}
const smsLista22_1 = () => { return `🔩 MENU OUTILS 🔩`}
const smsLista23 = () => { return `🌟 AMUSANT 🌟`}
const smsLista24 = () => { return `🎡 JEUX DYNAMIQUES 🎡`}
const smsLista25 = () => { return `🔊 MENU AUDIO 🔊`}
const smsLista26 = () => { return `🎈 MENU AUTOCOLLANTS ET FILTRES 🎈`}
const smsLista27 = () => { return `✨ MENU EFFETS ET LOGOS ✨`}
const smsLista28 = () => { return `🌅 LOGOSMENU 2 🌅`}
const smsLista29 = () => { return `⛩️ MEMES ALÉATOIRES : ANIME ⛩️`}
const smsLista30 = () => { return `🔞 MENU COMMANDE +18 🔞`}
const smsLista31 = () => { return `🌟 PARAMÈTRES 🌟`}
const smsLista32 = () => { return `🔰 MENU POUR LES GROUPES 🔰`}
const smsLista33 = () => { return `📑 LISTES DISPONIBLES 📑`}
const smsLista34 = () => { return `⚙️ CENTRE DE CONFIGURATION ⚙️`}
const smsLista35 = () => { return `💎 MENU DU PROPRIÉTAIRE 💎`}

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ BIENVENUE À)!!*\n┊💖 @user\n┊📄 *LIRE LA DESCRIPTION DU GROUPE*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *LE GROUPE NE SAIT PAS, BYE!!* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user 𝙄𝙇 𝙀𝙎𝙏 𝙈𝘼𝙄𝙉𝙏𝙀𝙉𝘼𝙉𝙏 𝘼𝘿𝙈𝙄𝙉 𝘿𝘼𝙉𝙎 𝘾𝙀 𝙂𝙍𝙊𝙐𝙋𝙀!!*'}
const smsSdemote = () => { return '*@user 𝘼𝙍𝙍𝙀̂𝙏𝙀𝙕 𝘿\𝙀̂𝙏𝙍𝙀 𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝙏𝙀𝙐𝙍 𝘿𝘼𝙉𝙎 𝘾𝙀 𝙂𝙍𝙊𝙐𝙋𝙀!!*'}
const smsSdesc = () => { return '*𝙇𝘼 𝙉𝙊𝙐𝙑𝙀𝙇𝙇𝙀 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉 𝘿𝙐 𝙂𝙍𝙊𝙐𝙋𝙀 𝙀𝙎𝙏:*\n\n@desc'}
const smsSsubject = () => { return '*𝙇𝙀 𝙉𝙊𝙐𝙑𝙀𝘼𝙐 𝙉𝙊𝙈 𝘿𝙐 𝙂𝙍𝙊𝙐𝙋𝙀 𝙀𝙎𝙏:*\n\n@subject'}
const smsSicon = () => { return '*𝙇𝘼 𝙋𝙃𝙊𝙏𝙊 𝘿𝙀 𝙂𝙍𝙊𝙐𝙋𝙀 𝘼 𝙀́𝙏𝙀́ 𝙈𝙊𝘿𝙄𝙁𝙄𝙀́𝙀!!*'}
const smsSrevoke = () => { return '*𝙈𝘼𝙄𝙉𝙏𝙀𝙉𝘼𝙉𝙏 𝘾\'𝙀𝙎𝙏 𝙇𝙀 𝙉𝙊𝙐𝙑𝙀𝘼𝙐 𝙇𝙄𝙀𝙉 𝘿𝙀 𝙂𝙍𝙊𝙐𝙋𝙀!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦🟢 𝘾𝙊𝙉𝙉𝙀𝙓𝙄𝙊𝙉 ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ 𝘾𝙊𝙉𝙉𝙀𝙓𝙄𝙊𝙉 𝙍𝙀́𝙐𝙎𝙎𝙄𝙀 𝘼𝙑𝙀𝘾 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`} 
const smsCargando = () => { return `✨ MISE EN CHARGE...\n`} 
const smsCodigoQR = () => { return `\n✅ SCANNEZ LE CODE QR EXPIRE DANS 45 SECONDES ✅`}
const smsConexionOFF = () => { return `\n⚠️ AUCUNE CONNEXION, SUPPRIMER LE DOSSIER ${global.authFile} ET SCANNEZ LE QR CODE ⚠️`}
const smsClearTmp = () => { return `\n╭» 🟢 MULTIMÉDIA 🟢\n│☁ FICHIERS DU DOSSIER TMP SUPPRIMÉS\n╰―――――――――――――――――――✤`} 
const smspurgeSession = () => { return `\n╭» 🔵 ${global.authFile} 🔵\n│☁ SÉANCES NON ESSENTIELLES SUPPRIMÉES\n╰―――――――――――――――――――✤`} 
const smspurgeOldFiles = () => { return `\n╭» 🟠 ARCHIVOS 🟠\n│☁ FICHIERS RÉSIDUELS SUPPRIMÉS\n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB1 = () => { return `\n╭» 🟡 GataJadiBot 🟡\n│☁ RIEN A SUPPRIMER \n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB2 = () => { return `\n╭» ⚪ GataJadiBot ⚪\n│☁ FICHIERS NON ESSENTIELS SUPPRIMÉS\n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB3 = () => { return `\n╭» 🔴 GataJadiBot 🔴\n│☁ UNE ERREUR S'EST PRODUITE\n╰―――――――――――――――――――✤\n`} 
const smspurgeOldFiles1 = () => { return `\n╭» 🟣 ARCHIVE 🟣\n│☁`} 
const smspurgeOldFiles2 = () => { return `SUPPRIMER AVEC SUCCÈS\n╰―――――――――――――――――――✤`} 
const smspurgeOldFiles3 = () => { return `\n╭» 🔴 ARCHIVE 🔴\n│☁`} 
const smspurgeOldFiles4 = () => { return `ÉCHEC DE LA SUPPRESSION\n╰―――――――――――――――――――✤\n`}

//_allantilink.js
const smsTextoYT = () => { return '😻 𝗦𝘂𝗽𝗲𝗿 Eikroz𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 '} 
const smsApagar = () => { return '❌ DÉSACTIVER'} 
const smsEncender = () => { return '✅ ACTIVER'} 
const smsEnlaceTik = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceYt = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙔𝙊𝙐 𝙏𝙐𝘽𝙀 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceTel = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceFb = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceIg = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceTw = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙒𝙄𝙏𝙏𝙀𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsAllAdmin = () => { return `𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎(𝘼𝙎)`}
const smsSoloOwner = () => { return `𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n*#on restrict*`}

//handler.js
const smsCont1 = () => { return `*🔴 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗙𝗔𝗟𝗟𝗔𝗡𝗗𝗢 🔴*`}
const smsCont2 = () => { return `*⚠️ 𝗣𝗟𝗨𝗚𝗜𝗡:*`}
const smsCont3 = () => { return `*⚠️ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢:*`}
const smsCont4 = () => { return `*⚠️ 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:*`}
const smsCont5 = () => { return `*⚠️ 𝗘𝗥𝗥𝗢𝗥:*`}
const smsCont6 = () => { return `*❗ 𝗥𝗘𝗣𝗢𝗥𝗧𝗘 𝗘𝗦𝗧𝗘 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 #reporte 𝗣𝗔𝗥𝗔 𝗦𝗢𝗟𝗨𝗖𝗜𝗢𝗡𝗔𝗥𝗟𝗢*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*NO TIENE DIAMANTES!! 💎 PUEDE IR A LA TIENDA CON EL COMANDO*`}
const smsCont8 = () => { return ` *DIAMASTE(S) 💎 USADO(S)*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*NECESITA EL NIVEL ➡️*`}
const smsCont10 = () => { return `*PARA USAR ESTE COMANDO. TÚ NIVEL ACTUAL ES ➡️*`}
const smsCont11 = () => { return `*ACTUALIZA CON EL COMANDO*`}
const smsCont12 = () => { return `UN GRUPO GENIAL!! 😼`}
const smsCont13 = () => { return `ALGUIEN SE UNIÓ !! 🥳`}
const smsCont14 = () => { return `ALGUIEN SE FUE!! 🧐`}
const smsCont15 = () => { return `𝙃𝙊𝙇𝘼`}
const smsCont16 = () => { return `𝙇𝘼𝙎 𝙑𝙄𝘿𝙀𝙊𝙇𝙇𝘼𝙈𝘼𝘿𝘼𝙎 📲`}
const smsCont17 = () => { return `𝙇𝘼𝙎 𝙇𝙇𝘼𝙈𝘼𝘿𝘼𝙎 📞`}
const smsCont18 = () => { return `𝙉𝙊 𝙀𝙎𝙏𝘼𝙉 𝘼𝙐𝙏𝙊𝙍𝙄𝙕𝘼𝘿𝘼𝙎 𝙋𝙊𝙍 𝙇𝙊 𝙌𝙐𝙀 𝙏𝙀𝙉𝘿𝙍𝙀 𝙌𝙐𝙀 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝙍𝙏𝙀\n\n𝙎𝙄 𝙇𝙇𝘼𝙈𝘼𝙎𝙏𝙀 𝙋𝙊𝙍 𝘼𝘾𝘾𝙄𝘿𝙀𝙉𝙏𝙀 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝙏𝙀 𝘾𝙊𝙉 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊/𝘼 𝘿𝙀 𝙀𝙎𝙏𝙀 𝘽𝙊𝙏\n𝙎𝙄 𝙀𝙎 𝙐𝙉𝘼 𝘾𝙐𝙀𝙉𝙏𝘼 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏 𝘿𝙄𝙍𝙄𝙂𝙀𝙏𝙀 𝘼 𝙇𝘼 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼 𝙋𝙊𝙍 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝙏𝙍𝘼𝙏𝘼𝙍 𝙎𝙐 𝘾𝘼𝙎𝙊\n*${global.ig}*`}
const smsCont19 = () => { return `𝘼𝙉𝙏𝙄 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍`}
const smsCont20 = () => { return `*┃✤ Nombre:*`}
const smsCont21 = () => { return `*┃✤ Enviando el mensaje eliminado...*`}

//_anti-internacional.js
const smsInt1 = () => { return `𝙀𝙎𝙏𝙀 𝙉𝙐𝙈𝙀𝙍𝙊`}
const smsInt2 = () => { return `𝙉𝙊 𝙀𝙎𝙏𝘼 𝙋𝙀𝙍𝙈𝙄𝙏𝙄𝘿𝙊 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}𝘾𝙊𝙈𝙊 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙉𝙊 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊(𝘼)`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝙌𝙐𝙀 𝘾𝙊𝙉𝙏𝙄𝙀𝙉𝙀 𝙃𝙏𝙏𝙋𝙎 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}

//_antispam.js
const smsNoSpam = () => { return `🤨 NO HAGAS SPAM, NO PODRÁ USAR A ${global.packname} POR ${60000 / 1000 - 59} MINUTO`}

//_antispam_.js
const smsNoSpam2 = () => { return `FUE DESBANEADO DESPUÉS DE ${60000 / 1000 - 59} MINUTO. POR FAVOR NO HAGA SPAM!!`}

//Texto
const smsConMenu = () => { return `☘️ 𝗠 𝗘 𝗡 𝗨`} //🟡 NO CAMBIAR 

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`OCURRIÓ UN ERROR INESPERADO.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SURGIÓ UN INCONVENIENTE. INTENTE DE NUEVO.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ALGO SALIÓ MAL, REPORTE ESTE COMANDO USANDO:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `𝙉𝙊𝙊!!! 🤬 𝘿𝙀𝘾𝙄𝙍 𝙀𝙎𝙏𝘼 𝙋𝘼𝙇𝘼𝘽𝙍𝘼`}
const smsToxic2 = () => { return `𝙀𝙎𝙏𝘼 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝘼 𝙉𝙊 𝙎𝙀𝘼𝙎 𝙏𝙊𝙓𝙄𝘾𝙊(𝘼)`}
const smsToxic3 = () => { return `*ADVERTENCIA*\n⚠️`}
const smsToxic4 = () => { return `😭 𝙇𝙊 𝙎𝙄𝙀𝙉𝙏𝙊`} //🟡 NO CAMBIAR 
const smsToxic5 = () => { return `☢️ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝘼𝙉𝙏𝙄𝙏𝙊𝙓𝙄𝘾`} //🟡 NO CAMBIAR 
const smsToxic6 = () => { return `𝙏𝙀 𝙇𝙊 𝘼𝘿𝙑𝙀𝙍𝙏𝙄𝘿 𝙑𝘼𝙍𝙄𝘼𝙎 𝙑𝙀𝘾𝙀𝙎!!`}
const smsToxic7 = () => { return `𝙎𝙐𝙋𝙀𝙍𝘼𝙎𝙏𝙀 𝙇𝘼𝙎 4 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼𝙎 𝘼𝙃𝙊𝙍𝘼 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊(𝘼) 🙄`}

//Tienda
const eExp = () => { return '⚡ Experiencia' } 
const eDiamante = () => { return '💎 Diamante' } 
const eDiamantePlus = () => { return '💎+ Diamante+' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Esmeralda' } 
const eJoya = () => { return '♦️ Joya' }
const eMagia = () => { return '🌀 Magia' } 
const eOro = () => { return '👑 Oro' } 
const eGataCoins = () => { return '🐱 GataCoins' }
const eGataTickers = () => { return '🎫 Gata Tickers' } 
const eEnergia = () => { return '✨ Energía' }
const ePocion = () => { return '🥤 Poción' }
const eAgua = () => { return '💧 Agua' }
const eBasura = () => { return '🗑 Basura' }
const eMadera = () => { return '🪵 Madera' }
const eRoca = () => { return '🪨 Roca' }
const ePiedra = () => { return '🥌 Piedra' }
const eCuerda = () => { return '🕸️ Cuerda' }
const eHierro = () => { return '⛓️ Hierro' }
const eCarbon = () => { return '⚱️ Carbón' }
const eBotella = () => { return '🍶 Botella' }
const eLata = () => { return '🥫 Lata' }
const eCarton = () => { return '🪧 Cartón' } 
const eEletric = () => { return '💡 Electricidad' }
const eBarraOro = () => { return '〽️ Barra de Oro' }
const eOroComun = () => { return '🧭 Oro Común' }
const eZorroG = () => { return '🦊🌫️ Zorro Grande' }
const eBasuraG = () => { return '🗑🌫️ Super Basura' }
const eLoboG = () => { return '🐺🌫️ Super Lobo' }
const eMaderaG = () => { return '🛷🌫️ Super Madera' }
const eEspada = () => { return '⚔️ Espada' }
const eCarnada = () => { return '🪱 Carnada' }
const eBillete = () => { return '💵 Billetes' }
const ePinata = () => { return '🪅 Piñata' }
const eGancho = () => { return '🪝 Gancho' }
const eCanaPescar = () => { return '🎣 Caña de Pescar' } 
const eCComun = () => { return '📦 Caja Común' }
const ePComun = () => { return '🥡 Caja Poco Común' }
const eCMistica = () => { return '🗳️ Caja Mítica' }
const eCMascota = () => { return '📫 Caja de Mascotas' }
const eCJardineria = () => { return '💐 Caja de Jardinería' }
const eClegendaria = () => { return '🎁 Caja Legendaria' } 
const eUva = () => { return '🍇 Uva' }
const eManzana = () => { return '🍎 Manzana' }
const eNaranja = () => { return '🍊 Naranja' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Platano' } 
const eSUva = () => { return '🌾🍇 Semillas de uva' }
const eSManzana = () => { return '🌾🍎 Semillas de manzana' }
const eSNaranja = () => { return '🌾🍊 Semillas de naranja' }
const eSMango = () => { return '🌾🥭 Semillas de Mango' }
const eSPlatano = () => { return '🌾🍌 Semillas de plátano' } 
const eCentauro = () => { return '🐐 Centauro' }
const eAve = () => { return '🦅 Ave' }
const eGato = () => { return '🐈 Gato' }
const eDragon = () => { return '🐉 Dragón' }
const eZorro = () => { return '🦊 Zorro' }
const eCaballo = () => { return '🐎 Caballo' }
const eFenix = () => { return '🕊️ Fénix' }
const eLobo = () => { return '🐺 Lobo' }
const ePerro = () => { return '🐶 Perro' } 
const eAMascots = () => { return '🍖 Alimento para Mascota' }
const eCCentauro = () => { return '🐐🥩 Comida de Centauro' }
const eCAve = () => { return '🦅🥩 Comida de Ave' }
const eCMagica = () => { return '🌀🥩 Comida Mágica' }
const eCDragon = () => { return '🐉🥩 Comida de Dragón' }
const eACaballo = () => { return '🐎🥩 Alimentos Para Caballo' }
const eCFenix = () => { return '🕊️🥩 Comida de Fénix' } 
//config-on y off.js
const smsWel1 = () => { return `🎉 BIENVENIDA`}
const smsWel2 = () => { return `Mensaje de Bienvenida para nuevos Miembros en Grupos`}
const smsDete1 = () => { return `🔔 AVISOS`}
const smsDete2 = () => { return `Avisos de acciones dentro del Grupo`}
const smsANivel1 = () => { return `🆙 NIVEL AUTOMÁTICO`}
const smsANivel2 = () => { return `Sube de nivel a todos de manera automática; (Aplica recompensas por subir de Nivel)`}
const smsRestri1 = () => { return `⛔ RESTRINGIR`}
const smsRestri2 = () => { return `Habilitar función para agregar o eliminar personas en Grupos`}
const smsLlamar1 = () => { return `🚫 ANTI LLAMADAS`}
const smsLlamar2 = () => { return `Bloquea a Personas que hagan llamadas`}
const smsAntiSp1 = () => { return `🚯 ANTI SPAM`}
const smsAntiSp2 = () => { return `Banear el Uso de Comados cuando alguien realice algún tipo de Spam`}
const smsModP1 = () => { return `🌐 MODO PÚBLICO`}
const smsModP2 = () => { return `Habilitar función para que todos puedan usar GataBot`}
const smsModAd1 = () => { return `🛂 MODO ADMIN`}
const smsModAd2 = () => { return `Solo los Admins podrán usar GataBot en Grupos`}
const smsLect1 = () => { return `✅ LECTURA AUTOMÁTICA`}
const smsLect2 = () => { return `Dejar los mensajes o chats como Leídos`}
const smsTempo1 = () => { return `🐈 BOT TEMPORAL`}
const smsTempo2 = () => { return `Función que permite estadía temporalmente en Grupos`}
const smsStik1 = () => { return `🎠 STICKERS`}
const smsStik2 = () => { return `Habilitar el envio automático de Stickers a todos`}
const smsStickA1 = () => { return `🪄 STICKERS AUTOMÁTICOS`}
const smsStickA2 = () => { return `Los vídeos, Gif, imágenes, enlaces jpg o jpeg; Se convertirán en Stickers Automáticamente`}
const smsReacc1 = () => { return `🤡 REACCIÓN `}
const smsReacc2 = () => { return `Habilitar el envio automático de Reacciones a mensajes`}
const smsAudi1 = () => { return `🔊 AUDIOS`}
const smsAudi2 = () => { return `Habilitar el envio automático de Audios a todos`}
const smsModHor1 = () => { return `🔞 MODO HORNY`}
const smsModHor2 = () => { return `Mostrar contenido para Adulto en los Chats`}
const smsAntitoc1 = () => { return `☢️ ANTI TÓXICOS`}
const smsAntitoc2 = () => { return `Enviar Advertencias aquellas personas que insulten`}
const smsModOb1 = () => { return `👀 MODO OBSERVAR`}
const smsModOb2 = () => { return `Permitir que las imágenes, Gif y Vídeos se puedan ver para todos`}
const smsAntiEli1 = () => { return `🗑️ ANTI ELIMINAR`}
const smsAntiEli2 = () => { return `Todo mensaje eliminado será reenviado al Chat o Grupo`}
const smsAntiInt1 = () => { return `🌏 ANTI INTERNACIONAL`}
const smsAntiInt2 = () => { return `Eliminar Números internacionales considerados falsos`}
const smsAntiE1 = () => { return `🔗 ANTI ENLACES`}
const smsAntiE2 = () => { return `Eliminar Personas que envíen enlaces de Grupos de WhatsApp`}
const smsAntiEE1 = () => { return `🔗 ANTI ENLACES 2`}
const smsAntiEE2 = () => { return `Eliminar Personas que envíen enlaces que contengan https`}
const smsAntiTT1 = () => { return `🔗 ANTI TIKTOK`}
const smsAntiTT2 = () => { return `Eliminar Personas que envíen enlaces de TikTok`}
const smsAntiYT1 = () => { return `🔗 ANTI YOUTUBE`}
const smsAntiYT2 = () => { return `Eliminar Personas que envíen enlaces de YouTube`}
const smsAntiTEL1 = () => { return `🔗 ANTI TELEGRAM`}
const smsAntiTEL2 = () => { return `Eliminar Personas que envíen enlaces de Telegram`}
const smsAntiFB1 = () => { return `🔗 ANTI FACEBOOK`}
const smsAntiFB2 = () => { return `Eliminar Personas que envíen enlaces de Facebbok`}
const smsAntiIG1 = () => { return `🔗 ANTI INSTAGRAM`}
const smsAntiIG2 = () => { return `Eliminar Personas que envíen enlaces de Instagram`}
const smsAntiTW1 = () => { return `🔗 ANTI TWITTER `}
const smsAntiTW2 = () => { return `Eliminar Personas que envíen enlaces de Twitter`}
const smsSOLOP1 = () => { return `⚜️ SOLO PRIVADOS`}
const smsSOLOP2 = () => { return `Permitir que solo se use en Chats Privados`}
const smsSOLOG1 = () => { return `⚜️ SOLO GRUPOS`}
const smsSOLOG2 = () => { return `Permitir que solo se use en Chats Grupales`}
const smsConfi1 = () => { return `AJUSTES`}
const smsConfi2 = () => { return `*¡Hola!*`}
const smsConfi3 = () => { return `┃ *Seleccione una opción de la lista*`}
const smsConfi4 = () => { return `┃ *Para empezar a Configurar*`}
const smsConfi5 = () => { return `┃● *Avisos de la Configuracion:*`}
const smsConfi6 = () => { return `┃ ✅ ⇢ *Función Activada*`}
const smsConfi7 = () => { return `┃ ❌ ⇢ *Función Desactivada*`}
const smsConfi8 = () => { return `┃ ⚠️ ⇢ *Este Chat no es un Grupo*`}
const smsConfi9 = () => { return `┃ *Recomendación: Para ver la configuración*\n┃ *Completa use este Menú en Grupo*\n┃`}
const smsConfi10 = () => { return `*~ CENTRO DE CONFIGURACIÓN*`}
const smsParaAdmins = () => { return `PARA ADMINS Y CREADOR(A) : GRUPOS`}
const smsParaAdYOw = () => { return `PARA ADMINS Y CREADOR(A) : CHATS`}
const smsParaOw = () => { return `PARA CREADOR(A) : CHATS`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `COMANDO`} 
const smsMens2 = () => { return `ACTUALMENTE`} 
const smsMens3 = () => { return `EN ESTE`} 
const smsMens4 = () => { return `BOT`} 
const smsMens5 = () => { return `CHAT`} 

//Error2
const smsMensError1 = () => { return `❕ REPORTAR COMANDO ❕`} 
const smsMensError2 = () => { return `Está Fallando el siguiente comando`} 

//_antiviewonce.js
const smsAntiView = () => { return `*𝙈𝘼𝙎𝙏𝙀𝙍 𝙔𝙊 𝙇𝙊 𝙑𝙀𝙊 𝙏𝙊𝘿𝙊 𝘼𝙌𝙐Í* 😎`} 

//_autolevelup.js
const smsAutoLv1 = () => { return `🎖️ NUEVO NIVEL 🎖️`} 
const smsAutoLv2 = () => { return `NIVEL ANTERIOR:`} 
const smsAutoLv3 = () => { return `NIVEL ACTUAL:`} 
const smsAutoLv4 = () => { return `RANGO:`} 
const smsAutoLv5 = () => { return `FECHA:`} 
const smsAutoLv6 = () => { return `Has alcanzado un Nuevo Nivel!!!`} 
const smsAutoLv7 = () => { return `🥳 RECOMPENSA POR SU NUEVO NIVEL`} 

//_autosticker.js
const smsAutoStik = () => { return `${lenguajeGB['smsAvisoFG']()}*EL VÍDEO NO DEBE DE DURAR MÁS DE 7 SEGUNDOS.*`} 

//_expired.js
const smsBottem1 = () => { return `*SE VA DEL GRUPO!!! 🤝 SI QUIERE QUE VUELVA, USE EL COMANDO _#bottemporal_ PARA QUE VUELVA AL GRUPO!!*`} 
const smsBottem2 = () => { return `*💕 ASISTENCIA PARA USUARIOS*\n*_${global.ig}_*\n`} 
const smsBottem3 = () => { return `HASTA PRONTO 💖`} 

//_premium.js
const smsPremI = () => { return `*¡SE ACABÓ TÚ TIEMPO PREMIUM!* 🎟️\n*PARA OBTENER UN NUEVO PASE PREMIUM USE EL COMANDO:*\n*#pase premium*`} 

//afk-_afk.js
const smsAfkM1 = () => { return `${lenguajeGB['smsAvisoEG']()}*DEJASTE DE ESTAR INACTIVO AFK*`} 
const smsAfkM2 = () => { return `*EL MOTIVO DE INACTIVIDAD ERA:*`} 
const smsAfkM3 = () => { return `*TIEMPO INACTIVO:*`} 
const smsAfkM4 = () => { return `${lenguajeGB['smsAvisoAG']()}*NO ETIQUETES A ESTE(A) USUARIO(A)!! ESTÁ INACTIVO(A)*`} 
const smsAfkM5 = () => { return `*MOTIVO DE LA INACTIVIDAD AFK:*`} 
const smsAfkM6 = () => { return `*MOTIVO DE LA INACTIVIDAD AFK: NO ESPECIFICÓ MOTIVO DE INACTIVIDAD*`} 

//afk-afk.js
const smsAfkM1A = () => { return `${lenguajeGB['smsAvisoAG']()}*NO ETIQUETEN A*`} 
const smsAfkM1B = () => { return `*ESTARÁ INACTIVO(A) AFK*\n\n*MOTIVO DE LA INACTIVIDAD AFK*`} 

//anonymous_chat.js
const smsChatAn1 = () => { return `${lenguajeGB['smsAvisoFG']()}*NO ESTÁS EN CHAT ANÓNIMO*`} 
const smsChatAn2 = () => { return `*SI QUIERES INICIAR UN CHAT ANÓNIMO USA EL COMANDO #start O USAR EL BOTÓN DE ABAJO*\n`} 
const smsChatAn3 = () => { return `⚡ INICIAR CHAT ANÓNIMO`} 
const smsChatAn4 = () => { return `${lenguajeGB['smsAvisoRG']()}🪐 *USTED SE FUE DEL CHAT ANÓNIMO*`} 
const smsChatAn5 = () => { return `${lenguajeGB['smsAvisoAG']()}*EL OTRO USUARIO SALIÓ DEL CHAT ANÓNIMO*`}  
const smsChatAn6 = () => { return `*SI QUIERES IR A OTRO CHAT ANÓNIMO USA EL COMANDO #start O USAR EL BOTÓN DE ABAJO*\n`} 
const smsChatAn7 = () => { return `${lenguajeGB['smsAvisoAG']()}*TODAVÍA ESTÁS EN UN CHAT ANÓNIMO O EN ESPERA A QUE ALGUIEN SE UNA PARA CHATEAR*`} 
const smsChatAn8 = () => { return `*SI QUIERES SALIR DEL CHAT ANÓNIMO USE EL COMANDO #leave O PUEDES USAR EL BOTÓN DE ABAJO*\n`} 
const smsChatAn9 = () => { return `🍁 SALIR DEL CHAT ANÓNIMO`} 
const smsChatAn10 = () => { return `${lenguajeGB['smsAvisoEG']()}✨ *YA PUEDEN CHATEAR*`} 
const smsChatAn11 = () => { return `*ALGUIEN SE HA UNIDO AL CHAT ANÓNIMO!!*`} 
const smsChatAn12 = () => { return `❇️ OTRO(A) USUARIO(A)`} 
const smsChatAn13 = () => { return `${lenguajeGB['smsAvisoRG']()}🐈 *ESPERANDO A QUE ALGUIEN SE UNA AL CHAT ANÓNIMO, TENGA PACIENCIA POR FAVOR*`} 

//Botones de Menú 
const smsBotonM1 = () => { return `⚡ MENÚ DE INICIO ⚡`} 
const smsBotonM2 = () => { return `💫 MENÚ COMPLETO 💫`} 
const smsBotonM3 = () => { return `🎒 INVENTARIO 🎒`} 
const smsBotonM4 = () => { return `USUARIOS`}
const smsBotonM5 = () => { return `RANGO`}
const smsBotonM6 = () => { return `NIVEL`}
const smsBotonM7 = () => { return `PREMIUM`}
const smsTex1 = () => { return '*MENÚ DE BUSQUEDA*'}
const smsTex2 = () => { return '*MODIFICADOR DE AUDIO*'}
const smsTex3 = () => { return '*MENÚ +18*'}
const smsTex4 = () => { return '*CONTENIDO DINÁMICO*'}
const smsTex5 = () => { return '*BUSCAR Y DESCARGAR*'}
const smsTex6 = () => { return '*MENÚ +18 PREMIUM*'}
const smsTex7 = () => { return '⠇ *Imágenes +18 de calidad y variedad*\n⠇ *Vídeos +18 solo para ti*\n⠇ *Stickers +18 disponibles*'}
const smsTex8 = () => { return '*MENÚ CONVERTIDOR*'}
const smsTex9 = () => { return '*MENÚ DE DESCARGAS*'}
const smsTex10 = () => { return '*MENU JUEGOS DINÁMICOS*'}
const smsTex11 = () => { return '*MENU PARA GRUPOS*'}
const smsTex12 = () => { return '*MENU DE HERRAMIENTAS*'}
const smsTex13 = () => { return '*MENU DE INFORMACIÓN*'}
const smsTex14 = () => { return '*MENU DE EFECTOS Y LOGOS*'}
const smsTex15 = () => { return '*MENU DE LOGOS 2*'}
const smsTex16 = () => { return 'MENU DE AUDIOS'}
const smsTex17 = () => { return '*NO ES NECESARIO USAR PREFIJO EN AUDIOS*'}
const smsTex18 = () => { return 'LISTA DE AUDIOS'}
const smsTex19 = () => { return '*PUEDE SELECCIONAR EL AUDIO!!*'}
const smsTex20 = () => { return '*MENU PARA PROPIETARIO(A)*'}
const smsTex21 = () => { return '*MENU RPG*'}
const smsTex22 = () => { return '*MENU DE STICKERS Y FILTROS*'}
const smsTex23 = () => { return '*MENU DE MEMES Y ANIMES RANDOMS*'}

//ad
const smsMalused = () => { return '⚡ *USAR EL COMANDO DE ESTA FORMA:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *DEBE DE USAR EL COMANDO COMO EN ESTE EJEMPLO:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *DEBE DE USAR EL COMANDO O RESPONDER AL MENSAJE DE ALGUIEN COMO EN ESTE EJEMPLO:*\n`}

//gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *_ABRIR GRUPO EN UNA HORA_*'}
const smsGrupoTime2 = () => { return '🔒 *_CERRAR GRUPO EN UNA HORA_*'}
const smsGrupoTime3 = () => { return '*GRUPO'}
const smsGrupoTime4 = () => { return 'CERRADO'}
const smsGrupoTime5 = () => { return 'ABIERTO'}
const smsGrupoTime6 = () => { return '*DURANTE'}
const smsGrupoTime7 = () => { return '🔒 *EL GRUPO ESTA CERRADO, SOLO ADMINS PUEDEN ENVIAR MENSAJES*'}
const smsGrupoTime8 = () => { return '🔓 *EL GRUPO ESTA ABIERTO, TODOS PUEDEN ENVIAR MENSAJES*'}
const smsGrupoTime9 = () => { return '🔓 ABRIR GRUPO DURANTE '}
const smsGrupoTime10 = () => { return '🔒 CERRAR GRUPO DURANTE '}
const smsGrupoTime11 = () => { return ' HORA'}
const smsGrupoTime12 = () => { return 'PERMITIR QUE EL GRUPO SE HABRA POR '}
const smsGrupoTime13 = () => { return 'PERMITIR QUE EL GRUPO SE CIERRE POR '}

//grupo-add.js
const smsAddB1 = () => { return `${lenguajeGB['smsAvisoFG']()}*NO SE PUEDE AGREGAR EL NÚMERO, VERFIQUE QUE SEA CORRECTO, TAL VEZ SALIÓ RECIENTEMENTE O SU PRIVACIDAD ESTA CONFIGURADA.*`}
const smsAddB2 = () => { return `${lenguajeGB['smsAvisoFG']()}*NO SE PUEDE AGREGAR EL NÚMERO, VERFIQUE QUE SEA CORRECTO, O AGRÉGELO MANUALMENTE.*`}

//grupo-admins.js
const smsAddB3 = () => { return `*NOTIFICACIÓN PARA ADMINS*`}
const smsAddB4 = () => { return `*PRESENCIA DE ADMINS*`}
const smsAddB5 = () => { return `*MENSAJE:*`}
const smsAddB6 = () => { return `Solicito a los Admins por favor.`}

//grupo-advertencia.js
const smsAdveu1 = () => { return `${lenguajeGB['smsAvisoAG']()}*SOLO PUEDE USAR SI ESTÁ ACTIVADA LA FUNCIÓN:*\n`}
const smsAdveu2 = () => { return 'Motivo'}
const smsAdveu3 = () => { return `${lenguajeGB['smsAvisoMG']()}*RECUERDE ESCRIBIR EL MOTIVO DE LA ADVERTENCIA*\n`}
const smsAdveu4 = () => { return '*RECIBIÓ UNA ADVERTENCIA EN ESTE GRUPO!!*'}
const smsAdveu5 = () => { return 'ADVERTENCIA'}
const smsAdveu6 = () => { return '🎒 INVENTARIO'} 
const smsAdveu7 = () => { return '*TE LO ADVERTI VARIAS VECES!!*'}
const smsAdveu8 = () => { return '*AHORA SERÁS ELIMINADO(A)* 🙄'}
const smsAdveu9 = () => { return '😇 MUCHAS GRACIAS'}
const smsAdveu10 = () => { return '*SE LE ELIMINÓ UNA ADVERTENCIA EN ESTE GRUPO!!*'}
const smsAdveu11 = () => { return 'Antes:'}
const smsAdveu12 = () => { return 'Ahora:'}

//grupo-demote.js || grupo-promote.js 
const smsDemott = () => { return '*EL NÚMERO NO ES VÁLIDO, VUELVA INTENTAR RESPONDA AL MENSAJE DE ALGUIEN O USE COMO EN ESTE EJEMPLO:*\n'}
const smsDemott2 = () => { return '*AHORA TIENE PODER EN EL GRUPO!!*'}
const smsDemott3 = () => { return '*YA NO TIENE PODER EN EL GRUPO!!*'}

//grupo-info.js
const smsGI1 = () => { return '*INFORMACIÓN DEL GRUPO*'}
const smsGI2 = () => { return '*ID DEL GRUPO*'}
const smsGI3 = () => { return '*NOMBRE DEL GRUPO*'}
const smsGI4 = () => { return '*DESCRIPCIÓN DEL GRUPO*'}
const smsGI5 = () => { return '*NO HAY DESCRIPCIÓN*'}
const smsGI6 = () => { return '*NÚMERO DE USUARIOS*'}
const smsGI7 = () => { return '*Usuarios*'}
const smsGI8 = () => { return '*CREADOR(A) DEL GRUPO*'}
const smsGI9 = () => { return '*ADMINS DEL GRUPO*'}
const smsGI10 = () => { return '⚙️ CONFIGUARACIONES DEL GRUPO'}

//grupo-kick.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*ETIQUETE A LA PERSONA O RESPONDA AL MENSAJE DE LA PERSONA QUE QUIERE ELIMINAR*\n\n*EJEMPLO: `}
const smskick2 = () => { return `ELIMINADO(A) 😼🫵`}
const smskick3 = () => { return `NO PUEDO ELIMINAR AL CREADOR DEL GRUPO 😆🫵`}
const smskick4 = () => { return `NO ESTÁ EN ESTE GRUPO 👻`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ INVOCANDO AL GRUPO ⚡`}

//grupo-setbye.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*LA DESPEDIDA DEL GRUPO HA SIDO CONFIGURADA*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ESCRIBA EL MENSAJE DE DESPEDIDA_*\n*_OPCIONAL PUEDE USAR LO QUE ESTA CON "@" PARA AGREGAR MÁS INFORMACIÓN:_*\n\n*⚡ @user (Mención al usuario(a))*\n\n*RECUERDE QUE EL "@" ES OPCIONAL*`}

//grupo-setwelcome.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*LA BIENVENIDA DEL GRUPO HA SIDO CONFIGURADA*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ESCRIBA EL MENSAJE DE BIENVENIDA_*\n*_OPCIONAL PUEDE USAR LO QUE ESTA CON "@" PARA AGREGAR MÁS INFORMACIÓN:_*\n\n*⚡ @user (Mención al usuario(a))*\n*⚡ @subject (Nombre de grupo)*\n*⚡ @desc (Description de grupo)*\n\n*RECUERDE QUE LOS "@" SON OPCIONALES*`}

//grupo-setdesc.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*LA DESCRIPCIÓN DEL GRUPO HA SIDO CONFIGURADA*`}

//grupo-setname.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*EL NOMBRE DEL GRUPO HA SIDO CONFIGURADO*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 ESCRIBA EL NUEVO NOMBRE DEL GRUPO*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*EL NOMBRE DEL GRUPO NO DEBE DE TENER MÁS DE 25 CARACTERES*`}

//grupo-restaurarEnlace.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*EL ENLACE DEL GRUPO HA SIDO RESTABLECIDO*`}

//Botón 
const smsSig = () => { return `➡️ SIGUIENTE ➡️`}
const smsSigPrem = () => { return `❤️‍🔥 SIGUIENTE ❤️‍🔥`}
const smsCont18Porn = () => { return `🔞 *CONTENIDO* 🔞`} //texto
const smsCont18Porn2 = () => { return `🔞 CONTENIDO 🔞`} //texto
const smsCont18PornP = () => { return `🌟 *CONTENIDO ❤️‍🔥 PREMIUM* 🌟`} //texto
const smsCont18PornP2 = () => { return `CONTENIDO ❤️‍🔥 PREMIUM`} //texto  

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*Répondre au message ou écrire le message utilisé  ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*Envoyé un message officiel, attendez un moment...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ Le message a été envoyé ${totalPri} aux chats\n\n*Temps d expédition total privés: ${time}*\n${totalPri >= 3000 ? '\n*Ils nont pas été envoyés à tous les chats pour éviter la saturation*' : ''}`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *message:*`}
const smsBCbot2 = () => { return `Privé`}
const smsBCbot3 = () => { return `Grappe `}
const smsBCbot4 = () => { return `Total`}
const smsBCbot5 = () => { return `Temps d expédition total :`}
const smsBCbot6 = () => { return `Ils n'ont pas été envoyés à tous les chats pour éviter la saturation`}
const smsBCbot7 = () => { return `✅ * Déclaration officielle* ✅`}
 
 //propietario(a).js
const smsChatGP1 = () => { return "*Envoyé un message, attendez un moment...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ *déclaration officielle* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ * Le message a été envoyé aux ${totalGP} groupes*`}

//jadibot-serbot.js
const smsIniJadi = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*\n\n*ღ Versión de ${global.packname} » _${global.vs}_*\n*ღ Versión de JadiBot » _${global.vsJB}_*\n\n🟢 *_FUNCIÓN SER SUB BOT_* 🟢\n\n*➡️ Con otro celular o en la PC escanea este QR para convertirte en Sub Bot*\n\n*1️⃣ Diríjase en los tres puntos en la esquina superior derecha*\n*2️⃣ Ir a la opción Dispositivos vinculados*\n*3️⃣ Escanee este codigo QR para iniciar sesión*\n\n📢 *¡Este código QR expira en 45 segundos!*`}
const smsIniJadi2 = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*

*ღ Versión de ${global.packname} » _${global.vs}_*
*ღ Versión de JadiBot » _${global.vsJB}_*

🟢 *_NUEVA FUNCIÓN DE HACERTE UN SUB BOT_* 🟢

*1️⃣ Diríjase en los tres puntos en la esquina superior derecha*
*2️⃣ Ir a la opción Dispositivos vinculados*
*3️⃣ da click en vincular con codigo de teléfono*
*4️⃣ pega el codigo a continuación*`}
const smsJBConexionClose2 = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *TU DISPOSITIVO SE DESCONECTADO*\n\n*TENDRAS QUE VOLVER A CONECTARTE USAR:\n#deletesesion (Para borrar datos y poder volver a solita el QR o el code)`}
const smsreenvia = () => { return `*🟢 REENVIA EL COMANDO...*`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*ESTE COMANDO ESTÁ DESACTIVADO POR MÍ PROPIETARIO(A)*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *PARA SER SUB BOT DIRÍJASE AL NÚMERO PRINCIPAL*\n*ღ Ingrese al siguiente enlace:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *LA CONEXIÓN SE HA CERRADO DE MANERA INESPERADA, INTENTAREMOS RECONECTAR...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *LA CONEXIÓN SE HA CERRADO, DEBERÁ DE CONECTARSE MANUALMENTE USANDO EL COMANDO #serbot Y REESCANEAR EL NUEVO CÓDIGO QR*`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONEXIÓN CON ÉXITO!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONEXIÓN CON ÉXITO!!! PUEDE CONECTARSE USANDO:*`}
const smsJBCargando = () => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *ESTÁ CONECTADO(A)!! POR FAVOR ESPERE SE ESTÁ CARGANDO LOS MENSAJES...*\n\n♻️ *OPCIONES DISPONIBLES:*\n*» #stop _(Detener la función Sub Bot)_*\n*» #eliminarsesion _(Borrar todo rastro de Sub Bot)_*\n*» #serbot _(Obtener nuevo código QR para ser Sub Bot)_*`}
const smsJBInfo1 = () => { return `💖 *ENLACE ÚTIL*`}
const smsJBInfo2 = () => { return `💖 *La función es estable, sí presenta algún inconveniente Comuníquese al correo: centergatabot@gmail.com*\n💝 *Puede hacer una Donación voluntaria por PayPal: ${global.paypal}*\n\n*Muchas Gracias por el apoyo a ${global.packname}*`}

//jadibot-deleteSesion.js
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*USE ESTE COMANDO AL BOT PRINCIPAL*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*TE VOY A EXTRAÑAR ${global.packname} CHAOO!! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*HA CERRADO SESIÓN Y BORRADO TODO RASTRO*`}
const smsJBErr = () => { return `*HA CERRADO SESIÓN COMO SUB BOT* ♻️`}

//comandos+18-adult.js
const smsContAdult = () => { return `${lenguajeGB['smsAvisoAG']()}*LOS COMANDOS 🔞 ESTÁN DESACTIVADOS, SI USTED ES MI CREADOR(A) USE #on modohorny*`}

//comandos+18-menu.js
const smsList1 = () => { return `No tiene suficiente `}
const smsList2 = () => { return `\nPresione aquí para comprar `}
const smsList3 = () => { return `Contenido disponible 😸`}
const smsList4 = () => { return `Contenido no disponible 😿\nPresione aquí para comprar `}
const smsList5 = () => { return `*Seleccione una opción*\n*de la lista para ver el*\n*contenido* 😋`}
const smsList6 = () => { return `👀 VER LISTA 👀`}

//descargas-consejos.js
const smsConj = () => { return `🍃 NUEVO CONSEJO`}
const smsFras = () => { return `🍃 NUEVA FRASE`}

//info-contacto.js
const smsContacto1 = () => { return ' Soy ' + packname + ' un Bot de WhatsApp dedicado en ayudar con lo que me pidas 😎'}
const smsContacto2 = () => { return 'Soy Owner de ' + packname + ' sí tienes alguna duda me la puedes decir ✌️'}
const smsContacto3 = () => { return '👑 Owner'}
const smsContacto4 = () => { return 'Contacto Oficial de GataBot 🐈'}
const smsContacto5 = () => { return '🐣 ¿Le puedo ayudar en algo?'}
const smsContacto6 = () => { return 'No tengo correo 🙏'}
const smsContacto7 = () => { return '🌎 Global'}
const smsContacto8 = () => { return 'Esta Cuenta es Bot 👀'}


export default { lenguaje, smsAvisoRG, smsChatGP1, smsChatGP2, smsChatGP3, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsAvisoAG, smsAvisoIIG, smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsConMenu, smsMalError, smsMalError2, smsMalError3, smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eGataCoins, eGataTickers, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4, smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2, smsAntiView, smsAutoLv1, smsAutoLv2, smsAutoLv3, smsAutoLv4, smsAutoLv5, smsAutoLv6, smsAutoLv7, smsAntiSp1, smsAntiSp2, smsAutoStik, smsBottem1, smsBottem2, smsBottem3, smsPremI,
smsAfkM1, smsAfkM2, smsAfkM3, smsAfkM4, smsAfkM5, smsAfkM6, smsAfkM1A, smsAfkM1B, smsChatAn1, smsChatAn2, smsChatAn3, smsChatAn4, smsChatAn5, smsChatAn6, smsChatAn7, smsChatAn8, smsChatAn9, smsChatAn10, smsChatAn11, smsChatAn12, smsChatAn13, smsBotonM1, smsBotonM2, smsBotonM3, smsBotonM4, smsBotonM5, smsBotonM6, smsBotonM7, smsTex1, smsTex2, smsTex3, smsTex4, smsTex5, smsTex6, smsTex7, smsTex8, smsTex9, smsTex10, smsTex11, smsTex12, smsTex13, smsTex14, smsTex15, smsTex16, smsTex17, smsTex18, smsTex19, smsTex20, smsTex21, smsTex22, smsTex23, smsMalused, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8, smsGrupoTime9, smsGrupoTime10, smsGrupoTime11, smsGrupoTime12, smsGrupoTime13, smsAddB1, smsAddB2, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsAdveu1, smsMalused2, smsAdveu2, smsAdveu3, smsAdveu4, smsAdveu5, smsAdveu6, smsAdveu7, smsAdveu8, smsAdveu9, smsMalused3, smsAdveu10, smsAdveu11, smsAdveu12, smsDemott, smsDemott2, smsDemott3,
smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsGI10, smsLista22_1, smsCodigoQR, smsConexionOFF, smskick1, smskick2, smskick3, smskick4, smstagaa,
smsSetB, smsSetB2, smsSetW, smsSetW2, smsDest, smsNam1, smsNam2, smsNam3, smsRestGp, smsSig, smsSigPrem, smsCont18Porn, smsCont18Porn2, smsCont18PornP, smsCont18PornP2,
smsIniJadi, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionTrue, smsJBConexionTrue2, smsJBCargando, smsJBInfo1, smsJBInfo2, smsJBDel, smsJBAdios, 
smsJBCerrarS, smsJBErr, smsContAdult, smsList1, smsList2, smsList3, smsList4, smsList5, smsList6, smsConj, smsFras, smsContacto1, smsContacto2, smsContacto3, smsContacto4,
smsContacto5, smsContacto6, smsContacto7, smsContacto8, smsreenvia, smsJBConexionClose2, smsIniJadi2};
