function moveleft() {
    let left = parseInt(window.getComputedStyle(guy).getPropertyValue("left"));
    left -= 100;
    guy.style.left = left + "px";
    if(guy.style.left >= "300"){guy.style.left = "200"}
};

function moveright() {
    let left = parseInt(window.getComputedStyle(guy).getPropertyValue("left"));
    left += 100;
    guy.style.left = left + "px";
    if(guy.style.left <= "-100"){guy.style.left = "0"}
}

document.addEventListener("keydown", event => {
    if(event.key ==="KeyD" || event.key ==="ArrowLeft"){moveleft();}
    if(event.key === "KeyA" || event.key ==="ArrowRight"){moveright();}
})

let block = document.getElementById('block');
let counter = 0; 
let guy = document.getElementById('guy')
block.addEventListener('animationiteration', () => {let random = Math.floor(Math.random() *3); left = random * 100; block.style.left = left + "px"; counter++;});
setInterval(function(){
    let guyleft = parseInt(window.getComputedStyle(guy).getPropertyValue("left"));
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); if(guyleft == blockLeft && blockTop<500 && blockTop>300){alert('U lose bro, do best next time. Score:' +counter); block.style.animation = "none"}
    
    if(guy.style.left <= "-150" || guy.style.left <= "-250" || guy.style.left <= "-350" || guy.style.left <= "-450" || guy.style.left <= "-550" || guy.style.left <= "-650" ){guy.style.visibility = "hidden"; }
    else if(guy.style.left >= "300"){guy.style.visibility = "hidden"; }
    else{guy.style.visibility = "visible"}
},1);

document.getElementById("l").addEventListener("touchstart", moveleft());
document.getElementById("r").addEventListener("touchstart", moveright());
