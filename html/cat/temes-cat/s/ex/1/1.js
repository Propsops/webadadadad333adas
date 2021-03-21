var punts = 10;
function call(){
    enviar(1, "l1", "bessó");
    enviar(2, "l2", "fracassar");
    enviar(3, "l3", "classe");
    enviar(4, "l4", "interessar");
    enviar(5, "l5", "monosilàbic");
    enviar(6, "l6", "pessar");
    enviar(7, "l7", "necessari");
    enviar(8, "l8", "pèsols");
    enviar(9, "l9", "casa");
    enviar(10, "l10", "absurda");
    enviar(11, "l11", "assignar");
    enviar(12, "l12", "absolut");
    enviar(13, "l13", "absència");
    enviar(14, "l14", "assentir");
    enviar(15, "l15", "bressol");
    enviar(16, "l16", "bescanvi");
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
