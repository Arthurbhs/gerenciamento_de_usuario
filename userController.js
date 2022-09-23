class UserController {

    constructor (formId, tableId){

        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit()

    }

    onSubmit(){

        this.formEl.addEventListener("submit", event => {

            event.preventDefault();
            this.formEl.querySelector( "[type = submit]");
            btn.disabled = true;

            let values = this.getValues();
            this.getPhoto().then(
            (content) => {
                values.photo = content;

                this.addLine(values);
            this.formEl.reset();
                btn.disabled = false;

            }, //LEMBRE-SE VIRGULA, NÃO PONTO E VIRGILa
              (e) => {
                //console.error mostra uma mensagem de erro
                console.error(e);


              });

            

           

        
        });

    }

    getPhoto(){
/* promise é semelhante a "try", caso o programa não consiga
executa-lo, ele executará o comando "reject"*/
        return new Promise((resolve, reject) => {

        let fileReader = new FileReader();
     //o spriter (...)
        let elements = [...this.formEl.elements].filter(item => {

            if (item.name === 'photo') {
                return item;
            }

        });

        let file = elements[0].files[0];
 // filereader
        fileReader.onload = () => {
// resolve chama promise
            resolve(fileReader.result);

        };
    // caso não execute resolve, o programa executará erro pelo reject     
        fileReader.onerror = (e)=>{
           
            reject(e);
        };

        // se for mandado uma foto, ele salvará, 
        if (file) {

        fileReader.readAsDataURL(file);
    } else {
        //se não, carrega a imagem do enderço "imagem branca"
        resolve('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAB5CAMAAACdtUQZAAAADFBMVEX////U1NTX19exsbFm9cvyAAAArUlEQVR4nO3dAQ3AQAwDsX7Hn/NQTNO9bAQ5BJlnz332mZ0b7Zy/J3zi6ErR1aKrRVeLrhZdLbpadLXoatHVoqtFV4uuFl0tulp0tehq0dWiq0VXi64WXS26WnS16GrR1aKrRVeLrhZdLbpadLXoatHVoqtFV4uuFl0tulp0tehq0dWiq0VXi64WXS26WnS16GrR1aKrRVeLrhZdLbpadLXoatHVcq7947j0P+UF0iACrQA7TIcAAAAASUVORK5CYII=');
    }
        });
}

    getValues(){

        let user = {};

        [...this.formEl.elements].forEach(function(field, index){

            if (field.name === "gender") {
    
                if (field.checked) {
                    user[field.name] = field.value
                }
    
            } else if(fild.name == "admin") {
                user[fild.name] = fild.checked;
            }

                
                
                else {
    
                user[field.name] = field.value
    
            }
    
        });
    
        return new User(
            user.name, 
            user.gender, 
            user.birth, 
            user.country, 
            user.email, 
            user.password, 
            user.photo, 
            user.admin
        );

    }

    
    addLine(dataUser) {
 let tr = document.createElement('try');

 tr.inner.HTML = `
        
            <tr>
                <td><img src=${dataUser.photo} class="img-circle img-sm"></td>
                <td>${dataUser.name}</td>
                <td>${dataUser.email}</td>
                <td>${dataUser.admin ?  'sim' : 'Não'} </td>
                <td>${dataUser.birth}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                    <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            </tr>
        `;
        // appendChild adiciona um novo elemento html como filho do anterior
            this.tableEl. appendChild(tr);
    }


}