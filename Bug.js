class Bug1 extends Monster{
  constructor(x,y){
    super(x,y);
    this.size=12*ratio;
    this.col_r=30*ratio;
    this.life=round(random(10,30));
    this.speed=3*ratio;
    let content=['    \\ /    ','    oVo    ','\\___XXX___/',' __XXXXX__ ','/__XXXXX__\\','/   XXX   \\','     V     '];
    this.v=createVector(x,y+this.size*content.length*0.5);
    this.bodies.push(new body(this.x,this.y,this.size,content,this.col_r,this.life));
  }
}

class Bug2 extends Monster{
  constructor(x,y){
    super(x,y);
    this.size=15;
    this.col_r=0;
    this.life=round(random(30,50));
    this.speed=5;
    this.v=createVector(x,y);
    let content=[];
                 
    this.bodies.push(new body(this.x,this.y,this.r_width,this.r_height,content,this.col_r,this.life));
  }
}