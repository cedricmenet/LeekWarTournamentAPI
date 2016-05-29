//WEAPON
WEAPON_AXE = 109;
WEAPON_B_LASER = 60;
WEAPON_BROADSWORD = 108;
WEAPON_DESTROYER = 40;
WEAPON_DOUBLE_GUN = 39;
WEAPON_ELECTRISOR = 44;
WEAPON_FLAME_THROWER = 46;
WEAPON_GAZOR = 48;
WEAPON_GRENADE_LAUNCHER = 43;
WEAPON_KATANA = 107;
WEAPON_LASER = 42;
WEAPON_MACHINE_GUN = 38;
WEAPON_MAGNUM = 45;
WEAPON_M_LASER = 47;
WEAPON_PISTOL = 37;
WEAPON_SHOTGUN = 41;


var weapons_api = { WEAPON_PISTOL:
  {
    'name': 'Pistolet',
    'cooldown': 0,
    'cost': 3,
    'count': 1,
    'radius': 0,
    'scope': {
      'min': 1,
      'max': 7,
      'inline': false,
      'los': true
      },
  'fails': 5,
  'damages': {
    'min': 15,
    'max': 20,
    'avg': 17.5,
    'raw': (15 + 20) / 2
  },
  'damages_over_time': {
    'min': 0,
    'max': 0,
    'avg': 0,
    'raw': (0 + 0) / 2},
    'heals': {
      'min': 0,
      'max': 0,
      'avg': 0,
      'raw': (0 + 0) / 2
   },
   'max_health': {
     'min': 0,
     'max': 0,
     'avg': 0,
     'raw': (0 + 0) / 2
   },
   'relative': 0,
   'absolute': 0,
   'turn_point': 0,
   'movement_point': 0,
   'agility': 0,
   'strength': 0
  }
}
