const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour=0;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
     if (backgroundImg)
        background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
     if (hour>=12)
         text("currentTime: "+12-hour+" pm" ,550,20)
    else 
         text("currentTime: "+hour+" am" ,550,20)  

}

async function getBackgroundImg() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responsejson = await response.json();
    var datetime = responsejson.datetime;
    console.log(datetime);
    hour = datetime.slice(11,13);
    if (hour > 4 && hour <= 6) 
        bg = "sunrise1.png"
    else if(hour>6 && hour<=8)
        bg = "sunrise2.png"
    else if(hour>8 && hour<=10)
        bg = "sunrise3.png"
    else if(hour>10 && hour<=12)
        bg = "sunrise4.png"
    else if(hour>12 && hour<=14)
        bg = "sunrise5.png"
    else if(hour>14 && hour<=16)
        bg = "sunrise6.png"
    else if(hour>16 && hour<=18)
        bg = "sunset7.png"
    else if(hour>20 && hour<=22)
        bg = "sunset8.png"
        else if(hour>24 && hour<=26)
        bg = "sunset9.png"
    else if(hour>28 && hour<=30)
        bg = "sunset10.png"
    else if(hour>32 && hour<=34)
        bg = "sunset11.png"
    else if(hour>36 && hour<=38)
        bg = "sunset12.png"

    backgroundImg = loadImage(bg);

}
