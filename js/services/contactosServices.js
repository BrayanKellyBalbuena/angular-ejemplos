

'js/services/contactosServices.js'

app.service('ContactosServices', function(){

    var contadorContactos = 1;
    var contactos = [{
        id: 0,
        nombre: 'Brayan Kelly',
        correo: 'the.script.bryan07@gmail.com',
        telefono: '123456789'
    }];

    this.getContactos =  function(){
        return contactos;
    }

    this.save = function(contacto){
        if(contacto.id == null){
            contacto.id = contadorContactos;
            contadorContactos++;
            contactos.push(contacto);
        } else{
            for(i in contactos){
                if(contactos[i].id == contacto.id){
                    contactos[i] = contacto;
                }
            }
        }
      
    }

    this.delete = function(id){
        for(contacto in contactos){
            if(contactos[contacto].id === id) {
                contactos.splice(contacto, 1);
            }
        }
    }

    this.getContacto = function(id){
        for(contacto in contactos){
            if(contactos[contacto].id === id) {
                return contactos[contacto];
            }
        }
    }

});