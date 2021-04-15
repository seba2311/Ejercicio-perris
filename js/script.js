function mensaje(){
    alert('hola mundo')
}
//repetir para cada caja
function validaNombre(){
    var nombre = document.getElementById('txtNombre').value;
    if(nombre.trim().length==0){
        alert('nombre vacio')
        return false
    }
    return true;
}

function validarRut() {
    var rut= document.getElementById('txtRut').value;
    //alert(rut);
    var num=3;
    var suma=0;
    for (let index = 0; index < 8; index++) {
        var caracter = rut.slice(index,index+1)
       // alert(caracter+ 'x'+ num);
       suma=suma+(caracter*num);
        num = num-1;
        if (num==1) {
            num=7;
        }
    }
   // alert('suma:'+suma);
    var resto=suma % 11;
    var dv= 11-resto;
    if (dv>9) {
        if (dv==10) {
            dv='k';
        }else{
            dv=0;
        }
        
    }
   // alert('DV; '+dv)
   var dv_usuario=rut.slice(-1).toUpperCase();
   if (dv!=dv_usuario) {
       alert('rut incorrecto');
       return false
   }
   return true;
}