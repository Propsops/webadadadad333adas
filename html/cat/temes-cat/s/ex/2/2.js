var punts = 10;
function call(){
    enviar(1, "l1", unescape("%66%6F%72%E7%61%72"));
    enviar(2, "l2", unescape("%63%61%6D%69%73%61"));
    enviar(3, "l3", unescape("%65%6E%64%69%6E%73%61"));
    enviar(4, "l4", unescape("%66%61%E7%61%6E%61"));
    enviar(5, "l5", unescape("%74%65%72%72%61%73%73%61"));
    enviar(6, "l6", unescape("%65%6D%70%61%73%73%61%72"));
    enviar(7, "l7", unescape("%65%73%70%65%73%73%69%72"));
    enviar(8, "l8", unescape("%65%6E%72%6F%73%73%69%72"));
    enviar(9, "l9", unescape("%46%72%61%6E%E7%61"));
    enviar(10, "l10", unescape("%65%6E%66%6F%6E%73%65%6E"));
    enviar(11, "l11", unescape("%65%6D%62%75%73%73%61%64%61"));
    enviar(12, "l12", unescape("%6D%75%64%61%6E%E7%61"));
    enviar(13, "l13", unescape("%E9%73%73%65%72"));
    enviar(14, "l14", unescape("%74%72%61%76%65%73%73%61"));
    enviar(15, "l15", unescape("%63%61%6C%E7%6F%74%61%64%61"));
    enviar(16, "l16", unescape("%66%61%6C%E7"));
    alert("Has tret un "+punts.toString());
    punts=10;
}



function enviar(iid, lid, cor){
    var xvalue = document.getElementById(iid).value;
    if(xvalue==cor){
       document.getElementById(lid).innerHTML = cor;
       document.getElementById(lid).style.color = "green";

    }
    else{
       document.getElementById(lid).innerHTML = cor;
       document.getElementById(lid).style.color = "red";
        punts = punts - 0.625;
    }
    
}

