var punts = 10;
function call(){
    enviar(1, "l1", "forçar");
    enviar(2, "l2", "camisa");
    enviar(3, "l3", "endinsa");
    enviar(4, "l4", "façana");
    enviar(5, "l5", "terrassa");
    enviar(6, "l6", "empassar");
    enviar(7, "l7", "espessir");
    enviar(8, "l8", "enrossir");
    enviar(9, "l9", "França");
    enviar(10, "l10", "enfonsen");
    enviar(11, "l11", "embussada");
    enviar(12, "l12", "mudança");
    enviar(13, "l13", "ésser");
    enviar(14, "l14", "travessa");
    enviar(15, "l15", "calçotada");
    enviar(16, "l16", "falç");
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

