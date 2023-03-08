import fs from 'fs'
import randomColor from 'randomcolor'
import path from 'path'
import { createCanvas, loadImage, registerFont } from'canvas'
const width = 250
const height = 250
registerFont(path.join(process.env.ROOT_DIR || process.cwd(),'/config/name_to_avatar/iransansx_medium.ttf'), { family: 'iransansx' })

class Avatar{
    async make(body){
        const canvas = createCanvas(width, height)
        const context = canvas.getContext('2d')
        context.arc(width/2, height/2, (width/2)-5, 0, 2 * Math.PI);
        context.fillStyle = '#fff'
        context.fill()
        context.lineWidth = 5;
        var color = randomColor()
        context.strokeStyle = color;
        context.stroke();
        context.font = 'bold 60pt iransansx'
        context.textBaseline = 'top'
        context.textAlign = 'center'
        const text = body.text
        context.fillStyle = color
        context.fillText(text, width/2, (height/2) - 62.5)
        let img = await loadImage(path.join(process.env.ROOT_DIR || process.cwd(),'/config/name_to_avatar/template.png'))
        context.drawImage(img, 250, 250, 250, 250)
        let fileBuffer = canvas.toBuffer('image/png')
        fs.writeFileSync(path.join(process.env.ROOT_DIR || process.cwd(),`/public/storage/avatars/${body.file}.png`), fileBuffer)
    }
}

module.exports = Avatar