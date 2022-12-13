
//ITEM
class item extends Objects{
  constructor(x,y,m){
    super(x,y);
    this.size=20*ratio;
    this.mode=m;
    
    if(m==0) this.content='Power()';
    else if(m==1) this.content='Speed()';
    else if(m==2) this.content='shootRate()';
    else if(m>=3){
      this.content='shootMode()';
      this.mode=round(random(2.5,5.5));
    }
    this.width=textWidth(this.content);
    this.height=this.size;
  }
  display(){
    if(this.mode==0) fill('red');
    else if(this.mode==1) fill('green');
    else if(this.mode==2) fill('blue');
    else if(this.mode>=3) fill('pink');
    
    textSize(this.size);
    textAlign(CENTER);
    text(this.content,this.x,this.y);
  }
  effect(hero){
    if(this.mode==0){
      hero.shootPower+=1;
    }
    else if(this.mode==1){
      hero.speed+=0.2*ratio;
    }
    else if(this.mode==2){
      if(hero.shootRate>15){
        hero.shootRate-=0.5;
      }
    }
    else if(this.mode==3){
      hero.shootMode=0;
    }
    else if(this.mode==4){
      hero.shootMode=1;
    }
    else if(this.mode==5){
      hero.shootMode=2;
    }
  }
}