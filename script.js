// ===================================
// Console Easter Eggs
// ===================================
console.log('%c💕 Sonali, will you be my girlfriend?', 'font-size: 24px; color: #ff6b9d; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%cYou found the secret! 🎉', 'font-size: 16px; color: #4ade80;');
console.log('%cThis website was built with feelings, code, and a lot of hope. ❤️', 'color: #82aaff;');
console.log('%c// Every line written thinking of you', 'color: #6b7280; font-style: italic;');
console.log('%cconst feelings = Infinity; // Because I can\'t measure what I feel for you', 'color: #c792ea;');

// ===================================
// Global Variables
// ===================================
let currentSection = 1;
const totalSections = 5;

// ===================================
// Particle System
// ===================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth > 768 ? 80 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = Math.random() * 15 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Random colors with glow
        const colors = [
            '#ff6b9d', '#c792ea', '#82aaff', '#4ade80', 
            '#fbbf24', '#f472b6', '#a78bfa', '#60a5fa'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 ${size * 3}px ${color}`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add special sparkle particles
    createSparkles();
}

function createSparkles() {
    const particlesContainer = document.getElementById('particles');
    const sparkleCount = 20;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'particle sparkle';
        sparkle.textContent = '✨';
        sparkle.style.fontSize = `${Math.random() * 20 + 10}px`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 25}s`;
        sparkle.style.animationDuration = `${Math.random() * 20 + 15}s`;
        sparkle.style.opacity = '0';
        
        particlesContainer.appendChild(sparkle);
    }
}

// ===================================
// Terminal Typing Animation
// ===================================
async function typeTerminalCommand() {
    const commandElement = document.getElementById('terminalCommand');
    const outputElement = document.getElementById('terminalOutput');
    const command = 'node askHerOut.js';
    
    // Type command
    for (let i = 0; i < command.length; i++) {
        commandElement.textContent = command.substring(0, i + 1);
        await sleep(100);
    }
    
    await sleep(500);
    
    // Show output
    const outputs = [
        { text: '⏳ Initializing courage...', className: 'loading', delay: 300 },
        { text: '✓ Calculating compatibility: 100%', className: 'success', delay: 500 },
        { text: '✓ Loading feelings: Complete', className: 'success', delay: 500 },
        { text: '✓ Checking chemistry: Perfect match', className: 'success', delay: 500 },
        { text: '✓ Preparing to ask: Ready', className: 'success', delay: 500 },
        { text: '', className: '', delay: 300 },
        { text: '💕 Time to ask the question...', className: 'success', delay: 800 },
    ];
    
    for (const output of outputs) {
        const line = document.createElement('div');
        line.className = output.className;
        line.textContent = output.text;
        outputElement.appendChild(line);
        await sleep(output.delay);
    }
    
    // Show continue hint
    document.getElementById('continueHint').style.opacity = '1';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ===================================
// Scroll & Section Management
// ===================================
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            section.classList.add('active');
            
            // Trigger animations for why section
            if (section.id === 'section3') {
                const reasonCards = section.querySelectorAll('.reason-card');
                reasonCards.forEach(card => {
                    if (!card.classList.contains('visible')) {
                        card.classList.add('visible');
                    }
                });
            }
        }
    });
}

// ===================================
// Music Toggle
// ===================================
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let musicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (musicPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        musicPlaying = false;
    } else {
        bgMusic.play().catch(e => {
            console.log('Music playback requires user interaction');
        });
        musicToggle.classList.add('playing');
        musicPlaying = true;
    }
});

// ===================================
// Proposal Buttons
// ===================================
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
let noClickCount = 0;

btnYes.addEventListener('click', () => {
    // Hide proposal section
    document.getElementById('section4').style.display = 'none';
    
    // Show celebration section
    const celebrationSection = document.getElementById('section5');
    celebrationSection.classList.remove('hidden');
    celebrationSection.classList.add('active');
    
    // Start confetti
    startConfetti();
    
    // Scroll to celebration
    celebrationSection.scrollIntoView({ behavior: 'smooth' });
    
    // Console message
    console.log('%c🎉 SHE SAID YES! 🎉', 'font-size: 30px; color: #4ade80; font-weight: bold;');
    console.log('%cconst happiness = Infinity; // She\'s my girlfriend now!', 'color: #ff6b9d;');
});

btnNo.addEventListener('click', (e) => {
    noClickCount++;
    
    const messages = [
        "Are you sure? 🥺",
        "Please give us a chance! 💕",
        "I promise to make you smile every day! 😊",
        "We'd be so good together! 💫",
        "Just one chance? 🙏"
    ];
    
    if (noClickCount <= messages.length) {
        btnNo.textContent = messages[noClickCount - 1];
        
        // Make the button move away on hover
        btnNo.addEventListener('mouseover', moveButton);
    }
    
    // After many attempts, change it to Yes
    if (noClickCount > messages.length) {
        btnNo.textContent = "Okay... Yes! 💕";
        btnNo.removeEventListener('mouseover', moveButton);
        btnNo.addEventListener('click', () => btnYes.click());
    }
});

function moveButton(e) {
    const btn = e.target;
    const maxX = window.innerWidth - btn.offsetWidth - 100;
    const maxY = window.innerHeight - btn.offsetHeight - 100;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    btn.style.position = 'fixed';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
    btn.style.transition = 'all 0.3s ease';
}

// ===================================
// Confetti Animation
// ===================================
function startConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const confettiCount = 250;
    const colors = [
        '#ff6b9d', '#c792ea', '#82aaff', '#4ade80', '#fbbf24',
        '#f472b6', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24'
    ];
    
    const shapes = ['square', 'circle', 'triangle'];
    
    class Confetti {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.w = Math.random() * 15 + 5;
            this.h = Math.random() * 10 + 5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.shape = shapes[Math.floor(Math.random() * shapes.length)];
            this.speedY = Math.random() * 4 + 2;
            this.speedX = Math.random() * 3 - 1.5;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 15 - 7.5;
            this.opacity = Math.random() * 0.5 + 0.5;
        }
        
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            
            // Gravity effect
            this.speedY += 0.1;
            
            if (this.y > canvas.height) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
                this.speedY = Math.random() * 4 + 2;
            }
            
            // Bounce off sides
            if (this.x < 0 || this.x > canvas.width) {
                this.speedX *= -0.8;
            }
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            
            if (this.shape === 'square') {
                ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
            } else if (this.shape === 'circle') {
                ctx.beginPath();
                ctx.arc(0, 0, this.w / 2, 0, Math.PI * 2);
                ctx.fill();
            } else if (this.shape === 'triangle') {
                ctx.beginPath();
                ctx.moveTo(0, -this.h / 2);
                ctx.lineTo(this.w / 2, this.h / 2);
                ctx.lineTo(-this.w / 2, this.h / 2);
                ctx.closePath();
                ctx.fill();
            }
            
            ctx.restore();
        }
    }
    
    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push(new Confetti());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach(piece => {
            piece.update();
            piece.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Add firework effect
    createFireworks();
}

function createFireworks() {
    const fireworkCount = 5;
    const colors = ['#ff6b9d', '#c792ea', '#82aaff', '#4ade80', '#fbbf24'];
    
    for (let i = 0; i < fireworkCount; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.5;
            
            for (let j = 0; j < 30; j++) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.width = '5px';
                particle.style.height = '5px';
                particle.style.borderRadius = '50%';
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '9999';
                
                const angle = (Math.PI * 2 * j) / 30;
                const velocity = Math.random() * 5 + 3;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                document.body.appendChild(particle);
                
                let posX = x;
                let posY = y;
                let opacity = 1;
                
                const animateParticle = () => {
                    posX += vx;
                    posY += vy;
                    opacity -= 0.02;
                    
                    particle.style.left = posX + 'px';
                    particle.style.top = posY + 'px';
                    particle.style.opacity = opacity;
                    
                    if (opacity > 0) {
                        requestAnimationFrame(animateParticle);
                    } else {
                        particle.remove();
                    }
                };
                
                animateParticle();
            }
        }, i * 800);
    }
}

// ===================================
// Keyboard Navigation
// ===================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
        const nextSection = document.getElementById(`section${Math.min(currentSection + 1, totalSections)}`);
        if (nextSection && !nextSection.classList.contains('hidden')) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
            currentSection = Math.min(currentSection + 1, totalSections);
        }
    }
    
    if (e.key === 'ArrowUp') {
        const prevSection = document.getElementById(`section${Math.max(currentSection - 1, 1)}`);
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
            currentSection = Math.max(currentSection - 1, 1);
        }
    }
});

// ===================================
// Window Resize Handler
// ===================================
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confettiCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// ===================================
// Additional Easter Eggs
// ===================================
// Secret key combination: Ctrl + Shift + L for a special message
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'L') {
        console.log('%c❤️ SECRET MESSAGE ❤️', 'font-size: 20px; color: #ff6b9d; font-weight: bold;');
        console.log('%cEvery single line of code in this website was written hoping you\'d say yes.', 'color: #4ade80;');
        console.log('%cYou make my world better, brighter, and infinitely more exciting.', 'color: #82aaff;');
        console.log('%cLet\'s write our story together. 💑', 'color: #c792ea;');
        console.log('%cconst us = async () => { while(true) { await createMemories(); } };', 'color: #fbbf24;');
    }
});

// Heart emoji on mouse click with trail
let cursorTrail = [];
document.addEventListener('click', (e) => {
    // Main heart
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'fixed';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.fontSize = '30px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'float-heart 2s ease-out forwards';
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
    
    // Create burst of mini hearts
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const miniHeart = document.createElement('div');
            miniHeart.textContent = ['💕', '💖', '💗', '💓', '💝'][i];
            miniHeart.style.position = 'fixed';
            miniHeart.style.left = e.clientX + (Math.random() - 0.5) * 100 + 'px';
            miniHeart.style.top = e.clientY + (Math.random() - 0.5) * 100 + 'px';
            miniHeart.style.fontSize = '20px';
            miniHeart.style.pointerEvents = 'none';
            miniHeart.style.zIndex = '9999';
            miniHeart.style.animation = 'float-heart 1.5s ease-out forwards';
            
            document.body.appendChild(miniHeart);
            setTimeout(() => miniHeart.remove(), 1500);
        }, i * 50);
    }
});

// Sparkle trail on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) { // Only create occasionally
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.fontSize = '15px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9998';
        sparkle.style.animation = 'sparkle-fade 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
});

// Add heart float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float-heart {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translateY(-150px) scale(0.3) rotate(360deg);
        }
    }
    
    @keyframes sparkle-fade {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Initialize Everything
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Generate line numbers for code editor
    generateLineNumbers();
    
    // Create particles
    createParticles();
    
    // Start terminal animation
    typeTerminalCommand();
    
    // Update clock in terminal
    updateClock();
    setInterval(updateClock, 1000);
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll check
    handleScroll();
    
    // Update progress bar on scroll
    window.addEventListener('scroll', updateProgress);
    
    // Log ready message
    console.log('%c✨ Website loaded successfully!', 'color: #4ade80; font-weight: bold;');
    console.log('%cLook around, there are Easter eggs hidden everywhere... 🥚', 'color: #82aaff;');
});

function generateLineNumbers() {
    const lineNumbersContainer = document.getElementById('lineNumbers');
    if (!lineNumbersContainer) return;
    
    for (let i = 1; i <= 43; i++) {
        const span = document.createElement('span');
        span.textContent = i;
        lineNumbersContainer.appendChild(span);
    }
}

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
    const clockElement = document.getElementById('currentTime');
    if (clockElement) {
        clockElement.textContent = time;
    }
}

function updateProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
    
    // Update section indicator
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight / 2;
    
    let currentSection = 1;
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = index + 1;
        }
    });
    
    const indicator = document.getElementById('sectionIndicator');
    if (indicator) {
        indicator.textContent = `${currentSection} / 5`;
    }
    
    // Hide scroll indicator after first scroll
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (scrollTop > 100 && scrollIndicator) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
    } else if (scrollIndicator) {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'none';
    }
}

// ===================================
// Service Worker Registration (optional)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker not available, that's okay
        });
    });
}
