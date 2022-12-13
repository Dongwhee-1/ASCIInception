function show_boss1_dead(x,y,content,size,col){
	fill(col);
	textSize(size);
	textAlign(CENTER);
	for(let i=0;i<content.length;i++){
		text(content[i],x,y+i*size);
	}
}

function boss1_dead(){
    let size=10*ratio;

    textSize(size);
    let part2=['                       1000000000000','                    0000000011111110','                    000000000011111110','                00001111111111111111','              1000111111111111111111','             00011111111111111111111','           1000111111111111111111111','          10011111111111111111111111','         100111111111111111111111111','        0001111111111111111111111111','       10011111111111111111111111111','       00111111111111111111111111111','      001111111111111111111111111111','     0001111111111111111111111111111','     0011111111111111111111111111111','    00111111111111111111111111111111','   001111111111111111111111111111111','   001111111111111111111111111111111','  1001111111111111111111111111111111','  0011111111111111111111111111111111','  0011111111111111111111111111111111'];
    let part3=['0001                                ','0000000                             ','1111000001                          ','11111110000                         ','1111111110000                       ','11111111111000                      ','1111111111110001                    ','11111111111111000                   ','111111111111111000                  ','1111111111111111000                 ','11111111111111111000                ','111111111111111111001               ','111111111111111111100               ','1111111111111111111100              ','11111111111111111111101             ','11111111111111111111100             ','111111111111111111111100            ','111111111111111111111100            ','1111111111111111111111100           ','1111111111111111111111100           ','1111111111111111111111100           '];
    let part4=['                                    ','                                    ','                                    ','                                    ','                                    ','                           100001   ','                         10000 001  ','                        000100  00  ','                      100   00   0  ','                     00000   00  00 ','                    100 101  10   0 ','                    00   10       00','                   0001   00      00','                  00 000   1      10','                 10   100         10','                 000    00         0','                 00000             0','                10  000           10','                10                10','                101               00','                 001              00'];
    let part5=[' 10111111111111111111111111111111111',' 00111111111111111111111111111111111',' 00111111111111111111111111111111111','101111111111111111111111111111111111','001111110011111111111111111111111111','00111100  01111111111111111111111111','0011110    0111111111111111111111111','0011110    0111111111111111111111111','00111100  01111111111111111111111111','001111100011111111111111111111000111','001111111111111111111111111100000001','00111111111111111111111111110     00','0011111111111111111111111110       0','0011111111111111111111111110       0','0011111111111111111111111100       0','0011111111111111111111111000       0','10111111111111111111111000000      0',' 001111111111111110000000   00   00 ',' 001111111111110000000000    10001  ',' 101111111111111011000  1      0    ','1 0011111111111111100          01   '];
    let part6=['11111111111111111111111100          ','11111111111111111111111100          ','11111111111111111111111110          ','111111111111111111111111100         ','111111111111111110011111100         ','11111111111111100  01111100         ','1111111111111110    0111100         ','1111111111111110    0111100         ','11111111111111100  01111100         ','111111111111111100011111100         ','111111111111111111111111100         ','111111111111111111111111100         ','111111111111111111111111100         ','011111111111111111111111100         ','001111111111111111111111100         ','000011111111111111111111100         ','  0000111111111111111111100         ','    0001111111111111111110          ','    000000000011111111110000        ','    011001000111111111110000000     ','       00111111111111110001000000   '];
    let part7=['                  000          00000','                    000        00011','                     100000000001111','                         10000011111','                             0001111','                             0001111','                             0000111','                             1000111','                              000011','                              000011','                               00001','                               00000','                               00000','                                0000','                                0000','                                 000','                                 100','                                  00','                                   0','                                    '];
    let part8=['0 0011111111111111100100       01   ','00100111111111111000000        01   ','100001111111111100000  1       00   ','100000111111111111110000      0001  ','11000011111111111100000      10000  ','111000011111111110000000    10011001','111100001111111110011100000000111100','111110001111111111111111000001111110','111111000111111111111111111111111111','111111100011111111111111111111111111','111111110011111111111111111111111111','111111111111111111111111111111111111','111111111110011111111111111111111111','111111111111000011111111111111111111','011111111111110000011111111111111111','011111111111111000000001111111111111','001111111111111110000000000000000000','000111111111111111000000000000000000','000011111111111111111000000000000000','000000111111111111111100000000000000','                                    '];
    let part9=['     0000111111111111110011111000   ','     1000000111111111110011111100   ','       00000011111111100011111100   ','    10000111111111111100111111100   ','     0000011111111111001111111000   ','    00000000111111110001111111000   ','000000111100111111110011111110000   ','00001111111111111110011111110000    ','11111111111111111110111111110000    ','11111111111111111000111111100000    ','11111111111111110011111111100001    ','1111111111111100011111111100000     ','1111111111110000111111111000001     ','111111111100000111111111100000      ','11111110000000111111111100000       ','11100000000011111111111000000       ','0000000000011111111111100000        ','0000000001111111111111000001        ','000000011111111111111000000         ','00000011111111111111000000           ','                                    '];

    let dead_width=textWidth(part2[0]);
    let dead_height=size*part2.length;

    show_boss1_dead(respawn_x,respawn_y-dead_height,part2,size,monster_color);
    show_boss1_dead(respawn_x+dead_width,respawn_y-dead_height,part3,size,monster_color);
    show_boss1_dead(respawn_x-dead_width,respawn_y,part4,size,monster_color);
    show_boss1_dead(respawn_x,respawn_y,part5,size,monster_color);
    show_boss1_dead(respawn_x+dead_width,respawn_y,part6,size,monster_color);
    show_boss1_dead(respawn_x-dead_width,respawn_y+dead_height,part7,size,monster_color);
    show_boss1_dead(respawn_x,respawn_y+dead_height,part8,size,monster_color);
    show_boss1_dead(respawn_x+dead_width,respawn_y+dead_height,part9,size,monster_color);
}
