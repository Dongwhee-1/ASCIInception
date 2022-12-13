class Boss2_2 extends Monster{
  constructor(x,y){
    super(x,y);
    this.speed=15*ratio;
    this.shootRate=30;
    this.shootCount=0;
    this.size=10*ratio;
    this.d=-1;
    this.skill=0;
    this.skill_n=0;
    this.skillCount=0;

    this.little_bullet=['  @@@  ',' @@@@@ ','@@@@@@@','@@@@@@@','@@@@@@@',' @@@@@ ','  @@@  '];

    this.bodies.push(new boss2_2_body1(this.x,this.y,0,1000));
  }
  shoot(hero){
    if(this.skill==0){
      if(this.shootCount>this.shootRate){
        this.shootCount=0;
        if(this.skillCount<10){
          this.bullets.push(new boss2_2_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,0));
          this.skillCount++;  
        }
        else{
          let p=round(random(0,1));
          this.skillCount=0;

          if(p==0){
            this.skill=1;
            this.shootRate=15;
            this.skill_n=5;
            boss2_sound2.play();
          }
          else{
            this.skill=2;
            this.shootRate=30;
            this.skill_n=5;
            boss2_sound1.play();
          }
        }
      }
    }
    else if(this.skill==1){
      if(this.shootCount>this.shootRate){
        this.shootCount=0;
        this.bullets.push(new boss2_2_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,0));
        this.bullets.push(new boss2_2_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,45));
        this.bullets.push(new boss2_2_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,90));
        this.bullets.push(new boss2_2_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,135));
        this.bullets.push(new boss2_2_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,180));
        this.bullets.push(new boss2_2_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,225));
        this.bullets.push(new boss2_2_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,270));
        this.bullets.push(new boss2_2_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,315));
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
        this.bullets.push(new boss2_2_skill1_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,0));
        this.bullets.push(new boss2_2_skill1_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,30));
        this.bullets.push(new boss2_2_skill1_bullet(this.v.x,this.v.y,hero,this.size,this.little_bullet,-30));
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
      this.bodies[i].display(this.skill);
    }
  }
  move(){
    for(let i=0;i<this.bodies.length;i++){
      this.bodies[i].move(this.diffV);
    }

    let goal_v;
    if(this.v.y<height*0.5){
      goal_v=createVector(this.v.x,height*0.5);
    }
    else if(this.d==-1) goal_v=createVector(0,height*0.5)
    else if(this.d==1) goal_v=createVector(width,height*0.5);
    
    if(this.d==-1 && this.v.x<=0){
      goal_v=createVector(width,height*0.5);
      this.d=1;
    }
    else if(this.d==1 && this.v.x>=width){
      goal_v=createVector(0,height*0.5)
      this.d=-1;
    }
    
    this.diffV=goal_v.sub(this.v);
    this.diffV=this.diffV.mult(this.speed/this.diffV.mag())
    if(this.skill!=0){
      this.diffV.x=0;
      this.diffV.y=0;
    }


    this.v.add(this.diffV);
  }
}










//BODIES
class boss2_2_body1{
  constructor(x,y,col_r,life){
    this.x=x;
    this.y=y;
    this.col_r=col_r;
    this.life=life;
  }
  collide(hero){
    if(this.x-img_boss2_1.width*0.5*0.5*ratio<hero.x && hero.x<this.x+img_boss2_1.width*0.5*0.5*ratio && this.y-img_boss2_1.height*0.5*0.5*ratio<hero.y && hero.y<this.y+img_boss2_1.height*0.5*0.5*ratio){
      return true;
    }
    else return false;
  }
  shot(i,bullet,collided_bullets){
    if(this.collide(bullet)){
      collided_bullets.push(i);
      this.life-=bullet.power;
      if(!boss2_2_sound1.isPlaying()) boss2_2_sound1.play();
      if(this.life<=0){
        this.dead();
      }
    }
  }
  display(skill){
    if(skill==0){
      image(img_boss2_2,this.x,this.y,img_boss2_1.width*ratio,img_boss2_1.height*0.5*ratio);
    }
    else if(skill==1){
      image(img_boss2_4,this.x,this.y,img_boss2_1.width*ratio,img_boss2_1.height*0.5*ratio);
    }
    else if(skill==2){
      image(img_boss2_3,this.x,this.y,img_boss2_1.width*ratio,img_boss2_1.height*0.5*ratio); 
    }
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
class boss2_2_bullet{
  constructor(x,y,hero,size,content,angle){
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
    if(d<this.height*0.3){
      return true;
    }
    else return false;
  }
}
class boss2_2_skill1_bullet{
  constructor(x,y,hero,size,content,angle){
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

    this.bounce_n=2;
  }
  display(hero){
    fill(monster_color);
    textSize(this.size);
    textAlign(CENTER,TOP)
    for(let i=0;i<this.content.length;i++){
      text(this.content[i],this.v.x,this.v.y+i*this.size);
    }
    this.v.add(this.diffV);

    if(this.v.x-this.width*0.5<0 || this.v.x+this.width*0.5>width){
      if(this.bounce_n>0){
        this.diffV.x*=-1
        this.bounce_n--;
      }
    }
    if(this.v.y<0 || this.v.y+this.height>height){
      if(this.bounce_n>0){
        this.diffV.y*=-1
        this.bounce_n--;
      }
    }
  }
  collide(hero){
    let d=dist(this.v.x,this.v.y+this.height*0.5,hero.x,hero.y);
    if(d<this.height*0.3){
      return true;
    }
    else return false;
  }
}