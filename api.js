API_test = false;

//tableau api
function count(arr){
   return arr.length;
}

/*********************************** Poireau api***********************************/
//Poireau
//cree les 2 poireaux
//0 nous 1 enemy


function createLeekAPI(leek){ // leek id
	var m_leek = [];
	m_leek['id'] = leek; //id du poireau
	m_leek['vieMax'];
	m_leek['vie']; //vie
	m_leek['force']; //force
	m_leek['resistance']; //resistance
	m_leek['TP']; //Point tour
	m_leek['MP'] ; //Point mouvement
	m_leek['weapon'];
	m_leek['cell'] ;
	m_leek["chips"];
	m_leek["actions"];
	return m_leek;
}




//getAbsoluteShield
//getAgility
//getAIID
//getAIName
//getBirthTurn
//getCell
function getCell(){
   return API_leeks[0]['cell'];
}
function getCell(leek){
   return API_leeks[leek]['cell'];
}
//getChips
function getChips(leek){
   return API_leeks[leek]['chips'];
}
//getCores
//getDamageReturn
//getEffects
//getEntityTurnOrder
//getFarmerID
//getFarmerName
//getForce
//getFrequency
//getLaunchedEffects
//getLeek
function getLeek(){
   return 0;
}
//getLeekID
//getLevel
//getLife
function getLife(){
   return API_leeks[0]['vie'];
}
function getLife(leek){
   return API_leeks[leek]['vie'];
}
//getMagic
//getMP
//getName
//getRelativeShield
//getResistance
function getResistance(){
   return API_leeks[0]['resistance'];
}
function getResistance(leek){
   return API_leeks[leek]['resistance'];
}
//getScience
//getStrength
function getStrength(){
   return API_leeks[0]['force'];
}
function getStrength(leek){
   return API_leeks[leek]['force'];
}
//getSummoner
//getTeamID
//getTeamName
//getTotalLife
function getTotalLife(){
   return API_leeks[0]['vieMax'];
}
function getTotalLife(leek){
   return API_leeks[leek]['vieMax'];
}
//getTotalMP
function getTotalMP(){
   return API_leeks[0]['MP'];
}
function getTotalMP(leek){
   return API_leeks[leek]['MP'];
}
//getTotalTP
function getTotalTP(){
   return API_leeks[0]['TP'];
}
function getTotalTP(leek){
   return API_leeks[leek]['TP'];
}
//getTP
//getType
//getWeapon
function getWeapon(){
   return API_leeks[0]['weapon'];
}
function getWeapon(leek){
   return API_leeks[leek]['weapon'];
}
//getWeapons
//getWisdom
//isAlive
//isAlly
//isDead
//isEnemy
//isSummon
//listen
//say
//setWeapon



/*********************************** WEAPON ***********************************/
//WEAPON
WEAPON_AXE = 109
WEAPON_B_LASER = 60
WEAPON_BROADSWORD = 108
WEAPON_DESTROYER = 40
WEAPON_DOUBLE_GUN = 39
WEAPON_ELECTRISOR = 44
WEAPON_FLAME_THROWER = 46
WEAPON_GAZOR = 48
WEAPON_GRENADE_LAUNCHER = 43
WEAPON_KATANA = 107
WEAPON_LASER = 42
WEAPON_MACHINE_GUN = 38
WEAPON_MAGNUM = 45
WEAPON_M_LASER = 47
WEAPON_PISTOL = 37
WEAPON_SHOTGUN = 41



CHIP_ACCELERATION = 91
CHIP_ADRENALINE = 16
CHIP_ANTIDOTE = 110
CHIP_ARMOR = 22
CHIP_ARMORING = 67
CHIP_BALL_AND_CHAIN = 93
CHIP_BANDAGE = 3
CHIP_BARK = 104
CHIP_BURNING = 105
CHIP_CARAPACE = 81
CHIP_COLLAR = 103
CHIP_CURE = 4
CHIP_DEVIL_STRIKE = 85
CHIP_DOPING = 26
CHIP_DRIP = 10
CHIP_FEROCITY = 102
CHIP_FERTILIZER = 90
CHIP_FIRE_BULB = 74
CHIP_FLAME = 5
CHIP_FLASH = 6
CHIP_FORTRESS = 29
CHIP_FRACTURE = 106
CHIP_HEALER_BULB = 75
CHIP_HELMET = 21
CHIP_ICE = 2
CHIP_ICEBERG = 31
CHIP_ICED_BULB = 77
CHIP_INVERSION = 68
CHIP_LEATHER_BOOTS = 14
CHIP_LIBERATION = 34
CHIP_LIGHTNING = 33
CHIP_LIGHTNING_BULB = 78
CHIP_LOAM = 89
CHIP_METALLIC_BULB = 79
CHIP_METEORITE = 36
CHIP_MIRROR = 101
CHIP_MOTIVATION = 15
CHIP_PEBBLE = 19
CHIP_PLAGUE = 99
CHIP_PROTEIN = 8
CHIP_PUNY_BULB = 73
CHIP_RAGE = 17
CHIP_RAMPART = 24
CHIP_REFLEXES = 28
CHIP_REGENERATION = 35
CHIP_REMISSION = 80
CHIP_RESURRECTION = 84
CHIP_ROCK = 7
CHIP_ROCKFALL = 32
CHIP_ROCKY_BULB = 76
CHIP_SEVEN_LEAGUE_BOOTS = 13
CHIP_SHIELD = 20
CHIP_SHOCK = 1
CHIP_SLOW_DOWN = 92
CHIP_SOLIDIFICATION = 96
CHIP_SOPORIFIC = 95
CHIP_SPARK = 18
CHIP_STALACTITE = 30
CHIP_STEROID = 25
CHIP_STRETCHING = 9
CHIP_TELEPORTATION = 59
CHIP_THORN = 100
CHIP_TOXIN = 98
CHIP_TRANQUILIZER = 94
CHIP_VACCINE = 11
CHIP_VENOM = 97
CHIP_WALL = 23
CHIP_WARM_UP = 27
CHIP_WHIP = 88
CHIP_WINGED_BOOTS = 12









/*********************************** TERRAIN ***********************************/
var API_cells = {"-17" :{"0" :0},"-16" :{"-1" :1,"0" :18,"1" :35},"-15" :{"-2" :2,"-1" :19,"0" :36,"1" :53,"2" :70},"-14" :{"-3" :3,"-2" :20,"-1" :37,"0" :54,"1" :71,"2" :88,"3" :105},"-13" :{"-4" :4,"-3" :21,"-2" :38,"-1" :55,"0" :72,"1" :89,"2" :106,"3" :123,"4" :140},"-12" :{"-5" :5,"-4" :22,"-3" :39,"-2" :56,"-1" :73,"0" :90,"1" :107,"2" :124,"3" :141,"4" :158,"5" :175},"-11" :{"-6" :6,"-5" :23,"-4" :40,"-3" :57,"-2" :74,"-1" :91,"0" :108,"1" :125,"2" :142,"3" :159,"4" :176,"5" :193,"6" :210},"-10" :{"-7" :7,"-6" :24,"-5" :41,"-4" :58,"-3" :75,"-2" :92,"-1" :109,"0" :126,"1" :143,"2" :160,"3" :177,"4" :194,"5" :211,"6" :228,"7" :245},"-9" :{"-8" :8,"-7" :25,"-6" :42,"-5" :59,"-4" :76,"-3" :93,"-2" :110,"-1" :127,"0" :144,"1" :161,"2" :178,"3" :195,"4" :212,"5" :229,"6" :246,"7" :263,"8" :280},"-8" :{"-9" :9,"-8" :26,"-7" :43,"-6" :60,"-5" :77,"-4" :94,"-3" :111,"-2" :128,"-1" :145,"0" :162,"1" :179,"2" :196,"3" :213,"4" :230,"5" :247,"6" :264,"7" :281,"8" :298,"9" :315},"-7" :{"-10" :10,"-9" :27,"-8" :44,"-7" :61,"-6" :78,"-5" :95,"-4" :112,"-3" :129,"-2" :146,"-1" :163,"0" :180,"1" :197,"2" :214,"3" :231,"4" :248,"5" :265,"6" :282,"7" :299,"8" :316,"9" :333,"10" :350},"-6" :{"-11" :11,"-10" :28,"-9" :45,"-8" :62,"-7" :79,"-6" :96,"-5" :113,"-4" :130,"-3" :147,"-2" :164,"-1" :181,"0" :198,"1" :215,"2" :232,"3" :249,"4" :266,"5" :283,"6" :300,"7" :317,"8" :334,"9" :351,"10" :368,"11" :385},"-5" :{"-12" :12,"-11" :29,"-10" :46,"-9" :63,"-8" :80,"-7" :97,"-6" :114,"-5" :131,"-4" :148,"-3" :165,"-2" :182,"-1" :199,"0" :216,"1" :233,"2" :250,"3" :267,"4" :284,"5" :301,"6" :318,"7" :335,"8" :352,"9" :369,"10" :386,"11" :403,"12" :420},"-4" :{"-13" :13,"-12" :30,"-11" :47,"-10" :64,"-9" :81,"-8" :98,"-7" :115,"-6" :132,"-5" :149,"-4" :166,"-3" :183,"-2" :200,"-1" :217,"0" :234,"1" :251,"2" :268,"3" :285,"4" :302,"5" :319,"6" :336,"7" :353,"8" :370,"9" :387,"10" :404,"11" :421,"12" :438,"13" :455},"-3" :{"-14" :14,"-13" :31,"-12" :48,"-11" :65,"-10" :82,"-9" :99,"-8" :116,"-7" :133,"-6" :150,"-5" :167,"-4" :184,"-3" :201,"-2" :218,"-1" :235,"0" :252,"1" :269,"2" :286,"3" :303,"4" :320,"5" :337,"6" :354,"7" :371,"8" :388,"9" :405,"10" :422,"11" :439,"12" :456,"13" :473,"14" :490},"-2" :{"-15" :15,"-14" :32,"-13" :49,"-12" :66,"-11" :83,"-10" :100,"-9" :117,"-8" :134,"-7" :151,"-6" :168,"-5" :185,"-4" :202,"-3" :219,"-2" :236,"-1" :253,"0" :270,"1" :287,"2" :304,"3" :321,"4" :338,"5" :355,"6" :372,"7" :389,"8" :406,"9" :423,"10" :440,"11" :457,"12" :474,"13" :491,"14" :508,"15" :525},"-1" :{"-16" :16,"-15" :33,"-14" :50,"-13" :67,"-12" :84,"-11" :101,"-10" :118,"-9" :135,"-8" :152,"-7" :169,"-6" :186,"-5" :203,"-4" :220,"-3" :237,"-2" :254,"-1" :271,"0" :288,"1" :305,"2" :322,"3" :339,"4" :356,"5" :373,"6" :390,"7" :407,"8" :424,"9" :441,"10" :458,"11" :475,"12" :492,"13" :509,"14" :526,"15" :543,"16" :560},"0" :{"-17" :17,"-16" :34,"-15" :51,"-14" :68,"-13" :85,"-12" :102,"-11" :119,"-10" :136,"-9" :153,"-8" :170,"-7" :187,"-6" :204,"-5" :221,"-4" :238,"-3" :255,"-2" :272,"-1" :289,"0" :306,"1" :323,"2" :340,"3" :357,"4" :374,"5" :391,"6" :408,"7" :425,"8" :442,"9" :459,"10" :476,"11" :493,"12" :510,"13" :527,"14" :544,"15" :561,"16" :578,"17" :595},"1" :{"-16" :52,"-15" :69,"-14" :86,"-13" :103,"-12" :120,"-11" :137,"-10" :154,"-9" :171,"-8" :188,"-7" :205,"-6" :222,"-5" :239,"-4" :256,"-3" :273,"-2" :290,"-1" :307,"0" :324,"1" :341,"2" :358,"3" :375,"4" :392,"5" :409,"6" :426,"7" :443,"8" :460,"9" :477,"10" :494,"11" :511,"12" :528,"13" :545,"14" :562,"15" :579,"16" :596},"2" :{"-15" :87,"-14" :104,"-13" :121,"-12" :138,"-11" :155,"-10" :172,"-9" :189,"-8" :206,"-7" :223,"-6" :240,"-5" :257,"-4" :274,"-3" :291,"-2" :308,"-1" :325,"0" :342,"1" :359,"2" :376,"3" :393,"4" :410,"5" :427,"6" :444,"7" :461,"8" :478,"9" :495,"10" :512,"11" :529,"12" :546,"13" :563,"14" :580,"15" :597},"3" :{"-14" :122,"-13" :139,"-12" :156,"-11" :173,"-10" :190,"-9" :207,"-8" :224,"-7" :241,"-6" :258,"-5" :275,"-4" :292,"-3" :309,"-2" :326,"-1" :343,"0" :360,"1" :377,"2" :394,"3" :411,"4" :428,"5" :445,"6" :462,"7" :479,"8" :496,"9" :513,"10" :530,"11" :547,"12" :564,"13" :581,"14" :598},"4" :{"-13" :157,"-12" :174,"-11" :191,"-10" :208,"-9" :225,"-8" :242,"-7" :259,"-6" :276,"-5" :293,"-4" :310,"-3" :327,"-2" :344,"-1" :361,"0" :378,"1" :395,"2" :412,"3" :429,"4" :446,"5" :463,"6" :480,"7" :497,"8" :514,"9" :531,"10" :548,"11" :565,"12" :582,"13" :599},"5" :{"-12" :192,"-11" :209,"-10" :226,"-9" :243,"-8" :260,"-7" :277,"-6" :294,"-5" :311,"-4" :328,"-3" :345,"-2" :362,"-1" :379,"0" :396,"1" :413,"2" :430,"3" :447,"4" :464,"5" :481,"6" :498,"7" :515,"8" :532,"9" :549,"10" :566,"11" :583,"12" :600},"6" :{"-11" :227,"-10" :244,"-9" :261,"-8" :278,"-7" :295,"-6" :312,"-5" :329,"-4" :346,"-3" :363,"-2" :380,"-1" :397,"0" :414,"1" :431,"2" :448,"3" :465,"4" :482,"5" :499,"6" :516,"7" :533,"8" :550,"9" :567,"10" :584,"11" :601},"7" :{"-10" :262,"-9" :279,"-8" :296,"-7" :313,"-6" :330,"-5" :347,"-4" :364,"-3" :381,"-2" :398,"-1" :415,"0" :432,"1" :449,"2" :466,"3" :483,"4" :500,"5" :517,"6" :534,"7" :551,"8" :568,"9" :585,"10" :602},"8" :{"-9" :297,"-8" :314,"-7" :331,"-6" :348,"-5" :365,"-4" :382,"-3" :399,"-2" :416,"-1" :433,"0" :450,"1" :467,"2" :484,"3" :501,"4" :518,"5" :535,"6" :552,"7" :569,"8" :586,"9" :603},"9" :{"-8" :332,"-7" :349,"-6" :366,"-5" :383,"-4" :400,"-3" :417,"-2" :434,"-1" :451,"0" :468,"1" :485,"2" :502,"3" :519,"4" :536,"5" :553,"6" :570,"7" :587,"8" :604},"10" :{"-7" :367,"-6" :384,"-5" :401,"-4" :418,"-3" :435,"-2" :452,"-1" :469,"0" :486,"1" :503,"2" :520,"3" :537,"4" :554,"5" :571,"6" :588,"7" :605},"11" :{"-6" :402,"-5" :419,"-4" :436,"-3" :453,"-2" :470,"-1" :487,"0" :504,"1" :521,"2" :538,"3" :555,"4" :572,"5" :589,"6" :606},"12" :{"-5" :437,"-4" :454,"-3" :471,"-2" :488,"-1" :505,"0" :522,"1" :539,"2" :556,"3" :573,"4" :590,"5" :607},"13" :{"-4" :472,"-3" :489,"-2" :506,"-1" :523,"0" :540,"1" :557,"2" :574,"3" :591,"4" :608},"14" :{"-3" :507,"-2" :524,"-1" :541,"0" :558,"1" :575,"2" :592,"3" :609},"15" :{"-2" :542,"-1" :559,"0" :576,"1" :593,"2" :610},"16" :{"-1" :577,"0" :594,"1" :611},"17" :{"0" :612}};
var API_cells_X = [-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
var API_cells_Y = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];


//getCellContent
//getCellDistance
function getCellDistance(cell1,cell2){
   return Math.sqrt(
   Math.pow(Math.abs(getCellY(cell1)-getCellY(cell2)),2)+
   Math.pow(Math.abs(getCellX(cell1)-getCellX(cell2)),2));
}
if(API_test){
console.log("getCellDistance");
console.log(getCellDistance(0,54));
}

//getCellFromXY
function getCellFromXY(x,y){
   if( x in API_cells)
      if( y in API_cells[x])
         return API_cells[x][y]
   return null;
}
//getCellX
function getCellX(cell){
   if (cell in API_cells_X)
      return API_cells_X[cell];
   return null;
}

//getCellY
function getCellY(cell){
   return API_cells_Y[cell];
}

//getDistance
function getDistance(cell1,cell2){
   return abs(getCellY(cell1)-getCellY(cell2))+abs(getCellX(cell1)-getCellX(cell2));
}

//getLeekOnCell
function getLeekOnCell(cell){
   for(var i = 0; i < API_leeks;i++)
      if(getCell(i) == cell)
         return i;
   return -1;
}
//getMapType
function getMapType(){
   return "irrelevent";
}

//getObstacles
function getObstacles(){
return [6, 23, 24, 27, 29, 34, 35, 41, 44, 45, 46, 47, 51, 52, 53, 62, 64, 69, 75, 107, 108, 115, 124, 125, 126, 141, 142, 143, 146, 155, 159, 167, 172, 173, 177, 184, 185, 188, 190, 192, 202, 209, 230, 245, 247, 259, 264, 265, 282, 295, 320, 336, 337, 338, 347, 350, 355, 364, 365, 366, 371, 372, 382, 383, 389, 390, 407, 412, 428, 429, 430, 435, 447, 449, 452, 453, 466, 467, 470, 474, 476, 484, 501, 506, 523, 524, 527, 541, 544, 545, 562, 570, 602, 605, 610];
}

//getPath
function getPath(cell1,cell2){
   return dijkstra(cell1,cell2);
}

function dijkstra(cell1,cell2){
   var prev = [];
   var toVisit = new Set();
   toVisit.add(cell1);
   
   var currentSet;
   var x;
   var y;
   
   
   while( !(cell2 in  prev) && toVisit.size != 0)
   {
      currentSet = toVisit;
      toVisit = new Set();
      for (let cell of currentSet){
         x = getCellX(cell);
         y = getCellY(cell);
         
         {
            var ctmp = getCellFromXY(x+1,y);
            if(!isObstacle(ctmp) && !toVisit.has(ctmp) && !(ctmp in prev)){
               toVisit.add(ctmp);
               prev[ctmp] = cell;
            }
         }
         {
            var ctmp = getCellFromXY(x-1,y);
            if(!isObstacle(ctmp) && !toVisit.has(ctmp) && !(ctmp in prev) ){
               toVisit.add(ctmp);
               prev[ctmp] = cell;
            }
         }
         {
            var ctmp = getCellFromXY(x,y+1);
            if(!isObstacle(ctmp) && !toVisit.has(ctmp) &&!(ctmp in prev)){
               toVisit.add(ctmp);
               prev[ctmp] = cell;
            }
         }
         {
            var ctmp = getCellFromXY(x,y-1);
            if(!isObstacle(ctmp) && !toVisit.has(ctmp) && !(ctmp in prev) ){
               toVisit.add(ctmp);
               prev[ctmp] = cell;
            }
         }
         
      }
   }
   
   result = [cell2];
   var current_cell = cell2;
   while(current_cell != cell1){
      result.push(prev[current_cell]);
      current_cell = prev[current_cell];
   }
   return result;
   
   
}

if(API_test){
console.log(dijkstra(0,612));
console.log(getObstacles());
console.log(getPathLength(0,612));

}
//getPathLength
function getPathLength(cell1,cell2){
   return count(getPath(cell1,cell2));
}
//isEmptyCell
function isEmptyCell(cell){
   if(!isLeek(cell) && !isObstacle(cell))
      return true;
   return false;
}


//isLeek
function isLeek(cell){
   for(var i = 0; i < API_leeks;i++)
      if(getCell(i) == cell)
         return true;
   return false;
}
   
//isObstacle
function isObstacle(cell){
   if (getObstacles().indexOf(cell) != -1)
      return true;
   return false;
}
//isOnSameLine
function isOnSameLine(cell1,cell2){
   if(getCellY(cell1) == getCellY(cell2))
      return true;
   if(getCellX(cell1) == getCellX(cell2))
      return true;
   
   return false;
}

if(API_test){
var arr= [1,2,3,4];
console.log(count(arr));
}

function los(map, x1, y1, x2, y2) {
			
		var a = Math.abs(y1 - y2)
		var b = Math.abs(x1 - x2)
		var dx = x1 > x2 ? -1 : 1
		var dy = y1 < y2 ? 1 : -1
		var path = []

		if (b == 0) {
			path.push(0, a + 1)
		} else {
			var d = a / b / 2
			var h = 0
			for (var i = 0; i < b; ++i) {
				var y = 0.5 + (i * 2 + 1) * d
				var ry = Math.ceil(y)
				if (ry == y) {
					path.push(h, y - h)
					h = y
				} else {
					path.push(h, ry - h)
					h = ry - 1
				}
			}
			path.push(h, a + 1 - h)
		}
		for (var p = 0; p < path.length; p += 2) {
			for (var i = 0; i < path[p + 1]; ++i) {
				//if (map[y1 + (path[p] + i) * dy][x1 + (p / 2) * dx] == 1) {
               if(isObstacle(getCellFromXY(x1 + (p / 2) * dx,y1 + (path[p] + i) * dy)))
					return false
				}
			}
		}
		return true
}
//(IA : Sans Titre, line : 291) Fonction inconnue : count(null)
//(IA : Sans Titre, line : 284) Fonction inconnue : inArray(null, number)
//(IA : Sans Titre, line : 265) Fonction inconnue : arrayConcat(null, number)
