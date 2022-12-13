class Monster extends Objects{
  constructor(x,y){
    super(x,y);
    this.v=createVector(x,y);
    this.diffV=createVector(0,0);
    this.shootRate=100;
    this.shootCount=0;
    this.bodies=[];
    this.bullets=[];
  }
  display(){
    for(let i=0;i<this.bodies.length;i++){
      this.bodies[i].display();
    }
  }
  move(hero){
   for(let i=0;i<this.bodies.length;i++){
      this.bodies[i].move(this.diffV);
    }
    let hero_v=createVector(hero.x,hero.y);
    this.diffV=hero_v.sub(this.v);
    this.diffV=this.diffV.mult(this.speed/this.diffV.mag())
    
    this.v.add(this.diffV); 
  }
  drop_item(items){
    let p=round(random(0,0));
    if(p==0 && items.length<10){
      items.push(new item(this.v.x,this.v.y,round(random(-0.5,3.5))));
    }
  }
  shoot(hero){}
}
class body{
  constructor(x,y,size,content,col_r,life){
    this.x=x;
    this.y=y;
    this.col_r=col_r;
    this.content=content;
    this.content_dead=[''];
    this.size=size;
    textSize(this.size);
    this.width=textWidth(content[0]);
    this.height=this.size*content.length;
    this.life=life;
    this.color=monster_color;
  }
  display(){
    fill(this.color);
    textSize(this.size);
    textAlign(CENTER,TOP);
    for(let i=0;i<this.content.length;i++){
      text(this.content[i],this.x,this.y+i*this.size);
    }
    if(this.life>0){
      fill('red');
      textSize(30*ratio);
      text(this.life,this.x,this.y+this.height*0.5);
    }
  }
  move(diffV){
    this.x+=diffV.x;
    this.y+=diffV.y;
  }
  shot(i,bullet,collided_bullets){
    let d=dist(bullet.x,bullet.y,this.x,this.y+this.height*0.5);
    if(d<this.col_r*2){
      hit_sound.play();
      collided_bullets.push(i);
      this.life-=bullet.power;
      if(this.life<=0){
        this.dead();
      }
    }
  }
  collide(hero){
    let d=dist(hero.x,hero.y,this.x,this.y+this.height*0.5);
    if(d<this.col_r){
      return true;
    }
    else return false;
  }
  dead(){
    this.content=this.content_dead;
    this.width=textWidth(this.content[0]);
    this.height=this.size*this.content.length;
    this.color='green';
  }
  drop_item(items){
    let p=round(random(0,2));
    if(p==0 && items.length<10){
      items.push(new item(this.x,this.y,round(random(-0.5,3.5))));
    }
  }
}