
var radioPelota = 15;
var color = "#CC33FF";
var despPelotaX = 2.3;
var despPelotaY = 4.3;

var tamanoXLienzo = 500;
var tamanoYLienzo = 500;
var lienzoMin= 0;

var posX = 35;
var posY = 70;
var dirX = 1; //Hacia la derecha 1 , hacia la izquierda -1
var dirY = -1; // Hacia arriba 1, hacia abajo -1

var contexto, elCanvas;

function dibujar(){
	"use strict";
	elCanvas = document.getElementById("lienzo");
	contexto = elCanvas.getContext("2d");
	
	function dibujaPelota(){ //Dibuja la pelota
		contexto.beginPath();
		contexto.arc(posX, posY, radioPelota, 0,2*Math.PI);
		contexto.fillStyle = color;
		contexto.fill();
		contexto.closePath(); //Cierra el trazo
	}
	
	function verificaPos(){ //Verifica si la pelota choca
		if(dirX === 1){
			if(posX > (tamanoXLienzo-radioPelota-despPelotaX)){
				dirX=-1;
				color = "#262BD9";
			}
		} else if (dirX === -1){
			if(posX <(lienzoMin + radioPelota + despPelotaX)){
				dirX=1;
				color = "#CC33FF";
			}
		}

		if(dirY === -1){
			if(posY > (tamanoYLienzo-radioPelota-despPelotaY)){
				dirY=1;
				color = "#06C7D0";
			}
		} else if (dirY === 1){
			if(posY <(lienzoMin + radioPelota + despPelotaY)){
				dirY=-1;
				color = "#D70066";
			}
		}
	}
	function muevePelota(){
		contexto.clearRect(0, 0, elCanvas.width, elCanvas.height);
		dibujaPelota();
		verificaPos();
		if(dirX===1){
			posX = posX + despPelotaX;
		} else {
			posX = posX - despPelotaX;
		}
		if(dirY ===-1){
			posY = posY + despPelotaY;
		} else{
			posY = posY - despPelotaY;
		}
	}
	setInterval(muevePelota,10); //Dibujar con intervalos de 10 ms
}

/**
function iniciar(){
	"use strict";
	elCanvas = document.getElementById("lienzo");
	contexto = elCanvas.getContext("2d");
	setInterval(rebotePelota(),50);	
}
function rebotePelota(){
	"use strict";
	contexto.fillStyle="white";
	contexto.strokeStyle="white";
	
	contexto.arc(posX, posY, radioPelota, 0,2*Math.PI);
	contexto.fill();
	contexto.stroke(); //Dibuja lo que definimos anteriormente
	
	//Verificamos donde va la pelota
	if(dirX === 1){
		if(posX > (tamanoXLienzo-radioPelota-despPelota)){
			dirX=-1;
		}
	} else if (dirX === -1){
		if(posX <(lienzoMin + radioPelota + despPelota)){
			dirX=1;
		}
	}
	
	if(dirY === -1){
		if(posY > (tamanoYLienzo-radioPelota-despPelota)){
			dirY=1;
		}
	} else if (dirY === 1){
		if(posX <(lienzoMin + radioPelota + despPelota)){
			dirY=-1;
		}
	}
	//Movimiento de la pelota
	if(dirX===1){
		posX = posX + despPelota;
	} else {
		posX = posX - despPelota;
	}
	if(dirY ===-1){
		posY = posY + despPelota;
	} else{
		posY = posY - despPelota;
	}
	
	contexto.fillStyle = "#FF0000";
	contexto.beginPath();
	contexto.arc(posX,posY,radioPelota,0,2*Math.PI);
	contexto.fill();
	contexto.strokeStyle = "blue";
	
}*/