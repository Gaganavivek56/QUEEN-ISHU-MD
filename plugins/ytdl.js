const _0xf2316e=_0x4254;(function(_0x4d709a,_0x197506){const _0x13e7dd=_0x4254,_0x1ca11c=_0x4d709a();while(!![]){try{const _0x375d68=-parseInt(_0x13e7dd(0x1fe))/0x1*(parseInt(_0x13e7dd(0x20e))/0x2)+-parseInt(_0x13e7dd(0x1e5))/0x3+parseInt(_0x13e7dd(0x21d))/0x4*(parseInt(_0x13e7dd(0x206))/0x5)+parseInt(_0x13e7dd(0x1f8))/0x6+parseInt(_0x13e7dd(0x217))/0x7+-parseInt(_0x13e7dd(0x21e))/0x8*(parseInt(_0x13e7dd(0x1e8))/0x9)+parseInt(_0x13e7dd(0x1ef))/0xa;if(_0x375d68===_0x197506)break;else _0x1ca11c['push'](_0x1ca11c['shift']());}catch(_0x52a642){_0x1ca11c['push'](_0x1ca11c['shift']());}}}(_0x5195,0xebd0d));const {cmd,commands}=require(_0xf2316e(0x1ec)),fg=require(_0xf2316e(0x21f)),yts=require(_0xf2316e(0x1d8)),{fetchJson}=require(_0xf2316e(0x1f4)),axios=require(_0xf2316e(0x1e1)),cheerio=require('cheerio');function _0x4254(_0x139e43,_0x2b9208){const _0x5195b5=_0x5195();return _0x4254=function(_0x4254ce,_0x4ceb32){_0x4254ce=_0x4254ce-0x1d3;let _0x4d9c20=_0x5195b5[_0x4254ce];return _0x4d9c20;},_0x4254(_0x139e43,_0x2b9208);}async function ytmp3(_0x25b6ba){const _0x5ca62f=_0xf2316e;try{if(!_0x25b6ba)throw new Error(_0x5ca62f(0x1ee));const _0x3f1b54=await axios['get'](_0x5ca62f(0x219)+encodeURIComponent(_0x25b6ba),{'headers':{'Accept':'application/json,\x20text/plain,\x20*/*','Accept-Encoding':_0x5ca62f(0x205),'Accept-Language':_0x5ca62f(0x1de),'Origin':_0x5ca62f(0x20d),'Referer':_0x5ca62f(0x220)}}),_0x14e087=_0x3f1b54['data'][_0x5ca62f(0x1dd)][_0x5ca62f(0x1fa)],_0x1de79d=_0x3f1b54['data']['data'][_0x5ca62f(0x1e4)],_0x550fc8=await axios['get']('https://cdn61.savetube.su/download/audio/128/'+_0x14e087,{'headers':{'Accept':_0x5ca62f(0x1fc),'Accept-Encoding':_0x5ca62f(0x205),'Accept-Language':_0x5ca62f(0x1de),'Origin':'https://ytshorts.savetube.me','Referer':_0x5ca62f(0x20d)}});return{'status':!![],'Created_by':_0x5ca62f(0x208),'title':_0x1de79d,'dl_link':_0x550fc8['data'][_0x5ca62f(0x1dd)][_0x5ca62f(0x1f2)]};}catch(_0x2acc84){return;}}async function ytmp4(_0xa9bd15,_0x574798){const _0x301797=_0xf2316e;try{if(!_0xa9bd15||!_0x574798)throw new Error(_0x301797(0x214));const _0x83821e=parseInt(_0x574798['replace']('p',''),0xa),_0x162cf6=_0x301797(0x20f),_0x575ad2={'button':0x1,'start':0x1,'end':0x1,'format':_0x83821e,'url':_0xa9bd15},_0x2efcbb={'Accept':_0x301797(0x1fc),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':'en-GB,en-US;q=0.9,en;q=0.8','Origin':_0x301797(0x1f5),'Referer':_0x301797(0x1f5),'Sec-Ch-Ua':_0x301797(0x1db),'Sec-Ch-Ua-Mobile':'?1','Sec-Ch-Ua-Platform':_0x301797(0x1d4),'Sec-Fetch-Dest':_0x301797(0x227),'Sec-Fetch-Mode':'cors','Sec-Fetch-Site':'cross-site','User-Agent':'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20K)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/124.0.0.0\x20Mobile\x20Safari/537.36'},_0x290d0a=await axios[_0x301797(0x207)](_0x162cf6,{'params':_0x575ad2,'headers':_0x2efcbb}),_0x43d5ec=_0x290d0a['data']['id'],_0x203da2=async()=>{const _0x596daf=_0x301797,_0x261717=_0x596daf(0x20b),_0x30c6f0={'id':_0x43d5ec};try{const _0x1be0d9=await axios[_0x596daf(0x207)](_0x261717,{'params':_0x30c6f0,'headers':_0x2efcbb}),{progress:_0x630ff6,download_url:_0x176d44,text:_0x27e7f8}=_0x1be0d9[_0x596daf(0x1dd)];return _0x27e7f8===_0x596daf(0x223)?_0x176d44:(await new Promise(_0x2570f3=>setTimeout(_0x2570f3,0x3e8)),_0x203da2());}catch(_0x3b3c3a){throw new Error(_0x596daf(0x1da)+_0x3b3c3a[_0x596daf(0x1e0)]);}};return await _0x203da2();}catch(_0xb27c6f){}}module[_0xf2316e(0x212)]={'ytmp3':ytmp3,'ytmp4':ytmp4};function extractYouTubeId(_0x305ac6){const _0x2ffd6e=_0xf2316e,_0x33a75c=/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,_0x8c5afa=_0x305ac6[_0x2ffd6e(0x20a)](_0x33a75c);return _0x8c5afa?_0x8c5afa[0x1]:null;}function _0x5195(){const _0x25af39=['yts','audio/mp3','empty','views','url','\x22Android\x22','\x0a*==================*\x0a===================\x0a│\x20*💜ʀᴇᴘʟʏ\x20ʙᴇʟᴏᴡ\x20ᴛʜᴇ\x20ɴᴜᴍʙᴇʀ💜*\x0a│\x0a│\x20*1*\x20_(ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ\x20ᴀᴜᴅɪᴏ)_\x0a│\x20*2*\x20_(ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ\x20ᴅᴏᴄᴜᴍᴇɴᴛ)_\x0a⁠⁠⁠⁠====================\x0a\x0a*💜©\x20CREATED\x20BY\x20LAKSIDU\x20NIMSARA\x20·\x20·\x20·*\x0a>\x20QUEEN-ISHU\x20💜\x20\x20\x20\x20\x0a','video/mp4','video','yt-search','sendMessage','Error\x20in\x20progress\x20check:\x20','\x22Not-A.Brand\x22;v=\x2299\x22,\x20\x22Chromium\x22;v=\x22124\x22','.mp4','data','en-GB,en-US;q=0.9,en;q=0.8','text','message','axios','participant','thumbnail','title','4686000NrVIGs','1.4','ytmp3','54WBtWaE','To\x20download\x20songs.','\x0a*================*\x0a==================\x0a│\x20*💜ʀᴇᴘʟʏ\x20ʙᴇʟᴏᴡ\x20ᴛʜᴇ\x20ɴᴜᴍʙᴇʀ💜*\x0a│\x0a│\x20ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ\x20ᴠɪᴅᴇᴏ\x20ꜰɪʟᴇ\x20❃\x0a│\x20_1.1\x20(360ᴘ)_\x0a│\x20_1.2\x20(480ᴘ)_\x0a│\x20_1.3\x20(720ᴘ)_\x0a│\x20_1.4\x20(1080ᴘ)_\x0a│ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ\x20ᴅᴏᴄᴜᴍᴇɴᴛ\x20❃\x0a│\x20_2.1\x20(360ᴘ)_\x0a│\x20_2.2\x20(480ᴘ)_\x0a│\x20_2.3\x20(720ᴘ)_\x0a│\x20_2.4\x20(1080ᴘ)_\x0a⁠⁠⁠⁠================\x0a\x0a*💜©\x20CREATED\x20BY\x20LAKSIDU\x20NIMSARA\x20·\x20·\x20·*\x0a>\x20QUEEN-ISHU\x20💜\x0a','contextInfo','../command','videos','URL\x20parameter\x20is\x20required','32586730zXorZP','720','log','downloadUrl','messages.upsert','../lib/functions','https://loader.to','play','2.1','2797254iYfsho','2.3','key','1080','*/*','2.2','8345GNIAkT','messages','1.3','360','.mp3','ago','480','gzip,\x20deflate,\x20br','585725oWBROg','get','JANITH\x20RASHMIKA','\x20\x0a💜\x20*Link:*\x20','match','https://p.oceansaver.in/ajax/progress.php','download','https://ytshorts.savetube.me','180OQbApz','https://ab.cococococ.com/ajax/download.php','https://www.youtube.com/watch?v=','Please\x20give\x20me\x20a\x20URL\x20or\x20title.','exports','1.1','url\x20and\x20format\x20parameters\x20are\x20required.','\x20\x0a💜\x20*Duration:*\x20','stanzaId','2763439LVhvxm','dl_link','https://cdn58.savetube.su/info?url=','conversation','remoteJid','extendedTextMessage','24GjgiTQ','2058104PLDWXf','api-dylux','https://ytshorts.savetube.me/','To\x20download\x20videos.','song','Finished','audio/mpeg'];_0x5195=function(){return _0x25af39;};return _0x5195();}function convertYouTubeLink(_0x4d7c7f){const _0x5b800c=_0xf2316e,_0x325b0f=extractYouTubeId(_0x4d7c7f);if(_0x325b0f)return _0x5b800c(0x210)+_0x325b0f;return _0x4d7c7f;}cmd({'pattern':_0xf2316e(0x222),'alias':[_0xf2316e(0x1f6),_0xf2316e(0x1e7)],'desc':_0xf2316e(0x1e9),'react':'🎵','category':_0xf2316e(0x20c),'filename':__filename},async(_0x4443a6,_0x3fb0c0,_0x51d538,{from:_0x39db19,quoted:_0x24f9ff,body:_0xb317d6,isCmd:_0x1758f1,command:_0x95b913,args:_0x29051e,q:_0x441993,isGroup:_0x5e66ef,sender:_0x21e975,senderNumber:_0x35a194,botNumber2:_0x232d83,botNumber:_0x22e08b,pushname:_0x142bc9,isMe:_0x5bae06,isOwner:_0x206a87,groupMetadata:_0x52533d,groupName:_0x4b773f,participants:_0x233b66,groupAdmins:_0x33d7db,isBotAdmins:_0x40f612,isAdmins:_0x401fa0,reply:_0x4c1b6a})=>{const _0xb880db=_0xf2316e;try{if(!_0x441993)return _0x4c1b6a(_0xb880db(0x211));_0x441993=convertYouTubeLink(_0x441993);const _0x4d6e51=await yts(_0x441993),_0x3eeb38=_0x4d6e51[_0xb880db(0x1ed)][0x0],_0x1adc0a=_0x3eeb38[_0xb880db(0x1d3)];let _0x375faf='\x0a*==================*\x0a│*💜QUEEN-ISHU\x20SONG\x20DOWNLOADING💜*\x0a*⁠⁠⁠⁠=================*\x0a*==================*\x0a💜\x20*Title:*\x20'+_0x3eeb38['title']+_0xb880db(0x215)+_0x3eeb38['timestamp']+'\x20\x0a💜\x20*Views:*\x20'+_0x3eeb38[_0xb880db(0x228)]+'\x20\x0a💜\x20*Uploaded\x20On:*\x20'+_0x3eeb38[_0xb880db(0x203)]+_0xb880db(0x209)+_0x3eeb38[_0xb880db(0x1d3)]+_0xb880db(0x1d5),_0xfc878a='\x0a*💜©\x20CREATED\x20BY\x20LAKSIDU\x20NIMSARA\x20·\x20·\x20·*\x0a\x20';const _0x1811f6=await _0x4443a6['sendMessage'](_0x39db19,{'image':{'url':_0x3eeb38[_0xb880db(0x1e3)]},'caption':_0x375faf}),_0x20b093=_0x1811f6['key']['id'];_0x4443a6['ev']['on'](_0xb880db(0x1f3),async _0x2ab4fc=>{const _0x1edf91=_0xb880db,_0x41e6f5=_0x2ab4fc['messages'][0x0];if(!_0x41e6f5[_0x1edf91(0x1e0)])return;const _0x19519b=_0x41e6f5[_0x1edf91(0x1e0)][_0x1edf91(0x21a)]||_0x41e6f5['message'][_0x1edf91(0x21c)]?.[_0x1edf91(0x1df)],_0x4b8fbf=_0x41e6f5['key'][_0x1edf91(0x21b)],_0x2fae1a=_0x41e6f5[_0x1edf91(0x1fa)]['participant']||_0x41e6f5[_0x1edf91(0x1fa)][_0x1edf91(0x21b)],_0x54f0e5=_0x41e6f5[_0x1edf91(0x1e0)][_0x1edf91(0x21c)]&&_0x41e6f5[_0x1edf91(0x1e0)][_0x1edf91(0x21c)][_0x1edf91(0x1eb)][_0x1edf91(0x216)]===_0x20b093;if(_0x54f0e5){await _0x4443a6[_0x1edf91(0x1d9)](_0x4b8fbf,{'react':{'text':'⬇️','key':_0x41e6f5['key']}});const _0x474981=await ytmp3(''+_0x1adc0a),_0xfffdc0=_0x474981[_0x1edf91(0x218)];await _0x4443a6[_0x1edf91(0x1d9)](_0x4b8fbf,{'react':{'text':'⬆️','key':_0x41e6f5[_0x1edf91(0x1fa)]}});if(_0x19519b==='1')await _0x4443a6[_0x1edf91(0x1d9)](_0x4b8fbf,{'audio':{'url':_0xfffdc0},'mimetype':_0x1edf91(0x224),'contextInfo':{'externalAdReply':{'title':_0x3eeb38['title'],'body':_0x3eeb38['videoId'],'mediaType':0x1,'sourceUrl':_0x3eeb38[_0x1edf91(0x1d3)],'thumbnailUrl':_0x3eeb38[_0x1edf91(0x1e3)],'renderLargerThumbnail':!![],'showAdAttribution':!![]}}},{'quoted':_0x41e6f5}),await _0x4443a6['sendMessage'](_0x4b8fbf,{'react':{'text':'✅','key':_0x41e6f5['key']}});else _0x19519b==='2'&&(await _0x4443a6[_0x1edf91(0x1d9)](_0x4b8fbf,{'document':{'url':_0xfffdc0},'mimetype':_0x1edf91(0x226),'fileName':_0x3eeb38[_0x1edf91(0x1e4)]+_0x1edf91(0x202),'caption':_0xfc878a},{'quoted':_0x41e6f5}),await _0x4443a6['sendMessage'](_0x4b8fbf,{'react':{'text':'✅','key':_0x41e6f5[_0x1edf91(0x1fa)]}}));}});}catch(_0x4367cf){console['log'](_0x4367cf),_0x4c1b6a(''+_0x4367cf);}}),cmd({'pattern':_0xf2316e(0x1d7),'alias':['ytmp4',_0xf2316e(0x225)],'desc':_0xf2316e(0x221),'react':'🎥','category':_0xf2316e(0x20c),'filename':__filename},async(_0x1db3b7,_0x177205,_0x579623,{from:_0x2aad33,quoted:_0x4d4696,body:_0x1edac,isCmd:_0x239026,command:_0x48c194,args:_0x167e6e,q:_0x10835a,isGroup:_0x22a76f,sender:_0x565df0,senderNumber:_0x3cd616,botNumber2:_0x30c326,botNumber:_0x494fb6,pushname:_0x2ae6a2,isMe:_0x56a4ef,isOwner:_0xb2be9c,groupMetadata:_0x467b6b,groupName:_0xfa7018,participants:_0x483e46,groupAdmins:_0x4e2c03,isBotAdmins:_0x2a311c,isAdmins:_0x5362ec,reply:_0x200b0c})=>{const _0x5891fa=_0xf2316e;try{if(!_0x10835a)return _0x200b0c(_0x5891fa(0x211));_0x10835a=convertYouTubeLink(_0x10835a);const _0x1e5bff=await yts(_0x10835a),_0x15db2c=_0x1e5bff[_0x5891fa(0x1ed)][0x0],_0x4b6e0e=_0x15db2c['url'];let _0x16a7c8='\x0a*===================*\x0a│*💜QUEEN-ISHU\x20VIDEO\x20DOWNLOADING💜*\x0a*⁠⁠⁠⁠===================*\x0a*==================*\x0a💜\x20*Title:*\x20'+_0x15db2c[_0x5891fa(0x1e4)]+_0x5891fa(0x215)+_0x15db2c['timestamp']+'\x20\x0a💜\x20*Views:*\x20'+_0x15db2c['views']+'\x20\x0a💜\x20*Uploaded\x20On:*\x20'+_0x15db2c[_0x5891fa(0x203)]+_0x5891fa(0x209)+_0x15db2c[_0x5891fa(0x1d3)]+_0x5891fa(0x1ea),_0x3451d8='\x0a*💜©\x2CREATED\x20BY\x20LAKSIDU\x20NIMSARA\x20·\x20·\x20·*\x0a';const _0x2acfd0=await _0x1db3b7[_0x5891fa(0x1d9)](_0x2aad33,{'image':{'url':_0x15db2c[_0x5891fa(0x1e3)]},'caption':_0x16a7c8}),_0x198da2=_0x2acfd0[_0x5891fa(0x1fa)]['id'];_0x1db3b7['ev']['on'](_0x5891fa(0x1f3),async _0x3521f3=>{const _0x33e3d7=_0x5891fa,_0x1f8fd1=_0x3521f3[_0x33e3d7(0x1ff)][0x0];if(!_0x1f8fd1['message'])return;const _0x3bb350=_0x1f8fd1[_0x33e3d7(0x1e0)][_0x33e3d7(0x21a)]||_0x1f8fd1['message'][_0x33e3d7(0x21c)]?.[_0x33e3d7(0x1df)],_0x52da6f=_0x1f8fd1[_0x33e3d7(0x1fa)][_0x33e3d7(0x21b)],_0x599691=_0x1f8fd1['key'][_0x33e3d7(0x1e2)]||_0x1f8fd1[_0x33e3d7(0x1fa)][_0x33e3d7(0x21b)],_0x471e68=_0x1f8fd1['message']['extendedTextMessage']&&_0x1f8fd1[_0x33e3d7(0x1e0)][_0x33e3d7(0x21c)]['contextInfo']['stanzaId']===_0x198da2;if(_0x471e68){await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'⬇️','key':_0x1f8fd1[_0x33e3d7(0x1fa)]}});if(_0x3bb350===_0x33e3d7(0x213)){const _0xd01069=await ytmp4(''+_0x4b6e0e,'360p'),_0x59e9ce=_0xd01069;await _0x1db3b7['sendMessage'](_0x52da6f,{'react':{'text':'⬆️','key':_0x1f8fd1['key']}}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'video':{'url':_0x59e9ce},'caption':_0x3451d8},{'quoted':_0x1f8fd1}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'✅','key':_0x1f8fd1[_0x33e3d7(0x1fa)]}});}else{if(_0x3bb350==='1.2'){const _0x20a825=await ytmp4(''+_0x4b6e0e,'480'),_0x9dc23f=_0x20a825;await _0x1db3b7['sendMessage'](_0x52da6f,{'react':{'text':'⬆️','key':_0x1f8fd1[_0x33e3d7(0x1fa)]}}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'video':{'url':_0x9dc23f},'caption':_0x3451d8},{'quoted':_0x1f8fd1}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'✅','key':_0x1f8fd1[_0x33e3d7(0x1fa)]}});}else{if(_0x3bb350===_0x33e3d7(0x200)){const _0x48c3fb=await ytmp4(''+_0x4b6e0e,_0x33e3d7(0x1f0)),_0x3f0122=_0x48c3fb;await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'⬆️','key':_0x1f8fd1[_0x33e3d7(0x1fa)]}}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'video':{'url':_0x3f0122},'caption':_0x3451d8},{'quoted':_0x1f8fd1}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'✅','key':_0x1f8fd1[_0x33e3d7(0x1fa)]}});}else{if(_0x3bb350===_0x33e3d7(0x1e6)){const _0x34e306=await ytmp4(''+_0x4b6e0e,_0x33e3d7(0x1fb)),_0x30562b=_0x34e306;await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'⬆️','key':_0x1f8fd1[_0x33e3d7(0x1fa)]}}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'video':{'url':_0x30562b},'caption':_0x3451d8},{'quoted':_0x1f8fd1}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'✅','key':_0x1f8fd1['key']}});}else{if(_0x3bb350===_0x33e3d7(0x1f7)){const _0x4f1328=await ytmp4(''+_0x4b6e0e,_0x33e3d7(0x201)),_0x17e3be=_0x4f1328;await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'⬆️','key':_0x1f8fd1[_0x33e3d7(0x1fa)]}}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'document':{'url':_0x17e3be},'mimetype':_0x33e3d7(0x1d6),'fileName':_0x15db2c[_0x33e3d7(0x1e4)]+_0x33e3d7(0x1dc),'caption':_0x3451d8},{'quoted':_0x1f8fd1}),await _0x1db3b7['sendMessage'](_0x52da6f,{'react':{'text':'✅','key':_0x1f8fd1['key']}});}else{if(_0x3bb350===_0x33e3d7(0x1fd)){const _0x3b3d3d=await ytmp4(''+_0x4b6e0e,_0x33e3d7(0x204)),_0x2256ea=_0x3b3d3d;await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'⬆️','key':_0x1f8fd1[_0x33e3d7(0x1fa)]}}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'document':{'url':_0x2256ea},'mimetype':_0x33e3d7(0x1d6),'fileName':_0x15db2c[_0x33e3d7(0x1e4)]+'.mp4','caption':_0x3451d8},{'quoted':_0x1f8fd1}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'✅','key':_0x1f8fd1[_0x33e3d7(0x1fa)]}});}else{if(_0x3bb350===_0x33e3d7(0x1f9)){const _0x7a7cd4=await ytmp4(''+_0x4b6e0e,'720'),_0x3cacb7=_0x7a7cd4;await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'⬆️','key':_0x1f8fd1[_0x33e3d7(0x1fa)]}}),await _0x1db3b7['sendMessage'](_0x52da6f,{'document':{'url':_0x3cacb7},'mimetype':_0x33e3d7(0x1d6),'fileName':_0x15db2c['title']+_0x33e3d7(0x1dc),'caption':_0x3451d8},{'quoted':_0x1f8fd1}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'✅','key':_0x1f8fd1['key']}});}else{if(_0x3bb350==='2.4'){const _0x22b3a3=await ytmp4(''+_0x4b6e0e,_0x33e3d7(0x1fb)),_0x51574d=_0x22b3a3;await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'⬆️','key':_0x1f8fd1[_0x33e3d7(0x1fa)]}}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'document':{'url':_0x51574d},'mimetype':_0x33e3d7(0x1d6),'fileName':_0x15db2c[_0x33e3d7(0x1e4)]+_0x33e3d7(0x1dc),'caption':_0x3451d8},{'quoted':_0x1f8fd1}),await _0x1db3b7[_0x33e3d7(0x1d9)](_0x52da6f,{'react':{'text':'✅','key':_0x1f8fd1['key']}});}}}}}}}}}});}catch(_0x6f63f5){console[_0x5891fa(0x1f1)](_0x6f63f5),_0x200b0c(''+_0x6f63f5);}});
