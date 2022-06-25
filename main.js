function preload() {
}
  function setup() {
 cnv = createCanvas(1200, 700);
 cnv.position(100, 250);
    video = createCapture(VIDEO); 
    video.hide();
  
  }
  
  function draw() {
    background(500);
    image(video,400,150,400,400);
    //-------Rectangle
    fill("#fcdf03");
    stroke("#fcdf03");
    rect(15, 30, 30, 650);
    //----
    fill("#fcdf03");
    stroke("#fcdf03");
    rect(1135, 30, 30, 650)
    //----
    fill("#fcdf03");
    stroke("#fcdf03");
    rect(30, 30, 1130, 30)
     //----
     fill("#fcdf03");
     stroke("#fcdf03");
     rect(30, 650, 1130, 30)
    //-------
    fill("orange");
    stroke("orange");
    circle(30, 30, 45);
    fill("red");
    stroke("red");
    circle(30, 30, 30);
    //----
    fill("orange");
    stroke("orange");
    circle(1150, 30, 45);
    fill("red");
    stroke("red");
    circle(1150, 30, 30);
    //----
    fill("orange");
    stroke("orange");
    circle(1150, 670, 45);
    fill("red");
    stroke("red");
    circle(1150, 670, 30);
    //----
    fill("orange");
    stroke("orange");
    circle(30, 670, 45);
    fill("red");
    stroke("red");
    circle(30, 670, 30);
  }

  function take_snapshot(){
  save("My_selfie.png");
 
  }