/*
███████╗  ██╗   ██╗ ███████╗ ███████╗ ███╗   ██╗       ███   █████████    ███     ███    ███     ███
██╔═══██╗ ██║   ██║ ██╔════╝ ██╔════╝ ████╗  ██║       ███   ███          ███     ███    ███     ███
██║   ██║ ██║   ██║ █████╗   █████╗   ██╔██╗ ██║       ███   █████████    ███████████    ███     ███
██║▄▄ ██║ ██║   ██║ ██╔══╝   ██╔══╝   ██║╚██╗██        ███         ███    ███     ███    ███████████
╚██████╔╝ ╚██████╔╝ ███████╗ ███████╗ ██║ ╚████║       ███   █████████    ███     ███      ███████
created by laksidu
 DONT COPY
*/

//===================================================AUTO==========================
const fs = require('fs'),
  path = require('path'),
  { readEnv } = require('../lib/database'),
  { cmd } = require('../command')
cmd({ on: 'body' }, async (conn, mek, m, { from, body, isOwner }) => {
  const filePath = path.join(__dirname, '../media/autovoice.json'),
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  for (const text in data) {
    if (body.toLowerCase() === text.toLowerCase()) {
      const config = await readEnv()
      if (config.AUTO_VOICE === 'true') {
        if (isOwner) {
          return
        }
        await conn.sendPresenceUpdate('recording', from)
        await conn.sendMessage(
          from,
          {
            audio: { url: data[text] },
            mimetype: 'audio/mpeg',
            ptt: true,
          },
          { quoted: mek }
        )
      }
    }
  }
})
cmd({ on: 'body' }, async (conn, mek, m, { from, body, isOwner }) => {
  const filePath = path.join(__dirname, '../media/autoimage.json'),
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  for (const text in data) {
    if (body.toLowerCase() === text.toLowerCase()) {
      const config = await readEnv()
      if (config.AUTO_IMAGE === 'true') {
        if (isOwner) {
          return
        }
        await conn.sendMessage(
          from,
          {
            image: { url: data[text] },
            mimetype: 'image/jpeg',
          },
          { quoted: mek }
        )
      }
    }
  }
})
cmd({ on: 'body' }, async (conn, mek, m, { from, body, isOwner }) => {
  const filePath = path.join(__dirname, '../media/autovideo.json'),
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  for (const text in data) {
    if (body.toLowerCase() === text.toLowerCase()) {
      const config = await readEnv()
      if (config.AUTO_VIDEO === 'true') {
        if (isOwner) {
          return
        }
        await conn.sendMessage(
          from,
          {
            video: { url: data[text] },
            mimetype: 'video/mp4',
          },
          { quoted: mek }
        )
      }
    }
  }
})
cmd({ on: 'body' }, async (conn, mek, m, { from, body, isOwner }) => {
  const filePath = path.join(__dirname, '../media/autosticker.json'),
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  for (const text in data) {
    if (body.toLowerCase() === text.toLowerCase()) {
      const config = await readEnv()
      if (config.AUTO_STICKER === 'true') {
        if (isOwner) {
          return
        }
        await conn.sendMessage(
          from,
          {
            sticker: { url: data[text] },
            package: 'DilaMD',
          },
          { quoted: mek }
        )
      }
    }
  }
})
cmd({ on: 'body' }, async (conn, mek, m, { from, body, isOwner }) => {
  const filePath = path.join(__dirname, '../media/autoreply.json'),
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  for (const text in data) {
    if (body.toLowerCase() === text.toLowerCase()) {
      const config = await readEnv()
      if (config.AUTO_REPLY === 'true') {
        if (isOwner) {
          return
        }
        await m.reply(data[text])
      }
    }
  }
})
