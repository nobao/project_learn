function init() {
    let planet = document.getElementById('greenplanet');
    planet.innerHTML = 'Red Alert: hit by phaser fire!';
    planet.setAttribute('class', 'redtext');
}
window.onload = init;