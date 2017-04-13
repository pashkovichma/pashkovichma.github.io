var etalon_array = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg'];
var memory_array1 = [];
var memory_array = [];
var tiles_flipped = 0;

Array.prototype.memory_tile_shuffle = function(){
    var i = this.length , j, temp;
    while (--i> 0){
    	j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    } 
}
function chooseLevel(){
	var output2 = '<h1>Choose the cards quantity to memorize</h1>';
	for (var k = 3; k < 9; k++){
		output2 += '<button onclick="newBoard('+k+')">'+k+'</button>';
	}
	document.getElementById('memory_board').innerHTML = output2;
}
function newBoard(quantity){
	tiles_flipped = 0;
	var output = '';
	var output1 = '';
	var i;
	var q;
	for (q = 0; q<quantity; q++){
		memory_array[q] = etalon_array[q];
		memory_array1[q] = etalon_array[q];
	}
		memory_array.memory_tile_shuffle();
    	memory_array1.memory_tile_shuffle();
	
    for (i = 0; i < memory_array.length; i++){
    	output1 += '<img src = \''+memory_array[i]+'\'>';
    }	
    output1 += '<h2 ">Remember the order</h2>';
    
    document.getElementById('memory_board').innerHTML = output1;
    for(i = 0; i < memory_array.length; i++){
		output += '<img onclick="memoryFlipTile(this,\''+memory_array[i]+'\')" src = "images/tile_bg.jpg" >';
	}
	output += '<h3 >find the card:</h3>'	
	for (i = memory_array1.length-1; i >= 0 ; --i){
		output += '<img id="'+i+'" class = "center" left = \''+i+'\' src=\''+memory_array1[i]+'\'>';
	}
	function time(){
		document.getElementById('memory_board').innerHTML = output;
	}
	setTimeout(time,800*quantity)
}

function memoryFlipTile(tile,val){
	tile.src = val;
	var tile1 = document.getElementById(tiles_flipped);
		if(val == memory_array1[tiles_flipped]){
			tile.className='hide'
			tile1.className='opened';
			tiles_flipped ++;
			// if the whole board is cleared
			if(tiles_flipped == memory_array.length){
				
				setTimeout('alert("Good job! Let\'s try again")', 100);
				document.getElementById('memory_board').innerHTML = "";
				setTimeout('chooseLevel()',200);
			}
			} else {
				function flipBack(){
					tile.src = 'images/tile_bg.jpg';
				}
				setTimeout(flipBack, 700);
			}
}	
