API_test = false;

//var API_leeks = [createLeekAPI(0),createLeekAPI(1)];



//renvoie le tableau [size_x],[size_y]
function build_array(x,y){
  var array = [];
  for (var i = 0; i < y; i++) {
    array[i] = [];
    for (var j = 0; j < x; j++) {
      array[i][j] = 0;
    }
  }

  return array;
}

function create_filter( scope_min, scope_max ){
  var arr = build_array( scope_max*2+1, scope_max*2+1 );

  function dist(x,y){
    return Math.abs(x)+Math.abs(y);
  }

  for (var x = 0; x < arr.length; x++) {
    for (var y = 0; y < arr[0].length; y++) {
      if( dist( x - ( scope_max ), y - ( scope_max ) ) >= scope_min &&
          dist( x - ( scope_max ), y - ( scope_max ) ) <= scope_max ){
        arr[x][y] = 1;
      }
    }
  }
  return arr;
}

function display_filter(arr){
  for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
  }
}

// assume que les tableaux sont de la meme taille
function apply_filter(arr1,arr2){

  if(arr1.length != arr2.length || arr1[0].length != arr2[0].length )
    return null;

  var to_return = build_array(arr1.length,arr1[0].length);
  for (var x = 0; x < arr1.length; x++) {
    for (var y = 0; y < arr1[0].length; y++) {
      to_return[x][y] =  arr1[x][y] && arr2[x][y];
    }
  }
  return to_return;
}

function cells_from_filter(arr,center_x,center_y){
  var border = (arr.length-1)/2;
  var cells = [];
  for (var x = 0; x < arr.length; x++) {
    for (var y = 0; y < arr[0].length; y++) {
      if(arr[x][y] == 1){
        var cell_to_push = getCellFromXY(x-border+center_x,y-border+center_y);
        if(cell_to_push != null)
          cells.push(cell_to_push);
      }

    }
  }
  return cells;
}


//
function los(x1, y1, x2, y2) {

  var a = Math.abs(y1 - y2);
  var b = Math.abs(x1 - x2);
  var dx = x1 > x2 ? -1 : 1;
  var dy = y1 < y2 ? 1 : -1;
  var path = [];

  if (b == 0) {
    path.push(0, a + 1);
  } else {
    var d = a / b / 2;
    var h = 0
    for (var i = 0; i < b; ++i) {
      var y = 0.5 + (i * 2 + 1) * d;
      var ry = Math.ceil(y)
      if (ry == y) {
        path.push(h, y - h);
        h = y
      } else {
        path.push(h, ry - h);
        h = ry - 1
      }
    }
    path.push(h, a + 1 - h);
  }
  for (var p = 0; p < path.length; p += 2) {
    for (var i = 0; i < path[p + 1]; ++i) {
      //if (map[y1 + (path[p] + i) * dy][x1 + (p / 2) * dx] == 1) {
      if(isObstacle(getCellFromXY(x1 + (p / 2) * dx,y1 + (path[p] + i) * dy))){
        return false;
      }
    }
  }
  return true;
}



function losInterface(cell1,cell2){
	return los(getCellX(cell1),getCellY(cell1),getCellX(cell2),getCellY(cell2));
}

function LosFilter(cell,dist){
	var x_cell = getCellX(cell);
	var y_cell = getCellY(cell);
	var tmp;
	var result = [];
  var arr = build_array(dist*2+1,dist*2+1);

  var tmp2;
  for (var x = 0; x < arr.length; x++) {
    for (var y = 0; y < arr[0].length; y++) {
			tmp = getCellFromXY(x_cell+x-dist, y_cell+y-dist);
			if(tmp != null)
			 tmp2= losInterface(cell,tmp);
			if(tmp2)
				arr[x][y] = 1;
		}
	}
	return arr;
}
