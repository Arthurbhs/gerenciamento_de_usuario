
// forEach junto com querySelectorAll consegue capturar os valores de cada objeto do documento index
var fields = document.querySelectorAll("#form-user-create [name]");
var user = {}; 

fields.forEach(function(field, index){
// aqui usamos o comando if para retormos apenas o valor selecionado dos radios genero (gender) 
    if (field.name === "gender") {

        if (field.checked) {
            user[field.name] = field.value
        }

    } else {

        user[field.name] = field.value

    }

});

console.log(user)