function validateForm(){
    //validar nombre
    var name=document.getElementById('name').value;
    if(name.length==0){
        alert("Debe ingresar su nombre");
        return false;
    }
    validarLetras(name);
    validarMayus(name);
    //valida que sea solo letras 
    function validarLetras(nombre){
        var filter6=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
        if (filter6.test(nombre)){
            return true;
        }else{
         alert("Debe Ingresar solo letras");
        } 
    }
    //valida primera con mayuscula
    function validarMayus(nombre){
        if(nombre.substring(0,1)==nombre.substring(0,1).toUpperCase()){
            return true;
        }else{
            alert("Debe comenzar con Mayuscula");
            return false;
        }
    }

    
    //validar apellido
    var lastName=document.getElementById('lastname').value;
    if(lastName.length==0){
        alert("Debe ingresar su Apellido");
        return false;
    }
    validarLetras(lastName);
    validarMayus(lastName);
    

  

    //validar password
    var pass=document.getElementById('input-password').value;
    //campo obligatorio
    if(pass.length==0){
        alert("Falta Ingresar Password");
        return false;
    }
    // condicio que password sea distinto a 123456 098754
    if(pass!="123456" && pass!="098754"){

        if(pass.length>=6){
            return true;
        }else{
            alert("Su contraseña debe tener al menos 6 caracteres");
        }
    }else{
        alert("Su contraseña no puede ser ni 123456 ni 098754");
    }
    

    //validar email
    var mail = document.getElementById("input-email").value;

    if(mail.length==0){
        alert("Debe ingresar su mail");
        return false;
    }

    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {
        return false;

    }

    //validar lista pendiente
    var opcionBici = document.getElementsByClassName("form-control").selectedIndex;
    if( opcionBici == null || opcionBici == 0 ) {
        alert("Elija una opcion de la lista");
        return false;
    }



    /* Escribe tú código aquí */
}