//Created by felje...

function main_window(){
plybckrt();
var load1 = document.getElementById("Loading_js");
		load1.style.display = "block";

setTimeout(function (){
var load2 = document.getElementById("Loading_js");
		load2.style.display = "none";
},/*2900*/0000);

setTimeout(function (){
var main = document.getElementById("main_window_js");
		main.style.display = "block";
},/*2900*/0000);
}


function help(){
		var	hlp = document.getElementById("hw_js");
		hlp.style.display = "block";
		var	hlp1 = document.getElementById("help_js");
		hlp1.style.display = "none";
		var	hlp2 = document.getElementById("help1_js");
		hlp2.style.display = "block";
}

function help_a(){
		var	hlp3 = document.getElementById("hw_js");
		hlp3.style.display = "none";
		var	hlp4 = document.getElementById("help1_js");
		hlp4.style.display = "none";
		var	hlp5 = document.getElementById("help_js");
		hlp5.style.display = "block";
}




function  Setting() {
	var stg0 = document.getElementById("Setting1_js");
		  stg0.style.display = "block";
		  
	var stg1 = document.getElementById("Setting0_js");
	    stg1.style.display = "block";
	    
	var stg2 = document.getElementById("Setting_js");
	    stg2.style.display = "none";
}

function Setting0(){
  var stg_0 = document.getElementById("Setting1_js");
		  stg_0.style.display = "none";
		  
  var stg_1 = document.getElementById("Setting0_js");
	    stg_1.style.display = "none";
	    
  var stg_2 = document.getElementById("Setting_js");
	    stg_2.style.display = "block";
}




function ply(){
life_reset();
score_reset();
var	hlp6 = document.getElementById("hw_js");
		hlp6.style.display = "none";
var	hlp7 = document.getElementById("help_js");
		hlp7.style.display = "block";

    var hide1 = document.getElementById("main_window_js");
    hide1.style.display = "none";

			 var ply1 = document.getElementById("game_window-js");
			 ply1.style.display = "block";
			 
var hdi2 = document.getElementById("hdi1_js");
			hdi2.style.display ="block";		
			
	var cld1 = document.getElementById("clouds_hdi_js");
      cld1.style.display = "block";
}


//RESET LIFE
const life_reset = () => {
const reset_lf = document.querySelector("#lf_js").innerHTML;
const reset_lf1 = document.querySelector("#lf_js");
var count = Number(reset_lf);
reset_lf1.innerHTML = count +5;
}


//RESET SCORE
const score_reset = () => {
const reset_scr = document.querySelector("#score-counter").innerHTML;
const reset_scr1 = document.querySelector("#score-counter");
var count = Number(reset_scr);
reset_scr1.innerHTML = count = 0;
}





//SCORE INCREASE AND LEVEL UP
const increasescore = () => {
const scr1 = document.querySelector("#score-counter").innerHTML;
const score = document.querySelector("#score-counter");
var count = Number(scr1);
score.innerHTML = count +1;

 var z0=99;
 var z1=999;
 
 
if(scr1==z0|scr1==z1) {
  var cld = document.getElementById("clouds_hdi_js");
      cld.style.display = "none";
      
		var q = document.getElementById("hdi_1_js");
				q.style.display ="none";
				
		var qw = document.getElementById("level_up_100_js");
				qw.style.display ="block";
				
		var qwe = document.getElementById("level100_js");
				qwe.style.display = "block";			
				
				setTimeout(function (){
		var qwer = document.getElementById("level100_js");
				qwer.style.display = "none";
				},2000);
 }
}




function  plybckrt() {
document.getElementById("music0_js").playbackRate = 2;
document.getElementById("music1_js").playbackRate = 2;
document.getElementById("music2_js").playbackRate = 2;
document.getElementById("music3_js").playbackRate = 2;
document.getElementById("music4_js").playbackRate = 2;
document.getElementById("music5_js").playbackRate = 2;
}





function  ply_msc0() {
	var msc0 = document.getElementById("music0_js")	.play();
}
function  ply_msc1() {
	var msc1 = document.getElementById("music1_js").play();
}
function  ply_msc2() {
 var msc2 = document.getElementById("music2_js").play();
}
function  ply_msc3() {
 var msc3 = document.getElementById("music3_js").play();
}
function  ply_msc4() {
 var msc4 = document.getElementById("music4_js").play();
}
function  ply_msc5() {
  var msc5 = document.getElementById("music5_js").play();
}

function  failed() {
		var msc0 = document.getElementById("failed_js").
play();
}

function  failed1() {
		var msc0 = document.getElementById("failed1_js").
play();
}

function  failed2() {
	var msc0 = document.getElementById("failed2_js").
play();
}




function black_js() {
increasescore();
ply_msc0();
			var blck = document.getElementById("Black_js");
				blck.style.display ="none";	
				
				setTimeout(function (){
				var loop0 = document.getElementById("Black_js");
			 loop0.style.display = "block";
},3000);
}


function white_js() {
increasescore();
ply_msc1();
				var whte = document.getElementById("White_js");
				whte.style.display ="none";
				setTimeout(function (){
				var loop1 = document.getElementById("White_js");
			 loop1.style.display = "block";		 
},1000);
}


function sky_blue_js() {
increasescore();
ply_msc2();
	var sky_blue = document.getElementById("Sky_Blue_js");
				sky_blue.style.display ="none";
				setTimeout(function (){
				var loop2 = document.getElementById("Sky_Blue_js");
			 loop2.style.display = "block";
},1000);
}


function black1_js() {
increasescore();
ply_msc3();
				var blck1 = document.getElementById("Black1_js");
				blck1.style.display ="none";	
				setTimeout(function (){
				var loop3 = document.getElementById("Black1_js");
			 loop3.style.display = "block";
},1000);
}


function white1_js() {
increasescore();
ply_msc4();
				var whte1 = document.getElementById("White1_js");
				whte1.style.display ="none";
				setTimeout(function (){
				var loop4 = document.getElementById("White1_js");
			 loop4.style.display = "block";
},1000);
}


function sky1_blue_js() {
increasescore();
ply_msc5();
var sky1_blue = document.getElementById("Sky_Blue1_js");
				sky1_blue.style.display ="none";
				setTimeout(function (){
				var loop5 = document.getElementById("Sky_Blue1_js");
			 loop5.style.display = "block";
},1000);
}


function black2_js() {
drain_lf();
failed();
				var blck2 = document.getElementById("Black2_js");
				blck2.style.display ="none";
				
				setTimeout(function (){
				var loop6 = document.getElementById("Black2_js");
			 loop6.style.display = "block";
},1000);
}


function white2_js() {
drain_lf();
failed1();
				var whte2 = document.getElementById("White2_js");
				whte2.style.display ="none";	
				
				setTimeout(function (){
				var loop7 = document.getElementById("White2_js");
			 loop7.style.display = "block";
},1000);
}


function sky_blue2_js() {
drain_lf();
failed2();
				var sky2 = document.getElementById("Sky_Blue2_js");
				sky2.style.display ="none";	
				
				setTimeout(function (){
				var loop8 = document.getElementById("Sky_Blue2_js");
			 loop8.style.display = "block";
},1000);
}





// LOSE LIFE
const drain_lf = () => {
const lf = document.querySelector("#lf_js").innerHTML;
const life = document.querySelector("#lf_js");
var count = Number(lf);
life.innerHTML = count -1;


var lf1 = 1;
				
if (lf==lf1) {
var	GAMEover = document.getElementById("gameover_js");
		GAMEover.style.display = "block";
			
		var hdi1 = document.getElementById("hdi1_js");
				hdi1.style.display ="none";		
				
				
setTimeout(function (){
  var gmover = document.getElementById("gameover_js");
			gmover.style.display = "none";
},3000);

setTimeout(function (){
var mainloop = document.getElementById("main_window_js");
		mainloop.style.display = "block";
},3000);

//LEVEL_100 HIDE IF LOSE IN NORMAL LEVEL 
var ply_a = document.getElementById("level_up_100_js");
		ply_a.style.display = "none";
		
//NORMAL LEVEL DISPLAY AGAIN 
 var q_a = document.getElementById("hdi_1_js");
		 q_a.style.display ="block";

 }
}






function black_levelup_js() {
increasescore();
ply_msc0();
				var blck_lvlup = document.getElementById("Black_levelup_js");
				blck_lvlup.style.display ="none";	
				setTimeout(function (){
				var loop_lvlup = document.getElementById("Black_levelup_js");
			 loop_lvlup.style.display = "block";
},3000);
}


function white_levelup_js() {
increasescore();
ply_msc1();
				var whte_lvlup = document.getElementById("White_levelup_js");
				whte_lvlup.style.display ="none";
				setTimeout(function (){
				var loop1_lvlup = document.getElementById("White_levelup_js");
			 loop1_lvlup.style.display = "block";
},1000);
}


function sky_blue_levelup_js() {
increasescore();
ply_msc2();
	var sky_blue_lvlup = document.getElementById("Sky_Blue_levelup_js");
				sky_blue_lvlup.style.display ="none";
				setTimeout(function (){
				var loop2_lvlup = document.getElementById("Sky_Blue_levelup_js");
			 loop2_lvlup.style.display = "block";
},1000);
}


function black1_levelup_js() {
increasescore();
ply_msc3();
				var blck1_lvlup = document.getElementById("Black1_levelup_js");
				blck1_lvlup.style.display ="none";	
				setTimeout(function (){
				var loop3_lvlup = document.getElementById("Black1_levelup_js");
			 loop3_lvlup.style.display = "block";
},1000);
}


function white1_levelup_js() {
increasescore();
ply_msc4();
				var whte1_lvlup = document.getElementById("White1_levelup_js");
				whte1_lvlup.style.display ="none";
				setTimeout(function (){
				var loop4_lvlup = document.getElementById("White1_levelup_js");
			 loop4_lvlup.style.display = "block";
},1000);
}


function sky1_blue_levelup_js() {
increasescore();
ply_msc5();
var sky1_blue_lvlup = document.getElementById("Sky_Blue1_levelup_js");
				sky1_blue_lvlup.style.display ="none";
				setTimeout(function (){
				var loop5_lvlup = document.getElementById("Sky_Blue1_levelup_js");
			 loop5_lvlup.style.display = "block";
},1000);
}

/*
function design1(){
var de1 = document.getElementById("bdy1");
  de1.style.fontSizer = "20px";
}*/
