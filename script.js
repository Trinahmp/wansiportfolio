const typingElement = document.querySelector(".typing-text");

const text = "Hi, I'm Trinah — An IT Student 💻";
let index = 0;

function typeText(){
    if(index < text.length){
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 70);
    }
}

typeText();

const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
const floatingTextContainer = document.getElementById('floating-text');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let particleCount = window.innerWidth < 768 ? 50 : 100;
const particles = [];
for(let i=0;i<particleCount;i++){
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*3+1,
        dx: (Math.random()-0.5)*1,
        dy: (Math.random()-0.5)*1
    });
}

const words = ["HTML","CSS","JavaScript","PORTFOLIO", "Information Technology", "BSIT 1C", "Trinah","WS101"];
for(let i=0;i<15;i++){
    const span = document.createElement('span');
    span.className = 'floating-word';
    span.textContent = words[Math.floor(Math.random()*words.length)];
    span.style.left = Math.random()*100 + 'vw';
    span.style.fontSize = (Math.random()*1.5 + 1) + 'rem';
    span.style.animationDuration = (Math.random()*15 + 10) + 's';
    span.style.opacity = Math.random()*0.3 + 0.2;
    floatingTextContainer.appendChild(span);
}

function animate() {
    const gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    gradient.addColorStop(0,"#c52587");
    gradient.addColorStop(0.5,"#da76da");
    gradient.addColorStop(1,"#49204f");
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        p.x += p.dx;
        p.y += p.dy;
        if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();

