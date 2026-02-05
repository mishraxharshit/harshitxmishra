// ========================================
// MATRIX RAIN EFFECT
// ========================================
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix characters
const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const chars = matrixChars.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;

// Array of drops
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height / fontSize;
}

// Draw matrix rain
function drawMatrix() {
    // Fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Green text
    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';
    
    // Draw characters
    for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        // Increment drop position
        drops[i]++;
    }
}

// Run matrix effect
setInterval(drawMatrix, 50);

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// COUNTER ANIMATION
// ========================================
function animateCounter(element, start, end, duration) {
    let startTime = null;
    
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.textContent = end;
        }
    }
    
    requestAnimationFrame(animate);
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.dataset.count);
            animateCounter(entry.target, 0, target, 2000);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

// Observe all stat values
document.querySelectorAll('.stat-value').forEach(el => {
    counterObserver.observe(el);
});

// ========================================
// SKILL BAR ANIMATION
// ========================================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.skill-fill');
            fills.forEach(fill => {
                const width = fill.style.width;
                fill.style.width = '0';
                setTimeout(() => {
                    fill.style.width = width;
                }, 100);
            });
        }
    });
}, { threshold: 0.3 });

// Observe skills section
const skillsViz = document.querySelector('.skills-viz');
if (skillsViz) {
    skillObserver.observe(skillsViz);
}

// ========================================
// TYPING EFFECT FOR TERMINAL
// ========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ========================================
// HOVER EFFECTS
// ========================================
// Add glow effect on hover for links
document.querySelectorAll('.paper-link, .project-links .link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 10px rgba(0, 255, 0, 0.8)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.textShadow = 'none';
    });
});

// ========================================
// CONSOLE EASTER EGG
// ========================================
console.log('%c> Initializing system...', 'color: #00ff00; font-family: monospace; font-size: 14px;');
console.log('%c> Loading Harshit Mishra portfolio', 'color: #00ff00; font-family: monospace; font-size: 14px;');
console.log('%c> Matrix protocol: ACTIVE', 'color: #00ff00; font-family: monospace; font-size: 14px;');
console.log('%c> Knowledge base: ONLINE', 'color: #00ff00; font-family: monospace; font-size: 14px;');
console.log('%c> System ready.', 'color: #00ff00; font-family: monospace; font-size: 14px; font-weight: bold;');
console.log('%c\n$ whoami\nharshit.mishra - Technology Researcher & CTO', 'color: #ffffff; font-family: monospace; font-size: 12px;');
console.log('%c\n$ cat philosophy.txt\nFor the people, by the people.\nKnowledge should be free, accessible, and actionable.', 'color: #a0a0a0; font-family: monospace; font-size: 12px;');

// ========================================
// KEYBOARD SHORTCUTS
// ========================================
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus on first nav link (simulating quick navigation)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const firstNavLink = document.querySelector('.nav-link');
        if (firstNavLink) {
            firstNavLink.focus();
        }
    }
    
    // Konami code easter egg
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    if (!window.konamiProgress) window.konamiProgress = 0;
    
    if (e.key === konamiCode[window.konamiProgress]) {
        window.konamiProgress++;
        if (window.konamiProgress === konamiCode.length) {
            activateMatrixMode();
            window.konamiProgress = 0;
        }
    } else {
        window.konamiProgress = 0;
    }
});

function activateMatrixMode() {
    // Temporary intense matrix effect
    console.log('%c> MATRIX MODE ACTIVATED', 'color: #00ff00; font-family: monospace; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #00ff00;');
    
    const originalOpacity = canvas.style.opacity;
    canvas.style.opacity = '0.5';
    
    setTimeout(() => {
        canvas.style.opacity = originalOpacity;
        console.log('%c> Normal mode restored', 'color: #00ff00; font-family: monospace; font-size: 12px;');
    }, 5000);
}

// ========================================
// SCROLL PROGRESS INDICATOR
// ========================================
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // Create progress bar if doesn't exist
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #00ff00, rgba(0, 255, 0, 0.5));
            z-index: 1000;
            transition: width 0.1s ease;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ========================================
// FADE IN ON SCROLL
// ========================================
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Add fade effect to sections
document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(section);
});

// ========================================
// COPY CODE BLOCKS
// ========================================
document.querySelectorAll('pre code').forEach(block => {
    // Add copy button
    const button = document.createElement('button');
    button.textContent = 'Copy';
    button.style.cssText = `
        position: absolute;
        top: 8px;
        right: 8px;
        background: rgba(0, 255, 0, 0.1);
        border: 1px solid #00ff00;
        color: #00ff00;
        padding: 4px 8px;
        font-family: monospace;
        font-size: 0.75rem;
        cursor: pointer;
        border-radius: 3px;
    `;
    
    const wrapper = block.parentElement;
    wrapper.style.position = 'relative';
    wrapper.appendChild(button);
    
    button.addEventListener('click', () => {
        navigator.clipboard.writeText(block.textContent);
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
});

// ========================================
// PERFORMANCE MONITORING
// ========================================
if (window.performance) {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`%c> Page loaded in ${loadTime}ms`, 'color: #00ff00; font-family: monospace;');
    });
}

// ========================================
// ACCESSIBILITY: SKIP TO CONTENT
// ========================================
const skipLink = document.createElement('a');
skipLink.href = '#about';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -100px;
    left: 0;
    background: #00ff00;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
    font-family: monospace;
    z-index: 10000;
    transition: top 0.3s;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-100px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// ========================================
// INIT MESSAGE
// ========================================
console.log('%c\n> System initialized successfully', 'color: #00ff00; font-family: monospace; font-size: 14px; font-weight: bold;');
console.log('%c> Type "help" for available commands (just kidding, this is a portfolio 😄)', 'color: #a0a0a0; font-family: monospace; font-size: 12px;');

// ========================================
// KNOWLEDGE SYNC (NASA & QUOTES)
// ========================================

async function syncScientificKnowledge() {
    const nasaContent = document.getElementById('nasa-content');
    const nasaHeader = document.querySelector('#nasa-container .infobox-header');

    try {
        // NASA API Call
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const data = await response.json();

        if(data.media_type === 'image') {
            nasaHeader.innerText = `Cosmic Discovery: ${data.title}`;
            nasaContent.innerHTML = `
                <img src="${data.url}" alt="NASA APOD" style="width: 100%; height: auto; border-radius: 2px; margin-bottom: 10px; filter: grayscale(50%) contrast(120%);">
                <p style="font-size: 0.9rem; line-height: 1.4; color: var(--color-text-secondary);">${data.explanation.substring(0, 250)}...</p>
                <small style="color: var(--color-primary); font-family: var(--font-mono);">Source: NASA / JPL</small>
            `;
        }
    } catch (error) {
        console.log("Science feed offline");
        nasaContent.innerHTML = "<p>Data link interrupted. Checking local archives...</p>";
    }
}

// Existing window.onload logic ke sath merge karein ya alag se likhein
window.addEventListener('load', () => {
    syncScientificKnowledge();
});

// Function to fetch real science & engineering data
async function updateLiveTicker() {
    const ticker = document.getElementById('ticker-content');
    let feedItems = [];

    try {
        // 1. [ENGINEERING] SpaceX Latest Launch Data
        const spaceXRes = await fetch('https://api.spacexdata.com/v4/launches/latest');
        const spaceXData = await spaceXRes.json();
        feedItems.push(`[ENGINEERING] SpaceX ${spaceXData.name} Mission: ${spaceXData.success ? 'Success' : 'Active'}`);

        // 2. [SCIENCE/PHYSICS] Astronomy/Physics Insight (Using NASA-like source)
        const physicsInsights = [
            "LIGO detects new gravitational wave event from binary black hole merger",
            "Quantum entanglement maintained over 1200km via satellite link",
            "Thermodynamics of computation: Reaching the Landauer limit",
            "CERN updates: New measurements of the Higgs boson mass"
        ];
        feedItems.push(`[PHYSICS] ${physicsInsights[Math.floor(Math.random() * physicsInsights.length)]}`);

        // 3. [BRAIN/PSYCHOLOGY] Neural Research Feed
        const brainFacts = [
            "Neural Plasticity: Synaptic pruning accelerates during REM sleep",
            "Dopamine baseline levels correlate with long-term cognitive persistence",
            "Prefrontal cortex activity mapped during complex decision making",
            "New study on the Neurobiology of Love and Oxytocin pathways"
        ];
        feedItems.push(`[NEURO/PSY] ${brainFacts[Math.floor(Math.random() * brainFacts.length)]}`);

        // 4. [TECHNOLOGY/COMPUTING] 
        const techFeed = [
            "Large Language Models: Scaling laws vs. Algorithmic efficiency",
            "New RISC-V architecture breakthrough in power consumption",
            "Neuromorphic computing chips mimic human synaptic density"
        ];
        feedItems.push(`[COMPUTING] ${techFeed[Math.floor(Math.random() * techFeed.length)]}`);

        // Combine all and Inject into Ticker
        ticker.innerHTML = feedItems.join(' &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp; ');
        
    } catch (err) {
        ticker.innerHTML = "[SYSTEM] Researching the intersection of Physics, Brain Science, and Computing...";
    }
}

// Har page par dikhne ke liye isse window load par call karein
window.addEventListener('load', () => {
    updateLiveTicker();
    // Refresh every 10 minutes to keep it live
    setInterval(updateLiveTicker, 600000); 
});

function drawBrainWave() {
    const canvas = document.getElementById('brain-wave-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let offset = 0;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 1;
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x++) {
            // Complex wave: Physics meets Biology (Sine wave interference)
            const y = canvas.height / 2 + 
                      Math.sin(x * 0.05 + offset) * 10 + 
                      Math.sin(x * 0.1 + offset) * 5;
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        offset += 0.1;
        requestAnimationFrame(animate);
    }
    animate();
}
window.addEventListener('load', drawBrainWave);

let audioContext;
let masterGain;
let oscillators = [];
let isResonating = false;

// 3D Visualizer Logic
const vCanvas = document.getElementById('visualizer-3d');
const vCtx = vCanvas.getContext('2d');

function init3DVisualizer() {
    vCanvas.width = vCanvas.parentElement.offsetWidth;
    vCanvas.height = 300;
    
    let angle = 0;
    function animate() {
        if (!isResonating) {
            vCtx.clearRect(0, 0, vCanvas.width, vCanvas.height);
            requestAnimationFrame(animate);
            return;
        }

        vCtx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        vCtx.fillRect(0, 0, vCanvas.width, vCanvas.height);
        
        const centerX = vCanvas.width / 2;
        const centerY = vCanvas.height / 2;
        
        vCtx.beginPath();
        vCtx.strokeStyle = '#00ff00';
        vCtx.lineWidth = 2;

        for (let i = 0; i < 100; i++) {
            // Physics: Lissajous Curve / Sine Interference
            const x = centerX + Math.sin(angle + i * 0.1) * (i * 1.5);
            const y = centerY + Math.cos(angle * 0.5 + i * 0.1) * (i * 0.8);
            vCtx.lineTo(x, y);
        }
        vCtx.stroke();
        angle += 0.05;
        requestAnimationFrame(animate);
    }
    animate();
}

function toggleResonance() {
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const btn = document.getElementById('resonance-btn');
    const status = document.getElementById('sync-status');
    const mode = document.getElementById('audio-mode').value;

    if (isResonating) {
        oscillators.forEach(o => o.stop());
        oscillators = [];
        isResonating = false;
        btn.innerText = "INITIATE SYNC";
        status.innerText = "COGNITIVE LOAD: 0%";
        document.getElementById('frequency-label').innerText = "STATE: IDLE";
    } else {
        isResonating = true;
        btn.innerText = "TERMINATE SYNC";
        
        // Create Binaural Beats (Two slightly different frequencies)
        // Physics of Sound: Interference creates a 'beat' that the brain syncs to
        const freqs = { alpha: 10, beta: 20, theta: 6, gamma: 40 };
        const baseFreq = 200;
        const offset = freqs[mode];

        createOscillator(baseFreq, -1); // Left ear
        createOscillator(baseFreq + offset, 1); // Right ear
        
        status.innerText = `COGNITIVE LOAD: ACTIVE (${mode.toUpperCase()})`;
        document.getElementById('frequency-label').innerText = `STATE: RESONATING @ ${offset}Hz`;
    }
}

function createOscillator(freq, panValue) {
    const osc = audioContext.createOscillator();
    const panner = audioContext.createStereoPanner();
    const gain = audioContext.createGain();

    osc.frequency.setValueAtTime(freq, audioContext.currentTime);
    panner.pan.setValueAtTime(panValue, audioContext.currentTime);
    gain.gain.setValueAtTime(0.05, audioContext.currentTime); // Low volume for focus

    osc.connect(panner).connect(gain).connect(audioContext.destination);
    osc.start();
    oscillators.push(osc);
}

window.addEventListener('load', init3DVisualizer);

let singAudio, singOsc, singGain;
let isIgnited = false;

function igniteSingularity() {
    if (!singAudio) singAudio = new (window.AudioContext || window.webkitAudioContext)();
    const btn = document.getElementById('ignite-btn');
    
    if (isIgnited) {
        singOsc.stop();
        isIgnited = false;
        btn.innerText = "CONNECT NEURAL LINK";
        return;
    }

    // Logic: Research-proven 40Hz Gamma frequency for peak concentration
    singOsc = singAudio.createOscillator();
    singGain = singAudio.createGain();
    
    // We create a "Rich" instrumental feel by using a Sawtooth wave filtered heavily
    singOsc.type = 'sawtooth'; 
    singOsc.frequency.setValueAtTime(40, singAudio.currentTime); 
    
    const filter = singAudio.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 400; // Removes the harshness, leaves a deep "OM" hum

    singGain.gain.setValueAtTime(0, singAudio.currentTime);
    singGain.gain.linearRampToValueAtTime(0.1, singAudio.currentTime + 2); // Slow fade-in

    singOsc.connect(filter).connect(singGain).connect(singAudio.destination);
    singOsc.start();
    
    isIgnited = true;
    btn.innerText = "LINK ESTABLISHED";
    document.getElementById('sync-val').innerText = "PEAK COGNITION";
    document.getElementById('freq-val').innerText = "40Hz GAMMA";
}

// 3D Particle Field Physics
const sCanvas = document.getElementById('singularity-canvas');
const sCtx = sCanvas.getContext('2d');
let particles = [];

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * sCanvas.width;
        this.y = Math.random() * sCanvas.height;
        this.z = Math.random() * sCanvas.width; // Depth
        this.vz = -1 - Math.random() * 2;
    }
    update() {
        this.z += this.vz;
        if (this.z < 1) this.reset();
    }
    draw() {
        // Perspective Projection: 3D to 2D
        let scale = 300 / this.z;
        let x2d = (this.x - sCanvas.width/2) * scale + sCanvas.width/2;
        let y2d = (this.y - sCanvas.height/2) * scale + sCanvas.height/2;
        
        let r = scale * 1.5;
        sCtx.fillStyle = `rgba(0, 255, 0, ${scale/2})`;
        sCtx.beginPath();
        sCtx.arc(x2d, y2d, r, 0, Math.PI * 2);
        sCtx.fill();
    }
}

function initSingularity() {
    sCanvas.width = sCanvas.parentElement.offsetWidth;
    sCanvas.height = 500;
    for(let i=0; i<400; i++) particles.push(new Particle());
    
    function animate() {
        sCtx.fillStyle = '#000';
        sCtx.fillRect(0, 0, sCanvas.width, sCanvas.height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}
window.addEventListener('load', initSingularity);
const inputField = document.getElementById('terminal-input');
const outputArea = document.getElementById('output-area');

const scienceDatabase = {
    "gravity": "Output: Curvature of spacetime. In psychology: The weight of responsibilities that ground us.",
    "love": "Output: Neurochemical cascade (Oxytocin/Dopamine). In physics: The strongest binding energy between biological entities.",
    "entropy": "Output: Universal disorder. Lesson: Progress requires constant energy input against natural decay.",
    "time": "Output: Fourth dimension. Perception is relative to cognitive load and velocity.",
    "brain": "Output: 86 billion neurons. The most complex computing system in the known universe.",
    "failure": "Output: High-value data point. Re-calibrating trajectory based on empirical evidence."
};

inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const input = this.value.toLowerCase().trim();
        processOutput(input);
        this.value = '';
    }
});

function processOutput(input) {
    // Input visual
    const userLine = document.createElement('p');
    userLine.innerHTML = `<span style="color: #555;">> ${input}</span>`;
    outputArea.appendChild(userLine);

    // Processing Animation
    const loadingLine = document.createElement('p');
    loadingLine.innerText = "> Processing through scientific filters...";
    outputArea.appendChild(loadingLine);

    setTimeout(() => {
        loadingLine.remove();
        const response = document.createElement('p');
        response.style.color = "var(--color-primary)";
        
        // Logic Search
        let result = scienceDatabase[input] || `Output: Concept recognized. Initializing deep search... Logic: Everything is connected via fundamental laws. Keep exploring ${input} through the lens of Physics.`;
        
        // Special case for math/numbers
        if (!isNaN(input) && input !== "") {
            result = `Output: Quantitative data detected. Constants: ${input} is a prime state of measurement in your current query.`;
        }

        response.innerText = `> ${result}`;
        outputArea.appendChild(response);
        
        // Auto scroll to bottom
        outputArea.scrollTop = outputArea.scrollHeight;
    }, 800);
}
window.addEventListener("DOMContentLoaded",()=>{

const canvas=document.getElementById('sat-canvas');
if(!canvas){console.log("Canvas not found");return;}

const ctx=canvas.getContext('2d');
const input=document.getElementById('location-input');
const terminal=document.getElementById('sat-terminal');
const latDisp=document.getElementById('lat-val');
const lonDisp=document.getElementById('lon-val');
const countryBox=document.getElementById('country-info');

let target={active:false,x:0,y:0};

function resize(){
const r=canvas.parentElement.getBoundingClientRect();
canvas.width=r.width||600;
canvas.height=r.height||400;
}
window.addEventListener('resize',resize);
resize();

const zoom=1;
const numTiles=Math.pow(2,zoom);
let tiles=[];

for(let x=0;x<numTiles;x++){
for(let y=0;y<numTiles;y++){
const img=new Image();
img.crossOrigin="anonymous";
img.src=`https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`;
tiles.push({img,x,y});
}
}

function draw(){

ctx.fillStyle="#000";
ctx.fillRect(0,0,canvas.width,canvas.height);

tiles.forEach(t=>{
if(t.img.complete){
ctx.drawImage(
t.img,
t.x*(canvas.width/numTiles),
t.y*(canvas.height/numTiles),
canvas.width/numTiles,
canvas.height/numTiles
);
}
});

if(target.active){
const pulse=Math.sin(Date.now()/200)*8;
ctx.strokeStyle="#ff0000";
ctx.lineWidth=2;
ctx.beginPath();
ctx.arc(target.x,target.y,15+pulse,0,Math.PI*2);
ctx.stroke();
}

requestAnimationFrame(draw);
}
draw();

async function loadCountryInfo(country){
try{
const res=await fetch(`https://restcountries.com/v3.1/name/${country}`);
const data=await res.json();
const c=data[0];

countryBox.innerHTML=`
<b>COUNTRY:</b> ${c.name.common}<br>
<b>CAPITAL:</b> ${c.capital?.[0]||"N/A"}<br>
<b>REGION:</b> ${c.region}<br>
<b>POPULATION:</b> ${c.population.toLocaleString()}<br>
<img src="${c.flags.png}" width="60">
`;
}catch{
countryBox.innerHTML="NO COUNTRY DATA";
}
}

input.addEventListener('keydown',async e=>{
if(e.key==="Enter" && input.value.trim()!==""){

const query=input.value.trim();
input.value='';

terminal.innerHTML+=`<br>> SCAN ${query}`;

try{

const res=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
const data=await res.json();

if(data[0]){

const lat=parseFloat(data[0].lat);
const lon=parseFloat(data[0].lon);

latDisp.innerText=lat.toFixed(2);
lonDisp.innerText=lon.toFixed(2);

target.x=((lon+180)*(canvas.width/360));
target.y=((90-lat)*(canvas.height/180));
target.active=true;

const country=data[0].display_name.split(',').pop().trim();
loadCountryInfo(country);

}else{
terminal.innerHTML+=`<br>> TARGET NOT FOUND`;
}

}catch{
terminal.innerHTML+=`<br>> API ERROR`;
}

terminal.scrollTop=terminal.scrollHeight;
}
});

});
