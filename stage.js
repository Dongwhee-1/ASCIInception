let data0 = ["나: 평소와 다름없는 월요일. 나는 오늘도 정문기입 과제를 위해 열심히 컴퓨터를 두드리고 있다.", "나: 이번에 내가 만들고 있는 과제는 랜덤 밈 생성기, 보노보노와 잔망루피, 무야호 할아버지 등이 나온다.", "나: 헤헤 이렇게 레퍼런스 코드를 베껴서 쓰니 p5.js도 식은 죽 먹기잖아? 이제 실행을 해보면...", "나: …?!?! 웹 에디터가 왜 멈췄지?","나: 컴퓨터도 흔들리잖아…! 이러다간…으아악!", ""]
let data1 = ["나: 여기가...어디요","???: 자네가 이 과제의 주인인가.","나: 앗! 무야호 할아버지…!","무야호 할아버지: 논…과제를 소중히 하지 않았쥐.","나: 말투는 왜 그러세요…!","무야호 할아버지: 그래서 과제가 무한 루프에 빠졌고…너까지 빨려들게 된 고야.","나: 그러고 보니 내 모습이…!","무야호 할아버지: 어서 error code들과 bug들을 물리치라고. 만냑 구룩케 못하면…자네눈 과제를 일케 되겠치. 자네도 Web Editor에 갇힐거야…아패로도 계속..","나: 그럴 순 없어! 빨리 몰려오는 버그들을 물리치자!","무야호 할아버지: 흩어져있는 함수들을 잘 주워서 활용하게…자네눈 강해질 수 있숴.. \n"]
let data2 = ["이 소리는…!", "자네가 만든 붜너붜너야..무한 루프에 빠져 이성을 잃었지...", "안 돼…! 빨리 이성을 되찾도록 기절시켜야겠어!"]
let data3 = ["와! setup()! p5.js의 시스템 함수!", "자네의 모습도 조금씩 돌아오고 있군...", "나: 앗 그렇네요! 좋았어, 조금만 더 힘내보자!"]
let data4 = ["이번엔...잔망루피네요", "잘 알고 있군..빨리 좡뫙루피를 해방시켜주게", "알겠습니다! 미안해 잔망루피!"]
let data5 = ["와! draw()! 또 다른 시스템 함수!", "...", "갑자기 왜 말이 없으시죠?", "...무야~~호~~@#$!\n1101101 1110101 1111001 1100001 1101000 1101111", "나: 앗 무야호 할아버지마저...! 빨리 쓰러뜨려야해!"]
let data6 = ["나: 하...할아버지 괜찮으세요!?", "무아호 할아버지: 괜찮을리가...좌네가 날 아작냈자나", "나: 흑...죄송해요!", "무야호 할아버지: 괜촤나...우린 코드로 이루어진 존재...과제가 무사하니 무한 루프가 풀리면 다시 나타날고야", "나: 그 뜻은...!", "무야호 할아버지: 논...자유의 모미 마자...빨리 이 곳을 떠나게", "나: 하지만 전 마음의 준비가...!"]
let data7 = ["", "나: ...", "나: 뭐지...뭔가 굉장한 악몽을 꾼 것 같은 느낌이야.", "나: 음...", "나: 아무래도 과제, 더 열심히 해서 내야겠어."]
let muyahoImage = "lodddddddddddddddddddddddddddddddddddddoooooooooooooooooooollc:,'....................,:cccclllllllllloooooddddddddx0KKK0OkOOOkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\nldkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxxxxddddddoc;,.............. .....':loooooooooddddddxxxxxkkkkxk0NWMMNXKKKKKKKKKKKKKKKKKKKKKK00000KKKKKKKKKKKK00KK000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKK000000000000000000000000000000000K000000000000000000000000000000000000000000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKXXXXXXXXKKXk\nldkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxxxxdddddol:,.............. ......;loooooooodddddddxxxxxxkkkkkKWMMMWXKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0000000000000000KKKKKK00000000KKKKKK0000000000KKKKKKKK00000000000000000000000000000000000000000000000000000000000000KKKK0000000000000000000000000000000000000000000000000KK000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKXXXXXXXXXKXk\nldkkkkkkkkkkkkkkkkkkkkkkkkkxkkkkkxxxxxxxxxxxxxxxxxxxxxxxdddddoc;'.............. ......;cooooooooodddddddxxxxxkkkkkKWMMMWXXXXXKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK000000000000000000K00000000000KKKKKK00000000000K000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKXXXXXXKXk\nldkkkkkkkkkkkkkkkkkkkkkkkxxxxxkkxxxxxxxxxxxxxxxxxxxxxxxxdddddl:,............... ......,cllloooooooddddddxxxxxxkkkkKWMMMWNXXXXXXKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0000000K0000000000000K0000000000KKKKKKK0KK000000K00000000000000000000000000000000000000000000000000000000000000000000KK000000000000000000000000000000000000KK0000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKXk\nldkkkkkkkkkkkkkkkkkkkkkkkxxxxxkxxxxxxxxxxxxxxxxxxxxxxxxdddddol:,......................':lllloooooooddddddxxxxxxxxk0WMMMWNXXXXXXXXXKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0000000000000000000000000000000000KKK00000000000K0000000000000000000000000000000000000K00000000000000000000000KK0000000000000000000000000000000000000000000000000000KKKKKKKKKK0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKXk\nldkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxxxxxxdddddoc;'.......................;clllooooooooddddddxxxxxxxkKWMMMWNXNXXXXXXXXXXXXKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK000000000000000000000000000000000000000000000000K00000000000000000000000000000000000000KKKKK0000000000000000000KKK000000000000000000000000000000000000K0000000000000KKKKKKKK0000000000KKK000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKXk\nlxkkkkkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddoc;'.......................,clllloooooooddddddxxxxxxxkKWMMMWNNNNNNXXXXXXXXXXXXKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK00K0000000000000000000000000000000000000000000000000000000000000000000000KKKK00000000000KKKKKKK000000000000000000000000000000000000000000000000000000000000000K0000KKKKKK000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKXk\nlxOkkkkkkkkkkkkkkkkxkkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddoc;'................'..,;;'':llllooooooodddddddxxxxxxkKWMMMWNNNNNNNXXXXXXXXXXXXKKKKXXXXKKKKKKKKKKKKKKKKKKKKKKKK000000KK0000000000000KKK00000000000000000000000000000000000000000000000KKKK000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKKK000000000000000000000000KKKKKKKKKKKKKK000KKKKKKKKKKKKKKKKKKKKXk\nldkkkkkkkkkkkkkkkkkxxxxxxxxxxxxkxxxxxxdddxxxxxxxxxxxxdddddddoc:,...............:ododdl,.;llloooooooooddddddxxxxxxkXWMMMWNNNNNNNNNXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKKKKKKKKK000KKK00000000000000000K000000000000000000000000000000000000000000000000KKK00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000K0000K000000KK000KKKKKKKKKKKKKKXk\nldkkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxxdlok0KKK00OOkkkxxddooooooooool,...........,okkkxl,.,clllooooooooddddddddxxddkXWMMMWNNWWNNNNNNNXXXXXXXXXXXXXXXXKKKKKXKKKKKKKKKKKKKKKKKKK0KKK000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000K0000KKKKKKKKKKKKKXk\nldkxkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxxoocckXXXXXKK00OOkxdoollloxxxxkxc'.........':dOOkkxl;,:lllooooooddodddddddxdddkKWMMMWNWWWNNNNNNNXXXXXXXXXXXXXXXXXKKKXXXXXKKKKKKKKKKKKKKKKKKKKKK0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKKKKKKKKKKKKKKKKKXk\nldkxkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxdoooc:xKKXKKK00OOkxdooooodxxO000kd;.........,codxkxoc;,:looooooooodooddddddddddkKWMMWWWWWWWWNNNNNNNXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKKKKKKKKK000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKKKKKKKKKKKKKKKKKKKKXk\nldkxkkkkkkkkkkkkxxxxxxxxxxxxxxxxxdoooo:;lOKKK00000OOkkxxxxdx0XXXXKK0dcoddddddddddxkO0kddxkOOOOOOOOO00OOO0000000000XNWWWNNNNNNNNNNNNNNNNXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKKKK0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000K0KKKKKKKKKKKKKXk\nldkxkkkkkkkkkkkkxxxxxxxxxxxxxxxxdodddoc:cx00000K0kxdoollclcl0XKKKKKXOdOKKKKOkkO00kOKX0O0KKO0NK000KX00XNXKXXXX0KNXNWN0kKWNKNWWNNNWWKKNNNNNNXNNXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKKKKK00000000000000000000K0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKKKKKKKKKKKXk\nldkxkkkkkkkkkkkkxkxxxxxxxkxxkxddxkkxxocccokOOK0kddoooooodollkOkk0KKOocxKKK0o:,,xk;oXKd;dX0:c0d;ccokc:KNxdOokKcdNNNXxc;oKOcxN0dolkXdoNWNNNNNNNNNNNXXXXXXXXXXXXKKKKKKKKKKKKKKKKKK000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKKKKKKKKKKKKKKKKKKXk\nldkkkkkkkkkkkkkkxkxxxkkkxxkkkk0KXKKKkooollxO0Kkdk0kxOkdk0OxkOkkOkkkocclxKKKOl,:0O,o0d'.,xk',kl;xkl:.;KNlck:oK:oNNNKo,';Ok,oXNXk;oXllNWNNNNNNNNNNNNNXXXXXXXXXXXXXXKKKKKKKKKKKKKK00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000K00000KKKKKKKKKKKKKKKKKKKKKKKXk\nldkkkkkkkkkkkkkkkkxxxxxkxxxxkKXXXKK0xoddoldkKKkxOK0k0KOxxxddkxddddxdccclkK0l';oxl,dOllo;;c;dXx;;;:o:cK0;.;.:k:oNNN0ololddc0WW0ll0NllNNXNNNNNNNNNNNNNNNNXXXXXXXXXXKKKKKKKKKKK0000000000000000000000000000000000000000000000000000000000000KKKKKKK00000000000000KKKKKK0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000K00000KKKKKKKKKKKKKKKKKKKKKKKXk\nldkkkkkkkkkkkkkkkkkxxxxxxkOO0XK0OOOOxdxxdolxKXOkkkxdxkxoooddxddlcdkdcllldOKx'.;:'.dXO:,:c;'oXKdcclc'cKxcc;:ld;oNXXNKd:,,:dKNOldKWNolXNKXNNNNNNNNNNNNNNNNNXXXXXXXXKKKKKKKKKKKKK00000000000000000000000000000000000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKKK00000KKKKKKKKKKKKKKKKKKKKKKKXk\nldkkkkkkkkkkkkkkkkxxxxxxxkKXKKKOddkkdxkxxdld0X0OkxkkxxkkxxkdoodocdkdlloddxOk;,::;;dKOc,:c;;dXXKKKK0llKXXXKKX0ldXXXNKxoddldKWXXNWWNddXX0XWNNNNNNNNNNNNNNNNXXXXXXXXKKKKKKKKKKKKKKK00000000000000000000000000000000000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKKKK000000KKKKKKKKKKKKKKKKKKKKKKKKXk\nldkxkkkkkkkkkkkkkkxxkxxddkKKKXK0kkOxdkkxxdllkXXKxlk0xokOxxkxdodkxkdlooddxxdxkkxkkkO000kxxkOKKKKKKKK00KKKKKKKK00KKKXXKXXXKKXXXNXXXXKKK00NWWNNNNNNNNNNNNNNNNXXXXXXKKKKKKKKKKKKKKK000000000000000000000000000000000000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKK000KKKKKKKKKKKKKKKKKKKXx\nldkxkkkkkkkkkkkkkkkkxxddk000000KKK0dxOkkxdolo0NXK0KKOOOOOkkxxxdddoloodxxxocccllllllllodkkxdxxxxxxxxxxxkkxxxxxxxxxkOKXKKKKKKKKKKKKKKK0KXWWWNNNNNNNNNNNNNNNNNNNNNNXXXXXXXKKKKKKK0000000000000000000000000000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKKKKKKKKKKKKKKKKKKx\nldkxkkkkkkkkkkkkkxkkxddxkOOOkxxkO0kdkOkkxxdolxXXXXK0000OOOkkxxdooooddol:,'...........;lxxdlclloooooooooodoooooooodKWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNX0OOkxxxxxkkOOO0KKKKKKKK0000000000000000000000000000000000000000000KK0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKK00Kx\nldkxkkkkkkkkkkkkkkkkxxxxxkkkkkkkOkoxOOkkkxdolo0NXXKKKKK000OOkkxddolc;'........''......,coollllllooooooooooooooooldKWMMMMWWMMMMMMMMWWWWWWWWWNNNNNNWWWNXKOxdoc::;;::::cllllc:::lodxO00KKKK0000000000000000000000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000Kx\nldkxkkkkkkkkkkkkkkkxxxxxxxxxkkkkOxdkOOOkkxxddlxXNXXXXXKKKKK0Okdc;'............,,........;:::cllllooooooooooooooold0WMMMMWWMMMMMMMMWWWWWWWWWNNWWWNXKOxollc:::::cccc:;;;;;;;,,'....',;coxkO0KKK000000000000000000000000000000KK000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000Kx\nldkxkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxkkkkkkkxxdoONNNNNNXKK0Okdl,..........................,,,:lllloooooooooooooolldKWMMMMWWMMMMMMMMMMWWWWWWWWWN0xddllclllccclllllodollcc:;;;:cl:,........';lkKK00000000000000000000000000000KK00KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKK0Kx\nldkxkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxxxxxxxxxxdx0KK00OOkxddooc'............................';clllloooooooooooolllo0WMMMMMMMMMMMMMWMMWWWWWWNKxl:::ccccloodddoooddo:,',,;clollodl;...........'cx0K00000000K000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK00000000000000000000000000000000000000000000000000000000000000000000000000000OOOO0000000000000000000000000000000000000000000000000KKKKKK0Kx\nldkxkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxxxxxxxxxxxdxxxdddddddddo:'.............................;clllllooooooooooollloOWMMMWWWWMMMMMMWWWWWWWXkl::cc::clllodddddoodddl;......,oxxkkd;..............:k00000000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK000000000000000000000000000000000000000000OOOO0000000000000000000000000000OOOOOOOO00000OOOO00000000000000000000000000000000000000000KKKK0Kx\nldkxkkkkkkkkkkkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddol;..............................,clllllooooooooooollloONMMMWWWMMMMMMWWWWWN0o;',coolllooddddddoolooooodocccclodddkkd:...............,d0K00000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0000000000000000000000000000000000000000OOOOO000000000000000000000000000OOOOOOOOOO00OOOOOOOOOOO00000000000000000000000000000000000000KK0Kx\nldkxkkkkkkkkkxxxxxkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddo:'..............................':lllloooooooooooollloONMMMWWWWMMMMMWWWNOl,''.,looodxxkxdolccccc:::cccc:::;;;;:lodo;................'o0000000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK00000000000000000000000000000000000000000OOOOO0000000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000000000000000000000000KKK0Kx\nldkxkkxkkkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddl;...............................,clllloooooooooooollloONMMMWNNWWMMMMWNOl'''''.,lxkkkxolc:;:clll:;;;:;,....    ....'...................cO00000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK00000000000000000000000000000000000000000OOOOOOO0000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000000000000000000000000000000KKKKKKx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddddl;...............,,'.,:c;........,clllloooooooooooollloONMMMWNNWWWWWMXd,'',''..;okko:'..''''''''',;,;::ccccc:;;;,.......................ck0000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK000000000000000000000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000000000000000000000000000000KKKKKKx\nldkxxkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddol;..............'cxxdxxo,........':lllloooooooooooollllkNMWWWNNNWWWWXo'.,,'''.';c:'......................',;;;:c:,......................'lO0000000000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0000000000000000000000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0OOOOOOOO0000000000000000000000000000000000000000000KK0Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddddoc:;:;'...........;dkOOOxl,.......'collloooooooooooollclkNWWWNXXNNWWNx,',,'''''.........                       ...........................,d000000000000000KKK0KKKKKKKKKKKKKKKKKKKKKKKKKKKKXKKKKKKKKKKKKKKKKKK00000000000000000000000000000000000O000OOOOOOOOOOOO0000000000OOOOOOO000OOOOOOOOOO000000000000000000000000000000000000000000000000KKKK0Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddddol;',:cc,.........,okOOOOOOxo:'.....:lolooooooooooooollclkXWWWNXXNNWW0:.,,,,''.....                .  ..          ..........................cOK0000000000000KKKKKKKKKKKK000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK00000000000000000000000000000000000000000OOOOOOOOOOO000000000000O00000000OOOOOO00000000000000000000000000000000000000000000000000KKKKKKKx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddddol,....''........':cloxkxc,'''.......;cllooooooooooolllccdKWWNXXXXNNNx,',,''...   .       ...........................  .....................,d0K000000000000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK00000000000000000000000000000000000000000000000000000000000000000000000000OOOO000000000000000000000000000000000000000000000000000KKKKK0Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddooc'....'..............;ol,...........':lllooloooooooollccdKWWWNKKXXNXd'''.... .         ...............................    ..................cOK000000000000KK00KKKKKKKKKKKKKKKKKKKKKKKKKKKXXXXKKKKKKKKKKKKKKKK000K0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKKKK0Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddddoo:'....................,,'............,clllllooooooolllccxKWWWNK0KXNKo'.....         .....................................     ..............;xKKK00000K000KKKK0KKKKKKKKKKKKKKKKKKKKKKKKXK0OO0KXKKXK0000KKKKKKKKKKKKKK00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000KKKK0Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddddol;..........................'''.......':lllllllooolllllccxKNWNNK00K0l......        ..............'''''''''''''................    ...........'o00K00000K0000KKK000KKKKKKKKKKKKKKKKXXXKKXXkooodx0XXKOdddxOKKKKKKKKKKKKKK0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000K0Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddddol;.........................;:;;,'......;cllllllooolllllccd0XNNXKK0d,. ....        ...........''''',,,,,,,,,,,,,,,,,''''..........    ........'lkOK000000000000KKKKKKKKKKKKKKKKKKKKKKKKKXXd:lolclkX0dlddox0KKKKKKKKKKKK0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddddol;........................colc:;,'.....,cllllllooololllccokOO0KKOl. ...          ...........'',,,,;;;;;;;;;;;;;;;;;,,,,'''''.........   ......:dOK0000000000000K00KKKKKKKKKKKKKKXXXXXXKXXk::llc:cxxooddooOKKKKKKKKK000000000000000000000000000000000000000000000000000000OOO0000000000000000000000000000000000000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddddooc,............',''.......:ddoolc::'.....;clllllloolllllcloddddk0o. ..           ..............',;;::::::::::::::;,'............'''.......  ...,cxK0000000000000000KKKKKKKKKKKKKXX0kkOKXXXKo;:lc:;:cloooooxKKKKKKKKKKK0000000000000000000000000000000000000000000000000000000000000000000000000000O000000000000000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddddoc'...........;ccc:;,'....collolllc,.....,cllllllllllllloooollldx;.....          ...    .......',;;::cclccccccc:;;,'.............',;;,.';,'.   .'cOK0000000000000KKKKKKKKKKKKKKKXkccllokKXN0c,:cc:::cloodod0XKKKKKKK0000000000000000000000000000000000000000000000000OOOO000000O00000000000000000OOO00000000000000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddddo:'...........cdoool:,'..'ccclllccc'.....':llllllllllllodolllc:dx;.              ...  .....',,;;;::::clllllllcc::;;;;;,,,'.......',:c:,',:;,..   .o000000000000000000KKKKKKKKKKKKx;:llcldOXXOc,:cc::cloooooOX0OkkO0000000000000000000000000000000000000000000000000OOOOOO0000OOOOOOOOOOOOOOOOOOOOOOO00000000000000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddddol:'..........'ldooool:,..,cc:cllcclc,.....,clllolllllldxolccc;:kOo,.           ..... ...';:ccccccccccccccccccccc::;;::::::::::;,,,',;::'.',;,'.   'x0000000000000000KKKKKKKKKKKKX0c,;clc:cxKNk::lc::cloollokkddddx000000000000000000000000000000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000000000000000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddddol;............:ddollll:'.;cc::ccc:cc:,....':llllllllldxolccc:,lO0kd:.         ........',:ccclcccllllcccccllllccc:;;,'.....',;:ccc::;;:c:'..',;,.. .l000000000000000KKKKKKKKKKKKKXXk,.,::c::xXO:;cc::llllllloooddokKK00000000000000000000000000000000000OO00OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000000000000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddddddol;'...........,coooollc;'';::cccc:,''.....':lllllllldxdlc:::,:x0Okkxo,.  .... .';,''',;:;,'...',,;:::ccclloollc:;,,'..'',,,,,;;,,;;;;:cc:'..',;,'..:kO0000000000000KKKKKKKKKKKKKKXXx,',;:c:l0Oc;:::clcllllloodxod0KK0000000000000000000000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000000000000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddddooool:;::,.....:looollooooll:;:::ccccc:,'......,clllllldxollc:;,;dOOkkkkx:. .;:'..;lc;,;:;'.....',;,,',;;;:cccllllc:;;;;,;;:cccccc::::cccccll:'..',;;;;;::cx0K000KKKKKKKKKKKKKKKKKKKKKXXk:,;:c::dOl;:::clcllllloddolxKKKK0000000000000000000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddddooool::oxo,...,lxkkxocllooolccccc:cccc:;,'.....':llllldxollc:;;;lkkkkxkko'  'cc,.;oxl;,,''.,;:c:::::;;;::::ccccllllccc:::cccccccccccccllllllll:'..,;;;;;;,',oO00000KKKKKKKKKKKKKKKKKKXKXKo;:ccc:cxo;:cclllllllldddloOKKKK0000000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddoooooooxkkddoc:cdkkxoccclodolccc:::cccc:;''.....;clclxxollc:;;;cxkkkkxkko. .;c:;,cxdc:::::ccc:cccccccccc::ccccllllloolccclccccccccccclllllllllc:,',;:::ccc:;cx000000KKKKKKKKKKKKKKKKXXKXXo,;::c::ccccccllllclldddlckKK0000000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddddddoooooodkkkkkdc,':oxkxdlllclodoolc::::::c:;,,'....,cclxkoooc:::;:oxxxkkxxkd,.,clc;,lxdlllccccccccclllllllcccccccclllllooolllllccllllllllllllollllc:;,;:::cllc::x0000000KKKKKKKKKKKKKKKKKKXXd,;:::::cclc:lllllcldddocdKKK0K0000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddddddddddddddooooolldxkxxo;..:oxxxddddolloooolc:::::ccc:;,'...':cdkdoolcc::;:oxxxxxxxkko::cl:,;dkddolcccccllllcccccllcccccccccccllllcc::cclllllllooooooolllllll:,,;:::llc::x0000000KKKKKKKKKKKKKKKXXKXXx;:lc;:lcll:;okkdclddddllkKKKKKK0K00000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000OOOO000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxxxdddddddddddddddddddddddddooooooool:,:lc,'cdxxxdddddlclooooocccccccccc:;;'..,cddooolccc:;codxxxxxkxc;;:cc:,cxkkxxdollllllolllllllc::::ccllloooollcclcc::ccllllloooollllclcllc;,,,;;:lc:ck00KK000KKKKKKKKKKKKXXXXXXXk::lc;:clcc:;:oOkllodddoco0KKKKKK000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxxddddddddddddddddddddddddddoooooolc;'......'cdxkxddxxdolccloooolccccccllclc;..'cddoollllc::coddxxxxd:.':lolc:oxxxxxxdolllooooollll:;:cllllooooooollc:cc:;;;;:ccclllllccccccccccccc:;;:cc:oOK00KK0KKKKKKKKKKKXXXXXXXXkc:cc::ccccccclloolodoooc:kXKKKKKKK00000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000000000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxxddddddddddddddddddddddddddoooooooc,.........:dxxxdddxdolcccloooolcccclllclc:,',colllllllc::codddxxxxo:cxkdocclooloodolllllllllllcc;;;;;,,,,,,,,''...'',;:c::;::cccccc:::::ccccccllc;;;cclx0000000KKKKKKKKKXXXXKKKXXOc:ccccllllllllooloddoooc:dKXKKKKKKK00000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxxxxdddddddddddddddddddddddddddoooooooc'.........:oxxddddxxdolcccloooolccclllllllc::lllllllllc::cdxdddxxxxolddollcclllllllcccccclllccc:::;,'''''''''',;:::::ccccc::::c:::::;;;:::cccccc:;;;cloO00000KKKKKKKKKKKKXXXXXXXOocllcllllloooloooooddolccxKXKKKKKKK0000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000000000000000000000000000000Kx\nldxxxxxxxxxxxxxxxxxxxdddddddddddddddddddddddddddooooooooc'.........;loddddddxdddolcclooollllllllllllllclllooollc::coddddxxdxdoddolclllccccc::::::ccccccccccc::::::ccccclcccccccccccccc:::::;,,,;:::cccc:;,;collx000000K0KKKKKKKKXKXXXXX0dcclllcloolooooodddddddoccxKXKKKKKKKKK00000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000000000000000000000000000000Kx\nldxxxxxxxxxxxxxxxxxxddddddddddddddddddddddddddddooooooooc'.........';:clddddddddddoccloooooooollllllllllllooolllc:codddddddxxdxdoccdolccclccccccc:::ccccccc::::::::cccccllcccccccccclcccc::,,,;:c::ccccccclllloO000000KKKKKKKKKKXXXXXXOocclllcclooloooddddddxddllxKXXKKKKKKKKKK00000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000OOOO0000000000000000000000Kx\nldkxxxxxxxxxxxxxxxxdddddddddddddddddddddddddddddddooooooc'....... ....,coddddddddddocclooooddooolllllllllloollllc:codddddddxxxxo:;:llllllllllllolc:::cccc::::::::ccccclllllllcccccccllcccc:;;:ccc::ccccclllolldO00000KKKKKKKKKKXXXXXXkcclllolllllloooddddddxxdolxKXXXXKKKKKKKKK00000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0OOOOO0000O00000000000000000000Kx\nldxxxxxxxxxxxxxxxxdddddddddddddddddddddddddddddddoooooooc,.....',.....,codddddddddddocclooodddooooooolllloooolllc:coddddddddxdoc::clllllllccc::::;;::::::::;:::::;,,,;:;,',;;:ccccclllccclc::cccc:::c:cclloolok0K00KK00KKKKKKKKKKXX0xlccllloollollooddddxdddddlo0XXXXXKKKKKKKKK0000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000OOOOOO000000000000000000Kx\nldxxxxxxxxxxxxdddddddddddddddddddddddddddddddddoooooooooc,......',....,coddddddddddddl:clooodddooooooollooollllllccloooddddollcclllllllc:::;;;;;'';;:::::::;;;,,''''...'',,'....,;ccllccllcccccc:::::::::clllldxkO0KKKK00KKKKKKKXKOdllollllooolllloodddxxxxxddldKNXXXXXKKKKKKKK0000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000OOOOOO0000000000000000000Kx\nldxxxxxxxxxxxxdddddddddddddddddddddddddddddddddoooooooool;............':lddddddddddddocclloooddooooooollooollllllllllolllllc:clllllcc::::c:;;;::;,,::::::::;,'....','.','''....',;;::cccllcccccc:::cllllllllllllllodk0KKKKKKKKXK0xdoooddooooolllloodddxxxxxxddloKNXXXXXKKKKKKKK0000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000000O0000000000000000000000Kx\nldxxxxxxxxxxxxdddddddddddddddddddddddddddddddddoooooooool;.............';cloddddddddddlcllooodoooooooollooolllllllllllllc:::clllllc:;;:coolc:;;::;;:c::::;,;;,..',,,,,;;;;;:::::::;;;;:cccccccc::;:lllllllllooooollllldk0KKKKKKOxddodddoooooollolooddxxxdxxdddloKNXXXXXKKKKKKK00000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00O00000000000000000000000000000Kx\nloxxxdxxxxxxxddddddddddddddddddddddddddddddddddoooooooool;................',;:loddddddollllooooooooooolllollllllcllllllllcc:cllllc:;;;;cooolc:;;;::clc:;;,,;:::::;;,,,;;;;;:c::::c::;;::::::cc::;;::;;::;;;:cloooooooollodxxxxxdoooddddooodoolloloddddxddxxdddloKNXXXXXXKKKKKK000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkkOOOOOOOOOOOOOOOOOOOOOOO0OOOOOOOO00000000000000000000000Kx\nloxxxdxxxxxxxddddddddddddddddddddddddddddddooddoooooooool:'...... ......'''...',;codddolllloooooooooooollllccllllllllooooolcclllc::cc:ldxdool::;::cooc:;;;;::::::;,,,;;;;;::cccccc:;::::::::::;;;;;::lxkxdlc;;:cloooodooooooooooodddddoooodollolloddddddddddddloKNXXXXKKKKKKK000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000OOO00000000000000x\nloxdxddxxxxxxdddddddddddddddddddddddddddddooddoooooooooool:,.....  .......'''....'';clollllloooooooooooolllc:llllloooooooodolclc:clxxkkkkddolc::::cllc:;::::::::::;;;,,;;;::clllcc:::::::::::;;;;;;;:lk0000Okdl:;:loddddddddooddddoooooooodollllloodddddddddddloKNXXXXKKKKKK000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000000000000000000000x\nloxddddxdxxddddddddddddddddddddddddddddddddddooooooooooooc;......  ......''.''''.....';clllllooooooooooolllc:clllooddddddoooolc::oxkkkkkkkxocc:::::cccc:::::::;;;:::::::::ccccllccccccc:::;::;;;;,,;:cxO0OO000Okoc;:odddddddddddooooooooodoollllooodddddddddodloKNXXXKKKKKK000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000OOOOOO000000000000000000000000x\nloxdddddddddddddddddddddddddddddddddddddddoddoooooooooool:'....... .....''''''''..'''..,clccllooooooooooolllc:looooodddddooool::ldxxxxkkkkkdc:::::c:ccc:::;;:::::::ccccccccccclccccllcc:::;;;;;;;,,::cdO0OOOOO000OdlclddddooooooddddddddddoloolloooddddddddoodloKNXXXXKKKKK00000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000000000000000000000000000000Kx\nloxdddddddddddddddddddddddddddddddddddddooooooooooooooooc;'.........';,..'''''''..''''.':lcccllooooooooooooolcclooooooooooollccldxxxxxxkkkkkdc;;:clcccccc:::::::::ccccccccccccccclllcc:::;;;;;;;,;;:ccc:;,,,:lxO0000xlcodooodoooodddddxxxdooooloooddddddddooooloKNXXXKKKKK000000OOOOOOOOOOOOOOOOOOOOOOOkkOOOOOkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000000000000000000000000000000Kx\nloxdddddddddddddddddddddddddddddddddddddoooooooooooooool:'..........:c;...'''''...''''..;lccccclllooooooooollllclooooooooollllodxxxxxxxkkkkkkdc;:clcc::cccccc:::::::cccccccccccccllcc::;;;;;;;;,;;::::,....  ..:x0000Ol:cllooodoodddddxxxdooollooooddddddooooolo0NXXKKKKKK00000OOOOOOOOOOOOOOOOOOOkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000000000000000000000000000Kx\nloxdddddddddddddddddddddddddddddddddddddoooooooooooooooc,...........;:,...'''''.'..''''.'clc::::::clooooooooloolllooooooollclodddxxxxxxkkkkkkkxo:::::;;:::::::::ccc:ccccccccccccccc::;;;,,,,,,,;;:;;;''','.  ...,lk000Odc;cloooooooodddxxdodollooooodddooooooooox0KKKKKKKKK0OkxxkOOOOOOOOOOOOkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000OOOOO0000000000000000000O0x\nloxdddddddddddddddddddddddddddddddddddooooooooooooooool:'...........,;,'..''''''''.''''..:oc:;,,,,;cloooooooollloolllllllccloddddxxxxxxkkkkkkkOkdl:;;,,,,,;;;;;;::::::::::::::::::;,,,,;,,,,,,;:;,''...'''.. ... .'lOKKKOoc:cllooooodddddoodolooooooooooooooooooloxk0KKKKKOxl;,,,:okOOOOOOOOkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000OOOOOOOO0000O000000000000O0x\nloxdddddddddddddddddddddddddddddddddddooooooooooooooool;.............,'...''''''''''''''.,ll::,,'.',:llllllooollloollcccccloodddddxxxxxxxkkkkkkkkxoc:,''''''''',,,;;;;;;;;;;;;;,,''',,,,,'',,;:,......''''..  ......:okO00Ooc:cllolooooooloollllloooooooooodoodocoxkkO00Odc,'......;lxOOOkOkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0OOOOOOOOOOOOO0000000000000000O0x\nloxddddddddddddddddddddddddddddddddddoooooooooooooooolc;.............;;,.....''''''''''..';:;:;,,'..,;::ccccllllllllc::cclooddddddxxxxxxxkkkkkkkkkxol:;,''.............''''''''''''''''''',;;,...............  ........,;codlc::clclllllllllccllllooooodddk0kddlcdOOkolc;'..'''......,lxOOkkOOkkkkkkkkkkkkkkkkkkkkkkkkOOkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000OO00OOO00000O0x\nloxddddddddddddddddddddddddddddddddddoooooooooooooooolc,.............:ool:,'..''''''''''..''',;,,,'..',,,;;;;;::cc:c::cclodddddddddxxxxxxkkkkkkkkkkxolcc:;,''..............''''..''''',,;;;'.................. ...............',;::cccccccclcccllllllddxxx0KKOdlcoool,.....''''........,lxOOOOOkkkkkkkkkkkkkkkkkkkkkkkOOkkkkkOOOkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000OOOOOO000000Kx\nloxddddddddddooooodddoooooooooooooooooooooooooooooooolc,............'codxddlc;'..'''''........'',,''....'''''''',,,,,;:loddddddddddxxxxxxkkxkkkkkOOkdllccc:;;,''''....'''''''''',,,;;;;,,'.......................................',;:::::ccccccccclodkkxxk0Ok0xc;:;''..'.................,lxdoodkOOkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000OOO0000000Kx\nccolllllllllllllcllccccccccccllllllllccclcllllllllllolc,............,lodddddddl,..''............'''...................';ldddddddddddxxxxxxxkkkkkOko:,clllcc:;;,',,,'....''',,;;;;;;,,'...............................................',;;::cc::cclxxxkkooxkdoxo;''.....'...................'....;lkOOkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000OOOOO0000Kx\nccollllllloooooollooooooooooooooooooooooooooooooooooollc:;,'..... ..,loddddddxdl'..''...................................'lddddddddddxxxxxxxkkkkko,.  ,oollcc::;,,,,;,'..'........................................  .....................',;;::lkddOxdddolllc:;,'......''''.............'''........ckOkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000OOO00O00000x\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddoooooolllllllc::;'...,looodddddddl,..'....................................,oddddddddddxxxxxxxkkx:..  .;cccc::;;,,''',,'...........................................  ........................,;:oOkodddolc:;''........ ..''............''''''''......ckOkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00O000O0x\nldkxxxxxxxxxxxxxxxxxxxxdddddddddddddddddddddddddooooollllllccc::;;,,:loooodddddddc'.''...................................,lddddddddddxxxxxxxkd:... .,;,,,'''''................................................      ................... ..',;;clccccc:,,''........... ..............''''''''''......oOOkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0O000O0x\nldkxxxxxxxxxxxxxxxxxxxxddddddddddddddddddddddddoooooolllllccc::;;,,,:llloooddddddl,.''..................................,:lddddddddddxxxxxxxxl'......',,'''''.....................................................  .........    ..  .. .,;..,;,''''..................................''''''''......;kOkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000O0d\nldkxxxxxxxxxxxxxxxxxxxxdddddddddddddddddddddddooooooollllcccc::;,,,;:llllooooodddo,.''.................................;codddddddddddxxxxxxkx:..... ..''''''...............................................................          .  .',...'......................................'..............'okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00OO0d\nldkxxxxxxxxxxxxxxxxxxxxxddddddddddddddddddddddddddooollccccc::;;,,,;:ccclloooooodo;..'.................................;oddddddddddddxxxxxxxxc'...... ..''''.'..............................................................   .         .',.........................................................':oxkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0OOO0d\nldkxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddddddddddoooooollcccc:::;,,,,;:ccclllooooooo;...'.................................ldddddddddddddxxxxxxko,............''''................................................................   ..     ...............................................................;okOkkOkkkkkkkOkkOOkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\nloxodddooooooooooooooooolllllllllllloddddoolllllllllllccc::::;;,'',;:::cclllooooooc.....................................:ddddddddddddddxxxxxxl'..............''.............................................. .................. ....    .................................................................;okOOkkkkkkkkkkkkkkkkOOkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00O0x\nc:lccccccccccccccc:::::::::::::::codxxxddollllllllllllc::::::;,,''',,;::ccllooooool'...................................':odddddddddddddxxxxkxc'.................''...........................................  .......... ...........   ....................................................................,lxOOOkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000000Kx\n;.'''''...''''.'''..............'cxkkxxddolllllllllllcc:::::;;,,''...',;:cllooolc::,...................................,cddddddddddddddddxxko;...............................................................  ........... ...  .......  ..   .................................................'''............'cdkOOkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000000Kx\n,................................cxkkxxddolllllllllclcc::::;;,,''.......',:cllc:;,''...................................;lddddddddddddddxxxl,.................................................................   ............... ..........      .................................................'''''...........;okOOOkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000O0000Kx\n;..........''''.....'''''''''...':dkkxxddolllllllllllcc::::;;,,''..........',,,,'......................................,ldddddollooddxxdc'.................    ..............................................   ............................    ...................................................'''''...........'cdkOOOkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000O000O0x\n;.'.........''.....''''''''''''.':dkkxxddoolllllllllllc:;:;;;,,''.......................................................:odo:'.....',;;......................    ......''........................,,........................................     .....................................................''''''... .......,ldkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000000000000000Kx\n;.'................'''''''''',,;,:dkkxxddoolllllllllllc:;:;;;,,''........................................................;:'. .....  .........................      .............................:c'.'..................................  ..'..':;...'................................................''',,,'...   ......,lkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000000000000000000Kx\n;.'................''''''''',;cllcokkkxddoolllllllllllc:;;;;,,''..............................................................................................        ...........................,o:.............................    ......;:::cl:;;::'.................................................'',,,''...  .......lOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000000000000000000000000Kx\n;..................''''''''',;cooloxkxxdddollllllllllcc:;;;;,,,'..............................................................  .       ...........................     ..........................ld;..........................,,.  .:clc:lcc:;:;;c:::....................................................'',,'.............;dOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000OOOOO0000000000000000000000Kx\n;...................'',,'''',;cooclxkxxdddollllllllllcc:;;;;,,,'..............................................................            ...........................     .......................'o0o'.......................'lx:. ......,lcllcc:;;,.......................................................'','...... ........;dOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000OOOOO0000000000000000000000Kx\n;...................'',,'''',;:ooclxkxxdddollllllllcccc:;;;;,,'...............................................................                 ........................     ..''................':kKOc'....;ol,.............ckKk,...........''....  ........................................................',''..''............:xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0OOOOO0OOOO0000000OOOOO0000000000000000000000Kx\n;.............'.....'',,,'''',;:::cxkkxdddollllllllcccc:;;;;,,'................................................................                  .....................'..    ...'..............;oOKXKk;....,c;............:xKXKd,',........  ................................................................''''...'.............ckOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000OOOOOOOOO0000000000000000000Kx\n;.'..........''''...''',,''''''..'cdkkxdddolllllllllccc:;;;;,,'................................................................. ...              .....................''..    ..'............,dKXXXXKd,...''...........,d0XXXKo';,..........................................................................''''....'.............'cxOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000OOOOOOOOOOOOOOOOO000000000000O0x\n;.'..........'''.....'',''''''....:dkkxddddolllllllllcc:;;;;,,...''.......................................................................           ....................'...    ..........'..:OXXXXXK0l,..cc.........'oOXXKKK0c',.....................  .....................................................'''.....'....... .......cxOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000000O0x\n;.'...........'''....''''''''.....;dkkxddddollllllllllc:;;;;,'...;:;,'...........................................................  .......................................''.';'.  ..''......'o0XXXKXXXOd:.lk:'......cOXXXKKKKO:',......................  .....................................................''......'................ck0OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000000000O0x\n;.'...........''''...''''''''.....;okkxdddoollllllllllc:;;;;,'..';:::::;;,'........................................................    ................'.. ................'.:kkl'...........;xKXXXXXXXKKx:o0x:....;xKXXKKKKKKx;...............................................................................'''.'...... ......  ......'lk0OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000O0x\n;.'...........''''....'''''''.....;okkxxddoolllllllllcc:;;;,,'..';::::ccccc:;,'.....................................................   ................:ol;.................'cOKKOo,.........cOKXXXXXXXXX0doddc..'o0XXKKKKXXKKd'........................... .....................................................'''....... .........  .. .,oOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000O0x\n;.'............''.....'''''''.....,okkxxddoolllccllcccc:;;,,,...,;:::ccccccllc;'......................................................   ............. .:xOkdc,... .........'l0KXXKOd:....'.,dKXXXXXXXXXXK0l....:kXXXKKXXXKXX0l'...........................  .............................................................. .........   ... .:xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000000000000O0x\n;.'............'''....'''''''.....,lxkxdddoolllcccccccc:;;,,'...,:::cccccccclc;,.......................................................    ..............,d0KK0ko:'..........o0XXKKXK0d:'...:kXXXXXXXXXXXXKk;.,dKXKKKKXXXXKXXOc...................',........................................................................ .........  . ... 'oOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO000000000000O0x\n;.'............'''....'''''''.....,lxkxdddoollllccccccc:;,,,'...,:::cccccccclc;'........................................................     .............'oOKXXKKOdl;''','..oKXKKKKXXXKkc'.l0XXXXXXXXXXXXXKOx0XXKKKKXXKXXXXKk:................''.,,........................................................................ ............  ... .lOOOOOkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0000O0x\n;.'............'''....''''''''....'lxkxdddoollllccccccc:;,,,'..';:::ccccccccll:'.........................................................      .............ckKXKKXXX0kdc;,.'dKXXKKKXXKXXKOk0XXXXXXXXXXXXXXXXXXXKKKKXKKKKKXXKx,.......',;::loddo,',.......................................................................... ................. .oOOkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00OOO0d\n;.'............''''...'''''''.....'cxkxdddoollllccccccc:;,,,'..';::::cccccccllc,..........................................................       ............:xKXKKXXKXXK0xox0XXXXKKKKXXKXXXXXKXXKKKKXXXKKXXKKKXXXXXXXXXXXXXKkc;:cloxkOO0KKKKKx:,;'..............................................................................................,kOkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00OOO0x\n;.'............''''....'''''......'cxkxdddoolllcccccccc:;,,'...,;;:::ccccccllc:,...........................................................        ...........,d0XKXKKXKKXXXXXXKXXXXKKXXKKXXXXXXKKKKKKXKKKXXKKKXXKKKKKKXXXKXKKKKKXXXXXXXXXKK0k:,;,............     ...................................................................... ........oOkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0x\n;.'.............'''....'''''......'cxkxdddoolllcccccccc:;,,'...,;;:::cccccccc:,'............................................................  ..    ...........'o0XXKKXKKKKKXXXXXXXXXXXKKKKKKKXKKKKKXXXXKKXXXXKKKKKKKKKKXKKXXKKKKXXXXXXK0000kc,:,............'';:cll:'...................................................................  .......ckkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;.'.............'''.....'''''......:dkxddooolcccccccccc:;,''...,;;;::cccc:::;,'.............................................................. ...    ...........,lkKKXXKKXXKXKK0KK00KKKK0KKK00KKKXXKKXXXKXXXXXXXXKKKKKKKKKKXXXKXXXXKK000KK0O0kl,...',;:cldxkO0000Oo;......................................................................  ......,xkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;.'.............'''.......'........:dxxddooolcccccccccc:;''.....,,;;:::::;,,'.................................................................... .,oxkkkkkkkkkkkkOO0KKKKKKK00KKKKKKK0OOK0dxKKOKXXKKXXXKKKKKXXXXXKKKKKKKKKKXXXXXKK0KK000x:,,:xOkdxxkO0KXXXXXXXKOo;.      ..................................................................   ....'dOkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;.'................................:dxxddooolcccccccccc:,''......'',;:;;,'........................................................................c0xc::;;;;;;;;:cxKOOKKXK00K0xocccldO0XKl.'dX0OKKXXXXXXXXXXXXXXXXXKXXXXKXXXXXXK00K0xol:'....':loxKK00XXXXXKKOd;...         ...............................................................   .....lOkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;.'................................:dxxdooollcccccccccc:;'...........''..........................................................................,Ok,....';:;.....,kKk0XKO0Kd;.......,coc'..,d0KK0KXXXXXXXXXXXXKKXXKXXKKKXXXXXXKO0Xd.............'dX0OKXKKKOd:......   .   .. ..............................................................  .....cOOkkkkkkkkkOOkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;.'................................;dxxdooollcccccccccc:;'.......................................................................................;0d'....l0K0l....'kKkOK0OXx'...,;,...........;kX00KKK00K00KKXXXKXKKKKKKKXXXXXXX00Xk,....;ll;....,kK00KKKOd:........   ..     ..............................................................  . .. ;kOkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;.'................................;oxxdooollcccccccccc:;........................................................................................;0d'....oKX0l....'kKk0KO0Kc...:k00l.........'cOK0000KK00KK000KXXXK0KKK00KXXXXXXKO0Ko...,xKKk,...dK0OKK0xc,;ldxxo:'..  ..':c;.. .  ..........................................................  ....;kOkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;..................................;oxxdooollcccccccccc:,......................  ................................................................,Ok'....':c:'....;OKO0KOK0;...dKk0O,.......;kKKOOO0KOl:::ld0K000O0K0kOX00KKKXKKK0OKx'..,kKKO;..'xKO00xc''oOxc:cokOc.  .:OOk0d. ..............................................................  ...;kOkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;..................................;oxddooolccccccccccc:,.........................................................................................o0d;''''''''''':xKOOKKOK0:...l00Kk,.......,d0KOk0Kx,......:OK000Kk:'oX0OKKKKKKX0OKO;...:xxc'..,OKkxl,..d0l.....'oOxlldOd,,kO' ..............................................................  . .:kkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;..................................;oxdoooolcccccccccc::,............. ..........................................................................'cOXK0OOOOOOOOO0KXKO00KO0Xo...'cdo;..........;kK0Kk,.;cllc;',codoc,.;OKO0KKKKKKKKO0Kx;........,xKkc,...o0l.':cl:,';lodl;..l0o..............................................................'.... .lkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;..................................,oxdoooolccccccccc:::'............   .......................................................................'oOkxxddddddddddddxxxOKK0OOKOc.........','.....;kXN0:,oO00000k:......,xKO0KXXKKXXXXK0OKOc......cO0d;....;0x,;xkddkkd,......c0x. .................................................................. 'dkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;..................................,lddoooolccccccccc:::'. ..........   .......................................................................:Kk'.................,kXO00OK0d:''''',lk0d,..,d000XKxkK0OOOOOK0o;,,,cOK00KXXXKXKKK000O0Xk,....,kKOxdl:,'lKOxOx,...cOkl;,,;oOx'  ................................................................. .ckkkkkkkkOOOOOOOkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;..................................,lddoooolccccccccc:::'. ..........   .......................................................................,kKxlllc;......';clooxKK00KK00K0Okkkk0K0KKc..lKOkO0KKK00KXXXK0KKK0O0KK00KXXXKKK00K0Okkxd:......:dxkOO00xdO00xc'....,okkkkkx:.      ...............................................................:xkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;..................................,lddooollcccccccc::::.. .........     ....................................................................';lkKKKK000o'...,x00000000KKKXKK000000000k0Xl.'dXOOXKKKKKKXXXXXXK000000KKXXXXKKXKOK0c'''............'',oK0k000OOkxoc:,'''''...          ...........................................................:xkkkkkkkkOOOOOOkkOOOOOOOOOOOOOOOkkkkkkkOOOOOOOOOOOOOOOOOOOOOO0d\n;..................................,lddoolllccccccc::::;.....'''''..     ...................................................................:ok0KKK0KOk00:...lKOx0KKKKKXXXXXXXXXKKKKXKO0Xo.'xXOOKXXXXXKKKKXXXXXXKKXXKXXXXXKXXKOKKdc::::::::::::::::ckX0OKXKXXXK0Okdl,.......            .. ...................................................,lkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;..................................,lddoolllccccccc::::;.....''',,..      ...................................................................';lxO0KKKO0Kc...oX0OXXXXKKKXXXXXXKXXKKKXK00Xx,;OXO0XKKXXXXXXXXXXXKKKKXXXXXXXXXKXXK0KKK00000000000000000K00KKKKK0Okdc;'.........                 ...............................................,lxkkkkkkkkkkkkkkOkkOOOOkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;..................................,lddollllcccccc:::::;. ..''''''..       .....................................................................';cdk0OOKx'.,xXO0XXXXKKXXXXKKXXXXXXKXXK0KKOOK00KXXXXXKKXXXXXXKKXXXXKKXXXXXXXKXKKKK0000000000000000000KKKK0Oxo:,'..............                ............................................,cxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;..................................,ldoollllcccc:::::::;.....'''''..           .....................................................................,:odO0kdkKKOKXXKKXXXXXXXXXXXKKKKKXXKK0000KKXXXXXKKKKKKXXXXXXXXXXXXXXXKXXXXXXXXXXXXXXXXXXXXXXXKKKK00kdl;'...................                .........................................,lxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOO0d\n;..................................,ldoollllcccc:::::::;......''''..             ...................................................................'..';lxO000KKXXXKXXKKKKKKKKKKKKKXXXKKXKKXXXXXXXXKKKKKKXXXXXXXXXXXXXXXXXXXKKKKXXXXXXXKKKKKXK00K0Oxoc,'...''..................                ......................................'cdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOO0d\n;..................................,ldoolllccccc:::::::;.............              ..................................................................''''..,ldOKKXKXKXXXKKKKKKKKKKKKXXXKKKXXKKXXXXXXKKKKKKXXXXXXXXXXXXXXXXXXXXKKXXXXXXXXXKKKXK00K0kc,...'''.......................               ....................................:dxkkkxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOO0d\n;..................................,ldoolllcccc::::::::;.............                ...................................................................',,...;xKKKXXKXXXKKKKKKKKKKKKXXXKKKKXXXXXXXXKKXXXXXXXXXXXXXXXXXXKKKKKKKXXXXXXXXXXXXKXXK000kc..;;.............................             .................................:oxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOd\n;..................................;looolllcccc::::::::;..  .........                   ..................................................................,,..:kKXKKKXXXKKKKKKKKKKKKKKKKKKKKXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKKKKKKKKKKKXXXXXXK000Ol'',..............................             ..............................;lxkxxkkxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOkkOOOOOOOOOOOd\n;..................................;looolllccc:::::::::;.. .. ........                    ..................................................................'o0XXXKKXXXXXXXXKKKKKKKKKKKKKKKKXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKKKKKKKKKKKXXXKKXXK0000o,................................            ...........................';lxkkkkkxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOkkkOOOOOOOOOOOd\n;..................................;loollllcc::::::::::,.  ...... ....                       ..............................................................:kKXXXXXXKKXXXXXXXKKKKKKKKKKKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKKKKKKXXXXXXXXK000d;.................................          ........................';ldxkkxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOkkkOOOOOOOOOOOd\n,..................................;loolllccc::::::::::,.........  .....  .. .....             ..........................................................'lOXXXXKXXXXKKXKXXXKKKKKKKKKKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKXKKXXXXKKKKXXXXXXXXK00Kk:...................................    .   .....................;ldxkkkxxxxxkkxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOkkOOOOOOOOOOOOOOOOOOOOOd\n,..................................;lollllccc::::::::::,.........   ..... ............           .......................................................,dKXXKKKKKKKK0000KKXXKKKKKKKKKKKXXXXXXXXXXXXXXKKXXXXXXXXXXXXXKKKKKKKKKXXXKXXXXXXXXXXXXXXXXKXK00KOc'..................................        ................ .;oxkkkxkxxkkkkkkkkxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOkOOOOOOOOOOOO0d\n,..................................;lollllccc::::::::::,........... .......  ..  ......             ...................................................:OXXKKKKK00000000KXXKKXKKXXXXXXXXXXXXXXXXXXXXXXKKXXXXXXXXXXXXXXKKKKKKKXXXXKXKKKKKKKKKKXXXXXXXKK00K0o'...................................   ... ..          ....;dkkkxkxxxkkkkkkkkkkxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOO0d\n,..................................:lollllcc::::::::::;,................ ......   .......            ..................................   ...........'lO0OOkkkkxxdddkOO0KKXKXXXKXXXXXXXXXXXKXXXXXXXXXXKKXXXXXXXXXXXXXXKKKKKKKXXXXKKKK000000KKKKKKKKXKKXK0K0d,.................................... ....,:,'.....'',:lodxxxxxxxxxxxxkkkkkkkxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOkkkOOOOOOOOOO0d\n,..................................:lolllccc::::::::::;,................ .................                          ...................     .........:c:;;;,,,''''.;d00KXKKXXXXXXXKKKKKKXXXXKXXXXXXXXXKKXXKKKXXXXXXKKXKKXXKKXXXXXK000xlccodkOO000000K0KK00KKx:.....................................'''ckkxxdddxxxxkkkxxxxxxxxxxxxxxxkkkkxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOkkkkkkkkkkOOOOOOOOO0d\n,..................................:lolllccc::::::::::;,................ ..'.................                          ................     ......................'o0KKXXXXXXXXKKKKKKKKKKXKKKKKKKKXXKKXXKKKKKXXXXXXXKKKKXXKKXXXXKKK00d'.;;,,;:cloxkO0000000KKkc.......................................,okxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOkkkkkkkkOOOOOOOOO0d\n,.................................':lllllccc::::::::::;'................ ..,'.............................                ............      .....................'o0XKXXKKKKXXKKKKK000KKKKKKXKKKKKKK00KKKKXXXXXXXXXK00KKKXXKKKKKKXK00Oc'cc,,,,,''',;:codxkO0KKOl'......................................ckkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOO0d\n,.................................':llllccc:::::::::::;'..................';;........... .....',,''''''.''..                 .........      ....................'o0XXXKXXKKKK0KKK0kdlxKKKXXKXKKKKKKKKK0KKKXXXXXXXXXK0K0KKKKKKKKKKKK000x,''........'.....',;:codxl,.....................................'dkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOkOOOd\n,.................................'cllllccc:::::::::::;'..................';:'..........  ....',;;:::;;;;;;;'.    .               ....      ...................'o0XXXKXXK000KK0Oxl;..oKKKKXKKXKKKKOOO0KKKKKXXXXXXXXK00kxkO00KKKKKKK0000l......................',;,......................................cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOkOOOd\n,.................................,clllcccc:::::::::::;'..................';:'...''.'...........',;::::::::c:,......                ..      ..................'o0XXXXKK000KK0ko:,....lKKKKKKKKK0ko:;cdOKKKKKXXXXXXK00kc,,;cldxkO0KKKKKKk;...............................................................;xkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOO0d\n,.................................,cllccccc:::::::::::;..............'....'::,..'''''.............',:::::::clc;'......                      ..................o0XXKK0000KKOxl;..';;..lKKKKKK0Od:'...';lkO0KKKXXXXXKKKx;..'...',:lodkO000o,..............................................................'cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOO0d\n,.................................,cllcccc::::::::::::;..............'....':c;..''''''..............';:::::cccc:'.......                    .................o0XXKK00KK0kdc,..';:,...oKKK0Oxl,........':ldOKKKKKXXK00d,.;lc;;;''..',;clddc'...............................................................'lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOO0d\n,.................................,cllcccc:::::::::::;,.............''.....:l:'',,,''''..............',;:::cccccc;'........   ......        ................o0XXKKKKKOxl;'..';,'.....o00ko:'..... .......'cx0KKKKK0K0o'.;:...''''''.....'''................................................................'dkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOkkkOd\n,.................................;clccccc:::::::::::;,.............''.....:l:'',,,,'''...............',;:::ccccllc;'............,;,.      ...............'o0XXXXK0kdc,...',,........lxc,...'..    ........,oO0KK0000l..:,.....................................................................;;'..........lkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOkkkkkkkOOOOOOOOkOd\n,.................................;clccccc:::::::::;:;,............'''.....:l:'',;,,,''..............''',,;:ccccccllc:,..........,cc'..   ...............'oKXXXK0kl;'....''..........'...','..      .........:x0KKKKOc..;.......................................................................'...........ckxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOkkkkkkOOOOOOOkOkOd\n,.................................;clccccc:::::::::;;;'............','.....:oc'',;,,,,'.............'''''',,;:::cccccllc;'.......,c;.  .................'o0XK0Odc,............................      ..........,ok0KKk:..'.................................................................................. ,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOkkkkkkkkkOkkkkkOd\n,.................................:llccccc:::::::::;;;'............,,''....:oc'';;;;;,'.............''''''',,;::::::::cllc;......';.    ................l0XKOxl,...............................      ..........,lk0Kx;..'.................... ............................................................. .okxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOkOOOOOOOkkkkkkOd\n"

function stage0(){
	cut_sound4.stop();
	cut_sound1.play();
	background(0);
	textSize(12);
  text("______      ____        ____       ______      ______     ", width/2, height/3 - 30 + 20*sin(wave + 1));
  text("/\\  _  \\    /\\  _`\\     /\\  _`\\    /\\__  _\\    /\\__  _\\     ", width/2, height/3 - 20 + 20*sin(wave + 0.9));
  text("\\ \\ \\L\\ \\   \\ \\,\\L\\_\\   \\ \\ \\/\\_\\  \\/_/\\ \\/    \\/_/\\ \\/     ", width/2, height/3 - 10 + 20*sin(wave + 0.8));
  text("\\ \\  __ \\   \\/_\\__ \\    \\ \\ \\/_/_    \\ \\ \\       \\ \\ \\    ", width/2, height/3 + 20*sin(wave + 0.7));
  text("  \\ \\ \\/\\ \\    /\\ \\L\\ \\   \\ \\ \\L\\ \\    \\_\\ \\__     \\_\\ \\__  ", width/2, height/3 + 10 + 20*sin(wave + 0.6));
  text("  \\ \\_\\ \\_\\   \\ `\\____\\   \\ \\____/    /\\_____\\    /\\_____\\", width/2, height/3 + 20 + 20*sin(wave + 0.5));
  text("   \\/_/\\/_/    \\/_____/    \\/___/     \\/_____/    \\/_____/", width/2, height/3 + 30 + 20*sin(wave + 0.4));
  
  text(" __      __  __      ____       ____       ____     ______    ______      _____       __  __     ", width/2, height/3 + 60 + 20*sin(wave + 0.3));
  text("/\\ \\    /\\ \\/\\ \\    /\\  _`\\    /\\  _`\\    /\\  _`\\  /\\__  _\\  /\\__  _\\    /\\  __`\\    /\\ \\/\\ \\    ", width/2, height/3 + 70 + 20*sin(wave + 0.2));
  text("\\ \\/    \\ \\ `\\\\ \\   \\ \\ \\/\\_\\  \\ \\ \\L\\_\\  \\ \\ \\L\\ \\\\/_/\\ \\/  \\/_/\\ \\/    \\ \\ \\/\\ \\   \\ \\ `\\\\ \\   ", width/2, height/3 + 80 + 20*sin(wave + 0.1)); 
  text(" \\/      \\ \\ , ` \\   \\ \\ \\/_/_  \\ \\  _\\L   \\ \\ ,__/   \\ \\ \\     \\ \\ \\     \\ \\ \\ \\ \\   \\ \\ , ` \\  ", width/2, height/3 + 90 + 20*sin(wave)); 
  text("          \\ \\ \\`\\ \\   \\ \\ \\L\\ \\  \\ \\ \\L\\ \\  \\ \\ \\/     \\ \\ \\     \\_\\ \\__   \\ \\ \\_\\ \\   \\ \\ \\`\\ \\ ", width/2, height/3 + 100 + 20*sin(wave - 0.1)); 
  text("           \\ \\_\\ \\_\\   \\ \\____/   \\ \\____/   \\ \\_\\      \\ \\_\\    /\\_____\\   \\ \\_____\\   \\ \\_\\ \\_\\", width/2, height/3 + 110 + 20*sin(wave - 0.2)); 
  text("             \\/_/\\/_/    \\/___/     \\/___/     \\/_/       \\/_/    \\/_____/    \\/_____/    \\/_/\\/_/ ", width/2, height/3 + 120 + 20*sin(wave - 0.3)); 
  wave += 0.02;
  textSize(30);
  text(" = = = = = = = = = = = = = = = = = = = = = = = \n=                                             =\n=                                             =\n=                                             =\n=                                             =\n=                                             =\n=                                             =\n=                                             =\n = = = = = = = = ASCIInception = = = = = = = = " , width/2, 2 * height/5 - 150);
  text(" ================= \n=     PRESS     =\n=     ENTER     =\n=   TO  START   =\n ================= ",width/2, 2 * height/3)
}



function stage1(){
	cut_sound1.stop();
  image(img1, width/2 + ran1, height/2 + ran2, width, height)
  if (n0 >= 0 && n0 < 5){
	cut_sound2.play();
    box0(data0, n0);
    if (n0 == 0) {
      fill(220, 80, 80);
      textSize(20);
      text("> enter로 대화 넘기기", width/2, 3*height/4 + 40, 800);
  }
  }
  if (n0 >= 1 && n0 <= 4) {
	cut_sound2.play();
    image(img2, width/2 + ran1, 2*height/5 + ran2, width/2.5, height/2.5);
  }
  if (n0 >= 4) {
    ran1 = random(-5, 5);
    ran2 = random(-10, 10);
  }
  if (n0 >= 5) {
    push();
    translate(width/2, 2*height/5);
    scale(-1, 1);
    image(capture, ran1, ran2, width/2.5, height/2.5);
    pop();
    setTimeout(blackOut, 1000);
  }
}

function stage2(){
	cut_sound2.stop();
	cut_sound1.play();
  background(0);
  if(n1 >= 0) {
    box1(data1, n1);
  } if (n1 >= 1){
    if (n1 % 2 == 1){
      textAlign(CENTER);
      textSize(3);
      text(muyahoImage, width/2, 30)
      if (n1 == 9) {
        textAlign(LEFT);
        textSize(20);
        fill('red');
        text("power(): 힘", width/2, 3*height/4 + 40, 800);
        fill('green');
        text("speed(): 속도", width/2 + 160, 3*height/4 + 40, 800);
        fill('blue');
        text("shootRate(): 발사속도", width/2+ 320, 3*height/4 + 40, 800);
        fill('pink');
        text("shootMode(): 발사모드", width/2 + 560, 3*height/4 + 40, 800);
      }
    } else if (n1 >= 6) {
      webcam1(50, 1, 3*height/4 - cam.height - 120, 12);
    }
  } 
}

function stage3(){
	cut_sound1.stop();
	ost_monster.play();
  if(score_record_started==0){
    score_recorded=hero.score;
    score_record_started=1;
  }
  if(hero.score-score_recorded>=60){
    stage++;
    score_record_started=0;
    score_recorded=0;
  }
    respawnCount++;
}



function stage4(){
	ost_monster.stop();
	ost_boss.play();
  background(0);
  for(let i=0;i<monsters.length;i++){
          monsters[i].display(hero);
        }
      for(let i=0;i<bosses.length;i++){
          bosses[i].display(hero);
        }
  hero.display();
  box1Small(data2, n2);
  if (n2 % 2 == 1){
    textSize(1.3);
    text(muyahoImage, width/2, height/3)
  } else if (n2 % 2 == 0){
    webcam1(150, 2, height/2 - cam.height/3 + 10, 4)
  }
}


function stage5(){
	ost_boss.play();
  if(bossSpawned==0){
    bosses.push(new Boss1(width*0.5,height*-0.2));
    bossSpawned=1;
  }
  if(bosses.length>0){
    respawn_x=bosses[0].v.x;
    respawn_y=bosses[0].v.y;
  }
  if(bosses.length==0 && bossSpawned==1){
    bossSpawned=0;
    stage=5.5;
    monsters=[];
  }
    respawnCount++;
}

function stage55(){
	ost_boss.stop();
	if(dead_long_n==0){
		dead_long.play();
		dead_long_n=1;
	}
  background(0);
  hero.display();
  boss1_dead();
  if(frame_record_started==0){
    frame_recorded=frameCount;
    frame_record_started=1;
  }
  let gap=frameCount-frame_recorded;
  if(dead_n<8){
    if(parseInt(gap/15)%2==0){
      monster_color=color(0,255,65);
      if((gap+1)%15==0) dead_n++;
    }
    else{
      monster_color=color(255,0,0);
      if((gap+1)%15==0) dead_n++;
    	}
	}
  else if(dead_n<10){
    if(gap%60==0) dead_n++;
  }
  else if(dead_n<12){
  	if(dead_short_n==0){
  		dead_short.play();
  		dead_short_n=1;
  	}
  	monster_color=background_color
    if(gap%60==0) dead_n++;
  }
  else{
    dead_n=0;
    dead_long_n=0;
    dead_short_n=0;
    frame_record_started=0;
    stage=6;
  }
}

function stage6(){
	cut_sound3.play();
  background(255);
  monster_color=color(0, 255, 65);
  background_color=0;
  box2Small(data3, n3);
  if (n3 == 0){
    webcam2(100, 2, height/2 - cam.height/3 + 10, 10)
  }
  else if (n3 == 1){
    textSize(1.3)
    text(muyahoImage, width/2, height/3)
  } else if (n3 == 2){
    background(255);
    webcam2(100, 1, 3*height/4 - cam.height - 120, 10);
    box2(data3, 2);
  }
}

function stage7(){
	cut_sound3.stop();
	ost_monster.play();
  if(score_record_started==0){
    score_recorded=hero.score;
    score_record_started=1;
  }
  if(hero.score-score_recorded>=60){
    stage++;
    score_record_started=0;
    score_recorded=0;
  }
  respawnCount++;
  respawnCount++;
}




function stage8(){
	ost_monster.stop();
	ost_boss.play();
	background(255);
  for(let i=0;i<monsters.length;i++){
          monsters[i].display(hero);
        }
      for(let i=0;i<bosses.length;i++){
          bosses[i].display(hero);
        }
  hero.display();
  box2Small(data4, n4);
  if (n4 % 2 == 1){
    textSize(1.3);
    text(muyahoImage, width/2, height/3)
  } else if (n4 % 2 == 0){
    webcam2(100, 2, height/2 - cam.height/3 + 10, 10)
  }
}


function stage9(){
	ost_boss.play();
  if(bossSpawned==0){
    bosses.push(new Boss2(width*0.5,height*-0.2));
    bossSpawned=1;
  }
  if(bosses.length>0){
    respawn_x=bosses[0].v.x;
    respawn_y=bosses[0].v.y;
  }
  if(bosses.length==0 && bossSpawned==1){
    bossSpawned=0;
    stage++;
  }
  respawnCount++;
}



function stage10(){
	ost_boss.play();
  if(bossSpawned==0){
    bosses.push(new Boss2_2(respawn_x,respawn_y));
    boss2_2_sound1.play();
    bossSpawned=1;
  }
  if(bosses.length>0){
    respawn_x=bosses[0].v.x;
    respawn_y=bosses[0].v.y;
  }
  if(bosses.length==0 && bossSpawned==1){
    bossSpawned=0;
    monsters=[];
    stage=10.5;
  }
  respawnCount++;
}



function stage105(){
	ost_boss.stop();
	if(dead_long_n==0){
		dead_long.play();
		dead_long_n=1;
	}
  background(0);
  hero.display();
  if(frame_record_started==0){
    frame_recorded=frameCount;
    frame_record_started=1;
  }
  let gap=frameCount-frame_recorded;
  if(dead_n<8){
    if(parseInt(gap/15)%2==0){
      image(img_boss2_2,respawn_x,respawn_y,img_boss2_1.width*ratio,img_boss2_1.height*0.5*ratio);
      if((gap+1)%15==0) dead_n++;
    }
    else{
      image(img_boss2_2_dead,respawn_x,respawn_y,img_boss2_1.width*ratio,img_boss2_1.height*0.5*ratio);
      if((gap+1)%15==0) dead_n++;
    	}
	}
  else if(dead_n<10){
  	image(img_boss2_2_dead,respawn_x,respawn_y,img_boss2_1.width*ratio,img_boss2_1.height*0.5*ratio);
    if(gap%60==0) dead_n++;
  }
  else if(dead_n<12){
  	if(dead_short_n==0){
  		dead_short.play();
  		dead_short_n=1;
  	}
    if(gap%60==0) dead_n++;
  }
  else{
    dead_n=0;
    dead_long_n=0;
    dead_short_n=0;
    frame_record_started=0;
    stage=11;
  }
}



function stage11(){
	// cut_sound3.play();
  background(255);
  monster_color=color(0, 255, 65);
  background_color=0;

  box3Small(data5, n5);
  if (n5 == 4) {
  	ost_boss3.play();
    background(255);
    push();
    translate(width/2, 3*height/4 - cam.height/2 - 120);
    scale(-1, 1);
    image(cam, 0, 0);
    filter(GRAY);
    filter(POSTERIZE, 3);
    pop();
    box3(data5, n5);
  } else if (n5 % 2 == 1) {
    imageMode(CENTER);
    image(muyaho, width/2, 3*height/7, muyaho.width/2, muyaho.height/2)
    filter(POSTERIZE, 3);
    filter(GRAY);
    if (n5 == 3) {
      fill(255, 0, 0);
      ellipse(0.472*width, 0.385*height, 8, 8);
      ellipse(0.487*width, 0.383*height, 8, 8);
    }
  } else if (n5 % 2 == 0) {
    imageMode(CENTER);
    push();
    translate(width/2, 3*height/7 + 10);
    scale(-1, 1);
    image(cam, 0, 0, cam.width/2, cam.height/2);
    filter(POSTERIZE, 3);
    filter(GRAY);
    pop();
  } 
}



function stage12(){
	ost_boss3.play();
  if(bossSpawned==0){
    bosses.push(new Boss3(width*0.5,height*-0.2));
    bossSpawned=1;
    respawnCount=0;
  }
  if(bosses.length>0){
    respawn_x=bosses[0].v.x;
    respawn_y=bosses[0].v.y;
  }
  if(bosses.length==0 && bossSpawned==1){
    bossSpawned=0;
    stage=12.5;
    monsters=[];
  }
  respawnCount++;
}



function stage125(){
	ost_boss3.stop();
	if(dead_long_n==0){
		dead_long.play();
		dead_long_n=1;
	}
  background(0);
  hero.display();
  if(frame_record_started==0){
    frame_recorded=frameCount;
    frame_record_started=1;
  }
  let gap=frameCount-frame_recorded;
  if(dead_n<8){
    if(parseInt(gap/15)%2==0){
      image(muyaho_transformed,respawn_x,respawn_y,muyaho_transformed.width*0.5*ratio,muyaho_transformed.height*0.5*ratio);
      if((gap+1)%15==0) dead_n++;
    }
    else{
      image(muyaho_transformed_dead,respawn_x,respawn_y,muyaho_transformed.width*0.5*ratio,muyaho_transformed.height*0.5*ratio);
      if((gap+1)%15==0) dead_n++;
    	}
	}
  else if(dead_n<10){
  	image(muyaho_transformed_dead,respawn_x,respawn_y,muyaho_transformed.width*0.5*ratio,muyaho_transformed.height*0.5*ratio);
    if(gap%60==0) dead_n++;
  }
  else if(dead_n<12){
  	if(dead_short_n==0){
  		dead_short.play();
  		dead_short_n=1;
  	}
    if(gap%60==0) dead_n++;
  }
  else{
    dead_n=0;
    dead_long_n=0;
    dead_short_n=0;
    frame_record_started=0;
    stage=13;
  }
}





function stage13(){
	cut_sound4.play();
  if (n6 <= 6){
    image(escape, width/2, height/2, width, height);
    box0(data6, n6);
    if (n6 % 2 == 0) {
      push();
      translate(width/2, 3*height/4 - cam.height/2 - 120);
      scale(-1, 1);
      image(cam, 0, 0);
      pop();
    } else if (n6 % 2 == 1) {
      image(muyaho, width/2, 3*height/4 - muyaho.height/2 - 120, muyaho.width, muyaho.height); 
    }
  } 
  else if (n6 >= 7){
    background(whiteOut);
    whiteOut *= 1.1;
    if (whiteOut >= 255) {
      stage = 14;
    }
  }
}



function stage14(){
  image(img1, width/2, height/2, width, height)
  if (n7 == 0) {
    push();
    translate(width/2, 2*height/5);
    scale(-1, 1);
    image(capture, ran1, ran2, width/2.5, height/2.5);
    pop();
  } else if (n7 >= 1) {
    image(img2, width/2 + ran1, 2*height/5 + ran2, width/2.5, height/2.5);
    box0(data7, n7);
    if (n7 == 5) {
      textAlign(CENTER);
      textSize(30);
      text("-The End-", width/2, 3*height/4);
    }
  }
}

function box0(d,n){
  fill(255, 200);
  rect(width/2, 3 * height/4, 1000, 200);
  textAlign(LEFT);
  textSize(30);
  fill(0);
  text(d[n], width/2, 3*height/4 -40, 800);
}


function webcam1(z, w, h, ts){
  cam.loadPixels();
  let options = ['1','0']
  let x,y;
  push();
  translate(width/2 - cam.width/(2*w), h)
  for(x=0;x<cam.width;x+=cam.width/z){
    for(y=0;y<cam.height;y+=cam.height/z){
      let index=(round(y)*cam.width+round(x))*4;
      let r=cam.pixels[index+0];
      let g=cam.pixels[index+1];
      let b=cam.pixels[index+2];
      let a=cam.pixels[index+3];
      let c=color(r,g,b,a);
      let nc=color(0,255,65);
      let num=round(((r+g+b)/765)*(options.length-1));
      textSize(ts);
      fill(nc);
      text(options[num], cam.width/w - x*(1/w),y*(1/w));
    }
  }
  pop();
} 

function box1(d, n){
  fill(0, 255, 65);
  textAlign(CENTER);
  textSize(30);
  text("= = = = = = = = = = = = = = = = = = = = = = = = = = =\n=                                                   =\n=                                                   =\n=                                                   =\n=                                                   =\n= = = = = = = = = = = = = = = = = = = = = = = = = = =", width/2, 3*height/4 - 100, 1000)
  textAlign(LEFT);
  text(d[n], width/2, 3*height/4 -40, 800);
}

function box1Small(d, n){
  rectMode(CENTER);
  textAlign(CENTER);
  fill(0);
  rect(width/2, height/2, 450, 340);
  fill(0, 255, 65)
  textSize(30);
  text("-------------------------\n|                        |\n|                        |\n|                        |\n|                        |\n|                        |\n|                        |\n|                        |\n|                        |\n-------------------------", width/2, height/3 - 30);
  textSize(16);
  text(d[n], width/2, height*0.62, width/2)
}


function webcam2(z, w, h, ts){
  cam.loadPixels();
  let options=['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ','ㅏ','ㅑ','ㅓ','ㅕ','ㅗ','ㅜ','ㅠ','ㅡ','ㅣ']
  let x,y;
  push();
  translate(width/2 - cam.width/(2*w), h);
  textAlign(CENTER);
  for(x=0;x<cam.width;x+=cam.width/z){
    for(y=0;y<cam.height;y+=cam.height/z){
      let index=(round(y)*cam.width+round(x))*4;
      let r=cam.pixels[index+0];
      let g=cam.pixels[index+1];
      let b=cam.pixels[index+2];
      let a=cam.pixels[index+3];
      let c=color(r,g,b,a);
      let nc=color(round(255*(r+g+b)/500));
      let num=round(((r+g+b)/500)*(options.length-1));
      textSize(ts);
      fill(nc);
      text(options[num], cam.width/w - x*(1/w), y*(1/w));
    }
  }
  pop();
}

function box2(d, n){
  fill(0);
  textSize(30);
  textAlign(CENTER);
  text("= = = = = = = = = = = = = = = = = = = = = = = = = = =\n=                                                   =\n=                                                   =\n=                                                   =\n=                                                   =\n= = = = = = = = = = = = = = = = = = = = = = = = = = =", width/2, 3*height/4 - 100, 1000)
  textAlign(LEFT);
  text(d[n], width/2, 3*height/4 -40, 800);
}

function box2Small(d, n){
  fill(255);
  rect(width/2, height/2, 450, 340);
  fill(0);
  textSize(15);
  textAlign(CENTER);
  text("ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅌㅋㅍㅎㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅌㅋㅍㅎ\n\nㅏ                                                    ㅑ\nㅓ                                                    ㅕ\nㅗ                                                    ㅛ\nㅜ                                                    ㅠ\nㅡ                                                    ㅣ\nㅏ                                                    ㅑ\nㅓ                                                    ㅕ\nㅗ                                                    ㅛ\nㅜ                                                    ㅠ\nㅡ                                                    ㅣ\nㅏ                                                    ㅑ\nㅓ                                                    ㅕ\nㅗ                                                    ㅛ\nㅜ                                                    ㅠ\nㅡ                                                    ㅣ\n\nㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅌㅋㅍㅎㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅌㅋㅍㅎ", width/2, height/3 - 10);
  textSize(16);
  text(d[n], width/2, height*0.62, width/2);
}

function box3(d, n){
  noFill();
  stroke(0);
  rect(width/2, 3 * height/4, 1000, 200);
  textAlign(LEFT);
  textSize(30);
  noStroke();
  fill(0);
  text(d[n], width/2, 3*height/4 -40, 800);
}

function box3Small(d, n){
  noFill();
  stroke(0);
  rect(width/2, height/2, 500, 360);
  fill(0);
  noStroke();
  textSize(16);
  text(d[n], width/2, height*0.62, width/2);
}

function blackOut(){
  fill(out);
  rect(width/2, height/2, width, height);
  out -= 20;
  if (out <= 0){
    stage = 2;
  }
}