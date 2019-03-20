"use strict";
	
function whichCoinsToIssue(){
	var coins = document.getElementById("coinsIn").value;
	var coins50 = 50;
	var coins20 = 20;
	var coins10 = 10;
	var coins5 = 5;
	var coins2 = 2;
	var coins1 = 1;
	var pieces50 = 0;
	var pieces20 = 0;
	var pieces10 = 0;
	var pieces5 = 0;
	var pieces2 = 0;
	var piece1 = 0;
	var pieces = 0; 
		while(coins50 <= coins){
			coins -= coins50;
			pieces50++;
		}
		while(coins20 <= coins){
			coins -= coins20;
			pieces20++;
		}				
		while (coins10 <= coins){
			coins -= coins10;
			pieces10++;
		}
		while (coins5 <= coins){
			coins -= coins5;
			pieces5++;
		}
		while(coins2 <= coins){
			coins -= coins2;
			pieces2++;
		}		
		while (coins1 <= coins){
			coins -= coins1;
			piece1++;
		}
		// while (coins == coins){
		pieces = pieces50 + pieces20 + pieces10 + pieces5 + pieces2 + piece1;
		// }
document.getElementById("pieces50").innerHTML = pieces50;
document.getElementById("pieces20").innerHTML = pieces20;
document.getElementById("pieces10").innerHTML = pieces10;
document.getElementById("pieces5").innerHTML = pieces5;
document.getElementById("pieces2").innerHTML = pieces2;
document.getElementById("piece1").innerHTML = piece1;
document.getElementById("pieces").innerHTML = pieces;
}
