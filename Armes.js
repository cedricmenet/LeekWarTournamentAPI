/*********************************** WEAPON ***********************************/


AREA_POINT = 0;
AREA_LASER_LINE = 1;
AREA_CIRCLE_1 = 3;
AREA_CIRCLE_2 = 5;
AREA_CIRCLE_3 = 7;


// name maxRange minRange


//canUseWeapon
function canUseWeapon()
{

}
//canUseWeaponOnCell
function canUseWeaponOnCell()
{

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
function getWeaponMaxScope()
{
  return weapons_api[weapon]["scope"]["max"];
}
//getWeaponMinRange
function getWeaponMinRange()
{
  return weapons_api[weapon]["scope"]["min"];
}
//getWeaponMinScope
function getWeaponMinScope()
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
function useWeapon()
{

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
