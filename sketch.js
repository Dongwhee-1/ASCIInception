let width,height;
let ratio;
let stage=0;

//game var
let hero;
let monsters=[];
let bosses=[];
let items=[];
let respawnCount=150;
let respawnRate=300;
let respawnNumber=5;
let bossSpawned=0;
let score_record_started=0;
let score_recorded=0;
let respawn_x,respawn_y;
let monster_color,background_color;

//sound
let boss1_sound1,boss1_sound2;
let boss2_sound1,boss2_sound2,boss2_2_sound1;
let boss3_sound1,boss3_sound2,boss3_sound3,boss3_sound4;
let ost_boss,ost_monster,ost_boss3;
let hit_sound;
let cut_sound1,cut_sound2,cut_sound3,cut_sound4;
let dead_short,dead_long;
let press_enter;


//image
let img1; //데스크탑 화면
let img2; //과제 화면
let img_hero;
let img_boss2_1,img_boss2_2,img_boss2_3,img_boss2_4,img_boss2_2_dead;
let muyaho;
let muyaho_transformed,muyaho_transformed_dead;
let escape;



//scenes var
let wave = 0; //제목 sin함수 관련
let out = 255;
let n0 = -1; //다이얼로그 카운터 0
let n1 = -1; //다이얼로그 카운터 1
let n2 = 0; //다이얼로그 카운터 2
let n3 = 0; //다이얼로그 카운터 3
let n4 = 0; //다이얼로그 카운터 4
let n5 = 0; //다이얼로그 카운터 5
let n6 = 0; //다이얼로그 카운터 6
let n7 = 0; //다이얼로그 카운터7
let ran1 = 0; //랜덤 변수
let ran2 = 0; //랜덤 변수2
let whiteOut = 1;
let webcamCount = 0;
let intime; //타이머용
let outtime; //타이머용2
let cam; //웹캠
let frame_recorded=0;
let frame_record_started=0;
let dead_n=0;
let dead_short_n=0
let dead_long_n=0;
let gameOver=false;


function preload() {
  img1 = loadImage('/assets/img1.png');
  img2 = loadImage('/assets/img2.png');
  img_hero = loadImage('/assets/img_hero.png');
  img_boss2_1 = loadImage('/assets/img_boss2_1.png');
  img_boss2_2 = loadImage('/assets/img_boss2_2.png');
  img_boss2_3 = loadImage('/assets/img_boss2_3.png');
  img_boss2_4 = loadImage('/assets/img_boss2_4.png');
  img_boss2_2_dead = loadImage('/assets/img_boss2_2_dead.png');
  muyaho = loadImage('/assets/muyaho.jpg');
  muyaho_transformed = loadImage('/assets/muyaho_transformed.png');
  muyaho_transformed_dead = loadImage('/assets/muyaho_transformed_dead.png');
  escape = loadImage('/assets/escape.png');
  boss1_sound1 = loadSound('/assets/boss1_sound1.mp3');
  boss1_sound2 = loadSound('/assets/boss1_sound2.mp3');
  boss2_sound1 = loadSound('/assets/boss2_sound1.mp3');
  boss2_sound2 = loadSound('/assets/boss2_sound2.mp3');
  boss2_2_sound1 = loadSound('/assets/boss2_2_sound1.mp3');
  boss3_sound1 = loadSound('/assets/boss3_sound1.mp3');
  boss3_sound2 = loadSound('/assets/boss3_sound2.mp3');
  boss3_sound3 = loadSound('/assets/boss3_sound3.mp3');
  boss3_sound4 = loadSound('/assets/boss3_sound4.mp3');
  ost_boss = loadSound('/assets/ost_boss.mp3');
  ost_monster = loadSound('/assets/ost_monster.mp3');
  ost_boss3 = loadSound('/assets/ost_boss3.mp3');
  hit_sound = loadSound('/assets/hit_sound.wav');
  cut_sound1 = loadSound('/assets/cut_sound1.mp3');
  cut_sound2 = loadSound('/assets/cut_sound2.mp3');
  cut_sound3 = loadSound('/assets/cut_sound3.mp3');
  cut_sound4 = loadSound('/assets/cut_sound4.mp3');
  dead_short = loadSound('/assets/dead_short.wav');
  dead_long = loadSound('/assets/dead_long.wav');
  press_enter = loadSound('/assets/press_enter.mp3');
  // menlo = loadFont('/Menlo-Regular.otf');
}

function setup() {
  width=displayWidth;
  height=displayHeight;
  // width=1920;
  // height=1080;
  ratio=width/2560;
  createCanvas(width,height);
  noStroke();
  // textFont('monospace');
  textFont("Menlo");
  noCursor();
  
  respawn_x=width*0.5;
  respawn_y=height*0.5;
  monster_color=color(0, 255, 65);
  background_color=0;
  
  hero = new Hero(0.5*width,0.8*height);
  
  capture = createCapture(VIDEO);
  capture.hide();
  cam = capture;

  boss1_sound1.playMode('untilDone');
  boss2_2_sound1.playMode('untilDone');
  boss3_sound4.playMode('untilDone');
  ost_boss.playMode('untilDone');
  ost_monster.playMode('untilDone');
  ost_boss3.playMode('untilDone');
  cut_sound1.playMode('untilDone');
  cut_sound2.playMode('untilDone');
  cut_sound3.playMode('untilDone');
  cut_sound4.playMode('untilDone');
  ost_monster.setVolume(1.5);
  boss2_sound1.setVolume(2);
  boss2_sound2.setVolume(1.5);
}

function draw() {
  if(gameOver){
    boss1_sound1.stop();
    boss1_sound2.stop();
    boss2_sound1.stop();
    boss2_sound2.stop();
    boss2_2_sound1.stop();
    boss3_sound1.stop();
    boss3_sound2.stop();
    boss3_sound3.stop();
    boss3_sound4.stop();
    ost_boss.stop();
    ost_monster.stop();
    ost_boss3.stop();
    hit_sound.stop();
    cut_sound1.stop();

    fill('red');
    textSize(300*ratio);
    textAlign(CENTER,CENTER);
    text('Game Over',0.5*width,0.5*height);

    rectMode(CENTER);
    fill('yellow');
    // rect(width*0.5,height*0.75,width*0.1,height*0.05);
    fill('yellow');
    textAlign(CENTER,CENTER);
    textSize(60*ratio);
    text('\'R\'etry',width*0.5,height*0.7);
    fill(255);
    // rect(width*0.5,height*0.8,width*0.1,height*0.05);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(60*ratio);
    text('\'H\'ome',width*0.5,height*0.75);
  }
  else{
    fill(0, 255, 65);
    rectMode(CENTER);
    imageMode(CENTER);
    textAlign(CENTER);
    textSize(30);
  
    if(stage==3 || stage==5 || stage==7 || stage==9 || stage==10 || stage==12){
      background(background_color);
      

      //items
      for(let i=0;i<items.length;i++) items[i].display();
      
      //hero
      hero.display();
      hero.move();
      hero.shoot();
      
      //monsters & bosses
      for(let i=0;i<monsters.length;i++){
          monsters[i].display(hero);
          monsters[i].move(hero);
          monsters[i].shoot(hero);
        }
      for(let i=0;i<bosses.length;i++){
          bosses[i].display(hero);
          bosses[i].move(hero);
          bosses[i].shoot(hero);
        }
      
      //events
      calc_shot(hero,hero.bullets,monsters,items);
      calc_shot(hero,hero.bullets,bosses,items);
      get_item(hero,items);
      calc_gameOver(hero,monsters);
      calc_gameOver(hero,bosses);
      delete_bullets(hero.bullets,width,height);
      for(let i=0;i<monsters.length;i++){
        delete_monster_bullets(monsters[i].bullets,width,height);
      }
      for(let i=0;i<bosses.length;i++){
        delete_monster_bullets(bosses[i].bullets,width,height);
      }

      // respawn monsters
      if(respawnCount>=respawnRate){
        respawn_monsters(monsters,20,width,height);
        respawnCount=0;
      }
    }

    if (stage == 0) stage0();
    else if (stage == 1) stage1();
    else if (stage == 2) stage2();
    else if(stage==3) stage3();
    else if (stage == 4) stage4();
    else if(stage==5) stage5();
    else if(stage==5.5) stage55();
    else if (stage==6) stage6();
    else if(stage==7) stage7();
    else if (stage==8) stage8();
    else if(stage==9) stage9();
    else if(stage==10) stage10();
    else if(stage==10.5) stage105();
    else if (stage == 11) stage11();
    else if(stage==12) stage12();
    else if(stage==12.5) stage125();
    else if (stage==13) stage13();
    else if (stage==14) stage14();
  }
}
