var arrows = [
'https://ucare.timepad.ru/9d9e4a08-b407-472d-96dc-982fb6ce8322/',
'https://static.tildacdn.com/tild3236-3939-4230-a162-636665656437/580b57fcd9996e24bc43.png',
'https://www.clipartmax.com/png/full/115-1151051_red-hearts-and-arrows-setas-png-vector.png',
'https://www.clipartmax.com/png/full/0-2547_curved-arrow-clip-art-curved-arrow-icon-png.png',
'https://www.clipartmax.com/png/full/1-17828_arrow-red-free-stock-photo-illustration-of-a-diagonal-transparent-background-arrow.png',
'https://www.clipartmax.com/png/full/2-24645_yellow-arrow-clip-art-yellow-arrow-png.png',
'https://www.clipartmax.com/png/full/4-45704_large-arrow-clipart-collection-indian-clip-art-free-brown-arrow-png.png'
];

{

    var rmenu = document.createElement("div");
    rmenu.innerHTML = "<div id='rmenu' class='rmenu' style = 'z-index:999999; cursor: pointer; position:absolute; top:140px'><img id='image'  src='https://ucare.timepad.ru/9d9e4a08-b407-472d-96dc-982fb6ce8322/-/crop/864x1204/41,140/-/preview/' width='50'></div>";
    document.body.appendChild(rmenu);

		<!--- draggable div -->
		var currDiv =  document.getElementById('rmenu');
		currDiv.style.cursor = 'pointer';
		currDiv.onmousedown = function (e) {
		 	var x = e.clientX ;
		     	var y = e.clientY ;
		      	var Ox = currDiv.offsetLeft;
		     	var Oy = currDiv.offsetTop;
			
			document.onmousemove = function (e) {
				currDiv.style.left = parseFloat(e.clientX) - x + Ox + "px";
				currDiv.style.top = parseFloat(e.clientY) - y + Oy + "px";
				return false;
			}
		
			document.onmouseup = function (e) {
				if (Ox != currDiv.offsetLeft) {
					cancelShowCart = true;
					previewActive = false;
					setTimeout(function(){ previewActive = true; }, 100);
				}
				document.onmousemove = '';
				document.onmouseup = '';
				return false;
			}
		return false;
		};

		<!--- //draggable div -->

		var angle = 30;
		function rotateRight(image) {
		  image.setAttribute("style", "transform: rotate(" + angle + "deg)");
		  angle = angle + 30;
		}

		let curr_arrow = 1;
		if (currDiv.addEventListener) {
			currDiv.addEventListener('contextmenu', function(e) {
				curr_arrow = curr_arrow + 1;
				document.getElementById('image').src=arrows[curr_arrow%arrows.length];
				e.preventDefault();
		})}

		addEventListener("keydown", function (event) {
			if (event.keyCode == 120) {
				if (document.getElementById('image').style.display != "none") {
					document.getElementById('image').style.display = "none";
				} else
				{
					document.getElementById('image').style.display = "inline";
				}
			}
			if (event.keyCode == 119) {
    				rotateRight(document.getElementById('image')); 
			}
			if (event.keyCode == 118) {
				curr_arrow = curr_arrow + 1;
				document.getElementById('image').src=arrows[curr_arrow%arrows.length];
				e.preventDefault();
			}



		})

};




