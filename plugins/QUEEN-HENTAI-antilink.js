
const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    }
		if (match == 'on' || match == 'off') {
			if (match == 'off' && !antilink)
				return await message.send('_AntiLink is not enabled._')
			await setAntiLink(message.jid, match == 'on')
			return await message.send(
				`_AntiLink ${match == 'on' ? 'Enabled' : 'Disabled.'}_`
			)
		}
		if (match == 'info')
			return await message.send(
				`*AntiLink :* ${antilink.enabled ? 'on' : 'off'}\n*AllowedUrl :* ${
					antilink.allowedUrls
				}\n*Action :* ${antilink.action}`
			)
		if (match.startsWith('action/')) {
			await setAntiLink(message.jid, match)
			const action = match.replace('action/', '')
			if (!['warn', 'kick', 'null'].includes(action))
				return await message.send('*Invalid action*')
			return await message.send(`_AntiLink action updated as ${action}_`)
		}
		const res = await setAntiLink(message.jid, match)
		return await message.send(
			`_AntiLink allowed urls are_\nAllow - ${res.allow.join(
				', '
			)}\nNotAllow - ${res.notallow.join(', ')}`
		)
}
