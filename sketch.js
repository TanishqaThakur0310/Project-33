const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg, snowflake1Img, snowflake2Img;
var ice=[];
var maxSnow=100;
var engine, world;

function preload(){
  backgroundImg=loadImage("snow2.jpg");
 
  }



function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world= engine.world;

  if(frameCount % 275 === 0){
    for(var i=0; i<maxSnow; i++){
    ice.push(new Snow(random(0,1350), random(0,50)));
    }
    }
  
  
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine); 


for(var i = 0;i < maxSnow; i++){
  ice[i].display();
  ice[i].changePosition();
  }    
  drawSprites();
}