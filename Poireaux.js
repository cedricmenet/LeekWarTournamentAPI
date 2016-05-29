/*********************************** Poireau api*******************************/
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
