function show(){
    document.getElementById("click").style.visibility="visible"
}

function hide(){
    document.getElementById("click").style.visibility="hidden";
}

n1=0;
function hovered1(){
    n1=n1+1;
    document.getElementById("img1").innerHTML=n1;
}

n2=0;
function hovered2(){
    n2=n2+1;
    document.getElementById("img2").innerHTML=n2;
}

n3=0;
function hovered3(){
    n3=n3+1;
    document.getElementById("img3").innerHTML=n3;
}