
var on=false;
var d='',c='';
function sp(a){
	if (!on) {
		if(scr.value==0){
			scr.value="";
		}
	    scr.value += a;	
	    if (a=='sqrt') {
		d=a;
		console.log(d)	
	    }
	    else if (a=='abs') {
		d=a;
		console.log(d)	
	    }
	     
	    else if (a=='Sin') {
		d=a;
		console.log(d)	
	    }
	    else if (a=='Cos') {
		d=a;
		console.log(d)	
	    }
	    else if (a=='Tan') {
		d=a;
		console.log(d)	
	    }
	    else if (a=='EXP') {
		d=a;
		console.log(d)	
	 }
	else if (a=='Log') {
		d=a;
		console.log(d)	
	}
	else if (a=='cbrt') {
		d=a;
		console.log(d)	
	}

	else{
		c+=a;
		console.log(c)
	}
	
	}
}
function ast6(){
	if (d=='sqrt') {
	scr.value=Math.sqrt(c);
	c="";
	}
	
	else if (d=='Sin') {
	scr.value=Math.sin(c*Math.PI/180).toFixed(4);
	c="";
     }
	else if (d=='Cos') {
	scr.value=Math.cos(c*Math.PI/180).toFixed(4);
	c="";
	}
	else if (d=='Tan') {
	scr.value=Math.tan(c*Math.PI/180).toFixed(4);
	c="";
    }

    else if (d=='cbrt') {
	scr.value=Math.cbrt(c);
	c="";
    }
     else if (d=='Log') {
	scr.value=Math.log(c).toFixed(4);
	c="";
    }
 
	else{
		scr.value=eval(scr.value)
	}
	
}

 function sq2(){
  scr.value	=Math.pow(c,2);
  c="";
}
function pt(){
	scr.value=Math.abs(c);

}
function md(){
	scr.value+='%'
}
function sst(){                                                       
	scr.value=Math.LN10 ; 
}
 function tp(){
	scr.value=Math.cbrt(c);
}

function jo(){
	scr.value=Math.round(c);
}
function spt(){
	scr.value=Math.PI ;
}
function spot(){
	scr.value=Math.E ;
}



function changeSign(input){
			if (scr.value.substring(0,1)=="-")
				scr.value=scr.value.substring(1,scr.value.length)
			else
				scr.value="-"+scr.value
		}


function de(){
  scr.value=scr.value.slice(0,-1);
  scr.value = "0";
  c = "";
}

function cl(){
  scr.value="0"
    c = "";
}

var on=false;
function light1(){
		if (on) {
	    pl.value="OFF";
	    on=false;
	    document.getElementById('scr').value="0";
		}
		else{
	    pl.value="ON";	
	    on=true;
	    document.getElementById('scr').value=" ";
	}
}
light1() 