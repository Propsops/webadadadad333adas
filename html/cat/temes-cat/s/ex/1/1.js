var punts = 10;
function call(){
    enviar(1, "l1", unescape("%62%65%73%73%F3"));
    enviar(2, "l2", unescape("%66%72%61%63%61%73%73%61%72"));
    enviar(3, "l3", unescape("%63%6C%61%73%73%65"));
    enviar(4, "l4", unescape("%69%6E%74%65%72%65%73%73%61%72"));
    enviar(5, "l5", unescape("%6D%6F%6E%6F%73%69%6C%E0%62%69%63"));
    enviar(6, "l6", unescape("%70%65%73%73%61%72"));
    enviar(7, "l7", unescape("%6E%65%63%65%73%73%61%72%69"));
    enviar(8, "l8", unescape("%70%E8%73%6F%6C%73"));
    enviar(9, "l9", unescape("%63%61%73%61"));
    enviar(10, "l10", unescape("%61%62%73%75%72%64%61"));
    enviar(11, "l11", unescape("%61%73%73%69%67%6E%61%72"));
    enviar(12, "l12", unescape("%61%62%73%6F%6C%75%74"));
    enviar(13, "l13", unescape("%61%62%73%E8%6E%63%69%61"));
    enviar(14, "l14", unescape("%61%73%73%65%6E%74%69%72"));
    enviar(15, "l15", unescape("%62%72%65%73%73%6F%6C"));
    enviar(16, "l16", unescape("%62%65%73%63%61%6E%76%69"));
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
