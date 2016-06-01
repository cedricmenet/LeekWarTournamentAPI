/*********************************** WEAPON ***********************************/


AREA_POINT = 0;
AREA_LASER_LINE = 1;
AREA_CIRCLE_1 = 3;
AREA_CIRCLE_2 = 5;
AREA_CIRCLE_3 = 7;


// name maxRange minRange

function log(){
  console.log(_TEST);
}

//canUseWeapon
function canUseWeapon(weapon,leek)
{
  var cell_leek = getCell(leek);
  return canUseWeaponOnCell(weapon,cell_leek)
}
//canUseWeaponOnCell
function canUseWeaponOnCell(weapon,cell_target)
{
    var cell =  getCell();
    var g = create_filter(getWeaponMinRange(weapon),getWeaponMaxRange(weapon));
    var t = LosFilter(cell,getWeaponMaxRange(weapon));
    var f = apply_filter(t,g);
    var r = cells_from_filter(f,getCellX(cell),getCellY(cell));
    console.log(''+cell + getCellX(cell) + getCellY(cell));
    console.log(r);
    if (r.indexOf(cell_target) != -1)
      return true;
    return false;
}
//getWeaponArea
function getWeaponArea(weapon)
{
  return weapons_api[weapon]['radius'];
}
//getWeaponCost
function getWeaponCost(weapon)
{
  return weapons_api[weapon]["cost"];
}
//getWeaponEffectiveArea
function getWeaponEffectiveArea(weapon,cell)
{

}
//getWeaponEffects
function getWeaponEffects()
{

}
//getWeaponFailure
/*function getWeaponFailure()
{

}*/
//getWeaponMaxRange
function getWeaponMaxRange(weapon)
{
  return weapons_api[weapon]["scope"]["max"];
}
//getWeaponMaxScope
function getWeaponMaxScope(weapon)
{
  return weapons_api[weapon]["scope"]["max"];
}
//getWeaponMinRange
function getWeaponMinRange(weapon)
{
  return weapons_api[''+weapon]["scope"]["min"];
}
//getWeaponMinScope
function getWeaponMinScope(weapon)
{
  return weapons_api[weapon]["scope"]["min"];
}
//getWeaponName
function getWeaponName()
{
  return weapons_api[weapon]["name"];
}
//isInlineWeapon
function isInlineWeapon(weapon)
{
  return weapons_api[weapon]["scope"]["inline"];
}
//isWeapon
function isWeapon(weapon)
{
  if(weapons_api[weapon] != null)
    return true;
  return false;
}
//useWeapon
function useWeapon(leek)
{
  if(canUseWeapon(getWeapon(),leek)){

  }
}
//useWeaponOnCell
function useWeaponOnCell()
{

}
//weaponNeedLos
function weaponNeedLos()
{
  return weapons_api[weapon]["scope"]["los"];
}
