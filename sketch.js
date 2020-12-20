const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos=[]
  var particles=[]
  var divisions=[]

  var divisionheight=300
function setup() {
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  drawSprites();

  for(var k = 0 ;k <= width;k = k+80){
    divisions.push(new division(k,height-divisionheight/2,10,divisionheight))
  }
  for(var j = 40;j <= width;j=j+50)
  {
    plinkos.push(new plinko(j,75))
  }
  for(var j = 15;j <= width-10;j=j+50)
  {
    plinkos.push(new plinko(j,175))
  }
  for(var j = 0;j < particles.length;j++)
  {
    particles[j].display()
  }
  for(var k = 0;k < particles.length;k++)
  {
    divisions[k].display()
  }





}