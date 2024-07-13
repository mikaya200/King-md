import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

const alive = async (m, Matrix) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (24 * 3600));
  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
    if (['mikaya', 'rash'].includes(cmd)) {

  const uptimeMessage = `
_______________
MR RASH___😚💐
_________

MR RASH___😚💐
_________
60% ▰▰▰▰▰▰▱▱▱▱ 100% 𝐂ᴏᴍᴘʟᴇᴛᴇᴅ ✅
┏━━━━━━━━━━━━━━━━━
┃〲Nᴀᴍᴇ ❝ 𝗥𝗔𝗦𝗛𝗠𝗜𝗞𝗔 𝗗𝗘𝗦𝗛𝗔𝗡 ❞ 🐣
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┃ 〲Fʀᴏᴍ ❝ 𝗘𝗕𝗜𝗟𝗜𝗣𝗜𝗧𝗜𝗬𝗔 ❞ ☘️💐
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┃ 〲𝚁ᴇʟᴀᴛɪᴏɴꜱʜɪᴘ ❝ 𝗦𝗜𝗡𝗚𝗟𝗘❞ 💍👸🏼
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┃ 〲Aɢᴇ ❝ 17ᴏʟᴅ ❞ 🌝✨
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┃ 〲Sᴇx ❝ 𝙼ᴀʟᴇ ❞ 🍼🧩
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┃ 〲Eᴅᴜ ❝ ꜱᴛᴜᴅʏ ❞ 💰💳
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┃ 〲Jᴏʙ ❝ 𝗜𝗠 𝗦𝗧𝗨𝗗𝗘𝗡𝗧 ❞ 📡💡
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┃〲Cᴏᴜɴᴛʀʏ ❝ ꜱʀɪ ʟᴀɴᴋᴀ ❞ 🏴‍☠️🇱🇰
┗━━━━━━━━━━━━━━━━━
`;

  const buttons = [
        {
          "name": "cta_url",
          "buttonParamsJson": JSON.stringify({
            display_text: "OWNER",
            url: `https://wa.me/+94707765200`
          })
        },
     {
          "name": "cta_url",
          "buttonParamsJson": JSON.stringify({
            display_text: "SITE",
            url: `https://rrrrrrrrr-7811c9eba162.herokuapp.com//`
          })
        },
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "MENU",
            id: `.menu`
          })
        },
     {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "PING",
            id: `.ping`
          })
        }
        ];

  const msg = generateWAMessageFromContent(m.from, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: uptimeMessage
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "𝗠𝗥-𝗥𝗔𝗦𝗛•"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            gifPlayback: true,
            subtitle: "",
            hasMediaAttachment: false 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: false,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: " ",
                  serverMessageId: 143
                }
              }
        }),
      },
    },
  }, {});

  await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
    }
};

export default alive;
