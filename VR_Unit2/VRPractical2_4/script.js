let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowflakes = [], rockets = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 25; i++){
    let rocket = new Rocket(rnd(-50,25), 0 , rnd(-25,25));
    rocket.scale(rnd(1,4));
    rockets.push(rocket);
  }

    for(let i = 0; i < 100; i++){
    let snowflake = new Snowflake(rnd(-50,25), 5 , rnd(-25,25));
    snowflakes.push(snowflake);
  }


  loop();
})

function loop(){
  for(let r of rockets){
    r.launch();
  }
  for(let s of snowflakes){
    s.fall();
  }

  
  window.requestAnimationFrame( loop );
}
