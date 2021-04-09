
let tentativas = 0;
let numeroSecreto = parseInt(Math.random() * 20);


function Verifica() {
    const campo = document.getElementById("campo");
    const chute = campo.value;  

    if(chute == numeroSecreto ) {
        alert("Voce acertou! Jogue novamente!");
        numeroSecreto = parseInt(Math.random() * 20);
        tentativas = 0;
               
    }else if (chute > numeroSecreto) {
        alert("O número secreto é menor");
        tentativas++
        
    }else if (chute < numeroSecreto) {
        alert("Número secreto é maior"); 
        tentativas++
        
    } 
    
    if(tentativas == 3){
        alert("Suas tentativos acabaram. O número secreto era " + numeroSecreto + " Tente novamente"); 
        tentativas = 0;
        numeroSecreto = parseInt(Math.random() * 20);
    }
    campo.value=""
    
   

}



        


    
