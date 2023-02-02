const form = document.querySelector("#form");                       
const erroNome = document.getElementById("erroNome");               
const erroEmail = document.getElementById("erroEmail");             
const erroPhone = document.getElementById("erroPhone");             
const erroCPF = document.getElementById("erroCPF");                 
const erroPassword = document.getElementById("erroPassword");       
const sucess = document.getElementById("sucess");                   




const nome = document.getElementById("name");             
const email = document.getElementById("email");      
const phone = document.getElementById("phone");     
const cpf = document.getElementById("CPF");          
const senha = document.getElementById("password");    

const erroMsg = "*Campo Obrigatório*" 

form.addEventListener('submit', function(event){   
    event.preventDefault();       


    
    if(nome.value===''){
        erroNome.style.visibility = 'visible'
        erroNome.textContent = erroMsg
    }else{
        erroNome.style.visibility = 'hidden'
    };

    if(email.value===''){
        erroEmail.style.visibility = 'visible'
        erroEmail.textContent = erroMsg
    }else{
        erroEmail.style.visibility = 'hidden'
    };

    if(phone.value===''){
        erroPhone.style.visibility = 'visible'
        erroPhone.textContent = erroMsg
    }else{
        erroPhone.style.visibility = 'hidden'
    };

    if(cpf.value===''){
        erroCPF.style.visibility = 'visible'
        erroCPF.textContent = erroMsg
    }else{
        erroCPF.style.visibility = 'hidden'
    };

    if(senha.value===''){
        erroPassword.style.visibility = 'visible'
        erroPassword.textContent = erroMsg
    }else{
        erroPassword.style.visibility = 'hidden'
    }; 

    

    if(nome.value!='' && email.value!='' && phone.value!='' && cpf.value!='' && senha.value!= ''){
        sucess.textContent = "Sucesso!"         
        sucess.style.color = "#05f805"          

        sucess.style.visibility = 'visible'
        erroNome.style.visibility = 'hidden'
        erroEmail.style.visibility = 'hidden'
        erroPhone.style.visibility = 'hidden'
        erroCPF.style.visibility = 'hidden'
        erroPassword.style.visibility = 'hidden'

    }else{
        sucess.textContent= "Campos obrigatórios não registrados.";         
        sucess.style.color = "red";                                         
        sucess.style.visibility = 'visible';

    };
}
)
