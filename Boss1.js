
class Boss1 extends Monster{
  constructor(x,y){
    super(x,y);
    this.speed=5*ratio;
    this.shootRate=30;
    this.shootCount=0;
    this.size=10*ratio;
    this.big_bullet_spawned=0;
    
    let part2=['                       1000000000000','                    0000000011111110','                    000000000011111110','                00001111111111111111','              1000111111111111111111','             00011111111111111111111','           1000111111111111111111111','          10011111111111111111111111','         100111111111111111111111111','        0001111111111111111111111111','       10011111111111111111111111111','       00111111111111111111111111111','      001111111111111111111111111111','     0001111111111111111111111111111','     0011111111111111111111111111111','    00111111111111111111111111111111','   001111111111111111111111111111111','   001111111111111111111111111111111','  1001111111111111111111111111111111','  0011111111111111111111111111111111','  0011111111111111111111111111111111'];
    let part3=['0001                                ','0000000                             ','1111000001                          ','11111110000                         ','1111111110000                       ','11111111111000                      ','1111111111110001                    ','11111111111111000                   ','111111111111111000                  ','1111111111111111000                 ','11111111111111111000                ','111111111111111111001               ','111111111111111111100               ','1111111111111111111100              ','11111111111111111111101             ','11111111111111111111100             ','111111111111111111111100            ','111111111111111111111100            ','1111111111111111111111100           ','1111111111111111111111100           ','1111111111111111111111100           '];
    let part4=['                                    ','                                    ','                                    ','                                    ','                                    ','                           100001   ','                         10000 001  ','                        000100  00  ','                      100   00   0  ','                     00000   00  00 ','                    100 101  10   0 ','                    00   10       00','                   0001   00      00','                  00 000   1      10','                 10   100         10','                 000    00         0','                 00000             0','                10  000           10','                10                10','                101               00','                 001              00'];
    let part5=[' 10111111111111111111111111111111111',' 00111111111111111111111111111111111',' 00111111111111111111111111111111111','101111111111111111111111111111111111','001111110011111111111111111111111111','00111100  01111111111111111111111111','0011110    0111111111111111111111111','0011110    0111111111111111111111111','00111100  01111111111111111111111111','001111100011111111111111111111000111','001111111111111111111111111100000001','00111111111111111111111111110     00','0011111111111111111111111110       0','0011111111111111111111111110       0','0011111111111111111111111100       0','0011111111111111111111111000       0','10111111111111111111111000000      0',' 001111111111111110000000   00   00 ',' 001111111111110000000000    10001  ',' 101111111111111011000  1      0    ','1 0011111111111111100          01   '];
    let part6=['11111111111111111111111100          ','11111111111111111111111100          ','11111111111111111111111110          ','111111111111111111111111100         ','111111111111111110011111100         ','11111111111111100  01111100         ','1111111111111110    0111100         ','1111111111111110    0111100         ','11111111111111100  01111100         ','111111111111111100011111100         ','111111111111111111111111100         ','111111111111111111111111100         ','111111111111111111111111100         ','011111111111111111111111100         ','001111111111111111111111100         ','000011111111111111111111100         ','  0000111111111111111111100         ','    0001111111111111111110          ','    000000000011111111110000        ','    011001000111111111110000000     ','       00111111111111110001000000   '];
    let part7=['                  000          00000','                    000        00011','                     100000000001111','                         10000011111','                             0001111','                             0001111','                             0000111','                             1000111','                              000011','                              000011','                               00001','                               00000','                               00000','                                0000','                                0000','                                 000','                                 100','                                  00','                                   0','                                    '];
    let part8=['0 0011111111111111100100       01   ','00100111111111111000000        01   ','100001111111111100000  1       00   ','100000111111111111110000      0001  ','11000011111111111100000      10000  ','111000011111111110000000    10011001','111100001111111110011100000000111100','111110001111111111111111000001111110','111111000111111111111111111111111111','111111100011111111111111111111111111','111111110011111111111111111111111111','111111111111111111111111111111111111','111111111110011111111111111111111111','111111111111000011111111111111111111','011111111111110000011111111111111111','011111111111111000000001111111111111','001111111111111110000000000000000000','000111111111111111000000000000000000','000011111111111111111000000000000000','000000111111111111111100000000000000','                                    '];
    let part9=['     0000111111111111110011111000   ','     1000000111111111110011111100   ','       00000011111111100011111100   ','    10000111111111111100111111100   ','     0000011111111111001111111000   ','    00000000111111110001111111000   ','000000111100111111110011111110000   ','00001111111111111110011111110000    ','11111111111111111110111111110000    ','11111111111111111000111111100000    ','11111111111111110011111111100001    ','1111111111111100011111111100000     ','1111111111110000111111111000001     ','111111111100000111111111100000      ','11111110000000111111111100000       ','11100000000011111111111000000       ','0000000000011111111111100000        ','0000000001111111111111000001        ','000000011111111111111000000         ','00000011111111111111000000           ','                                    '];

    this.little_bullet=[' __ ','0  0','0  0',' __ '];
    this.big_bullet=['                                    ','                           100001   ','                         10000 001  ','                        000100  00  ','                      100   00   0  ','                     00000   00  00 ','                    100 101  10   0 ','                    00   10       00','                   0001   00      00','                  00 000   1      10','                 10   100         10','                 000    00         0','                 00000             0','                10  000           10','                10                10','                101               00','                 001              00','                  000          00000','                    000        000  ','                     10000000000    ','                         100000     '];


    textSize(this.size);
    this.width=textWidth(part2[0]);
    this.height=this.size*part2.length;

    this.bodies.push(new boss1_body2(this.x,this.y-this.height,this.size,part2,0,100));
    this.bodies.push(new boss1_body3(this.x+this.width,this.y-this.height,this.size,part3,0,100));
    this.bodies.push(new boss1_body4(this.x-this.width,this.y,this.size,part4,0,100));
    this.bodies.push(new boss1_body5(this.x,this.y,this.size,part5,0,100));
    this.bodies.push(new boss1_body6(this.x+this.width,this.y,this.size,part6,0,100));
    this.bodies.push(new boss1_body7(this.x-this.width,this.y+this.height,this.size,part7,0,100));
    this.bodies.push(new boss1_body8(this.x,this.y+this.height,this.size,part8,0,100));
    this.bodies.push(new boss1_body9(this.x+this.width,this.y+this.height,this.size,part9,0,100));
  }
  shoot(hero){
    if(this.shootCount>this.shootRate){
      this.bullets.push(new boss1_bullet(this.v.x-this.width*0.5,this.v.y+this.height*0.5,hero,this.size,this.little_bullet));
      this.shootCount=0;
    }
    for(let i=0;i<this.bullets.length;i++) this.bullets[i].display(hero);
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
    if(this.big_bullet_spawned==0){
      for(let i=0;i<this.bodies.length;i++){
        if(this.bodies[i].life<=0){
          this.bullets.push(new boss1_big_bullet(this.v.x-this.width*0.5,this.v.y+this.height*0.5,hero,this.size*1.5,this.big_bullet));
          boss1_sound2.play();
          this.big_bullet_spawned=1;
          break;
        }
      }
    }
    let goal_v;
    goal_v=createVector(hero.pastX,hero.pastY);
    this.diffV=goal_v.sub(this.v);
    this.diffV=this.diffV.mult(this.speed/this.diffV.mag())

    this.v.add(this.diffV);
  }
}










//BODIES
class boss1_body2 extends body{
  constructor(x,y,size,content,col_r,life){
    super(x,y,size,content,col_r,life);
    this.content_dead=[''];
  }
  collide(hero){
    let d=dist(hero.x,hero.y,this.x+this.width*0.5,this.y+this.height);
    if(d<this.height && hero.x<this.x+this.width*0.5 && hero.y<this.y+this.height){
      return true;
    }
    else return false;
  }
  shot(i,bullet,collided_bullets){
    if(this.collide(bullet)){
      collided_bullets.push(i);
      this.life-=bullet.power;
      boss1_sound1.play();
      if(this.life<=0){
        this.dead();
      }
    }
  }
}
class boss1_body3 extends body{
  constructor(x,y,size,content,col_r,life){
    super(x,y,size,content,col_r,life);
    this.content_dead=[''];
  }
  collide(hero){
    let d=dist(hero.x,hero.y,this.x-this.width*0.5,this.y+this.height);
    if(d<this.height*0.8 && hero.x>this.x-this.width*0.5 && hero.y<this.y+this.height){
      return true;
    }
    else return false;
  }
  shot(i,bullet,collided_bullets){
    if(this.collide(bullet)){
      collided_bullets.push(i);
      this.life-=bullet.power;
      boss1_sound1.play();
      if(this.life<=0){
        this.dead();
      }
    }
  }
}
class boss1_body4 extends body{
  constructor(x,y,size,content,col_r,life){
    super(x,y,size,content,col_r,life);
    this.content_dead=['                                    ','                                    ','                                    ','                                    ','                                    ','                                    ','                                   0','                                   0','                                   0','                                 110','                               10  0','                             110   0','                          110      0','                       110         0','                    110            0','                   10              0'];
  }
  collide(hero){
    let d=dist(hero.x,hero.y,this.x+this.width*0.5,this.y+this.height*0.5);
    if(d<this.width*0.4){
      return true;
    }
    else return false;
  }
  shot(i,bullet,collided_bullets){
    if(this.collide(bullet)){
      collided_bullets.push(i);
      this.life-=bullet.power;
      boss1_sound1.play();
      if(this.life<=0){
        this.dead();
      }
    }
  }
}
class boss1_body5 extends body{
  constructor(x,y,size,content,col_r,life){
    super(x,y,size,content,col_r,life);
    this.content_dead=[' 10111111111111111111111111111111111',' 00111111111111111111111111111111111',' 00111111111111111111111111111111111',' 10111111  11111111111111111111111111',' 001111111  1111111111111111111111111',' 0011111111  111111111111111111111111',' 00111        11111111111111111111111',' 00111        11111111111111111111111',' 0011111111  111111111111111111111111',' 001111111  1111111111111111111000111',' 00111111  11111111111111111100000001','00111111111111111111111111110     00','0011111111111111111111111110       0','0011111111111111111111111110       0','0011111111111111111111111100       0','0011111111111111111111111000       0','10111111111111111111111000000      0',' 001111111111111110000000   00   00 ',' 001111111111110000000000    10001  ',' 101111111111111011000  1      0    ','1 0011111111111111100          01   '];
  }
  collide(hero){
    if(this.x-this.width*0.5<hero.x && hero.x<this.x+this.width*0.5 && this.y<hero.y && hero.y<this.y+this.height){
      return true;
    }
    else return false;
  }
  shot(i,bullet,collided_bullets){
    if(this.collide(bullet)){
      collided_bullets.push(i);
      this.life-=bullet.power;
      boss1_sound1.play();
      if(this.life<=0){
        this.dead();
      }
    }
  }
}
class boss1_body6 extends body{
  constructor(x,y,size,content,col_r,life){
    super(x,y,size,content,col_r,life);
    this.content_dead=['11111111111111111111111100          ','11111111111111111111111100          ','11111111111111111111111110          ','1111111111111111  111111100         ','111111111111111  1111111100         ','11111111111111  11111111100         ','1111111111111         11100         ','1111111111111         11100         ','11111111111111  11111111100         ','111111111111111  1111111100         ','1111111111111111  111111100         ','111111111111111111111111100         ','111111111111111111111111100         ','011111111111111111111111100         ','001111111111111111111111100         ','000011111111111111111111100         ','  0000111111111111111111100         ','    0001111111111111111110          ','    0000000000111111111100          ','    0110010001111111111100          ','       001111111111111100           '];
  }
  collide(hero){
    if(this.x-this.width*0.5<hero.x && hero.x<this.x+this.width*0.1 && this.y<hero.y && hero.y<this.y+this.height){
      return true;
    }
    else return false;
  }
  shot(i,bullet,collided_bullets){
    if(this.collide(bullet)){
      collided_bullets.push(i);
      this.life-=bullet.power;
      boss1_sound1.play();
      if(this.life<=0){
        this.dead();
      }
    }
  }
}
class boss1_body7 extends body{
  constructor(x,y,size,content,col_r,life){
    super(x,y,size,content,col_r,life);
    this.content_dead=[''];
  }
  collide(hero){
    if(this.x+this.width*0.3<hero.x && hero.x<this.x+this.width*0.5 && this.y<hero.y && hero.y<this.y+this.height){
      return true;
    }
    else return false;
  }
  shot(i,bullet,collided_bullets){
    if(this.collide(bullet)){
      collided_bullets.push(i);
      this.life-=bullet.power;
      boss1_sound1.play();
      if(this.life<=0){
        this.dead();
      }
    }
  }
}
class boss1_body8 extends body{
  constructor(x,y,size,content,col_r,life){
    super(x,y,size,content,col_r,life);
    this.content_dead=['  0011111111111111100100       01   ','  100111111111111000000        01   ','  0001111111111100000  1       00   ','   000111111111111110000      0001  ','   00011111111111100000      10000  ','    00011111111110000000    10011001','     0001111111110011100000000111100','      001111111111111111000001111110','       00111111111111111111111111111','        0011111111111111111111111111','          11111111111111111111111111','             11111111111111111111111','               111111111111111111111','                   11111111111111111','                                    ','                                    ','                                    ','                                    ','                                    ','                                    ','                                    '];
  }
  collide(hero){
    if(this.x-this.width*0.5<hero.x && hero.x<this.x+this.width*0.5 && this.y<hero.y && hero.y<this.y+this.height){
      return true;
    }
    else return false;
  }
  shot(i,bullet,collided_bullets){
    if(this.collide(bullet)){
      collided_bullets.push(i);
      this.life-=bullet.power;
      boss1_sound1.play();
      if(this.life<=0){
        this.dead();
      }
    }
  }
}
class boss1_body9 extends body{
  constructor(x,y,size,content,col_r,life){
    super(x,y,size,content,col_r,life);
    this.content_dead=['     00001111111111111100           ','     1000000111111111110            ','       00000011111111100            ','    1000011111111111110             ','     000001111111111100             ','    0000000011111111000             ','0000001111001111111100              ','000011111111111111100               ','1111111111111111111                 ','1111111111111111                    ','11111111111111                      ','111111111111                        ','1111111111                          ','111111                              ','                                    ','                                    ','                                    ','                                    ','                                    ','                                    ','                                    '];
  }
  collide(hero){
    if(this.x-this.width*0.5<hero.x && hero.x<this.x+this.width*0.5 && this.y<hero.y && hero.y<this.y+this.height){
      return true;
    }
    else return false;
  }
  shot(i,bullet,collided_bullets){
    if(this.collide(bullet)){
      collided_bullets.push(i);
      this.life-=bullet.power;
      boss1_sound1.play();
      if(this.life<=0){
        this.dead();
      }
    }
  }
}












//BULLET
class boss1_bullet{
  constructor(x,y,hero,size,content){
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

    this.recordCount=0;
    this.recordRate=30;
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
class boss1_big_bullet{
  constructor(x,y,hero,size,content){
    this.v=createVector(x,y)
    this.hero_v=createVector(hero.x,hero.y);
    this.speed=7*ratio;
    this.size=size;
    this.content=content;
    textSize(this.size);
    this.width=textWidth(content[0]);
    this.height=this.size*content.length;
    this.diffV=this.hero_v.sub(createVector(x,y+this.height*0.5));
    this.diffV=this.diffV.mult(this.speed/this.diffV.mag())

    this.recordCount=0;
    this.recordRate=90;
  }
  display(hero){
    fill(monster_color);
    textSize(this.size);
    textAlign(CENTER);
    for(let i=0;i<this.content.length;i++){
      text(this.content[i],this.v.x,this.v.y+i*this.size);
    }    
    if(this.recordCount>this.recordRate){
      this.hero_v=createVector(hero.x,hero.y);
      this.diffV=this.hero_v.sub(createVector(this.v.x,this.v.y+this.height*0.5));
      this.diffV=this.diffV.mult(this.speed/this.diffV.mag())
      this.recordCount=0;
    }
    this.recordCount++;
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