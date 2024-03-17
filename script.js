function tabuada(){
    let num = document.getElementById('t1')
    let campo = document.getElementById('tabu')
    let numero = Number(num.value)
    if(num.value.length == 0 || num.value <=0){

        alert('Número negativo e zero não são permitidos, Digite um Número')
    }else{
        campo.innerHTML = ''
       
        for(c = 1; c<=10 ; c++){
            let itens = document.createElement("option");
            itens.innerHTML = `${numero} X ${c} = ${numero*c}`
            campo.appendChild(itens)


        }



    }




}