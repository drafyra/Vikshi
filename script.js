const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("hide"),700));

const start=new Date("2023-11-12T14:00:00+05:30");
function timer(){let d=Math.max(0,Date.now()-start.getTime());let sec=Math.floor(d/1000);let days=Math.floor(sec/86400);sec%=86400;let hrs=Math.floor(sec/3600);sec%=3600;let mins=Math.floor(sec/60);sec%=60;$("#days").textContent=days;$("#hours").textContent=String(hrs).padStart(2,"0");$("#mins").textContent=String(mins).padStart(2,"0");$("#secs").textContent=String(sec).padStart(2,"0")}timer();setInterval(timer,1000);

const photoText={
1:["The Smile Chapter","Kuch smiles camera ke liye nahi hoti… bas moment ke liye hoti hain. ✨"],
2:["The Adventure Chapter","Thodi masti, thoda madness — aur ek memory jo repeat karne ka mann kare. 🌿"],
3:["The Mirror Chapter","Ek simple frame, lekin uske andar poori ek feeling. 💫"],
4:["The Close Chapter","Kuch moments ko explain nahi karna padta. Bas feel karna padta hai. ❤️"],
5:["The Little Moment","Ek aur frame, ek aur reason to smile. 📸"],
6:["The Together Chapter","Jab do log ek frame mein aa jaate hain, picture thodi aur special ho jaati hai. 💗"],
7:["The View Chapter","Beautiful view… aur usse bhi beautiful memory. 🌙"],
8:["The Warm Chapter","Last photo ho sakti hai, last memory bilkul nahi. ✨"]
};
const text={
welcome:["Welcome to Our Universe","Aaj se is page ka koi normal button nahi hai. Har click ke peeche ek chhota surprise chhupa hai. Explore everything. 💫"],
timer:["Every Second","12 November 2023 ke us moment se lekar ab tak — har second ek tiny piece of the story hai. ⏳❤️"],
letter:["Secret Letter","Kabhi words kam pad jaate hain, isliye memories bolti hain. Tumhari smile, tumhari little habits aur ye saare moments — sab milkar ek story banate hain. Aur best part? Story abhi khatam nahi hui. 💌"],
wish:["Midnight Wish","Wish simple hai: jab bhi tum ye page kholo, screen se pehle tumhare face par smile aaye. 🌙✨"],
memory:["Hidden Memory","Ek normal day, ek normal moment… aur baad mein wahi moment sabse zyada yaad reh gaya. 🧩"],
cartoon:["Cartoon Universe","Animated world unlocked! Characters apni little journey par hain. 🎬❤️"],
movie:["Our Little Movie","Imagine karo is tiny cartoon world ko ek little movie ki tarah — story chalti rahegi, scene khatam nahi hoga. 🎞️"],
secret:["You Clicked It 😏","Haan, tumne Don't Click This ko click kar hi diya. Isliye ek extra surprise: tum officially curiosity champion ho. 🏆❤️"],
final:["The Final Box","Agar tum yahan tak aa gaye ho, to poora universe explore kar liya. Ab ek last thing: smile. Seriously. 😊✨"]
};

function open(type){
 let title,textBody,extra="";
 if(type.startsWith("photo")){let n=+type.replace("photo","");[title,textBody]=photoText[n];extra=`<img src="assets/photo${String(n).padStart(2,"0")}.jpg" alt="Memory ${n}">`}
 else [title,textBody]=text[type]||["A Surprise","Surprise unlocked. ✨"];
 if(type==="heart"){title="Heart Meter";textBody="Okay… let's measure the impossible. 💗";extra=`<div class="heart-big">♥</div><div class="meter"><i id="meter"></i></div>`}
 $("#content").innerHTML=extra+`<h2>${title}</h2><p>${textBody}</p>`;
 $("#modal").classList.add("open");burst(14);
 if(type==="heart")setTimeout(()=>$("#meter").style.width="100%",200);
 if(type==="fireworks")fireworks();
 if(type==="final")fireworks();
}
$$("[data-surprise]").forEach(x=>x.onclick=()=>open(x.dataset.surprise));
$("#close").onclick=()=>$("#modal").classList.remove("open");$(".backdrop").onclick=()=>$("#modal").classList.remove("open");
document.addEventListener("keydown",e=>{if(e.key==="Escape")$("#modal").classList.remove("open")});

function burst(n){for(let i=0;i<n;i++){let s=document.createElement("span");s.textContent=["✦","♥","✧"][Math.floor(Math.random()*3)];s.style.position="fixed";s.style.left="50%";s.style.top="50%";s.style.zIndex=99;s.style.color=["#ff76b7","#ffd77a","#a875ff"][Math.floor(Math.random()*3)];document.body.appendChild(s);s.animate([{opacity:0,transform:"scale(.2)"},{opacity:1,transform:`translate(${(Math.random()-.5)*300}px,${(Math.random()-.5)*300}px) scale(1.4)`},{opacity:0}],{duration:1100}).onfinish=()=>s.remove()}}

function fireworks(){for(let i=0;i<12;i++){let f=document.createElement("i");f.className="fire";f.style.left=Math.random()*100+"vw";f.style.top=(10+Math.random()*60)+"vh";f.style.setProperty("--x",(Math.random()-.5)*200+"px");f.style.setProperty("--y",(Math.random()-.5)*200+"px");document.body.appendChild(f);setTimeout(()=>f.remove(),1600)}for(let i=0;i<80;i++){let c=document.createElement("i");c.className="confetti";c.style.left=Math.random()*100+"vw";c.style.background=["#ff5d9f","#ffd77a","#a875ff","#65ddff","#fff"][Math.floor(Math.random()*5)];c.style.animationDelay=Math.random()+ "s";document.body.appendChild(c);setTimeout(()=>c.remove(),3500)}}

const ob=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.12});$$(".reveal").forEach(x=>ob.observe(x));
const note="Kabhi socha nahi tha ki photos, tiny animations aur kuch lines milkar itna bada little universe bana denge. Bas ek request — jab bhi tum is page ko yaad karo, ek baar smile zaroor karna. Baaki surprises tum khud discover kar lena. ❤️";
let ti=0;function type(){if(ti<note.length){$("#typed").textContent+=note[ti++];setTimeout(type,28)}}setTimeout(type,1200);

// Original browser-generated ambient melody; no copyrighted song is bundled.
let ctx,master,playing=false,loop;
function musicStart(){if(!ctx){ctx=new (window.AudioContext||window.webkitAudioContext)();master=ctx.createGain();master.gain.value=.045;master.connect(ctx.destination)}if(ctx.state==="suspended")ctx.resume();playing=true;clearInterval(loop);const notes=[261.63,329.63,392,493.88,392,329.63,293.66,349.23];let i=0;const play=()=>{if(!playing)return;let o=ctx.createOscillator(),g=ctx.createGain();o.type="sine";o.frequency.value=notes[i++%notes.length];g.gain.setValueAtTime(.001,ctx.currentTime);g.gain.linearRampToValueAtTime(.32,ctx.currentTime+.08);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+1.7);o.connect(g);g.connect(master);o.start();o.stop(ctx.currentTime+1.8)};play();loop=setInterval(play,850);$("#musicBtn").textContent="♫ Playing"}
$("#musicBtn").onclick=()=>{if(!ctx||ctx.state==="suspended"){musicStart();return}playing=!playing;if(playing)musicStart();else{clearInterval(loop);ctx.suspend();$("#musicBtn").textContent="♫ Music"}};
