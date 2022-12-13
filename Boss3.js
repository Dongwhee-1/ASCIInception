
class Boss3 extends Monster{
  constructor(x,y){
    super(x,y);
    this.speed=5*ratio;
    this.shootRate=30;
    this.shootCount=0;
    this.skillCount=0;
    this.skill=0;
    this.skill_n=0;
    this.size=10*ratio;

    this.little_bullet=[' __ ',':@@:',':@@:',' __ '];
    this.skill_bullet1=['무'];
    this.skill_bullet2=['야'];
    this.skill_bullet3=['호'];

    this.bodies.push(new boss3_body1(this.x,this.y,0,3000));
  }
  shoot(hero){
    if(this.skill==0){
      if(this.shootCount>this.shootRate){
        this.shootCount=0;
        if(this.skillCount<10){
          this.bullets.push(new boss3_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,0));
          this.skillCount++;
        }
        else{
          let p=round(random(-0.5,1.5));
          this.skillCount=0;

          if(p==0){
            this.skill=4;
            this.shootRate=60;
            this.skill_n=1;
            boss3_sound1.play();
          }
          else if(p==1){
            this.skill=3;
            this.shootRate=30;
            this.skill_n=5;
            boss3_sound3.play();
          }
        }
      }
    }
    else if(this.skill==4){
      if(this.shootCount>=this.shootRate){
        this.shootCount=0;
        for(let i=0;i<100;i++){
          this.bullets.push(new boss3_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,random(0,360)));
        }
        this.skill_n--;
      }
      if(this.skill_n<=0){
        this.skill=round(random(1,2));
        if(this.skill==1){
          this.shootRate=30;
          this.skill_n=1;
          boss3_sound2.play();
        }
        else{
          this.shootRate=30;
          this.skill_n=3;
          boss3_sound2.play();
        }
      }
    }
    else if(this.skill==1){
      if(this.shootCount>this.shootRate){
        this.shootCount=0;
        monsters.push(new boss3_skill1_bullet(width*1/6,height*-0.5,['무']));
        monsters.push(new boss3_skill1_bullet(width*3/6,height*-0.5,['야']));
        monsters.push(new boss3_skill1_bullet(width*5/6,height*-0.5,['호']));
        this.skill_n--;
      }
      if(this.skill_n<=0){
        this.skill=0;
        this.shootRate=30;
      }
    }
    else if(this.skill==2){
      if(this.shootCount>this.shootRate){
        this.shootCount=0;
        if(this.skill_n==3) this.bullets.push(new boss3_skill2_bullet(this.v.x,this.v.y,hero,this.size*30,this.skill_bullet1,random(-10,10)));
        else if(this.skill_n==2) this.bullets.push(new boss3_skill2_bullet(this.v.x,this.v.y,hero,this.size*30,this.skill_bullet2,random(-10,10)));
        else if(this.skill_n==1) this.bullets.push(new boss3_skill2_bullet(this.v.x,this.v.y,hero,this.size*30,this.skill_bullet3,random(-10,10)));
        this.skill_n--;
      }
      if(this.skill_n<=0){
        this.skill=0;
        this.shootRate=30;
      }
    }
    else if(this.skill==3){
      if(this.shootCount==6){
        this.bullets.push(new boss3_skill3_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,0));
      }
      else if(this.shootCount==12){
        this.bullets.push(new boss3_skill3_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,0));
      }
      else if(this.shootCount==18){
        this.bullets.push(new boss3_skill3_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,0));
      }
      else if(this.shootCount==24){
        this.bullets.push(new boss3_skill3_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,0));
      }
      else if(this.shootCount>=30){
        this.shootCount=0;
        this.bullets.push(new boss3_skill3_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,0));
        this.skill_n--;
      }
      if(this.skill_n<=0){
        this.skill=0;
        this.shootRate=30;
      }
    }
    for(let i=0;i<this.bullets.length;i++) this.bullets[i].display();
    this.shootCount++;
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

    let goal_v;
    if(this.v.y<height*0.5){
      goal_v=createVector(this.v.x,height*0.5);
      this.speed=5;
      this.diffV=goal_v.sub(this.v);
      this.diffV=this.diffV.mult(this.speed/this.diffV.mag())
      this.v.add(this.diffV);
    }
    else{
      this.diffV.x=0;
      this.diffV.y=0;
    }

  }
}










//BODIES
class boss3_body1{
  constructor(x,y,col_r,life){
    this.x=x;
    this.y=y;
    this.col_r=col_r;
    this.life=life;
  }
  collide(hero){
    if(this.x-muyaho_transformed.width*0.5*0.5*ratio<hero.x && hero.x<this.x+muyaho_transformed.width*0.5*0.5*ratio && this.y-muyaho_transformed.height*0.5*0.5*ratio<hero.y && hero.y<this.y+muyaho_transformed.height*0.5*0.5*ratio){
      return true;
    }
    else return false;
  }
  shot(i,bullet,collided_bullets){
    if(this.collide(bullet)){
      collided_bullets.push(i);
      this.life-=bullet.power;
      if(!boss3_sound4.isPlaying()) boss3_sound4.play();
      if(this.life<=0){
        this.dead();
      }
    }
  }
  display(){
    image(muyaho_transformed,this.x,this.y,muyaho_transformed.width*0.5*ratio,muyaho_transformed.height*0.5*ratio);
    if(this.life>0){
      fill('red');
      textSize(20*ratio);
      text(this.life,this.x,this.y);
    }
  }
  move(diffV){
    this.x+=diffV.x;
    this.y+=diffV.y;
  }
  dead(){}
  drop_item(items){
    let p=round(random(0,2));
    if(p==0 && items.length<10){
      items.push(new item(this.x,this.y,round(random(-0.5,3.5))));
    }
  }
}







//BULLET
class boss3_bullet{
  constructor(x,y,hero,size,content,angle){
    this.v=createVector(x,y)
    this.hero_v=createVector(hero.x,hero.y);
    this.speed=3;
    this.size=size;
    this.content=content;
    textSize(this.size);
    this.width=textWidth(content[0]);
    this.height=this.size*content.length;
    this.diffV=this.hero_v.sub(createVector(x,y+this.height*0.5));
    this.diffV=this.diffV.mult(this.speed/this.diffV.mag())
    this.diffV.rotate(radians(angle));
  }
  display(){
    fill(monster_color);
    textSize(this.size);
    textAlign(CENTER,TOP);
    for(let i=0;i<this.content.length;i++){
      text(this.content[i],this.v.x,this.v.y+i*this.size);
    }
    this.v.add(this.diffV);
  }
  collide(hero){
    let d=dist(this.v.x,this.v.y+this.height*0.5,hero.x,hero.y);
    if(d<this.width*0.3){
      return true;
    }
    else return false;
  }
}
class boss3_skill1_bullet extends Monster{
  constructor(x,y,content){
    super(x,y);
    this.size=width/3;
    this.col_r=this.size*0.3;
    this.life=300;
    this.speed=5;
    this.v=createVector(x,y);
    this.diffV=createVector(0,5);

    textSize(this.size);
    this.width=textWidth(content[0]);
    this.height=this.size*content.length;

    this.bodies.push(new boss3_skill1_body(this.x,this.y,this.size,content,this.col_r,this.life,this.diffV));
  }
  display(){
    for(let i=0;i<this.bodies.length;i++){
      this.bodies[i].display();
    }    
  }
  move(){
    for(let i=0;i<this.bodies.length;i++){
      this.bodies[i].move(this.diffV);
    }
    this.v.add(this.diffV);
  }
}
class boss3_skill1_body extends body{
  constructor(x,y,size,content,col_r,life,diffV){
    super(x,y,size,content,col_r,life);
    this.x=x;
    this.y=y;
    this.size=size;
    this.col_r=col_r;
    this.life=life;
    this.content=content;
    this.content_dead=[''];
    textSize(this.size);
    this.width=textWidth(content[0]);
    this.height=this.size*content.length;
    this.color=monster_color;
    this.diffV=diffV;
  }
  display(){
    fill(this.color);
    textSize(this.size)
    textAlign(CENTER,TOP);
    for(let i=0;i<this.content.length;i++){
      text(this.content[i],this.x,this.y+i*this.size);
    }
    if(this.life>0){
      fill('red');
      textSize(50*ratio);
      text(this.life,this.x,this.y+this.height*0.5);
    }
  }
  move(){
    this.y+=this.diffV.y
  }
}
class boss3_skill2_bullet extends boss3_bullet{
  constructor(x,y,hero,size,content,angle){
    super(x,y,hero,size,content,angle);
    this.v=createVector(x,y)
    this.hero_v=createVector(hero.x,hero.y);
    this.speed=10;
    this.size=size;
    this.content=content;
    textSize(this.size);
    this.width=textWidth(content[0]);
    this.height=this.size*content.length;
    this.diffV=this.hero_v.sub(createVector(x,y+this.height*0.5));
    this.diffV=this.diffV.mult(this.speed/this.diffV.mag())
    this.diffV.rotate(radians(angle));
  }
  collide(hero){
    let d=dist(this.v.x,this.v.y+this.height*0.5,hero.x,hero.y);
    if(d<this.width*0.3){
      return true;
    }
    else return false;
  }
}
class boss3_skill3_bullet extends boss3_bullet{
  constructor(x,y,hero,size,content,angle){
    super(x,y,hero,size,content,angle);
    this.v=createVector(x,y)
    this.hero_v=createVector(hero.x,hero.y);
    this.speed=15;
    this.size=size;
    this.content=content;
    textSize(this.size);
    this.width=textWidth(content[0]);
    this.height=this.size*content.length;
    this.diffV=this.hero_v.sub(createVector(x,y+this.height*0.5));
    this.diffV=this.diffV.mult(this.speed/this.diffV.mag())
    this.diffV.rotate(radians(angle));
  }
}