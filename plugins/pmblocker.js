//to use this grouponly mustbe off(using a sigle prefix is preferred)
export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
    // Ignore messages sent by the bot itself
    if (m.isBaileys && m.fromMe) return true;
  
    // Allow the owner's messages 
    if (isOwner) return false;
  
    // Ignore messages sent in group chats
    if (m.isGroup) return false;
 
    // If the message is not sent in a group, it's a private message 
    if (!m.isGroup) {
      // Fetch chat data and bot settings
      let chat = global.db.data.chats[m.chat];
      let bot = global.db.data.settings[this.user.jid] || {};
  
      // Check if the "PM Blocker" feature is enabled, and the sender is not an owner or real owner
      if (bot.pmblocker && !isOwner && !isROwner) {
        // Block the sender unconditionally for any private message sent
        await m.reply(`*Hey bza @${m.sender.split`@`[0]}, messaging the 💝 QUEEN HENTAI 💝─❂  bot privately is currently disabled. You have been blocked from using the 💝 QUEEN HENTAI 💝─❂ bot.*`, false, { mentions: [m.sender] });
        await this.updateBlockStatus(m.chat, 'block');
  
        // Return true to indicate that the private message should be blocked
        return true;
      }
    }
  
    
    return true;
  }
