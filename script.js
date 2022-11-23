const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numberOfParticles = 20;
let particlesArray = [];
const gambar = new Image();
gambar.src = 'gambar1.png';

class Particle {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 100;
        this.speed = Math.random() * 2 + 0.5;
        this.angle = Math.random() * 120;
        this.spin = Math.random() < 0.5 ? -1 : 1;

        this.frameX = Math.floor(Math.random() * 3);
        this.frameY = Math.floor(Math.random() * 3);
        this.spriteSize = 900/3;

    }
    draw(){
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.drawImage(gambar, 0, 0, this.spriteSize, this.spriteSize, 0 - this.size/2, 0 - this.size/2, this.size, this.size);
        ctx.restore();
        
    }
    update(){
        this.angle += -1;
        if(this.y - this.size > canvas.height){
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
            this.size = Math.random() * 70 + 50;
            this.speed = Math.random() * 2 + 0.5;
        }
        this.y += this.speed;
    }
}
// const particle1 = new Particle();
function init(){
    for(let i = 0; i < numberOfParticles; i++){
        particlesArray.push(new Particle());
    }
}
init();

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].draw();
        particlesArray[i].update();
    }
    
    requestAnimationFrame(animate);

}
animate();