//--------------------------------
//------- Code de base -----------
//--------------------------------

var myleek = createLeek(getLeek());
debug(myleek);


function createLeek(leek){ // leek id
	var m_leek = [];
	m_leek['id'] = leek; //id du poireau
	m_leek['vieMax'] = getTotalLife(leek); // vie max
	m_leek['vie'] = getLife(leek); //vie
	m_leek['force'] = getStrength(leek); //force
	m_leek['resistance'] = getResistance(leek); //resistance
	m_leek['pt'] = getTotalTP(leek); //Point tour
	m_leek['pm'] = getTotalMP(leek); //Point mouvement
	m_leek['weapon'] = getWeapon(leek);
	m_leek['cell'] = getCell(leek);
	m_leek["chips"] =  getChips(leek);
	m_leek["actions"] = [];
	return m_leek;
}

function setMovementActions(m_leek){
	push(m_leek["actions"], cA("up",0,1));
	push(m_leek["actions"], cA("down",0,1));
	push(m_leek["actions"], cA("right",0,1));
	push(m_leek["actions"], cA("left",0,1));
	return m_leek;
}



function setActions(myleek){
	for (var i = 0; i < count(myleek["chips"]); i++) {
		push(myleek["actions"],cA(getChipName(myleek["chips"][i]),getChipCost(myleek["chips"][i]),0));
	}
	return myleek;
}

//set actions
myleek = setMovementActions(myleek);
myleek = setActions(myleek);


//create action
function cA(name, costTp,costPm){
	return {"name":name, "costTp":costTp,"costPm":costPm};
};



SET_SIZE = 1;
NB_RANDOM = 6;

function genSet(leek){
	debug(leek);
	var AC_taken = [];


	var initialTP = leek["pt"];
	var initialMP = leek['pm'];
	for(var i = 0 ; i < NB_RANDOM;i++){

		var tmpAction = randInt(0, count(leek["actions"]));
		if(initialTP - leek["actions"][tmpAction]["costTp"] >= 0 &&
		initialMP - leek["actions"][tmpAction]["costPm"] >= 0){
			push(AC_taken,tmpAction);
			initialTP -= leek["actions"][tmpAction]["costTp"];
			initialMP -= leek["actions"][tmpAction]["costPm"];
		}
	}

	for (var i = 0; i < count(AC_taken); i++) {
		debug(leek["actions"][AC_taken[i]]["name"]);
	}

}

for (var i = 0; i < SET_SIZE; i++) {
	genSet(myleek);
}

debug(getOperations());
