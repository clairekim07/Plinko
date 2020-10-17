const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var backgroundImg,platform;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(240,790,480,10);
    //plinko1 = new Plinko(225,70,10);
    particle = new Particle(220,10,10)

    divide1 = new Divisions(5,640,7,300)
    divide2 = new Divisions(80,640,7,300)
    divide3 = new Divisions(160,640,7,300)
    divide4 = new Divisions(240,640,7,300)
    divide5 = new Divisions(320,640,7,300)
    divide6 = new Divisions(400,640,7,300)
    divide7 = new Divisions(477,640,7,300)

    for (var k = 0; k <=length; k = k + 80) {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }
    for (var j = 75; j <=width; j=j+50) {
          plinkos.push(new Plinko(j,75,15));
       }
    for (var j = 50; j <=width-10; j=j+50) {
          plinkos.push(new Plinko(j,175,15));
       }
    for (var j = 75; j <=width; j=j+50) {
          plinkos.push(new Plinko(j,275,15));
       }
    for (var j = 50; j <=width-10; j=j+50) {
          plinkos.push(new Plinko(j,375,15));
       }
       
    
   
}

function draw(){
    background("purple");
    Engine.update(engine);

    
    
    if(frameCount % 60 === 0){
        particles.push(new Particle(random(width/2-5, width/2+5),10,10))
    }
    
    for (var j = 0; j < particles.length; j++) {
        particles[j].display();
    }
    for (var p = 0; p < divisions.length; p++) {
        divisions[p].display();
    }
    for (var k = 0; k < plinkos.length; k++) {
        plinkos[k].display();
    }
  
    divide1.display();
    divide2.display();
    divide3.display();
    divide4.display();
    divide5.display();
    divide6.display();
    divide7.display();
    
    ground.display();
    particle.display();    

    //plinko1.display();
    //this code is the problem, if this is added, the body/display won't be defined
    
   
   
}

