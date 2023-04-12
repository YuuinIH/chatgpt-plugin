import fs from 'fs'

const _path = process.cwd()
export async function saveChatMessagetoLocalLog(prompt, chatMessage) {
    const date = new Date()
    let path = `${_path}/logs/chatgpt.${date.getFullYear()}-${date.getMonth().toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')}.log`
    if (!fs.existsSync(_path + '/logs')) {
        fs.mkdirSync(_path + '/logs')
    }
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '')
    }
    let LogFile = path
    const writeMessage ={
        prompt: prompt,
        chatMessage: chatMessage
    }
    logger.mark(writeMessage)
    fs.writeFileSync(LogFile,JSON.stringify(writeMessage)+'\n',{flag:'a'})
}
