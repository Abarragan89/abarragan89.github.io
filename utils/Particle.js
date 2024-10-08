// Particle constructor
class Particle {
    constructor(ctx, xpos, ypos) {
        this.x = xpos;
        this.y = ypos;
        this.ctx = ctx;
        this.size = Math.random() * 25 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'rgb(0, 255, 76)'
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.lineWidth = 1
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        this.ctx.fill()
    }
}

export default Particle