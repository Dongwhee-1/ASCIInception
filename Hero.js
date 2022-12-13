class Objects{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.col_r=0;
    this.speed=3*ratio;
  }
}


//HERO
class Hero extends Objects{
  constructor(x,y){
    super(x,y);
    this.col_r=20*ratio;
    this.color='yellow';
    this.speed=12*ratio;
    this.bullets=[];
    this.shootPower=30;
    this.shootMode=0;
    this.shootCount=0;
    this.shootRate=30;
    this.recordCount=0;
    this.recordRate=30;
    this.score=0;
    this.pastX=x;
    this.pastY=y
    this.content='A___A\n|・ㅅ・|\n|っㅡｃ|\n U   U';
  }
  display(){
    fill(this.color);
    // textAlign(CENTER,CENTER);
    // textSize(this.col_r/2);
    // text(this.content,this.x,this.y);
    image(img_hero,this.x,this.y,this.col_r*4,this.col_r*4);
  }
  move(){
    if(keyIsDown(LEFT_ARROW) && this.x>0){
      this.x-=this.speed;
    }
    else if(keyIsDown(RIGHT_ARROW) && this.x<width){
      this.x+=this.speed;
    }
    if(keyIsDown(UP_ARROW) && this.y>0){
      this.y-=this.speed;
    }
    else if(keyIsDown(DOWN_ARROW) && this.y<height){
      this.y+=this.speed;
    }
    
    if(this.recordCount>this.recordRate){
      this.pastX=this.x;
      this.pastY=this.y;
      this.recordCount=0;
    }
    this.recordCount++;
  }
  shoot(){
    if(this.shootCount>this.shootRate){
      this.bullets.push(new bullet(this.x,this.y,0,this.shootMode,this.shootPower));
      this.bullets.push(new bullet(this.x,this.y,1,this.shootMode,this.shootPower));
      this.bullets.push(new bullet(this.x,this.y,2,this.shootMode,this.shootPower));
      this.bullets.push(new bullet(this.x,this.y,3,this.shootMode,this.shootPower));
      
      this.shootCount=0;
    }
    for(let i=0;i<this.bullets.length;i++) this.bullets[i].display();
    this.shootCount++;
  }
}


//BULLET
class bullet extends Objects{
  constructor(x,y,d,m,p){
    super(x,y);
    this.col_r=10*ratio;
    this.color='yellow';
    this.direction=d;
    this.mode=m;
    this.speed=30*ratio;
    this.power=p
    this.angle=0;
    this.scalar=0;
    
    this.start_x=x;
    this.start_y=y;
  }
  display(){
    if(this.mode==0){
      this.speed=30*ratio;
      if(this.direction==0) this.x+=this.speed;
      else if(this.direction==1) this.x-=this.speed;
      else if(this.direction==2) this.y+=this.speed;
      else if(this.direction==3) this.y-=this.speed;
    }
    else if(this.mode==1){
      this.speed=10*ratio;
      if(this.direction==0){
        this.x+=this.speed;
        this.y=this.start_y+50*ratio*sin(radians(this.angle));
      }
      else if(this.direction==1){
        this.x-=this.speed;
        this.y=this.start_y-50*ratio*sin(radians(this.angle));
      }
      else if(this.direction==2){
        this.y+=this.speed;
        this.x=this.start_x+50*ratio*sin(radians(this.angle));
      }
      else if(this.direction==3){
        this.y-=this.speed;
        this.x=this.start_x-50*ratio*sin(radians(this.angle));
      }
      this.angle+=10;
    }
    else if(this.mode==2){
      this.speed=10*ratio;
      if(this.direction==0){
        // this.x=this.start_x+this.scalar*cos(radians(this.angle+90));
        // this.y=this.start_y+this.scalar*sin(radians(this.angle+90));
        this.x+=this.speed;
        this.y+=this.speed;
      }
      else if(this.direction==1){
        // this.x=this.start_x+this.scalar*cos(radians(this.angle+60));
        // this.y=this.start_y+this.scalar*sin(radians(this.angle+60));
        this.x+=this.speed;
        this.y-=this.speed;
      }
      else if(this.direction==2){
        // this.x=this.start_x+this.scalar*cos(radians(this.angle+30));
        // this.y=this.start_y+this.scalar*sin(radians(this.angle+30));
        this.x-=this.speed;
        this.y+=this.speed;
      }
      else if(this.direction==3){
        // this.x=this.start_x+this.scalar*cos(radians(this.angle));
        // this.y=this.start_y+this.scalar*sin(radians(this.angle));
        this.x-=this.speed;
        this.y-=this.speed;
      }
      // this.angle+=10;
      // this.scalar+=30*ratio;
    }
    fill(this.color);
    textSize(this.col_r*2);
    textAlign(CENTER,CENTER);
    text(this.power,this.x,this.y);
  }
}