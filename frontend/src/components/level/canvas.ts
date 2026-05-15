import playerImage from "../../assets/player3.png"
import flagwinImage from "../../assets/flagwin.png"
import flagfullImage from "../../assets/flagfull.png"

class User {
    img: string
    user: any
    width: number
    height: number
    x: number
    y: number

    constructor(public canvasWidth: number, public canvasHeight: number) {
        this.x = canvasWidth - 200
        this.y = canvasHeight - 200
        this.img = playerImage
        this.width = 86
        this.height = 156
        this.user = new Image()
        this.user.src = this.img
    }

    public draw(ctx: any) {
        ctx.drawImage(this.user, this.x, this.y, this.width, this.height)  
    }

    public clear(ctx: any) {
        ctx.clearRect(this.x, this.y, this.x + this.width, this.y + this.height);
    }

    public moveController(level: number) {
        switch (level) {
            case 1: this.moveFirst(); break;
            case 2: this.moveSecond(); break;
            case 3: this.moveThird(); break;
            case 4: this.moveFourth(); break;
            default: this.moveNull(); break;
        }
    }

    public moveNull() {
        this.x -= 190
        this.y -= 100
    }
    public moveFirst() {
        this.x -= 40
        this.y -= 120
    }
    public moveSecond() {
        this.y -= 120
        this.x += 220
    }
    public moveThird() {
        this.y -= 240
        this.x += 50
    }
    public moveFourth() {
        this.x -= 100
        this.y -= 30
        this.width = 48
        this.height = 100
    }
}

const preloadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.src = src
    })
}

let cachedImages: {
    flagwin?: HTMLImageElement
    flagfull?: HTMLImageElement
    player?: HTMLImageElement
} = {}

export const preloadAssets = async () => {
    const [flagwin, flagfull, player] = await Promise.all([
        preloadImage(flagwinImage),
        preloadImage(flagfullImage),
        preloadImage(playerImage),
    ])
    cachedImages = { flagwin, flagfull, player }
}

export const createCanvas = (canvas: any, level: number) => {
    let ctx = canvas.current.getContext("2d")
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    
    let canvasWidth = canvas.current.getBoundingClientRect().width
    let canvasHeight = canvas.current.getBoundingClientRect().height

    let arrPositions = [
        { x: canvasWidth - 250, y: canvasHeight - 320 }, 
        { x: canvasWidth - 400, y: canvasHeight - 450 }, 
        { x: canvasWidth - 80, y: canvasHeight - 500 }, 
        { x: canvasWidth - 220, y: canvasHeight - 730 }, 
        { x: canvasWidth - 370, y: canvasHeight - 770 }, 
    ]

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);


    let user = new User(canvasWidth, canvasHeight)
    for (let i = 0; i < level; i++) {
        user.moveController(i)
    }

    for (let i = 0; i < level; i++) {
        const flag = (i + 1 == level) ? cachedImages.flagfull : cachedImages.flagwin
        if (flag) ctx.drawImage(flag, arrPositions[i].x, arrPositions[i].y, 86, 86)
    }

    user.draw(ctx)
        
    let framesCount: number = 0
    framesCount++;
}
