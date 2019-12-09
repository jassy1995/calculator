var a ="";
var on=false
var d='',c='';
function n(a){
	if (!on) {
		if(scn.value==0){
			scn.value="";
		}
	if (a=='sqrt') {
		d=a;
		console.log(d)	
	}
	
	
	else{
		c+=a;
		console.log(c)
	}
	scn.value+=a;
	}else{
		scn.value="";
	}
}
function ast6(){
	if (d=='sqrt') {
	scn.value=Math.sqrt(c)
	c="";
	}
	
	else{
		scn.value=eval(scn.value)
	}
 }
function de(){
  scn.value=scn.value.slice(0,-1);
  // scn.value="0";
    
}
function cl(){
  scn.value=""

    
}

function light1(){
		if (on) {
	    ax.value="OFF";
	    on=false;
	    document.getElementById('scn').value="0";
		}
		else{
	    ax.value="ON";	
	    on=true;
	    document.getElementById('scn').value=" ";
}
}
light1()