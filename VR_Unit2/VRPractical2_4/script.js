let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 25; i++){
    let rocket = new Rocket(rnd(-50,25), 0 , rnd(-25,25));
    rocket.scale(rnd(1,4));
  }


  loop();
})

function loop(){

  
  window.requestAnimationFrame( loop );
}
