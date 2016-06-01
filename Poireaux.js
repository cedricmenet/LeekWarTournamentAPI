/*********************************** Poireau api*******************************/
//Poireau
//cree les 2 poireaux
//0 nous 1 enemy




function createLeekAPI(leek){ // leek id
  var m_leek = new Object();
  m_leek["id"] = leek; //id du poireau
  m_leek["vieMax"] = 0 ;
  m_leek["vie"] = 0 ; //vie
  m_leek["force"] = 0 ; //force
  m_leek["sagesse"] = 0; // sagesse
  m_leek["agilite"] = 0;
  m_leek["resistance"] = 0 ; //resistance
  m_leek["science"] = 0;
  m_leek["magie"] = 0;
  m_leek["frequence"] = 0;
  m_leek["Total_TP"] = 0 ; //Point tour
  m_leek["TP"] = 0 ; //Point tour
  m_leek["MP"]  = 0 ; //Point mouvement
  m_leek["weapon"] = 0 ;
  m_leek["weapons"] = [WEAPON_PISTOL] ;
  m_leek["cell"]  = 0 ;
  m_leek["chips"] = 0 ;
  m_leek["actions"] = 0 ;
  m_leek["name"] = "greg" ;

  return m_leek;
}





//getAbsoluteShield
//getAgility
function getAgility(leek){
  if(leek == undefined )
    leek = 0;
  return API_leeks[leek]['agilite'];
}


//getAIID
//getAIName
//getBirthTurn
//getCell
function getCell(){
  return API_leeks[0]['cell'];
}
function getCell(leek){
  if(leek == undefined )
    leek = 0;
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
function getForce(leek){
  if(leek == undefined )
    leek = 0;
  return API_leeks[leek]['force'];
}
//getFrequency
function getFrequency(leek){
  if(leek == undefined )
    leek = 0;
  return API_leeks[leek]['frequence'];
}
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
function getMagic(leek){
  if(leek == undefined )
    leek = 0;
  return API_leeks[leek]['magie'];
}
//getMP
function getFrequency(leek){
  if(leek == undefined )
    leek = 0;
  return API_leeks[leek]['frequence'];
}
//getName
function getMagic(leek){
  if(leek == undefined )
    leek = 0;
  return API_leeks[leek]['name'];
}
//getRelativeShield
//getResistance
function getResistance(){
  return API_leeks[0]['resistance'];
}
function getResistance(leek){
  if(leek == undefined)
    leek = 0;
  return API_leeks[leek]['resistance'];
}
//getScience
function getScience(leek){
  if(leek == undefined )
    leek = 0;
  return API_leeks[leek]['science'];
}
//getStrength
function getStrength(){
  return API_leeks[0]['force'];
}
function getStrength(leek){
  if(leek == undefined)
    leek = 0;
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
  if(leek == undefined)
    leek = 0;
  return API_leeks[leek]['vieMax'];
}
//getTotalMP
function getTotalMP(){
  return API_leeks[0]['MP'];
}
function getTotalMP(leek){
  if(leek == undefined)
    leek = 0;
  return API_leeks[leek]['MP'];
}
//getTotalTP
function getTotalTP(){
  return API_leeks[0]['Total_TP'];
}
function getTotalTP(leek){
  if(leek == undefined)
    leek = 0;
  return API_leeks[leek]['TP'];
}
//getTP
function getTotalTP(leek){
  if(leek == undefined)
    leek = 0;
  return API_leeks[leek]['TP'];
}

//getType
//getWeapon
function getWeapon(){
  return API_leeks[0]['weapon'];
}
function getWeapon(leek){
  if(leek == undefined)
    leek = 0;
  return API_leeks[leek]['weapon'];
}
//getWeapons
function getWeapons(leek){
  if(leek == undefined)
    leek = 0;
  return API_leeks[leek]['weapons'];
}
//getWisdom
function getWisdom(leek){
  if(leek == undefined)
    leek = 0;
  return API_leeks[leek]['sagesse'];
}

//isAlive
function isAlive(leek){
  if(leek == undefined)
    leek = 0;
  return API_leeks[leek]['vie'] > 0;
}
//isAlly
//isDead
function isAlive(leek){
  if(leek == undefined)
    leek = 0;
  return API_leeks[leek]['vie'] <= 0;
}
//isEnemy
//isSummon
//listen
//say
//setWeapon
function setWeapon(weapon){
  if(getWeapons().indexOf(weapon) != -1){
    m_leek["weapon"] = weapon;
  }
}
