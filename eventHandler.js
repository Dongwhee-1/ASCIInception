function retry(){
  monsters=[];
  bosses=[];
  items=[];
  bossSpawned=0;
  respawnCount=200;
  score_record_started=0;
  score_recorded=0;
  hero.x=width*0.5;
  hero.y=height*0.8;
  gameOver=false;
}

function restart(){
  window.location.reload(true);
}

function mouseClicked(){
  if (stage == 1){
    n0 += 1;
    if (n0 >= 5) {
      setTimeout(blackOut, 3000)
    }
  }
  else if (stage == 2){
    n1 += 1;
    if (n1 >= 10) {stage = 3;}
  }
  else if (stage == 4){
    n2 += 1;
    if (n2 >= 3) {stage = 5;}
  }
  else if (stage == 6){
    n3 += 1;
    if (n3 >= 3) {stage = 7;}
  }
  else if (stage == 8){
    n4 += 1;
    if (n4 >= 3) {stage = 9;}
  }
  else if (stage == 11){
    n5 += 1;
    if (n5 >= 5) {stage = 12;}
  }
  else if (stage == 13){
    n6 += 1;
    // if (n6 >=8) {stage = 14;}
  }
  else if (stage == 14){
    n7 += 1;
    if (n7>=5){
      restart();
    }
  }
}

function keyPressed(){
  if(gameOver){
    if(key=='r' || key=='ㄱ') retry();
    else if(key=='h' || key=='ㅗ') restart();
  }
  if(key=='p' || key=='ㅔ') fullscreen(true);
  if (stage == 0 && key=='Enter'){
    press_enter.play();
    stage = 1;
    if (n0 >= 5) {
      setTimeout(blackOut, 3000)
    }
  }
  if (stage == 1 && key=='Enter'){
    press_enter.play();
    n0 += 1;
    //if (n0 >= 6) {stage = 2;}
  }
  else if (stage == 2 && key=='Enter'){
    press_enter.play();
    n1 += 1;
    if (n1 >= 10) {stage = 3;}
  }
  else if (stage == 4 && key=='Enter'){
    press_enter.play();
    n2 += 1;
    if (n2 >= 3) {stage = 5;}
  }
  else if (stage == 6 && key=='Enter'){
    press_enter.play();
    n3 += 1;
    if (n3 >= 3) {stage = 7;}
  }
  else if (stage == 8 && key=='Enter'){
    press_enter.play();
    n4 += 1;
    if (n4 >= 3) {stage = 9;}
  }
  else if (stage == 11 && key=='Enter'){
    press_enter.play();
    n5 += 1;
    if (n5 >= 5) {stage = 12;}
  }
  else if (stage == 13 && key=='Enter'){
    press_enter.play();
    n6 += 1;
    //if (n6 >=7) {stage = 14;}
  }
  else if (stage == 14 && key=='Enter'){
    press_enter.play();
    n7 += 1;
    if (n7>=5){
      restart();
    }
  }
}

function calc_shot(hero,bullets,monsters,items){
  let collided_bullets=[];
  let dead_monsters=[];

  for(let i=0;i<bullets.length;i++){
    for(let j=0;j<monsters.length;j++){
      for(let k=0;k<monsters[j].bodies.length;k++){
        if(monsters[j].bodies[k].life>0){
          monsters[j].bodies[k].shot(i,bullets[i],collided_bullets);
        }
      }
    }
  }
  
  //calculate if monster is dead
  for(let i=0;i<monsters.length;i++){
      let dead=true;
      for(let j=0;j<monsters[i].bodies.length;j++){
        if(monsters[i].bodies[j].life>0) dead=false;
      }
      if(dead) dead_monsters.push(i);
    }
  
  //delete collided objects
  for(let i=collided_bullets.length-1;i>=0;i--){
    bullets.splice(collided_bullets[i],1);
  }
  for(let i=dead_monsters.length-1;i>=0;i--){
    monsters[dead_monsters[i]].drop_item(items);
    monsters.splice(dead_monsters[i],1);
    hero.score++;
  } 
}

function calc_gameOver(hero,monsters){
  for(let i=0;i<monsters.length;i++){
    for(let j=0;j<monsters[i].bodies.length;j++){
      if(monsters[i].bodies[j].life<=0) continue;
      if(monsters[i].bodies[j].collide(hero)) gameOver=true;
      for(let k=0;k<monsters[i].bullets.length;k++){
        if(monsters[i].bullets[k].collide(hero)) gameOver=true;
      }
    }
  }
}

function get_item(hero,items){
  let used_items=[];
  
  for(let i=0;i<items.length;i++){
    if(items[i].x-items[i].width*0.5-hero.col_r<hero.x && hero.x<items[i].x+items[i].width*0.5+hero.col_r && items[i].y-hero.col_r<hero.y && hero.y<items[i].y+items[i].height+hero.col_r){
      items[i].effect(hero);
      used_items.push(i);
    }
  }
  for(let i=0;i<used_items.length;i++){
    items.splice(used_items[i],1);
  }
}

function respawn_monsters(monsters,n,width,height){
  let p1,p2,p3,p4,x,y;
  for(let i=0;i<n;i++){
    p1=round(random(0,1));
    p2=round(random(0,1));
    p3=round(random(0,1));
    x=p1*random(width)+(1-p1)*(p2*0+(1-p2)*width);
    y=(1-p1)*random(height)+p1*(p3*0+(1-p3)*height);
    
    p4=round(random(0,0));
    if(p4==0) monsters.push(new Bug1(x,y));
  }
}

function delete_bullets(bullets,width,height){
  let bullets_out=[];
  for(let i=0;i<bullets.length;i++){
    if(bullets[i].x+bullets[i].col_r<0 || bullets[i].x-bullets[i].col_r>width || bullets[i].y+bullets[i].col_r<0 || bullets[i].y-bullets[i].col_r>height){
      bullets_out.push(i);
    }
  }
  for(let i=0;i<bullets_out.length;i++){
    bullets.splice(bullets_out[i],1);
  }
}

function delete_monster_bullets(monster_bullets,width,height){
  let monster_bullets_out=[];
  for(let i=0;i<monster_bullets.length;i++){
    if(monster_bullets[i].v.x-monster_bullets[i].width>width || monster_bullets[i].v.x+monster_bullets[i].width<0 || monster_bullets[i].v.y>height || monster_bullets[i].v.y+monster_bullets[i].height<0){
      monster_bullets_out.push(i);
    }
  }
  for(let i=0;i<monster_bullets_out.length;i++){
    monster_bullets.splice(monster_bullets_out[i],1);
  }
}