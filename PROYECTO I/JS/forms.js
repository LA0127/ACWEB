function validar(formulario){
    if(formulario.nombre.value.length < 3){
        alert("Escriba por lo menos 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        }
       
        var checkOk = "QWERTYUIOPASDFGHJKLZXCVBNM" +
        "qwertyuiopasdfghjklzxcvbnm";
        var checkString = formulario.nombre.value;

        var TodoEsValido = true;
        for (var i = 0; i < checkString.length; i++) {
            var ch = checkString.charAt(i);
            for (var j = 0; j < checkOk.length; j++) {
                if (ch == checkOk.charAt(j)) {
                    break;
                }
            }
            if (j == checkOk.length) {
                TodoEsValido = false;
                break;
            }
        }
        if (!TodoEsValido) {
            alert("Escribe bien tu nombre hermanito");
            formulario.nombre.focus();
            var checkOK = "QWERTYUIOPASDFGHJKLZXCVBNM" +
            "qwertyuiopasdfghjklzxcvbnm";
            
            var checkString = formulario.appat.value;
        
            var todoesvalido = true;
        
            for(var i = 0; i < checkString.length; i++){
                var ch = checkString.charAt(i);
                for(var j = 0; j < checkOK.length; j++){
                    if(ch == checkOK.charAt(j)){
                        break;
                    }
                }
                if(j == checkOK.length){
                    todoesvalido = false;
                    break;
                }
            }
            if(!todoesvalido){
                alert("Escribe bien tu apellido");
                formulario.appat.focus();

            }
                var checkOK = "QWERTYUIOPASDFGHJKLZXCVBNM" +
                "qwertyuiopasdfghjklzxcvbnm";
                
                var checkString = formulario.apmat.value;
            
                var todoesvalido = true;
            
                for(var i = 0; i < checkString.length; i++){
                    var ch = checkString.charAt(i);
                    for(var j = 0; j < checkOK.length; j++){
                        if(ch == checkOK.charAt(j)){
                            break;
                        }
                    }
                    if(j == checkOK.length){
                        todoesvalido = false;
                        break;
                    }
                }
                if(!todoesvalido){
                    alert("Escribe bien tu segundo apellido");
                    formulario.apmat.focus();
                    return false;
                }
        
            var txt = formulario.correo.value;
        
            var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;
        
            alert("Email " + (b.test(txt)? " ": " no ")+ "valido");
        
            return b.test;
        }
}
